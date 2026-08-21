# Mapa de Redirecionamentos — WordPress → React

129 URLs mapeadas (todas as páginas, posts e tipos customizados publicados encontrados via sitemap + API REST). **301 obrigatório na infraestrutura de produção** para todas as linhas marcadas `301`; linhas `200` mantêm o slug exato, sem necessidade de redirect.

Convenção de STATUS:
- `200 (preservada)` — mesmo slug, sem redirect necessário
- `200 (raiz)` — home
- `301 (renomeada)` — slug mudou por clareza (ex: `/convenio` → `/convenios`)
- `301 (merge)` — conteúdo consolidado em outra página (ver `information-architecture.md`)
- `301 (archive)` — conteúdo pontual/vencido, preservado como histórico dentro de `/noticias` ou `/eventos`, sem página própria
- `301 (attachment -> hub)` — página de anexo de PDF do WordPress, redireciona para a central de materiais
- `200 (preservada, âncora)` — conteúdo dinâmico (ações/feiras), vira seção com âncora em vez de rota própria

| OLD URL | NEW URL | STATUS |
|---|---|---|
| https://www.simperj.org.br/pdfs/ | /materiais | 301 (renomeada) |
| https://www.simperj.org.br/ | / | 200 (raiz) |
| https://www.simperj.org.br/confirma-contato-whatsapp/ | /contato | 301 (merge) |
| https://www.simperj.org.br/noticias/ | /noticias | 301 (merge) |
| https://www.simperj.org.br/termos/ | /politica-de-privacidade | 301 (merge) |
| https://www.simperj.org.br/redes-sociais/ | /contato | 301 (merge) |
| https://www.simperj.org.br/convenio/ | /convenios | 301 (renomeada) |
| https://www.simperj.org.br/orientacoes-juridicas/fiscalizacao-e-cotas-de-aprendizes-e-de-pcds/ | /legislacao | 301 (merge) |
| https://www.simperj.org.br/orientacoes-juridicas/ | /legislacao | 301 (merge) |
| https://www.simperj.org.br/calendario-de-obrigacoes-ambientais/ | /legislacao | 301 (merge) |
| https://www.simperj.org.br/lei-de-incentivo-a-reciclagem/ | /legislacao | 301 (merge) |
| https://www.simperj.org.br/sustentabilidade/ | /sustentabilidade | 200 (preservada) |
| https://www.simperj.org.br/legislacao/ | /legislacao | 301 (renomeada) |
| https://www.simperj.org.br/eventos-nacionais-em-2022/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/eventos-internacionais-em-2021/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/eventos-nacionais-em-2021/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/eventos-online-em-2021/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/reunioes-gerais/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/reunioes-da-diretoria/ | /reunioes-diretoria | 301 (renomeada) |
| https://www.simperj.org.br/comunicado-negociacao-coletiva-rio-de-janeiro-20202021/ | /acordos-coletivos | 301 (merge) |
| https://www.simperj.org.br/acordos-coletivos/ | /acordos-coletivos | 200 (preservada) |
| https://www.simperj.org.br/politica-de-privacidade/ | /politica-de-privacidade | 200 (preservada) |
| https://www.simperj.org.br/eventos-online-em-2020/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/feiras-internacionais-em-2020/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/feiras-nacionais-em-2020/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/exportacao-e-internacionalizacao-abrem-oportunidades-de-mercados-para-empresas-de-transformados-plasticos/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/feiras-nacionais-em-2020-cosmeticos/ | /eventos | 301 (merge) |
| https://www.simperj.org.br/posse-da-nova-diretoria-do-simperj-sera-na-casa-firjan/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/projeto-sementes-do-plastico-indicado-a-premio-melhores-praticas-sindicais/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/simperj-feira-k/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/quem-somos/ | /quem-somos | 200 (preservada) |
| https://www.simperj.org.br/ebook/ | / | 301 (merge) |
| https://www.simperj.org.br/porque-sua-empresa-deve-estar-nas-redes-sociais/ | /noticias | 301 (merge) |
| https://www.simperj.org.br/eleicoes-sindicais-2019-relacao-nominal-da-chapa/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/atas-de-audiencia-traquimfar-2018-2019/ | /acordos-coletivos | 301 (merge) |
| https://www.simperj.org.br/rodando-com-tampinhas-no-rjtv/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/eleicoes-do-simperj-2019-2022/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/projeto-sementes-do-plastico-e-rodando-com-tampinhas-no-jornal-o-globo/ | /noticias | 301 (archive) |
| https://www.simperj.org.br/eventos/caravana-simperj-para-a-ecomondo-brasil/ | /eventos | 301 (archive) |
| https://www.simperj.org.br/assembleia-geral-11042019/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/envie-seu-curriculo/ | /contato | 301 (merge) |
| https://www.simperj.org.br/eventos/simperj-na-feira-super-rio-expofood-2019/ | /eventos | 301 (archive) |
| https://www.simperj.org.br/movimento-plastico-transforma/ | /sustentabilidade | 301 (merge) |
| https://www.simperj.org.br/espaco-dos-associados/ | / | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-trabalhista-e-sindical/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-meio-ambiente/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-jovens-empresarios/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-infraestrutura/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-energia-eletrica/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-assuntos-tributarios/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/conselho-empresarial-de-assuntos-legislativos/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/associe-se/ | /associe-se | 200 (preservada) |
| https://www.simperj.org.br/comite-de-relacoes-trabalhistas/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/atas-de-reunioes/ | /quem-somos | 301 (merge) |
| https://www.simperj.org.br/por-que-se-associar/ | /por-que-se-associar | 200 (preservada) |
| https://www.simperj.org.br/caos-no-rio/ | / | 301 (merge) |
| https://www.simperj.org.br/contato/ | /contato | 200 (preservada) |
| https://www.simperj.org.br/eventos/ | /eventos | 200 (preservada) |
| https://www.simperj.org.br/cursos/ | /cursos | 200 (preservada) |
| https://www.simperj.org.br/inicio/ | / | 301 (merge) |
| https://www.simperj.org.br/dezembro-laranja-mes-de-prevencao-ao-cancer-de-pele/ | /noticias/dezembro-laranja-mes-de-prevencao-ao-cancer-de-pele | 200 (preservada) |
| https://www.simperj.org.br/simperj-participa-do-forum-plasticos-avancos-e-perspectivas-para-o-brasil/ | /noticias/simperj-participa-do-forum-plasticos-avancos-e-perspectivas-para-o-brasil | 200 (preservada) |
| https://www.simperj.org.br/brasil-recicla-21-dos-plasticos-pos-consumo-em-2024-e-movimenta-r-4-bilhoes/ | /noticias/brasil-recicla-21-dos-plasticos-pos-consumo-em-2024-e-movimenta-r-4-bilhoes | 200 (preservada) |
| https://www.simperj.org.br/reuso-de-agua-nas-industrias-move-maquinas-e-preserva-recursos/ | /noticias/reuso-de-agua-nas-industrias-move-maquinas-e-preserva-recursos | 200 (preservada) |
| https://www.simperj.org.br/grupo-force-transforma-havaianas-em-pneus-sustentaveis/ | /noticias/grupo-force-transforma-havaianas-em-pneus-sustentaveis | 200 (preservada) |
| https://www.simperj.org.br/cresce-o-uso-de-energia-de-fontes-renovaveis-na-industria/ | /noticias/cresce-o-uso-de-energia-de-fontes-renovaveis-na-industria | 200 (preservada) |
| https://www.simperj.org.br/impacto-social-do-plastico/ | /noticias/impacto-social-do-plastico | 200 (preservada) |
| https://www.simperj.org.br/reciclagem-quimica-na-china-impulsiona-economia-circular/ | /noticias/reciclagem-quimica-na-china-impulsiona-economia-circular | 200 (preservada) |
| https://www.simperj.org.br/a-importancia-do-plastico-reciclavel-na-industria-de-eletroeletronicos/ | /noticias/a-importancia-do-plastico-reciclavel-na-industria-de-eletroeletronicos | 200 (preservada) |
| https://www.simperj.org.br/sacola-de-plastico-x-sacola-de-papel/ | /noticias/sacola-de-plastico-x-sacola-de-papel | 200 (preservada) |
| https://www.simperj.org.br/circularidade-do-plastico/ | /noticias/circularidade-do-plastico | 200 (preservada) |
| https://www.simperj.org.br/o-plastico-nao-e-o-vilao-do-meio-ambiente/ | /noticias/o-plastico-nao-e-o-vilao-do-meio-ambiente | 200 (preservada) |
| https://www.simperj.org.br/o-plastico-e-os-descartaveis-enfim-reconhecidos-pela-sociedade/ | /noticias/o-plastico-e-os-descartaveis-enfim-reconhecidos-pela-sociedade | 200 (preservada) |
| https://www.simperj.org.br/habitos-de-consumo-em-relacao-ao-plastico-mudam-na-covid-19/ | /noticias/habitos-de-consumo-em-relacao-ao-plastico-mudam-na-covid-19 | 200 (preservada) |
| https://www.simperj.org.br/empreendedores-da-cadeia-do-plastico-superam-dificuldades-e-protegem-a-populacao/ | /noticias/empreendedores-da-cadeia-do-plastico-superam-dificuldades-e-protegem-a-populacao | 200 (preservada) |
| https://www.simperj.org.br/2577-2/ | /noticias/2577-2 | 200 (preservada) |
| https://www.simperj.org.br/sacolas-descartaveis-sao-importantes-aliadas-no-combate-ao-novo-coronavirus/ | /noticias/sacolas-descartaveis-sao-importantes-aliadas-no-combate-ao-novo-coronavirus | 200 (preservada) |
| https://www.simperj.org.br/coronavirus/ | /noticias/coronavirus | 200 (preservada) |
| https://www.simperj.org.br/como-os-plasticos-descartaveis-ajudam-na-protecao-contra-o-novo-coronavirus/ | /noticias/como-os-plasticos-descartaveis-ajudam-na-protecao-contra-o-novo-coronavirus | 200 (preservada) |
| https://www.simperj.org.br/voce-conhece-o-plastico-verde-saiba-tudo-sobre-esse-material-100-renovavel/ | /noticias/voce-conhece-o-plastico-verde-saiba-tudo-sobre-esse-material-100-renovavel | 200 (preservada) |
| https://www.simperj.org.br/inovacoes-do-plastico-que-podem-revolucionar-a-industria/ | /noticias/inovacoes-do-plastico-que-podem-revolucionar-a-industria | 200 (preservada) |
| https://www.simperj.org.br/9-formas-de-economizar-dinheiro-em-casa-com-reciclagem/ | /noticias/9-formas-de-economizar-dinheiro-em-casa-com-reciclagem | 200 (preservada) |
| https://www.simperj.org.br/como-fazer-descarte-correto-do-plastico/ | /noticias/como-fazer-descarte-correto-do-plastico | 200 (preservada) |
| https://www.simperj.org.br/reciclagem-do-plastico/ | /noticias/reciclagem-do-plastico | 200 (preservada) |
| https://www.simperj.org.br/carnaval-sustentavel/ | /noticias/carnaval-sustentavel | 200 (preservada) |
| https://www.simperj.org.br/industria-do-plastico-rio-janeiro/ | /noticias/industria-do-plastico-rio-janeiro | 200 (preservada) |
| https://www.simperj.org.br/e-tendencia-plastico-nas-passarelas-e-dentro-do-guarda-roupa/ | /noticias/e-tendencia-plastico-nas-passarelas-e-dentro-do-guarda-roupa | 200 (preservada) |
| https://www.simperj.org.br/o-perfil-da-industria-de-transformacao-de-plastico-no-brasil/ | /noticias/o-perfil-da-industria-de-transformacao-de-plastico-no-brasil | 200 (preservada) |
| https://www.simperj.org.br/estradas-feitas-de-plastico-ja-sao-realidade-conheca-a-iniciativa/ | /noticias/estradas-feitas-de-plastico-ja-sao-realidade-conheca-a-iniciativa | 200 (preservada) |
| https://www.simperj.org.br/a-importancia-e-vantagens-da-reciclagem/ | /noticias/a-importancia-e-vantagens-da-reciclagem | 200 (preservada) |
| https://www.simperj.org.br/quais-sao-as-melhores-formas-de-reaproveitar-o-plastico/ | /noticias/quais-sao-as-melhores-formas-de-reaproveitar-o-plastico | 200 (preservada) |
| https://www.simperj.org.br/como-realizar-um-casamento-eco-friendly-descubra-ja/ | /noticias/como-realizar-um-casamento-eco-friendly-descubra-ja | 200 (preservada) |
| https://www.simperj.org.br/alimentos-organicos-tenha-a-propria-horta-em-casa/ | /noticias/alimentos-organicos-tenha-a-propria-horta-em-casa | 200 (preservada) |
| https://www.simperj.org.br/como-fazer-a-compostagem-em-5-simples-passos/ | /noticias/como-fazer-a-compostagem-em-5-simples-passos | 200 (preservada) |
| https://www.simperj.org.br/5-formas-de-ganhar-dinheiro-com-a-reciclagem/ | /noticias/5-formas-de-ganhar-dinheiro-com-a-reciclagem | 200 (preservada) |
| https://www.simperj.org.br/como-incentivar-as-criancas-a-viver-de-modo-sustentavel-desde-pequenos-2/ | /noticias/como-incentivar-as-criancas-a-viver-de-modo-sustentavel-desde-pequenos-2 | 200 (preservada) |
| https://www.simperj.org.br/como-brechos-podem-ajudar-a-criar-o-habito-do-consumo-consciente/ | /noticias/como-brechos-podem-ajudar-a-criar-o-habito-do-consumo-consciente | 200 (preservada) |
| https://www.simperj.org.br/combustiveis-que-menos-destroem-o-meio-ambiente/ | /noticias/combustiveis-que-menos-destroem-o-meio-ambiente | 200 (preservada) |
| https://www.simperj.org.br/28-habitos-sustentaveis-que-podemos-fazer-em-casa/ | /noticias/28-habitos-sustentaveis-que-podemos-fazer-em-casa | 200 (preservada) |
| https://www.simperj.org.br/tinder-da-reciclagem-brasileiro-vence-premio-de-inovacao/ | /noticias/tinder-da-reciclagem-brasileiro-vence-premio-de-inovacao | 200 (preservada) |
| https://www.simperj.org.br/tendencias/ | /noticias/tendencias | 200 (preservada) |
| https://www.simperj.org.br/falta-lixo-na-suecia-o-pais-recicla-todos-seus-residuos-ha-seis-anos/ | /noticias/falta-lixo-na-suecia-o-pais-recicla-todos-seus-residuos-ha-seis-anos | 200 (preservada) |
| https://www.simperj.org.br/20-ideias-criativas-de-decoracao-para-natal-usando-reciclaveis/ | /noticias/20-ideias-criativas-de-decoracao-para-natal-usando-reciclaveis | 200 (preservada) |
| https://www.simperj.org.br/plastico-pode-virar-tijolo-e-essa-tecnologia-ja-chegou-ao-brasil/ | /noticias/plastico-pode-virar-tijolo-e-essa-tecnologia-ja-chegou-ao-brasil | 200 (preservada) |
| https://www.simperj.org.br/7-ideias-incriveis-de-reciclagem-com-garrafas-pet/ | /noticias/7-ideias-incriveis-de-reciclagem-com-garrafas-pet | 200 (preservada) |
| https://www.simperj.org.br/calcada-de-plastico-que-gera-energia-sera-que-isso-existe/ | /noticias/calcada-de-plastico-que-gera-energia-sera-que-isso-existe | 200 (preservada) |
| https://www.simperj.org.br/faca-voce-mesmo-13-formas-de-reutilizar-garrafas-pet/ | /noticias/faca-voce-mesmo-13-formas-de-reutilizar-garrafas-pet | 200 (preservada) |
| https://www.simperj.org.br/acoes-do-simperj/simperj-na-expofood-2026/ | /eventos#simperj-na-expofood-2026 | 200 (preservada, âncora) |
| https://www.simperj.org.br/acoes-do-simperj/feira-k-2025-o-futuro-da-industria-de-plasticos-e-borracha/ | /eventos#feira-k-2025-o-futuro-da-industria-de-plasticos-e-borracha | 200 (preservada, âncora) |
| https://www.simperj.org.br/destaques/novembro-azul/ | /#novembro-azul | 301 (destaque -> home) |
| https://www.simperj.org.br/destaques/outubro-rosa-conscientizacao-sobre-o-cancer-de-mama/ | /#outubro-rosa-conscientizacao-sobre-o-cancer-de-mama | 301 (destaque -> home) |
| https://www.simperj.org.br/feiras-e-eventos/6o-recy-plastech/ | /eventos#6o-recy-plastech | 200 (preservada, âncora) |
| https://www.simperj.org.br/analise-estatistica-sobre-pontos-de-coleta-de-materiais-reciclaveis-daniel-farias-gomes_braskem-2023/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/apresentacao-gladestone_28set23_alerj/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/boletim-firjan-ibge-divulga-crescimento-da-producao-industrial-fluminense-15092025/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/cenario-da-reciclagem-de-plasticos-no-brasil-movimento-plastico-transforma-abiplast/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/diagnostico-nacional-para-economia-circular-cadeia-do-plastico-firjan/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/impactos-socioeconomicos-da-braskem-duque-de-caxias/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/indice-de-reciclagem-2023-picplast-abiplast/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/industria-de-platico-rj_firjan/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/industria-de-produtos-plasticos-2025-caderno-setorial-etene/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/inovacao-e-transformacao-do-plastico-setores-industriais-movimento-plastico-transforma-abiplast/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/licoes-aprendidas-na-analise-estatistica-dos-pontos-de-coleta_braskem/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/manual-do-catador-reciclador-braskem/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/panorama-da-reciclagem-do-plastico-no-brasil/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/perfil-abiplast-2023/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/perfil_2025abiplast_digital/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/petroquimica-e-fertilizantes-no-rio-de-janeiro-2024-firjan/ | /materiais | 301 (attachment -> hub) |
| https://www.simperj.org.br/setor-petroquimico_2022_firjan/ | /materiais | 301 (attachment -> hub) |
