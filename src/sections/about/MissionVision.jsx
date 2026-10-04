import { FaBullseye, FaEye } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const MissionVision = () => {
  return (
    <section className="mission-vision-section section-padding">
      <div className="container">
        <SectionTitle
          label="Our Direction"
          title="Mission and Vision"
          description="Our mission defines our present work, while our vision represents the future we want to build."
        />

        <div className="mission-vision-grid">
          <article className="mission-vision-card">
            <div className="mission-vision-icon" aria-hidden="true">
              <FaBullseye />
            </div>

            <span className="card-number">01</span>

            <h2>Our Mission</h2>

            <p>
              To protect indigenous rights, empower local communities,
              preserve cultural heritage and promote environmental justice
              through peaceful, inclusive and community-led action.
            </p>

            <ul>
              <li>Promote equality and human dignity</li>
              <li>Strengthen community participation</li>
              <li>Protect cultural and natural heritage</li>
              <li>Encourage peaceful advocacy</li>
            </ul>
          </article>

          <article className="mission-vision-card">
            <div className="mission-vision-icon" aria-hidden="true">
              <FaEye />
            </div>

            <span className="card-number">02</span>

            <h2>Our Vision</h2>

            <p>
              A just, inclusive and sustainable Sindh where indigenous
              communities enjoy dignity, equal rights, cultural freedom and
              meaningful participation in decisions that shape their future.
            </p>

            <ul>
              <li>Equal rights for every community</li>
              <li>Respect for indigenous identity</li>
              <li>Responsible use of natural resources</li>
              <li>A peaceful and sustainable Sindh</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;