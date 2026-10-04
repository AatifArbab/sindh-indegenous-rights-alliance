import {
  FaBalanceScale,
  FaHandsHelping,
  FaLandmark,
  FaLeaf,
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";

const missionItems = [
  {
    id: 1,
    icon: <FaBalanceScale />,
    title: "Protecting Rights",
    description:
      "Promoting equality, dignity and legal protection for indigenous communities.",
  },
  {
    id: 2,
    icon: <FaHandsHelping />,
    title: "Community Empowerment",
    description:
      "Supporting community participation, education and local leadership.",
  },
  {
    id: 3,
    icon: <FaLandmark />,
    title: "Cultural Heritage",
    description:
      "Preserving indigenous identity, language, traditions and cultural heritage.",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Environmental Justice",
    description:
      "Protecting land, water, forests and natural resources for future generations.",
  },
];

const MissionSection = () => {
  return (
    <section className="mission-section section-padding">
      <div className="container">
        <SectionTitle
          label="Our Priorities"
          title="Building a Fair and Sustainable Future"
          description="Our work brings human rights, community empowerment, cultural protection and environmental justice together."
        />

        <div className="mission-grid">
          {missionItems.map((item) => (
            <article className="mission-card" key={item.id}>
              <div className="mission-icon" aria-hidden="true">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;