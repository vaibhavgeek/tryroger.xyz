import { useState, useEffect, useRef } from 'react';
import * as motion from 'motion/react-client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
          className="feature-block feature-normal"
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
                  <div className="tone-bubble bubble-warn bubble-warn-mobile bubble-warn-tablet bubble-warn-small">
                    Warns you about the tone
                  </div>
                  <div className="tone-bubble bubble-suggest bubble-suggest-mobile bubble-suggest-tablet bubble-suggest-small">
                    Suggests a better response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Centered Lottie Animation */}
        <div className="lottie-center-wrapper">
          <div className="lottie-feature">
            <DotLottieReact
              src="/Dance cat.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        {/* Feature 2: The Contextual Companion */}
        <motion.div
          className="feature-block feature-reverse"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3 }}
          variants={rightVariants}
        >
          <div className="feature-content">
            <h3 className="feature-number">2.</h3>
            <h2 className="feature-title"><span className="title-roger">Roger</span> <span className="title-relationships">Decisions</span></h2>
            <p className="feature-subheading">
              Stop the Copy Paste Madness
            </p>
            <p className="feature-subtext">
              Roger also helps with what to text and not just how. Want to get attention of right people? Comment on their X Post with Roger.
            </p>



          </div>
          <div className="feature-visual">
            <div className="decision-images-container">
              <img src="/dec_1.jpg" alt="Social media context example" className="decision-image decision-image-1" />
              <img src="/dec2_2.jpg" alt="Roger Cat response suggestions" className="decision-image decision-image-2" />

              <div className="decision-bubbles">
                <div className="decision-bubble bubble-copy-content bubble-copy-mobile bubble-copy-tablet bubble-copy-small">
                  Copy content to add to roger memory
                </div>
                <div className="decision-bubble bubble-down-button bubble-down-mobile bubble-down-tablet bubble-down-small">
                  Click on down button to input it
                </div>
                <div className="decision-bubble bubble-chat-roger bubble-chat-mobile bubble-chat-tablet bubble-chat-small">
                  Chat with roger
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Swype */}
        <motion.div
          className="feature-block feature-normal"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3 }}
          variants={leftVariants}
        >
          <div className="feature-content">
            <h3 className="feature-number">3.</h3>
            <h2 className="feature-title"><span className="title-roger">Roger</span> <span className="title-relationships">Swype</span></h2>
            <p className="feature-subheading">
              The best swype algorithm there is.
            </p>
            <p className="feature-subtext">
              The iOS keyboards' swiping recognition annoyed us, so we sent our engineer to a cave to build out the best algorithm there is for gesture typing, and he delivered.
            </p>
          </div>
          <div className="feature-visual">
            <img
              src="/swype.gif"
              alt="Roger Swype gesture typing demo"
              className="swype-demo-gif"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;
