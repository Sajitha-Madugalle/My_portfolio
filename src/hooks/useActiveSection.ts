import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return activeSection;
}
