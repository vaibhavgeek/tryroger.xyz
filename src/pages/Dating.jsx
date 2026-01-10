import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

function Dating() {
  return (
    <main className="usecase-page">
      <section className="usecase-hero">
        <div className="usecase-container">
          <Link to="/" className="back-link">
            <span className="back-arrow">←</span> Back to Home
          </Link>

          <h1 className="usecase-title">
            Perfect Messages for <span className="highlight">Dating</span>
          </h1>

          <p className="usecase-subtitle">
            Never send a cringe text again. Roger helps you craft the perfect message for every match.
          </p>

          <div className="usecase-content">
            <div className="usecase-features">
              <div className="usecase-feature">
                <div className="feature-icon">💬</div>
                <h3>Tone Detection</h3>
                <p>Roger warns you before you send that "too eager" or "too cold" message. Get real-time feedback on how your text might come across.</p>
              </div>

              <div className="usecase-feature">
                <div className="feature-icon">✨</div>
                <h3>Smart Suggestions</h3>
                <p>Stuck on what to say? Roger suggests witty, charming responses that match your personality and the conversation context.</p>
              </div>

              <div className="usecase-feature">
                <div className="feature-icon">🎯</div>
                <h3>Context Aware</h3>
                <p>Whether it's a first message, asking for a date, or keeping the conversation going - Roger understands the context and helps accordingly.</p>
              </div>
            </div>

            <div className="usecase-examples">
              <h2>Works with all dating apps</h2>
              <p>Tinder, Bumble, Hinge, OkCupid, and more. Roger works right in your keyboard on any app.</p>
            </div>
          </div>

          <div className="usecase-cta">
            <CTAButton theme="dark" showCat={false} launched={false} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dating;
