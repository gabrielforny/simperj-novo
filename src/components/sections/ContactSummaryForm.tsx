import { useState, type FormEvent } from "react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: "", email: "", message: "" };

/**
 * Formulário resumido de contato (usado na Home). Front-end apenas nesta fase --
 * ver docs/deployment.md para a camada de integração (API/Resend/Formspree) prevista.
 */
export function ContactSummaryForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="border border-[var(--success)] bg-[var(--success-light)] rounded-[var(--radius-md)] p-8 text-center">
        <p className="font-[var(--font-display)] font-semibold text-[var(--success)]" style={{ fontSize: "var(--text-h4)" }}>
          Mensagem enviada!
        </p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">Retornamos em até 1 dia útil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-[var(--border)] rounded-[var(--radius-md)] p-6 bg-[var(--background)]" noValidate>
      <FormField
        id="home-name"
        label="Nome"
        required
        value={form.name}
        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
      />
      <FormField
        id="home-email"
        label="E-mail"
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
      />
      <FormField
        as="textarea"
        id="home-message"
        label="Mensagem"
        required
        rows={4}
        value={form.message}
        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
      />
      <Button type="submit" className="w-full">
        Enviar mensagem
      </Button>
    </form>
  );
}
