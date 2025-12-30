import { useState, useEffect, useRef } from 'react';
import * as motion from 'motion/react-client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnyAppGrid from './AnyAppGrid';

// Animation variants for features sliding from left (odd: 1, 3)
const leftVariants = {
  offscreen: {
    x: -150,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

// Animation variants for features sliding from right (even: 2)
const rightVariants = {
  offscreen: {
    x: 150,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

function Features() {
  const [meterProgress, setMeterProgress] = useState(0);
  const meterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate meter from 0 to 100 when in view (slowly to positive)
            let progress = 0;
            const interval = setInterval(() => {
              progress += 1;
              if (progress <= 100) {
                setMeterProgress(progress);
              } else {
                clearInterval(interval);
              }
            }, 30);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (meterRef.current) {
      observer.observe(meterRef.current);
    }

    return () => {
      if (meterRef.current) {
        observer.unobserve(meterRef.current);
      }
    };
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">

        {/* Feature 1: Saved countless relationships */}
        <motion.div
          className="feature-block"
          ref={meterRef}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3 }}
          variants={leftVariants}
        >
          <div className="feature-content">
            <h3 className="feature-number">1.</h3>
            <h2 className="feature-title"><span className="title-roger">Roger</span> <span className="title-relationships">Relationships</span></h2>
            <p className="feature-subheading">
              Don't ruin your relationships over an angry text. 
            </p>
            <p className="feature-subtext">
              Roger warns you by changing it's colors when you are about to share an angry/overtly excited/passive aggresive text. We also suggest a better text you can send instead.
            </p>
          </div>
          <div className="feature-visual">
            <div className="meter-container">
              <div className="meter-bar">
                <div className="meter-gradient"></div>
                <div
                  className="meter-pointer"
                  style={{ left: `${meterProgress}%` }}
                >
                  <div className="pointer-arrow"></div>
                </div>
              </div>
              <div className="meter-labels">
                <span>Negative</span>
                <span>Neutral</span>
                <span>Positive</span>
              </div>

              {/* Tone demo with image and text bubbles */}
              <div className="tone-demo-container">
                <img
                  src="/image_tone.jpg"
                  alt="Tone detection demo"
                  className="tone-demo-image"
                />
                <div className="tone-bubbles">
                  <div className="tone-bubble bubble-warn">
                    Warns you about the tone
                  </div>
                  <div className="tone-bubble bubble-suggest">
                    Suggests a better response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: The Contextual Companion */}
        <motion.div
          className="feature-block"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3 }}
          variants={rightVariants}
        >
          <div className="feature-content">
            <h3 className="feature-number">2.</h3>
            <h2 className="feature-title"><span className="title-roger">Roger</span> <span className="title-relationships">Decisions</span></h2>
            <p className="feature-description">
              Just copy text to add to context, this brings the right context to
              conversation and the conversation handler suggests changes to be made.
            </p>
          </div>
          <div className="feature-visual">
            <div className="lottie-feature">
              <DotLottieReact
                src="/Dance cat.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Any App */}
        <motion.div
          className="feature-block"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3 }}
          variants={leftVariants}
        >
          <div className="feature-content">
            <h3 className="feature-number">3.</h3>
            <h2 className="feature-title"><span className="title-roger">Roger</span> <span className="title-relationships">Any App</span></h2>
            <p className="feature-description">
              Works seamlessly with all your favorite apps - messaging, social media, email, and more.
            </p>
          </div>
          <div className="feature-visual">
            <AnyAppGrid />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;
