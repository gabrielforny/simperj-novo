import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "surface" | "brand" | "brand-dark" | "secondary";

const TONE_CLASS: Record<Tone, string> = {
  default: "bg-[var(--background)] text-[var(--text)]",
  surface: "bg-[var(--surface)] text-[var(--text)]",
  brand: "bg-[var(--brand-primary)] text-[var(--text-on-brand)]",
  "brand-dark": "bg-[var(--brand-primary-dark)] text-[var(--text-on-brand)]",
  secondary: "bg-[var(--brand-secondary)] text-[var(--text-on-brand)]",
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  tone?: Tone;
  spacing?: "sm" | "md" | "lg";
  children: ReactNode;
}

const SPACING_CLASS = {
  sm: "py-10 md:py-14",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
};

export function Section({ as: Tag = "section", tone = "default", spacing = "md", className, children, ...rest }: SectionProps) {
  return (
    <Tag className={cn(TONE_CLASS[tone], SPACING_CLASS[spacing], className)} {...rest}>
      {children}
    </Tag>
  );
}
