import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "@/components/navigation/Breadcrumb";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow?: string | undefined;
  title: string;
  lead?: ReactNode;
  breadcrumb?: BreadcrumbItem[] | undefined;
  image?: string | undefined;
  imageAlt?: string | undefined;
}

export function PageHero({ eyebrow, title, lead, breadcrumb, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative bg-[var(--brand-primary-dark)] text-[var(--text-on-brand)] pt-10 pb-14 md:pt-14 md:pb-20 overflow-hidden">
      {image && (
        <>
          <img src={image} alt={imageAlt ?? ""} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,40,68,0.55) 0%, rgba(7,40,68,0.94) 100%)" }} aria-hidden="true" />
        </>
      )}
      <Container className="relative">
        {breadcrumb && (
          <div className="mb-6 [&_a]:text-[var(--text-on-brand-muted)] [&_span]:text-[var(--text-on-brand)] [&_a:hover]:text-[var(--text-on-brand)]">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        {eyebrow && <p className="eyebrow text-white/70">{eyebrow}</p>}
        <h1 className="mt-3 font-[var(--font-display)] font-extrabold leading-[var(--leading-tight)] max-w-3xl" style={{ fontSize: "var(--text-h1)" }}>
          {title}
        </h1>
        {lead && (
          <p className="mt-5 text-[var(--text-on-brand-muted)] max-w-2xl leading-[var(--leading-normal)]" style={{ fontSize: "var(--text-body-lg)" }}>
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
