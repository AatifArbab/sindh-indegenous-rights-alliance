const newsData = [
  {
    id: 1,
    title: "Community Awareness Session Held in Sindh",
    slug: "community-awareness-session",
    summary:
      "Local communities participated in an awareness session focused on indigenous rights and social justice.",
    content: [
      "Sindh Indigenous Rights Alliance organized a community awareness session focused on indigenous rights, dignity and social justice.",
      "Community members, volunteers and local representatives discussed the challenges faced by indigenous communities.",
      "Participants received information about peaceful advocacy, community organization and the importance of protecting cultural identity.",
      "The alliance plans to arrange similar activities in other districts of Sindh.",
    ],
    image: "/images/news/community-session.jpg",
    date: "10 September 2026",
    category: "Community",
    author: "SIRA Media Team",
    featured: true,
  },
  {
    id: 2,
    title: "Campaign Launched to Protect Natural Resources",
    slug: "protect-natural-resources",
    summary:
      "A community campaign has been launched to protect Sindh’s water, forests and agricultural land.",
    content: [
      "Sindh Indigenous Rights Alliance has launched a community campaign to protect natural resources across Sindh.",
      "The campaign focuses on clean water, forests, agricultural land and natural habitats.",
      "Community meetings, environmental education and plantation activities will be organized under this initiative.",
      "Local residents will be encouraged to participate and report environmental damage in their areas.",
    ],
    image: "/images/news/environment-campaign.jpg",
    date: "5 September 2026",
    category: "Environment",
    author: "Environment Team",
    featured: true,
  },
  {
    id: 3,
    title: "Young Volunteers Join the Alliance",
    slug: "young-volunteers-join-alliance",
    summary:
      "Young volunteers have joined our mission for equality, dignity and environmental justice.",
    content: [
      "Young volunteers from several districts have joined the Sindh Indigenous Rights Alliance.",
      "They will support awareness programs, community activities and environmental campaigns.",
      "The alliance welcomes young people who want to contribute their skills and time toward positive social change.",
    ],
    image: "/images/news/young-volunteers.jpg",
    date: "1 September 2026",
    category: "Membership",
    author: "Membership Team",
    featured: true,
  },
  {
    id: 4,
    title: "Community Leaders Discuss Indigenous Rights",
    slug: "community-leaders-discuss-rights",
    summary:
      "Community leaders gathered to discuss challenges and practical solutions for indigenous communities.",
    content: [
      "Community leaders and representatives attended a meeting about indigenous rights in Sindh.",
      "The discussion covered education, access to resources, cultural protection and participation in local decisions.",
      "Participants agreed to improve coordination and continue peaceful community advocacy.",
    ],
    image: "/images/news/community-leaders.jpg",
    date: "25 August 2026",
    category: "Rights",
    author: "SIRA Media Team",
    featured: false,
  },
  {
    id: 5,
    title: "Tree Plantation Activity Organized",
    slug: "tree-plantation-activity",
    summary:
      "Volunteers and community members planted trees to support a cleaner and healthier environment.",
    content: [
      "Volunteers and local community members participated in a tree plantation activity.",
      "Native trees were planted to improve local green spaces and raise environmental awareness.",
      "Participants were also guided about tree care and the importance of protecting natural ecosystems.",
    ],
    image: "/images/news/tree-plantation.jpg",
    date: "18 August 2026",
    category: "Environment",
    author: "Environment Team",
    featured: false,
  },
  {
    id: 6,
    title: "Membership Program Opens Across Sindh",
    slug: "membership-program-opens",
    summary:
      "Citizens, volunteers and community representatives can now apply to become members of the alliance.",
    content: [
      "The Sindh Indigenous Rights Alliance has opened its membership program.",
      "Individuals who support community rights, cultural protection and environmental justice are encouraged to apply.",
      "Applications can be submitted through the membership page of our website.",
    ],
    image: "/images/news/membership-program.jpg",
    date: "10 August 2026",
    category: "Membership",
    author: "Membership Team",
    featured: false,
  },
];

export const getFeaturedNews = () => {
  return newsData.filter((news) => news.featured);
};

export const getNewsBySlug = (slug) => {
  return newsData.find((news) => news.slug === slug);
};

export default newsData;