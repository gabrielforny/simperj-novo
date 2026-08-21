# Auditoria de Conteúdo — simperj.org.br

Levantamento feito em 2026-08-21 via `sitemap_index.xml` (todos os sub-sitemaps) e pela API REST nativa do WordPress (`/wp-json/wp/v2/*`), que devolve título, conteúdo renderizado e data de cada página/post — método mais confiável que raspar HTML, e que revelou 3 bugs de conteúdo do site atual (ver §6).

**Inventário bruto do WordPress:** 60 `pages`, 47 `posts`, 2 `acoes-do-simperj`, 2 `destaques`, 1 `feiras-e-eventos` = **112 URLs publicadas**, todas em `status: publish` (nenhum rascunho encontrado).

Colunas da tabela: **URL atual → Título → Tipo → Conteúdo relevante → Imagens → Downloads/PDFs → CTA → Migrar? → URL nova → Observações**

---

## 1. Páginas institucionais nucleares (prioridade máxima)

| URL atual | Título | Tipo | Conteúdo relevante | Imagens | PDFs | CTA | Migrar? | URL nova | Observações |
|---|---|---|---|---|---|---|---|---|---|
| `/` (=`/home/`, id 4506) | SIMPERJ | Home | Missão institucional, 10 vantagens de associado, hero "Fortalecendo a indústria do plástico...", ações recentes (Expofood 2026), próximos eventos, 3 notícias, 4 destaques (campanhas de saúde), 4 conteúdos técnicos, parceiros, form contato, contato direto | 13 (logos parceiros + capas de notícia) | 0 diretos | "Quero me associar", "Falar com sindicato" | **KEEP** | `/` | Reescrever copy do hero; hoje repete o texto institucional 2x (bug Elementor) |
| `/quem-somos/` (id 92) | Quem somos | Institucional | Missão, timeline 1947/1960/1976/1983 (textos legais completos), diretoria efetiva 2025-2028 (7 pessoas c/ empresa), conselho fiscal (3), suplentes (dados inconsistentes — ver §6), 9 gestões anteriores com datas exatas, parceiros | 21 (7 fotos de diretores + logos + placeholder Elementor) | 0 | "Solicite o estatuto" | **KEEP** | `/quem-somos` | Fonte da verdade para Diretoria/História; suplentes precisam validação com o cliente antes de publicar (§6) |
| `/por-que-se-associar/` (id 208) | Por que se associar? | Institucional | 10 benefícios detalhados em texto corrido, incl. lista completa de descontos SESI/SENAI/FIRJAN e mapa de "Conselhos Firjan com representação do SIMPERJ" (7 conselhos nominados) | 0 | 0 | implícito (nenhum CTA no fim) | **KEEP / UPDATE** | `/por-que-se-associar` | Reestruturar em grupos (Representatividade / Negócios / Serviços / Educação / Saúde e Segurança / Assessoria / Convênios); hoje é texto corrido sem hierarquia; adicionar CTA final |
| `/associe-se/` (id 991) | Associe-se | Conversão | Instruções de associação: ficha + contrato social + RG/CPF, 2 e-mails de envio | 0 | 1 — `ficha-cadastral-simperj-2024.pdf` (host antigo, ver §7) | "Ficha registro de associados" | **KEEP / UPDATE** | `/associe-se` | Transformar em fluxo de 4 passos; validar/re-hospedar o PDF (está em `177.136.241.79`, servidor de staging) |
| `/convenio/` (id 3401) | Convênio | Institucional | Só texto introdutório (2 parágrafos); **não há lista de convênios renderizada na API** — provavelmente widget dinâmico do Elementor não capturado, ou lista nunca populada | 0 | 0 | nenhum | **KEEP / UPDATE** | `/convenios` | Confirmar com cliente se existe lista de convênios em algum lugar (painel Elementor?); caso não exista, página é só uma "capa" — arquitetura de dados já preparada (§ Fase 14 do briefing) |
| `/cursos/` (id 116) | Cursos | Institucional | "Cursos à Distância **em 2021**" — 17 cursos SIMPERJ-SENAI com carga horária/vagas/pré-requisitos, regras de inscrição | 0 | 0 | "Inscreva-se aqui" | **KEEP como arquivo** | `/cursos` | Conteúdo datado de 2021, citado explicitamente como "1º semestre de 2021". Migrar marcado como **Arquivo/Histórico**; estrutura de dados pronta para cursos atuais |
| `/acordos-coletivos/` (id 2779) | Acordos Coletivos | Legal | Tabela real por 5 regionais (RJ, Niterói, São Gonçalo, Petrópolis, Nova Friburgo) com município, data-base, última CCT, sindicato laboral, CNPJ, endereço, telefone | 0 | 0 | nenhum | **KEEP** | `/acordos-coletivos` | Dado factual denso — vira tabela responsiva (desktop: tabela; mobile: cards), exatamente como pedido no briefing |
| `/legislacao/` (id 3057) | Legislação | Institucional | **Vazia** (0 caracteres de conteúdo) — só título | 0 | 0 | — | **MERGE** | `/legislacao` | Sem conteúdo próprio; mesclar como hub que agrega `orientacoes-juridicas`, `lei-de-incentivo-a-reciclagem`, `calendario-de-obrigacoes-ambientais`, `fiscalizacao-e-cotas-de-aprendizes-e-de-pcds` |
| `/reunioes-da-diretoria/` (id 2854) | Reuniões da Diretoria | Institucional | Calendário recorrente simples (mês/dia/horário) sem ano explícito | 0 | 0 | — | **KEEP** | `/reunioes-diretoria` | É a versão "limpa" do calendário — ver §6 sobre conflito com outras 2 páginas de reunião |
| `/pdfs/` (id 5280) | PDF's | Biblioteca | Hub com 17 documentos técnicos (relatórios ABIPLAST/FIRJAN/Braskem/ETENE), cada um em página de anexo própria | 0 (só ícones) | **17 PDFs reais** (mapeados em `assets-audit.md`) | "Baixar PDF" por item | **KEEP** | `/materiais` | As 17 URLs atuais são páginas de *anexo* do WP (`/slug-do-pdf/`), não o hub. Precisam de redirect 301 individual → `/materiais#slug` ou anchor direto no PDF |
| `/contato/` (id 135) | Contato | Institucional | 2 WhatsApp nomeados (Financeiro/Andréa, Administrativo/Julianna) + formulário Contact Form 7 (não renderiza no JSON, é shortcode `[contact-form-7]`) | 0 | 0 | Formulário | **KEEP / UPDATE** | `/contato` | Formulário legado é CF7 sem os campos visíveis na API; reconstruir com campos do briefing (Nome/Empresa/Email/Telefone/Assunto/Mensagem) |
| `/eventos/` (id 125) | Eventos | Institucional | 3 categorias (Feiras Nacionais/Internacionais/Online) + **calendário "Reuniões do SIMPERJ em 2019" duplicado 2x com dados diferentes** | 0 | 0 | — | **KEEP / UPDATE** | `/eventos` | Bug real do site atual — ver §6. Página mistura "eventos do setor" com "reuniões internas", que já têm páginas próprias |
| `/sustentabilidade/` (id 3095) | Compromisso Sustentável | Editorial | Texto institucional ESG + Projeto Sementes do Plástico completo, 5 causas sociais **com projetos parceiros nomeados** (Rodando com Tampinhas, INCA, Recicla Nação/Flamengo, Tampinha Campeã/Tijuca Tênis Clube, Tampa Fome/Casa Shopping, Acredite na Tampinha, Rio Eco Pets, Papa Ilha) | 8 (5 "sementeX.jpg" + capa + mini-manual + tipos-de-plástico) | 1 (`indices-reciclagem-2020-picplast...pdf`) | link para escolher causa (não é link real, é texto) | **KEEP** | `/sustentabilidade` | Tem **2 vídeos MP4 embutidos** (não YouTube) — `reciclagem-sementes-do-plastico-yt.mp4` e `tranformacoes-yt.mp4`, hospedados no host de staging antigo |

