import { FaEnvelope, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-contact">
            <a href="tel:+923001234567">
              <FaPhoneAlt aria-hidden="true" />
              <span>+92 300 1234567</span>
            </a>

            <a href="mailto:info@sindhrights.org">
              <FaEnvelope aria-hidden="true" />
              <span>info@sindhrights.org</span>
            </a>
          </div>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="social-link"
          >
            <FaFacebookF aria-hidden="true" />
          </a>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;