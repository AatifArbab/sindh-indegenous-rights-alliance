const SectionTitle = ({
  label,
  title,
  description,
  alignment = "center",
}) => {
  return (
    <div className={`section-title section-title-${alignment}`}>
      {label && <span className="section-label">{label}</span>}

      <h2>{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}

      <span className="title-line" aria-hidden="true" />
    </div>
  );
};

export default SectionTitle;