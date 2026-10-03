import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
