import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Handshake, ShieldCheck, GraduationCap, Recycle, MapPin, Mail, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { useCountUp } from "../hooks/useCountUp";
import { STATS, PARTNERS, NEWS, MATERIALS, SITE, TIMELINE, HIGHLIGHTS_RECENT } from "../data/content";

const HERO_IMAGE = "http://177.136.241.79/~simperjo/wp-content/uploads/2021/11/tipos-de-plasticos-2.jpg";

function StatCounter({ stat }) {
  const [setRef, display] = useCountUp(stat.value, { duration: 1800 });
  return (
    <div ref={setRef} className="border-l border-white/15 pl-5">
      <div className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-paper)] tabular-nums">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm text-[var(--color-petrol-100)]/70 leading-snug max-w-[16rem]">{stat.label}</p>
    </div>
  );
}

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Representação institucional",
    text: "Defesa técnica e política dos interesses da indústria plástica fluminense junto a órgãos públicos e federações.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação contínua",
    text: "Cursos de automação, produção e digital via parceria Firjan/SENAI, gratuitos para associados.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade setorial",
    text: "Programas de economia circular e logística reversa, como o Sementes do Plástico.",
  },
  {
    icon: Handshake,
    title: "Rede de convênios",
    text: "Descontos em saúde, educação e serviços via SESI, SENAI e sistema Firjan.",
  },
];

