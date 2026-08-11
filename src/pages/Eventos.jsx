import { Globe2, Plane, Video, CalendarDays, Clock, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { EVENTS, MEETINGS } from "../data/content";

const CATEGORIES = [
  { key: "feirasNacionais", title: "Feiras Nacionais", icon: Globe2 },
  { key: "feirasInternacionais", title: "Feiras Internacionais", icon: Plane },
  { key: "online", title: "Eventos Online", icon: Video },
];

export default function Eventos() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos do setor plástico"
        lead="Feiras, encontros e eventos online que conectam sua empresa ao ecossistema da indústria de transformação de plástico."
        image="https://www.simperj.org.br/wp-content/uploads/2026/07/simperj-na-expofood-2026-01.png"
        imageAlt="Estande do SIMPERJ na feira ExpoFood 2026"
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide space-y-20">
          {CATEGORIES.map((cat) => (
            <div key={cat.key}>
              <Reveal>
                <div className="flex items-center gap-3">
                  <cat.icon size={22} strokeWidth={1.5} className="text-[var(--color-rust-600)]" />
                  <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">{cat.title}</h2>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {EVENTS[cat.key].map((ev, i) => (
                  <Reveal key={ev.name} delay={i * 90}>
                    <div className="card-industrial h-full p-6">
                      <span className="eyebrow text-[var(--color-green-700)]">{ev.status}</span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)] leading-snug">{ev.name}</h3>
                      <p className="mt-2 text-sm text-[var(--color-graphite-700)]">{ev.segment}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-petrol-950)] text-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading dark eyebrow="Governança" title="Calendário de reuniões do SIMPERJ" lead="Consulte também as próximas reuniões ordinárias da diretoria." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {MEETINGS.slice(0, 6).map((m, i) => (
              <Reveal key={`${m.month}-${m.day}`} delay={(i % 6) * 60}>
                <div className="flex items-center gap-5 border border-white/10 p-5">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border border-white/15">
                    <span className="font-display text-xl font-semibold leading-none">{m.day}</span>
                    <span className="eyebrow mt-1 text-[var(--color-petrol-100)]/60">{m.month.slice(0, 3)}</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{m.type}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[var(--color-petrol-100)]/70">
                      <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {m.weekday}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {m.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {m.local}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
