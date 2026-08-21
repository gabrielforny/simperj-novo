import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface CTASectionProps {
  title: string;
  lead?: string;
  children: ReactNode;
  tone?: "brand" | "accent";
}

export function CTASection({ title, lead, children, tone = "brand" }: CTASectionProps) {
  const bg = tone === "accent" ? "bg-[var(--accent)]" : "bg-[var(--brand-primary)]";

  return (
    <section className={`${bg} text-white py-16 md:py-20`}>
      <Container className="flex flex-col items-center text-center gap-5">
        <h2 className="font-[var(--font-display)] font-bold leading-tight max-w-2xl" style={{ fontSize: "var(--text-h2)" }}>
          {title}
        </h2>
        {lead && <p className="text-white/85 max-w-xl" style={{ fontSize: "var(--text-body-lg)" }}>{lead}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">{children}</div>
      </Container>
    </section>
  );
}
