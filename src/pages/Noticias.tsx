import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Seo } from "@/components/layout/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { NewsCard } from "@/components/cards/NewsCard";
import { cn } from "@/lib/cn";
import { NEWS_POSTS, NEWS_CATEGORIES } from "@/data/news";

const PAGE_SIZE = 9;

export default function Noticias() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...NEWS_POSTS]
      .filter((post) => {
        const matchesCategory = category === "Todas" || post.category === category;
        const matchesQuery = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(0, page * PAGE_SIZE);

  function handleFilterChange(fn: () => void) {
    fn();
    setPage(1);
  }

  return (
    <>
      <Seo
        title="Notícias"
        description="Cobertura institucional de ações do SIMPERJ, indicadores econômicos e pautas do setor de transformação de plástico."
        path="/noticias"
      />
      <PageHero
        eyebrow="Notícias"
        title="O que está movimentando o setor plástico"
        lead="Ações institucionais, indicadores econômicos e pautas relevantes para a indústria de transformação de plástico."
        breadcrumb={[{ label: "Notícias" }]}
      />

      <Section spacing="lg">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search size={18} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="search"
                value={query}
                onChange={(e) => handleFilterChange(() => setQuery(e.target.value))}
                placeholder="Buscar notícias…"
                aria-label="Buscar notícias"
                className="w-full min-h-11 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--background)] pl-10 pr-4 py-2.5 text-sm focus:border-[var(--brand-primary)] outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categoria">
              {["Todas", ...NEWS_CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => handleFilterChange(() => setCategory(cat))}
                  className={cn(
                    "px-3.5 py-2 min-h-11 text-sm font-medium border rounded-[var(--radius-sm)] transition-colors",
                    category === cat ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]" : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand-primary)]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {paged.length === 0 ? (
            <p className="mt-14 text-center text-sm text-[var(--text-muted)]">Nenhuma notícia encontrada para esse filtro.</p>
          ) : (
            <>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paged.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 6) * 60}>
                    <NewsCard post={post} />
                  </Reveal>
                ))}
              </div>
              {page < totalPages && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setPage((p) => p + 1)}
                    className="px-5 py-2.5 min-h-11 text-sm font-semibold border border-[var(--border-strong)] rounded-[var(--radius-md)] hover:border-[var(--brand-primary)] transition-colors"
                  >
                    Carregar mais notícias
                  </button>
                </div>
              )}
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
