# Design System — SIMPERJ

Evolução da identidade atual (não uma marca nova). A logo oficial (`public/assets/brand/simperj-logo-*.png`) é a referência de cor: azul institucional forte + variante branca para fundos escuros. O resto do sistema é construído ao redor dela para transmitir **indústria, tecnologia, institucionalidade, sustentabilidade e autoridade** — sem parecer template de site de associação genérico.

## Princípios

1. **Sóbrio, não frio.** Tipografia forte e espaçamento generoso fazem o trabalho, não decoração.
2. **Sem cara de Elementor.** Nada de cantos muito arredondados, sombra pesada, gradiente decorativo ou ícone genérico de biblioteca sem curadoria.
3. **Cor com intenção.** Azul institucional domina; verde entra só onde o conteúdo é literalmente sobre sustentabilidade/economia circular; laranja é reservado a estado/alerta pontual (ex: "Arquivo/Histórico").
4. **Motion com moderação.** Micro-interações (hover, foco, reveal ao rolar) sim; parallax/scroll-jacking não. `prefers-reduced-motion` sempre respeitado.

## Tokens — CSS variables (`src/styles/tokens.css`)

### Cor

Base extraída da logo oficial (azul institucional) + neutros técnicos + verde para o eixo de sustentabilidade + um accent de alerta.

```css
:root {
  /* Marca — azul institucional (da logo oficial) */
  --brand-primary: #000936;      /* azul petróleo profundo — headers, CTAs primários */
  --brand-primary-dark: #072844; /* hover/active de primário, fundo hero */
  --brand-primary-light: #e8f0f7;/* fundo sutil, badges sobre branco */

  /* Secundária — usada em blocos de sustentabilidade/economia circular */
  --brand-secondary: #1c6b4f;
  --brand-secondary-dark: #124a36;
  --brand-secondary-light: #e6f2ec;

  /* Accent — uso pontual: CTA de conversão principal, alerta, badge "histórico" */
  --accent: #c8622a;
  --accent-dark: #a44e20;

  /* Neutros técnicos (não puro cinza de UI kit — leve tom frio, combina com o azul) */
  --background: #ffffff;
  --surface: #f6f8fa;
  --surface-raised: #ffffff;
  --border: #dde3e9;
  --border-strong: #b9c4cd;

  --text: #101820;
  --text-muted: #4c5a66;
  --text-on-brand: #ffffff;
  --text-on-brand-muted: #c9d8e5;

  --success: #1c6b4f;
  --warning: #c8622a;
  --danger: #b3261e;
  --focus-ring: #1a73b8;
}

[data-theme="dark"] {
  --background: #0b1620;
  --surface: #101e2b;
  --surface-raised: #16283a;
  --border: #223447;
  --border-strong: #33495d;
  --text: #eef3f7;
  --text-muted: #a8b8c4;
  --brand-primary-light: #12324f;
}
```

> O site institucional não exige dark mode no MVP — os tokens já preparam o terreno, mas o `ThemeProvider` fica fora do escopo da v1.

### Tipografia

Combinação institucional + legibilidade técnica, como pedido no briefing:

- **Display / Headings:** `"Manrope", "Inter", system-ui, sans-serif` — geometria sóbria, boa presença em títulos grandes sem parecer "startup".
- **Body:** `"Inter", system-ui, sans-serif` — a sans mais legível em texto denso (tabelas de acordo coletivo, benefícios).
- **Mono (dados técnicos — datas de CCT, CNPJ, código de curso):** `"IBM Plex Mono", ui-monospace, monospace`.

