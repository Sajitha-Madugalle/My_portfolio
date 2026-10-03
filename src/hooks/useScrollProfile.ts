import { useEffect, useState } from "react";

export default function useScrollProfile(targetId: string) {
  const [showDockedProfile, setShowDockedProfile] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDockedProfile(!entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [targetId]);

  return showDockedProfile;
}
