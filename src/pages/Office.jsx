import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

function Office() {
  return (
    <main className="usecase-page">
      <section className="usecase-hero">
        <div className="usecase-container">
          <Link to="/" className="back-link">
            <span className="back-arrow">←</span> Back to Home
          </Link>

          <h1 className="usecase-title">
            Professional Messaging for the <span className="highlight">Office</span>
          </h1>

          <p className="usecase-subtitle">
            Communicate with confidence. Roger helps you strike the right tone in workplace conversations.
          </p>

          <div className="usecase-content">
            <div className="usecase-features">
              <div className="usecase-feature">
                <div className="feature-icon">📧</div>
                <h3>Professional Tone</h3>
                <p>Roger ensures your messages maintain the right level of professionalism - whether you're chatting with colleagues or emailing executives.</p>
              </div>

              <div className="usecase-feature">
                <div className="feature-icon">⚡</div>
                <h3>Quick Responses</h3>
                <p>Save time with smart suggestions for common workplace scenarios. Acknowledge messages, schedule meetings, or follow up - instantly.</p>
              </div>

              <div className="usecase-feature">
                <div className="feature-icon">🤝</div>
                <h3>Diplomatic Language</h3>
                <p>Navigate tricky workplace conversations with ease. Roger helps you say what you mean without burning bridges.</p>
              </div>
            </div>

            <div className="usecase-examples">
              <h2>Works across all platforms</h2>
              <p>Slack, Teams, Email, LinkedIn - Roger integrates seamlessly with your keyboard on any communication platform.</p>
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

export default Office;
