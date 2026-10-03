import SectionTitle from "../common/SectionTitle";

const items = [
  {
    year: "2025",
    role: "Research Intern",
    place: "The University of Sydney",
    text: "Research involving deployable structures, computational design and prototyping.",
  },
  {
    year: "2026",
    role: "Visiting Instructor",
    place: "University of Moratuwa",
    text: "Teaching and supporting electronic instrumentation and medical electronics.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" />

      <div className="timeline">
        {items.map((item, index) => (
          <article
            className={`timeline-item reveal reveal-up stagger-${index + 1}`}
            key={`${item.year}-${item.role}`}
          >
            <span className="timeline-date">{item.year}</span>

            <div className="card">
              <h3>{item.role}</h3>
              <h4>{item.place}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
