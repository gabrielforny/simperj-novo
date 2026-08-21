import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "brand" | "secondary" | "accent" | "success" | "warning" | "neutral";

const TONE_CLASS: Record<Tone, string> = {
  brand: "bg-[var(--brand-primary-light)] text-[var(--brand-primary)]",
  secondary: "bg-[var(--brand-secondary-light)] text-[var(--brand-secondary-dark)]",
  accent: "bg-[var(--accent-light)] text-[var(--accent-dark)]",
  success: "bg-[var(--success-light)] text-[var(--success)]",
  warning: "bg-[var(--warning-light)] text-[var(--warning)]",
  neutral: "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]",
};

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "brand", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center px-2.5 py-1 rounded-[var(--radius-sm)]",
        TONE_CLASS[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
