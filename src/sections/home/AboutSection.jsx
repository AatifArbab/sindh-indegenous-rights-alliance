import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const ABOUT_IMAGE = "/protest.jpeg";

const highlights = [
  "Protection of indigenous rights",
  "Community empowerment and participation",
  "Cultural heritage preservation",
  "Environmental justice and sustainability",
];

const styles = `
.about-section {
  --about-primary: #0f3d2e;
  --about-accent: #c8a24a;
  --about-text: #4a5563;
  --about-radius: 20px;

  /* Image tuning: change these two if the photo is cropped badly */
  --about-img-ratio: 5 / 4;              /* landscape-friendly */
  --about-img-position: center 40%;      /* keeps faces and banner in frame */

  overflow-x: clip;                      /* no sideways scroll from the floating box */
}

.about-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

/* ===== Image ===== */
.about-section-image {
  position: relative;
  padding: 0 0 28px 28px;
}
.about-section-image::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70%;
  height: 70%;
  border: 3px solid var(--about-accent);
  border-radius: var(--about-radius);
  z-index: 0;
}
.about-image-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: var(--about-img-ratio);
  min-height: 320px;
  overflow: hidden;
  border-radius: var(--about-radius);
  background: #e6e2d6;
  box-shadow: 0 20px 48px rgba(15, 30, 45, 0.2);
}
.about-image-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--about-img-position);
  transition: transform 0.6s ease;
}
.about-image-frame:hover img {
  transform: scale(1.04);
}
/* soft shade at the bottom so the floating box blends in */
.about-image-frame::after {
  content: "";
  position: absolute;
  inset: 55% 0 0 0;
  background: linear-gradient(to top, rgba(15, 30, 45, 0.45), transparent);
  pointer-events: none;
}
.about-image-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--about-primary), #1f6b52);
}

.about-experience-box {
  position: absolute;
  z-index: 2;
  right: -20px;
  bottom: 0;
  max-width: 220px;
  padding: 20px 24px;
  background: var(--about-primary);
  color: #fff;
  border-radius: 14px;
  border-left: 5px solid var(--about-accent);
  box-shadow: 0 14px 32px rgba(15, 30, 45, 0.28);
}
.about-section .about-experience-box strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--about-accent) !important;
}
.about-section .about-experience-box span {
  display: block;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #ffffff !important;
  opacity: 1;
}

/* ===== Content ===== */
/* remove the extra gap SectionTitle leaves under itself */
.about-title-wrap > * {
  margin-bottom: 0 !important;
}
.about-section-content > p {
  margin: 24px 0 28px;
  font-size: 1.02rem;
  line-height: 1.8;
  color: var(--about-text);
}

.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
  margin: 0 0 36px;
  padding: 0;
  list-style: none;
}
.about-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  background: #f7f5ef;
  border-radius: 12px;
  border: 1px solid rgba(15, 30, 45, 0.06);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  color: #1c2430;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.about-highlights li:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(15, 30, 45, 0.1);
}
.about-highlights li svg {
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 1.1rem;
  color: var(--about-accent);
}

.about-section-content .button svg {
  margin-left: 8px;
  transition: transform 0.25s ease;
}
.about-section-content .button:hover svg {
  transform: translateX(4px);
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .about-section-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-section-image {
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 576px) {
  .about-section { --about-img-ratio: 4 / 3; }
  .about-highlights { grid-template-columns: 1fr; }
  .about-section-image { padding: 0 0 20px 16px; }
  .about-experience-box {
    right: 0;
    padding: 16px 18px;
    max-width: 190px;
  }
  .about-experience-box strong { font-size: 1.3rem; }
}
`;

const AboutSection = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="about-section section-padding">
      <style>{styles}</style>

      <div className="container about-section-grid">
        <div className="about-section-image">
          <div className="about-image-frame">
            {imageFailed ? (
              <div className="about-image-fallback">
                Sindh Indigenous Rights Alliance
              </div>
            ) : (
              <img
                src={ABOUT_IMAGE}
                alt="Sindh Indigenous Rights Alliance community protest"
                width="800"
                height="640"
                loading="lazy"
                decoding="async"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>

          <div className="about-experience-box">
            <strong>United</strong>
            <span>for rights, justice and dignity</span>
          </div>
        </div>

        <div className="about-section-content">
          <div className="about-title-wrap">
            <SectionTitle
              label="Who We Are"
              title="A United Voice for Indigenous Communities"
              description="Sindh Indigenous Rights Alliance is committed to protecting the rights, culture, dignity and natural resources of indigenous communities across Sindh."
              alignment="left"
            />
          </div>

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