import { useState, useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

export function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of phone is visible
      }
    );

    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => {
      if (phoneRef.current) {
        observer.unobserve(phoneRef.current);
      }
    };
  }, []);

  return (
    <section id="next-section" className="demo-section">
      <div className="demo-container">
        <div
          ref={phoneRef}
          className={`iphone-frame ${isVisible ? 'visible' : ''}`}
        >
          <div className="iphone-notch"></div>
          <div className="iphone-screen">
            {/* GIF will be added here later */}
            <div className="placeholder-content">
              <p>Demo GIF goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Hero({ scrollProgress = 0 }) {
  // Calculate transform values based on scroll - VERY strong parallax effect
  const scale = 1 - (scrollProgress * 0.5); // Scale from 1 to 0.5 (much more dramatic)
  const opacity = 1 - (scrollProgress * 3); // Fade out very fast
  const translateY = scrollProgress * -250; // Move up significantly as we scroll

  return (
    <section className="hero">
      <div className="hero-sticky">
        <div
          className="hero-content"
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity: Math.max(0, opacity),
            willChange: 'transform, opacity'
          }}
        >
          <h1>
            Meet Roger <br/>
          </h1>

          <br/>
          <h2>
            <span className="word-your">Your</span> <br/>
            <span className="word-contextual">Contextual</span> <br/>
            <span className="word-companion">Companion</span>
          </h2>

          <div className="hero-cta">
            <CTAButton theme="light" showCat={true} />
          </div>
        </div>
      </div>
      <Demo />
    </section>
  );
}



export default Hero;
