import {
  FaBalanceScale,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import MembershipCTA from "../components/MembershipCTA";

const objectives = [
  {
    id: 1,
    icon: <FaBalanceScale />,
    title: "Protect Community Rights",
    description:
      "Promote and protect the social, cultural, environmental and legal rights of indigenous communities.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Empower Communities",
    description:
      "Encourage community participation, education, leadership and collective decision-making.",
  },
  {
    id: 3,
    icon: <FaLeaf />,
    title: "Protect the Environment",
    description:
      "Work for the protection of water, forests, land, wildlife and other natural resources.",
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: "Build Partnerships",
    description:
      "Connect communities with civil society, institutions and responsible development partners.",
  },
];

const About = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-label">About Our Alliance</span>
          <h1>Working Together for Rights, Justice and Dignity</h1>
          <p>
            Learn about our identity, values, objectives and commitment to the
            indigenous communities of Sindh.
          </p>
        </div>
      </section>

      <section className="about-introduction section-padding">
        <div className="container about-introduction-grid">
          <div className="about-introduction-content">
            <SectionTitle
              label="Our Story"
              title="A Community-Led Alliance"
              alignment="left"
            />

            <p>
              Sindh Indigenous Rights Alliance is a community-focused
              organization committed to protecting the rights, identity,
              heritage and natural resources of indigenous communities in
              Sindh.
            </p>

            <p>
              We believe that every community deserves dignity, equal
              opportunities and a meaningful role in decisions affecting its
              land, culture and future.
            </p>

            <p>
              Through advocacy, awareness, research and community
              participation, we work to build a fair, peaceful and sustainable
              society.
            </p>
          </div>

          <div className="about-introduction-image">
            {/* Public folder se direct '/' path ke sath image render hogi */}
            <img
              src="/Dashboard1.jpg" 
              alt="Sindh Indigenous Rights Alliance Dashboard"
            />
          </div>
        </div>
      </section>

      <section className="mission-vision-section section-padding">
        <div className="container mission-vision-grid">
          <article className="mission-vision-card">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h2>Our Mission</h2>
            <p>
              To protect indigenous rights, empower local communities, preserve
              cultural heritage and promote environmental justice through
              peaceful and inclusive action.
            </p>
          </article>

          <article className="mission-vision-card">
            <div className="card-icon">
              <FaEye />
            </div>
            <h2>Our Vision</h2>
            <p>
              A just and sustainable Sindh where indigenous communities enjoy
              dignity, equality, cultural freedom and full participation in
              decisions that shape their future.
            </p>
          </article>
        </div>
      </section>

      <section className="objectives-section section-padding">
        <div className="container">
          <SectionTitle
            label="What We Work For"
            title="Our Core Objectives"
            description="Our objectives guide every campaign, partnership and community initiative."
          />

          <div className="objectives-grid">
            {objectives.map((objective) => (
              <article className="objective-card" key={objective.id}>
                <div className="objective-icon">{objective.icon}</div>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MembershipCTA />
    </>
  );
};

export default About;