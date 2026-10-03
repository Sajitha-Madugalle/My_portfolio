import { Download, Mail } from "lucide-react";
import NewsCarousel from "../common/NewsCarousel";

export default function About() {
  return (
    <section id="about" className="section hero-section">
      <div id="about-profile" className="hero-profile">
        <div className="hero-image">
          <img
            src="/images/profile/profile-placeholder.jpg"
            alt="Sajitha Madugalle"
          />
        </div>

        <div className="hero-content">
          <span className="eyebrow">HELLO, I'M</span>

          <h1>Sajitha Madugalle</h1>

          <h2>
            Biomedical Engineering graduand · Bioelectronics · Wearable
            Biosensing · Mixed-Signal Systems
          </h2>

          <p>
            I work on electronic systems for physiological sensing, wearable
            devices, analog and mixed-signal electronics, and embedded
            biomedical instrumentation.
          </p>

          <div className="affiliations">
            <div className="affiliation">
              <img
                src="/images/affiliations/uom-placeholder.png"
                alt="University of Moratuwa"
              />
              <div>
                <strong>University of Moratuwa</strong>
                <span>Sri Lanka</span>
              </div>
            </div>

            <div className="affiliation">
              <img
                src="/images/affiliations/usyd-placeholder.png"
                alt="The University of Sydney"
              />
              <div>
                <strong>The University of Sydney</strong>
                <span>Research Collaboration</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              <Mail size={17} />
              Get in Touch
            </a>

            <a
              href="/documents/Sajitha_Madugalle_CV.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <NewsCarousel />
    </section>
  );
}
