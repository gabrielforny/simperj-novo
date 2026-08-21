import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, lead, align = "left", dark = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", dark ? "text-[var(--text-on-brand-muted)]" : "text-[var(--brand-primary)]")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-[var(--font-display)] font-bold leading-[var(--leading-tight)]",
          dark ? "text-[var(--text-on-brand)]" : "text-[var(--text)]"
        )}
        style={{ fontSize: "var(--text-h2)" }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn("mt-4 leading-[var(--leading-normal)]", dark ? "text-[var(--text-on-brand-muted)]" : "text-[var(--text-muted)]")}
          style={{ fontSize: "var(--text-body-lg)" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
