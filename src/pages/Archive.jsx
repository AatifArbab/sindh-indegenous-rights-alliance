import { useMemo, useState } from "react";
import { FaDownload, FaFileWord, FaSearch } from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import MembershipCTA from "../components/MembershipCTA";

/* ------------------------------------------------------------------ */
/* Embedded styles                                                     */
/* ------------------------------------------------------------------ */

const styles = `
.arx-section {
  background: var(--color-bg-alt, #f7f5f0);
}

/* Toolbar */
.arx-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.arx-search {
  position: relative;
  flex: 1 1 280px;
  max-width: 380px;
}
.arx-search svg {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: var(--color-muted, #5c6b64);
  pointer-events: none;
}
.arx-search input {
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2.6rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  background: #fff;
  font: inherit;
  font-size: 0.95rem;
}
.arx-search input:focus {
  outline: 2px solid var(--color-primary, #1f6f50);
  outline-offset: 1px;
}
.arx-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.arx-chip {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  background: #fff;
  color: inherit;
  font: inherit;
  font-size: 0.88rem;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.arx-chip:hover {
  border-color: var(--color-primary, #1f6f50);
}
.arx-chip[aria-pressed="true"] {
  background: var(--color-primary, #1f6f50);
  border-color: var(--color-primary, #1f6f50);
  color: #fff;
  font-weight: 600;
}
.arx-count {
  margin: 0 0 1.5rem;
  font-size: 0.9rem;
  color: var(--color-muted, #5c6b64);
}

/* Grid */
.arx-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.arx-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.arx-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}
.arx-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #eef5f1, #e3efe9);
}
.arx-file-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: #2b579a;
  color: #fff;
  font-size: 1.6rem;
  box-shadow: 0 4px 12px rgba(43, 87, 154, 0.3);
}
.arx-category {
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: #fff;
  color: var(--color-primary, #1f6f50);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.arx-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
}
.arx-card-body h3 {
  margin: 0 0 0.6rem;
  font-size: 1.12rem;
  line-height: 1.4;
}
.arx-card-body p {
  flex: 1;
  margin: 0 0 1.25rem;
  line-height: 1.7;
  font-size: 0.94rem;
  color: var(--color-muted, #4b5a53);
}
.arx-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.arx-filetype {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-muted, #5c6b64);
}
.arx-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  background: var(--color-primary, #1f6f50);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: filter 0.15s ease;
}
.arx-download:hover {
  filter: brightness(1.1);
}
.arx-download:focus-visible {
  outline: 2px solid var(--color-primary, #1f6f50);
  outline-offset: 2px;
}
.arx-download[aria-disabled="true"] {
  background: #c9d1cd;
  color: #5c6b64;
  cursor: not-allowed;
  filter: none;
}

/* Empty state */
.arx-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--color-muted, #5c6b64);
}

@media (max-width: 640px) {
  .arx-search {
    max-width: none;
  }
  .arx-grid {
    grid-template-columns: 1fr;
  }
}
`;

/* ------------------------------------------------------------------ */
/* Archive data                                                        */
/* ------------------------------------------------------------------ */

/*
  All Word files live in the /public folder, so they are served from the
  site root. Put the EXACT file name (with extension) in `file`.
  If a file is a .doc instead of .docx, write the extension in `file`.
*/

