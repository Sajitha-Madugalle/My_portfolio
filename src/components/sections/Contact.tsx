import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="reveal reveal-up">
        <span className="eyebrow">LET'S CONNECT</span>

        <h2>Research, engineering and collaboration.</h2>

        <p>
          Feel free to reach out about research opportunities, engineering
          projects or collaborations.
        </p>
      </div>

      <div className="contact-links reveal reveal-up stagger-1">
        <a href="mailto:your@email.com" className="contact-card">
          <Mail size={18} className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <Linkedin size={18} className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <Github size={18} className="contact-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <GraduationCap size={18} className="contact-icon" />
          <span>Google Scholar</span>
        </a>
      </div>

      <footer className="reveal reveal-up stagger-2">
        © {new Date().getFullYear()} Sajitha Madugalle · Designed with precision.
      </footer>
    </section>
  );
}
