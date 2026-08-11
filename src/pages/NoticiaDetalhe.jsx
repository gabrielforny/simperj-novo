import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import { NEWS } from "../data/content";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const post = NEWS.find((n) => n.slug === slug);

  if (!post) return <Navigate to="/noticias" replace />;

  const others = NEWS.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <article className="bg-[var(--color-paper)]">
      <div className="bg-[var(--color-petrol-950)] text-[var(--color-paper)] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm text-[var(--color-petrol-100)]/70 hover:text-[var(--color-paper)]">
              <ArrowLeft size={16} /> Voltar para notícias
            </Link>
            <p className="eyebrow mt-6 text-[var(--color-rust-500)]">{post.category}</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">{post.title}</h1>
            <time className="mt-6 block text-sm text-[var(--color-petrol-100)]/60" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
          </Reveal>
        </div>
      </div>

      <div className="container-wide max-w-3xl py-16 md:py-20">
        <Reveal>
          <div className="aspect-[16/9] w-full overflow-hidden mb-10">
            <img src={post.image} alt={post.title} loading="eager" className="h-full w-full object-cover" />
          </div>
          <p className="text-lg leading-relaxed text-[var(--color-graphite-700)] font-medium">{post.excerpt}</p>
          <div className="mt-8 space-y-6 text-[var(--color-ink)] leading-relaxed">
            <p>
              O SIMPERJ acompanha de perto os desdobramentos deste tema, que impacta diretamente as empresas
              associadas do setor de transformação de plástico no Rio de Janeiro. A entidade reforça seu compromisso
              com a representação técnica e institucional da cadeia produtiva.
            </p>
            <p>
              Este é um conteúdo de demonstração produzido a partir de informações públicas do site atual do SIMPERJ,
              usado como placeholder editorial para a apresentação do redesign. O texto completo do artigo será
              inserido após a aprovação do layout.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-[var(--color-line)] py-16 md:py-20 bg-white">
        <div className="container-wide">
          <h2 className="eyebrow text-[var(--color-petrol-800)]">Leia também</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((n, i) => (
              <Reveal key={n.slug} delay={i * 90}>
                <Link to={`/noticias/${n.slug}`} className="block card-industrial h-full">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="eyebrow text-[var(--color-green-700)]">{n.category}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)] leading-snug">{n.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