```css
:root {
  --font-display: "Manrope", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --text-display: clamp(2.5rem, 2rem + 2.2vw, 4rem);   /* Hero H1 */
  --text-h1: clamp(2rem, 1.7rem + 1.4vw, 3rem);
  --text-h2: clamp(1.5rem, 1.3rem + 0.9vw, 2.25rem);
  --text-h3: clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem);
  --text-h4: 1.25rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.75rem; /* uppercase, tracking-wide — eyebrows, badges */

  --leading-tight: 1.15;
  --leading-snug: 1.35;
  --leading-normal: 1.6;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

### Espaçamento (escala 4px)

```css
:root {
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.25rem;  --space-6: 1.5rem;
  --space-8: 2rem;     --space-10: 2.5rem;  --space-12: 3rem;
  --space-16: 4rem;    --space-20: 5rem;    --space-24: 6rem;
  --space-32: 8rem;
}
```

### Raio de borda — deliberadamente contido

```css
:root {
  --radius-sm: 2px;   /* inputs, badges */
  --radius-md: 4px;   /* cards, botões */
  --radius-lg: 8px;   /* modais, painéis grandes */
  --radius-full: 999px; /* pills, avatar */
}
```

Nada de `radius: 24px` em card — é o principal sinal visual de "template genérico" que o briefing pediu para evitar.

### Sombra — rasa e fria, nunca "flutuante"

```css
:root {
  --shadow-sm: 0 1px 2px rgba(11, 25, 38, 0.06);
  --shadow-md: 0 4px 12px rgba(11, 25, 38, 0.08);
  --shadow-lg: 0 12px 32px rgba(11, 25, 38, 0.12);
  --shadow-focus: 0 0 0 3px var(--focus-ring);
}
```

### Breakpoints / containers

```css
:root {
  --bp-xs: 360px; --bp-sm: 390px; --bp-md: 430px; --bp-lg: 768px;
  --bp-xl: 1024px; --bp-2xl: 1280px; --bp-3xl: 1440px; --bp-4xl: 1920px;

  --container-content: 72rem;   /* 1152px — texto/artigo */
  --container-wide: 84rem;      /* 1344px — grids, hero */
}
```

Validação obrigatória em: 360, 390, 430, 768, 1024, 1280, 1440, 1920px (§22 do briefing).

### Transição / motion

```css
:root {
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-emphasized: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-base: 240ms;
  --duration-slow: 400ms;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Z-index (escala nomeada, não números soltos no componente)

```css
:root {
  --z-base: 0; --z-sticky-header: 40; --z-dropdown: 50;
  --z-drawer: 60; --z-modal-backdrop: 70; --z-modal: 80; --z-toast: 90;
}
```

## Componentes base e seus estados

Todo componente interativo implementa, no mínimo: `default / hover / focus-visible / active / disabled`. Onde aplicável: `loading / empty / error` (§28 do briefing).

| Componente | Notas de design |
|---|---|
| `Button` | 3 variantes (`primary` = brand-primary sólido, `secondary` = outline, `ghost` = texto). Altura mínima 44px (touch target). Foco visível com `--shadow-focus`, nunca `outline: none` sem substituto. |
| `Container` / `Section` | `Container` fixa `max-width` + padding lateral responsivo. `Section` adiciona padding vertical em escala (`--space-16`/`24`/`32` conforme densidade). |
| `SectionHeader` | Eyebrow (label uppercase, mono, `--brand-primary`) + H2 + lead opcional. Usado em toda seção de página interna. |
| `Breadcrumb` | `aria-label="Trilha de navegação"`, separador `/` decorativo (`aria-hidden`). Presente em toda página de 2º nível+. |
| `Card` (base) | Borda `1px solid var(--border)`, sem sombra em repouso; sombra `--shadow-md` só no hover de cards clicáveis. Raio `--radius-md`. |
| `NewsCard` | Imagem 16:10, categoria (badge mono uppercase), título, data, resumo truncado (3 linhas), link "Leia a notícia". |
| `EventCard` | Data em bloco (dia grande + mês), título, local, status (`Em agenda` / `Encerrado` / `Em breve`) — nunca mostra evento passado como próximo. |
| `DocumentCard` | Ícone de tipo de arquivo (SVG próprio, não emoji), título, categoria, ano, botão "Baixar PDF" com peso do arquivo quando disponível. |
| `PartnerLogo` | Caixa de altura fixa (48px desktop / 32px mobile), `object-fit: contain`, grayscale por padrão → cor no hover. Nunca distorce proporção. |
| `PersonCard` | Foto 4:3 (ou avatar tipográfico com iniciais se não houver foto — nunca placeholder de pessoa genérica), cargo (eyebrow), nome, empresa. |
| `Timeline` | Vertical em mobile, alternada esq/dir em desktop; marcador = ano; sem exagero de animação — reveal simples ao entrar em viewport. |
| `Accordion` | Usado em "Por que se Associar" (grupos de benefício) e "Quem Somos" (conselhos). `aria-expanded`, ícone de chevron rotaciona, conteúdo com `grid-template-rows` animado (não `height: auto` abrupto). |
| `Table` | Desktop: tabela real (`<table>` semântica). Mobile: cards empilhados com label/valor — nunca scroll horizontal forçado sem indicação visual, usado só como fallback com `overflow-x-auto` + sombra de borda indicando conteúdo cortado. |
| `FormField` | Label sempre visível (não usa placeholder como label), mensagem de erro com `aria-describedby` + `role="alert"`, estado de validação inline. |
| `CTASection` | Bloco de largura total, fundo `--brand-primary` ou `--brand-secondary` conforme contexto, 1 headline + 1-2 CTAs. Usado com moderação (no máx. 1-2 por página). |

## Acessibilidade embutida no sistema (não depois)

- Contraste mínimo AA em toda combinação de token (texto normal ≥ 4.5:1, texto grande ≥ 3:1) — `--text` sobre `--background`/`--surface` e `--text-on-brand` sobre `--brand-primary` foram calculados para isso.
- Foco visível é um token (`--shadow-focus`), não uma decisão por componente.
- Motion sempre atrás de `prefers-reduced-motion`.
- Touch target mínimo 44×44px em todo elemento interativo.

## O que este sistema deliberadamente evita

Gradiente decorativo grande, glassmorphism, ícone gigante ilustrativo, sombra pesada tipo "card flutuando", cantos muito arredondados, paleta múltipla sem hierarquia, animação de entrada em cada elemento da página (fadiga visual) — todos citados no briefing como "cara de template WordPress" a evitar.
