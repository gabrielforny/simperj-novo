import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, GraduationCap, Recycle, Handshake, MapPin, Mail, Phone } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { NewsCard } from "@/components/cards/NewsCard";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { PartnerLogo } from "@/components/cards/PartnerLogo";
import { useCountUp } from "@/hooks/useCountUp";
import { SITE } from "@/data/site";
import { NEWS_POSTS } from "@/data/news";
import { DOCUMENTS } from "@/data/documents";
import { PARTNERS } from "@/data/partners";
import { RECENT_ACTIONS, EVENTS } from "@/data/events";
import { formatDateShort } from "@/lib/format";
import { MISSION_STATEMENT } from "@/data/history";
import { ContactSummaryForm } from "@/components/sections/ContactSummaryForm";

const HERO_IMAGE = "/assets/institutional/tipos-de-plasticos.jpg";

const STATS = [
  { value: 1947, label: "Ano de fundação", suffix: "" },
  { value: 77, label: "Anos representando o setor", suffix: "+" },
  { value: 8, label: "Parceiros institucionais ativos", suffix: "" },
  { value: 5, label: "Regionais cobertas pelos acordos coletivos", suffix: "" },
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Representatividade sindical", text: "Defesa técnica e institucional dos interesses da indústria plástica fluminense junto à FIRJAN, CNI e ABIPLAST." },
  { icon: GraduationCap, title: "Cursos e capacitações", text: "Formações técnicas e digitais oferecidas em parceria com o sistema Firjan/SENAI para associados." },
  { icon: Recycle, title: "Sustentabilidade setorial", text: "Programas de economia circular e logística reversa, como o Sementes do Plástico." },
  { icon: Handshake, title: "Rede de convênios", text: "Descontos em saúde, educação e serviços via SESI, SENAI e sistema Firjan." },
];

function StatCounter({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="border-l border-white/15 pl-5">
      <div className="font-[var(--font-display)] font-extrabold tabular-nums" style={{ fontSize: "var(--text-h1)" }}>
        {value}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm text-[var(--text-on-brand-muted)] leading-snug max-w-[16rem]">{stat.label}</p>
    </div>
  );
}

