import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, reveal all immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            // Optional: unobserve once revealed so animation only triggers once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.08,
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal:not(.revealed)");
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-observe if dynamic content mounts
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
