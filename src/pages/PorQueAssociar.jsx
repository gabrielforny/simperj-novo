import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { BENEFITS, DISCOUNTS } from "../data/content";

export default function PorQueAssociar() {
  return (
    <>
      <PageHero
        eyebrow="Por que se associar"
        title="Uma rede de força coletiva para sua indústria"
        lead="Associar-se ao SIMPERJ conecta sua empresa a representação institucional, capacitação técnica e uma rede de benefícios negociada em bloco com o sistema Firjan."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="10 benefícios" title="O que sua empresa ganha como associada" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 6) * 70}>
                <div className="card-industrial h-full p-7">
                  <span className="eyebrow text-[var(--color-rust-600)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)]">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-graphite-700)]">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-petrol-900)] text-[var(--color-paper)]">
        <div className="container-wide grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Convênio Firjan"
              title="Descontos em SESI, SENAI e serviços Firjan"
              lead="Como associado, sua empresa acessa condições diferenciadas negociadas coletivamente pelo sindicato."
            />
          </div>
          <Reveal delay={100}>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {DISCOUNTS.map((d) => (
                <li key={d.label} className="flex items-center justify-between gap-6 py-5">
                  <span className="flex items-center gap-3 text-sm text-[var(--color-petrol-100)]/85">
                    <CheckCircle2 size={18} className="shrink-0 text-[var(--color-green-500)]" />
                    {d.label}
                  </span>
                  <span className="font-display text-lg font-semibold text-[var(--color-rust-500)] whitespace-nowrap">{d.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[var(--color-rust-600)] text-white">
        <div className="container-wide flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            Pronto para fortalecer sua empresa com o apoio de um sindicato de 77 anos?
          </h2>
          <Link to="/associe-se" className="btn bg-white text-[var(--color-rust-700)] hover:bg-white/90">
            Quero me associar <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
