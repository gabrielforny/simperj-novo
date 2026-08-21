# Auditoria de Assets — simperj.org.br

Todas as URLs abaixo foram confirmadas com `curl -I` (HTTP 200) em 2026-08-21. Assets marcados **"baixar"** serão baixados para `public/assets/...` e servidos localmente na nova aplicação (nenhuma URL remota do WordPress fica na build final, conforme instrução). Assets do host de staging antigo (`177.136.241.79`) ficam documentados aqui mas **não** viram dependência de produção, exceto onde o cliente explicitamente pediu para manter (blog legado, §6 do content-audit).

---

## 1. Marca (`public/assets/brand/`)

| Arquivo novo | URL original | Origem | Finalidade | Reutilizar? |
|---|---|---|---|---|
| `simperj-logo-color.png` | `.../2023/09/logotipo-simperj_cores-atual.png` | header/footer atuais | Logo oficial colorida (fundo claro) | ✅ baixar |
| `simperj-logo-white.png` | `.../2023/09/logo-branco-sem-fundo-simperj-scaled.png` | header dark | Logo oficial branca, fundo transparente | ✅ baixar — principal para header/footer escuros |
| `simperj-logo-cmyk-alta.jpg` | `.../2019/08/logotipo-simperj_cores_cmyk_alta-01-scaled.jpg` | várias páginas | Versão alta-resolução CMYK (impressão/fallback) | ✅ baixar (referência, não usar em web se PNG branco cobrir o caso) |

## 2. Diretoria e Conselho Fiscal (`public/assets/board/`)

Fotos reais dos diretores, extraídas de `/quem-somos/`. Nomes de arquivo já seguem convenção `nome-sobrenome.webp` na migração (conversão de JPG para WebP na etapa de otimização).

| Arquivo novo | URL original | Pessoa / cargo |
|---|---|---|
| `ronaldo-castilho-thomaz.webp` | `.../2025/10/ronaldo-castilho-thomaz-presidente-bywer-industria-de-plasticos-ltda-scaled.jpg` | Presidente |
| `claudio-patrick-vollers.webp` | `.../2025/10/claudio-patrick-vollers-1o-vice–presidente-bauen-industrias-plasticas-eireli-scaled.jpg` | 1º Vice-Presidente |
| `franklin-soares-vieira.webp` | `.../2025/10/franklin-soares-vieira-1o-tesoureiro-artmed-artigos-de-medicao-ind.-e-com.-ltda-scaled.jpg` | 1º Tesoureiro |
| `francisco-piragine-junior.webp` | `.../2025/10/francisco-piragine-junior-2o-tesoureiro-uf-brindes-industria-e-comercio-ltda-epp-768x1024.jpg` | 2º Tesoureiro |
| `fernanda-coelho-brites-pinto.webp` | `.../2025/10/fernanda-coelho-brites-pinto-1o-secretaria-fl-ind.-e-com.-de-produtos-descartaveis-ltda-scaled.jpg` | 1ª Secretária / Conselho Fiscal |
| `marcio-racca-virginio-de-souza.webp` | `.../2025/10/marcio-racca-virginio-de-souza-2o-secretario-galpao-3-desenvolvimento-de-produtos-ltda-me-768x1024.jpg` | 2º Secretário |
| `antonio-guarino-de-souza.webp` | `.../2025/10/antonio-guarino-de-souza-conselho-fiscal-efetivo-industrias-plasticas-zarzur-ltda-scaled.jpg` | Conselho Fiscal Efetivo |
| `rafael-borges-sette.webp` | `.../2025/10/rafael-borges-sette-conselho-fiscal-efetivo-nova-lamitech-laminados-plasticos-eireli-scaled.jpg` | Conselho Fiscal Efetivo |
| `alexandre-alberto-nascimento-silva.webp` | `.../2025/10/alexandre-alberto-nascimento-silva-conselho-fiscal-suplente-xtransformacoes...-scaled.jpg` | Conselho Fiscal Suplente |
| `franklin-pires-de-oliveira.webp` | `.../2025/10/franklin-pires-de-oliveira-conselho-fiscal-suplentes-frilca...-scaled.jpg` | Conselho Fiscal Suplente |
| `reynaldo-thurler.webp` | `.../2025/10/reynaldo-thurler-diretor-suplente-industria-thurleflex-ltda-scaled.jpg` | Diretor Suplente |

**Sem foto disponível:** André Lima de Castro (2º Vice-Presidente) — não há imagem no WordPress para esse cargo. Usar iniciais/avatar tipográfico no `PersonCard`, não inventar foto.

