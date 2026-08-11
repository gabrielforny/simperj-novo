import { CalendarDays, Clock, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { MEETINGS } from "../data/content";

export default function ReunioesDiretoria() {
  return (
    <>
      <PageHero
        eyebrow="Governança"
        title="Reuniões da Diretoria"
        lead="Calendário anual de reuniões ordinárias da diretoria do SIMPERJ, aberto à consulta dos associados."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Calendário 2026" title="Próximas reuniões" />

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {MEETINGS.map((m, i) => (
              <Reveal key={`${m.month}-${m.day}`} delay={(i % 6) * 60}>
                <div className="card-industrial flex items-center gap-6 p-6">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-[var(--color-line)] bg-[var(--color-paper-dim)]">
                    <span className="font-display text-2xl font-semibold leading-none text-[var(--color-petrol-800)]">{m.day}</span>
                    <span className="eyebrow mt-1 text-[var(--color-graphite-500)]">{m.month.slice(0, 3)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-[var(--color-ink)]">{m.type}</p>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--color-graphite-700)]">
                      <span className="flex items-center gap-1.5"><CalendarDays size={15} /> {m.weekday}</span>
                      <span className="flex items-center gap-1.5"><Clock size={15} /> {m.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={15} /> {m.local}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-sm text-[var(--color-graphite-500)] max-w-2xl">
              As datas podem sofrer alteração mediante convocação extraordinária. Associados interessados em participar
              devem confirmar presença junto à secretaria do sindicato.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
