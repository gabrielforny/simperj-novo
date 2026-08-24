import type { BoardMember, PastPresident, CouncilRepresentative } from "@/types";

// Fonte: planilha "Chapa atualizada.xlsx" enviada pela cliente em 2026-08-24.
// Cliente pediu para tirar as fotos da diretoria — nenhum membro tem `photo` aqui.
export const BOARD: BoardMember[] = [
  { slug: "ronaldo-castilho-thomaz", name: "Ronaldo Castilho Thomaz", role: "Presidente", company: "Bywer de Plásticos Ltda" },
  { slug: "claudio-patrick-vollers", name: "Claudio Patrick Vollers", role: "1º Vice-Presidente", company: "Bauen Indústrias Plásticas Eireli" },
  { slug: "andre-lima-de-castro", name: "André Lima de Castro", role: "2º Vice-Presidente", company: "ElC Produtos de Segurança Indústria e Comércio Ltda" },
  { slug: "franklin-soares-vieira", name: "Franklin Soares Vieira", role: "1º Tesoureiro", company: "Artmed Artigos de Medição Indústria e Comércio Ltda" },
  { slug: "francisco-piragine-junior", name: "Francisco Piragine Junior", role: "2º Tesoureiro", company: "UF Brindes Indústria e Comércio Ltda" },
  { slug: "marcio-racca-virginio-de-souza", name: "Marcio Racca Virginio de Souza", role: "1º Secretário", company: "Galpão 3 Desenvolvimento de Produtos Ltda ME" },
  { slug: "rafael-borges-sette", name: "Rafael Borges Sette", role: "2º Secretário", company: "Nova Lamitech Laminados Plásticos Ltda" },
];

// Fonte: planilha "Chapa atualizada.xlsx" enviada pela cliente em 2026-08-24.
// A planilha não diferencia cargos dentro do Conselho Fiscal Efetivo.
export const FISCAL_COUNCIL: BoardMember[] = [
  { slug: "antonio-guarino-de-souza", name: "Antonio Guarino de Souza", role: "Conselho Fiscal Efetivo", company: "Indústrias Plásticas Zarzur Ltda" },
  { slug: "jose-simoes-de-lima", name: "José Simões de Lima", role: "Conselho Fiscal Efetivo", company: "Jsimões Plásticos Indústria e Comércio Ltda" },
  { slug: "alexandre-alberto-nascimento-silva", name: "Alexandre Alberto Nascimento Silva", role: "Conselho Fiscal Efetivo", company: "Xtransformações Fábrica de Embalagens e Artigos Plásticos Ltda" },
];

// A planilha enviada em 2026-08-24 não trouxe suplentes do Conselho Fiscal.
// Removido até o cliente confirmar a lista atual (a versão anterior está
// desatualizada: Alexandre Alberto Nascimento Silva, que constava como
// suplente, agora é efetivo).
export const FISCAL_COUNCIL_ALTERNATES: BoardMember[] = [];

// Fonte: /quem-somos/ — "Gestões Anteriores".
export const PAST_PRESIDENTS: PastPresident[] = [
  { order: 1, name: "Max Acker", period: "11/04/1947 a 21/07/1954" },
  { order: 2, name: "Alexandre A. Direne", period: "21/07/1954 a 21/07/1964" },
  { order: 3, name: "Waldemar Bombonatti", period: "27/07/1964 a 07/07/1971" },
  { order: 4, name: "José Mário O. Ramos", period: "07/07/1971 a 03/08/1980" },
  { order: 5, name: "Ricardo E. Degenszejn", period: "03/08/1980 a 03/08/1983" },
  { order: 6, name: "Dov Kamenetz", period: "03/08/1983 a 05/08/1986" },
  { order: 7, name: "Gilberto Jaramillo", period: "05/08/1986 a 28/07/2003" },
  { order: 8, name: "José da Rocha Pinto", period: "28/07/2003 a 31/07/2019" },
  { order: 9, name: "Gladstone Santos Junior", period: "01/08/2019 a 31/03/2024" },
];

// Fonte: /por-que-se-associar/ — representação do SIMPERJ nos Conselhos Empresariais da Firjan.
export const COUNCIL_REPRESENTATIVES: CouncilRepresentative[] = [
  { council: "Conselho Empresarial de Assuntos Tributários", representative: "Gladstone Santos" },
  { council: "Conselho Empresarial de Energia Elétrica", representative: "Antonio Guarino de Sousa" },
  { council: "Conselho Empresarial de Economia", representative: "Ronaldo Castilho Thomaz" },
  { council: "Conselho Empresarial Trabalhista e Sindical", representative: "Franklin Vieira" },
  { council: "Conselho Empresarial de Meio Ambiente", representative: "Rafael Sette" },
  { council: "Conselho Empresarial de Relações Internacionais", representative: "Fernanda Brites" },
  { council: "Conselho Empresarial de Competitividade", representative: "Claudio Patrick Vollers" },
  { council: "Conselho Firjan de Segurança Pública", representative: "Francisco Piragine" },
];

// Fonte: 9 páginas "Conselho Empresarial de..." mescladas em /quem-somos (docs/content-audit.md §2).
export const COMMITTEES = [
  { slug: "assuntos-legislativos", title: "Conselho Empresarial de Assuntos Legislativos", text: "Composto por sindicatos e empresas de diversos setores industriais de todo o estado do Rio de Janeiro para discutir e posicionar-se sobre pautas legislativas de interesse da indústria." },
  { slug: "assuntos-tributarios", title: "Conselho Empresarial de Assuntos Tributários", text: "Criado para aglutinar as discussões do Sistema Firjan e auxiliar a diretoria nas deliberações sobre temas tributários que afetam o setor produtivo." },
  { slug: "energia-eletrica", title: "Conselho Empresarial de Energia Elétrica", text: "A energia elétrica é insumo fundamental e estratégico para o segmento produtivo — o conselho acompanha fornecimento, segurança, qualidade e custo da energia para a indústria." },
  { slug: "infraestrutura", title: "Conselho Empresarial de Infraestrutura", text: "Formado por associados do Sistema Firjan cujas atividades têm relação direta ou indireta com o setor de infraestrutura do estado." },
  { slug: "jovens-empresarios", title: "Conselho Empresarial de Jovens Empresários", text: "Tem como missão fortalecer a nova geração de empreendedores em prol do desenvolvimento sustentável da indústria fluminense." },
  { slug: "meio-ambiente", title: "Conselho Empresarial de Meio Ambiente", text: "Estabelece posicionamentos em relação às questões ligadas ao meio ambiente, além de assessorar e apoiar as empresas associadas." },
  { slug: "trabalhista-e-sindical", title: "Conselho Empresarial Trabalhista e Sindical", text: "Participa de forma efetiva de importantes discussões para o melhor desenvolvimento do ambiente trabalhista e das relações sindicais." },
  { slug: "comite-relacoes-trabalhistas", title: "Comitê de Relações Trabalhistas", text: "Sempre atento às negociações com os Sindicatos Profissionais da classe, viabilizando condições que possibilitem às associadas um convívio justo e equilibrado." },
];
