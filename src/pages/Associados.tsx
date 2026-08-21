import { Building2, MapPin, Phone } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/data/site";
import { ASSOCIATES } from "@/data/associates";

export default function Associados() {
  return (
    <>
      <Seo
        title="Associados"
        description="Empresas associadas ao SIMPERJ: quem são, com que materiais e produtos trabalham e como entrar em contato."
        path="/associados"
      />
      <PageHero
        eyebrow="Rede associativa"
        title="Empresas associadas ao SIMPERJ"
        lead="Conheça as indústrias que compõem o quadro social do sindicato."
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
                Estamos organizando a relação pública de empresas associadas, com material/produto, endereço e contato. Enquanto isso, fale diretamente com nossa equipe.
              </p>
              <a
                href={`mailto:${SITE.associationEmail}?subject=Dúvida sobre associados SIMPERJ`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Falar com o SIMPERJ
              </a>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ASSOCIATES.map((a) => (
                <div key={a.name} className="border border-[var(--border)] rounded-[var(--radius-md)] p-5">
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--text)]">{a.name}</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{a.segment}</p>
                  {a.address && (
                    <p className="mt-3 flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--brand-primary)]" /> {a.address}
                    </p>
                  )}
                  {a.whatsapp && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <Phone size={16} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {a.whatsapp}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