## 2. Governança / conselhos (subpáginas repetitivas — candidatas a MERGE)

7 páginas praticamente idênticas em estrutura (~2017-10-19), cada uma descrevendo um Conselho Empresarial da FIRJAN em 1 parágrafo:

| Slug | Título | Migrar? | Observação |
|---|---|---|---|
| `conselho-empresarial-de-assuntos-legislativos` | Conselho Empresarial de Assuntos Legislativos | **MERGE** | |
| `conselho-empresarial-de-assuntos-tributarios` | Conselho Empresarial de Assuntos Tributários | **MERGE** | |
| `conselho-empresarial-de-energia-eletrica` | Conselho Empresarial de Energia Elétrica | **MERGE** | |
| `conselho-empresarial-de-infraestrutura` | Conselho Empresarial de Infraestrutura | **MERGE** | |
| `conselho-empresarial-de-jovens-empresarios` | Conselho Empresarial de Jovens Empresários | **MERGE** | |
| `conselho-empresarial-de-meio-ambiente` | Conselho Empresarial de Meio Ambiente | **MERGE** | |
| `conselho-empresarial-trabalhista-e-sindical` | Conselho Empresarial Trabalhista e Sindical | **MERGE** | |
| `comite-de-relacoes-trabalhistas` | Comitê de Relações Trabalhistas | **MERGE** | |
| `atas-de-reunioes` | Atas de Reuniões | **MERGE** | Só lista os 7 conselhos acima, sem atas de fato anexadas |