Todas: ✅ baixar. Todas já são fotos institucionais próprias (não stock) — melhor lote de assets do site atual.

## 3. Ações do SIMPERJ (`public/assets/events/`)

Fotos próprias de eventos, altíssima relevância editorial (mostram o sindicato "em campo"):

| Origem | Qtde fotos | URLs |
|---|---|---|
| `acoes-do-simperj/simperj-na-expofood-2026` | 8 | `.../2026/07/simperj-na-expofood-2026-01.png` até `-08.png` |
| `acoes-do-simperj/feira-k-2025-...` | 6 | `.../2025/10/feira-k-2025-o-futuro-da-industria-de-plasticos-e-borracha-01.jpg` até `-06.jpg` |

Todas: ✅ baixar, resolução original (as listadas em `-240x300` são thumbnails do WP; buscar o arquivo full-size correspondente sem o sufixo de tamanho antes de baixar).

## 4. Parceiros (`public/assets/partners/`)

| Arquivo novo | URL original | Parceiro |
|---|---|---|
| `firjan.jpg` | `.../2025/09/firjan-novo.jpg` | FIRJAN |
| `sebrae.png` | `.../2025/12/logo-sebrae.png` | SEBRAE |
| `abiplast.jpg` | `.../2025/09/logo-abiplast.jpg` | ABIPLAST |
| `senai.png` | `.../2025/10/senai-removebg-preview.png` | SENAI |
| `iel.png` | `.../2025/10/iel-removebg-preview.png` | IEL |
| `sistema-industria.png` / `.svg` | `.../2025/12/logo-sistema-industria.png` + `.../2025/10/sistema_industria.svg` | Sistema Indústria (2 versões encontradas — usar o SVG) |
| `think-plastic.png` / `.svg` | `.../2025/12/logo-think-plastic-x.png` + `.../2025/10/think-plastic.svg` | Think Plastic Brazil (2 versões — usar o SVG) |
| `jornal-de-plasticos.jpg` | `.../2025/09/logo-jornal-de-plasticos.jpg` | Jornal de Plásticos |

Todas: ✅ baixar. **Normalizar altura visual** (todas para a mesma caixa, `object-fit: contain`, sem distorcer proporção) — pedido explícito do briefing.

## 5. Sustentabilidade / Sementes do Plástico (`public/assets/institutional/`)

| Arquivo novo | URL original | Uso |
|---|---|---|
| `economia-circular.jpg` | `177.136.241.79/~simperjo/.../economia-circular-1024x1024.jpg` | Card "Economia Circular" |
| `mini-manual-economia-circular.jpg` | `177.136.241.79/~simperjo/.../mini-manual-economia-circular-2.jpg` | Card material técnico |
| `sementes-01.jpg` … `sementes-05.jpg` | `177.136.241.79/~simperjo/.../semente1.jpg` … `semente5.jpg` | 5 causas sociais (1 por causa) |
| `tipos-de-plasticos.jpg` | `177.136.241.79/~simperjo/.../tipos-de-plasticos-2.jpg` | Ilustrativo, textura de material plástico |

**Vídeos** (não são YouTube — são MP4 diretos, host de staging):
| Arquivo novo | URL original | Uso |
|---|---|---|
| `sementes-do-plastico.mp4` | `177.136.241.79/~simperjo/.../reciclagem-sementes-do-plastico-yt.mp4` | Vídeo institucional do programa |
| `plastico-transforma.mp4` | `177.136.241.79/~simperjo/.../tranformacoes-yt.mp4` | Vídeo institucional |
| `movimento-plastico-transforma.mp4` | `177.136.241.79/~simperjo/2018/11/plastico-transforma-simperj.mp4` | Vídeo da página `movimento-plastico-transforma` (mesclada em Sustentabilidade) |

⚠️ Todos esses 4 arquivos (5 imagens + 3 vídeos) estão em `http://177.136.241.79/~simperjo/...` — **domínio de staging, HTTP sem TLS, fora do controle do cliente**. Prioridade alta de download antes que saiam do ar (ver `assets-to-replace.md`).

Todas: ✅ baixar.

## 6. Notícias recentes (`public/assets/news/`)

Imagens de capa dos posts institucionais 2025 (domínio oficial, boa resolução):

