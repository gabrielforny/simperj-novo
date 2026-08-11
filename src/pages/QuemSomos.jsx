import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { TIMELINE, BOARD, FISCAL_COUNCIL, PARTNERS } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function QuemSomos() {
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(itemRefs.current, { opacity: 1, x: 0 });
        if (progressRef.current) gsap.set(progressRef.current, { height: "100%" });
        return;
      }

      if (progressRef.current && trackRef.current) {
        gsap.fromTo(
          progressRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.4,
            },
          }
        );
      }

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="77 anos representando a indústria plástica do Rio de Janeiro"
        lead="Do pós-guerra ao setor de economia circular de hoje: conheça a trajetória institucional do SIMPERJ e a diretoria à frente da entidade."
        image="https://www.simperj.org.br/wp-content/uploads/2025/12/forum-plasticos.jpg"
        imageAlt="Representantes do SIMPERJ em fórum institucional do setor plástico"
      />

      {/* TIMELINE — GSAP ScrollTrigger */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Nossa história" title="Uma linha do tempo de transformação institucional" />

          <div ref={trackRef} className="relative mt-16 pl-10 md:pl-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-line)] md:-translate-x-1/2" aria-hidden="true" />
            <div
              ref={progressRef}
              className="absolute left-0 md:left-1/2 top-0 w-px bg-[var(--color-rust-600)] md:-translate-x-1/2"
              aria-hidden="true"
            />

            <ol className="space-y-16 md:space-y-24">
              {TIMELINE.map((entry, i) => (
                <li
                  key={entry.year}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  <span
                    className="absolute -left-10 md:left-1/2 top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[var(--color-rust-600)] ring-4 ring-[var(--color-paper)]"
                    aria-hidden="true"
                  />
                  <div className={i % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}>
                    <p className="font-display text-3xl font-semibold text-[var(--color-petrol-800)]">{entry.year}</p>
                    <p className="eyebrow mt-1 text-[var(--color-rust-600)]">{entry.date}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">{entry.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed text-[var(--color-graphite-700)] max-w-md ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                      {entry.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DIRETORIA */}
      <section className="py-20 md:py-28 bg-[var(--color-petrol-950)] text-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading dark eyebrow="Gestão 2025–2028" title="Diretoria atual" />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="border border-white/10 h-full">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-petrol-900)]">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top grayscale-[0.2]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-display text-3xl text-[var(--color-rust-500)]/60">
                        {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="eyebrow text-[var(--color-rust-500)]">{member.role}</p>
                    <p className="mt-1 font-display text-lg font-semibold leading-snug">{member.name}</p>
                    {member.company && <p className="mt-1 text-xs text-[var(--color-petrol-100)]/55">{member.company}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="eyebrow text-[var(--color-rust-500)]">Conselho Fiscal</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-3 max-w-2xl">
              {FISCAL_COUNCIL.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-full object-cover object-top grayscale-[0.2]"
                  />
                  <span className="text-sm text-[var(--color-petrol-100)]/80 leading-snug">{member.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EX-PRESIDENTES */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Legado institucional" title="Presidências ao longo da história" lead="Nove presidências conduziram o SIMPERJ desde 1947, consolidando sua relevância junto ao setor produtivo fluminense." />
          <Reveal className="mt-10 border-t border-[var(--color-line)]">
            <div className="flex items-center justify-between border-b border-[var(--color-line)] py-4">
              <span className="font-display text-lg font-semibold text-[var(--color-petrol-800)]">1947</span>
              <span className="text-sm text-[var(--color-graphite-700)]">Max Acker — presidente fundador</span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--color-line)] py-4">
              <span className="font-display text-lg font-semibold text-[var(--color-petrol-800)]">1950s–2020s</span>
              <span className="text-sm text-[var(--color-graphite-700)]">Sucessão de sete presidências ao longo de sete décadas</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="font-display text-lg font-semibold text-[var(--color-petrol-800)]">até 2024</span>
              <span className="text-sm text-[var(--color-graphite-700)]">Gladstone Santos Junior</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="py-16 border-t border-[var(--color-line)] bg-white">
        <div className="container-wide">
          <p className="eyebrow text-center text-[var(--color-graphite-500)]">Parceiros institucionais</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {PARTNERS.map((p) => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
