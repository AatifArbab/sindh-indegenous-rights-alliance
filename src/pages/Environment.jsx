import { useState } from "react";
import {
  FaBalanceScale,
  FaBullhorn,
  FaCheckCircle,
  FaCloud,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFish,
  FaHome,
  FaHospital,
  FaLeaf,
  FaRecycle,
  FaRoad,
  FaSeedling,
  FaTint,
  FaTrain,
  FaTree,
  FaTruck,
  FaUsers,
  FaWater,
  FaWind,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import MembershipCTA from "../components/MembershipCTA";

/* ------------------------------------------------------------------ */
/* Embedded styles for the ESIA review section                         */
/* ------------------------------------------------------------------ */

const styles = `
.esia-review {
  background: var(--color-bg-alt, #f7f5f0);
}

.esia-eyebrow-note {
  max-width: 820px;
  margin: 0 auto 2.5rem;
  text-align: center;
  line-height: 1.8;
}

/* Overview */
.esia-overview {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
}
.esia-overview-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
}
.esia-overview-card h3 {
  margin: 0 0 1rem;
}
.esia-overview-card p {
  line-height: 1.8;
  margin: 0 0 0.9rem;
}
.esia-meta {
  margin: 0;
}
.esia-meta div {
  padding: 0.7rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.esia-meta div:last-child {
  border-bottom: 0;
}
.esia-meta dt {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary, #1f6f50);
}
.esia-meta dd {
  margin: 0.2rem 0 0;
  line-height: 1.5;
}

/* Stats */
.esia-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 3.5rem;
}
.esia-stat {
  background: var(--color-primary, #1f6f50);
  color: #fff;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
}
.esia-stat strong {
  display: block;
  font-size: 2rem;
  line-height: 1.1;
}
.esia-stat span {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.85rem;
  opacity: 0.9;
}

/* Sub-headings */
.esia-subhead {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}
.esia-subhead-note {
  margin: 0 0 1.75rem;
  max-width: 760px;
  line-height: 1.7;
  color: var(--color-muted, #5c6b64);
}
.esia-block-wrap {
  margin-bottom: 3.5rem;
}

/* Priority findings */
.esia-priority-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.esia-priority-card {
  position: relative;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-top: 4px solid #b4533a;
  border-radius: 12px;
  padding: 1.75rem;
}
.esia-priority-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-bottom: 0.9rem;
  border-radius: 50%;
  background: #b4533a;
  color: #fff;
  font-weight: 700;
}
.esia-priority-card h4 {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  line-height: 1.4;
}

/* Review blocks */
.esia-block {
  margin-bottom: 0.9rem;
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border-left: 4px solid transparent;
}
.esia-block p {
  margin: 0;
  line-height: 1.75;
  font-size: 0.97rem;
}
.esia-block p + p {
  margin-top: 0.6rem;
}
.esia-tag {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.esia-block-observation {
  background: #f1f3f2;
  border-left-color: #8a9690;
}
.esia-block-observation .esia-tag {
  color: #5c6b64;
}
.esia-block-objection {
  background: #fbf0ec;
  border-left-color: #b4533a;
}
.esia-block-objection .esia-tag {
  color: #b4533a;
}
.esia-block-requirement {
  background: #ebf5f0;
  border-left-color: var(--color-primary, #1f6f50);
}
.esia-block-requirement .esia-tag {
  color: var(--color-primary, #1f6f50);
}
.esia-reference {
  margin: 0.4rem 0 0;
  font-size: 0.85rem;
  color: var(--color-muted, #5c6b64);
}
.esia-reference a {
  color: var(--color-primary, #1f6f50);
  font-weight: 600;
  text-decoration: underline;
}

/* Principles */
.esia-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.25rem;
}
.esia-principle {
  background: #fff;
  border-radius: 10px;
  padding: 1.4rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
}
.esia-principle-number {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-primary, #1f6f50);
  opacity: 0.55;
}
.esia-principle h4 {
  margin: 0 0 0.5rem;
}
.esia-principle p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Thematic review */
.esia-themes {
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 2rem;
  align-items: start;
}
.esia-tablist {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  position: sticky;
  top: 90px;
}
.esia-tab {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.93rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.esia-tab svg {
  flex-shrink: 0;
  color: var(--color-primary, #1f6f50);
}
.esia-tab:hover {
  background: rgba(31, 111, 80, 0.08);
}
.esia-tab[aria-selected="true"] {
  background: #fff;
  border-color: var(--color-primary, #1f6f50);
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}
.esia-tab:focus-visible {
  outline: 2px solid var(--color-primary, #1f6f50);
  outline-offset: 2px;
}
.esia-panel {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
}
.esia-panel h3 {
  margin: 0 0 0.9rem;
  font-size: 1.4rem;
}
.esia-panel-intro p {
  margin: 0 0 0.8rem;
  line-height: 1.8;
}
.esia-item {
  margin-top: 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.esia-item:first-of-type {
  border-top: 0;
  padding-top: 0;
  margin-top: 1.25rem;
}
.esia-item h4 {
  margin: 0 0 0.9rem;
  font-size: 1.05rem;
  line-height: 1.45;
}

/* Rail callout */
.esia-callout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
  background: var(--color-primary, #1f6f50);
  color: #fff;
  border-radius: 14px;
  padding: 2rem;
}
.esia-callout-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  font-size: 1.6rem;
}
.esia-callout h3 {
  margin: 0 0 0.6rem;
  color: #fff;
}
.esia-callout p {
  margin: 0;
  line-height: 1.8;
  opacity: 0.95;
}

/* Conditions */
.esia-conditions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}
.esia-condition {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 1.4rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.esia-condition:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.09);
}
.esia-condition-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--color-primary, #1f6f50);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
}
.esia-condition h4 {
  margin: 0 0 0.45rem;
  font-size: 1.02rem;
}
.esia-condition p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.93rem;
}

/* Consultation standard */
.esia-consult-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.esia-consult-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
.esia-consult-card h4 {
  margin: 0 0 0.8rem;
}
.esia-consult-card p {
  margin: 0 0 0.8rem;
  line-height: 1.75;
  font-size: 0.95rem;
}
.esia-consult-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.esia-consult-card li {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.55rem;
  line-height: 1.6;
  font-size: 0.93rem;
}
.esia-consult-card li svg {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: var(--color-primary, #1f6f50);
}

.esia-signoff {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary, #1f6f50);
}

/* Responsive */
@media (max-width: 960px) {
  .esia-overview {
    grid-template-columns: 1fr;
  }
  .esia-themes {
    grid-template-columns: 1fr;
  }
  .esia-tablist {
    position: static;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    gap: 0.5rem;
  }
  .esia-tab {
    width: auto;
    white-space: nowrap;
    border-color: rgba(0, 0, 0, 0.12);
    background: #fff;
  }
}
@media (max-width: 640px) {
  .esia-panel {
    padding: 1.25rem;
  }
  .esia-priority-grid,
  .esia-conditions {
    grid-template-columns: 1fr;
  }
  .esia-callout {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
}
`;

/* ------------------------------------------------------------------ */
/* Data: existing page content                                         */
/* ------------------------------------------------------------------ */

// Images are served from the /public folder (e.g. public/water.png -> "/water.png").
const projects = [
  {
    id: 1,
    title: "Clean Water Protection",
    description:
      "Promoting access to clean water and protecting community water sources from pollution.",
    image: "/water.jfif",
    category: "Water",
  },
  {
    id: 2,
    title: "Forest Conservation",
    description:
      "Working with communities to protect forests, wildlife and natural habitats.",
    image: "/image.jfif",
    category: "Forests",
  },
  {
    id: 3,
    title: "Climate Awareness",
    description:
      "Helping communities understand climate change and prepare for its local effects.",
    image: "/image1.jfif",
    category: "Climate",
  },
  {
    id: 4,
    title: "Clean Community Campaign",
    description:
      "Encouraging responsible waste disposal and cleaner public spaces in local communities.",
    image: "/image2.jfif",
    category: "Cleanliness",
  },
  {
    id: 5,
    title: "Tree Plantation",
    description:
      "Planting native trees with volunteers to create cleaner and greener communities.",
    image: "/image3.jfif",
    category: "Plantation",
  },
  {
    id: 6,
    title: "Sustainable Agriculture",
    description:
      "Supporting environmentally responsible farming and protection of agricultural land.",
    image: "/image4.jfif",
    category: "Agriculture",
  },
];

/* ------------------------------------------------------------------ */
/* Data: KPQC ESIA review                                              */
/* ------------------------------------------------------------------ */

const reviewMeta = [
  {
    label: "Project",
    value: "Karachi Port to Qayumabad Corridor Project (KPQC)",
  },
  { label: "Project proponent", value: "PTQ Expressway (Private) Limited" },
  {
    label: "Document reviewed",
    value: "Environmental & Social Impact Assessment, Doc. No. KPQ/ESIA/001, Rev. 00",
  },
  { label: "Submitted by", value: "Sindh Indigenous Rights Alliance" },
  {
    label: "Review areas",
    value:
      "Environmental • Social • Transport • Climate • Hydrology • Biodiversity",
  },
];

const priorityFindings = [
  {
    id: 1,
    title: "Environmental assessment should be decision-grade, not mitigation-only",
    observation:
      "The ESIA describes impacts and lists mitigation measures, but many high-risk effects are addressed through general statements instead of site-specific modelling, quantified thresholds, or enforceable design commitments.",
    objection:
      "For a project of this scale, the central question is not simply whether mitigation exists, but whether the residual risk after mitigation is demonstrably acceptable. A mitigation list cannot substitute for impact prediction where consequences may be irreversible.",
    reference: "ESIA pp. 78–80, 138–143; ADB SPS principles.",
  },
  {
    id: 2,
    title: "The transport case is not yet sufficiently tested against alternatives",
    observation:
      "The ESIA states that the selected route emerged from a criteria-driven process and identifies existing freight routes, including the Northern Bypass.",
    objection:
      "The alternatives chapter does not provide a transparent multi-criteria comparison with quantified travel-time, freight, cost, emissions, land, biodiversity, social and climate indicators for each serious alternative. This weakens the claim that the selected corridor is the most feasible option.",
    reference: "ESIA pp. 42–45; stakeholder comments pp. 121–124.",
  },
  {
    id: 3,
    title: "Chinna Creek is a critical environmental risk, not a minor alignment issue",
    observation:
      "The ESIA recognizes tidal exchange, sediment movement, mangroves, flooding and embankment/bridge interactions.",
    objection:
      "The project includes an earthen embankment in the creek environment. The ESIA needs to demonstrate, instead of assume, that the embankment and crossings will not alter tidal prism, current velocity, sediment deposition, flushing, salinity, flood levels or mangrove recruitment.",
    reference: "ESIA pp. 53–55, 87–88; stakeholder comments pp. 121–123.",
  },
  {
    id: 4,
    title: "The social baseline conflicts with the “no resettlement” conclusion",
    observation:
      "The ESIA states no land acquisition or involuntary resettlement is expected, while Bhutta Village and Gulshan-e-Sikandarabad residents repeatedly expressed fear of displacement and requested route changes.",
    objection:
      "Social impact assessment must distinguish legal land status from actual human dependence, housing, livelihoods, access, and perceived displacement risk. An “illegal settlement” label does not eliminate social impacts. Karachi’s people have already faced displacement through projects such as the KCR and Gujjar Nullah, making careful assessment of potential displacement and livelihood impacts especially important.",
    reference: "ESIA pp. 36–37, 81, 113–116, 120–123.",
  },
];

const principles = [
  {
    id: 1,
    title: "Avoidance before mitigation",
    text: "Avoidance is preferable to mitigation where impacts may be irreversible.",
  },
  {
    id: 2,
    title: "Quantitative evidence",
    text: "High-risk claims should be supported by quantitative evidence instead of professional judgement alone.",
  },
  {
    id: 3,
    title: "People as sources of evidence",
    text: "Affected people are sources of evidence about actual exposure, access and livelihood, not simply recipients of project information.",
  },
  {
    id: 4,
    title: "A transport system, not just civil works",
    text: "A freight expressway must be assessed as a transport system, not just as a civil-works structure.",
  },
];

const themes = [
  {
    id: "scope",
    label: "Scope & Baseline",
    icon: <FaFileAlt />,
    title: "Assessment Scope, Baseline and Uncertainty",
    intro: [
      "This review uses a paragraph-wise critical reading approach. Each objection is anchored to the ESIA’s own statements, tables, consultation findings or mitigation commitments, in order to identify where the evidence does not adequately support the level of risk identified.",
    ],
    items: [
      {
        heading: "The 500-metre Corridor of Influence may be too narrow",
        observation:
          "The ESIA defines the COI/AOI as 500 metres on either side of the road centreline and says associated facilities are included.",
        objection:
          "Noise, air pollution, traffic diversion, induced travel, economic effects, drainage changes and ecological impacts do not necessarily stop at 500 metres. The relevant assessment boundary should be receptor- and pathway-based.",
        reference: "ESIA pp. 7–8.",
      },
      {
        heading: "The temporal baseline is not consistently aligned with decision needs",
        observation:
          "The ESIA uses long-term climate data but also relies on monitoring campaigns described as March 2025 and May 2026, with some secondary data older than the current project context.",
        objection:
          "A major coastal infrastructure decision needs a clear baseline date, seasonal coverage, sampling protocol, laboratory QA/QC, and an explanation of whether observations represent dry, wet, peak traffic and tidal conditions.",
        reference: "ESIA pp. 46, 57–65.",
      },
      {
        heading: "The ESIA needs a stronger uncertainty register",
        observation:
          "The report contains statements such as “not anticipated”, “expected”, “where space permits” and “should”, particularly in mitigation.",
        objection:
          "Such wording makes commitments difficult to enforce and makes the residual-risk calculation uncertain.",
        reference: "ESIA Chapters 6 and 9.",
      },
    ],
  },
  {
    id: "transport",
    label: "Transport & Rationale",
    icon: <FaRoad />,
    title: "Project Rationale and Transport Planning",
    intro: [
      "The ESIA presents Karachi’s congestion, freight movement and weak public transport as major reasons for the project. This is a valid transport-planning concern. However, a project rationale should demonstrate not just why the congestion problem exists, but whether the proposed intervention provides a sustainable network-level solution.",
      "Significant peak-hour congestion reportedly remains around Qayyumabad, Korangi Crossing and Baloch Colony Road despite major investments such as Shahrah-e-Bhutto. This raises an important question: can another high-capacity corridor alone provide a lasting solution, or will it simply shift congestion from one location to another? This requires evidence from actual traffic counts and network modelling instead of general statements about congestion reduction.",
    ],
    items: [
      {
        heading: "The freight problem is established, but the network-level solution is not fully demonstrated",
        observation:
          "The ESIA identifies existing freight routes and restrictions and argues that KPQC provides a direct connection.",
        objection:
          "A direct corridor may reduce freight travel distance and improve connectivity; however, it may also redistribute congestion to interchanges, ramps, Qayyumabad, Korangi Crossing, Baloch Colony Road, port approaches and downstream connecting roads. The assessment must follow the freight trip beyond the project boundary.",
        reference: "ESIA pp. 3–5, 11–12; Traffic assessment material.",
      },
      {
        heading: "Claimed benefits are not yet testable outcomes",
        observation:
          "The ESIA uses broad benefits such as reduced congestion, travel time and logistics cost.",
        objection:
          "Without quantified baseline and forecast performance, these remain claims instead of testable project outcomes. A useful assessment needs to demonstrate how much congestion will actually decrease, where the improvement will occur, and whether congestion will subsequently reappear at downstream intersections.",
      },
      {
        heading: "Public transport is acknowledged but not integrated into project appraisal",
        observation:
          "The introduction recognizes weak mass transit and private vehicle dependence in Karachi.",
        objection:
          "A major urban road investment should demonstrate how it complements or conflicts with public transport, walking and cycling, instead of treating freight mobility as a stand-alone objective. The analysis should also consider whether increased road capacity will encourage additional private-vehicle and freight movement, undermining long-term efforts to shift Karachi toward efficient mass transportation.",
        reference: "ESIA pp. 1–3; stakeholder comments pp. 117–119.",
      },
      {
        heading: "Shahrah-e-Bhutto should not be regarded as evidence of a complete solution",
        objection:
          "If Shahrah-e-Bhutto has been presented as a major intervention for Karachi’s traffic movement, its actual performance should be examined before similar road-capacity expansion is used to justify KPQC. The question is not simply whether KPQC will provide a faster route between two points, but where traffic will go after leaving the expressway, whether receiving roads have sufficient capacity, and whether congestion will be transferred to downstream intersections.",
      },
    ],
  },
  {
    id: "design",
    label: "Project Design",
    icon: <FaBalanceScale />,
    title: "Project Description and Design",
    items: [
      {
        heading: "An elevated alignment reduces some land acquisition but does not eliminate social exposure",
        observation:
          "The project largely follows existing corridors and uses elevated structures; the ESIA therefore concludes that land acquisition and displacement are not expected.",
        objection:
          "An elevated road can avoid parcel acquisition while still imposing privacy, noise, visual, access and property-value effects. Physical displacement and social impact are not identical.",
        reference: "ESIA pp. 12–18, 81–83.",
      },
      {
        heading: "The embankment section is disproportionately important",
        observation:
          "The Chinna Creek portion includes an earthen embankment raised 4–5 m above KPT chart datum.",
        objection:
          "An embankment in a tidal creek is a hydrological intervention. Its environmental significance may exceed its physical length because it can affect water exchange, sediment and flood pathways.",
        reference: "ESIA pp. 18–19, 53–55.",
      },
      {
        heading: "Design standards alone do not establish environmental acceptability",
        observation:
          "The ESIA lists AASHTO, Pakistan codes, ACI, ASTM and other engineering standards.",
        objection:
          "Structural compliance is necessary but does not answer whether the structure is appropriately sited, climate resilient, safe for surrounding communities or ecologically acceptable.",
        reference: "ESIA pp. 18–20.",
      },
      {
        heading: "Sensitive receptors should be design inputs, not just mitigation recipients",
        observation:
          "The ESIA identifies hospitals, schools, a deaf college, welfare centres, religious facilities and an animal shelter.",
        objection:
          "The route should be tested against receptor-specific exposure before finalizing structure height, barrier design, work hours and access arrangements. Sensitive receptors should influence project design and alignment decisions, not simply receive mitigation after impacts have been created.",
        reference: "ESIA pp. 81–83.",
      },
    ],
  },
  {
    id: "alternatives",
    label: "Alternatives",
    icon: <FaTrain />,
    title: "Alternatives Assessment: Major Objection",
    intro: [
      "This is a significant area of concern because the ESIA itself records that SEPA, DHA, Social Welfare and other stakeholders questioned the adequacy of the alternatives assessment, including consideration of the Northern Bypass. The evidence and assumptions supporting the conclusion that the selected route is the most viable option are not presented with sufficient transparency to allow an independent reader to reproduce the decision.",
      "More importantly, the analysis appears to focus primarily on different road alignments and engineering options, instead of fully examining the fundamental modal choice between road, rail and an integrated road–rail freight system. Since Karachi Port has railway connectivity with the national railway network, rail needs to be considered as a significant freight-movement alternative or complementary mode.",
    ],
    items: [
      {
        heading: "The no-project alternative is framed as infeasible too early",
        observation:
          "The ESIA states that the No Project Option is not feasible because port cargo and logistics demand are increasing.",
        objection:
          "A proper no-project scenario is not the same as doing nothing. Increasing freight demand alone does not prove that a new expressway is necessary. The assessment needs to examine whether part of the projected demand can be managed through freight time windows, port-gate management, truck routing, Northern Bypass improvements, intelligent transport systems, intersection improvements, rail-freight integration and improved freight logistics.",
        requirement:
          "Re-run the No Project case as “No KPQC with feasible transport-management and freight-management measures” and compare its environmental, social, traffic and economic outcomes over the full appraisal period.",
        reference: "ESIA pp. 42–43.",
      },
    ],
  },
  {
    id: "air",
    label: "Air Quality & Noise",
    icon: <FaWind />,
    title: "Air Quality and Noise",
    items: [
      {
        heading: "The particulate baseline is already elevated",
        observation:
          "The ESIA reports PM10 and suspended particulate matter as the critical baseline pollutants and notes that construction could elevate them.",
        objection:
          "The operational case involves heavy diesel freight. The conclusion that operational air quality will be broadly positive therefore needs spatially resolved modelling at receptors, not just a general congestion argument.",
        requirement:
          "Model PM2.5, PM10, NOx and SO2 under existing, project and cumulative traffic scenarios at schools, hospitals, residences, interchanges and port approaches.",
        reference: "ESIA pp. 63–65, 104–105.",
      },
      {
        heading: "Seven monitoring points may not capture exposure gradients",
        observation: "Seven air/noise locations were used along the corridor.",
        objection:
          "Elevated roads create vertical exposure differences and concentrated emissions at ramps, queues and under-structure areas. Seven points may not capture those gradients.",
        reference: "ESIA pp. 63–64.",
      },
      {
        heading: "The noise baseline already exceeds the stated commercial standard at several points",
        observation:
          "The ESIA table reports monitored values above 65 dB(A) at multiple locations, including 68.5, 67.6, 67.9 and 69.5 dB(A) in the May campaign.",
        objection:
          "A high baseline means the project should demonstrate incremental noise and cumulative exposure, instead of relying on barriers as a generic mitigation.",
        reference: "ESIA p. 65.",
      },
      {
        heading: "Night-time freight deserves special attention",
        observation:
          "Stakeholders repeatedly report night-time heavy-vehicle noise, and the ESIA recognizes nearby residential receptors.",
        objection:
          "A freight corridor that enables unrestricted movement can shift exposure into night hours unless operating rules and enforcement are defined.",
        reference: "ESIA pp. 105–106; stakeholder pp. 113–119.",
      },
    ],
  },
  {
    id: "water",
    label: "Water & Chinna Creek",
    icon: <FaWater />,
    title: "Water, Hydrology and Chinna Creek",
    items: [
      {
        heading: "The project enters a tidal system with constrained drainage",
        observation:
          "The ESIA describes Chinna Creek as tidally influenced and notes that urban drainage, solid waste and reduced flood storage already create flooding risk.",
        objection:
          "This is a high-sensitivity receptor. The project cannot be judged solely by whether culverts appear adequate; it must show how the entire tidal-drainage system responds to the new structures.",
        reference: "ESIA pp. 53–55, 87–88.",
      },
      {
        heading: "Isolated events may understate flood risk",
        observation:
          "The ESIA discusses extreme rainfall, tidal flooding and sea-level rise.",
        objection:
          "Karachi’s worst flood risk can arise from coincident or sequential rainfall, high tide and storm conditions. A design based on isolated events may understate risk.",
        reference: "ESIA pp. 87–88.",
      },
      {
        heading: "A dry road is not the same as a functioning creek",
        observation:
          "The embankment is described as 4–5 m above chart datum and intended to keep the route operational.",
        objection:
          "Keeping the road dry is not equivalent to keeping the creek hydraulically functional. An embankment can protect the road while worsening flood levels elsewhere.",
        reference: "ESIA pp. 18–19, 87–88.",
      },
    ],
  },
  {
    id: "mangroves",
    label: "Mangroves & Biodiversity",
    icon: <FaFish />,
    title: "Mangroves and Biodiversity",
    items: [
      {
        heading: "The ESIA acknowledges approximately 423 mangroves will be affected",
        observation:
          "The flora section states that about 423 mangroves are expected to be impacted by project works.",
        objection:
          "Counting individual trees is not an adequate ecological impact metric for mangrove habitat. The critical unit is habitat area, canopy condition, age structure, hydrological connectivity and ecosystem function.",
        requirement:
          "Report area affected in hectares/m², species composition, canopy density, regeneration, habitat condition, tidal connectivity and ecosystem services.",
        reference: "ESIA pp. 83–84.",
      },
      {
        heading: "Replacement planting may not recreate lost functions",
        observation:
          "The ESIA states that compensation measures were proposed following Forest Department consultation.",
        objection:
          "Mangroves provide coastal protection, nursery habitat, carbon storage and water-quality functions. Replacement planting may not recreate those functions at the same location, time or scale.",
        reference: "ESIA pp. 83–84.",
      },
      {
        heading: "A “modified habitat” label does not make additional loss insignificant",
        observation:
          "The ESIA classifies much of the project area as modified habitat and notes heavy urban disturbance.",
        objection:
          "Modified habitat can still contain ecologically valuable remnants, especially mangrove and intertidal systems. Degradation is not evidence that additional loss is insignificant.",
        requirement:
          "Assess biodiversity value by receptor and function, not by a single habitat label.",
        reference: "ESIA pp. 70–71.",
      },
      {
        heading: "The faunal assessment appears too broad for a coastal freight corridor",
        observation:
          "The report identifies common birds and says no threatened species were identified.",
        objection:
          "A rapid list of common species does not address migratory birds, intertidal fauna, fish nursery function, benthic organisms or species using mangroves seasonally.",
        requirement:
          "Conduct targeted seasonal surveys for avifauna, intertidal fauna, fish/marine nursery function and mangrove-associated species.",
        reference: "ESIA pp. 70–71.",
      },
    ],
  },
  {
    id: "climate",
    label: "Climate & GHG",
    icon: <FaCloud />,
    title: "Greenhouse Gases, Resource Efficiency and Climate Resilience",
    items: [
      {
        heading: "The GHG assessment does not present a comprehensive life-cycle view",
        objection:
          "The ESIA’s greenhouse-gas assessment is a useful starting point, estimating construction diesel consumption and associated direct emissions, but it does not appear to present a sufficiently comprehensive life-cycle carbon assessment. Reported construction emissions need to be considered alongside the carbon embodied in cement, steel and asphalt, transportation of construction materials, electricity consumption, land-use change and future maintenance. Because the project is intended to facilitate high-capacity freight movement, operational emissions cannot be judged solely on the assumption that smoother traffic will reduce fuel consumption. The net climate impact should account for changes in vehicle-kilometres, freight growth, route diversion, additional road capacity and potential induced demand. Tree planting or ecological compensation should not be regarded as an immediate equivalent to fossil-fuel emissions.",
        reference: "ESIA pp. 85–86.",
      },
      {
        heading: "Climate measures need auditable design parameters",
        observation:
          "The ESIA recognizes heatwaves, intense rainfall, flooding, sea-level rise and storm surge, and recommends measures such as consideration of future tidal levels, flap gates/non-return valves, cooler working periods, shade, water and worker acclimatization, as well as emergency response and reinstatement after severe weather.",
        objection:
          "While the risks are appropriately recognized, many measures remain recommendations instead of clearly demonstrated, auditable design and operational parameters. The report needs to identify which climate projections, time horizons, sea-level allowances, rainfall-intensity increases and storm-surge levels have actually been adopted. A construction programme involving approximately 1,000 workers requires a formal heat-health management system with measurable thresholds, work-rest cycles, hydration, acclimatization, medical response and monitoring. For a strategic port freight corridor, resilience must also extend to operational continuity, with clear closure criteria and alternative freight-routing arrangements during flooding, storms, accidents or structural incidents.",
        reference: "ESIA pp. 87, 88, 106.",
      },
    ],
  },
  {
    id: "construction",
    label: "Construction Traffic",
    icon: <FaTruck />,
    title: "Construction Traffic and Urban Disruption",
    items: [
      {
        heading: "Traffic management, sequencing and emergency access require pre-construction assessment",
        objection:
          "The ESIA acknowledges significant traffic impacts but leaves the detailed, site-specific Traffic Management Plan (TMP) to the contractor. For a major urban corridor, traffic management is a core determinant of environmental and social impact, and deferring detailed planning until construction may result in unacceptable disruption after major project commitments have already been made. Although construction is proposed to proceed in sections, partial closures on already congested roads can create network-wide congestion, long queues and diversion impacts. Reliance on signs, signals, speed limits and traffic marshals alone is insufficient to protect pedestrians, cyclists, schoolchildren, elderly people and persons with disabilities. Construction planning must also ensure uninterrupted emergency access, particularly to hospitals, welfare centres and other emergency-service facilities.",
        reference: "ESIA pp. 81–83, 116–119.",
      },
    ],
  },
  {
    id: "safety",
    label: "Health & Road Safety",
    icon: <FaHospital />,
    title: "Community Health, Safety and Road Safety",
    items: [
      {
        heading: "Hazardous freight and long-term road-safety risks require comprehensive assessment",
        observation:
          "The ESIA recognizes collision risks, hazardous cargo, emergency incidents, pedestrian access, falling objects and privacy concerns along the corridor. It proposes crash barriers, fencing, traffic controls, emergency response arrangements and privacy barriers of up to 4 metres in sensitive residential sections.",
        objection:
          "These risks should not be treated merely as temporary construction impacts or managed through general mitigation. A permanent high-speed freight corridor passing alongside communities creates a long-term risk profile, particularly where heavy vehicles carrying potentially hazardous materials operate close to pedestrians and residential areas. Port-related freight may include fuels, chemicals and other dangerous goods, so a collision, fire or spill could have consequences far greater than an ordinary traffic accident. An elevated structure also introduces risks associated with falling objects, debris, drainage, structural inspection, pier protection and the safety of the space beneath the viaduct. Privacy should be assessed as a measurable social impact because elevated traffic may affect the visual privacy of balconies, upper floors and living spaces even where no land is acquired.",
        reference: "ESIA pp. 18, 93–94, 104, 106–107.",
      },
    ],
  },
  {
    id: "land",
    label: "Land & Livelihoods",
    icon: <FaHome />,
    title: "Land, Resettlement, Livelihoods and Property",
    items: [
      {
        heading: "Displacement can occur without formal land acquisition",
        observation:
          "The ESIA says the project uses existing road medians and does not require land acquisition or residential/commercial structure removal.",
        objection:
          "The consultations document direct fear of displacement and requests to move the route over water. Economic displacement, access restriction, privacy loss and construction disturbance can occur without formal acquisition.",
        reference: "ESIA pp. 36–37, 81, 113–116.",
      },
      {
        heading: "Historical and Indigenous status of Bhutta Village and Gulshan-e-Sikandarabad requires recognition beyond formal land title",
        observation:
          "The ESIA and stakeholder comments describe Bhutta Village and Gulshan-e-Sikandarabad as unrecognized/illegal settlements.",
        objection: [
          "This characterization needs to be reconsidered. These communities are historically associated with Indigenous fishing settlements of Karachi’s coastal and port landscape, and their presence predates the creation of Pakistan. Historical mapping, including the 1951 Karachi map, provides important evidence that these settlements were established localities instead of recent occupations created solely in response to modern urban development.",
          "The absence of formal land title in contemporary administrative records should not, by itself, be used to characterize an historically established community as an “illegal settlement.” The relevant question is who has historically occupied and used the land, how long the community has existed, what livelihoods and cultural practices are connected to the area, and how the project will affect those relationships.",
          "The ESIA therefore needs to distinguish between legal land tenure, administrative recognition and historical/community occupation. Treating long-established Indigenous fishing communities simply as illegal occupants risks understating displacement, livelihood loss, cultural impacts and the loss of access to traditional fishing and coastal resources.",
        ],
        requirement:
          "Remove or qualify the blanket “illegal/unrecognized settlement” characterization and undertake a historical and social tenure assessment of Bhutta Village and Gulshan-e-Sikandarabad, including historical maps, community histories, fishing and livelihood patterns, land and housing records, access to coastal resources, length of occupation and intergenerational residence. Historical presence and Indigenous/community dependence should be recognized separately from formal legal title.",
        reference: "ESIA pp. 120–123; ADB safeguard principles.",
        link: {
          label: "Survey of Pakistan, Karachi Guide Map (1951)",
          href: "https://www.themaphouse.com/artworks/249083-survey-of-pakistan-karachi-guide-map-1951/",
        },
      },
      {
        heading: "Business and livelihood impacts are not adequately quantified",
        observation:
          "Consultations identify labourers, shopkeepers, businesses and community service providers among potentially affected groups.",
        objection:
          "The ESIA does not appear to adequately quantify business turnover, customer access, number of employees, dependence on road frontage, or potential losses during the construction period.",
        requirement:
          "Conduct a detailed business and livelihood census at directly affected locations before construction and establish measurable indicators for monitoring and livelihood restoration. Compensation should go beyond physical damage to cover access disruption, income loss, temporary business closure, utility interruption and impacts on vulnerable groups, supported by an entitlement matrix and an independent valuation mechanism.",
        reference: "ESIA pp. 113–119, 120–123, 131.",
      },
      {
        heading: "Indigenous fishermen’s livelihoods require a community-specific baseline",
        observation:
          "The Bhutta Village consultation identifies residents’ dependence on their homes and assets, inadequate water and utility services, and the use of mangroves and related coastal resources. This record contains first-hand testimony that should directly inform route and design decisions.",
        objection:
          "These findings need to be assessed in the context of Bhutta Village as a long-established Indigenous fishing community whose livelihood and social life are connected to the coastal environment. A conventional assessment of shops, businesses and formal employment cannot capture dependence on fishing, mangroves, coastal resources, household-based activities, local access and intergenerational livelihood practices. Any disruption to housing, access routes, coastal areas or natural resources may produce livelihood and cultural impacts that a conventional economic survey will not reflect.",
        requirement:
          "Conduct a dedicated Indigenous Fishermen Community and Livelihood Baseline Assessment before construction, documenting fishing activities, household income sources, mangrove and coastal-resource dependence, access patterns, community facilities and intergenerational practices. Establish measurable indicators for livelihood disruption, loss of resource access, income impacts and recovery, and design compensation and restoration according to the community’s actual dependence instead of formal employment or land-title status alone.",
        reference: "ESIA pp. 113–115.",
      },
    ],
  },
  {
    id: "gulshan",
    label: "Gulshan-e-Sikandarabad",
    icon: <FaUsers />,
    title: "Gulshan-e-Sikandarabad: Social Consent and Route",
    items: [
      {
        heading: "Community opposition, consultation gaps and baseline conditions require a documented design response",
        observation:
          "Residents reportedly opposed the expressway crossing the community and emphasized that their homes are their only assets. They requested that project and government officials visit the community, form committees and clarify the structural impacts. Residents also reported existing environmental problems, including open dumping, burning of waste, foul odours and smoke.",
        objection:
          "These findings should not be treated merely as recorded comments. Strong opposition to the alignment, particularly where residents identify their homes as their only assets, should trigger a clear examination of whether the alignment and structural design can be modified to avoid or reduce community impacts. The request for officials to visit also indicates that information, participation and trust were not fully resolved. Existing environmental degradation should not be used to discount additional project impacts; construction may further increase dust, access disruption and drainage problems. The ESIA needs to demonstrate how community concerns shaped design decisions and establish a clear cumulative environmental baseline.",
        requirement:
          "Conduct a dedicated design-stage public consultation after detailed alignment and structural drawings are available, and publish a formal response matrix. Establish project-specific contribution limits and a cumulative environmental monitoring baseline to distinguish existing problems from additional project impacts.",
      },
      {
        heading: "Vulnerable households need differentiated engagement",
        observation:
          "The consultation records mixed economic backgrounds and service deficits.",
        objection:
          "A single community meeting can mask differences between tenants, homeowners, informal workers, women, elderly residents and persons with disabilities.",
        requirement:
          "Conduct household-level vulnerability screening and separate consultations where needed.",
        reference: "ESIA Chapters 5 and 7.",
      },
    ],
  },
  {
    id: "receptors",
    label: "Schools, Hospitals & Welfare",
    icon: <FaHospital />,
    title: "Schools, Hospitals, Welfare Centres and Religious Places",
    items: [
      {
        heading: "Accessibility and sensitive-receptor protection require institution-specific design",
        observation:
          "ABSA College for the Deaf reports existing difficulties faced by deaf students when crossing roads and recommends a pedestrian bridge and effective dust control. Altamash Institute reports concerns regarding noise, dust, contamination, structural damage and vibration, and indicates that existing mitigation is inadequate. Schools have requested dust and noise control and pedestrian bridges. Consultations also identify mosques, welfare centres and an old home near the corridor.",
        objection:
          "These facilities should not be regarded as ordinary receptors subject to generic mitigation. Persons with disabilities may require accessible and predictable crossing arrangements and visual safety systems, while hospitals require uninterrupted emergency access and protection from dust, vibration and construction disruption. Schools are particularly sensitive during arrival and departure periods, and religious and welfare facilities may require quiet periods, reliable access and predictable schedules. Mitigation should be reconsidered at the design and construction-planning stages instead of relying only on general measures.",
        requirement:
          "Prepare a receptor-specific protection and accessibility plan covering ABSA College, healthcare facilities, schools, welfare centres and religious places, including accessible and safe pedestrian routes, visual warning systems, uninterrupted hospital and emergency access, vibration and dust limits, receptor-specific monitoring, school-time construction restrictions, and agreed work calendars and communication arrangements. These measures should be reviewed with each institution before construction and maintained through construction and operation.",
        reference: "ESIA pp. 116–119.",
      },
    ],
  },
  {
    id: "consultation",
    label: "Consultation Process",
    icon: <FaBullhorn />,
    title: "Stakeholder Consultation: Process Critique",
    items: [
      {
        heading: "Consultation quality cannot be judged by the number of meetings",
        observation:
          "The ESIA reports extensive engagement, including Key Informant Interviews, socio-economic surveys, government meetings and consultations with schools, hospitals and businesses. It states that consultation should be inclusive regardless of gender, income or ability and that further consultation will take place after detailed design and before disclosure/public hearing. However, the detailed consultation record appears to contain predominantly male named respondents, with limited evidence of separate, culturally appropriate engagement with women, persons with disabilities and other vulnerable households.",
        objection:
          "Effective consultation requires timely disclosure, inclusive participation, freedom from coercion and clear evidence that stakeholder concerns actually influenced project decisions. This is especially important where major alignment and structural decisions may create irreversible impacts. The process should demonstrate how material recommendations were accepted, modified or rejected, and why. Independent voices from civil society, ecological specialists, transport experts and social-safeguard professionals should also be incorporated for objective scrutiny.",
        requirement:
          "Prepare a Stakeholder Decision-Influence Matrix showing major concerns, project responses and reasons for acceptance or rejection; provide gender-disaggregated participation data and dedicated consultations with women, vulnerable households and persons with disabilities; conduct a design-stage public disclosure and consultation before final route/structural approval; and establish an independent technical review mechanism covering hydrology, biodiversity, transport and social safeguards.",
        reference: "ESIA pp. 108–127; ESIA Chapters 6–9.",
      },
    ],
  },
  {
    id: "overall",
    label: "Overall Assessment",
    icon: <FaLeaf />,
    title: "Environmental Overall Assessment",
    intro: [
      "From an environmental-science perspective, the main issue is not whether Karachi needs better freight mobility. It clearly does. The concern is whether a new high-capacity freight corridor has been designed and assessed as part of the ecological and transport system through which it passes.",
      "Three environmental receptors deserve priority status: Chinna Creek hydrodynamics, mangrove/intertidal ecology, and urban air/noise exposure. The ESIA recognizes all three, but the evidentiary depth is uneven. The creek and mangrove system is especially sensitive because physical structures can create nonlinear effects: a small restriction in tidal or drainage exchange can alter sedimentation, salinity, flood storage and habitat condition.",
      "The baseline also describes a degraded environment. Scientifically, this should increase the need for restoration and pollution control, not lower the significance of incremental damage. A degraded receiving waterbody may have less assimilative capacity, and a remnant mangrove patch can have disproportionate ecological value.",
    ],
    items: [
      {
        heading: "Use ecosystem function as an impact metric",
        observation:
          "The ESIA often counts trees, receptors and pollution levels separately.",
        objection:
          "Ecosystems function through linked hydrology, habitat and species processes. A numerical count of individual trees or affected receptors cannot by itself represent the loss of ecological function.",
      },
      {
        heading: "Assess transport mode before justifying additional road capacity",
        observation:
          "The project is presented as a major road connection between Karachi Port and Qayumabad intended to facilitate traffic and improve logistics.",
        objection:
          "A freight-corridor ESIA needs to distinguish between transport demand and road demand. The existence of freight demand does not automatically establish that additional road capacity is the environmentally preferable response. Karachi Port’s railway connectivity creates a potentially important alternative for moving port-originating freight toward the wider national network. If rail can accommodate a significant proportion of freight, the externalities of heavy road traffic, including emissions, noise, congestion, road accidents and pavement impacts, could be reduced. Conversely, if rail capacity or operational constraints make substantial modal shift impractical, this should be demonstrated quantitatively instead of assumed.",
        requirement:
          "The strategic question is broader than “Which road corridor should be built?” It is “What combination of transport modes can meet Karachi Port’s future freight demand while producing the lowest practicable environmental and social impact?” Before constructing another major freight road corridor through sensitive and densely settled areas, the ESIA should demonstrate why existing rail capacity, improved rail freight, or a road–rail combination cannot accommodate a larger share of projected port freight demand.",
        reference: "ESIA Chapters 5–6.",
      },
    ],
  },
];

const conditions = [
  {
    id: 1,
    title: "Independent Hydrodynamic and Sediment-Transport Study",
    text: "Complete an independent 2-D hydrodynamic and sediment-transport assessment of Chinna Creek covering tidal exchange, rainfall, storm surge, flooding and sea-level-rise scenarios, showing how the structures may affect circulation, sediment movement, drainage, flood storage and downstream/coastal conditions.",
  },
  {
    id: 2,
    title: "Mangrove No-Net-Loss Framework",
    text: "Quantify the area, ecological function and biodiversity value of mangrove and intertidal habitat affected. Demonstrate that avoidance and minimization were fully considered before compensation, and where residual impacts remain, establish an ecologically equivalent restoration programme with multi-year survival and performance monitoring.",
  },
  {
    id: 3,
    title: "Comprehensive Alternatives Assessment",
    text: "Publish a transparent, quantitative comparison of KPQC, the Northern Bypass and other feasible road corridors, together with rail-based freight, demand-management and freight-management improvements and a realistic “No KPQC with feasible transport-management measures” scenario, using consistent environmental, social, transport, economic and climate-resilience criteria.",
  },
  {
    id: 4,
    title: "Rail-Freight Alternative and Complementarity Assessment",
    text: "Because Karachi Port has an existing railway connection, assess rail as an alternative or complementary mode before committing to a new expressway. Compare rail and road on capacity, travel time, reliability, costs, land, emissions, air pollution, congestion, pavement impacts, accident risk, social impacts and scalability, and identify the constraints, last-mile connections and terminal capacity needed for greater rail use.",
  },
  {
    id: 5,
    title: "Displacement and Livelihood Screening",
    text: "Complete a pre-construction inventory of affected houses, businesses, access routes, livelihoods and community facilities, including households without formal land title, distinguishing legal tenure from historical occupation, livelihood dependence and actual social impact.",
  },
  {
    id: 6,
    title: "Corridor-Wide Construction Traffic Management",
    text: "Approve a corridor-wide Traffic Management and Construction Staging Plan before major works begin, including diversion modelling, peak-hour impacts, emergency access, pedestrian safety and access to schools, hospitals, businesses and communities.",
  },
  {
    id: 7,
    title: "Operational Transport and Induced-Demand Assessment",
    text: "Update the transport model to include freight growth, route diversion, tolling, induced demand and long-term land-use change over the full appraisal period, reporting measurable outcomes under project, no-project and alternative scenarios.",
  },
  {
    id: 8,
    title: "Air Quality and Noise Assessment",
    text: "Undertake receptor-level modelling of PM2.5, PM10, NOx and noise for construction and operation, including night-time freight activity and sensitive receptors such as schools, hospitals, residential areas and community facilities.",
  },
  {
    id: 9,
    title: "Road-Safety and Dangerous-Goods Assessment",
    text: "Conduct independent road-safety audits at design, pre-opening and operational stages, covering heavy freight, hazardous cargo, pedestrian exposure, emergency response and accident scenarios.",
  },
  {
    id: 10,
    title: "Independent Environmental and Social Monitoring",
    text: "Ensure third-party monitoring is institutionally independent, has access to raw data and publishes executive findings, continuing through construction and operation instead of ending at project completion.",
  },
  {
    id: 11,
    title: "Full Operational ESMP",
    text: "Prepare a comprehensive Operational ESMP covering long-term noise, air quality, stormwater, hydrology, biodiversity, road safety, emergency response, climate resilience and community impacts. Permanent operational impacts should not be assumed to disappear after construction.",
  },
  {
    id: 12,
    title: "Consultation and Feedback Loop",
    text: "After detailed alignment and structural drawings are available, conduct a meaningful, informed and effective consultation with affected communities, institutions and stakeholders, following the standards set out below.",
  },
];

const consultationStandards = [
  {
    id: 1,
    title: "Go to the community",
    paragraphs: [
      "With local, Indigenous and fishing communities, formal meetings or inviting objections will not be sufficient. Experts and planners should visit affected communities and their residential areas, spend time among them, and understand their everyday concerns and lived realities.",
      "This includes their relationship with land, sea, creeks, mangroves and natural resources, the basis of their local economy, and how construction or operation could affect their income, employment, housing, mobility and traditional way of life. This cannot be learned by sitting in offices, relying on secondary data, or conducting a few formal interviews.",
    ],
  },
  {
    id: 2,
    title: "Communicate in a way people can use",
    paragraphs: [
      "Consultations should be conducted in the local language and in clear, simple terms. Communities should be shown the complete route, maps, designs, benefits and disadvantages, environmental impacts and effects on livelihoods, and given a real opportunity to ask questions, disagree, raise concerns and present their own proposals.",
      "Expecting ordinary community members to read complex English technical reports and formulate objections is a formal and unequal process, not effective public consultation. Separate and accessible approaches should be provided for women, vulnerable households, persons with disabilities and Indigenous fishing communities.",
    ],
  },
  {
    id: 3,
    title: "Respond publicly and keep grievance channels open",
    bullets: [
      "Which major concerns were acknowledged and addressed",
      "Which recommendations were incorporated into the design",
      "Which objections or proposals were rejected",
      "The technically justified reasons for each decision",
      "A fully operational Grievance Redress Mechanism before construction, with local-language and confidential channels, safe access for women and vulnerable persons, complaint tracking and an independent appeal/escalation route",
    ],
    paragraphs: [
      "Following consultation, a clear Response Matrix should be publicly disclosed, showing:",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

const ReviewBlock = ({ tone, label, text }) => {
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <div className={`esia-block esia-block-${tone}`}>
      <span className="esia-tag">{label}</span>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

const Reference = ({ reference, link }) => {
  if (!reference && !link) return null;

  return (
    <p className="esia-reference">
      {reference && <span>Document reference: {reference}</span>}
      {link && (
        <>
          {reference && " · "}
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} <FaExternalLinkAlt aria-hidden="true" size={10} />
          </a>
        </>
      )}
    </p>
  );
};

const ReviewItem = ({ item }) => (
  <article className="esia-item">
    {item.heading && <h4>{item.heading}</h4>}

    {item.observation && (
      <ReviewBlock
        tone="observation"
        label="ESIA Observation"
        text={item.observation}
      />
    )}

    {item.objection && (
      <ReviewBlock tone="objection" label="Objection" text={item.objection} />
    )}

    {item.requirement && (
      <ReviewBlock
        tone="requirement"
        label="Required Correction"
        text={item.requirement}
      />
    )}

    <Reference reference={item.reference} link={item.link} />
  </article>
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Environment = () => {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const currentTheme = themes.find((theme) => theme.id === activeTheme);

  const handleTabKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % themes.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + themes.length) % themes.length;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveTheme(themes[nextIndex].id);
      document.getElementById(`esia-tab-${themes[nextIndex].id}`)?.focus();
    }
  };

  return (
    <>
      <style>{styles}</style>

      {/* Hero */}
      <section className="page-hero environment-hero">
        <div className="container page-hero-content">
          <span className="page-label">Our Environment</span>
          <h1>Protecting Nature, Communities and Future Generations</h1>
          <p>
            Healthy communities depend on clean water, safe land, forests and
            a protected natural environment.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="environment-intro section-padding">
        <div className="container environment-intro-grid">
          <div className="environment-intro-content">
            <SectionTitle
              label="Environmental Justice"
              title="Nature and Human Rights Are Connected"
              alignment="left"
            />

            <p>
              Environmental damage directly affects the health, livelihoods
              and cultural identity of indigenous communities.
            </p>

            <p>
              We support community-led solutions that protect natural
              resources while promoting sustainable and responsible
              development.
            </p>
          </div>

          <div className="environment-values">
            <div className="environment-value">
              <FaTint aria-hidden="true" />
              <div>
                <h3>Clean Water</h3>
                <p>Protecting water sources from pollution and misuse.</p>
              </div>
            </div>

            <div className="environment-value">
              <FaTree aria-hidden="true" />
              <div>
                <h3>Healthy Forests</h3>
                <p>Preserving forests and natural habitats.</p>
              </div>
            </div>

            <div className="environment-value">
              <FaRecycle aria-hidden="true" />
              <div>
                <h3>Clean Communities</h3>
                <p>Promoting responsible waste management.</p>
              </div>
            </div>

            <div className="environment-value">
              <FaSeedling aria-hidden="true" />
              <div>
                <h3>Sustainable Future</h3>
                <p>Supporting long-term environmental solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="environment-projects section-padding">
        <div className="container">
          <SectionTitle
            label="Our Initiatives"
            title="Environmental Projects"
            description="Discover the areas where we work with communities to protect Sindh’s natural heritage."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} link="/contact" />
            ))}
          </div>
        </div>
      </section>

      {/* ESIA Review */}
      <section className="esia-review section-padding" id="esia-review">
        <div className="container">
          <SectionTitle
            label="Environmental Review"
            title="Objections to the KPQC Environmental & Social Impact Assessment"
            description="An evidence-based review of the Karachi Port to Qayumabad Corridor Project, submitted by the Sindh Indigenous Rights Alliance."
          />

          {/* Overview */}
          <div className="esia-overview">
            <div className="esia-overview-card">
              <h3>Summary of Findings</h3>
              <p>
                The proposed KPQC is a strategically important freight corridor:
                a four-lane access-controlled facility intended to connect
                Karachi Port/East Wharf with Qayumabad and the
                Shahrah-e-Bhutto/M-9 system.
              </p>
              <p>
                The ESIA itself recognizes that the corridor passes through
                dense urban areas, sensitive receptors and the Chinna Creek
                coastal environment. It also acknowledges that the project will
                have significant and irreversible effects at sensitive
                locations.
              </p>
            </div>

            <div className="esia-overview-card">
              <h3>Review Details</h3>
              <dl className="esia-meta">
                {reviewMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Stats */}
          <div className="esia-stats" role="list">
            <div className="esia-stat" role="listitem">
              <strong>{priorityFindings.length}</strong>
              <span>Priority objections</span>
            </div>
            <div className="esia-stat" role="listitem">
              <strong>{themes.length}</strong>
              <span>Review themes</span>
            </div>
            <div className="esia-stat" role="listitem">
              <strong>{conditions.length}</strong>
              <span>Conditions before SEPA approval</span>
            </div>
            <div className="esia-stat" role="listitem">
              <strong>423</strong>
              <span>Mangroves affected (per ESIA)</span>
            </div>
          </div>

          {/* Priority findings */}
          <div className="esia-block-wrap">
            <h3 className="esia-subhead">Finding and Priority Objections</h3>
            <p className="esia-subhead-note">
              Four issues go to the core of whether the ESIA can support an
              approval decision.
            </p>

            <div className="esia-priority-grid">
              {priorityFindings.map((finding) => (
                <article className="esia-priority-card" key={finding.id}>
                  <span className="esia-priority-number" aria-hidden="true">
                    {finding.id}
                  </span>
                  <h4>{finding.title}</h4>

                  <ReviewBlock
                    tone="observation"
                    label="ESIA Observation"
                    text={finding.observation}
                  />
                  <ReviewBlock
                    tone="objection"
                    label="Objection"
                    text={finding.objection}
                  />
                  <Reference reference={finding.reference} />
                </article>
              ))}
            </div>
          </div>

          {/* Evidence standard */}
          <div className="esia-block-wrap">
            <h3 className="esia-subhead">Review Method and Evidence Standard</h3>
            <p className="esia-subhead-note">
              Each objection is anchored to the ESIA’s own statements, tables,
              consultation findings or mitigation commitments. The assessment
              follows four principles.
            </p>

            <div className="esia-principles">
              {principles.map((principle) => (
                <article className="esia-principle" key={principle.id}>
                  <span className="esia-principle-number" aria-hidden="true">
                    0{principle.id}
                  </span>
                  <h4>{principle.title}</h4>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Thematic review */}
          <div className="esia-block-wrap">
            <h3 className="esia-subhead">Detailed Review by Theme</h3>
            <p className="esia-subhead-note">
              Select a theme to read the ESIA observations, our objections and
              the corrections we require.
            </p>

            <div className="esia-themes">
              <div
                className="esia-tablist"
                role="tablist"
                aria-label="Review themes"
                aria-orientation="vertical"
              >
                {themes.map((theme, index) => (
                  <button
                    key={theme.id}
                    id={`esia-tab-${theme.id}`}
                    type="button"
                    role="tab"
                    className="esia-tab"
                    aria-selected={activeTheme === theme.id}
                    aria-controls={`esia-panel-${theme.id}`}
                    tabIndex={activeTheme === theme.id ? 0 : -1}
                    onClick={() => setActiveTheme(theme.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    <span aria-hidden="true">{theme.icon}</span>
                    {theme.label}
                  </button>
                ))}
              </div>

              <div
                className="esia-panel"
                role="tabpanel"
                id={`esia-panel-${currentTheme.id}`}
                aria-labelledby={`esia-tab-${currentTheme.id}`}
              >
                <h3>{currentTheme.title}</h3>

                {currentTheme.intro && (
                  <div className="esia-panel-intro">
                    {currentTheme.intro.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {currentTheme.items.map((item, index) => (
                  <ReviewItem item={item} key={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Rail callout */}
          <div className="esia-block-wrap">
            <div className="esia-callout">
              <div className="esia-callout-icon" aria-hidden="true">
                <FaTrain />
              </div>
              <div>
                <h3>The Strategic Question Is Broader Than “Which Road?”</h3>
                <p>
                  Karachi Port is already connected to the national railway
                  network. Before another major freight road corridor is built
                  through environmentally sensitive and densely settled areas,
                  the ESIA should demonstrate, quantitatively, why existing rail
                  capacity, improved rail freight, or a road–rail combination
                  cannot carry a larger share of projected port freight.
                </p>
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="esia-block-wrap">
            <h3 className="esia-subhead">Priority Conditions Before SEPA Approval</h3>
            <p className="esia-subhead-note">
              We ask that approval be conditional on the following studies and
              commitments being completed and made public.
            </p>

            <ol className="esia-conditions">
              {conditions.map((condition) => (
                <li className="esia-condition" key={condition.id}>
                  <span className="esia-condition-number" aria-hidden="true">
                    {condition.id}
                  </span>
                  <div>
                    <h4>{condition.title}</h4>
                    <p>{condition.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Consultation standards */}
          <div className="esia-block-wrap">
            <h3 className="esia-subhead">What Meaningful Consultation Requires</h3>
            <p className="esia-subhead-note">
              Meaningful consultation means affected people are properly
              informed, their concerns are genuinely understood, their knowledge
              is incorporated into planning and, where practicable, the route
              and design are modified in response. It should not begin only
              after the main decisions have already been finalized.
            </p>

            <div className="esia-consult-grid">
              {consultationStandards.map((standard) => (
                <article className="esia-consult-card" key={standard.id}>
                  <h4>{standard.title}</h4>

                  {standard.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {standard.bullets && (
                    <ul>
                      {standard.bullets.map((bullet) => (
                        <li key={bullet}>
                          <FaCheckCircle aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          <p className="esia-signoff">Sindh Indigenous Rights Alliance</p>
        </div>
      </section>

      {/* Message */}
      <section className="environment-message section-padding">
        <div className="container environment-message-content">
          <FaLeaf className="environment-message-icon" aria-hidden="true" />
          <h2>Every Community Deserves a Healthy Environment</h2>
          <p>
            Environmental protection becomes stronger when local communities
            are informed, respected and included in decision-making.
          </p>
        </div>
      </section>

      <MembershipCTA />
    </>
  );
};

export default Environment;