export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text transition hover:border-accent/50 hover:text-accent"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span>{isDark ? "Dark" : "Light"}</span>
      <span className="relative block h-5 w-10 rounded-full bg-canvas ring-1 ring-inset ring-border/80">
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-accent transition-transform ${
            isDark ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}
