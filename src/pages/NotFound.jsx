import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <span className="error-code">404</span>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for does not exist, may have been moved or
          the link may be incorrect.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="button button-primary">
            <FaHome />
            Return Home
          </Link>

          <Link to="/contact" className="button button-secondary">
            Contact Us
          </Link>
        </div>

        <Link to="/news" className="back-link">
          <FaArrowLeft />
          Browse latest news
        </Link>
      </div>
    </section>
  );
};

export default NotFound;