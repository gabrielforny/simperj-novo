import type { BoardMeeting } from "@/types";

// Fonte: /reunioes-da-diretoria/ — única fonte canônica de calendário de reunião da
// diretoria (docs/content-audit.md §10.2 documenta os outros 2 sistemas conflitantes
// encontrados no site atual, descartados na nova IA).
export const BOARD_MEETINGS: BoardMeeting[] = [
  { month: "Fevereiro", day: "26", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
  { month: "Abril", day: "16", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
  { month: "Maio", day: "18", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
  { month: "Julho", day: "20", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
  { month: "Setembro", day: "22", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
  { month: "Novembro", day: "08", time: "14h às 16h", type: "Ordinária", location: "Sede SIMPERJ" },
];

export const BOARD_MEETINGS_NOTE =
  "Confira as datas e horários das reuniões da diretoria do SIMPERJ. Este calendário será atualizado ao longo do ano.";
