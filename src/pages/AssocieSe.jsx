import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { BENEFITS } from "../data/content";

const initialForm = {
  company: "",
  cnpj: "",
  segment: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  employees: "",
  message: "",
};

export default function AssocieSe() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Associe-se"
        title="Junte-se a 77 anos de representação industrial"
        lead="Preencha o formulário abaixo e nossa equipe entrará em contato para conduzir o processo de associação da sua empresa."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[var(--color-rust-600)]">Por que associar</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--color-ink)]">
                O que sua empresa passa a ter acesso
              </h2>
              <ul className="mt-8 space-y-4">
                {BENEFITS.slice(0, 6).map((b) => (
                  <li key={b.title} className="flex gap-3 text-sm text-[var(--color-graphite-700)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-green-600)]" />
                    <span><strong className="text-[var(--color-ink)]">{b.title}.</strong> {b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="border border-[var(--color-green-600)] bg-[var(--color-green-100)] p-10 text-center">
                <p className="font-display text-2xl font-semibold text-[var(--color-green-800)]">Solicitação enviada!</p>
                <p className="mt-3 text-sm text-[var(--color-graphite-700)] max-w-md mx-auto">
                  Este é um formulário de demonstração para apresentação — nenhum dado foi enviado de verdade. Em
                  produção, nossa equipe entraria em contato em até 2 dias úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <fieldset className="space-y-5">
                  <legend className="eyebrow text-[var(--color-petrol-800)] mb-1">Dados da empresa</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Razão social" id="company" value={form.company} onChange={update("company")} required />
                    <Field label="CNPJ" id="cnpj" value={form.cnpj} onChange={update("cnpj")} required placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Segmento de atuação" id="segment" value={form.segment} onChange={update("segment")} placeholder="Ex: embalagens, injeção, reciclagem" />
                    <Field label="Nº de colaboradores" id="employees" value={form.employees} onChange={update("employees")} />
                  </div>
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="eyebrow text-[var(--color-petrol-800)] mb-1">Dados do contato</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome completo" id="contactName" value={form.contactName} onChange={update("contactName")} required />
                    <Field label="Cargo" id="role" value={form.role} onChange={update("role")} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="E-mail" id="email" type="email" value={form.email} onChange={update("email")} required />
                    <Field label="Telefone / WhatsApp" id="phone" value={form.phone} onChange={update("phone")} required />
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm focus:border-[var(--color-petrol-700)] outline-none resize-none"
                    placeholder="Conte um pouco mais sobre sua empresa"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto justify-center">
                  Enviar solicitação de associação
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text", ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-ink)] mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm focus:border-[var(--color-petrol-700)] outline-none"
        {...props}
      />
    </div>
  );
}
