import type { EventItem } from "@/types";

// Fonte: /eventos/ (categorias) + acoes-do-simperj (ações reais com fotos próprias).
// Datas de feiras nacionais preservadas do calendário mais recente publicado no site atual.
export const EVENTS: EventItem[] = [
  {
    slug: "sulserve-2026",
    name: "SULSERVE — Feira de Panificação, Food Service e Hotelaria",
    category: "feira-nacional",
    startDate: "2026-06-23",
    endDate: "2026-06-25",
    location: "Novo Hamburgo — RS",
    url: "https://www.sulserve.com.br/",
    status: "aberto",
  },
  {
    slug: "futureprint-2026",
    name: "FuturePrint",
    category: "feira-nacional",
    startDate: "2026-07-14",
    endDate: "2026-07-17",
    location: "Distrito Anhembi — São Paulo",
    url: "https://www.feirafutureprint.com.br",
    status: "aberto",
  },
  {
    slug: "fipan-2026",
    name: "FIPAN",
    category: "feira-nacional",
    startDate: "2026-07-21",
    endDate: "2026-07-24",
    location: "Expo Center Norte — São Paulo/SP",
    url: "https://fipan.com.br",
    status: "aberto",
  },
  {
    slug: "food-ingredients-south-america-2026",
    name: "Food Ingredients South America",
    category: "feira-nacional",
    startDate: "2026-08-04",
    endDate: "2026-08-06",
    location: "São Paulo Expo — SP",
    url: "https://www.fi-events.com.br",
    status: "aberto",
  },
  {
    slug: "fenasucro-agrocana-2026",
    name: "Fenasucro & Agrocana",
    category: "feira-nacional",
    startDate: "2026-08-11",
    endDate: "2026-08-14",
    location: "Sertãozinho — SP",
    url: "https://www.fenasucro.com.br",
    status: "aberto",
  },
  {
    slug: "6o-recy-plastech",
    name: "6º Recy-Plastech",
    category: "feira-nacional",
    location: "São Paulo",
    status: "aberto",
    description: "Seminário internacional voltado à sustentabilidade e reciclagem de plásticos, reunindo especialistas do setor.",
  },
];

export const RECENT_ACTIONS: EventItem[] = [
  {
    slug: "simperj-na-expofood-2026",
    name: "SIMPERJ na Expofood 2026",
    category: "acao-simperj",
    startDate: "2026-07-02",
    status: "encerrado",
    description: "O SIMPERJ teve a satisfação de participar da Expofood 2026, um importante encontro para geração de negócios, networking e fortalecimento do setor.",
    images: [
      "/assets/events/expofood-2026-01.png",
      "/assets/events/expofood-2026-02.png",
      "/assets/events/expofood-2026-03.png",
      "/assets/events/expofood-2026-04.png",
      "/assets/events/expofood-2026-05.png",
      "/assets/events/expofood-2026-06.png",
      "/assets/events/expofood-2026-07.png",
      "/assets/events/expofood-2026-08.png",
    ],
  },
  {
    slug: "feira-k-2025",
    name: "Feira K 2025 — O Futuro da Indústria de Plásticos e Borracha",
    category: "acao-simperj",
    startDate: "2025-10-20",
    status: "encerrado",
    description: "A Feira K, na Alemanha, é o maior evento do setor. A participação do Sr. Cláudio Patrick reforça nosso compromisso com inovação e sustentabilidade.",
    images: [
      "/assets/events/feira-k-2025-01.jpg",
      "/assets/events/feira-k-2025-02.jpg",
      "/assets/events/feira-k-2025-03.jpg",
      "/assets/events/feira-k-2025-04.jpg",
      "/assets/events/feira-k-2025-05.jpg",
      "/assets/events/feira-k-2025-06.jpg",
    ],
  },
];

export const INTERNATIONAL_EVENTS_NOTICE =
  "Estamos atualizando a agenda internacional. Novidades em breve!";
