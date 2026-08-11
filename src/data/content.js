// Conteúdo extraído/adaptado de https://www.simperj.org.br/ para uso como placeholder de apresentação.

export const SITE = {
  name: "SIMPERJ",
  fullName: "Sindicato da Indústria de Material Plástico do Estado do Rio de Janeiro",
  founded: 1947,
  phone: "(21) 98772-7936",
  phoneFinance: "(21) 98766-3966",
  email: "contato@simperj.org.br",
  address: "Rua Santa Luzia, 776 — Salas 203, 204, 303 e 304, Centro, Rio de Janeiro/RJ",
  cep: "20030-042",
  social: {
    facebook: "https://www.facebook.com/simperj/",
    instagram: "https://www.instagram.com/simperj_oficial",
    linkedin: "https://br.linkedin.com/company/simperj",
  },
};

// Estrutura de navegação agrupada — evita lista longa de itens soltos no header.
// Itens com "children" viram dropdown; itens sem "children" são links diretos.
export const NAV_LINKS = [
  { to: "/", label: "Início" },
  {
    label: "Institucional",
    children: [
      { to: "/quem-somos", label: "Quem Somos" },
      { to: "/por-que-se-associar", label: "Por que se Associar" },
      { to: "/reunioes-diretoria", label: "Reuniões da Diretoria" },
    ],
  },
  {
    label: "Setor",
    children: [
      { to: "/eventos", label: "Eventos" },
      { to: "/cursos", label: "Cursos" },
      { to: "/sustentabilidade", label: "Sustentabilidade" },
    ],
  },
  {
    label: "Conteúdo",
    children: [
      { to: "/noticias", label: "Notícias" },
      { to: "/materiais", label: "Materiais para Download" },
    ],
  },
  { to: "/contato", label: "Contato" },
];

// Versão achatada, usada no footer e no menu mobile (que não precisa de dropdown).
export const NAV_LINKS_FLAT = NAV_LINKS.flatMap((item) => (item.children ? item.children : [item]));

export const LOGO = {
  color: "https://www.simperj.org.br/wp-content/uploads/2023/09/logotipo-simperj_cores-atual.png",
  white: "https://www.simperj.org.br/wp-content/uploads/2023/09/logo-branco-sem-fundo-simperj-scaled.png",
};

export const STATS = [
  { value: 1947, label: "Ano de fundação", suffix: "", prefix: "" },
  { value: 77, label: "Anos representando o setor", suffix: "+", prefix: "" },
  { value: 21, label: "Índice de reciclagem pós-consumo no Brasil (2024)", suffix: "%", prefix: "" },
  { value: 4, label: "Movimentados pelo setor de reciclagem no Brasil", suffix: " bi", prefix: "R$ " },
];

export const PARTNERS = [
  { name: "FIRJAN", logo: "https://www.simperj.org.br/wp-content/uploads/2025/09/firjan-novo.jpg" },
  { name: "SEBRAE", logo: "https://www.simperj.org.br/wp-content/uploads/2025/12/logo-sebrae.png" },
  { name: "ABIPLAST", logo: "https://www.simperj.org.br/wp-content/uploads/2025/09/logo-abiplast.jpg" },
  { name: "SENAI", logo: "https://www.simperj.org.br/wp-content/uploads/2025/10/senai-removebg-preview.png" },
  { name: "IEL", logo: "https://www.simperj.org.br/wp-content/uploads/2025/10/iel-removebg-preview.png" },
  { name: "Sistema Indústria", logo: "https://www.simperj.org.br/wp-content/uploads/2025/12/logo-sistema-industria.png" },
  { name: "Think Plastic", logo: "https://www.simperj.org.br/wp-content/uploads/2025/12/logo-think-plastic-x.png" },
  { name: "Jornal de Plásticos", logo: "https://www.simperj.org.br/wp-content/uploads/2025/09/logo-jornal-de-plasticos.jpg" },
];

