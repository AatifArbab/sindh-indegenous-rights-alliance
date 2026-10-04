import {
  FaBalanceScale,
  FaBookOpen,
  FaBullhorn,
  FaGlobeAsia,
  FaHandshake,
  FaLeaf,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";

const objectives = [
  {
    id: 1,
    icon: <FaBalanceScale />,
    title: "Protect Indigenous Rights",
    description:
      "Promote dignity, equality and legal protection for indigenous communities.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Community Empowerment",
    description:
      "Strengthen community leadership, participation and collective decision-making.",
  },
  {
    id: 3,
    icon: <FaLeaf />,
    title: "Environmental Protection",
    description:
      "Protect land, water, forests, wildlife and other natural resources.",
  },
  {
    id: 4,
    icon: <FaBookOpen />,
    title: "Education and Awareness",
    description:
      "Provide communities with useful information about their rights and responsibilities.",
  },
  {
    id: 5,
    icon: <FaBullhorn />,
    title: "Peaceful Advocacy",
    description:
      "Raise community concerns through responsible and peaceful advocacy.",
  },
  {
    id: 6,
    icon: <FaUserShield />,
    title: "Cultural Preservation",
    description:
      "Support the protection of indigenous languages, traditions and identities.",
  },
  {
    id: 7,
    icon: <FaHandshake />,
    title: "Responsible Partnerships",
    description:
      "Build transparent partnerships with communities and civil society organizations.",
  },
  {
    id: 8,
    icon: <FaGlobeAsia />,
    title: "Sustainable Development",
    description:
      "Promote development that respects people, culture and the natural environment.",
  },
];

const Objectives = () => {
  return (
    <section className="objectives-section section-padding">
      <div className="container">
        <SectionTitle
          label="What We Work For"
          title="Our Core Objectives"
          description="These objectives guide our programs, partnerships, campaigns and community activities."
        />

        <div className="objectives-grid">
          {objectives.map((objective) => (
            <article className="objective-card" key={objective.id}>
              <div className="objective-icon" aria-hidden="true">
                {objective.icon}
              </div>

              <span className="objective-number">
                {String(objective.id).padStart(2, "0")}
              </span>

              <h3>{objective.title}</h3>
              <p>{objective.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;