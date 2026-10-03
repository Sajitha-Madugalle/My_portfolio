interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  points: string[];
}

export default function ProjectCard({
  title,
  image,
  description,
  points,
}: ProjectCardProps) {
  return (
    <article className="project-card card">
      <img src={image} alt="" />

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
