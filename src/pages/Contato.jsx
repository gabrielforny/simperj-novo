import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../components/SocialIcons";
import { SITE } from "../data/content";

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
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
        eyebrow="Contato"
        title="Fale com o SIMPERJ"
        lead="Nossa equipe está pronta para atender associados e empresas interessadas em conhecer o sindicato."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="eyebrow text-[var(--color-petrol-800)]">Endereço</h2>
                <p className="mt-3 flex gap-3 text-[var(--color-ink)]">
                  <MapPin size={20} className="shrink-0 text-[var(--color-rust-600)]" />
                  {SITE.address} — CEP {SITE.cep}
                </p>
                <div className="mt-4 aspect-video w-full border border-[var(--color-line)] overflow-hidden">
                  <iframe
                    title="Mapa — Rua Santa Luzia, 776, Centro, Rio de Janeiro"
                    className="h-full w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Rua+Santa+Luzia,+776,+Centro,+Rio+de+Janeiro&output=embed"
                  />
                </div>
              </div>

              <div>
                <h2 className="eyebrow text-[var(--color-petrol-800)]">Telefones</h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink)]">
                  <li className="flex gap-3"><Phone size={18} className="text-[var(--color-rust-600)]" /> {SITE.phone} — Atendimento</li>
                  <li className="flex gap-3"><Phone size={18} className="text-[var(--color-rust-600)]" /> {SITE.phoneFinance} — Financeiro</li>
                </ul>
              </div>

              <div>
                <h2 className="eyebrow text-[var(--color-petrol-800)]">E-mail</h2>
                <p className="mt-3 flex gap-3 text-sm text-[var(--color-ink)]">
                  <Mail size={18} className="text-[var(--color-rust-600)]" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-rust-600)]">{SITE.email}</a>
                </p>
              </div>

              <div>
                <h2 className="eyebrow text-[var(--color-petrol-800)]">Redes sociais</h2>
                <div className="mt-3 flex gap-3">
                  <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 border border-[var(--color-line)] hover:border-[var(--color-petrol-700)] transition-colors">
                    <FacebookIcon size={18} />
                  </a>
                  <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 border border-[var(--color-line)] hover:border-[var(--color-petrol-700)] transition-colors">
                    <InstagramIcon size={18} />
                  </a>
                  <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 border border-[var(--color-line)] hover:border-[var(--color-petrol-700)] transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="border border-[var(--color-green-600)] bg-[var(--color-green-100)] p-10 text-center">
                <p className="font-display text-2xl font-semibold text-[var(--color-green-800)]">Mensagem enviada!</p>
                <p className="mt-3 text-sm text-[var(--color-graphite-700)] max-w-md mx-auto">
                  Formulário de demonstração — nenhum dado foi enviado de verdade. Respondemos em até 1 dia útil.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 border border-[var(--color-line)] p-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome" id="c-name" value={form.name} onChange={update("name")} required />
                  <Field label="Telefone" id="c-phone" value={form.phone} onChange={update("phone")} />
                </div>
                <Field label="E-mail" id="c-email" type="email" value={form.email} onChange={update("email")} required />
                <Field label="Assunto" id="c-subject" value={form.subject} onChange={update("subject")} />
                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">Mensagem</label>
                  <textarea
                    id="c-message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={update("message")}
                    className="w-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm focus:border-[var(--color-petrol-700)] outline-none resize-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center">Enviar mensagem</button>
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
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-ink)] mb-2">{label}</label>
      <input
        id={id}
        type={type}
        className="w-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm focus:border-[var(--color-petrol-700)] outline-none"
        {...props}
      />
    </div>
  );
}
