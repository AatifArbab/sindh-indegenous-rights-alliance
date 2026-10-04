import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBalanceScale,
  FaCity,
  FaFish,
  FaGavel,
  FaGlobeAsia,
  FaHandsHelping,
  FaLandmark,
  FaLeaf,
  FaMountain,
  FaQuoteLeft,
  FaTree,
  FaUsers,
  FaWater,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import MembershipCTA from "../components/MembershipCTA";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const focusAreas = [
  {
    id: 1,
    icon: <FaBalanceScale />,
    title: "Equal Rights",
    description:
      "Supporting equal treatment, dignity and legal protection for indigenous communities.",
  },
  {
    id: 2,
    icon: <FaLandmark />,
    title: "Cultural Heritage",
    description:
      "Protecting traditional knowledge, languages, customs and community identity.",
  },
  {
    id: 3,
    icon: <FaLeaf />,
    title: "Land and Environment",
    description:
      "Promoting community participation in protecting land, water and natural resources.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Community Participation",
    description:
      "Ensuring communities have a meaningful voice in decisions affecting their future.",
  },
];

const historyHighlights = [
  {
    id: 1,
    year: "521 BCE",
    text: "Greek explorer Scylax sailed down the Indus to the port of Gist, sent by Darius I of Persia to chart the route.",
  },
  {
    id: 2,
    year: "Alexander's Era",
    text: "Alexander the Great passed through this land, and his general Nearchus called it “Alexander’s Paradise.”",
  },
  {
    id: 3,
    year: "1723",
    text: "Seth Bhojumal shifted his trade from the port of Kharak to Darbo Bandar near Mai Kolachi, transforming a small fishing settlement into a thriving city.",
  },
  {
    id: 4,
    year: "Today",
    text: "Malir, Ghaghar, Gadap, Manghopir and Ibrahim Hyderi — once fertile valleys and fishing villages — face unplanned urban expansion.",
  },
];

const ecologicalRegions = [
  {
    id: 1,
    icon: <FaFish />,
    title: "Coastal Belt",
    area: "Keamari to Gadani — approx. 70 to 90 km",
    description:
      "Rich in mangrove forests, coral reefs, mudflats and seagrass beds. Mangroves protect the land from storm surges, erosion and flooding, and help absorb carbon.",
    community:
      "Fishing communities who depend on fishing, salt making and small-scale boat trade.",
    threat:
      "Urban expansion, industrial waste, marine pollution, plastic and untreated sewage.",
  },
  {
    id: 2,
    icon: <FaWater />,
    title: "Riverine Region",
    area: "Malir River and Lyari River",
    description:
      "The ecological backbone of the city’s water systems. The Malir River, rising in the Kirthar Range, once supported farms, native trees and flood absorption. The Lyari River once supported agriculture and greenery.",
    community:
      "Indigenous communities who have lived along these rivers for generations.",
    threat:
      "Illegal mining, encroachments, sewage dumping and urbanization have caused flood risks and groundwater depletion.",
  },
  {
    id: 3,
    icon: <FaMountain />,
    title: "Arid Hills",
    area: "Kirthar Range — Hub, Gadap, Manghopir, Malir, Korangi",
    description:
      "Limestone, shale and sandstone hills with natural drainage channels, aquifers and wildlife such as chinkara deer, foxes and wild cats. They hold Buddhist stupas, caves, rock carvings and Sufi shrines.",
    community:
      "Baloch, Brohi and other tribes, who used these lands as grazing grounds for centuries.",
    threat:
      "Uncontrolled sprawl, illegal stone quarrying, sand mining and real estate development.",
  },
  {
    id: 4,
    icon: <FaTree />,
    title: "Sandy Plains",
    area: "Gadap Town, Malir Basin and the Super Highway",
    description:
      "Semi-arid zones that act as Karachi’s “ecological lungs,” storing ancient groundwater, filtering rainwater and reducing heat and dust.",
    community:
      "Baloch, Gabol and Jokhio communities, who relied on farming, livestock and fishing.",
    threat:
      "Mega housing projects and illegal sand and gravel mining are rapidly depleting groundwater.",
  },
  {
    id: 5,
    icon: <FaCity />,
    title: "Urban Fringe",
    area: "Edges of Malir, Gadap, Manghopir and Keamari",
    description:
      "The transitional zone where the city meets rural lands, rivers and hills. It supports drainage, water recharge and acts as a wildlife corridor.",
    community:
      "Communities who supply fresh produce, dairy and labor to the city while preserving rural traditions.",
    threat:
      "New housing schemes, industries and roads weaken ecological balance and increase flood and heat risks.",
  },
];

