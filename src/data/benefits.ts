import type { BenefitGroup, Discount } from "@/types";

// Fonte: "Por que se associar.docx" enviado pela cliente em 2026-08-26, substituindo
// o texto corrido anterior (que tinha informações desatualizadas, segundo a cliente).
export const BENEFIT_GROUPS: BenefitGroup[] = [
  {
    id: "representatividade",
    title: "Representatividade",
    items: [
      {
        title: "Representação institucional",
        text: "O SIMPERJ é entidade filiada à FIRJAN e à ABIPLAST, com as quais mantém os mais estreitos laços de mútua cooperação e apoio — o que tem sido de grande valia na defesa dos interesses das associadas, presentes na maioria dos Conselhos Empresariais da Firjan.",
      },
      {
        title: "Núcleo Intersindical de Conciliação",
        text: "Em parceria com a Firjan, tem por objetivo exclusivo conciliar conflitos individuais do trabalho e contribuir para o aprimoramento e fortalecimento das relações de trabalho, estimulando a negociação coletiva.",
      },
    ],
  },
  {
    id: "educacao",
    title: "Educação e Capacitação",
    items: [
      {
        title: "Cursos de aperfeiçoamento profissional gratuito",
        text: "Convênio SESI / SENAC, disponível para as empresas associadas.",
      },
      {
        title: "Cursos SEBRAE",
        text: "Acesso à programação de capacitação e consultoria do SEBRAE.",
      },
      {
        title: "Convênio UVA — Universidade Veiga de Almeida",
        text: "Graduação e pós-graduação com desconto de até 80% para colaboradores das empresas associadas.",
      },
      {
        title: "Convênios com instituições de ensino",
        text: "Ensino fundamental, médio, graduação, pós-graduação e cursos técnicos.",
      },
      {
        title: "Educação Básica (SESI)",
        text: "Ensino fundamental e médio, com todo o material didático oferecido pelo SESI.",
      },
      {
        title: "Educação Profissional (SENAI)",
        text: "Descontos para turmas fechadas patrocinadas pela empresa (ou grupo de empresas) e para alunos em turmas realizadas nas Unidades Operacionais do SENAI, também patrocinadas pela empresa.",
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
        title: "Espaços para eventos",
        text: "Contratação de espaços e serviços da Firjan, SESI e SENAI para eventos.",
      },
    ],
  },
  {
    id: "saude-e-seguranca",
    title: "Saúde e Segurança",
    items: [
      {
        title: "Programas de Saúde Ocupacional (SESI) — PCMSO",
        text: "Gratuito para empresas com até 99 funcionários, com descontos para exames complementares.",
      },
      {
        title: "PPRA (SESI)",
        text: "Isenção de documento base (atualmente cobrado por porte e número de empregados) e condições especiais em avaliações de risco — ruído (pontual), iluminância, temperatura, gases e vapores orgânicos — e outras avaliações de risco.",
      },
      {
        title: "PGR (SESI)",
        text: "Gratuito para empresas com até 99 funcionários, com descontos para exames complementares.",
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
        title: "Certificados de Origem (FIRJAN)",
        text: "Condições especiais na emissão de certificados de origem.",
      },
      {
        title: "Esporte e Lazer — SESI Clube",
        text: "Convênio com desconto em folha de pagamento para pessoa jurídica.",
      },
    ],
  },
];

export const DISCOUNTS: Discount[] = [
  { label: "PCMSO — gratuito para empresas com até 99 funcionários" },
  { label: "PPRA — isenção de documento base e avaliações de risco" },
  { label: "PGR — gratuito para empresas com até 99 funcionários" },
  { label: "Educação Básica (SESI) — Fundamental e Médio" },
  { label: "Educação Profissional (SENAI) — turmas patrocinadas" },
  { label: "Convênio UVA — graduação e pós com até 80% de desconto" },
  { label: "Assessoria Tecnológica" },
  { label: "Pesquisa Salarial" },
  { label: "Espaços para eventos (Firjan, SESI, SENAI)" },
];