export const TIMELINE = [
  {
    year: 1947,
    date: "11 de abril de 1947",
    title: "Fundação do Sindicato",
    text: "Aprovado por portaria ministerial como \"Sindicato da Indústria de Material Plástico do Rio de Janeiro\", nasce a entidade que passaria a representar os interesses da indústria plástica fluminense.",
  },
  {
    year: 1960,
    date: "23 de novembro de 1960",
    title: "Sindicato da Guanabara",
    text: "Com a criação do Estado da Guanabara, a entidade é renomeada para \"Sindicato da Indústria de Material Plástico do Estado da Guanabara\", acompanhando a reorganização político-administrativa do Rio.",
  },
  {
    year: 1976,
    date: "4 de março de 1976",
    title: "Base municipal",
    text: "Após a fusão dos estados da Guanabara e Rio de Janeiro, o sindicato passa a se chamar \"Sindicato da Indústria de Material Plástico do Município do Rio de Janeiro\", com base territorial redefinida.",
  },
  {
    year: 1983,
    date: "8 de março de 1983",
    title: "Base estadual e nome atual",
    text: "A base territorial é ampliada para todo o Estado do Rio de Janeiro e a entidade adota o nome que carrega até hoje: Sindicato da Indústria de Material Plástico do Estado do Rio de Janeiro — SIMPERJ.",
  },
  {
    year: 2025,
    date: "Gestão 2025–2028",
    title: "SIMPERJ hoje",
    text: "Sob nova diretoria, o SIMPERJ segue representando as indústrias de transformação de plástico do RJ, atuando em pautas de sustentabilidade, capacitação técnica e defesa institucional do setor.",
  },
];

export const BOARD = [
  {
    role: "Presidente",
    name: "Ronaldo Castilho Thomaz",
    company: "Bywer Indústria de Plásticos Ltda.",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/ronaldo-castilho-thomaz-presidente-bywer-industria-de-plasticos-ltda-scaled.jpg",
  },
  {
    role: "1º Vice-Presidente",
    name: "Claudio Patrick Vollers",
    company: "Bauen Indústrias Plásticas Eireli",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/claudio-patrick-vollers-1o-vice–presidente-bauen-industrias-plasticas-eireli-scaled.jpg",
  },
  {
    role: "2º Vice-Presidente",
    name: "André Lima de Castro",
    company: "",
    photo: null,
  },
  {
    role: "1º Tesoureiro",
    name: "Franklin Soares Vieira",
    company: "Artmed Artigos de Medição Ind. e Com. Ltda.",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/franklin-soares-vieira-1o-tesoureiro-artmed-artigos-de-medicao-ind.-e-com.-ltda-scaled.jpg",
  },
  {
    role: "2º Tesoureiro",
    name: "Francisco Piragine Junior",
    company: "UF Brindes Indústria e Comércio Ltda.",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/francisco-piragine-junior-2o-tesoureiro-uf-brindes-industria-e-comercio-ltda-epp-768x1024.jpg",
  },
  {
    role: "1º Secretário",
    name: "Fernanda Coelho Brites Pinto",
    company: "FL Ind. e Com. de Produtos Descartáveis Ltda.",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/fernanda-coelho-brites-pinto-1o-secretaria-fl-ind.-e-com.-de-produtos-descartaveis-ltda-scaled.jpg",
  },
  {
    role: "2º Secretário",
    name: "Marcio Racca Virginio de Souza",
    company: "Galpão 3 Desenvolvimento de Produtos Ltda.",
    photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/marcio-racca-virginio-de-souza-2o-secretario-galpao-3-desenvolvimento-de-produtos-ltda-me-768x1024.jpg",
  },
];

