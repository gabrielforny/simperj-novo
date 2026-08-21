import { useState, type ChangeEvent, type FormEvent } from "react";
import { Download, FileCheck2, Mail, ClipboardList, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FormField } from "@/components/ui/FormField";
import { Button, ButtonAnchor } from "@/components/ui/Button";
import { BENEFIT_GROUPS } from "@/data/benefits";
import { SITE } from "@/data/site";

const STEPS = [
  { icon: Download, title: "1. Baixe a ficha", text: "Baixe a Ficha Registro de Associados em PDF." },
  { icon: ClipboardList, title: "2. Preencha", text: "Preencha os dados da sua indústria com atenção, especialmente CNPJ e dados numéricos." },
  { icon: FileCheck2, title: "3. Separe os documentos", text: "Cópia do Contrato Social (e última alteração, se houver) + RG e CPF dos sócios ou do representante da empresa." },
  { icon: Mail, title: "4. Envie ao SIMPERJ", text: `Envie tudo para ${SITE.associationEmail} ou ${SITE.email}.` },
];

const initialForm = { company: "", cnpj: "", contactName: "", email: "", phone: "", message: "" };

export default function AssocieSe() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof initialForm) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Seo
        title="Associe-se"
        description="Saiba como associar sua indústria ao SIMPERJ: baixe a ficha de registro, reúna os documentos necessários e envie ao sindicato."
        path="/associe-se"
      />
      <PageHero
        eyebrow="Associe-se"
        title="Junte-se a 77 anos de representação industrial"
        lead="Um processo simples em 4 passos para sua indústria se tornar associada ao SIMPERJ."
        breadcrumb={[{ label: "Associe-se" }]}
      />

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Como funciona" title="O processo de associação" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="border border-[var(--border)] rounded-[var(--radius-md)] p-6">
                <step.icon size={24} strokeWidth={1.6} className="text-[var(--brand-primary)]" aria-hidden="true" />
                <h3 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">{step.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8">
            <ButtonAnchor href="/assets/documents/ficha-cadastral-simperj.pdf" download variant="primary">
              <Download size={18} aria-hidden="true" /> Baixar ficha de registro de associados
            </ButtonAnchor>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-[var(--brand-primary)]">Por que associar</p>
              <h2 className="mt-3 font-[var(--font-display)] font-bold text-[var(--text)]" style={{ fontSize: "var(--text-h3)" }}>
                O que sua empresa passa a ter acesso
              </h2>
              <ul className="mt-8 space-y-4">
                {BENEFIT_GROUPS.slice(0, 4).flatMap((g) => g.items.slice(0, 1)).map((b) => (
                  <li key={b.title} className="flex gap-3 text-sm text-[var(--text-muted)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />
                    <span>
                      <strong className="text-[var(--text)]">{b.title}.</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div role="status" className="border border-[var(--success)] bg-[var(--success-light)] rounded-[var(--radius-md)] p-10 text-center">
                <p className="font-[var(--font-display)] font-semibold text-[var(--success)]" style={{ fontSize: "var(--text-h3)" }}>
                  Solicitação enviada!
                </p>
                <p className="mt-3 text-sm text-[var(--text-muted)] max-w-md mx-auto">
                  Este é um formulário de demonstração — nenhum dado foi enviado de verdade. Em produção, nossa equipe entraria em contato em até 2 dias úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-md)] p-6" noValidate>
                <fieldset className="space-y-5">
                  <legend className="eyebrow text-[var(--brand-primary)] mb-1">Dados da empresa</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField id="company" label="Razão social" required value={form.company} onChange={update("company")} />
                    <FormField id="cnpj" label="CNPJ" required placeholder="00.000.000/0000-00" value={form.cnpj} onChange={update("cnpj")} />
                  </div>
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="eyebrow text-[var(--brand-primary)] mb-1">Dados do contato</legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField id="contactName" label="Nome completo" required value={form.contactName} onChange={update("contactName")} />
                    <FormField id="phone" label="Telefone / WhatsApp" required value={form.phone} onChange={update("phone")} />
                  </div>
                  <FormField id="email" label="E-mail" type="email" required value={form.email} onChange={update("email")} />
                </fieldset>

                <FormField as="textarea" id="message" label="Mensagem (opcional)" rows={4} value={form.message} onChange={update("message")} />

                <Button type="submit" className="w-full sm:w-auto">
                  Enviar solicitação de associação
                </Button>
              </form>
            )}
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
