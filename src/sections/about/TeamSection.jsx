import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";
import teamData from "../../data/teamData";

const TeamSection = () => {
  return (
    <section className="team-section section-padding">
      <div className="container">
        <SectionTitle
          label="Our Leadership"
          title="Meet Our Team"
          description="Meet the people working for community rights and positive change."
        />

        <div className="team-grid">
          {teamData.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="team-image"
                  loading="lazy"
                />

                <div className="team-socials">
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                    >
                      <FaFacebookF />
                    </a>
                  )}

                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <FaTwitter />
                    </a>
                  )}

                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                </div>
              </div>

              <div className="team-card-content">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;