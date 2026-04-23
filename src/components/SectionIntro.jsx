export function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-accent via-secondary to-transparent" />
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