const timeline = [
  {
    id: 1,
    year: "1960s",
    title: "The Threat Is Recognized",
    description:
      "Korangi, once fertile farmland, becomes an industrial zone, and large-scale sand and gravel mining begins in the Malir River, lowering the water table.",
  },
  {
    id: 2,
    year: "1964",
    title: "Malir Zamindar Action Committee",
    description:
      "Farmers and landowners form the first organized Indigenous resistance, which continues into the 1990s.",
  },
  {
    id: 3,
    year: "After 2000",
    title: "Land Grabbing Accelerates",
    description:
      "Lands in Gadap and the Kirthar National Park buffer zone are allotted for projects such as Education City, DHA and Bahria Town Karachi.",
  },
  {
    id: 4,
    year: "2014",
    title: "Karachi Indigenous Rights Alliance Founded",
    description:
      "Citizens and leaders including Gul Hassan Kalmati, Lala Yusuf Masti Khan, Lala Usman Baloch, Abdul Khaliq Junejo and Khuda Dino Shah launch political, social and legal resistance.",
  },
  {
    id: 5,
    year: "June 6, 2021",
    title: "Historic Sit-in at Bahria Town",
    description:
      "Tens of thousands gather at the Bahria Town Karachi gate in a landmark protest against so-called development.",
  },
  {
    id: 6,
    year: "Present",
    title: "The Struggle Continues",
    description:
      "From the Karachi coastline to the Kirthar and Karoonjhar mountains, the alliance continues its political, social, environmental and legal work.",
  },
];

const campaigns = [
  {
    id: 1,
    icon: <FaGavel />,
    title: "Malir Expressway (Bhutto Expressway)",
    description:
      "Built to link Bahria Town, DHA and Education City, the expressway cuts through the Malir River. After the alliance’s campaign and a case filed by environmental lawyer Abeera Ashfaq on behalf of affected farmers, the Asian Development Bank investigated, declared the project environmentally harmful and withdrew its financing — a major international victory.",
  },
  {
    id: 2,
    icon: <FaLandmark />,
    title: "Education City",
    description:
      "Initiated in 1992, its land allocation has grown from 9,000 to over 10,000 acres. More than 30 Indigenous villages and thousands of acres of fertile land have been affected. The alliance is resisting the project politically and legally.",
  },
  {
    id: 3,
    icon: <FaMountain />,
    title: "Kirthar National Park",
    description:
      "Illegal sand and gravel mining, mountain cutting and deforestation threaten the park’s wildlife habitats. For over a decade the alliance has defended both Indigenous rights and the park’s ecosystem.",
  },
];

/* ------------------------------------------------------------------ */
/* Styles for the new sections (embedded so everything lives in one file) */
/* ------------------------------------------------------------------ */

