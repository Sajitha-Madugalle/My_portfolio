import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import ThemeToggle from "./components/layout/ThemeToggle";
import BackgroundDecor from "./components/layout/BackgroundDecor";

import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Publications from "./components/sections/Publications";
import Research from "./components/sections/Research";
import Skills from "./components/sections/Skills";
import Awards from "./components/sections/Awards";
import LifeOutsideLab from "./components/sections/LifeOutsideLab";
import Contact from "./components/sections/Contact";

import useScrollProfile from "./hooks/useScrollProfile";
import useActiveSection from "./hooks/useActiveSection";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const showDockedProfile = useScrollProfile("about-profile");
  const activeSection = useActiveSection([
    "about",
    "education",
    "experience",
    "publications",
    "research",
    "skills",
    "awards",
    "life",
  ]);

  return (
    <div className="app">
      <BackgroundDecor />

      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((value) => !value)}
        showDockedProfile={showDockedProfile}
        activeSection={activeSection}
      />

      <main
        className={`main-content ${
          sidebarOpen ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <ThemeToggle />

        <About />
        <Education />
        <Experience />
        <Publications />
        <Research />
        <Skills />
        <Awards />
        <LifeOutsideLab />
        <Contact />
      </main>
    </div>
  );
}