**Proposta:** consolidar as 9 em **uma seção "Conselhos e Comitês" dentro de `/quem-somos`** (accordion), já que a lista de representantes por conselho já existe em `/por-que-se-associar/` (§1). Preserva o conteúdo, elimina navegação fragmentada em 9 URLs de baixo tráfego.

## 3. Páginas de calendário de eventos por ano (obsoletas — ARCHIVE)

Site atual cria 1 página nova por ano para cada tipo de feira — típico de manutenção manual no Elementor. Nenhuma delas é o ano corrente.

| Slug | Título | Data | Migrar? | Observação |
|---|---|---|---|---|
| `eventos-nacionais-em-2022` | Eventos Nacionais em 2022 | 2021-07 | **ARCHIVE** | Substituído por `/eventos` dinâmico |
| `eventos-internacionais-em-2021` | Eventos Internacionais em 2021 | 2021-04 | **ARCHIVE** | idem |
| `eventos-nacionais-em-2021` | Eventos Nacionais em 2021 | 2021-04 | **ARCHIVE** | Conteúdo real: "Estamos atualizando... aguarde!" — nunca foi preenchida |
| `eventos-online-em-2021` | Eventos Online em 2021 | 2021-04 | **ARCHIVE** | |
| `eventos-online-em-2020` | Eventos Online em 2020 | 2020-06 | **ARCHIVE** | |
| `feiras-internacionais-em-2020` | Feiras Internacionais em 2020 | 2019-12 | **ARCHIVE** | |
| `feiras-nacionais-em-2020` | Feiras Nacionais em 2020 | 2019-12 | **ARCHIVE** | |
| `feiras-nacionais-em-2020-cosmeticos` | Feiras Nacionais em 2020: Cosméticos | 2019-10 | **ARCHIVE** | |
| `reunioes-gerais` | Reuniões Gerais | 2021-03 (conteúdo "para 2024") | **ARCHIVE** | Calendário extenso de reuniões **FIRJAN/CIRJ/SESI/SENAI** (não é do SIMPERJ) — 3º sistema de calendário conflitante, ver §6 |

**Proposta:** essas 9 páginas viram a **estrutura de dados `events.ts`** (histórico) e o `/eventos` novo passa a ser dinâmico por data, sem precisar de página nova a cada ano. Preservar slugs antigos apenas como 301 → `/eventos`.

## 4. Legal / compliance

