// Eye Tracking Utilities for Ribbit Menu

// Configuration
const MAX_MOVE = 6; // Maximum pixels the pupil can move from center

/**
 * Calculate the new position for an eye's pupil based on mouse position
 * @param {DOMRect} eyeRect - The bounding rectangle of the eye element
 * @param {number} mouseX - The X coordinate of the mouse
 * @param {number} mouseY - The Y coordinate of the mouse
 * @returns {Object} - The x and y translation values for the pupil
 */
export function calculatePupilPosition(eyeRect, mouseX, mouseY) {
  // Calculate center of the eye
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  // Calculate distance between mouse and eye center
  const dx = mouseX - eyeCenterX;
  const dy = mouseY - eyeCenterY;

  // Calculate angle
  const angle = Math.atan2(dy, dx);

  // Calculate distance (clamped to maxMove)
  const dist = Math.min(MAX_MOVE, Math.hypot(dx, dy) / 10);

  // Calculate new position
  const moveX = Math.cos(angle) * dist;
  const moveY = Math.sin(angle) * dist;

  return { x: moveX, y: moveY };
}

/**
 * Create a blink interval that triggers at random intervals
 * @param {Function} onBlink - Callback function to trigger when a blink occurs
 * @param {number} minInterval - Minimum time between blinks in ms (default: 2000)
 * @param {number} maxInterval - Maximum time between blinks in ms (default: 6000)
 * @returns {Function} - A cleanup function to clear the timeout
 */
export function createBlinkInterval(onBlink, minInterval = 2000, maxInterval = 6000) {
  let timeoutId = null;

  const scheduleNextBlink = () => {
    const interval = Math.random() * (maxInterval - minInterval) + minInterval;
    timeoutId = setTimeout(() => {
      onBlink();
      scheduleNextBlink();
    }, interval);
  };

  // Start the first blink after initial delay
  timeoutId = setTimeout(() => {
    onBlink();
    scheduleNextBlink();
  }, 2000);

  // Return cleanup function
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in ms
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Request animation frame throttle for smooth animations
 * @param {Function} callback - The callback to throttle
 * @returns {Function} - The throttled function
 */
export function rafThrottle(callback) {
  let requestId = null;

  return function throttled(...args) {
    if (requestId === null) {
      requestId = requestAnimationFrame(() => {
        callback.apply(this, args);
        requestId = null;
      });
    }
  };
}
