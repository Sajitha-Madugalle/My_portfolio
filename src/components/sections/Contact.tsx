import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <span className="eyebrow">LET'S CONNECT</span>

        <h2>Research, engineering and collaboration.</h2>

        <p>
          Feel free to reach out about research opportunities, engineering
          projects or collaborations.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:your@email.com">
          <Mail size={18} />
          Email
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <GraduationCap size={18} />
          Google Scholar
        </a>
      </div>

      <footer>© {new Date().getFullYear()} Sajitha Madugalle</footer>
    </section>
  );
}
