import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { PartnerLogo } from "@/components/cards/PartnerLogo";
import { Button } from "@/components/ui/Button";
import { TIMELINE, MISSION_STATEMENT, COMMITMENT_STATEMENT } from "@/data/history";
import { BOARD, FISCAL_COUNCIL, PAST_PRESIDENTS, COMMITTEES } from "@/data/board";
import { PARTNERS } from "@/data/partners";
import { SITE } from "@/data/site";

export default function QuemSomos() {
  return (
    <>
      <Seo
        title="Quem Somos"
        description="77 anos de história do SIMPERJ: missão, diretoria, conselho fiscal e trajetória institucional do sindicato da indústria plástica do Rio de Janeiro."
        path="/quem-somos"
      />
      <PageHero
        eyebrow="Quem Somos"
        title="77 anos representando a indústria plástica do Rio de Janeiro"
        lead="Do pós-guerra à economia circular de hoje: a trajetória institucional do SIMPERJ e a diretoria à frente da entidade."
        breadcrumb={[{ label: "Quem Somos" }]}
      />

      {/* MISSÃO */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-[var(--brand-primary)]">O SIMPERJ</p>
            <p className="mt-4 text-[var(--text)] leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
              {MISSION_STATEMENT}
            </p>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">{COMMITMENT_STATEMENT}</p>
          </Reveal>
        </Container>
      </Section>

      {/* HISTÓRICO */}
      <Section tone="surface" spacing="lg">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Nossa história" title="Trajetória institucional" />
          <div className="mt-10 space-y-8">
            {TIMELINE.map((entry) => (
              <div key={entry.year} className="border-l-2 border-[var(--brand-primary)] pl-6">
                <p className="font-[var(--font-display)] font-bold text-[var(--brand-primary)]" style={{ fontSize: "var(--text-h4)" }}>
                  {entry.year} <span className="font-normal text-[var(--text-muted)]" style={{ fontSize: "var(--text-small)" }}>— {entry.date}</span>
                </p>
                <h3 className="mt-1 font-[var(--font-display)] font-semibold text-[var(--text)]">{entry.title}</h3>
                <p className="mt-2 text-[var(--text-muted)] leading-normal">{entry.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DIRETORIA */}
      <Section tone="brand-dark" spacing="lg">
        <Container>
          <SectionHeader dark eyebrow="Gestão 2025–2028" title="Diretoria atual" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD.map((member, i) => (
              <Reveal key={member.slug} delay={i * 70} className="border border-white/15 rounded-[var(--radius-md)] p-5">
                <p className="eyebrow text-white/60">{member.role}</p>
                <p className="mt-2 font-[var(--font-display)] font-semibold text-white leading-snug">{member.name}</p>
                {member.company && <p className="mt-1 text-xs text-white/55">{member.company}</p>}
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-14">
            <p className="eyebrow text-white/70">Conselho Fiscal</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-3 max-w-3xl">
              {FISCAL_COUNCIL.map((member) => (
                <div key={member.slug}>
                  <span className="text-sm text-white/85 leading-snug">
                    {member.name}
                    <span className="block text-xs text-white/55">{member.company}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CONSELHOS E COMITÊS */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Governança" title="Conselhos e Comitês" lead="O SIMPERJ participa de forma efetiva dos principais Conselhos Empresariais do Sistema Firjan." />
          <div className="mt-10">
            <Accordion items={COMMITTEES.map((c) => ({ id: c.slug, title: c.title, content: <p>{c.text}</p> }))} />
          </div>
        </Container>
      </Section>

      {/* EX-PRESIDENTES */}
      <Section tone="surface" spacing="lg">
        <Container>
          <SectionHeader eyebrow="Legado institucional" title="Presidências ao longo da história" lead="Nove presidências conduziram o SIMPERJ desde 1947." />
          <Reveal className="mt-10 border-t border-[var(--border)]">
            {PAST_PRESIDENTS.map((p) => (
              <div key={p.order} className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] py-4">
                <span className="font-[var(--font-display)] font-semibold text-[var(--brand-primary)]">
                  {p.order}º Presidente — {p.name}
                </span>
                <span className="text-sm text-[var(--text-muted)]">{p.period}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ESTATUTO */}
      <Section spacing="md">
        <Container className="flex flex-wrap items-center justify-between gap-6 border border-[var(--border)] rounded-[var(--radius-md)] p-8">
          <div>
            <h2 className="font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
              Quer conhecer o estatuto do SIMPERJ?
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Solicite uma cópia diretamente com nossa equipe.</p>
          </div>
          <Button onClick={() => window.location.assign(`mailto:${SITE.email}?subject=Solicitação de estatuto SIMPERJ`)}>
            Solicitar o estatuto
          </Button>
        </Container>
      </Section>

      {/* PARCEIROS */}
      <Section tone="surface" spacing="md">
        <Container>
          <p className="eyebrow text-center text-[var(--text-muted)]">Parceiros institucionais</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {PARTNERS.map((p) => (
              <PartnerLogo key={p.name} partner={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
