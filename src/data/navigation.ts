import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", to: "/" },
  {
    label: "Institucional",
    children: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Por que se Associar", to: "/por-que-se-associar" },
      { label: "Associe-se", to: "/associe-se" },
    ],
  },
  {
    label: "Setor",
    children: [
      { label: "Eventos", to: "/eventos" },
      { label: "Cursos", to: "/cursos" },
      { label: "Sustentabilidade", to: "/sustentabilidade" },
      { label: "Convênios", to: "/convenios" },
    ],
  },
  {
    label: "Jurídico",
    children: [
      { label: "Acordos Coletivos", to: "/acordos-coletivos" },
      { label: "Legislação", to: "/legislacao" },
      { label: "Reuniões da Diretoria", to: "/reunioes-diretoria" },
    ],
  },
  {
    label: "Conteúdo",
    children: [
      { label: "Notícias", to: "/noticias" },
      { label: "Materiais para Download", to: "/materiais" },
    ],
  },
  { label: "Contato", to: "/contato" },
];

export const FOOTER_LINKS: NavItem[] = NAV_ITEMS;
