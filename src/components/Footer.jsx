import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
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

              <a href="tel:+923001234567">
                +92 300 1234567
              </a>
            </p>

            <p>
              <FaEnvelope aria-hidden="true" />

              <a href="mailto:info@sindhrights.org">
                info@sindhrights.org
              </a>
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

          <p>
            Rights • Justice • Environment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;