import type { Convenio } from "@/types";

// Fonte: /convenio/ — confirmado com o cliente que a página está genuinamente vazia no
// site atual (nenhuma lista de convênio foi publicada; docs/content-audit.md §11).
// Cliente informou em 2026-08-21 o primeiro convênio vigente (Faculdade Veiga de
// Almeida). Em 2026-09-03 a UVA enviou os detalhes da "Campanha Mês do Cliente"
// (cupom CLIENTEUVA01), válida de 01 a 30/09/2026 — ver docs/documents.ts para o
// folder e o passo a passo completos; campanha encerrada, descrição revertida para
// a oferta padrão de pós-graduação em 2026-10-07.
// Em 2026-10-07 a UVA enviou a arte da campanha de graduação semipresencial em
// Segurança Cibernética (novas turmas em outubro/2026, 84% de desconto).
export const CONVENIOS: Convenio[] = [
  {
    category: "Educação",
    company: "Universidade Veiga de Almeida (UVA)",
    description: "Novo curso semipresencial de Segurança Cibernética — duração de 2,5 anos, modelo híbrido (aulas presenciais, ao vivo e online), atividades práticas presenciais desde o 1º semestre e cursos gratuitos de Inglês, Liderança e Empreendedorismo. Novas turmas em outubro.",
    benefit: "84% de desconto para associados SIMPERJ. Simule seu desconto falando com Giselle Machado.",
    image: "/assets/convenios/uva-seguranca-cibernetica-2026.jpg",
    contact: {
      name: "Giselle Machado",
      phone: "(21) 9 8335-8397",
      email: "giselle.machado@uva.br",
    },
  },
  {
    category: "Educação",
    company: "Universidade Veiga de Almeida (UVA)",
    description: "Pós-graduação e MBA 100% on-line, com mais de 40 cursos nas áreas de Direito, Saúde, Educação, Gestão, TI e Negócios.",
    benefit: "Condições especiais para associados SIMPERJ. Inscrições em online.uva.br.",
    link: "https://online.uva.br",
  },
];

export const CONVENIOS_INTRO =
  "Todas as empresas associadas ao SIMPERJ têm direito a descontos, bolsas e ofertas especiais nas empresas e entidades parceiras do nosso sindicato e da Firjan. Os convênios estão organizados por categoria para sua conveniência.";
