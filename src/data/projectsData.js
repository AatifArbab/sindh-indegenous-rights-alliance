const projectsData = [
  {
    id: 1,
    title: "Clean Water Protection",
    slug: "clean-water-protection",
    description:
      "Promoting access to clean water and protecting community water sources from pollution and misuse.",
    image: "/images/environment/water-conservation.jpg",
    category: "Water",
    status: "Ongoing",
    featured: true,
  },
  {
    id: 2,
    title: "Forest Conservation",
    slug: "forest-conservation",
    description:
      "Working with communities to protect forests, wildlife and important natural habitats.",
    image: "/images/environment/forest-protection.jpg",
    category: "Forests",
    status: "Ongoing",
    featured: true,
  },
  {
    id: 3,
    title: "Climate Awareness",
    slug: "climate-awareness",
    description:
      "Helping communities understand climate change and prepare for its effects.",
    image: "/images/environment/climate-awareness.jpg",
    category: "Climate",
    status: "Ongoing",
    featured: true,
  },
  {
    id: 4,
    title: "Clean Community Campaign",
    slug: "clean-community-campaign",
    description:
      "Encouraging responsible waste disposal and cleaner public spaces in local communities.",
    image: "/images/environment/clean-community.jpg",
    category: "Cleanliness",
    status: "Ongoing",
    featured: false,
  },
  {
    id: 5,
    title: "Tree Plantation",
    slug: "tree-plantation",
    description:
      "Planting native trees with volunteers to create cleaner and greener communities.",
    image: "/images/environment/tree-plantation.jpg",
    category: "Plantation",
    status: "Ongoing",
    featured: false,
  },
  {
    id: 6,
    title: "Sustainable Agriculture",
    slug: "sustainable-agriculture",
    description:
      "Supporting responsible farming practices and protection of agricultural land.",
    image: "/images/environment/agriculture.jpg",
    category: "Agriculture",
    status: "Planned",
    featured: false,
  },
];

export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

export default projectsData;