import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/data/site";
import { isBlank, isValidEmail } from "@/lib/validation";

const initialForm = { name: "", company: "", email: "", phone: "", subject: "", message: "" };
type ContactField = keyof typeof initialForm;
type ContactErrors = Partial<Record<ContactField, string>>;

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: ContactField) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  function validate(): ContactErrors {
    const next: ContactErrors = {};
    if (isBlank(form.name)) next.name = "Informe seu nome.";
    if (isBlank(form.email)) next.email = "Informe seu e-mail.";
    else if (!isValidEmail(form.email)) next.email = "Informe um e-mail válido.";
    if (isBlank(form.message)) next.message = "Escreva uma mensagem.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) setSubmitted(true);
  }

  return (
    <>
      <Seo title="Contato" description="Fale com o SIMPERJ: telefones, e-mail, endereço e formulário de contato." path="/contato" />
      <PageHero eyebrow="Contato" title="Fale com o SIMPERJ" lead="Nossa equipe está pronta para atender associados e empresas interessadas em conhecer o sindicato." breadcrumb={[{ label: "Contato" }]} />

      <Section spacing="lg">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-8">
            <div>
              <h2 className="eyebrow text-[var(--brand-primary)]">Endereço</h2>
              <p className="mt-3 flex gap-3 text-[var(--text)]">
                <MapPin size={20} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" />
                {SITE.address} — CEP {SITE.cep}
              </p>
              <div className="mt-4 aspect-video w-full border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
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
              <h2 className="eyebrow text-[var(--brand-primary)]">Telefones</h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
                <li className="flex gap-3">
                  <Phone size={18} aria-hidden="true" className="text-[var(--brand-primary)]" /> {SITE.contacts.administrative.phone} — {SITE.contacts.administrative.label} ({SITE.contacts.administrative.name})
                </li>
                <li className="flex gap-3">
                  <Phone size={18} aria-hidden="true" className="text-[var(--brand-primary)]" /> {SITE.contacts.financial.phone} — {SITE.contacts.financial.label} ({SITE.contacts.financial.name})
                </li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-[var(--brand-primary)]">E-mail</h2>
              <p className="mt-3 flex gap-3 text-sm text-[var(--text)]">
                <Mail size={18} aria-hidden="true" className="text-[var(--brand-primary)]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--brand-primary)]">
                  {SITE.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="eyebrow text-[var(--brand-primary)]">Redes sociais</h2>
              <div className="mt-3 flex gap-3">
                <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] hover:border-[var(--brand-primary)] transition-colors">
                  <FacebookIcon size={18} />
                </a>
                <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] hover:border-[var(--brand-primary)] transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] hover:border-[var(--brand-primary)] transition-colors">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div role="status" className="border border-[var(--success)] bg-[var(--success-light)] rounded-[var(--radius-md)] p-10 text-center">
                <p className="font-[var(--font-display)] font-semibold text-[var(--success)]" style={{ fontSize: "var(--text-h3)" }}>
                  Mensagem enviada!
                </p>
                <p className="mt-3 text-sm text-[var(--text-muted)] max-w-md mx-auto">Formulário de demonstração — nenhum dado foi enviado. Respondemos em até 1 dia útil.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 border border-[var(--border)] rounded-[var(--radius-md)] p-6" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="c-name" label="Nome" required value={form.name} onChange={update("name")} error={errors.name} />
                  <FormField id="c-company" label="Empresa" value={form.company} onChange={update("company")} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField id="c-email" label="E-mail" type="email" required value={form.email} onChange={update("email")} error={errors.email} />
                  <FormField id="c-phone" label="Telefone" value={form.phone} onChange={update("phone")} />
                </div>
                <FormField id="c-subject" label="Assunto" value={form.subject} onChange={update("subject")} />
                <FormField as="textarea" id="c-message" label="Mensagem" required rows={6} value={form.message} onChange={update("message")} error={errors.message} />
                <Button type="submit" className="w-full">
                  Enviar mensagem
                </Button>
              </form>
            )}
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
