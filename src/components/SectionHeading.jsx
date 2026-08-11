import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, lead, align = "left", dark = false }) {
  const textColor = dark ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]";
  const leadColor = dark ? "text-[var(--color-petrol-100)]/75" : "text-[var(--color-graphite-700)]";
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow text-[var(--color-rust-600)]">{eyebrow}</p>}
      <h2 className={`mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight ${textColor}`}>{title}</h2>
      {lead && <p className={`mt-4 text-base leading-relaxed ${leadColor}`}>{lead}</p>}
    </Reveal>
  );
}