export default function Home() {
  const latestNews = [...NEWS_POSTS]
    .filter((post) => !post.seasonal)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);
  const featuredDocs = DOCUMENTS.slice(0, 3);
  const homeActions = [...RECENT_ACTIONS, ...EVENTS.slice(0, 2)].slice(0, 4);

  return (
    <>
      <Seo
        title="SIMPERJ — Sindicato da Indústria de Material Plástico do RJ"
        description="Desde 1947, o SIMPERJ representa e fortalece as indústrias de transformação de plástico do Estado do Rio de Janeiro."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.fullName,
          url: SITE.url,
          foundingDate: "1947",
          address: { "@type": "PostalAddress", streetAddress: SITE.address, postalCode: SITE.cep, addressCountry: "BR" },
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--brand-primary-dark)] text-[var(--text-on-brand)]">
        <img src={HERO_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.18]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(7,40,68,0.97) 35%, rgba(7,40,68,0.8) 100%)" }} aria-hidden="true" />
        <Container className="relative pt-20 pb-16 md:pt-28 md:pb-24">
          <Reveal>
            <p className="eyebrow text-white/70">Sindicato da Indústria de Material Plástico do RJ</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-[var(--font-display)] font-extrabold leading-[1.1] max-w-4xl" style={{ fontSize: "var(--text-display)" }}>
              Fortalecendo a indústria do plástico no Rio de Janeiro
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[var(--text-on-brand-muted)] max-w-2xl leading-normal" style={{ fontSize: "var(--text-body-lg)" }}>
              Desde 1947, o SIMPERJ representa e fortalece as indústrias de transformação de plástico do Estado do Rio de Janeiro.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink to="/associe-se" variant="primary">
                Associe-se ao SIMPERJ <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/quem-somos" variant="secondary" className="text-white! border-white/40! hover:bg-white/10!">
                Conheça o SIMPERJ
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* INSTITUCIONAL */}
      <Section spacing="lg">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-[var(--brand-primary)]">Institucional</p>
            <h2 className="mt-3 font-[var(--font-display)] font-bold leading-tight" style={{ fontSize: "var(--text-h2)" }}>
              77 anos de representação da indústria plástica fluminense
            </h2>
            <p className="mt-4 text-[var(--text-muted)] leading-normal">{MISSION_STATEMENT}</p>
            <ButtonLink to="/quem-somos" variant="secondary" className="mt-6">
              Conheça nossa história <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
          <Reveal delay={100} className="grid gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="border border-[var(--border)] rounded-[var(--radius-md)] p-6 h-full transition-all duration-150 hover:border-[var(--brand-primary)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
              >
                <item.icon size={26} strokeWidth={1.6} className="text-[var(--brand-primary)]" aria-hidden="true" />
                <h3 className="mt-4 font-[var(--font-display)] font-semibold text-[var(--text)]" style={{ fontSize: "var(--text-h4)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* BENEFÍCIOS resumo */}
      <Section tone="brand" spacing="sm">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader dark eyebrow="Por que se associar" title="Força coletiva para o seu negócio crescer" lead="Representação técnica e política, benefícios exclusivos e proximidade com o ecossistema industrial fluminense." />
            <Link to="/por-que-se-associar" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Ver benefícios <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 md:hidden">
            <Link to="/por-que-se-associar" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Ver benefícios <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* AÇÕES RECENTES */}
      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Ações e eventos" title="O sindicato em movimento" lead="Participações e representações recentes do SIMPERJ junto ao setor." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {homeActions.map((action, i) => {
              const image = action.images?.[0];
              return (
                <Reveal key={action.slug} delay={i * 100} className="group relative overflow-hidden border border-[var(--border)] rounded-[var(--radius-md)] h-72">
                  {image ? (
                    <>
                      <img src={image} alt={action.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,25,38,0.05) 30%, rgba(11,25,38,0.9) 100%)" }} aria-hidden="true" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[var(--brand-primary-dark)]" aria-hidden="true" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    {!image && (action.startDate || action.location) && (
                      <p className="eyebrow text-white/60 mb-2">
                        {action.startDate ? formatDateShort(action.startDate) : ""}
                        {action.startDate && action.location ? " · " : ""}
                        {action.location ?? ""}
                      </p>
                    )}
                    <h3 className="font-[var(--font-display)] font-semibold text-white leading-snug" style={{ fontSize: "var(--text-h4)" }}>
                      {action.name}
                    </h3>
                    {action.description && <p className="mt-2 text-sm text-white/80 leading-normal max-w-md">{action.description}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/eventos" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline">
              Ver agenda completa <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* NOTÍCIAS */}
      <Section tone="brand-dark" spacing="lg">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader dark eyebrow="Notícias" title="O que está movimentando o setor" lead="Ações institucionais, pautas econômicas e conquistas do setor plástico fluminense." />
            <Link to="/noticias" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Ver todas as notícias <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90} className="[&>a]:bg-[var(--background)]">
                <NewsCard post={post} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTEÚDOS TÉCNICOS */}
      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Central de recursos" title="Materiais técnicos para sua empresa" lead="Relatórios setoriais e análises produzidas para apoiar a tomada de decisão dos associados." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredDocs.map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 100}>
                <DocumentCard document={doc} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/materiais" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline">
              Ver toda a biblioteca de materiais <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* SUSTENTABILIDADE */}
      <Section tone="secondary" spacing="lg">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-white/70">Sustentabilidade</p>
            <h2 className="mt-3 font-[var(--font-display)] font-bold leading-tight" style={{ fontSize: "var(--text-h2)" }}>
              Economia circular no centro da indústria do plástico
            </h2>
            <p className="mt-4 text-white/85 leading-normal max-w-lg">
              O SIMPERJ apoia campanhas e projetos de desenvolvimento sustentável, como o programa Sementes do Plástico, que transforma resíduos em impacto social.
            </p>
            <Link to="/sustentabilidade" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Conheça nosso compromisso <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <img src="/assets/institutional/economia-circular.jpg" alt="Ilustração de economia circular na indústria do plástico" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-[var(--radius-md)]" />
          </Reveal>
        </Container>
      </Section>

      {/* PARCEIROS */}
      <Section tone="surface" spacing="md">
        <Container>
          <p className="eyebrow text-center text-[var(--text-muted)]">Parceiros institucionais</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {PARTNERS.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA ASSOCIATIVO */}
      <section className="bg-[var(--accent)] text-white py-16 md:py-20">
        <Container className="flex flex-col items-center text-center gap-5">
          <h2 className="font-[var(--font-display)] font-bold leading-tight max-w-2xl" style={{ fontSize: "var(--text-h2)" }}>
            Faça parte do SIMPERJ
          </h2>
          <p className="text-white/90 max-w-xl" style={{ fontSize: "var(--text-body-lg)" }}>
            Junte-se a 77 anos de representação institucional da indústria do plástico no Rio de Janeiro.
          </p>
          <ButtonLink to="/associe-se" variant="secondary" className="bg-white! text-[var(--accent-dark)]! border-white! hover:bg-white/90!">
            Quero me associar <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </Container>
      </section>

      {/* CONTATO RESUMIDO */}
      <Section tone="surface" spacing="lg">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[var(--brand-primary)]">Fale com o sindicato</p>
            <h2 className="mt-3 font-[var(--font-display)] font-bold leading-tight" style={{ fontSize: "var(--text-h2)" }}>
              Tire suas dúvidas ou solicite uma conversa
            </h2>
            <p className="mt-4 text-[var(--text-muted)] leading-normal max-w-md">Nossa equipe responde em até 1 dia útil. Para atendimento imediato, utilize o WhatsApp.</p>
            <ul className="mt-8 space-y-4 text-sm text-[var(--text-muted)]">
              <li className="flex gap-3">
                <MapPin size={18} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {SITE.address}
              </li>
              <li className="flex gap-3">
                <Phone size={18} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {SITE.contacts.administrative.phone}
              </li>
              <li className="flex gap-3">
                <Mail size={18} aria-hidden="true" className="shrink-0 text-[var(--brand-primary)]" /> {SITE.email}
              </li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <ContactSummaryForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
