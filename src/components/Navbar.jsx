import { useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ activeSection, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  /**
   * Handle smooth scroll to section
   * Closes mobile menu if open and scrolls smoothly
   */
  const handleNavClick = (e, sectionId) => {
    // Close mobile menu when navigating
    closeMenu();

    // Small delay to ensure menu closes smoothly before scroll
    // This prevents layout shift during scroll animation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll with smooth behavior and account for navbar offset
        const navbarHeight = 70;
        const targetPosition =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group"
        >
          <span className="block text-lg font-extrabold uppercase tracking-[0.28em] text-accent transition group-hover:text-secondary">
            SP
          </span>
          <span className="mt-1 block text-[11px] uppercase tracking-[0.32em] text-muted">
            {profile.title.split(" | ")[0]}
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(e, item.id);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 ${
                      isActive
                        ? "bg-accent text-onAccent shadow-md"
                        : "text-muted hover:text-text hover:bg-surface/50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-surface/80 text-text transition hover:border-accent/50 hover:text-accent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen ? (
        <div className="border-t border-border/60 bg-surface/95 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(e, item.id);
                    }}
                    className={`block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition ${
                      isActive
                        ? "bg-accent text-onAccent shadow-md"
                        : "bg-surfaceAlt text-text hover:bg-surface"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
