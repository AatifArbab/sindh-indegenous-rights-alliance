import React from "react";
import SectionTitle from "../components/SectionTitle";
import MembershipCTA from "../components/MembershipCTA";

// Archive Data Example (Aap ise apne hisab se update kar sakte hain)
const archiveData = [
  {
    id: 1,
    title: "Press Release & Statement 2023",
    category: "Press Releases",
    date: "December 2023",
    description: "Official statements regarding indigenous land rights and community campaigns.",
    image: "/Dashboard1.png", // Direct public folder path
    link: "#",
  },
  {
    id: 2,
    title: "Annual Performance Report 2024",
    category: "Reports",
    date: "January 2024",
    description: "Comprehensive summary of our community outreach, policy advocacy, and events.",
    image: "/Dashboard1.png",
    link: "#",
  },
  {
    id: 3,
    title: "Community Media Coverage 2025",
    category: "Media",
    date: "June 2025",
    description: "Collection of news coverage, video highlights, and interview archives.",
    image: "/Dashboard1.png",
    link: "#",
  },
];

const Archive = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-label">Historical Records</span>
          <h1>Alliance Archives & Records</h1>
          <p>
            Explore our past campaigns, media reports, press statements, and historical documentations.
          </p>
        </div>
      </section>

      <section className="archive-section section-padding">
        <div className="container">
          <SectionTitle
            label="Repository"
            title="Our Past Works & Documentation"
            description="Access past records and achievements of the Sindh Indigenous Rights Alliance."
          />

          <div className="archive-grid">
            {archiveData.map((item) => (
              <article key={item.id} className="archive-card">
                <div className="archive-image">
                  <img src={item.image} alt={item.title} />
                  <span className="archive-category">{item.category}</span>
                </div>
                <div className="archive-content">
                  <span className="archive-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} className="btn-secondary">
                    View Record
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MembershipCTA />
    </>
  );
};

export default Archive;