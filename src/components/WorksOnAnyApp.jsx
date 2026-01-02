import * as motion from 'motion/react-client';
import AnyAppGrid from './AnyAppGrid';

function WorksOnAnyApp() {
  return (
    <section className="works-any-app-section">
      <div className="works-any-app-container">
        <motion.h2
          className="works-any-app-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Stay Connected Anywhere, Anytime
        </motion.h2>
        <motion.div
          className="works-any-app-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnyAppGrid />
        </motion.div>
      </div>
    </section>
  );
}

export default WorksOnAnyApp;
