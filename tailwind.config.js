/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surfaceAlt: "rgb(var(--color-surface-alt) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        onAccent: "rgb(var(--color-on-accent) / <alpha-value>)",
        accentSoft: "rgb(var(--color-accent-soft) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        secondarySoft: "rgb(var(--color-secondary-soft) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgb(var(--color-border) / 0.28) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-border) / 0.28) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at top, rgb(var(--color-secondary-soft) / 0.22), transparent 42%), radial-gradient(circle at 85% 20%, rgb(var(--color-accent-soft) / 0.28), transparent 28%), radial-gradient(circle at 20% 80%, rgb(var(--color-accent-soft) / 0.16), transparent 30%)",
      },
    },
  },
  plugins: [],
};
