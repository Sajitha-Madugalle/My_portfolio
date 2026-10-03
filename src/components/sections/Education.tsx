import SectionTitle from "../common/SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle title="Education" />

      <div className="two-column-grid">
        <article className="card reveal reveal-up stagger-1">
          <span className="card-kicker">B.Sc. (Hons)</span>
          <h3>University of Moratuwa</h3>
          <p>Biomedical Engineering</p>
          <span className="muted">2021 – 2026</span>
        </article>

        <article className="card reveal reveal-up stagger-2">
          <span className="card-kicker">Research Internship</span>
          <h3>The University of Sydney</h3>
          <p>Research Collaboration</p>
          <span className="muted">2025</span>
        </article>
      </div>
    </section>
  );
}
