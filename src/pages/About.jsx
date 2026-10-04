import SectionTitle from "../components/SectionTitle";
import MembershipCTA from "../components/MembershipCTA";

import MissionVision from "../sections/about/MissionVision";
import Objectives from "../sections/about/Objectives";
import TeamSection from "../sections/about/TeamSection";

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
            <img
              src="/images/team/about-community.jpg"
              alt="Community members working together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <MissionVision />

      <Objectives />

      <TeamSection />

      <MembershipCTA />
    </>
  );
};

export default About;