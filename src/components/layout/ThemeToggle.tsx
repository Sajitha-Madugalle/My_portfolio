import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setIsRotating(true);
    setDark((value) => !value);
    setTimeout(() => setIsRotating(false), 450);
  };

  return (
    <button
      className={`theme-toggle ${isRotating ? "rotating" : ""}`}
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="theme-toggle-inner">
        {dark ? (
          <Sun size={18} className="theme-icon sun" />
        ) : (
          <Moon size={18} className="theme-icon moon" />
        )}
      </span>
    </button>
  );
}
