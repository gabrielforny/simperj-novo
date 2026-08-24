import { Globe2, Plane, Rss } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EventCard } from "@/components/cards/EventCard";
import { EVENTS, RECENT_ACTIONS } from "@/data/events";

export default function Eventos() {
  const nationalFairs = EVENTS.filter((e) => e.category === "feira-nacional");
  const internationalFairs = EVENTS.filter((e) => e.category === "feira-internacional");

  return (
    <>
      <Seo
        title="Eventos"
        description="Feiras nacionais, internacionais e ações recentes do SIMPERJ no setor de transformação de plástico."
        path="/eventos"
      />
      <PageHero
        eyebrow="Agenda"
        title="Eventos do setor plástico"
        lead="Feiras e ações que conectam sua empresa ao ecossistema da indústria de transformação de plástico."
        image={RECENT_ACTIONS[0]?.images?.[0]}
        imageAlt="Estande do SIMPERJ em feira do setor"
        breadcrumb={[{ label: "Eventos" }]}
      />

      <Section spacing="lg">
        <Container className="space-y-20">
          <div id="feiras-nacionais">
            <Reveal className="flex items-center gap-3">
              <Globe2 size={22} strokeWidth={1.6} className="text-[var(--brand-primary)]" aria-hidden="true" />
              <h2 className="font-[var(--font-display)] font-bold text-[var(--text)]" style={{ fontSize: "var(--text-h3)" }}>
                Feiras Nacionais
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {nationalFairs.map((ev, i) => (
                <Reveal key={ev.slug} delay={i * 90}>
                  <EventCard event={ev} />
                </Reveal>
              ))}
            </div>
          </div>

          <div id="feiras-internacionais">
            <Reveal className="flex items-center gap-3">
              <Plane size={22} strokeWidth={1.6} className="text-[var(--brand-primary)]" aria-hidden="true" />
              <h2 className="font-[var(--font-display)] font-bold text-[var(--text)]" style={{ fontSize: "var(--text-h3)" }}>
                Feiras Internacionais
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {internationalFairs.map((ev, i) => (
                <Reveal key={ev.slug} delay={i * 90}>
                  <EventCard event={ev} />
                </Reveal>
              ))}
            </div>
          </div>

          <div id="acoes-do-simperj">
            <Reveal className="flex items-center gap-3">
              <Rss size={22} strokeWidth={1.6} className="text-[var(--brand-primary)]" aria-hidden="true" />
              <h2 className="font-[var(--font-display)] font-bold text-[var(--text)]" style={{ fontSize: "var(--text-h3)" }}>
                Ações do SIMPERJ
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {RECENT_ACTIONS.map((action, i) => (
                <Reveal key={action.slug} id={action.slug} delay={i * 100} className="border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
                  {action.images?.[0] && <img src={action.images[0]} alt={action.name} loading="lazy" className="aspect-[16/9] w-full object-cover" />}
                  <div className="p-6">
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                      {action.name}
                    </h3>
                    {action.description && <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">{action.description}</p>}
                    {action.images && action.images.length > 1 && (
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {action.images.slice(1, 5).map((src) => (
                          <img key={src} src={src} alt="" loading="lazy" className="aspect-square w-full object-cover rounded-[var(--radius-sm)]" />
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
