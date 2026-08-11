import { useMemo, useState } from "react";
import { Clock, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { COURSES } from "../data/content";

export default function Cursos() {
  const categories = useMemo(() => ["Todos", ...new Set(COURSES.map((c) => c.category))], []);
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <>
      <PageHero
        eyebrow="Capacitação"
        title="Cursos técnicos para a indústria do plástico"
        lead="Catálogo de formações em produção, automação industrial, digital e gestão — oferecidas via parceria Firjan/SENAI, gratuitas para associados."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Catálogo" title="Escolha uma categoria" />

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categorias de cursos">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
                  active === cat
                    ? "bg-[var(--color-petrol-900)] text-white border-[var(--color-petrol-900)]"
                    : "border-[var(--color-line)] text-[var(--color-graphite-700)] hover:border-[var(--color-petrol-700)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => (
              <Reveal key={course.name} delay={(i % 6) * 70}>
                <div className="card-industrial flex h-full flex-col p-6">
                  <span className="eyebrow text-[var(--color-green-700)]">{course.category}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)] leading-snug flex-1">
                    {course.name}
                  </h3>
                  <div className="mt-5 flex items-center gap-5 text-sm text-[var(--color-graphite-700)]">
                    <span className="flex items-center gap-1.5"><Clock size={15} /> {course.hours}h</span>
                    <span className="flex items-center gap-1.5"><Users size={15} /> {course.slots} vagas</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 ${
                        course.status === "Aberto"
                          ? "bg-[var(--color-green-100)] text-[var(--color-green-800)]"
                          : "bg-[var(--color-rust-100)] text-[var(--color-rust-700)]"
                      }`}
                    >
                      {course.status}
                    </span>
                    <button type="button" className="text-sm font-semibold text-[var(--color-petrol-800)] hover:text-[var(--color-rust-600)]">
                      Inscrever-se
                    </button>
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
