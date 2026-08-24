import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResponsiveTable, type TableColumn } from "@/components/ui/ResponsiveTable";
import { COLLECTIVE_AGREEMENTS } from "@/data/collective-agreements";
import type { CollectiveAgreement } from "@/types";

const COLUMNS: TableColumn<CollectiveAgreement>[] = [
  { key: "regional", header: "Regional", render: (r) => <strong className="text-[var(--text)]">{r.regional}</strong> },
  { key: "municipalities", header: "Municípios de cobertura", render: (r) => r.municipalities },
  { key: "baseDate", header: "Data-base", render: (r) => r.baseDate },
  { key: "lastCct", header: "Última CCT fechada", render: (r) => r.lastCct },
  { key: "laborUnion", header: "Sindicato Laboral", render: (r) => r.laborUnion },
  { key: "unionPresident", header: "Presidente", render: (r) => r.unionPresident },
  { key: "cnpj", header: "CNPJ", render: (r) => <span className="font-[var(--font-mono)]">{r.cnpj}</span> },
  { key: "address", header: "Endereço", render: (r) => r.address },
  { key: "phone", header: "Telefone", render: (r) => r.phone },
];

export default function AcordosColetivos() {
  return (
    <>
      <Seo
        title="Acordos Coletivos"
        description="Convenções Coletivas de Trabalho do SIMPERJ por regional: municípios, data-base, sindicato laboral e contatos."
        path="/acordos-coletivos"
      />
      <PageHero
        eyebrow="Jurídico"
        title="Acordos Coletivos de Trabalho"
        lead="Convenção Coletiva de Trabalho por regional, com dados de contato de cada sindicato laboral."
        breadcrumb={[{ label: "Acordos Coletivos" }]}
      />

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="CCT por regional" title="5 regionais cobertas" />
          <div className="mt-10">
            <ResponsiveTable
              columns={COLUMNS}
              rows={COLLECTIVE_AGREEMENTS}
              getRowKey={(r) => r.regional}
              caption="Convenção Coletiva de Trabalho por regional"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
