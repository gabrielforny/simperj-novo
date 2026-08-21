import { useMemo, useState } from "react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { cn } from "@/lib/cn";
import { DOCUMENTS, DOCUMENT_CATEGORIES } from "@/data/documents";

export default function Materiais() {
  const [category, setCategory] = useState<string>("Todas");
  const years = useMemo(() => ["Todos", ...Array.from(new Set(DOCUMENTS.map((d) => String(d.year)))).sort().reverse()], []);
  const [year, setYear] = useState<string>("Todos");

  const filtered = DOCUMENTS.filter((d) => (category === "Todas" || d.category === category) && (year === "Todos" || String(d.year) === year));

  return (
    <>
      <Seo
        title="Materiais para Download"
        description="Biblioteca de relatórios setoriais, guias práticos e análises técnicas do SIMPERJ sobre a indústria do plástico."
        path="/materiais"
      />
      <PageHero
        eyebrow="Central de recursos"
        title="Materiais técnicos para download"
        lead="Relatórios setoriais, guias práticos e análises produzidas para apoiar a gestão dos associados."
        breadcrumb={[{ label: "Materiais" }]}
      />

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Biblioteca" title={`${DOCUMENTS.length} documentos disponíveis`} />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categoria">
              {["Todas", ...DOCUMENT_CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-4 py-2 min-h-11 text-sm font-medium border rounded-[var(--radius-sm)] transition-colors",
                    category === cat ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]" : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand-primary)]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <label className="ml-auto flex items-center gap-2 text-sm text-[var(--text-muted)]">
              Ano
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="min-h-11 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--background)] px-3 py-2 text-sm"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-sm text-[var(--text-muted)]">Nenhum material encontrado para esse filtro.</p>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((doc, i) => (
                <Reveal key={doc.slug} delay={(i % 6) * 60}>
                  <DocumentCard document={doc} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
