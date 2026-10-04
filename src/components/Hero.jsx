import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="hero-label">
          Protecting People, Culture and Nature
        </span>

        <h1>
          Standing Together for the Rights of Sindh’s Indigenous Communities
        </h1>

        <p>
          We work to protect indigenous rights, preserve cultural heritage,
          promote social justice and safeguard Sindh’s natural environment.
        </p>

        <div className="hero-buttons">
          <Link to="/membership" className="button button-primary">
            <FaUsers aria-hidden="true" />
            Join Our Alliance
          </Link>

          <Link to="/about" className="button button-outline">
            Learn About Us
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Explore our work</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;