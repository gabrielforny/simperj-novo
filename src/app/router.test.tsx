import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "./router";

const ROUTES: Array<[string, RegExp]> = [
  ["/", /Fortalecendo a indústria do plástico/i],
  ["/quem-somos", /77 anos representando/i],
  ["/por-que-se-associar", /força coletiva/i],
  ["/associe-se", /Junte-se a 77 anos/i],
  ["/associados", /Empresas associadas ao SIMPERJ/i],
  ["/convenios", /Convênios SIMPERJ/i],
  ["/cursos", /Cursos técnicos/i],
  ["/acordos-coletivos", /Acordos Coletivos de Trabalho/i],
  ["/legislacao", /Legislação e orientações/i],
  ["/eventos", /Eventos do setor plástico/i],
  ["/sustentabilidade", /sustentabilidade no centro/i],
  ["/materiais", /Materiais técnicos para download/i],
  ["/noticias", /movimentando o setor plástico/i],
  ["/contato", /Fale com o SIMPERJ/i],
  ["/politica-de-privacidade", /Política de Privacidade/i],
  ["/rota-que-nao-existe", /Página não encontrada/i],
];

describe("AppRouter", () => {
  it.each(ROUTES)("renderiza a rota %s com o conteúdo esperado", async (path, expected) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>
    );

    const matches = await screen.findAllByText(expected);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("renderiza um artigo de notícia individual pelo slug", async () => {
    render(
      <MemoryRouter initialEntries={["/noticias/dezembro-laranja-mes-de-prevencao-ao-cancer-de-pele"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { level: 1, name: /Dezembro Laranja/i })).toBeInTheDocument();
  });

  it("redireciona para /noticias quando o slug não existe", async () => {
    render(
      <MemoryRouter initialEntries={["/noticias/slug-inexistente"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(await screen.findByText(/movimentando o setor plástico/i)).toBeInTheDocument();
  });
});
