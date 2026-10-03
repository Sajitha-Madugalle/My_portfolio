import ProjectCard from "../common/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

export default function Research() {
  return (
    <section id="research" className="section">
      <SectionTitle
        title="Research & Projects"
        subtitle="Selected work across bioelectronics, wearable sensing and electronic systems."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
