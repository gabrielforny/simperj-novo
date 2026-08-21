import type { BenefitGroup, Discount } from "@/types";

// Fonte: /por-que-se-associar/ (texto corrido original) reagrupado por tema,
// conforme pedido do briefing (docs/content-audit.md §1).
// Nota: cliente pediu para retirar os percentuais de desconto anteriormente
// exibidos aqui (material desatualizado); descrições ficam qualitativas até
// que o SIMPERJ envie a tabela de condições atualizada.
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
        text: "Oportunidade de expor em feiras nacionais, em estande do sindicato, com condições facilitadas de pagamento.",
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
        text: "Condições especiais para turmas fechadas patrocinadas pela empresa e para alunos em turmas nas Unidades Operacionais do SENAI.",
      },
    ],
  },
  {
    id: "saude-e-seguranca",
    title: "Saúde e Segurança",
    items: [
      {
        title: "Programas de Saúde Ocupacional (SESI)",
        text: "Condições especiais no PCMSO, incluindo manutenção do programa, documento base e exames laboratoriais e radiológicos.",
      },
      {
        title: "PPRA (SESI)",
        text: "Isenção de documento base e condições especiais em avaliações de risco pontuais (ruído, iluminância, temperatura, gases e vapores).",
      },
      {
        title: "Odontologia (SESI)",
        text: "Condições especiais na contratação das Unidades Móveis Odontológicas.",
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
        text: "Condições especiais na contratação dos serviços de consultoria tecnológica.",
      },
      {
        title: "Pesquisa Salarial",
        text: "Condições especiais na contratação dos serviços de pesquisa salarial.",
      },
    ],
  },
  {
    id: "convenios-firjan",
    title: "Benefícios Firjan",
    items: [
      {
        title: "Educação Básica (SESI)",
        text: "Condições especiais no ensino fundamental e médio, com todo material didático oferecido pelo SESI.",
      },
      {
        title: "Certificados de Origem (FIRJAN)",
        text: "Condições especiais na emissão de certificados de origem.",
      },
      {
        title: "Esporte e Lazer — SESI Clube",
        text: "Convênio com condições especiais em folha de pagamento, inclusive para a categoria familiar.",
      },
      {
        title: "Aluguel de espaços para eventos",
        text: "Condições especiais na contratação de espaços e serviços da Firjan, SESI e SENAI.",
      },
    ],
  },
];

export const DISCOUNTS: Discount[] = [
  { label: "PCMSO — manutenção do programa" },
  { label: "PCMSO — exames laboratoriais e radiológicos" },
  { label: "Educação Básica (SESI)" },
  { label: "Educação Profissional (SENAI) — turmas patrocinadas" },
  { label: "Assessoria Tecnológica" },
  { label: "Pesquisa Salarial" },
  { label: "Aluguel de espaços para eventos" },
];