const archiveData = [
  {
    id: 1,
    title: "Karachi Port to Qayyumabad ESIA Objections",
    category: "Environmental Review",
    description:
      "Review of the Environmental & Social Impact Assessment of the Karachi Port to Qayumabad Corridor Project, with priority objections and conditions before approval.",
    file: "Karachi Port to Qayyumabad ESIA Objection SIRA_V1.docx",
  },
  {
    id: 2,
    title: "Karachi Indigenous History",
    category: "History & Research",
    description:
      "The political and socio-economic struggle of Karachi’s Indigenous communities, from ancient history to the land-rights movement.",
    file: "KARACHI INDIGENOUS HISTORY.docx",
  },
  {
    id: 3,
    title: "Proposed Indus Canal Project for the Cholistan Desert",
    category: "Policy Analysis",
    description:
      "A deep dive into the environmental and social impact of the proposed Indus canal project for the Cholistan Desert.",
    file: "Proposed Indus Canal Project for the Cholistan Desert_A Deep Dive into Environmental and Social Impact.docx",
  },
  {
    id: 4,
    title: "Summary of the Judicial Decisions of the Supreme Court of Pakistan",
    category: "Legal & Advocacy",
    description:
      "A summary of key judicial decisions of the Supreme Court of Pakistan.",
    file: "Summary of the Judicial Decisions of the Supreme Court of Pakistan.docx",
  },
  {
    id: 5,
    title: "Petition to the UN Housing Rapporteur, December 2019",
    category: "Legal & Advocacy",
    description:
      "Petition submitted to the United Nations Special Rapporteur on adequate housing in December 2019.",
    file: "Petition to the UN Housing Rapporteur Dec 2019.docx",
  },
  {
    id: 6,
    title: "Gul Hassan Kalmatti: A Prolific Researcher",
    category: "History & Research",
    description:
      "A profile of Gul Hassan Kalmatti, the Sindhi historian and researcher.",
    file: "Gul Hassan Kalmatti is a prolific Researcher.docx",
  },
  {
    id: 7,
    title: "KNP Introduction",
    category: "History & Research",
    description: "Introductory background document.",
    file: "KNP_Intro.docx",
  },
];

const ALL = "All";

const getFileUrl = (file) => `/${encodeURIComponent(file)}`;

const getFileLabel = (file) =>
  file && file.toLowerCase().endsWith(".doc") ? "Word Document (.doc)" : "Word Document (.docx)";

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Archive = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...new Set(archiveData.map((item) => item.category))],
    []
  );

  const visibleItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return archiveData.filter((item) => {
      const matchesCategory =
        activeCategory === ALL || item.category === activeCategory;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [query, activeCategory]);

  return (
    <>
      <style>{styles}</style>

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-label">Historical Records</span>
          <h1>Alliance Archives & Records</h1>
          <p>
            Explore our past campaigns, media reports, press statements, and
            historical documentations.
          </p>
        </div>
      </section>

      <section className="arx-section section-padding">
        <div className="container">
          <SectionTitle
            label="Repository"
            title="Our Past Works & Documentation"
            description="Access past records and achievements of the Sindh Indigenous Rights Alliance."
          />

          <div className="arx-toolbar">
            <div className="arx-search">
              <FaSearch aria-hidden="true" />
              <input
                type="search"
                placeholder="Search documents..."
                aria-label="Search documents"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <div className="arx-filters" role="group" aria-label="Filter by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="arx-chip"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="arx-count" aria-live="polite">
            Showing {visibleItems.length} of {archiveData.length} documents
          </p>

          {visibleItems.length > 0 ? (
            <div className="arx-grid">
              {visibleItems.map((item) => (
                <article key={item.id} className="arx-card">
                  <div className="arx-card-top">
                    <div className="arx-file-icon" aria-hidden="true">
                      <FaFileWord />
                    </div>
                    <span className="arx-category">{item.category}</span>
                  </div>

                  <div className="arx-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="arx-card-footer">
                      <span className="arx-filetype">
                        {item.file ? getFileLabel(item.file) : "Word Document"}
                      </span>

                      {item.file ? (
                        <a
                          className="arx-download"
                          href={getFileUrl(item.file)}
                          download={item.file}
                          aria-label={`Download ${item.title}`}
                        >
                          <FaDownload aria-hidden="true" />
                          Download
                        </a>
                      ) : (
                        <span className="arx-download" aria-disabled="true">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="arx-empty">
              No documents match your search. Try a different keyword or
              category.
            </p>
          )}
        </div>
      </section>

      <MembershipCTA />
    </>
  );
};

export default Archive;