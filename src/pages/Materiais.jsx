import { useMemo, useState } from "react";
import { FileText, Download } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { MATERIALS } from "../data/content";

export default function Materiais() {
  const categories = useMemo(() => ["Todos", ...new Set(MATERIALS.map((m) => m.category))], []);
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? MATERIALS : MATERIALS.filter((m) => m.category === active);

  return (
    <>
      <PageHero
        eyebrow="Central de recursos"
        title="Materiais técnicos para download"
        lead="Relatórios setoriais, guias práticos e análises produzidos pelo SIMPERJ para apoiar a gestão e a tomada de decisão dos associados."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Biblioteca" title="Filtre por categoria" />

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categorias de materiais">
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
            {filtered.map((mat, i) => (
              <Reveal key={mat.title} delay={(i % 6) * 70}>
                <div className="card-industrial flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <FileText size={26} strokeWidth={1.4} className="text-[var(--color-petrol-700)]" />
                    <span className="eyebrow text-[var(--color-green-700)]">PDF</span>
                  </div>
                  <span className="eyebrow mt-5 text-[var(--color-rust-600)]">{mat.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)] leading-snug flex-1">{mat.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite-700)] leading-relaxed">{mat.desc}</p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-petrol-800)] hover:text-[var(--color-rust-600)] self-start"
                  >
                    <Download size={16} /> Baixar (placeholder)
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
