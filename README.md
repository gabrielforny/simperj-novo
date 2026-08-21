# SIMPERJ — Site Institucional (React)

Reconstrução completa do site institucional do SIMPERJ (Sindicato da Indústria de Material Plástico do Estado do Rio de Janeiro), migrando de WordPress/Elementor para uma aplicação React estática moderna — preservando marca, conteúdo, história e documentos, e reconstruindo design, arquitetura, acessibilidade, SEO e performance.

> **Antes de mexer no conteúdo, leia `docs/`.** A auditoria completa do site anterior, o inventário de assets, a arquitetura de informação e o mapa de redirects estão documentados lá — evita retrabalho e re-descoberta de decisões já tomadas.

## Stack

- **React 19** + **TypeScript** (modo `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- **Vite 8** — dev server e build
- **React Router 7** — roteamento client-side
- **Tailwind CSS 4** — utilitários, com design tokens em CSS custom properties (`src/styles/tokens.css`)
- **Lucide React** — ícones
- **Vitest + Testing Library** — testes

Sem WordPress, sem PHP, sem CMS, sem banco de dados nesta versão — conteúdo vive em `src/data/*.ts` (tipado) e `src/content/`. A arquitetura permite plugar um CMS headless ou API no futuro sem reescrever componentes (troca a fonte dos dados, não quem os consome).

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abre em `http://localhost:5173`. Hot reload ativo.

## Testes

```bash
npm test         # roda uma vez
npm run test:watch
```

## Typecheck e lint

```bash
npm run typecheck
npm run lint
```

## Build de produção

```bash
npm run build     # gera dist/
npm run preview   # serve dist/ localmente para conferência
```

## Estrutura do projeto

```
src/
  app/            bootstrap e roteador (AppRouter)
  components/
    layout/        Header, Footer, Layout, Seo, WhatsAppButton
    navigation/     Breadcrumb, NavDropdown
    ui/             Button, Container, Section, SectionHeader, Accordion,
                     ResponsiveTable, FormField, Badge, Reveal, SocialIcons
    cards/          NewsCard, EventCard, DocumentCard, PersonCard,
                     PartnerLogo, CourseCard
    sections/       PageHero, CTASection, Timeline, ContactSummaryForm
  pages/          1 arquivo por rota
  data/           conteúdo tipado (navigation, board, history, benefits,
                   events, courses, documents, collective-agreements,
                   meetings, news, partners, convenios, site)
  hooks/          useInView, useCountUp
  lib/            cn, format, validation
  types/          tipos compartilhados de domínio
  styles/         tokens.css (design system) + globals.css
  test/           setup do Vitest

public/
  assets/
    brand/          logo oficial
    board/           fotos da diretoria e conselho fiscal
    partners/        logos de parceiros institucionais
    news/            imagens de notícias recentes
    events/          fotos de ações/eventos (Expofood 2026, Feira K 2025)
    institutional/   imagens e vídeos de sustentabilidade
    documents/       19 PDFs técnicos
  robots.txt
  sitemap.xml

docs/
  content-audit.md          auditoria completa do WordPress: KEEP/UPDATE/MERGE/ARCHIVE/REMOVE
  assets-audit.md            inventário de todos os assets migrados
  assets-to-replace.md       registro de risco (assets em host de staging/terceiros)
  information-architecture.md  mapa de rotas, decisões de fusão, arquitetura React
  design-system.md           tokens de cor/tipografia/espaço/sombra/motion
  redirect-map.md            129 URLs antigas -> novas, com status de redirect
  seo.md                     o que foi implementado e limitações conhecidas
  deployment.md              como publicar e configurar rewrite/redirects
```

## Deploy

Aplicação 100% estática — `dist/` pode subir em qualquer host de arquivos estáticos (Render, Netlify, Vercel, Cloudflare Pages). Ver `docs/deployment.md` para a configuração de rewrite de SPA (obrigatória) e o plano de redirects 301 da migração.

## Conteúdo e decisões editoriais

Todo o conteúdo factual (nomes, datas, benefícios, textos institucionais) vem do site WordPress original, extraído via sitemap + API REST do WordPress — não foi inventado nada. Duas decisões foram validadas diretamente com o cliente e estão documentadas em `docs/content-audit.md`:

1. **Convênios** (`/convenios`): a página do site atual está genuinamente vazia — não há lista publicada em nenhum lugar. A nova página estreia com a arquitetura de dados pronta (`src/data/convenios.ts`) e um estado vazio institucional, sem inventar parceiros.
2. **Suplentes da diretoria** (`/quem-somos`): os dados de suplência no WordPress atual estão corrompidos (nome repetido com empresas trocadas). Os nomes internamente consistentes foram mantidos; as posições com dado corrompido usam um placeholder explícito ("Suplente a confirmar") em vez de publicar informação incorreta sobre pessoas reais.

## Licença de conteúdo

Textos, fotos, logos e documentos pertencem ao SIMPERJ e foram migrados do site oficial (simperj.org.br) com autorização do cliente para uso neste projeto.
