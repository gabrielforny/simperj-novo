import { ExternalLink, FileText, Handshake } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/data/site";
import { CONVENIOS, CONVENIOS_INTRO } from "@/data/convenios";
import { DOCUMENTS } from "@/data/documents";

const CONVENIO_MATERIALS: Record<string, string[]> = {
  "Universidade Veiga de Almeida (UVA)": ["uva-pos-online-mes-do-cliente-folder", "uva-pos-online-passo-a-passo-cupom"],
};

export default function Convenios() {
  return (
    <>
      <Seo
        title="Convênios"
        description="Convênios e parcerias do SIMPERJ com desconto para empresas associadas."
        path="/convenios"
      />
      <PageHero eyebrow="Benefícios" title="Convênios SIMPERJ" lead={CONVENIOS_INTRO} breadcrumb={[{ label: "Convênios" }]} />

      <Section spacing="lg">
        <Container>
          {CONVENIOS.length === 0 ? (
            <div className="border border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] p-12 text-center max-w-xl mx-auto">
              <Handshake size={32} strokeWidth={1.5} className="mx-auto text-[var(--text-muted)]" aria-hidden="true" />
              <h2 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                Lista de convênios em atualização
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">
                Estamos organizando a lista completa de convênios e parceiros com desconto para associados. Enquanto isso, tire suas dúvidas diretamente com nossa equipe.
              </p>
              <a
                href={`mailto:${SITE.associationEmail}?subject=Dúvida sobre convênios SIMPERJ`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Falar sobre convênios
              </a>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CONVENIOS.map((c) => {
                const materials = (CONVENIO_MATERIALS[c.company] ?? [])
                  .map((slug) => DOCUMENTS.find((d) => d.slug === slug))
                  .filter((d): d is NonNullable<typeof d> => Boolean(d));

                return (
                  <div key={c.company} className="border border-[var(--border)] rounded-[var(--radius-md)] p-5">
                    <p className="eyebrow text-[var(--brand-primary)]">{c.category}</p>
                    <h3 className="mt-2 font-[var(--font-display)] font-semibold text-[var(--text)]">{c.company}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{c.description}</p>
                    <p className="mt-3 text-sm font-semibold text-[var(--brand-secondary)]">{c.benefit}</p>
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
                      >
                        Acessar inscrições <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                    {materials.length > 0 && (
                      <ul className="mt-3 space-y-1.5 border-t border-[var(--border)] pt-3">
                        {materials.map((doc) => (
                          <li key={doc.slug}>
                            <a
                              href={doc.file}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--brand-primary)] hover:underline"
                            >
                              <FileText size={14} aria-hidden="true" className="shrink-0" /> {doc.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
