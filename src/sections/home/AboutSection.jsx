import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const highlights = [
  "Protection of indigenous rights",
  "Community empowerment and participation",
  "Cultural heritage preservation",
  "Environmental justice and sustainability",
];

const AboutSection = () => {
  return (
    <section className="about-section section-padding">
      <div className="container about-section-grid">
        <div className="about-section-image">
          <img
            src="/images/team/community.jpg"
            alt="Indigenous community members of Sindh"
            loading="lazy"
          />

          <div className="about-experience-box">
            <strong>United</strong>
            <span>for rights, justice and dignity</span>
          </div>
        </div>

        <div className="about-section-content">
          <SectionTitle
            label="Who We Are"
            title="A United Voice for Indigenous Communities"
            description="Sindh Indigenous Rights Alliance is committed to protecting the rights, culture, dignity and natural resources of indigenous communities across Sindh."
            alignment="left"
          />

          <p>
            We bring communities, volunteers and responsible partners together
            to address social, cultural and environmental challenges through
            peaceful advocacy and collective action.
          </p>

          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="button button-primary">
            Learn More About Us
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;