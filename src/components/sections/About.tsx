import { Download, Mail } from "lucide-react";
import NewsCarousel from "../common/NewsCarousel";

export default function About() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const top =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        20;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="section hero-section">
      <div id="about-profile" className="hero-profile">
        <div className="hero-image reveal reveal-left">
          <div className="hero-image-frame">
            <img
              src="/images/profile/profile-placeholder.jpg"
              alt="Sajitha Madugalle"
            />
            <div className="hero-image-glow" />
          </div>
        </div>

        <div className="hero-content reveal reveal-up stagger-1">
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
            <a
              href="#contact"
              onClick={scrollToContact}
              className="button button-primary"
            >
              <Mail size={17} className="btn-icon" />
              <span>Get in Touch</span>
            </a>

            <a
              href="/documents/Sajitha_Madugalle_CV.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} className="btn-icon" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      <NewsCarousel />
    </section>
  );
}
