import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, lead, image, imageAlt }) {
  return (
    <section className="relative bg-[var(--color-petrol-950)] text-[var(--color-paper)] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(7,24,32,0.55) 0%, rgba(7,24,32,0.92) 100%)" }}
            aria-hidden="true"
          />
        </>
      )}
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
      <div className="container-wide relative">
        <Reveal>
          {eyebrow && <p className="eyebrow text-[var(--color-rust-500)]">{eyebrow}</p>}
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">{title}</h1>
          {lead && <p className="mt-6 text-lg text-[var(--color-petrol-100)]/80 max-w-2xl leading-relaxed">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
