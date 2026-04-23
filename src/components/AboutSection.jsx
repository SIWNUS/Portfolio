import { aboutPoints, highlights } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="About"
          title="Building software close to real operations"
          description="Suswin Palanisamy works in environments where ERP and backend software must stay useful, maintainable, and dependable under real production constraints."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal className="space-y-6">
          {aboutPoints.map((point, index) => (
            <p key={index} className="text-base leading-8 text-muted md:text-lg">
              {point}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-border/70 bg-surface/80 p-5 transition hover:-translate-y-1 hover:border-accent/40"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {item.value}
                </p>
                <h3 className="mt-3 text-lg font-bold text-text">{item.label}</h3>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
