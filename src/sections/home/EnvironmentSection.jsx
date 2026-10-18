import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";

/* Put water.jpeg, forest.jpeg and climate.jpeg inside the /public folder.
   Edit the titles and descriptions below to match your real projects. */
const environmentTopics = [
  {
    id: "water",
    tag: "Water",
    title: "Water & River Protection",
    description:
      "Working with communities to protect rivers, canals and safe drinking water across Sindh.",
    image: "/water1.jfif",
  },
  {
    id: "forest",
    tag: "Forest",
    title: "Forest & Land Conservation",
    description:
      "Protecting forests, trees and land that indigenous communities depend on for their livelihoods.",
    image: "/forest.jfif",
  },
  {
    id: "climate",
    tag: "Climate",
    title: "Climate Resilience",
    description:
      "Building awareness and community-led action to face floods, heat and a changing climate.",
    image: "/climate.jfif",
  },
];

const styles = `
.environment-section {
  --env-primary: #0f3d2e;
  --env-accent: #c8a24a;
  --env-text: #4a5563;
  --env-radius: 18px;
}

.env-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 48px;
}

.env-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: var(--env-radius);
  overflow: hidden;
  border: 1px solid rgba(15, 30, 45, 0.06);
  box-shadow: 0 4px 18px rgba(15, 30, 45, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.env-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 36px rgba(15, 30, 45, 0.18);
}

.env-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #e6e2d6;
}
.env-card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}
.env-card:hover .env-card-image img {
  transform: scale(1.07);
}
.env-card-image::after {
  content: "";
  position: absolute;
  inset: 50% 0 0 0;
  background: linear-gradient(to top, rgba(15, 30, 45, 0.45), transparent);
  pointer-events: none;
}

.env-card-tag {
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--env-primary);
  background: var(--env-accent);
  border-radius: 999px;
}

.env-card-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--env-primary), #1f6b52);
}

.env-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 24px 26px;
}
.env-card-title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.35;
  color: #1c2430;
}
.env-card-text {
  margin: 0 0 18px;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--env-text);
}
.env-card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--env-primary);
  text-decoration: none;
}
.env-card-link svg { transition: transform 0.25s ease; }
.env-card:hover .env-card-link svg { transform: translateX(5px); }

.environment-section .section-action {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.environment-section .section-action .button svg {
  margin-left: 8px;
  transition: transform 0.25s ease;
}
.environment-section .section-action .button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 992px) {
  .env-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .env-grid { grid-template-columns: 1fr; gap: 22px; }
}
`;

const EnvironmentCard = ({ topic }) => {
  const [failed, setFailed] = useState(false);

  return (
    <article className="env-card">
      <div className="env-card-image">
        {failed ? (
          <div className="env-card-fallback">{topic.tag}</div>
        ) : (
          <img
            src={topic.image}
            alt={topic.title}
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        <span className="env-card-tag">{topic.tag}</span>
      </div>

      <div className="env-card-body">
        <h3 className="env-card-title">{topic.title}</h3>
        <p className="env-card-text">{topic.description}</p>
        <Link to="/environment" className="env-card-link">
          Learn more
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

const EnvironmentSection = () => {
  return (
    <section className="environment-section section-padding">
      <style>{styles}</style>

      <div className="container">
        <SectionTitle
          label="Our Environment"
          title="Protecting Sindh’s Natural Heritage"
          description="Explore our community-led environmental projects."
          alignment="center"
        />

        <div className="env-grid">
          {environmentTopics.map((topic) => (
            <EnvironmentCard key={topic.id} topic={topic} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/environment" className="button button-primary">
            Explore Our Environmental Work
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;