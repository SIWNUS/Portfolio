import { experiences } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Experience"
          title="Owning features, systems, and better ways of working"
          description="The strongest part of my experience is not only writing code, but improving how engineering work gets delivered and supported."
        />
      </Reveal>

      <div className="mt-14 space-y-8">
        {experiences.map((experience, index) => (
          <Reveal key={experience.role} delay={index * 120}>
            <article className="grid gap-6 rounded-[2rem] border border-border/70 bg-surface/80 p-6 shadow-panel lg:grid-cols-[220px_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {experience.period}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-text">
                  {experience.role}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-secondary">
                  {experience.company}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-base leading-8 text-muted">
                  {experience.summary}
                </p>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-text md:text-base">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 rounded-2xl border border-border/60 bg-surfaceAlt/70 px-4 py-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
