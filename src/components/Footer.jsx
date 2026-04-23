import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} | Software Developer focused on ERP, backend systems,
          and Linux operations.
        </p>
        <p className="font-mono uppercase tracking-[0.24em] text-accent">
          Built with React, Vite, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
