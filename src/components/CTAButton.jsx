import { useState } from 'react';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function CTAButton({ theme = 'light', showCat = true }) {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/mkonnepn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone }),
        });
        if (response.ok) {
          setSubmitted(true);
          setPhone('');
        }
      } catch (error) {
        console.error('Submission error:', error);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="cta-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {showCat && (
        <div className="lottie-animation">
          <DotLottieReact
            src="/Cat Movement.lottie"
            loop
            autoplay
          />
        </div>
      )}

      <form className="waitlist-form" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="waitlist-success">
            Roger will text you shortly!
          </div>
        ) : (
          <>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="waitlist-input"
              required
            />
            <button type="submit" className="waitlist-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : "Let's Chat"}
            </button>
          </>
        )}
      </form>

      <p className="cta-subtitle">
        Roger calls you. Free. Private.<br /><br />
        Talk to Roger everyday for 5 minutes, see an improved life.
      </p>
    </motion.div>
  );
}

export default CTAButton;
