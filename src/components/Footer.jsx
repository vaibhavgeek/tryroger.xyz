function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Roger</h3>
            <p>Your contextual companion for smarter conversations.</p>
            <p className="footer-contact">
              <strong>Support:</strong> +91 8369683781<br />
              <strong>Mail:</strong> <a href="mailto:support@tryroger.xyz">support@tryroger.xyz</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company & Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Services</a></li>
            </ul>
            <p className="footer-address">
              Alpine Heights, Navrangpura,<br />
              Ahmedabad 380009<br />
              CIN: U74993GJ2018PTC100739
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CHATURBOTS AI PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
