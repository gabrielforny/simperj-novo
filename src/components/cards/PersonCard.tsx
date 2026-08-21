import type { BoardMember } from "@/types";

function initials(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 2 || part === part.toUpperCase())
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

interface PersonCardProps {
  person: BoardMember;
  dark?: boolean;
  hidePhoto?: boolean;
}

export function PersonCard({ person, dark = false, hidePhoto = false }: PersonCardProps) {
  return (
    <div className={dark ? "border border-white/15 rounded-[var(--radius-md)] overflow-hidden" : "border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden"}>
      <div className={dark ? "aspect-[4/3] w-full bg-white/5 overflow-hidden" : "aspect-[4/3] w-full bg-[var(--surface)] overflow-hidden"}>
        {person.photo && !hidePhoto ? (
          <img src={person.photo} alt={person.name} loading="lazy" className="h-full w-full object-cover object-top" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-[var(--font-display)] font-bold"
            style={{ fontSize: "var(--text-h1)", color: dark ? "var(--text-on-brand-muted)" : "var(--text-muted)" }}
            aria-hidden="true"
          >
            {initials(person.name)}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className={dark ? "eyebrow text-[var(--text-on-brand-muted)]" : "eyebrow text-[var(--brand-primary)]"}>{person.role}</p>
        <p className={dark ? "mt-1 font-[var(--font-display)] font-semibold text-[var(--text-on-brand)] leading-snug" : "mt-1 font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug"}>
          {person.placeholder ? <span className="italic opacity-70">{person.name}</span> : person.name}
        </p>
        {person.company && (
          <p className={dark ? "mt-1 text-xs text-[var(--text-on-brand-muted)]" : "mt-1 text-xs text-[var(--text-muted)]"}>{person.company}</p>
        )}
      </div>
    </div>
  );
}
