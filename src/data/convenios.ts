import type { Convenio } from "@/types";

// Fonte: /convenio/ — confirmado com o cliente que a página está genuinamente vazia no
// site atual (nenhuma lista de convênio foi publicada; docs/content-audit.md §11).
// Cliente informou em 2026-08-21 o primeiro convênio vigente (Faculdade Veiga de
// Almeida); demais campos (descrição/benefício/link) a confirmar com o sindicato.
export const CONVENIOS: Convenio[] = [
  {
    category: "Educação",
    company: "Faculdade Veiga de Almeida",
    description: "Convênio educacional vigente para associados do SIMPERJ.",
    benefit: "Condições a confirmar com o sindicato.",
  },
];

export const CONVENIOS_INTRO =
  "Todas as empresas associadas ao SIMPERJ têm direito a descontos, bolsas e ofertas especiais nas empresas e entidades parceiras do nosso sindicato e da Firjan. Os convênios estão organizados por categoria para sua conveniência.";