| Slug | Título | Migrar? | URL nova | Observação |
|---|---|---|---|---|
| `orientacoes-juridicas` | Orientações Jurídicas | **KEEP** | `/legislacao` (seção) | Hub com 4 links (2 têm resumo, 2 são só título) |
| `lei-de-incentivo-a-reciclagem` | Lei de Incentivo à Reciclagem | **KEEP** | `/legislacao` (seção) | Texto da Lei 9.376/2021 |
| `calendario-de-obrigacoes-ambientais` | Calendário de Obrigações Ambientais | **KEEP** | `/legislacao` (seção) | |
| `fiscalizacao-e-cotas-de-aprendizes-e-de-pcds` | Fiscalização e cotas de aprendizes e de PCD's | **KEEP** | `/legislacao` (seção) | filha de `orientacoes-juridicas` no WP (`parent=3333`) |
| `politica-de-privacidade` | Política de Privacidade | **KEEP** | `/politica-de-privacidade` | Conteúdo real e preenchido |
| `termos` | "Política de privacidade" (título duplicado) | **REMOVE** | 301 → `/politica-de-privacidade` | Página é o **placeholder padrão do WordPress nunca editado** — texto literal "Texto sugerido: O endereço do nosso site é: `https://gd5.com.br/base/landingpage`..." (URL de outro cliente da agência). Bug de conteúdo real, ver §6 |

## 5. Notícias / posts institucionais recentes (2020–2025) — `KEEP`

Estes são o conteúdo editorial legítimo e atual do sindicato — viram `/noticias/:slug`.

| Slug | Título | Data | Categoria proposta |
|---|---|---|---|
| `dezembro-laranja-mes-de-prevencao-ao-cancer-de-pele` | Dezembro Laranja: mês de prevenção ao câncer de pele | 2025-12-01 | Saúde |
| `simperj-participa-do-forum-plasticos-avancos-e-perspectivas-para-o-brasil` | SIMPERJ participa do Fórum "Plásticos – Avanços e Perspectivas para o Brasil | 2025-12-01 | Institucional |
| `brasil-recicla-21-dos-plasticos-pos-consumo-em-2024-e-movimenta-r-4-bilhoes` | Brasil recicla 21% dos plásticos pós-consumo em 2024... | 2025-11-11 | Economia Circular |
| `reuso-de-agua-nas-industrias-move-maquinas-e-preserva-recursos` | Reúso de água nas indústrias move máquinas e preserva recursos | 2025-11-10 | Sustentabilidade |
| `grupo-force-transforma-havaianas-em-pneus-sustentaveis` | Grupo Force transforma Havaianas em pneus sustentáveis | 2025-11-10 | Inovação |
| `cresce-o-uso-de-energia-de-fontes-renovaveis-na-industria` | Cresce o uso de energia de fontes renováveis na indústria | 2025-11-10 | Sustentabilidade |
| `impacto-social-do-plastico` | O impacto social do plástico na redução da pobreza... | 2025-10-24 | Institucional |
| `reciclagem-quimica-na-china-impulsiona-economia-circular` | Inovação na China reforça o papel do plástico... | 2025-10-24 | Inovação |
| `a-importancia-do-plastico-reciclavel-na-industria-de-eletroeletronicos` | A importância do plástico reciclável na indústria de eletroeletrônicos | 2025-10-24 | Inovação |
| `sacola-de-plastico-x-sacola-de-papel` | Sacola de plástico X Sacola de papel | 2022-09-18 | Sustentabilidade |
| `circularidade-do-plastico` | Circularidade do Plástico | 2022-09-18 | Economia Circular |
| `o-plastico-nao-e-o-vilao-do-meio-ambiente` | O Plástico não é o vilão do meio ambiente | 2022-04-12 | Institucional |
| `posse-da-nova-diretoria-do-simperj-sera-na-casa-firjan` | Posse da nova diretoria do SIMPERJ será na Casa Firjan | 2019-09-18 | Institucional (histórico) |
| `projeto-sementes-do-plastico-indicado-a-premio-melhores-praticas-sindicais` | Projeto Sementes do Plástico indicado a Prêmio... | 2019-09-17 | Sustentabilidade (histórico) |
| `simperj-feira-k` | 1ª Missão Internacional do SIMPERJ na Feira K, Alemanha | 2019-08-13 | Eventos (histórico) |
| `eleicoes-do-simperj-2019-2022` | Eleições do SIMPERJ 2019 – 2022 | 2019-05-07 | Institucional (histórico) |
| `rodando-com-tampinhas-no-rjtv` | Rodando com Tampinhas no RJTV | 2019-05-07 | Sustentabilidade (histórico) |
| `projeto-sementes-do-plastico-e-rodando-com-tampinhas-no-jornal-o-globo` | Sementes do Plástico e Rodando com Tampinhas no Jornal O Globo | 2019-04-26 | Sustentabilidade (histórico) |
| `caravana-simperj-para-a-ecomondo-brasil` | Caravana SIMPERJ para a ECOMONDO Brasil | 2019-04-17 | Eventos (histórico) |
| `exportacao-e-internacionalizacao-abrem-oportunidades-de-mercados-para-empresas-de-transformados-plasticos` | Exportação e Internacionalização abrem oportunidades... | 2019-12-10 | Institucional (histórico) |
| `simperj-na-feira-super-rio-expofood-2019` | Simperj na feira Super Rio Expofood 2019 | 2019-03-15 | Eventos (histórico) |
| `industria-do-plastico-rio-janeiro` | A força da indústria do plástico no RJ | 2019-01-03 | Institucional |

