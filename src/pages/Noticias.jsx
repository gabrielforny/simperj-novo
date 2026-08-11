import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { NEWS } from "../data/content";

export default function Noticias() {
  const [featured, ...rest] = NEWS;

  return (
    <>
      <PageHero
        eyebrow="Notícias"
        title="O que está movimentando o setor plástico"
        lead="Cobertura institucional de ações do sindicato, indicadores econômicos e pautas relevantes para a indústria de transformação de plástico."
      />

      <section className="py-20 md:py-28 bg-[var(--color-paper)]">
        <div className="container-wide grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            {featured && (
              <Reveal>
                <Link to={`/noticias/${featured.slug}`} className="group grid gap-0 border border-[var(--color-line)] hover:border-[var(--color-petrol-700)] transition-colors md:grid-cols-2">
                  <div className="aspect-[16/10] md:aspect-auto md:h-full w-full overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="eyebrow text-[var(--color-rust-600)]">{featured.category}</span>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--color-ink)] leading-tight group-hover:text-[var(--color-petrol-800)] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-[var(--color-graphite-700)] leading-relaxed">{featured.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <time className="text-xs text-[var(--color-graphite-500)]" dateTime={featured.date}>
                        {new Date(featured.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                      </time>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-petrol-800)]">
                        Leia mais <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 90}>
                  <Link to={`/noticias/${post.slug}`} className="group flex h-full flex-col card-industrial">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="eyebrow text-[var(--color-green-700)]">{post.category}</span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)] leading-snug flex-1 group-hover:text-[var(--color-petrol-800)] transition-colors">
                        {post.title}
                      </h3>
                      <time className="mt-5 text-xs text-[var(--color-graphite-500)]" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                      </time>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <aside className="border border-[var(--color-line)] p-6">
              <h3 className="eyebrow text-[var(--color-petrol-800)]">Arquivo recente</h3>
              <ul className="mt-5 space-y-4">
                {NEWS.map((post) => (
                  <li key={post.slug} className="border-b border-[var(--color-line)] pb-4 last:border-0 last:pb-0">
                    <Link to={`/noticias/${post.slug}`} className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-rust-600)] leading-snug">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
