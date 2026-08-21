import type { Convenio } from "@/types";

// Fonte: /convenio/ — confirmado com o cliente que a página está genuinamente vazia no
// site atual (nenhuma lista de convênio foi publicada; docs/content-audit.md §11).
// Arquitetura de dados fica pronta; array populado quando o cliente fornecer os parceiros.
export const CONVENIOS: Convenio[] = [];

export const CONVENIOS_INTRO =
  "Todas as empresas associadas ao SIMPERJ têm direito a descontos, bolsas e ofertas especiais nas empresas e entidades parceiras do nosso sindicato e da Firjan. Os convênios estão organizados por categoria para sua conveniência.";
