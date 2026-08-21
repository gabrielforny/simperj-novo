# Arquitetura de Informação — Nova SIMPERJ

Baseada na auditoria (`content-audit.md`). Mantém slugs antigos onde fazem sentido para SEO; consolida onde o WordPress tinha fragmentação por ano/conselho.

## Mapa de rotas

```
/                           Home
/quem-somos                 História + Timeline + Diretoria + Conselho Fiscal
                             + Conselhos/Comitês (accordion, ex-9 páginas) + Gestões anteriores
/por-que-se-associar        Benefícios agrupados (accordion)
/associe-se                 Fluxo de associação (4 passos) + ficha
/convenios                  Lista de convênios (arquitetura pronta; conteúdo pendente do cliente)
/cursos                     Catálogo de cursos (2021 marcado como Arquivo/Histórico)
/acordos-coletivos          Tabela responsiva por regional
/legislacao                 Hub: orientações jurídicas + lei de incentivo + calendário ambiental + fiscalização
/reunioes-diretoria          Calendário de reuniões da diretoria (fonte única)
/eventos                    Feiras Nacionais / Internacionais / Online + Ações do SIMPERJ (dinâmico, sem página por ano)
/sustentabilidade           Compromisso ESG + Sementes do Plástico + 5 causas + vídeos
/materiais                  Biblioteca de PDFs (filtro categoria/ano/tema) — 19 documentos
/noticias                   Listagem (busca + categoria + paginação)
/noticias/:slug             Artigo individual — slugs preservados 1:1 dos posts do WordPress
/contato                    Formulário + WhatsApp + endereço
/politica-de-privacidade    Preservada (conteúdo real, não o placeholder)
/404                        Página institucional de erro
```

## Decisões de fusão (MERGE) — não viram rota própria

| Conteúdo antigo | Destino |
|---|---|
| 9 páginas de Conselhos/Comitês/Atas | Accordion dentro de `/quem-somos` |
| `redes-sociais` | Ícones no header/footer |
| `confirma-contato-whatsapp` | Link direto `wa.me`, sem página |
| `movimento-plastico-transforma` | Vídeo embutido em `/sustentabilidade` |
| `legislacao` (vazia) + 3 subpáginas jurídicas | Hub único `/legislacao` |
| `noticias` (page antiga) | Substituída pela `/noticias` dinâmica |
| 9 páginas de calendário de feira por ano | `src/data/events.ts`, renderizado dinamicamente em `/eventos` |
| 17 páginas de anexo de PDF | `DocumentCard` dentro de `/materiais`, sem página própria |

## Navegação proposta (header)

Baseado no menu atual (Quem somos / Diretoria e Conselhos / Agenda do Sindicato / Por que se associar / Associados / Eventos / Cursos / Sustentabilidade / Jurídico / Convênios), consolidado para reduzir profundidade:

```
Início
Institucional      → Quem Somos · Por que se Associar · Associe-se
Setor              → Eventos · Cursos · Sustentabilidade
Conteúdo           → Notícias · Materiais
Jurídico           → Acordos Coletivos · Legislação
Contato
[Associe-se]  (CTA destacado)
```

## Problemas de UX/UI identificados no site atual

1. **Menu fragmentado**: itens redundantes/pouco relacionados no mesmo nível (Diretoria e Conselhos, Agenda do Sindicato, Associados como itens de primeiro nível separados, quando são todos "institucional").
2. **Nenhuma hierarquia visual nos benefícios de associação** — texto corrido com 10 itens numerados, sem agrupamento temático nem CTA de conversão no fim.
3. **3 sistemas de calendário conflitantes** sem fonte única da verdade (ver `content-audit.md` §10.2).
4. **Página `/eventos` mistura categorias de feira com reunião interna**, confundindo "eventos do setor" com "governança".
5. **Cursos de 2021 apresentados sem marcação de desatualização** — usuário não sabe que a oferta não é mais válida.
6. **PDFs distribuídos como páginas de anexo individuais** (URL feia tipo `/perfil_2025abiplast_digital/`) em vez de uma central de recursos com filtro.
7. **Formulários via Contact Form 7 sem estados de erro/sucesso visíveis na estrutura de conteúdo** (shortcode puro, UX depende 100% do plugin).
8. **Nenhuma indicação visual de "não há eventos internacionais agendados no momento"** — mensagem de texto solta ("Estamos atualizando... aguarde!"), sem tratamento de empty state.
9. **Placeholder do WordPress nunca substituído** publicado como página real (`/termos/`) — risco de imagem institucional.
10. **Diretoria "Suplentes" com dados de card corrompidos** (nomes/empresas repetidos incorretamente) — sinal de fragilidade de manutenção no CMS atual.

## Arquitetura React proposta

```
src/
  app/                    bootstrap, providers, router
  components/
    layout/               Header, Footer, MobileDrawer, SkipLink
    navigation/           NavMenu, NavDropdown, Breadcrumb
    ui/                   Button, Container, Section, SectionHeader, Accordion, Table, FormField, Badge
    cards/                NewsCard, EventCard, DocumentCard, PersonCard, PartnerLogo, CourseCard
    sections/             Hero, StatsStrip, CTASection, PageHero, Timeline
  pages/                  1 arquivo por rota (Home.tsx, QuemSomos.tsx, ...)
  features/               lógica específica por domínio (ex: features/materiais/useDocumentFilter.ts)
  data/                   navigation.ts, partners.ts, board.ts, history.ts, benefits.ts, events.ts,
                           courses.ts, documents.ts, collective-agreements.ts, contacts.ts
  content/                markdown/JSON de textos longos (legislação, políticas)
  hooks/                  useReducedMotion, useMediaQuery, useDocumentFilter
  lib/                    formatDate, seo helpers, cn (classnames)
  styles/                 tokens.css, globals.css
  types/                  board.ts, news.ts, document.ts, event.ts, course.ts

public/
  assets/
    brand/  board/  partners/  news/  events/  institutional/  documents/
```
