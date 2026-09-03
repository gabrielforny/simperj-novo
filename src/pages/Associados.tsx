import { useMemo, useState } from "react";
import { Building2, Mail, MapPin, Phone, Search } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";
import { ASSOCIATES } from "@/data/associates";

export default function Associados() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ASSOCIATES;
    return ASSOCIATES.filter((a) =>
      [a.name, a.segment, a.address].some((field) => field?.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <>
      <Seo
        title="Associados"
        description="Empresas associadas ao SIMPERJ: quem são, com que processos e produtos trabalham e como entrar em contato."
        path="/associados"
      />
      <PageHero
        eyebrow="Rede associativa"
        title="Empresas associadas ao SIMPERJ"
        lead={`${ASSOCIATES.length} indústrias compõem hoje o quadro social do sindicato.`}
        breadcrumb={[{ label: "Associados" }]}
      />

      <Section spacing="lg">
        <Container>
          {ASSOCIATES.length === 0 ? (
            <div className="border border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] p-12 text-center max-w-xl mx-auto">
              <Building2 size={32} strokeWidth={1.5} className="mx-auto text-[var(--text-muted)]" aria-hidden="true" />
              <h2 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                Lista de associados em atualização
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">
                Estamos organizando a relação pública de empresas associadas. Enquanto isso, fale diretamente com nossa equipe.
              </p>
              <a
                href={`mailto:${SITE.associationEmail}?subject=Dúvida sobre associados SIMPERJ`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Falar com o SIMPERJ
              </a>
            </div>
          ) : (
            <>
              <SectionHeader eyebrow="Quadro social" title="Busque por empresa, cidade ou processo" />
              <div className="relative mt-6 max-w-sm">
                <Search size={18} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar associados…"
                  aria-label="Buscar associados"
                  className="w-full min-h-11 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--background)] pl-10 pr-4 py-2.5 text-sm focus:border-[var(--brand-primary)] outline-none"
                />
              </div>

              <p className="mt-6 text-sm text-[var(--text-muted)]">
                {filtered.length} de {ASSOCIATES.length} associados
              </p>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((a, i) => (
                  <Reveal key={a.name + (a.cnpj ?? "")} delay={Math.min(i, 8) * 40} className="border border-[var(--border)] rounded-[var(--radius-md)] p-5">
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug">{a.name}</h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{a.segment}</p>
                    {a.address && (
                      <p className="mt-3 flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--brand-primary)]" /> {a.address}
                      </p>
                    )}
                    {a.phone && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <Phone size={16} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {a.phone}
                      </p>
                    )}
                    {a.email && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)] break-all">
                        <Mail size={16} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {a.email}
                      </p>
                    )}
                  </Reveal>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="mt-10 text-center text-sm text-[var(--text-muted)]">Nenhum associado encontrado para essa busca.</p>
              )}
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