## 6. Blog genérico de sustentabilidade / lifestyle (2017–2020) — `KEEP conforme decisão do cliente`

**Decisão registrada:** o cliente optou por **migrar como está** (mantendo URLs de imagens originais, incl. as hospedadas em servidor de staging de terceiros e bancos de imagem externos). Documentado aqui para rastreabilidade — ver risco em §7.

25 posts (`faca-voce-mesmo-13-formas-de-reutilizar-garrafas-pet`, `calcada-de-plastico-que-gera-energia-sera-que-isso-existe`, `7-ideias-incriveis-de-reciclagem-com-garrafas-pet`, `plastico-pode-virar-tijolo-e-essa-tecnologia-ja-chegou-ao-brasil`, `20-ideias-criativas-de-decoracao-para-natal-usando-reciclaveis`, `falta-lixo-na-suecia-o-pais-recicla-todos-seus-residuos-ha-seis-anos`, `tendencias`, `tinder-da-reciclagem-brasileiro-vence-premio-de-inovacao`, `28-habitos-sustentaveis-que-podemos-fazer-em-casa`, `combustiveis-que-menos-destroem-o-meio-ambiente`, `como-brechos-podem-ajudar-a-criar-o-habito-do-consumo-consciente`, `como-incentivar-as-criancas-a-viver-de-modo-sustentavel-desde-pequenos-2`, `5-formas-de-ganhar-dinheiro-com-a-reciclagem`, `como-fazer-a-compostagem-em-5-simples-passos`, `alimentos-organicos-tenha-a-propria-horta-em-casa`, `como-realizar-um-casamento-eco-friendly-descubra-ja`, `quais-sao-as-melhores-formas-de-reaproveitar-o-plastico`, `a-importancia-e-vantagens-da-reciclagem`, `estradas-feitas-de-plastico-ja-sao-realidade-conheca-a-iniciativa`, `o-perfil-da-industria-de-transformacao-de-plastico-no-brasil`, `e-tendencia-plastico-nas-passarelas-e-dentro-do-guarda-roupa`, `sacolas-descartaveis-sao-importantes-aliadas-no-combate-ao-novo-coronavirus`, `2577-2`, `9-formas-de-economizar-dinheiro-em-casa-com-reciclagem`, `carnaval-sustentavel`, `reciclagem-do-plastico`, `voce-conhece-o-plastico-verde-saiba-tudo-sobre-esse-material-100-renovavel`, `inovacoes-do-plastico-que-podem-revolucionar-a-industria`, `coronavirus`, `como-os-plasticos-descartaveis-ajudam-na-protecao-contra-o-novo-coronavirus`, `como-fazer-descarte-correto-do-plastico`, `empreendedores-da-cadeia-do-plastico-superam-dificuldades-e-protegem-a-populacao`, `habitos-de-consumo-em-relacao-ao-plastico-mudam-na-covid-19`, `o-plastico-e-os-descartaveis-enfim-reconhecidos-pela-sociedade`) — todos **KEEP**, migram para `/noticias/:slug` com o mesmo slug (301 desnecessário, URL preservada).

## 7. Custom post types

