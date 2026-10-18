import { Link } from "react-router-dom";
import {
  FaCode,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

/* Developer credit. Add a link (portfolio, LinkedIn, WhatsApp...) in
   DEVELOPER_URL to make the name clickable. Leave it empty for plain text. */
const DEVELOPER_NAME = "Atif Arbab";
const DEVELOPER_URL = "";

const creditStyles = `
.footer-credit {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 0;
}
.footer-credit-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.7);
}
.footer-credit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 0.8rem;
  color: #c8a24a;
  background: rgba(200, 162, 74, 0.14);
  border-radius: 50%;
}
.footer-credit-name {
  position: relative;
  font-weight: 700;
  color: #c8a24a;
  text-decoration: none;
}
.footer-credit-name::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
a.footer-credit-name:hover::after {
  transform: scaleX(1);
}
@media (max-width: 480px) {
  .footer-credit-inner { font-size: 0.82rem; }
}
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <style>{creditStyles}</style>

      <div className="container footer-grid">
        {/* Organization Information */}
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <div className="brand-logo" aria-hidden="true">
              SIRA
            </div>

            <span>Sindh Indigenous Rights Alliance</span>
          </Link>

          <p>
            Working for indigenous rights, social justice, cultural
            preservation and environmental protection across Sindh.
          </p>

          <div className="footer-socials">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/news">Latest News</Link>
            </li>

            <li>
              <Link to="/environment">Environment</Link>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="footer-column">
          <h3>Get Involved</h3>

          <ul>
            <li>
              <Link to="/membership">Become a Member</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/about">Our Mission</Link>
            </li>

            <li>
              <Link to="/indigenous">Indigenous Communities</Link>
            </li>

            <li>
              <Link to="/news">Community Updates</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <address>
            <p>
              <FaMapMarkerAlt aria-hidden="true" />

              <span>
                Karachi, Sindh,
                <br />
                Pakistan
              </span>
            </p>

            <p>
              <FaPhoneAlt aria-hidden="true" />

              <a href="tel:+923001234567">+92 300 1234567</a>
            </p>

            <p>
              <FaEnvelope aria-hidden="true" />

              <a href="mailto:info@sindhrights.org">info@sindhrights.org</a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {currentYear} Sindh Indigenous Rights Alliance. All rights
            reserved.
          </p>

          <p>Rights • Justice • Environment</p>
        </div>

        {/* Developer Credit */}
        <div className="footer-credit">
          <div className="container footer-credit-inner">
            <span className="footer-credit-icon" aria-hidden="true">
              <FaCode />
            </span>

            <span>
              Website designed &amp; developed by{" "}
              {DEVELOPER_URL ? (
                <a
                  href={DEVELOPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-credit-name"
                >
                  {DEVELOPER_NAME}
                </a>
              ) : (
                <strong className="footer-credit-name">{DEVELOPER_NAME}</strong>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;