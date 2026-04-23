import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Projects"
          title="Practical backend and data-driven application work"
          description="These projects reflect the kind of structured backend delivery that supports my ERP and systems-focused experience."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 100}>
            <article className="group h-full rounded-[2rem] border border-border/70 bg-surface/80 p-6 transition hover:-translate-y-1 hover:border-accent/40">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-text">
                {project.name}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-secondary/25 bg-secondarySoft/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-accent transition group-hover:text-secondary"
                >
                  View Project
                </a>
              ) : (
                <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">
                  Private or internal project context
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