| Slug | Título | Tipo WP | Data | Migrar? | Observação |
|---|---|---|---|---|---|
| `acoes-do-simperj/simperj-na-expofood-2026` | SIMPERJ na Expofood 2026 | acoes-do-simperj | 2026-07-02 | **KEEP** | 8 fotos próprias reais do estande — melhor ativo fotográfico institucional do site |
| `acoes-do-simperj/feira-k-2025-o-futuro-da-industria-de-plasticos-e-borracha` | Feira K 2025 | acoes-do-simperj | 2025-10-20 | **KEEP** | 6 fotos próprias |
| `destaques/novembro-azul` | Novembro Azul | destaques | 2025-11-10 | **KEEP** | Campanha de saúde, usado na Home |
| `destaques/outubro-rosa-conscientizacao-sobre-o-cancer-de-mama` | Outubro Rosa | destaques | 2025-10-22 | **KEEP** | idem |
| `feiras-e-eventos/6o-recy-plastech` | 6º Recy-Plastech | feiras-e-eventos | 2025-10-20 | **KEEP** | |

Os 3 tipos (`acoes-do-simperj`, `destaques`, `feiras-e-eventos`) mapeiam diretamente para as seções "Ações recentes", "Destaques" e "Eventos" da Home/`/eventos` propostas no briefing — dado que a arquitetura de conteúdo atual já os separa taxonomicamente, replicamos essa separação em `src/data/`.

## 8. Páginas vazias, quebradas ou órfãs — `REMOVE`

Confirmado via fetch de conteúdo completo (0 caracteres renderizados):

| Slug | Título | Migrar? | Observação |
|---|---|---|---|
| `inicio` | Início | **REMOVE** | Página vazia, órfã de uma migração antiga; `home` (id 4506) é a home real e ativa |
| `caos-no-rio` | Caos no Rio | **REMOVE** | Vazia, sem relação clara com o sindicato |
| `ebook` | E-books | **REMOVE** | Vazia |
| `envie-seu-curriculo` | Envie Seu Currículo | **REMOVE** | Vazia — se o RH quiser reativar isso, é feature nova, não migração |
| `espaco-dos-associados` | Espaço dos associados | **REMOVE** | Vazia |
| `redes-sociais` | Redes Sociais | **MERGE** | Conteúdo é só "nos siga" — vira ícones no footer/header, não precisa de página própria |
| `confirma-contato-whatsapp` | Atendimento WhatsApp \| SIMPERJ | **MERGE** | Página de redirecionamento para WhatsApp — vira link direto `wa.me`, sem página intermediária |
| `porque-sua-empresa-deve-estar-nas-redes-sociais` | Para associados: porque sua empresa deve estar nas redes sociais | **ARCHIVE** | Conteúdo de opinião genérico, não institucional; preservar só como redirect |
| `movimento-plastico-transforma` | Movimento Plástico Transforma | **MERGE** | Só embute 1 vídeo MP4; incorporar como vídeo dentro de `/sustentabilidade` |
| `eleicoes-sindicais-2019-relacao-nominal-da-chapa` | Eleições Sindicais 2019 – Relação Nominal da Chapa | **ARCHIVE** | Documento eleitoral pontual e vencido; preservar como PDF/registro histórico, não como página ativa |
| `atas-de-audiencia-traquimfar-2018-2019` | Atas de Audiência Traquimfar 2018-2019 | **ARCHIVE** | Processo específico encerrado |
| `assembleia-geral-11042019` | ASSEMBLEIA GERAL – 11/04/2019 | **ARCHIVE** | Convocação pontual vencida |
| `comunicado-negociacao-coletiva-rio-de-janeiro-20202021` | Comunicado: Negociação Coletiva RJ 2020/2021 | **ARCHIVE** | Comunicado datado e superado pelas CCTs atuais em `/acordos-coletivos` |
| `noticias` | Notícias (id extra) | **MERGE** | Existe como page E como listagem dinâmica de posts — a nova `/noticias` substitui ambas |

## 9. Documentos técnicos (páginas de anexo do WordPress)

As 17 URLs abaixo **não são páginas de conteúdo** — são páginas de anexo (attachment) que o WordPress gera automaticamente para cada PDF enviado. Resolvidas via API de mídia (`wp/v2/media`) para a URL real do arquivo. Ver `assets-audit.md` para a tabela completa com URL final de cada PDF.

