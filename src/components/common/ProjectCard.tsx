interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  points: string[];
  index?: number;
}

export default function ProjectCard({
  title,
  image,
  description,
  points,
  index = 0,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card card reveal reveal-up stagger-${(index % 3) + 1}`}
    >
      <div className="project-card-image-wrap">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
