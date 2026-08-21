import type { Course } from "@/types";

// Fonte: /cursos/ — catálogo "SIMPERJ-SENAI 1º semestre de 2021", explicitamente datado.
// Marcado como Arquivo/Histórico conforme docs/content-audit.md §1 (não é oferta vigente).
export const COURSES: Course[] = [
  { slug: "aperfeicoamento-encarregados-producao", name: "Aperfeiçoamento para Encarregados de Produção", category: "Produção", hours: 54, slots: 20, audience: "Profissionais que atuam como encarregado em produção no segmento industrial", prerequisite: "Experiência comprovada na função e idade mínima de 18 anos", status: "arquivo" },
  { slug: "appcc-industria", name: "APPCC Indústria — Análise de Perigos e Pontos Críticos de Controle", category: "Segurança Alimentar", hours: 32, slots: 6, audience: "Técnicos em alimentos e estudantes de áreas correlatas", prerequisite: "Ensino Médio completo e idade mínima de 14 anos", status: "arquivo" },
  { slug: "automacao-processos-mecanicos", name: "Automação de Processos Mecânicos", category: "Automação Industrial", hours: 120, slots: 6, audience: "Profissionais de manutenção de máquinas e equipamentos mecânicos", prerequisite: "Ensino Fundamental completo, conhecimentos básicos de elétrica, idade mínima de 14 anos", status: "arquivo" },
  { slug: "controladores-logicos-programaveis", name: "Controladores Lógicos Programáveis", category: "Automação Industrial", hours: 100, slots: 6, audience: "Profissionais de nível técnico ou superior de diversos segmentos industriais", prerequisite: "Ensino Médio completo e experiência em eletricidade/eletrônica", status: "arquivo" },
  { slug: "criacao-videos-midias-sociais", name: "Criação de Vídeos para Mídias Sociais", category: "Digital", hours: 100, slots: 4, audience: "Interessados no desenvolvimento de conteúdo em vídeo para redes sociais", prerequisite: "9º ano do Ensino Fundamental, smartphone com gravação de vídeo", status: "arquivo" },
  { slug: "custos-logisticos", name: "Custos Logísticos", category: "Logística", hours: 40, slots: 6, audience: "Profissionais de logística que precisam projetar custos de serviços logísticos", prerequisite: "Ensino Médio incompleto e conhecimentos básicos de logística", status: "arquivo" },
  { slug: "excel-ferramenta-banco-dados", name: "Excel como Ferramenta de Banco de Dados", category: "Digital", hours: 40, slots: 10, audience: "Profissionais que elaboram relatórios gerenciais de produção", prerequisite: "Ensino Médio completo e conhecimentos mínimos de MS Excel", status: "arquivo" },
  { slug: "gerenciamento-projetos", name: "Gerenciamento de Projetos", category: "Gestão", hours: 32, slots: 6, audience: "Profissionais interessados em gerenciamento e acompanhamento de projetos", prerequisite: "Ensino Fundamental completo e idade mínima de 14 anos", status: "arquivo" },
  { slug: "inversores-frequencia", name: "Inversores de Frequência", category: "Automação Industrial", hours: 60, slots: 6, audience: "Eletricistas, eletrotécnicos, técnicos em automação e engenheiros eletricistas", prerequisite: "Ensino Médio completo e conhecimentos de eletricidade", status: "arquivo" },
  { slug: "lean-manufacturing", name: "Lean Manufacturing", category: "Produção", hours: 40, slots: 16, audience: "Profissionais das indústrias interessados na otimização da produtividade", prerequisite: "Ensino Médio completo e idade mínima de 14 anos", status: "arquivo" },
  { slug: "ppcp", name: "Planejamento, Programação e Controle da Produção (PPCP)", category: "Produção", hours: 60, slots: 10, audience: "Profissionais que lidam com planejamento e controle da produção", prerequisite: "Ensino Fundamental completo e conhecimentos básicos em processos produtivos", status: "arquivo" },
  { slug: "marketing-digital-na-pratica", name: "Marketing Digital na Prática", category: "Digital", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
  { slug: "producao-grafica", name: "Produção Gráfica", category: "Produção", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
  { slug: "robotica-industrial-offline", name: "Programação Offline de Robótica Industrial", category: "Automação Industrial", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
  { slug: "projetos-eletricos-industriais", name: "Projetos Elétricos Industriais", category: "Automação Industrial", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
  { slug: "sistemas-supervisorios", name: "Sistemas Supervisórios", category: "Automação Industrial", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
  { slug: "tratamento-de-imagem", name: "Tratamento de Imagem", category: "Digital", hours: 0, slots: 0, audience: "A confirmar", prerequisite: "A confirmar", status: "lista-de-espera" },
];

export const COURSE_RULES: string[] = [
  "Acesso a todos os associados — vagas limitadas (100 vagas)",
  "Turmas mistas com candidatos encaminhados pelos vários sindicatos",
  "A indicação dos candidatos ocorre por ordem de inscrição",
  "Pré-requisitos exigidos de baixa renda e infraestrutura para acompanhamento das aulas",
  "Aulas de 2 horas, de segunda a quinta, das 18h às 20h ou das 20h às 22h",
  "Emissão de relatórios mensais",
  "Em caso de excesso de inscritos, o SIMPERJ adota o critério mais justo para seleção",
];
