import { ChevronLeft, Github, Linkedin, Mail } from "lucide-react";
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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -25;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside
      className={`sidebar ${open ? "open" : "collapsed"}`}
      aria-label="Sidebar navigation"
    >
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label={open ? "Collapse navigation" : "Expand navigation"}
        title={open ? "Collapse navigation" : "Expand navigation"}
      >
        <ChevronLeft
          size={17}
          className={`sidebar-toggle-icon ${open ? "" : "rotated"}`}
        />
      </button>

      <button
        className="sidebar-logo"
        onClick={() => scrollToSection("about")}
        aria-label="Back to top"
      >
        <span>SM</span>
      </button>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigationItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              className={`sidebar-nav-item ${isActive ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
              title={label}
            >
              <span className="sidebar-nav-icon">
                <Icon size={18} />
              </span>
              <span className="sidebar-nav-label">{label}</span>
              {isActive && <span className="sidebar-active-indicator" />}
            </button>
          );
        })}
      </nav>

      <div
        className={`sidebar-profile ${
          open && showDockedProfile ? "visible" : ""
        }`}
      >
        <img
          src="/images/profile/profile-placeholder.jpg"
          alt="Sajitha Madugalle"
          className="sidebar-profile-avatar"
        />

        <div className="sidebar-profile-info">
          <h3>Sajitha Madugalle</h3>
          <p>
            Biomedical Engineering
            <br />
            Bioelectronics · Wearable Biosensing
          </p>
        </div>

        <div className="sidebar-socials">
          <a href="#" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="#" aria-label="GitHub" title="GitHub">
            <Github size={16} />
          </a>
          <a href="mailto:your@email.com" aria-label="Email" title="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}
