import { useMemo, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CourseCard } from "@/components/cards/CourseCard";
import { cn } from "@/lib/cn";
import { COURSES, COURSE_RULES } from "@/data/courses";

export default function Cursos() {
  const categories = useMemo(() => ["Todos", ...Array.from(new Set(COURSES.map((c) => c.category)))], []);
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <>
      <Seo
        title="Cursos"
        description="Catálogo de cursos técnicos oferecidos pelo SIMPERJ em parceria com Firjan/SENAI para a indústria de transformação de plástico."
        path="/cursos"
      />
      <PageHero
        eyebrow="Capacitação"
        title="Cursos técnicos para a indústria do plástico"
        lead="Formações em produção, automação industrial, digital e gestão, oferecidas via parceria Firjan/SENAI."
        breadcrumb={[{ label: "Cursos" }]}
      />

      <Section spacing="md">
        <Container>
          <div className="flex gap-3 border border-[var(--warning)]/40 bg-[var(--warning-light)] rounded-[var(--radius-md)] p-5">
            <AlertTriangle size={20} aria-hidden="true" className="shrink-0 text-[var(--warning)]" />
            <p className="text-sm text-[var(--text)]">
              <strong>Catálogo histórico (1º semestre de 2021).</strong> O conteúdo abaixo é o último catálogo publicado pelo SIMPERJ e está marcado como arquivo — não representa vagas abertas no momento. Para saber sobre a oferta atual de cursos, entre em contato com o sindicato.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Catálogo" title="Filtre por categoria" />

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categorias de cursos">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-2 min-h-11 text-sm font-medium border rounded-[var(--radius-sm)] transition-colors",
                  active === cat
                    ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand-primary)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 6) * 60}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="md">
        <Container className="max-w-2xl">
          <h2 className="font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
            Regras de inscrição (catálogo histórico)
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)] list-disc pl-5">
            {COURSE_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