| Arquivo novo | URL original | Post |
|---|---|---|
| `dezembro-laranja.jpg` | `.../2025/12/dezembro-laranja.jpg` | Dezembro Laranja |
| `forum-plasticos.jpg` | `.../2025/12/forum-plasticos.jpg` | Fórum Plásticos ABIPLAST |
| `brasil-recicla-21.jpg` | `.../2025/11/brasil-recicla-21-dos-plasticos-pos-consumo-em-2024-e-movimenta-r-4-bilhoes.jpg` | Brasil recicla 21% |
| `reuso-de-agua.jpg` | `.../2025/11/reuso-de-agua-nas-industrias-move-maquinas-e-preserva-recursos.jpg` | Reúso de água |
| `havaianas-pneus.jpg` | `.../2025/11/grupo-force-transforma-havaianas-em-pneus-sustentaveis.jpg` | Grupo Force / Havaianas |
| `energia-renovavel.jpg` | `.../2025/11/cresce-o-uso-de-energia-de-fontes-renovaveis-na-industria.jpg` | Energia renovável |
| `impacto-social-plastico.jpg` | `.../2025/10/o-impacto-social-do-plastico-na-reducao-da-pobreza-e-na-melhoria-da-saude-global.jpg` | Impacto social do plástico |
| `reciclagem-quimica-china.jpg` | `.../2025/10/inovacao-na-china-reforca-o-papel-do-plastico-e-o-poder-da-reciclagem-quimica.jpg` | Reciclagem química China |
| `plastico-eletroeletronicos.png` | `.../2025/10/foto-a-importancia-do-plastico-reciclavel-na-industria-de-eletroeletronico.png` | Plástico em eletroeletrônicos |
| `novembro-azul.jpg` | `.../2025/11/novembro-azul.jpg` | Destaque Novembro Azul |

Todas: ✅ baixar.

## 7. Blog legado 2017–2020 (`~90 imagens`)

**Não serão baixadas nesta fase**, por decisão do cliente (ver `content-audit.md` §6): os ~30 posts legados migram apontando para as mesmas URLs de origem, que se dividem em:

- **Host de staging do cliente** (`177.136.241.79/~simperjo/...`, ~85 imagens): risco de indisponibilidade documentado em `assets-to-replace.md`.
- **Bancos de imagem / sites de terceiros** (2 imagens): `cdn4.ecycle.com.br` e `www.assimquefaz.com` — usadas no post "Como fazer compostagem em 5 passos". Uso editorial de imagem de terceiro sem controle de licença do cliente.
- **1 PDF de terceiro**: `iriworldwide.com/.../IRI-BCG-COVID-Global-Consumer-Spending-Tracker-2020-03-26.pdf`, referenciado no post sobre COVID — fora do domínio SIMPERJ.

Lista completa das ~90 URLs (por post) está em `/tmp` da sessão de auditoria; não replicada aqui para não inflar o documento — qualquer post individual pode ser reauditado sob demanda.

## 8. Documentos técnicos / PDFs (`public/assets/documents/`)

19 PDFs confirmados (17 do hub `/pdfs/` + 1 de `/associe-se/` + 1 de `/sustentabilidade/`), todos mapeados de "página de anexo WordPress" → URL real do arquivo via `wp/v2/media`:

