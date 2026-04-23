import { trackEvent } from "../utils/analytics";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const resumeHref = "/docs/Suswin's_Resume.pdf";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Resume"
          title="A clean snapshot of my ERP, backend, and systems work"
          description="View the latest PDF in a new tab or download it directly. Both actions stay lightweight, respect the browser’s native behavior, and fit the portfolio’s black-gold and silver-blue visual language."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-border/70 bg-surface/85 p-6 shadow-panel md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgb(var(--color-accent)/0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgb(var(--color-secondary)/0.16),_transparent_34%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Portable PDF Resume
              </p>
              <h3 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-text md:text-4xl">
                Ready for recruiters, hiring teams, and engineering managers.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                The resume highlights production-facing ERP contributions,
                backend development with Python and PHP, Linux system exposure,
                and the practical engineering improvements I bring to teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent("Resume View")}
                  className="rounded-full border border-accent/70 bg-accent/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-onAccent"
                >
                  View Resume
                </a>
                <a
                  href={resumeHref}
                  download="Suswin_Palanisamy_Resume.pdf"
                  onClick={() => trackEvent("Resume Download")}
                  className="rounded-full border border-secondary/60 bg-secondary/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-secondary transition hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/70 bg-canvas/70 p-5 backdrop-blur">
              <div className="rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-surfaceAlt to-surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">
                  What’s Inside
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  <li>ERP module delivery across production-facing workflows</li>
                  <li>Backend development with Python, PHP, MySQL, and Django</li>
                  <li>Linux environments, monitoring, and deployment support</li>
                  <li>Process improvements including Git adoption and system reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
