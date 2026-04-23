import { skillGroups } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Skills"
          title="A backend-leaning stack with systems awareness"
          description="My toolkit spans application development, operational support, and process improvements that help teams ship with more confidence."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <article className="rounded-[2rem] border border-border/70 bg-surface/80 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {group.title}
              </p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/80 bg-surfaceAlt/80 px-4 py-2 text-sm font-medium text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
