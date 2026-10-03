import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

export default function Publications() {
  return (
    <section id="publications" className="section">
      <SectionTitle title="Publications" />

      <article className="card publication-card reveal reveal-up stagger-1">
        <div>
          <span className="card-kicker">IEEE BioCAS 2026</span>

          <h3>
            A Dry-Contact Ear-EEG System with Continuous ESI Mismatch Monitoring
            for Motion Artifact Cancellation Using DRL Stimulus
          </h3>

          <p className="muted">
            Conference paper · Add DOI / paper link when available.
          </p>
        </div>

        <a href="#" className="text-link">
          <span>View paper</span>
          <ArrowUpRight size={16} className="text-link-icon" />
        </a>
      </article>
    </section>
  );
}
