import type { Course } from "@/types";

// Fonte: e-mail da cliente em 2026-09-21 — "Programa de Qualificação Setorial
// SENAI-RJ – 2026", cursos recebidos para divulgação (parceria Firjan/SENAI).
export const COURSES: Course[] = [
  {
    slug: "assistente-de-controle-de-qualidade-senai-tres-rios",
    name: "Assistente de Controle de Qualidade",
    category: "Qualidade",
    institution: "SENAI Três Rios",
    address: "Avenida Vereador Mario de Castro Reis, Nº 25 - Nova Niterói, Três Rios - RJ, CEP 25804-080",
    modality: "Qualificação Profissional",
    hours: 200,
    slots: 20,
    shift: "Noite",
    schedule: "18:00 às 22:00",
    strategy: "Presencial",
    weekdays: "2ª a 6ª",
    startDate: "2026-11-16",
    endDate: "2027-03-19",
    audience: "Idade mínima de 16 anos",
    prerequisite: "Escolaridade mínima desejável: Ensino Fundamental Completo",
    status: "aberto",
  },
  {
    slug: "operacao-preparacao-regulagem-maquina-termoformadora-senai-caxias",
    name: "Operação, Preparação e Regulagem de Máquina Termoformadora",
    category: "Produção",
    institution: "SENAI Duque de Caxias",
    address: "Rua Arthur Goulart, Nº 124 - Centro, Duque de Caxias - RJ, CEP 25010-001",
    modality: "Aperfeiçoamento Profissional",
    hours: 80,
    slots: 20,
    shift: "Tarde",
    schedule: "13:00 às 17:00",
    strategy: "Presencial",
    weekdays: "2ª a 6ª",
    startDate: "2026-11-16",
    endDate: "2026-12-18",
    audience: "Idade mínima de 18 anos",
    prerequisite: "Escolaridade mínima desejável: 7º ano do Ensino Fundamental. Conhecimentos em áreas afins.",
    status: "aberto",
  },
];

export const COURSE_RULES: string[] = [];
