import type { Convenio } from "@/types";

// Fonte: /convenio/ — confirmado com o cliente que a página está genuinamente vazia no
// site atual (nenhuma lista de convênio foi publicada; docs/content-audit.md §11).
// Cliente informou em 2026-08-21 o primeiro convênio vigente (Faculdade Veiga de
// Almeida). Em 2026-09-03 a UVA enviou os detalhes da "Campanha Mês do Cliente"
// (cupom CLIENTEUVA01), válida de 01 a 30/09/2026 — ver docs/documents.ts para o
// folder e o passo a passo completos. Atualizar/remover a campanha após 30/09/2026.
export const CONVENIOS: Convenio[] = [
  {
    category: "Educação",
    company: "Universidade Veiga de Almeida (UVA)",
    description: "Pós-graduação e MBA 100% on-line, com mais de 40 cursos nas áreas de Direito, Saúde, Educação, Gestão, TI e Negócios. Campanha Mês do Cliente válida de 01 a 30 de setembro de 2026.",
    benefit: "62% de desconto com o cupom CLIENTEUVA01 (mensalidade de R$ 49 no 1º mês e R$ 104,41 nos demais) e parcelamento em até 15x. Inscrições em online.uva.br.",
    link: "https://online.uva.br",
  },
];

export const CONVENIOS_INTRO =
  "Todas as empresas associadas ao SIMPERJ têm direito a descontos, bolsas e ofertas especiais nas empresas e entidades parceiras do nosso sindicato e da Firjan. Os convênios estão organizados por categoria para sua conveniência.";