export default function Home() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-petrol-950)] text-[var(--color-paper)]">
        <img
          src={HERO_IMAGE}
          alt="Grânulos de matéria-prima plástica utilizados na indústria de transformação"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, rgba(7,24,32,0.97) 30%, rgba(7,24,32,0.75) 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-rust-600), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-wide relative pt-24 pb-20 md:pt-36 md:pb-28">
          <Reveal>
            <p className="eyebrow text-[var(--color-rust-500)]">Sindicato da Indústria de Material Plástico do RJ</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.03] max-w-4xl">
              Fortalecendo a indústria do plástico no Rio de Janeiro desde 1947.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-lg md:text-xl text-[var(--color-petrol-100)]/80 max-w-2xl leading-relaxed">
              O SIMPERJ representa e defende os interesses das empresas transformadoras de plástico do Estado do Rio
              de Janeiro — atuando em capacitação técnica, sustentabilidade e defesa institucional do setor.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/associe-se" className="btn btn-primary">
                Associe-se <ArrowRight size={18} />
              </Link>
              <Link to="/contato" className="btn btn-outline">
                Fale Conosco
              </Link>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE SE ASSOCIAR — resumo */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Por que se associar"
              title="Força coletiva para o seu negócio crescer"
              lead="Associar-se ao SIMPERJ significa ter representação técnica e política, acesso a benefícios exclusivos e proximidade com o ecossistema industrial fluminense."
            />
            <Reveal delay={100}>
              <Link
                to="/por-que-se-associar"
                className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-petrol-800)] hover:text-[var(--color-rust-600)] transition-colors"
              >
                Ver todos os benefícios <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card-industrial h-full p-7">
                  <item.icon size={28} strokeWidth={1.5} className="text-[var(--color-rust-600)]" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-graphite-700)]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 md:hidden">
            <Link to="/por-que-se-associar" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-petrol-800)]">
              Ver todos os benefícios <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HISTÓRIA — resumo */}
      <section className="py-20 md:py-28 bg-[var(--color-petrol-950)] text-[var(--color-paper)]">
        <div className="container-wide grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-[var(--color-rust-500)]">Nossa história</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
              77 anos de trajetória institucional
            </h2>
            <p className="mt-4 text-[var(--color-petrol-100)]/75 leading-relaxed max-w-md">
              Do pós-guerra à economia circular de hoje: conheça os marcos que consolidaram o SIMPERJ como voz da
              indústria plástica fluminense.
            </p>
            <Link to="/quem-somos" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-paper)] hover:text-[var(--color-rust-500)] transition-colors">
              Ver linha do tempo completa <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <ol className="grid gap-5 sm:grid-cols-2">
              {TIMELINE.map((entry) => (
                <li key={entry.year} className="border-l-2 border-[var(--color-rust-600)] pl-4">
                  <span className="font-display text-2xl font-semibold text-[var(--color-rust-500)]">{entry.year}</span>
                  <p className="mt-1 text-sm text-[var(--color-petrol-100)]/70 leading-snug">{entry.title}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* DESTAQUES / AÇÕES RECENTES */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading eyebrow="Ações recentes" title="O sindicato em movimento" lead="Participações, representações e eventos que marcaram a atuação do SIMPERJ junto ao setor nos últimos meses." />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {HIGHLIGHTS_RECENT.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden border border-[var(--color-line)] h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(11,43,57,0.1) 30%, rgba(7,24,32,0.92) 100%)" }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="eyebrow text-[var(--color-rust-500)]">{item.tag}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-md">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTÍCIAS */}
      <section className="py-20 md:py-28 bg-[var(--color-petrol-900)] text-[var(--color-paper)]">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              dark
              eyebrow="Notícias"
              title="O que está movimentando o setor"
              lead="Acompanhe as últimas ações institucionais, pautas econômicas e conquistas do setor plástico fluminense."
            />
            <Reveal delay={100}>
              <Link to="/noticias" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-paper)] hover:text-[var(--color-rust-500)] transition-colors">
                Ver todas as notícias <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {NEWS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  to={`/noticias/${post.slug}`}
                  className="group flex h-full flex-col border border-white/10 hover:border-[var(--color-rust-500)]/60 transition-colors duration-300"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="eyebrow text-[var(--color-rust-500)]">{post.category}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-[var(--color-rust-500)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-petrol-100)]/70 leading-relaxed flex-1">{post.excerpt}</p>
                    <time className="mt-6 text-xs text-[var(--color-petrol-100)]/50" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                    </time>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAIS EM DESTAQUE */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Central de recursos"
            title="Materiais técnicos para sua empresa"
            lead="Relatórios setoriais, guias práticos e análises produzidos para apoiar a tomada de decisão dos associados."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {MATERIALS.slice(0, 3).map((mat, i) => (
              <Reveal key={mat.title} delay={i * 100}>
                <div className="card-industrial flex h-full flex-col p-7">
                  <FileText size={24} strokeWidth={1.5} className="text-[var(--color-petrol-700)]" />
                  <span className="eyebrow mt-4 text-[var(--color-green-700)]">{mat.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)]">{mat.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-graphite-700)] leading-relaxed flex-1">{mat.desc}</p>
                  <span className="mt-6 text-sm font-semibold text-[var(--color-petrol-800)]">Baixar PDF (placeholder)</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link to="/materiais" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-petrol-800)] hover:text-[var(--color-rust-600)]">
              Ver toda a biblioteca de materiais <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="py-16 border-y border-[var(--color-line)] bg-white overflow-hidden">
        <div className="container-wide">
          <p className="eyebrow text-center text-[var(--color-graphite-500)]">Parceiros institucionais</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {PARTNERS.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO RESUMIDO */}
      <section className="py-20 md:py-28 bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[var(--color-rust-500)]">Fale com o sindicato</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">Tire suas dúvidas ou solicite uma conversa</h2>
            <p className="mt-4 text-[var(--color-petrol-100)]/70 leading-relaxed max-w-md">
              Nossa equipe responde em até 1 dia útil. Para atendimento imediato, utilize o WhatsApp.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[var(--color-rust-500)]" />
                {SITE.address}
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-[var(--color-rust-500)]" />
                {SITE.phone}
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-[var(--color-rust-500)]" />
                {SITE.email}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="border border-[var(--color-green-600)] p-8 text-center">
                <p className="font-display text-xl font-semibold text-[var(--color-green-500)]">Mensagem enviada!</p>
                <p className="mt-2 text-sm text-[var(--color-petrol-100)]/70">
                  Este é um formulário de demonstração — nenhum dado foi enviado de verdade.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    id="home-name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-[var(--color-rust-500)] outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium mb-2">E-mail</label>
                  <input
                    id="home-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-[var(--color-rust-500)] outline-none"
                    placeholder="voce@empresa.com.br"
                  />
                </div>
                <div>
                  <label htmlFor="home-message" className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    id="home-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-[var(--color-rust-500)] outline-none resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center">
                  Enviar mensagem
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
