import { GraduationCap } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/data/site";
import { COURSES } from "@/data/courses";

export default function Cursos() {
  return (
    <>
      <Seo
        title="Cursos"
        description="Catálogo de cursos técnicos do SIMPERJ em parceria com Firjan/SENAI para a indústria de transformação de plástico — em atualização."
        path="/cursos"
      />
      <PageHero
        eyebrow="Capacitação"
        title="Cursos técnicos para a indústria do plástico"
        lead="Formações em produção, automação industrial, digital e gestão, oferecidas via parceria Firjan/SENAI."
        breadcrumb={[{ label: "Cursos" }]}
      />

      <Section spacing="lg">
        <Container>
          {COURSES.length === 0 ? (
            <div className="border border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] p-12 text-center max-w-xl mx-auto">
              <GraduationCap size={32} strokeWidth={1.5} className="mx-auto text-[var(--text-muted)]" aria-hidden="true" />
              <h2 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                Catálogo de cursos em atualização
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">
                Estamos renovando a oferta de cursos técnicos do SIMPERJ. Enquanto isso, fale diretamente com nossa equipe para saber sobre a disponibilidade atual.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Dúvida sobre cursos SIMPERJ`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Falar com o SIMPERJ
              </a>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