export const FISCAL_COUNCIL = [
  { name: "Antonio Guarino de Souza", photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/antonio-guarino-de-souza-conselho-fiscal-efetivo-industrias-plasticas-zarzur-ltda-scaled.jpg" },
  { name: "Rafael Borges Sette", photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/rafael-borges-sette-conselho-fiscal-efetivo-nova-lamitech-laminados-plasticos-eireli-scaled.jpg" },
  { name: "Fernanda Coelho Brites Pinto", photo: "https://www.simperj.org.br/wp-content/uploads/2025/10/fernanda-coelho-brites-pinto-1o-secretaria-fl-ind.-e-com.-de-produtos-descartaveis-ltda-scaled.jpg" },
];

export const PAST_PRESIDENTS = [
  { period: "1947", name: "Max Acker" },
  { period: "...", name: "Sucessão de presidentes ao longo de 77 anos de história" },
  { period: "até 2024", name: "Gladstone Santos Junior" },
];

export const BENEFITS = [
  {
    title: "Participação em feiras",
    text: "Oportunidade de expor em feiras nacionais no estande do sindicato, com baixo custo e pagamento parcelado.",
  },
  {
    title: "Divulgação gratuita",
    text: "Listagem da sua empresa no site institucional do SIMPERJ, sem custo adicional.",
  },
  {
    title: "Mediação de conflitos trabalhistas",
    text: "Parceria intersindical com a Firjan para conciliação em conflitos e negociações coletivas.",
  },
  {
    title: "Declarações de fabricação exclusiva",
    text: "Emissão de documentação oficial para participação em licitações e concorrências públicas.",
  },
  {
    title: "Espaço para eventos",
    text: "Acesso ao auditório do sindicato para reuniões corporativas, treinamentos e eventos.",
  },
  {
    title: "Consultoria empresarial Firjan",
    text: "Assessoria jurídica, ambiental, de comércio exterior e avaliações econômicas via sistema Firjan.",
  },
  {
    title: "Descontos SESI / SENAI / Firjan",
    text: "Reduções em saúde ocupacional, odontologia, educação e capacitação profissional.",
  },
  {
    title: "Parcerias educacionais",
    text: "Convênios com instituições de ensino do fundamental à pós-graduação para associados e colaboradores.",
  },
  {
    title: "Convênios adicionais",
    text: "Descontos em óticas, hotelaria e hospedagem para associados e suas equipes.",
  },
  {
    title: "Benefícios plenos Firjan",
    text: "Acesso integral aos acordos e descontos de serviços em nível de federação industrial.",
  },
];

export const DISCOUNTS = [
  { label: "PCMSO — exames e manutenção", value: "25% a 40% de desconto" },
  { label: "Educação básica", value: "5% a 15% de desconto" },
  { label: "Educação profissional (turmas patrocinadas)", value: "até 25% de desconto" },
  { label: "Consultoria tecnológica", value: "20% de desconto" },
  { label: "Locação de espaços para eventos", value: "até 30% de desconto" },
];

export const MEETINGS = [
  { month: "Fevereiro", day: "12", weekday: "Quarta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Março", day: "19", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Abril", day: "16", weekday: "Quinta-feira", time: "15h00", type: "Ordinária + Aniversário 79 anos", local: "Sede SIMPERJ" },
  { month: "Maio", day: "14", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Junho", day: "11", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Agosto", day: "13", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Setembro", day: "17", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Outubro", day: "15", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Novembro", day: "12", weekday: "Quinta-feira", time: "15h00", type: "Ordinária", local: "Sede SIMPERJ" },
  { month: "Dezembro", day: "10", weekday: "Quinta-feira", time: "15h00", type: "Ordinária + Confraternização", local: "Sede SIMPERJ" },
];

export const EVENTS = {
  feirasNacionais: [
    { name: "Feira de Alimentos e Bebidas", segment: "Embalagens plásticas", status: "Em agenda" },
    { name: "Feira de Cosméticos", segment: "Embalagens plásticas", status: "Em agenda" },
    { name: "Feira de Saúde", segment: "Materiais e dispositivos plásticos", status: "Em agenda" },
  ],
  feirasInternacionais: [
    { name: "Agenda internacional em atualização", segment: "Novidades em breve", status: "Em breve" },
  ],
  online: [
    { name: "Webinar Setorial SIMPERJ", segment: "Painel com especialistas do setor", status: "Programado" },
    { name: "Live Sustentabilidade no Plástico", segment: "Transmissão via redes sociais", status: "Programado" },
  ],
};

export const COURSES = [
  { name: "Aperfeiçoamento para Encarregados de Produção", category: "Produção", hours: 54, slots: 20, status: "Aberto" },
  { name: "APPCC Indústria", category: "Segurança Alimentar", hours: 32, slots: 6, status: "Aberto" },
  { name: "Automação de Processos Mecânicos", category: "Automação Industrial", hours: 120, slots: 6, status: "Aberto" },
  { name: "Controladores Lógicos Programáveis", category: "Automação Industrial", hours: 100, slots: 6, status: "Aberto" },
  { name: "Criação de Vídeos para Mídias Sociais", category: "Digital", hours: 100, slots: 4, status: "Aberto" },
  { name: "Custos Logísticos", category: "Logística", hours: 40, slots: 6, status: "Aberto" },
  { name: "Excel como Ferramenta de Banco de Dados", category: "Digital", hours: 40, slots: 10, status: "Aberto" },
  { name: "Gerenciamento de Projetos", category: "Gestão", hours: 32, slots: 6, status: "Aberto" },
  { name: "Inversores de Frequência", category: "Automação Industrial", hours: 60, slots: 6, status: "Aberto" },
  { name: "Lean Manufacturing", category: "Produção", hours: 40, slots: 16, status: "Aberto" },
  { name: "Planejamento, Programação e Controle da Produção (PPCP)", category: "Produção", hours: 60, slots: 10, status: "Aberto" },
  { name: "Marketing Digital na Prática", category: "Digital", hours: 40, slots: 12, status: "Lista de espera" },
  { name: "Produção Gráfica", category: "Produção", hours: 40, slots: 10, status: "Lista de espera" },
  { name: "Programação Offline de Robótica Industrial", category: "Automação Industrial", hours: 80, slots: 8, status: "Lista de espera" },
  { name: "Projetos Elétricos Industriais", category: "Automação Industrial", hours: 60, slots: 8, status: "Lista de espera" },
  { name: "Sistemas Supervisórios", category: "Automação Industrial", hours: 60, slots: 6, status: "Lista de espera" },
  { name: "Tratamento de Imagem", category: "Digital", hours: 32, slots: 10, status: "Lista de espera" },
];

export const CAUSES = [
  { title: "Acessibilidade", text: "Financiamento de cadeiras de rodas para instituições de saúde parceiras.", image: "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/semente1.jpg" },
  { title: "Combate à Fome", text: "Fornecimento de alimentos e cestas básicas para famílias em vulnerabilidade.", image: "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/semente2.jpg" },
  { title: "Educação", text: "Financiamento de materiais escolares conforme demanda das instituições apoiadas.", image: "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/semente3.jpg" },
  { title: "Saúde da Mulher", text: "Custeio de mamografias para pacientes de baixa renda atendidas pelo SUS.", image: "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/semente4.jpg" },
  { title: "Bem-estar Animal", text: "Financiamento de tratamentos veterinários em abrigos parceiros.", image: "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/semente5.jpg" },
];

export const SUSTAINABILITY_YOUTUBE_CHANNEL_ID = "UCk9YAO6yZcppxjTgt5MJbcg";

export const NEWS = [
  {
    slug: "dezembro-laranja-2025",
    title: "Dezembro Laranja: mês de prevenção ao câncer de pele",
    date: "2025-12-05",
    excerpt: "Campanha dedicada à prevenção e conscientização sobre o câncer de pele, com ênfase em proteção solar para trabalhadores da indústria.",
    category: "Saúde",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/12/dezembro-laranja.jpg",
  },
  {
    slug: "forum-abiplast-2025",
    title: "SIMPERJ participa do Fórum \"Plásticos — Avanços e Perspectivas para o Brasil\"",
    date: "2025-12-02",
    excerpt: "Presidente Ronaldo Castilho Thomaz representa o sindicato em fórum da ABIPLAST em Brasília sobre inovação e sustentabilidade no setor.",
    category: "Institucional",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/12/forum-plasticos.jpg",
  },
  {
    slug: "reciclagem-21-porcento-2025",
    title: "Brasil recicla 21% dos plásticos pós-consumo em 2024 e movimenta R$ 4 bilhões",
    date: "2025-11-18",
    excerpt: "Índice de Reciclagem de Plásticos Pós-Consumo mapeia o desempenho da cadeia de reciclagem e aponta avanços do setor.",
    category: "Economia Circular",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/11/brasil-recicla-21-dos-plasticos-pos-consumo-em-2024-e-movimenta-r-4-bilhoes.jpg",
  },
  {
    slug: "reuso-de-agua-nas-industrias",
    title: "Reuso de água nas indústrias move máquinas e preserva recursos",
    date: "2025-11-05",
    excerpt: "Iniciativas de reuso hídrico ganham espaço nas linhas de produção do setor plástico, reduzindo custos e impacto ambiental.",
    category: "Sustentabilidade",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/11/reuso-de-agua-nas-industrias-move-maquinas-e-preserva-recursos.jpg",
  },
  {
    slug: "energia-renovavel-na-industria",
    title: "Cresce o uso de energia de fontes renováveis na indústria",
    date: "2025-11-01",
    excerpt: "Indústrias do setor plástico ampliam investimentos em fontes renováveis para reduzir custos operacionais e pegada de carbono.",
    category: "Sustentabilidade",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/11/cresce-o-uso-de-energia-de-fontes-renovaveis-na-industria.jpg",
  },
  {
    slug: "reciclagem-quimica-china",
    title: "Inovação na China reforça o papel do plástico e o poder da reciclagem química",
    date: "2025-10-20",
    excerpt: "Avanços tecnológicos chineses em reciclagem química apontam novos caminhos para a cadeia produtiva global do plástico.",
    category: "Inovação",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/10/inovacao-na-china-reforca-o-papel-do-plastico-e-o-poder-da-reciclagem-quimica.jpg",
  },
];

// Ações e participações recentes do sindicato — usado nos destaques da Home.
export const HIGHLIGHTS_RECENT = [
  {
    title: "SIMPERJ na ExpoFood 2026",
    text: "Sindicato marca presença em estande próprio na feira, conectando associados a novos mercados de embalagens plásticas.",
    image: "https://www.simperj.org.br/wp-content/uploads/2026/07/simperj-na-expofood-2026-01.png",
    tag: "Feira setorial",
  },
  {
    title: "Fórum Plásticos — Avanços e Perspectivas para o Brasil",
    text: "Presidente Ronaldo Castilho Thomaz representa o SIMPERJ em fórum da ABIPLAST em Brasília sobre inovação e sustentabilidade.",
    image: "https://www.simperj.org.br/wp-content/uploads/2025/12/forum-plasticos.jpg",
    tag: "Institucional",
  },
];

export const MATERIALS = [
  { category: "Relatórios Setoriais", title: "Panorama da Indústria de Transformação Plástica no RJ", desc: "Levantamento anual de produção, emprego e faturamento do setor no estado." },
  { category: "Relatórios Setoriais", title: "Índice de Reciclagem de Plásticos Pós-Consumo 2024", desc: "Dados nacionais de reciclagem, movimentação financeira e desempenho da cadeia." },
  { category: "Economia Circular", title: "Guia de Economia Circular para a Indústria do Plástico", desc: "Diretrizes práticas para redução, reuso e reciclagem em processos industriais." },
  { category: "Economia Circular", title: "Cartilha Sementes do Plástico", desc: "Como participar do programa de logística reversa e impacto social do SIMPERJ." },
  { category: "Análises Específicas", title: "Impacto Tributário na Cadeia Plástica Fluminense", desc: "Análise técnica sobre tributação e competitividade da indústria no RJ." },
  { category: "Guias Práticos", title: "Guia de Compliance Trabalhista para Indústrias", desc: "Orientações práticas sobre legislação trabalhista aplicada ao setor industrial." },
  { category: "Guias Práticos", title: "Manual de Segurança em Processos de Transformação Plástica", desc: "Boas práticas de segurança do trabalho para chão de fábrica." },
  { category: "Inovação", title: "Tendências de Automação para PMEs do Plástico", desc: "Panorama de tecnologias de automação acessíveis para pequenas e médias indústrias." },
];
