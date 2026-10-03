import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { navigationItems } from "../../data/navigation";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  showDockedProfile: boolean;
  activeSection: string;
}

export default function Sidebar({
  open,
  onToggle,
  showDockedProfile,
  activeSection,
}: SidebarProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label="Toggle navigation"
      >
        {open ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
      </button>

      <button
        className="sidebar-logo"
        onClick={() => scrollToSection("about")}
        aria-label="Back to top"
      >
        SM
      </button>

      {open && (
        <>
          <nav className="sidebar-nav" aria-label="Main navigation">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollToSection(id)}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div
            className={`sidebar-profile ${
              showDockedProfile ? "visible" : ""
            }`}
          >
            <img
              src="/images/profile/profile-placeholder.jpg"
              alt="Sajitha Madugalle"
            />

            <h3>Sajitha Madugalle</h3>

            <p>
              Biomedical Engineering
              <br />
              Bioelectronics · Wearable Biosensing
            </p>

            <div className="sidebar-socials">
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href="mailto:your@email.com" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
