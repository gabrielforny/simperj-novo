import type { Course } from "@/types";

// O catálogo anterior era o "SIMPERJ-SENAI 1º semestre de 2021" (docs/content-audit.md
// §1). Cliente pediu, em 2026-08-26, para remover todo o catálogo antigo — a página
// entra em estado "em atualização" até o novo catálogo ser enviado.
export const COURSES: Course[] = [];

export const COURSE_RULES: string[] = [];
