import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
  it("renderiza o link para a home e o CTA de associação", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /SIMPERJ — página inicial/i })).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link", { name: /Associe-se/i }).length).toBeGreaterThan(0);
  });

  it("abre o dropdown Institucional ao clicar e mostra os links filhos", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const trigger = screen.getByRole("button", { name: /Institucional/i });
    await user.click(trigger);

    expect(screen.getByRole("menuitem", { name: /Quem Somos/i })).toBeInTheDocument();
  });

  it("abre o menu mobile ao clicar no botão hambúrguer", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /Abrir menu/i }));
    expect(screen.getByRole("navigation", { name: /Navegação mobile/i })).toBeInTheDocument();
  });
});
