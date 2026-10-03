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
        {lifeItems.map((item) => (
          <article className="life-card" key={item.title}>
            <img src={item.image} alt="" />

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