const styles = `
/* New sections for the Indigenous page.
   Uses your existing site variables where available; fallbacks are provided. */

.indigenous-history,
.indigenous-timeline-section {
  background: var(--color-bg-alt, #f7f5f0);
}

/* Quote */
.indigenous-quote {
  position: relative;
  max-width: 820px;
  margin: 0 auto 3rem;
  padding: 2rem 2.5rem;
  background: #fff;
  border-left: 4px solid var(--color-primary, #1f6f50);
  border-radius: 8px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
}
.indigenous-quote-icon {
  color: var(--color-primary, #1f6f50);
  opacity: 0.35;
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}
.indigenous-quote p {
  font-size: 1.1rem;
  line-height: 1.8;
  font-style: italic;
  margin: 0 0 1rem;
}
.indigenous-quote footer {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-muted, #5c6b64);
}

/* History cards */
.indigenous-history-grid,
.indigenous-regions-grid,
.indigenous-campaigns-grid {
  display: grid;
  gap: 1.5rem;
}
.indigenous-history-grid {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
.indigenous-history-card {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
}
.indigenous-history-year {
  display: inline-block;
  margin-bottom: 0.6rem;
  font-weight: 700;
  color: var(--color-primary, #1f6f50);
  letter-spacing: 0.03em;
}
.indigenous-history-card p {
  margin: 0;
  line-height: 1.7;
}
.indigenous-history-note {
  max-width: 820px;
  margin: 2.5rem auto 0;
  text-align: center;
  line-height: 1.8;
}

/* Regions */
.indigenous-regions-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.indigenous-region-card,
.indigenous-campaign-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.indigenous-region-card:hover,
.indigenous-campaign-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
}
.indigenous-region-icon,
.indigenous-campaign-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #fff;
  background: var(--color-primary, #1f6f50);
}
.indigenous-region-card h3,
.indigenous-campaign-card h3 {
  margin: 0 0 0.35rem;
}
.indigenous-region-area {
  display: block;
  margin-bottom: 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-muted, #5c6b64);
}
.indigenous-region-card p,
.indigenous-campaign-card p {
  line-height: 1.7;
}
.indigenous-region-details {
  margin: 1rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.indigenous-region-details div + div {
  margin-top: 0.75rem;
}
.indigenous-region-details dt {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-primary, #1f6f50);
}
.indigenous-region-details dd {
  margin: 0.2rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Timeline */
.indigenous-timeline {
  list-style: none;
  max-width: 820px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}
.indigenous-timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 110px;
  width: 2px;
  background: var(--color-primary, #1f6f50);
  opacity: 0.25;
}
.indigenous-timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
}
.indigenous-timeline-item::before {
  content: "";
  position: absolute;
  top: 0.45rem;
  left: 104px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary, #1f6f50);
  border: 3px solid var(--color-bg-alt, #f7f5f0);
}
.indigenous-timeline-year {
  font-weight: 700;
  color: var(--color-primary, #1f6f50);
  padding-right: 1rem;
  text-align: right;
}
.indigenous-timeline-body h3 {
  margin: 0 0 0.4rem;
}
.indigenous-timeline-body p {
  margin: 0;
  line-height: 1.7;
}

/* Campaigns */
.indigenous-campaigns-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Conclusion */
.indigenous-conclusion {
  text-align: center;
}

/* Mobile */
@media (max-width: 640px) {
  .indigenous-quote {
    padding: 1.5rem;
  }
  .indigenous-timeline::before {
    left: 6px;
  }
  .indigenous-timeline-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
    padding-left: 2rem;
  }
  .indigenous-timeline-item::before {
    left: 0;
  }
  .indigenous-timeline-year {
    text-align: left;
    padding-right: 0;
  }
}
`;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Indigenous = () => {
  return (
    <>
      <style>{styles}</style>

      {/* Hero */}
      <section className="page-hero indigenous-hero">
        <div className="container page-hero-content">
          <span className="page-label">Indigenous Communities</span>

          <h1>Protecting Identity, Culture, Rights and Dignity</h1>

          <p>
            Indigenous communities are an essential part of Sindh’s history,
            diversity and cultural heritage. Their voices and rights deserve
            recognition and respect.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="indigenous-introduction section-padding">
        <div className="container indigenous-introduction-grid">
          <div className="indigenous-introduction-image">
            <img
              src="/image5.jfif"
              alt="Indigenous community members in Sindh"
              loading="lazy"
            />
          </div>

          <div className="indigenous-introduction-content">
            <SectionTitle
              label="Understanding Indigenous Communities"
              title="Communities Connected to Their Land and Heritage"
              alignment="left"
            />

            <p>
              Indigenous communities maintain deep historical, cultural and
              social connections with their land, language, traditions and
              natural environment.
            </p>

            <p>
              Their traditional knowledge and community practices make an
              important contribution to Sindh’s cultural diversity and
              environmental sustainability.
            </p>

            <p>
              Despite this contribution, many communities face difficulties
              related to recognition, education, healthcare, employment,
              natural resources and participation in decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* History of Karachi */}
      <section className="indigenous-history section-padding">
        <div className="container">
          <SectionTitle
            label="Karachi Indigenous History"
            title="A City Shaped by Centuries of Human Journey"
            description="Karachi is not just a city — it is a civilization. Greeks, Persians, Arabs and Mughals all left their mark, yet the native culture was so deep that whoever came here ultimately became part of it."
          />

          <blockquote className="indigenous-quote">
            <FaQuoteLeft aria-hidden="true" className="indigenous-quote-icon" />
            <p>
              Karachi’s natural evolution was meant to take centuries, but when
              power and greed forced it into unnatural speed, it led to
              environmental collapse, social disintegration and the loss of
              harmony.
            </p>
            <footer>
              Gul Hassan Kalmati, <cite>Karachi: Glory of the East</cite>
            </footer>
          </blockquote>

          <div className="indigenous-history-grid">
            {historyHighlights.map((item) => (
              <article className="indigenous-history-card" key={item.id}>
                <span className="indigenous-history-year">{item.year}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="indigenous-history-note">
            After the British occupation, and especially after the creation of
            Pakistan, rapid migration and reckless urban expansion severed the
            city from its original soul. Yet the people of Malir and Kirthar
            have never abandoned their love and loyalty for this land.
          </p>
        </div>
      </section>

      {/* Ecological Regions */}
      <section className="indigenous-regions section-padding">
        <div className="container">
          <SectionTitle
            label="Ecological Regions of Karachi"
            title="Five Living Landscapes Under Pressure"
            description="From the coast to the Kirthar hills, each region sustains both nature and Indigenous livelihoods."
          />

          <div className="indigenous-regions-grid">
            {ecologicalRegions.map((region) => (
              <article className="indigenous-region-card" key={region.id}>
                <div className="indigenous-region-icon" aria-hidden="true">
                  {region.icon}
                </div>

                <h3>{region.title}</h3>
                <span className="indigenous-region-area">{region.area}</span>
                <p>{region.description}</p>

                <dl className="indigenous-region-details">
                  <div>
                    <dt>Communities</dt>
                    <dd>{region.community}</dd>
                  </div>
                  <div>
                    <dt>Threats</dt>
                    <dd>{region.threat}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="indigenous-focus section-padding">
        <div className="container">
          <SectionTitle
            label="Our Focus"
            title="Rights That Must Be Protected"
            description="We support a peaceful and inclusive approach that respects the identity, dignity and participation of every community."
          />

          <div className="indigenous-focus-grid">
            {focusAreas.map((area) => (
              <article className="indigenous-focus-card" key={area.id}>
                <div className="indigenous-focus-icon" aria-hidden="true">
                  {area.icon}
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Struggle Timeline */}
      <section className="indigenous-timeline-section section-padding">
        <div className="container">
          <SectionTitle
            label="The Struggle"
            title="Decades of Peaceful Resistance"
            description="Karachi has expanded without a scientific master plan, leaving its Indigenous population in a state of insecurity for the past 78 years."
          />

          <ol className="indigenous-timeline">
            {timeline.map((event) => (
              <li className="indigenous-timeline-item" key={event.id}>
                <span className="indigenous-timeline-year">{event.year}</span>
                <div className="indigenous-timeline-body">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Key Campaigns */}
      <section className="indigenous-campaigns section-padding">
        <div className="container">
          <SectionTitle
            label="Key Campaigns"
            title="Defending Land, Rivers and Mountains"
          />

          <div className="indigenous-campaigns-grid">
            {campaigns.map((campaign) => (
              <article className="indigenous-campaign-card" key={campaign.id}>
                <div className="indigenous-campaign-icon" aria-hidden="true">
                  {campaign.icon}
                </div>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="indigenous-challenges section-padding">
        <div className="container indigenous-challenges-grid">
          <div className="indigenous-challenges-content">
            <SectionTitle
              label="Community Challenges"
              title="Building Awareness and Finding Solutions"
              alignment="left"
            />

            <p>
              Indigenous communities may face social exclusion, limited access
              to essential services, environmental damage and insufficient
              participation in decisions affecting their lives.
            </p>

            <ul className="indigenous-challenges-list">
              <li>
                <FaGlobeAsia aria-hidden="true" />
                Protection of cultural identity and traditional knowledge
              </li>

              <li>
                <FaBalanceScale aria-hidden="true" />
                Equal access to justice and government services
              </li>

              <li>
                <FaLeaf aria-hidden="true" />
                Protection of land, water and natural resources
              </li>

              <li>
                <FaHandsHelping aria-hidden="true" />
                Community participation and peaceful advocacy
              </li>
            </ul>

            <Link to="/membership" className="button button-primary">
              Support Our Work
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="indigenous-challenges-image">
            <img
              src="/image6.jfif"
              alt="Cultural heritage of an indigenous community"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="indigenous-conclusion section-padding">
        <div className="container">
          <SectionTitle
            label="A Continuing Struggle"
            title="A Fight for Culture, Heritage and Human Dignity"
            description="From the coastline of Karachi to the Kirthar and Karoonjhar mountains, the struggle continues — politically, socially, environmentally and legally."
          />
        </div>
      </section>

      <MembershipCTA />
    </>
  );
};

export default Indigenous;