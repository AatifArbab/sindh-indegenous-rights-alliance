import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  category = "Environment",
  link = "/environment",
}) => {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-image"
          loading="lazy"
        />

        <span className="project-category">{category}</span>
      </div>

      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={link} className="project-link">
          View project
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;