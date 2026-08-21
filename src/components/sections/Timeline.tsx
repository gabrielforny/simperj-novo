import type { TimelineEntry } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative mt-4 pl-8 md:pl-0">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-1/2" aria-hidden="true" />

      <ol className="space-y-14 md:space-y-20">
        {entries.map((entry, i) => (
          <li key={entry.year} className="relative md:grid md:grid-cols-2 md:gap-16">
            <span
              className="absolute -left-8 md:left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand-primary)] ring-4 ring-[var(--background)]"
              aria-hidden="true"
            />
            <Reveal delay={i * 80} className={i % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}>
              <p className="font-[var(--font-display)] font-bold text-[var(--brand-primary)]" style={{ fontSize: "var(--text-h2)" }}>
                {entry.year}
              </p>
              <p className="eyebrow mt-1 text-[var(--text-muted)]">{entry.date}</p>
              <h3 className="mt-3 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                {entry.title}
              </h3>
              <p className={`mt-3 text-sm leading-normal text-[var(--text-muted)] max-w-md ${i % 2 === 0 ? "md:ml-auto" : ""}`}>{entry.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
