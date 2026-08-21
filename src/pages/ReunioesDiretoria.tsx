import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BOARD_MEETINGS, BOARD_MEETINGS_NOTE } from "@/data/meetings";

export default function ReunioesDiretoria() {
  return (
    <>
      <Seo
        title="Reuniões da Diretoria"
        description="Calendário de reuniões ordinárias da diretoria do SIMPERJ."
        path="/reunioes-diretoria"
      />
      <PageHero eyebrow="Governança" title="Reuniões da Diretoria" lead={BOARD_MEETINGS_NOTE} breadcrumb={[{ label: "Reuniões da Diretoria" }]} />

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Calendário" title="Próximas reuniões" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {BOARD_MEETINGS.map((m, i) => (
              <Reveal key={`${m.month}-${m.day}`} delay={(i % 6) * 60} className="flex items-center gap-6 border border-[var(--border)] rounded-[var(--radius-md)] p-5">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-[var(--border)] rounded-[var(--radius-sm)] bg-[var(--surface)]">
                  <span className="font-[var(--font-display)] font-bold leading-none text-[var(--brand-primary)]" style={{ fontSize: "var(--text-h3)" }}>
                    {m.day}
                  </span>
                  <span className="eyebrow mt-1 text-[var(--text-muted)]">{m.month.slice(0, 3)}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-[var(--font-display)] font-semibold text-[var(--text)]">{m.type}</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={15} aria-hidden="true" /> {m.month}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} aria-hidden="true" /> {m.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} aria-hidden="true" /> {m.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--text-muted)] max-w-2xl">
            As datas podem sofrer alteração mediante convocação extraordinária. Associados interessados em participar devem confirmar presença junto à secretaria do sindicato.
          </p>
        </Container>
      </Section>
    </>
  );
}
