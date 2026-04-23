import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function FeaturedCaseStudy() {
  const techStack = [
    "PHP",
    "MySQL",
    "Python (Django)",
    "Linux",
    "Git",
    "Zabbix",
  ];

  const problemPoints = [
    "Fragmented system with separate modules per location",
    "Used only for UAT and testing, not production",
    "Limited collaboration and visibility",
  ];

  const solutionPoints = [
    "Centralized ERP into live production system",
    "Built core modules: GRN/SRN, Attendance, Payroll",
    "Introduced Git & GitHub workflows",
    "Led Linux-based development adoption",
    "Migrated legacy PHP to modern Django + React stack",
  ];

  const outcomes = [
    {
      label: "Active Usage",
      description: "Now used daily for procurement, operations & HR",
    },
    {
      label: "POC Ownership",
      description: "Direct client communication & requirement translation",
    },
    {
      label: "System Thinking",
      description: "Infrastructure setup, monitoring, deployment workflows",
    },
  ];

  return (
    <section id="featured" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Featured Work"
          title="Production ERP Platform"
          description="Real-world impact: building and owning a centralized system used daily by an operations team."
        />
      </Reveal>

      <Reveal delay={120} className="mt-14">
        <article className="relative overflow-hidden rounded-[2.5rem] border-2 border-accent/50 bg-gradient-to-br from-surface/95 to-surface/80 p-8 shadow-lg lg:p-10">
          {/* Accent glow effect */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl lg:-right-40 lg:-top-40 lg:h-[500px] lg:w-[500px]" />

          <div className="relative">
            {/* Header */}
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
                Case Study: Blue Planet Biofuels
              </p>
              <h3 className="mt-4 text-4xl font-extrabold text-text md:text-5xl">
                Centralized ERP System
              </h3>
              <p className="mt-3 max-w-3xl text-lg text-secondary">
                Transformed a fragmented testing environment into a production
                system driving daily operations for procurement, inventory, and HR.
              </p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent via-secondary to-transparent" />
            </div>

            {/* Main grid layout */}
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              {/* Left: Problem & Solution */}
              <div className="space-y-10">
                {/* Problem */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <span className="font-mono text-lg font-bold">⚠</span>
                    </div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                      The Challenge
                    </h4>
                  </div>
                  <ul className="space-y-3 pl-14">
                    {problemPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-base leading-7 text-muted before:absolute before:-left-7 before:text-accent before:content-['›']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                      <span className="font-mono text-lg font-bold">✓</span>
                    </div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
                      Actions Taken
                    </h4>
                  </div>
                  <ul className="space-y-3 pl-14">
                    {solutionPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-base leading-7 text-muted before:absolute before:-left-7 before:text-secondary before:content-['→']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Tech Stack & Outcomes */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <div className="rounded-[1.5rem] border border-border/70 bg-surfaceAlt/50 p-6">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-3">
                  {outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="rounded-[1.5rem] border border-border/70 bg-surfaceAlt/50 p-5 backdrop-blur-sm"
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                        {outcome.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-text">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Stat */}
                <div className="rounded-[1.5rem] border-2 border-accent/40 bg-accent/5 p-6 text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
                    Impact
                  </p>
                  <p className="mt-3 text-2xl font-extrabold text-text md:text-3xl">
                    Production Ready
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    From test system to daily operations
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-10 border-t border-border/40 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                ⚡ Demonstrates ownership across full stack: product delivery,
                infrastructure, process improvement, and team enablement
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
