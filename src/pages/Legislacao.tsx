import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

// Fonte: /legislacao/ (vazia) + /orientacoes-juridicas/, /lei-de-incentivo-a-reciclagem/,
// /calendario-de-obrigacoes-ambientais/, /fiscalizacao-e-cotas-de-aprendizes-e-de-pcds/,
// mescladas em um único hub (docs/content-audit.md §4).
const TOPICS = [
  {
    id: "fim-escala-6x1",
    title: "Fim da escala 6x1",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-[var(--text)]">
          Firjan se reúne com assessorias de senadores e apresenta alternativas à PEC do fim da escala 6x1
        </p>
        <p>
          A Firjan se reuniu em 26/08/2026 com as assessorias dos senadores Flávio Bolsonaro e Carlos Portinho para
          reforçar a preocupação com o avanço da PEC 221/2019 (Proposta de Emenda à Constituição 221/2019), que prevê
          a redução da jornada de trabalho para 40 horas semanais e dois dias de repouso semanais remunerados.
        </p>
        <p>
          Durante as reuniões, representantes das gerências de Relações Institucionais e de Relações Trabalhistas da
          federação apresentaram estudos, dados e análises sobre os potenciais impactos da proposta sobre a indústria
          e a economia fluminense. Foi defendido que uma eventual mudança na jornada de trabalho seja discutida de
          forma ampla e responsável, considerando as diferentes realidades dos setores produtivos.
        </p>
        <p>
          A partir dos dados apresentados, a Firjan entregou aos gabinetes uma sugestão de emenda com medidas
          destinadas a mitigar os impactos da PEC. Entre os principais pontos estão:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manutenção de apenas um dia de repouso semanal remunerado;</li>
          <li>
            Possibilidade de que lei, acordo ou convenção coletiva estabeleça regimes e escalas diferenciados,
            inclusive com distribuição variável dos dias de descanso ao longo do mês;
          </li>
          <li>Prevalência dos acordos coletivos de trabalho durante seu período de vigência;</li>
          <li>
            Transição gradual para a jornada de 40 horas semanais, a partir de 2028, com redução de uma hora por ano
            até 2031.
          </li>
        </ul>
        <p>
          A Firjan seguirá atuando junto ao Congresso Nacional, com base em evidências e estudos técnicos, para
          apresentar os impactos da proposta e defender uma medida que preserve a sustentabilidade das atividades
          produtivas, a segurança jurídica e a competitividade da indústria.
        </p>
        <p className="text-sm text-[var(--text-muted)]">Fonte: Firjan</p>
      </div>
    ),
  },
  {
    id: "nr-1",
    title: "NR-1 — Gerenciamento de Riscos Ocupacionais",
    content: (
      <p className="italic text-[var(--text-muted)]">
        Conteúdo em atualização — aguardando material oficial do sindicato sobre a NR-1.
      </p>
    ),
  },
  {
    id: "lei-incentivo-reciclagem",
    title: "Lei de Incentivo à Reciclagem",
    content: (
      <p>
        Lei nº 9.376, de 22/07/2021: cria o Programa de Incentivo à Reciclagem, premia cooperativas de catadores e
        estabelece fontes de custeio para o programa no Estado do Rio de Janeiro.
      </p>
    ),
  },
  {
    id: "fiscalizacao-cotas",
    title: "Fiscalização e cotas de aprendizes e de PCDs",
    content: (
      <p>
        A fiscalização por parte dos Auditores-Fiscais do Trabalho e do Ministério Público do Trabalho sempre é
        motivo de preocupação — isso se agrava quando o tema envolve o cumprimento de cotas legais de aprendizes e
        de pessoas com deficiência (PCDs), que exigem atenção contínua das indústrias associadas.
      </p>
    ),
  },
  {
    id: "calendario-obrigacoes-ambientais",
    title: "Calendário de Obrigações Ambientais",
    content: (
      <p>
        Anualmente, a indústria fluminense precisa cumprir uma série de obrigações legais demandadas pelos órgãos
        ambientais. Diversos instrumentos de controle e licenciamento têm prazos específicos que devem ser
        acompanhados pelas empresas associadas.
      </p>
    ),
  },
  {
    id: "orientacoes-juridicas-gerais",
    title: "Orientações Jurídicas Gerais",
    content: (
      <p>
        O SIMPERJ disponibiliza orientações jurídicas periódicas sobre temas relevantes para a indústria —
        trabalhistas, ambientais e regulatórios — elaboradas para apoiar a tomada de decisão das empresas associadas.
      </p>
    ),
  },
];

export default function Legislacao() {
  return (
    <>
      <Seo
        title="Legislação"
        description="Orientações jurídicas, leis e obrigações ambientais relevantes para a indústria de transformação de plástico do Rio de Janeiro."
        path="/legislacao"
      />
      <PageHero
        eyebrow="Jurídico"
        title="Legislação e orientações jurídicas"
        lead="Leis, prazos e orientações relevantes para a operação legal da sua indústria."
        breadcrumb={[{ label: "Legislação" }]}
      />

      <Section spacing="lg">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Temas" title="Orientações organizadas por assunto" />
          <div className="mt-10">
            <Accordion items={TOPICS} />
          </div>
        </Container>
      </Section>
    </>
  );
}
