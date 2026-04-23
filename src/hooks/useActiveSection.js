import { useEffect, useState } from "react";

/**
 * useActiveSection hook
 * Tracks which section is currently in view using IntersectionObserver
 * Handles sticky navbar offset and provides robust section detection
 *
 * @param {string[]} sectionIds - Array of section IDs to track (e.g., ["about", "experience"])
 * @returns {string} The ID of the currently active section
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    // Get all section elements
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    // Calculate navbar height dynamically for offset
    // The sticky navbar is ~70px (64px py-4 + border)
    const NAVBAR_HEIGHT = 70;

    // IntersectionObserver configuration
    // rootMargin: negative top margin accounts for sticky navbar
    // Negative bottom margin ensures lower sections don't become active too early
    const observerOptions = {
      // -70px from top = navbar height + small offset
      // -60% from bottom = prevents lower sections from stealing focus
      rootMargin: `-${NAVBAR_HEIGHT}px 0px -60% 0px`,
      // Multiple thresholds for smooth detection
      threshold: [0.1, 0.25, 0.5, 0.75],
    };

    let activeIndex = -1;

    const observer = new IntersectionObserver((entries) => {
      // Find the most visible section using intersectionRatio
      // Filter only intersecting entries to avoid stale states
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length === 0) {
        return;
      }

      // Get the section with highest visibility ratio
      // This ensures smooth transitions when scrolling
      const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev,
      );

      if (mostVisibleEntry?.target?.id) {
        const newIndex = sectionIds.indexOf(mostVisibleEntry.target.id);

        // Only update if section changed to prevent unnecessary re-renders
        if (newIndex !== activeIndex) {
          activeIndex = newIndex;
          setActiveSection(mostVisibleEntry.target.id);
        }
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
