import { useEffect, useRef, useState, useCallback } from 'react';
import { calculatePupilPosition, createBlinkInterval, rafThrottle } from '../utils/eyeTracking';

function Eyes({ isMenuHovered }) {
  const [isBlinking, setIsBlinking] = useState(false);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  // Handle eye movement
  const handleMouseMove = useCallback(
    rafThrottle((e) => {
      if (isMenuHovered) return;

      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;
      const leftPupil = leftPupilRef.current;
      const rightPupil = rightPupilRef.current;

      if (leftEye && leftPupil) {
        const leftRect = leftEye.getBoundingClientRect();
        const leftPos = calculatePupilPosition(leftRect, e.clientX, e.clientY);
        leftPupil.style.transform = `translate(${leftPos.x}px, ${leftPos.y}px)`;
      }

      if (rightEye && rightPupil) {
        const rightRect = rightEye.getBoundingClientRect();
        const rightPos = calculatePupilPosition(rightRect, e.clientX, e.clientY);
        rightPupil.style.transform = `translate(${rightPos.x}px, ${rightPos.y}px)`;
      }
    }),
    [isMenuHovered]
  );

  // Set up mouse move listener
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Set up blinking
  useEffect(() => {
    const cleanup = createBlinkInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    });
    return cleanup;
  }, []);

  // Reset pupils to center when menu is hovered
  useEffect(() => {
    if (isMenuHovered) {
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = 'translate(0, 0)';
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = 'translate(0, 0)';
      }
    }
  }, [isMenuHovered]);

  return (
    <div className={`eyes ${isBlinking ? 'blink' : ''}`}>
      <div className="left eye" ref={leftEyeRef}>
        <div>
          <span>
            <span className="pupil" ref={leftPupilRef}></span>
          </span>
        </div>
      </div>
      <div className="right eye" ref={rightEyeRef}>
        <div>
          <span>
            <span className="pupil" ref={rightPupilRef}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
