import { useState } from 'react';
import { motion } from 'motion/react';
import { AppStoreButton } from 'react-mobile-app-button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function CTAButton({ theme = 'light', showCat = true, launched = false }) {
  const iOSUrl = 'https://apps.apple.com/us/app/expo-go/id982107779';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/mkonnepn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setSubmitted(true);
          setEmail('');
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

      {launched ? (
        <AppStoreButton
          url={iOSUrl}
          theme={theme}
          className="custom-style"
          width={260}
          height={80}
        />
      ) : (
        <form className="waitlist-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="waitlist-success">
              Thanks! You're on the list.
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="waitlist-input"
                required
              />
              <button type="submit" className="waitlist-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </>
          )}
        </form>
      )}
    </motion.div>
  );
}

export default CTAButton;
