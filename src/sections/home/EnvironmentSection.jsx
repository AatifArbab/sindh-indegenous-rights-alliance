import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import { getFeaturedProjects } from "../../data/projectsData";

const EnvironmentSection = () => {
  const environmentProjects = getFeaturedProjects();

  return (
    <section className="environment-section section-padding">
      <div className="container">
        <SectionTitle
          label="Our Environment"
          title="Protecting Sindh’s Natural Heritage"
          description="Explore our community-led environmental projects."
        />

        <div className="projects-grid">
          {environmentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              link="/environment"
            />
          ))}
        </div>

        <div className="section-action">
          <Link to="/environment" className="button button-primary">
            Explore Our Environmental Work
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;