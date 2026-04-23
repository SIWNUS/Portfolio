import { profile } from "../data/portfolio";
import { trackEvent } from "../utils/analytics";
import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-border/60 px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid bg-[size:4rem_4rem] opacity-40" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-accent">
            Developer Portfolio
          </p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl">
            Suswin Palanisamy — Software Developer
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-secondary md:text-xl">
            {profile.title}
          </p>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted md:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
            I build operational software with a systems mindset, combining ERP
            product work, backend engineering, Linux familiarity, and process
            improvements that make teams faster and production environments more
            dependable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("GitHub Click")}
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.28em] text-onAccent transition hover:bg-secondary"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("LinkedIn Click")}
              className="rounded-full border border-accent/60 px-6 py-3 text-sm font-bold uppercase tracking-[0.28em] text-accent transition hover:border-secondary hover:text-secondary"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-surface/80 p-6 shadow-panel">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-border/70 bg-surfaceAlt p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  Current Focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  <li>ERP module delivery for production-facing operations</li>
                  <li>Backend work with Python, PHP, and MySQL</li>
                  <li>Linux environments, server setup, and monitoring</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-surfaceAlt to-surface p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                  Engineering Themes
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Blue Planet ERP",
                    "Git Adoption",
                    "Linux Environments",
                    "Port Forwarding",
                    "Zabbix Monitoring",
                    "Django Migration",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
