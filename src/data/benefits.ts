import type { BenefitGroup, Discount } from "@/types";

// Fonte: /por-que-se-associar/ (texto corrido original) reagrupado por tema,
// conforme pedido do briefing (docs/content-audit.md §1).
export const BENEFIT_GROUPS: BenefitGroup[] = [
  {
    id: "representatividade",
    title: "Representatividade",
    items: [
      {
        title: "Representação institucional",
        text: "O SIMPERJ é entidade filiada à FIRJAN e à ABIPLAST, com as quais mantém estreitos laços de cooperação na defesa dos interesses das associadas — e está presente na maioria dos Conselhos Empresariais da Firjan.",
      },
      {
        title: "Núcleo Intersindical de Conciliação",
        text: "Em parceria com a Firjan, concilia conflitos individuais do trabalho e contribui para o aprimoramento das relações de trabalho, estimulando a negociação coletiva.",
      },
    ],
  },
  {
    id: "negocios",
    title: "Negócios",
    items: [
      {
        title: "Participação em feiras do setor",
        text: "Oportunidade de expor em feiras nacionais, em estande do sindicato, com baixo custo e pagamento parcelado.",
      },
      {
        title: "Divulgação gratuita",
        text: "Divulgação dos produtos da sua empresa no site do SIMPERJ, sem custo.",
      },
      {
        title: "Declaração de fabricação exclusiva",
        text: "Emissão de declarações para as empresas associadas, exigência legal para compor documentação em concorrências e licitações públicas.",
      },
    ],
  },
  {
    id: "servicos",
    title: "Serviços",
    items: [
      {
        title: "Serviço de apoio",
        text: "Auditório à disposição das empresas associadas para reuniões, encontros e palestras.",
      },
      {
        title: "Demais convênios",
        text: "Óticas, hotéis e pousadas, além dos que se encontram em negociação com o sindicato.",
      },
    ],
  },
  {
    id: "educacao",
    title: "Educação e Capacitação",
    items: [
      {
        title: "Convênios com instituições de ensino",
        text: "Ensino fundamental, médio, graduação, pós-graduação, cursos técnicos, cursos de línguas e creches.",
      },
      {
        title: "Educação profissional (SENAI)",
        text: "Descontos de até 25% para turmas fechadas patrocinadas pela empresa, e de 15% para alunos em turmas nas Unidades Operacionais do SENAI.",
      },
    ],
  },
  {
    id: "saude-e-seguranca",
    title: "Saúde e Segurança",
    items: [
      {
        title: "Programas de Saúde Ocupacional (SESI)",
        text: "Descontos no PCMSO: 25% na taxa de manutenção, 10% no custo total do documento base, 40% em exames laboratoriais e 30% em exames radiológicos.",
      },
      {
        title: "PPRA (SESI)",
        text: "Isenção de documento base e desconto de 25% em avaliações de risco pontuais (ruído, iluminância, temperatura, gases e vapores).",
      },
      {
        title: "Odontologia (SESI)",
        text: "Descontos entre 10% e 15% na contratação das Unidades Móveis Odontológicas.",
      },
    ],
  },
  {
    id: "assessoria",
    title: "Assessoria Empresarial Firjan",
    items: [
      {
        title: "Assessorias especializadas via SIMPERJ",
        text: "Responsabilidade Social, Marketing Cultural, Investimentos, Jurídica, Informação Empresarial Estratégica, Comércio Exterior/CIN, Meio Ambiente e Econômica.",
      },
      {
        title: "Assessoria Tecnológica",
        text: "Desconto de 20% no ato da contratação dos serviços de consultoria tecnológica.",
      },
      {
        title: "Pesquisa Salarial",
        text: "Desconto de 40% no ato da contratação dos serviços de pesquisa salarial.",
      },
    ],
  },
  {
    id: "convenios-firjan",
    title: "Benefícios Firjan",
    items: [
      {
        title: "Educação Básica (SESI)",
        text: "Desconto de 15% no ensino fundamental e 5% no ensino médio, com todo material didático oferecido pelo SESI.",
      },
      {
        title: "Certificados de Origem (FIRJAN)",
        text: "Desconto de 15% na emissão de certificados de origem.",
      },
      {
        title: "Esporte e Lazer — SESI Clube",
        text: "Convênio com desconto em folha de pagamento; categoria familiar com 18% de desconto.",
      },
      {
        title: "Aluguel de espaços para eventos",
        text: "Desconto de até 30% na contratação de espaços e serviços da Firjan, SESI e SENAI.",
      },
    ],
  },
];

export const DISCOUNTS: Discount[] = [
  { label: "PCMSO — manutenção do programa", value: "25% de desconto" },
  { label: "PCMSO — exames laboratoriais", value: "40% de desconto" },
  { label: "PCMSO — exames radiológicos", value: "30% de desconto" },
  { label: "Educação Básica (SESI) — Fundamental", value: "15% de desconto" },
  { label: "Educação Profissional (SENAI) — turmas patrocinadas", value: "até 25% de desconto" },
  { label: "Assessoria Tecnológica", value: "20% de desconto" },
  { label: "Pesquisa Salarial", value: "40% de desconto" },
  { label: "Aluguel de espaços para eventos", value: "até 30% de desconto" },
];
