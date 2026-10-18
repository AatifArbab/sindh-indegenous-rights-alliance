import React from "react";
import SectionTitle from "../../components/SectionTitle";

const centralTeam = [
  { role: "Central President", name: "Khuda Dinu Shah", image: "/khuda dino.jpeg" },
  { role: "Central V. President", name: "Abdul Khaliq Junejo", image: "/Abdul khaliq.jpeg" },
  { role: "Central G. Secretary", name: "Hafeez Baloch", image: "/about1.jpeg" },
  { role: "Central Joint Secretary", name: "Abira Ashfaq Rizvi", image: "/about6.jpeg" },
  { role: "Treasury", name: "Adv. Imran Kalmatti", image: "/imran baloch.jpeg" },
  { role: "Press Secretary", name: "Sarang Joyo", image: "/sarang joyo.jpeg" },
  { role: "Office Secretary", name: "Adv. Moeen Magsi", image: "/moin magsi.jpeg" },
];

const karachiTeam = [
  { role: "President", name: "Kaleem Durani", image: "/kaleem durani.jpeg" },
  { role: "V. President", name: "Adv. Kazim Mahesar", image: "/kazim hussain.jpeg" },
  { role: "G. Secretary", name: "Adv. Jamal Nasir Baloch", image: "/jamal nasir baloch.jpeg" },
  { role: "Treasury", name: "Salma Junejo", image: "/salma.jpeg" },
  { role: "Press Secretary", name: "Adv. Haseeb Pahnwar", image: "/haseeb pahnwar.jpeg" },
];

const getInitials = (name) =>
  name
    .replace(/^Adv\.?\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const TeamCard = ({ member }) => {
  const [failed, setFailed] = React.useState(false);

  return (
    <article className="team-card">
      <div className="team-card-image">
        {failed ? (
          <div className="team-card-fallback" aria-hidden="true">
            {getInitials(member.name)}
          </div>
        ) : (
          <img
            src={encodeURI(member.image)}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="team-card-body">
        <h4 className="team-card-name">{member.name}</h4>
        <span className="team-card-role">{member.role}</span>
      </div>
    </article>
  );
};

const TeamGroup = ({ title, members }) => (
  <div className="team-group">
    <h3 className="team-group-title">
      <span>{title}</span>
    </h3>
    <div className="team-grid">
      {members.map((member) => (
        <TeamCard key={`${member.role}-${member.name}`} member={member} />
      ))}
    </div>
  </div>
);

const styles = `
.about-team {
  --team-primary: #0f3d2e;
  --team-accent: #c8a24a;
  --team-text: #1c2430;
  --team-card-bg: #ffffff;
  --team-radius: 16px;
}

.team-group + .team-group { margin-top: 72px; }

.team-group-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 0 40px;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--team-primary);
  text-align: center;
}
.team-group-title::before,
.team-group-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--team-accent), transparent);
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
}

.team-card {
  width: 240px;
  background: var(--team-card-bg);
  border-radius: var(--team-radius);
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(15, 30, 45, 0.08);
  border: 1px solid rgba(15, 30, 45, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(15, 30, 45, 0.16);
}

.team-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #eef1f4;
}
.team-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.5s ease;
}
.team-card:hover .team-card-image img { transform: scale(1.05); }
.team-card-image::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 4px;
  background: var(--team-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.team-card:hover .team-card-image::after { transform: scaleX(1); }

.team-card-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--team-primary), #1f6b52);
}

.team-card-body { padding: 18px 14px 22px; text-align: center; }
.team-card-name {
  margin: 0 0 10px;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--team-text);
}
.team-card-role {
  display: inline-block;
  padding: 5px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--team-primary);
  background: rgba(200, 162, 74, 0.15);
  border-radius: 999px;
}

@media (max-width: 768px) {
  .team-grid { gap: 18px; }
  .team-card { width: calc(50% - 9px); }
  .team-group-title { font-size: 1.25rem; }
}
@media (max-width: 400px) {
  .team-card { width: 100%; max-width: 280px; }
}
`;

const TeamSection = () => {
  return (
    <section className="about-team section-padding">
      <style>{styles}</style>
      <div className="container">
        <SectionTitle
          label="Leadership"
          title="Our Organizational Structure"
          alignment="center"
        />

        <TeamGroup title="Central Cabinet" members={centralTeam} />
        <TeamGroup title="Karachi Chapter" members={karachiTeam} />
      </div>
    </section>
  );
};

export default TeamSection;