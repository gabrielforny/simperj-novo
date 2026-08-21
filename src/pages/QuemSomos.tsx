import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Timeline } from "@/components/sections/Timeline";
import { PersonCard } from "@/components/cards/PersonCard";
import { PartnerLogo } from "@/components/cards/PartnerLogo";
import { Button } from "@/components/ui/Button";
import { TIMELINE, MISSION_STATEMENT, COMMITMENT_STATEMENT } from "@/data/history";
import { BOARD, FISCAL_COUNCIL, FISCAL_COUNCIL_ALTERNATES, PAST_PRESIDENTS, COMMITTEES } from "@/data/board";
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

      {/* TIMELINE */}
      <Section tone="surface" spacing="lg">
        <Container>
          <SectionHeader eyebrow="Nossa história" title="Uma linha do tempo de transformação institucional" />
          <div className="mt-14">
            <Timeline entries={TIMELINE} />
          </div>
        </Container>
      </Section>

      {/* DIRETORIA */}
      <Section tone="brand-dark" spacing="lg">
        <Container>
          <SectionHeader dark eyebrow="Gestão 2025–2028" title="Diretoria atual" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD.map((member, i) => (
              <Reveal key={member.slug} delay={i * 70}>
                <PersonCard person={member} dark />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-14">
            <p className="eyebrow text-white/70">Conselho Fiscal</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-3 max-w-3xl">
              {FISCAL_COUNCIL.map((member) => (
                <div key={member.slug} className="flex items-center gap-3">
                  {member.photo && <img src={member.photo} alt={member.name} loading="lazy" className="h-12 w-12 shrink-0 rounded-full object-cover object-top" />}
                  <span className="text-sm text-white/85 leading-snug">
                    {member.name}
                    <span className="block text-xs text-white/55">{member.company}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <p className="eyebrow text-white/70">Conselho Fiscal — Suplentes</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-3 max-w-3xl">
              {FISCAL_COUNCIL_ALTERNATES.map((member) => (
                <div key={member.slug} className="flex items-center gap-3">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} loading="lazy" className="h-12 w-12 shrink-0 rounded-full object-cover object-top" />
                  ) : (
                    <div className="h-12 w-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/50" aria-hidden="true">
                      —
                    </div>
                  )}
                  <span className={`text-sm leading-snug ${member.placeholder ? "text-white/50 italic" : "text-white/85"}`}>
                    {member.name}
                    {member.company && <span className="block text-xs text-white/55 not-italic">{member.company}</span>}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/45 max-w-md">
              Dados de suplência ainda em confirmação junto ao sindicato — posições marcadas serão atualizadas assim que o cadastro oficial for validado.
            </p>
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
