import { certifications } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Certifications"
          title="Formal quality and systems awareness"
          description="A concise credential section that supports the broader engineering profile without turning the page into a certificate wall."
        />
      </Reveal>

      <div className="mt-14 grid gap-6">
        {certifications.map((certification) => (
          <Reveal key={certification.title}>
            <article className="rounded-[2rem] border border-border/70 bg-surface/80 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Certification
              </p>
              <h3 className="mt-4 text-2xl font-bold text-text">
                {certification.title}
              </h3>
              <p className="mt-2 text-base leading-8 text-muted">
                Issued by {certification.issuer}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
