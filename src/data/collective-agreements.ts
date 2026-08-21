import type { CollectiveAgreement } from "@/types";

// Fonte: /acordos-coletivos/ — tabela real por regional, preservada integralmente
// (docs/content-audit.md §1).
export const COLLECTIVE_AGREEMENTS: CollectiveAgreement[] = [
  {
    regional: "Rio de Janeiro",
    municipalities: "Duque de Caxias, Nilópolis, Rio de Janeiro e São João de Meriti",
    baseDate: "Setembro",
    lastCct: "setembro/2023 a agosto/2024 (negociação 2024/2025 em andamento)",
    laborUnion: "TRAQUIMFAR",
    cnpj: "33.652.629/0001-75",
    address: "R. Andrade Figueira, 206 — Madureira, RJ, 21360-230",
    phone: "(21) 3479-7528 / 7500",
  },
  {
    regional: "Niterói",
    municipalities: "Bom Jardim, Cachoeiras de Macacu, Cantagalo, Carmo, Cordeiro, Guapimirim, Maricá, Niterói, Rio Bonito, Santa Maria Madalena, São Sebastião do Alto, Sumidouro, Teresópolis e Trajano de Moraes",
    baseDate: "Março",
    lastCct: "março/2024 a fevereiro/2025",
    laborUnion: "Sind. Trab. Ind. Prod. Quím. Farm. e Mat. Plást. de SG",
    cnpj: "31.722.994/0001-83",
    address: "Rua Afonso Quintão, 25, Trindade, São Gonçalo, CEP 24.630-005",
    phone: "(21) 2603-4190",
  },
  {
    regional: "São Gonçalo",
    municipalities: "Araruama, Armação dos Búzios, Cabo Frio, Iguaba Grande, Itaboraí, São Gonçalo, São Pedro da Aldeia, Saquarema e Tanguá",
    baseDate: "Março",
    lastCct: "março/2024 a fevereiro/2025",
    laborUnion: "Sind. Trab. Ind. de Mat. Plást., Res. Plást., Res. Sint., Lam. de Vidros, Petroquímicas, Tint., Vern., Prod. Méd. Hosp. Odont. de Itaboraí, São Gonçalo e Tanguá",
    cnpj: "09.069.091/0001-96",
    address: "Av. Raimundo de Farias, 87/512, Centro, Itaboraí, RJ, CEP 24.800-037",
    phone: "(21) 3913-9391",
  },
  {
    regional: "Petrópolis",
    municipalities: "Engenheiro Paulo de Frontin, Paraíba do Sul, Petrópolis, Três Rios e Vassouras",
    baseDate: "Maio",
    lastCct: "maio/2024 a abril/2025",
    laborUnion: "SINDQUIMP Serrano",
    cnpj: "32.414.245/0001-51",
    address: "Rua Izaltino Silveira, 1319, Centro, Três Rios, RJ, CEP 25.804-250",
    phone: "(24) 2255-5105 / 2583",
  },
  {
    regional: "Nova Friburgo",
    municipalities: "Nova Friburgo",
    baseDate: "Março",
    lastCct: "março/2022 a fevereiro/2024 (negociação 2024/2025 em andamento)",
    laborUnion: "SINDIQUÍMICA",
    cnpj: "73.647.141/0001-74",
    address: "Av. Alberto Braune, 04, sala 101, Centro, Nova Friburgo, CEP 28.613-000",
    phone: "(22) 2522-8220",
  },
];
