import { lifeItems } from "../../data/life";
import SectionTitle from "../common/SectionTitle";

export default function LifeOutsideLab() {
  return (
    <section id="life" className="section life-section">
      <SectionTitle
        title="Life Outside the Lab"
        subtitle="A little more about the person behind the circuits."
      />

      <div className="life-grid">
        {lifeItems.map((item, index) => (
          <article
            className={`life-card reveal reveal-up stagger-${(index % 4) + 1}`}
            key={item.title}
          >
            <div className="life-card-image-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
