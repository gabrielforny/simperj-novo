# Assets a substituir / risco de qualidade

Registro exigido pelo processo de auditoria: imagens de baixa qualidade ou risco de indisponibilidade **não recebem upscale automático** — ficam documentadas aqui para decisão do cliente.

## Risco alto — host de staging fora do domínio oficial

Todos os arquivos abaixo estão em `http://177.136.241.79/~simperjo/...` — um IP bruto de servidor de staging, sem HTTPS, fora do controle de deploy do domínio `simperj.org.br`. Podem sair do ar sem aviso.

| Arquivo | Usado em | Prioridade de download |
|---|---|---|
| `ficha-cadastral-simperj-2024.pdf` | `/associe-se/` — **CTA de conversão principal** | 🔴 Crítica |
| `indices-reciclagem-2020-picplast-divulgacao-final.pdf` | `/sustentabilidade/` | 🟡 Média (já existe versão 2023 mais nova no domínio oficial) |
| `reciclagem-sementes-do-plastico-yt.mp4`, `tranformacoes-yt.mp4` | `/sustentabilidade/` | 🔴 Crítica (vídeos institucionais, sem cópia alternativa) |
| `plastico-transforma-simperj.mp4` | `movimento-plastico-transforma` (mesclada em Sustentabilidade) | 🟠 Alta |
| `economia-circular-1024x1024.jpg`, `mini-manual-economia-circular-2.jpg`, `semente1-5.jpg`, `tipos-de-plasticos-2.jpg` | `/sustentabilidade/` | 🟠 Alta |
| ~85 imagens do blog 2017-2020 | posts legados (ver `content-audit.md` §6) | 🟢 Baixa (cliente decidiu manter como está; risco aceito) |

**Ação recomendada:** baixar os itens 🔴/🟠 nesta mesma sessão de trabalho, antes de qualquer outra coisa nessa pasta ficar indisponível. Os 🟢 ficam cientes do risco por decisão explícita do cliente.

## Risco médio — imagens de terceiros sem controle de licença

| Arquivo | Origem | Usado em | Observação |
|---|---|---|---|
| `50-650-compostagem.jpg` | `cdn4.ecycle.com.br` | post "Como fazer a compostagem em 5 simples passos" | Imagem de terceiro, sem metadado de licença |
| `vario-para-cmpostagem.jpg` | `www.assimquefaz.com` | mesmo post | idem |
| Diversas imagens `shutterstock_*.jpg` sem marca d'água removida corretamente (nome de arquivo revela origem Shutterstock) | vários posts 2018 (`tendencias`, `combustiveis-que-menos-destroem-o-meio-ambiente`) | posts legados | Uso editorial de banco de imagens — status de licença desconhecido; risco jurídico baixo mas presente |

**Ação recomendada:** nenhuma nesta fase (cliente optou por manter blog legado como está). Se o cliente quiser reduzir risco no futuro, a rota mais barata é trocar essas imagens específicas por fotos própria/stock licenciado, sem precisar reescrever o texto.

## Qualidade de imagem (resolução/compressão)

Nenhuma imagem própria do SIMPERJ (marca, diretoria, ações, parceiros, notícias 2025) apresentou resolução visivelmente baixa nesta auditoria — a maioria são uploads recentes (2025-2026) em boa resolução (`-scaled`, `-1024x...`). As únicas imagens de resolução mais modesta são as do blog legado 2017-2020 (thumbnails 300x200/300x300px, típicas de posts antigos) — cobertas pela decisão de "manter como está" e não candidatas a upscale artificial.
