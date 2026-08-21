import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { BENEFIT_GROUPS, DISCOUNTS } from "@/data/benefits";
import { COUNCIL_REPRESENTATIVES } from "@/data/board";

const COUNCILS = Array.from(new Set(COUNCIL_REPRESENTATIVES.map((c) => c.council)));

export default function PorQueAssociar() {
  return (
    <>
      <Seo
        title="Por que se Associar"
        description="Conheça os benefícios de se associar ao SIMPERJ: representatividade, descontos SESI/SENAI/Firjan, capacitação e apoio institucional."
        path="/por-que-se-associar"
      />
      <PageHero
        eyebrow="Por que se associar"
        title="Uma rede de força coletiva para sua indústria"
        lead="Ao ingressar no quadro social do SIMPERJ, sua indústria passa a ter acesso automático a todos os benefícios abaixo."
        breadcrumb={[{ label: "Por que se Associar" }]}
      />

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Benefícios" title="Organizados por área de interesse" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {BENEFIT_GROUPS.map((group, i) => (
              <Reveal key={group.id} delay={i * 60} className="border border-[var(--border)] rounded-[var(--radius-md)] p-6">
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--brand-primary)]" style={{ fontSize: "var(--text-h4)" }}>
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--brand-secondary)]" />
                      <span className="text-sm leading-normal">
                        <strong className="text-[var(--text)]">{item.title}.</strong> <span className="text-[var(--text-muted)]">{item.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Convênio Firjan" title="Condições especiais em SESI, SENAI e serviços Firjan" lead="Condições diferenciadas negociadas coletivamente pelo sindicato." />
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {DISCOUNTS.map((d) => (
                <li key={d.label} className="flex items-center gap-3 py-4">
                  <CheckCircle2 size={18} aria-hidden="true" className="shrink-0 text-[var(--brand-secondary)]" />
                  <span className="text-sm text-[var(--text)]">{d.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Representação" title="SIMPERJ nos Conselhos Empresariais da Firjan" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {COUNCILS.map((council) => (
              <li key={council} className="border border-[var(--border)] rounded-[var(--radius-md)] p-4 text-sm text-[var(--text)]">
                {council}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection title="Pronto para fortalecer sua empresa com o apoio de um sindicato de 77 anos?" tone="accent">
        <ButtonLink to="/associe-se" variant="secondary" className="bg-white! text-[var(--accent-dark)]! border-white! hover:bg-white/90!">
          Associe sua empresa
        </ButtonLink>
      </CTASection>
    </>
  );
}