Todas **KEEP**, mas a nova arquitetura não recria páginas de anexo individuais — os 17 documentos entram como `DocumentCard` dentro de `/materiais`, com download direto. As URLs antigas de anexo recebem 301 → `/materiais`.

---

## 10. Bugs de conteúdo confirmados no site atual (achados da auditoria)

1. **`/eventos/` duplica um calendário "Reuniões do SIMPERJ em 2019"** duas vezes seguidas, com conjuntos de datas ligeiramente diferentes entre as duas cópias — erro de copiar/colar no Elementor nunca corrigido.
2. **3 sistemas de calendário de reunião conflitantes e sem versão canônica clara**: `/reunioes-da-diretoria/` (recorrente, sem ano), `/reunioes-gerais/` (grade extensa "para 2024" de reuniões **FIRJAN/CIRJ/SESI/SENAI**, não do SIMPERJ), e o calendário embutido em `/eventos/` (ano 2019, morto). A nova IA usa **uma única fonte de dados** (`src/data/board-meetings.ts`) para `/reunioes-diretoria`.
3. **`/termos/` é o texto placeholder padrão do plugin de privacidade do WordPress, nunca preenchido** — contém literalmente a URL de outro cliente da agência que fez o site (`gd5.com.br/base/landingpage`). Página separada `/politica-de-privacidade/` tem o conteúdo real. Achado sensível — recomendo avisar o cliente que essa página ficou pública assim por anos.
4. **Diretoria: seção "Suplentes" com dados inconsistentes.** Lista 3 nomes claramente distintos com empresas coerentes (Alexandre Alberto Nascimento Silva, Franklin Pires de Oliveira, Reynaldo Thurler), mas depois repete "Fernanda Coelho Brites Pinto" associada a 3 empresas diferentes (Nova Lamitech 2x, FL Ind.) em posições que deveriam ser outros suplentes — indício de erro de template do Elementor (card duplicado sem trocar nome/empresa). **Não vou inventar os nomes corretos** — sinalizo para validação humana antes de publicar a lista de suplentes (ver seção de decisões abaixo).
5. **`/cursos/` está desatualizada desde 2021** e se autodescreve como "1º semestre de 2021" — confirma que não é o catálogo vigente.
6. **`/convenio/` não tem nenhuma lista de convênio no conteúdo publicado** — só texto de abertura. Precisa confirmação do cliente sobre se essa lista existe em outro lugar (painel interno, planilha) ou nunca foi publicada.
7. **~90 imagens (posts de 2017-2020) e alguns vídeos institucionais** apontam para um host de staging antigo em IP bruto (`http://177.136.241.79/~simperjo/...`), fora do domínio oficial e sem HTTPS — risco de indisponibilidade a qualquer momento (ver `assets-audit.md` e `assets-to-replace.md`).

---

## 11. Decisões validadas com o cliente

- [x] **Blog legado 2017-2020 com imagens de terceiros**: migrar como está (registrado em §6/§7).
- [x] **Lista de convênios** (achado #6): confirmado pelo cliente — a página `/convenio/` está vazia mesmo no site atual, não há lista publicada em lugar nenhum. `/convenios` estreia com a arquitetura de dados pronta (`Convenio` type + `convenios.ts` vazio) e um estado vazio institucional ("em breve"), sem convênios fictícios. Conteúdo entra quando o cliente fornecer.
- [x] **Suplentes da diretoria** (achado #4): cliente confirmou que não há dados corretos disponíveis agora. Decisão: publicar a estrutura com placeholders explícitos (`"Suplente 1"`, `"Suplente 2"`, etc., sem nome de empresa) em vez de usar os dados corrompidos do WordPress — evita publicar informação errada sobre uma pessoa real. Os 3 nomes que **são** internamente consistentes no dado de origem (Alexandre Alberto Nascimento Silva, Franklin Pires de Oliveira, Reynaldo Thurler) entram normalmente; as posições com dado claramente corrompido (repetição de "Fernanda Coelho Brites Pinto" com empresas trocadas) viram placeholder `"Suplente a confirmar"` até o cliente enviar o dado correto.
