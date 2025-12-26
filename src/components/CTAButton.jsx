import { motion } from 'motion/react';
import { AppStoreButton } from 'react-mobile-app-button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function CTAButton({ theme = 'light', showCat = true }) {
  const iOSUrl = 'https://apps.apple.com/us/app/expo-go/id982107779';

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
      <AppStoreButton
        url={iOSUrl}
        theme={theme}
        className="custom-style"
        width={200}
        height={60}
      />
    </motion.div>
  );
}

export default CTAButton;
