# SEO — SIMPERJ

## O que foi implementado nesta versão

- **`<Seo>` component** (`src/components/layout/Seo.tsx`): gerencia `document.title`, `meta description`, `canonical`, Open Graph e Twitter Card por página, via `useEffect` (SPA sem SSR — ver limitação abaixo). Usado em todas as 16 páginas.
- **Structured data (JSON-LD)**: `Organization` na Home, `Article` em cada notícia. `BreadcrumbList` pode ser adicionado do mesmo jeito quando o breadcrumb virar padrão em todas as páginas internas (já usado visualmente via `<Breadcrumb>` em todas elas).
- **`robots.txt`** (`public/robots.txt`): libera crawling e aponta para o sitemap.
- **`sitemap.xml`** (`public/sitemap.xml`): 62 URLs (15 páginas estáticas + 47 artigos de notícia). Gerado a partir do inventário real da auditoria — não é um placeholder.
- **URLs preservadas**: todos os 47 slugs de notícia mantidos idênticos aos do WordPress (`docs/redirect-map.md`), maximizando a preservação de SEO histórico.
- **Breadcrumb semântico**: `<nav aria-label="Trilha de navegação">` com `aria-current="page"` no item ativo, em todas as páginas internas.

## Limitação conhecida: SPA sem SSR/SSG

Esta é uma aplicação client-side (Vite + React Router, sem servidor Node em produção — build estático). Isso significa:

- `document.title`/meta tags são setados via JavaScript **depois** do primeiro paint. Crawlers modernos (Googlebot) executam JS e leem o DOM final, então isso funciona para o Google, mas **não é ideal para crawlers que não executam JS** (alguns bots de redes sociais/preview de link podem pegar apenas o HTML inicial do `index.html`).
- O `index.html` estático tem apenas meta tags genéricas do site (ver abaixo) — não meta tags por página.

**Mitigação de curto prazo (já aplicada):** `index.html` traz OG/description genéricos da marca, então qualquer preview que não execute JS ainda mostra algo correto (nome + descrição do SIMPERJ), só não personalizado por página.

**Caminho de evolução (fora do escopo desta v1, mas a arquitetura permite):** migrar para um framework com SSR/SSG (ex: Vite SSR, Astro ilhas, ou Next.js) reaproveitando os mesmos componentes e `src/data/*`, para pré-renderizar HTML final por rota — recomendado antes do lançamento em produção se SEO orgânico for prioridade alta, especialmente para as 47 páginas de notícia com tráfego de busca histórico.

## 301 obrigatórios na infraestrutura de produção

`docs/redirect-map.md` lista as 129 URLs antigas → novas. As que mudam de slug (`301 (renomeada)`, `301 (merge)`, `301 (archive)`, `301 (attachment -> hub)`) **precisam** de regra de redirect no servidor/CDN de produção (Render, Cloudflare, Nginx etc.) — o React Router só resolve rotas que já chegaram no `index.html`; não faz 301 de verdade sozinho.

## Checklist de SEO técnico

- [x] Title único por página
- [x] Meta description única por página
- [x] Canonical por página
- [x] Open Graph + Twitter Card
- [x] robots.txt
- [x] sitemap.xml
- [x] URLs de notícia preservadas
- [x] Structured data (Organization, Article)
- [ ] Structured data BreadcrumbList (fácil de adicionar, não incluído nesta v1 por tempo)
- [ ] Pré-renderização (SSR/SSG) — ver limitação acima
- [ ] Redirects 301 aplicados na infraestrutura real de produção (depende do host escolhido)