| Arquivo novo | Título | URL original |
|---|---|---|
| `perfil-abiplast-2025.pdf` | PERFIL_2025ABIPLAST_digital | `.../2025/10/perfil_2025abiplast_digital.pdf` |
| `perfil-abiplast-2023.pdf` | PERFIL ABIPLAST – 2023 | `.../2025/12/perfil-abiplast-2023.pdf` |
| `diagnostico-nacional-economia-circular-firjan.pdf` | Diagnóstico Nacional para Economia Circular – Cadeia do Plástico – Firjan | `.../2025/10/diagnostico-nacional-para-economia-circular-cadeia-do-plastico-firjan.pdf` |
| `cenario-reciclagem-plasticos-brasil.pdf` | Cenário da Reciclagem de Plásticos no Brasil – Abiplast | `.../2025/10/cenario-da-reciclagem-de-plasticos-no-brasil.-movimento-plastico-transforma-abiplast.pdf` |
| `panorama-reciclagem-plastico-brasil.pdf` | Panorama da Reciclagem do Plástico no Brasil | `.../2025/12/panorama-da-reciclagem-do-plastico-no-brasil.pdf` |
| `indice-reciclagem-2023-picplast-abiplast.pdf` | Índice de Reciclagem 2023 – PICPLAST/ABIPLAST | `.../2025/12/indice-de-reciclagem-2023-picplast-abiplast.pdf` |
| `inovacao-transformacao-plastico-abiplast.pdf` | Inovação e Transformação do Plástico – Movimento Plástico Transforma | `.../2025/10/inovacao-e-transformacao-do-plastico-setores-industriais-movimento-plastico-transforma-abiplast.pdf` |
| `industria-produtos-plasticos-2025-etene.pdf` | Indústria de Produtos Plásticos 2025 – Caderno Setorial ETENE | `.../2025/12/industria-de-produtos-plasticos-2025-caderno-setorial-etene.pdf` |
| `industria-plastico-rj-firjan.pdf` | Indústria de Plástico RJ – Firjan | `.../2025/12/industria-de-platico-rj_firjan.pdf` |
| `petroquimica-fertilizantes-rj-2024-firjan.pdf` | Petroquímica e Fertilizantes no Rio de Janeiro 2024 – FIRJAN | `.../2025/12/petroquimica-e-fertilizantes.-no-rio-de-janeiro-2024-firjan-.pdf` |
| `setor-petroquimico-2022-firjan.pdf` | Setor Petroquímico 2022 – Firjan | `.../2025/12/setor-petroquimico_2022_firjan.pdf` |
| `boletim-firjan-producao-industrial-fluminense.pdf` | Boletim Firjan – IBGE crescimento da produção industrial fluminense | `.../2025/12/boletim-firjan-ibge-divulga-crescimento-da-producao-industrial-fluminense.15092025.pdf` |
| `impactos-socioeconomicos-braskem-duque-de-caxias.pdf` | Impactos Socioeconômicos da Braskem – Duque de Caxias | `.../2025/12/impactos-socioeconomicos-da-braskem-–-duque-de-caxias.pdf` |
| `manual-catador-reciclador-braskem.pdf` | Manual do Catador – Reciclador – Braskem | `.../2025/12/manual-do-catador-reciclador-braskem.pdf` |
| `analise-estatistica-pontos-coleta-braskem-2023.pdf` | Análise Estatística sobre Pontos de Coleta – Daniel Farias Gomes/Braskem 2023 | `.../2025/12/analise-estatistica-sobre-pontos-de-coleta-de-materiais-reciclaveis-daniel-farias-gomes_braskem-2023.pdf` |
| `licoes-aprendidas-pontos-coleta-braskem.pdf` | Lições aprendidas na Análise Estatística dos Pontos de Coleta – Braskem | `.../2025/12/licoes-aprendidas-na-analise-estatistica-dos-pontos-de-coleta_braskem.pdf` |
| `apresentacao-gladstone-alerj-set2023.pdf` | Apresentação Gladstone – 28/set/23 – ALERJ | `.../2025/12/apresentacao-gladestone_28set23_alerj.pdf` |
| `ficha-cadastral-simperj.pdf` | Ficha Registro de Associados (SIMPERJ 2024) | `177.136.241.79/~simperjo/.../ficha-cadastral-simperj-2024.pdf` ⚠️ staging |
| `indice-reciclagem-2020-picplast.pdf` | Índices de Reciclagem 2020 – PICPLAST | `177.136.241.79/~simperjo/.../indices-reciclagem-2020-picplast-divulgacao-final.pdf` ⚠️ staging (versão obsoleta — já existe a de 2023 acima; avaliar remover) |

Todas as 17 do domínio oficial: ✅ baixar direto. As 2 do host de staging (ficha cadastral e índice 2020): ✅ baixar **com prioridade alta**, pois é onde o risco de perda é maior — a ficha de associação é conversão crítica do site.

---

## Resumo por categoria

| Categoria | Qtde ativos | Ação |
|---|---|---|
| Marca | 3 | Baixar |
| Diretoria/Conselho | 11 fotos | Baixar (+ 1 pessoa sem foto — usar avatar tipográfico) |
| Ações/eventos próprios | 14 fotos | Baixar |
| Parceiros | 8 logos | Baixar |
| Sustentabilidade | 8 imagens + 3 vídeos | Baixar (host de staging — prioridade) |
| Notícias recentes | 10 imagens | Baixar |
| Documentos PDF | 19 | Baixar (2 do host de staging — prioridade) |
| Blog legado 2017-2020 | ~90 imagens + 1 PDF terceiro | **Não baixar** — manter URL original por decisão do cliente |

**Total de assets próprios a baixar/localizar nesta fase: ~76** (excluindo o blog legado, que fica em `assets-to-replace.md` como risco documentado).
