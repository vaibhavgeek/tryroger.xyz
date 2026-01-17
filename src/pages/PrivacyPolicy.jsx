import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container">
          <Link to="/" className="back-link">
            <span className="back-arrow">←</span> Back to Home
          </Link>

          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-effective">Effective Date: January 17, 2025</p>

          <div className="privacy-content">
            <p className="privacy-intro">
              Roger ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
            </p>

            <div className="privacy-section">
              <h2>1. Information We Collect</h2>

              <h3>Information You Provide</h3>
              <ul>
                <li>Account information (email address, name)</li>
                <li>User-generated content and messages you choose to analyze</li>
                <li>Feedback and correspondence you send to us</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (features used, interaction patterns, app performance data)</li>
                <li>Log data (access times, pages viewed, app crashes)</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and analyze text to provide contextual suggestions</li>
                <li>Personalize your experience within the App</li>
                <li>Communicate with you about updates, support, and promotional offers</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. Your data is encrypted in transit and at rest. We retain your information only for as long as necessary to fulfill the purposes outlined in this policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2>4. Third-Party Services</h2>
              <p>
                Our App may use third-party services that collect information. These services have their own privacy policies and we encourage you to review them:
              </p>
              <ul>
                <li>Analytics providers</li>
                <li>Cloud hosting services</li>
                <li>AI/ML processing services</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of promotional communications</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us at the email address provided below.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Children's Privacy</h2>
              <p>
                Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div className="privacy-section">
              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="privacy-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="contact-email">
                <strong>Email:</strong> privacy@tryroger.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
