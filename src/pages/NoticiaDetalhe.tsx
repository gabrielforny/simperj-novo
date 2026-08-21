import { Navigate, useParams } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { NewsCard } from "@/components/cards/NewsCard";
import { FacebookIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { formatDate } from "@/lib/format";
import { NEWS_POSTS } from "@/data/news";
import { SITE } from "@/data/site";

export default function NoticiaDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const post = NEWS_POSTS.find((n) => n.slug === slug);

  if (!post) return <Navigate to="/noticias" replace />;

  const related = NEWS_POSTS.filter((n) => n.slug !== slug && n.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : NEWS_POSTS.filter((n) => n.slug !== slug).slice(0, 3);
  const shareUrl = `${SITE.url}/noticias/${post.slug}`;

  return (
    <article>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/noticias/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          image: `${SITE.url}${post.image}`,
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />

      <div className="bg-[var(--brand-primary-dark)] text-[var(--text-on-brand)] pt-8 pb-14 md:pt-10 md:pb-16">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="[&_a]:text-[var(--text-on-brand-muted)] [&_span]:text-[var(--text-on-brand)] [&_a:hover]:text-white">
              <Breadcrumb items={[{ label: "Notícias", to: "/noticias" }, { label: post.title }]} />
            </div>
            <p className="eyebrow mt-6 text-white/70">{post.category}</p>
            <h1 className="mt-4 font-[var(--font-display)] font-extrabold leading-tight" style={{ fontSize: "var(--text-h1)" }}>
              {post.title}
            </h1>
            <time className="mt-6 block text-sm text-white/60" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </Reveal>
        </Container>
      </div>

      <Container className="max-w-3xl py-14 md:py-16">
        <Reveal>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] mb-10 bg-[var(--surface)]">
            <img src={post.image} alt={post.imageAlt} loading="eager" className="h-full w-full object-cover" />
          </div>

          <p className="text-[var(--text)] font-medium leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
            {post.excerpt}
          </p>

          <div className="mt-6 space-y-5 text-[var(--text)] leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--border)] flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--text-muted)]">Compartilhar:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Compartilhar no Facebook"
              className="p-2 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] rounded-[var(--radius-sm)] hover:border-[var(--brand-primary)] transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Compartilhar no X/Twitter"
              className="p-2 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] rounded-[var(--radius-sm)] hover:border-[var(--brand-primary)] transition-colors"
            >
              <XIcon size={16} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Compartilhar no LinkedIn"
              className="p-2 min-h-11 min-w-11 flex items-center justify-center border border-[var(--border)] rounded-[var(--radius-sm)] hover:border-[var(--brand-primary)] transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </Reveal>
      </Container>

      <div className="border-t border-[var(--border)] bg-[var(--surface)] py-14 md:py-16">
        <Container>
          <Badge tone="brand">Leia também</Badge>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {fallbackRelated.map((n, i) => (
              <Reveal key={n.slug} delay={i * 90}>
                <NewsCard post={n} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </article>
  );
}
