# Deployment

Aplicação 100% front-end (sem backend, sem banco de dados). `npm run build` gera `dist/` estático, pronto para qualquer host de arquivos estáticos (Render Static Site, Netlify, Vercel, Cloudflare Pages, S3+CloudFront).

## Build

```bash
npm install
npm run build
```

Saída em `dist/`. `npm run preview` serve essa pasta localmente para conferência final antes do deploy.

## Configuração obrigatória do host: rewrite de SPA

Como o roteamento é feito pelo React Router no cliente, o servidor precisa devolver `index.html` para qualquer rota que não seja um arquivo estático real (ex: `/quem-somos`, `/noticias/algum-slug`) — senão o usuário recebe 404 do servidor ao acessar a URL diretamente ou dar F5.

### Render (Static Site) — `render.yaml`

```yaml
services:
  - type: web
    name: simperj-novo
    runtime: static
    buildCommand: npm run build
    staticPublishPath: dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### Netlify — `public/_redirects`

```
/*  /index.html  200
```

### Vercel — `vercel.json`

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Redirects 301 (migração)

`docs/redirect-map.md` lista 129 URLs antigas que precisam de 301 real no host de produção (não apenas rewrite de SPA) para preservar SEO da migração do WordPress. A forma de configurar depende do host:

- **Render**: seção `routes` do `render.yaml`, com `type: redirect` (não `rewrite`) para cada entrada 301, ou um proxy de borda (Cloudflare) se a lista crescer muito.
- **Netlify**: entradas adicionais em `_redirects` com código `301` explícito.
- **Cloudflare** (se o domínio migrar para lá): Bulk Redirects ou um Worker que consulta uma tabela.

Recomendação: começar com as ~20 URLs de maior tráfego histórico (páginas institucionais e notícias mais recentes) e expandir a lista completa antes do go-live definitivo.

## Variáveis de ambiente

Nenhuma é necessária para rodar o site nesta v1 (sem integração de formulário real, sem CMS, sem API). Ver `.env.example` para o que a próxima fase (envio de formulário) vai precisar.

## Assets pesados (PDFs e vídeos)

`public/assets/documents/` (~84MB de PDFs) e `public/assets/institutional/video/` (~15MB de vídeos) fazem parte do build estático e são versionados no repositório. Hosts com limite de tamanho de deploy devem confirmar que comportam esse volume; alternativa é mover esses arquivos para um bucket de object storage (S3, Cloudflare R2) e apontar as URLs em `src/data/documents.ts` / `src/pages/Sustentabilidade.tsx` para lá, sem mudar nenhum componente.

## Checklist pré-deploy

- [ ] `npm run build` sem erros
- [ ] `npm run typecheck` sem erros
- [ ] `npm test` passando
- [ ] Rewrite de SPA configurado no host
- [ ] Redirects 301 configurados (ao menos os de maior prioridade)
- [ ] Domínio apontado e HTTPS ativo
- [ ] `SITE.url` em `src/data/site.ts` confere com o domínio real de produção
