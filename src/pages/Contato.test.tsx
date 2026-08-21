import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Contato from "./Contato";

describe("Contato", () => {
  it("bloqueia o envio quando campos obrigatórios estão vazios", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Contato />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /Enviar mensagem/i }));

    // Sem os campos obrigatórios preenchidos, a validação HTML5 impede o submit
    // e o estado de sucesso não deve aparecer.
    expect(screen.queryByText(/Mensagem enviada!/i)).not.toBeInTheDocument();
  });

  it("mostra confirmação de envio ao preencher e submeter o formulário", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Contato />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/^Nome/i), "Maria Teste");
    await user.type(screen.getByLabelText(/^E-mail/i), "maria@empresa.com.br");
    await user.type(screen.getByLabelText(/^Mensagem/i), "Gostaria de mais informações.");
    await user.click(screen.getByRole("button", { name: /Enviar mensagem/i }));

    expect(await screen.findByText(/Mensagem enviada!/i)).toBeInTheDocument();
  });
});
