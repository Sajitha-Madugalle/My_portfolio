import SectionTitle from "../common/SectionTitle";

const awards = [
  {
    title: "Dean's List",
    subtitle: "University of Moratuwa",
  },
  {
    title: "IEEE CASS SDC Phase 1 Winner",
    subtitle: "2026",
  },
  {
    title: "Silicon Pulse Analog Design Champion",
    subtitle: "2024",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section">
      <SectionTitle title="Awards & Recognition" />

      <div className="award-grid">
        {awards.map((award) => (
          <article className="card" key={award.title}>
            <h3>{award.title}</h3>
            <p className="muted">{award.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
