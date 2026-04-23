import { useMemo, useState } from "react";
import { contactLinks, profile } from "../data/portfolio";
import { trackEvent } from "../utils/analytics";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject: formData.subject || `Portfolio enquiry for ${profile.name}`,
      body: `Name: ${formData.name || "Unknown"}\n\n${formData.message || ""}`,
    });

    return `mailto:${profile.email}?${params.toString()}`;
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleContactLinkClick = (label) => {
    if (label === "GitHub") {
      trackEvent("GitHub Click");
      return;
    }

    if (label === "LinkedIn") {
      trackEvent("LinkedIn Click");
      return;
    }

    trackEvent("Contact Click");
  };

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="Contact"
          title="Let’s talk about backend systems, ERP work, or platform improvements"
          description="The portfolio is intentionally concise, but I’m always open to discussions around engineering roles, practical system design, and operations-facing software."
        />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              onClick={() => handleContactLinkClick(item.label)}
              className="block rounded-[1.5rem] border border-border/70 bg-surface/80 p-5 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-base font-semibold text-text">{item.value}</p>
            </a>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <form className="rounded-[2rem] border border-border/70 bg-surface/80 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-border/80 bg-surfaceAlt px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent/50"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-2xl border border-border/80 bg-surfaceAlt px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent/50"
                  placeholder="Project, role, or topic"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="rounded-[1.5rem] border border-border/80 bg-surfaceAlt px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent/50"
                placeholder="Share a few details about what you’d like to discuss."
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={mailtoHref}
                onClick={() => trackEvent("Contact Click")}
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-onAccent transition hover:bg-secondary"
              >
                Open Email Draft
              </a>
              <p className="text-sm leading-7 text-muted">
                This contact UI generates a prefilled email in your default mail
                client without needing a backend form service.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
