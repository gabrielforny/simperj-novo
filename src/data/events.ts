import type { EventItem } from "@/types";

// Fonte: "Feiras, eventos e congressos.xlsx" enviada pela cliente em 2026-08-24 —
// calendário oficial do setor plástico 2026/2027 (Interplast, Congresso Brasileiro
// do Plástico, Fakuma, NPE, etc). Itens sem data confirmada na planilha ("A confirmar")
// entram com status "em-breve" e sem startDate/endDate.
export const EVENTS: EventItem[] = [
  { slug: "interplast-2026-feira-e-congresso-da-tecnologia-do-plastico", name: "Interplast 2026 – Feira e Congresso da Tecnologia do Plástico", category: "feira-nacional", startDate: "2026-08-25", endDate: "2026-08-28", location: "Joinville/SC", status: "aberto", description: "Máquinas, matérias-primas, reciclagem, embalagens, tecnologia e inovação" },
  { slug: "6o-congresso-brasileiro-do-plastico", name: "6º Congresso Brasileiro do Plástico", category: "feira-nacional", startDate: "2026-08-26", endDate: "2026-08-27", location: "Joinville/SC / online", status: "aberto", description: "Inovação, sustentabilidade, economia circular e competitividade" },
  { slug: "feiplar-feipur-2026", name: "FEIPLAR & FEIPUR 2026", category: "feira-nacional", startDate: "2026-08-25", location: "São Paulo/SP", status: "aberto", description: "Termoplásticos, plásticos de engenharia, poliuretano, composites e elastômeros" },
  { slug: "circula-pack-summit-2026", name: "Circula Pack Summit 2026", category: "feira-nacional", startDate: "2026-09-02", location: "São Paulo/SP", status: "aberto", description: "Economia circular, reciclagem e embalagens" },
  { slug: "grafenoplast", name: "Grafenoplast", category: "feira-nacional", startDate: "2026-09-09", location: "São Paulo/SP", status: "aberto", description: "Novos materiais, grafeno e tecnologia para plásticos" },
  { slug: "16o-forum-competitividade", name: "16º Fórum Competitividade", category: "feira-nacional", startDate: "2026-10-14", location: "São Paulo/SP", status: "aberto", description: "Competitividade e indústria" },
  { slug: "fakuma-2026", name: "Fakuma 2026", category: "feira-internacional", startDate: "2026-10-12", endDate: "2026-10-16", location: "Friedrichshafen, Alemanha", status: "aberto", description: "Transformação de plásticos, máquinas, automação, materiais e reciclagem" },
  { slug: "pack-expo-international-2026", name: "PACK EXPO International 2026", category: "feira-internacional", startDate: "2026-10-18", endDate: "2026-10-21", location: "Chicago, EUA", status: "aberto", description: "Embalagens, automação e tecnologia" },
  { slug: "argenplas-2026", name: "Argenplás 2026", category: "feira-internacional", startDate: "2026-11-03", endDate: "2026-11-06", location: "Buenos Aires, Argentina", status: "aberto", description: "Plásticos, borracha, máquinas e transformação" },
  { slug: "plastimagen-2026", name: "Plastimagen 2026", category: "feira-internacional", startDate: "2026-11-03", endDate: "2026-11-06", location: "Cidade do México, México", status: "aberto", description: "Tecnologia, máquinas, matérias-primas e transformação de plásticos" },
  { slug: "plastics-recycling-world-expo-north-america", name: "Plastics Recycling World Expo North America", category: "feira-internacional", startDate: "2026-11-11", endDate: "2026-11-12", location: "EUA", status: "aberto", description: "Reciclagem e economia circular" },
  { slug: "plastics-rubber-indonesia", name: "Plastics & Rubber Indonesia", category: "feira-internacional", startDate: "2026-11-17", endDate: "2026-11-20", location: "Jacarta, Indonésia", status: "aberto", description: "Plásticos, borracha, máquinas e equipamentos" },
  { slug: "plast-eurasia-2026", name: "Plast Eurasia 2026", category: "feira-internacional", startDate: "2026-12-02", endDate: "2026-12-05", location: "Istambul, Turquia", status: "aberto", description: "Plásticos, máquinas, tecnologia e transformação" },
  { slug: "43o-encontro-nacional-do-plastico", name: "43º Encontro Nacional do Plástico", category: "feira-nacional", startDate: "2026-12-04", location: "São Paulo/SP", status: "aberto", description: "Encontro nacional da cadeia do plástico" },
  { slug: "rio-design-industria-plastico", name: "Rio Design Indústria – Plástico", category: "feira-nacional", location: "Três Rios/RJ", status: "em-breve", description: "Inovação, design, tecnologia, processos e embalagens" },
  { slug: "plastico-brasil-2027-feira-internacional-do-plastico", name: "Plástico Brasil 2027 – Feira Internacional do Plástico", category: "feira-nacional", startDate: "2027-03-15", endDate: "2027-03-19", location: "São Paulo/SP", status: "aberto", description: "Embalagens, sustentabilidade e Indústria 4.0" },
  { slug: "super-rio-expofood-2027-sre", name: "Super Rio Expofood 2027 – SRE", category: "feira-nacional", startDate: "2027-03-16", endDate: "2027-03-18", location: "Rio de Janeiro/RJ", status: "aberto", description: "Embalagens, alimentos, bebidas, varejo, distribuição e produtos para a indústria" },
  { slug: "plastivision-india-2027", name: "Plastivision India 2027", category: "feira-internacional", startDate: "2027-01-21", endDate: "2027-01-25", location: "Mumbai, Índia", status: "aberto", description: "Máquinas, equipamentos, matérias-primas e transformação de plásticos" },
  { slug: "jec-world-2027", name: "JEC World 2027", category: "feira-internacional", startDate: "2027-03-02", endDate: "2027-03-04", location: "Paris, França", status: "aberto", description: "Materiais compósitos, polímeros e materiais avançados" },
  { slug: "npe-2027-the-plastics-show", name: "NPE 2027 – The Plastics Show", category: "feira-internacional", startDate: "2027-05-03", endDate: "2027-05-07", location: "Orlando, EUA", status: "aberto", description: "Uma das principais feiras mundiais de plásticos, com máquinas, materiais, reciclagem, sustentabilidade e inovação" },
  { slug: "plastasia-2027", name: "PLASTASIA 2027", category: "feira-internacional", startDate: "2027-05-20", endDate: "2027-05-23", location: "Nova Délhi, Índia", status: "aberto", description: "Máquinas, equipamentos, matérias-primas e processamento de plásticos" },
  { slug: "interplast-2027", name: "Interplast 2027", category: "feira-nacional", location: "Joinville/SC", status: "em-breve", description: "Tecnologia, máquinas, matérias-primas, moldes, processos e reciclagem" },
  { slug: "congresso-brasileiro-do-plastico-2027", name: "Congresso Brasileiro do Plástico 2027", category: "feira-nacional", location: "Brasil", status: "em-breve", description: "Inovação, sustentabilidade, economia circular e competitividade" },
  { slug: "plastfair-2027", name: "Plastfair 2027", category: "feira-nacional", startDate: "2027-08-03", endDate: "2027-08-06", location: "Pinhais/Curitiba/PR", status: "aberto", description: "Tecnologias para a indústria do plástico, máquinas, equipamentos e negócios" },
  { slug: "fakuma-2027", name: "Fakuma 2027", category: "feira-internacional", location: "Friedrichshafen, Alemanha", status: "em-breve", description: "Transformação de plásticos, automação, máquinas, processos e materiais" },
  { slug: "plastics-recycling-world-expo-europe-2027", name: "Plastics Recycling World Expo Europe 2027", category: "feira-internacional", location: "Europa", status: "em-breve", description: "Reciclagem, economia circular e tecnologias de recuperação de plásticos" },
  { slug: "plastimagen-2027", name: "Plastimagen 2027", category: "feira-internacional", location: "Cidade do México, México", status: "em-breve", description: "Máquinas, matérias-primas, transformação e tecnologia de plásticos" },
  { slug: "plast-eurasia-2027", name: "Plast Eurasia 2027", category: "feira-internacional", location: "Istambul, Turquia", status: "em-breve", description: "Plásticos, máquinas, equipamentos e transformação" },
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
