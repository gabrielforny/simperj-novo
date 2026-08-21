import { Link } from "react-router-dom";
import type { NewsPost } from "@/types";
import { formatDate } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";

interface NewsCardProps {
  post: NewsPost;
  priority?: boolean;
}

export function NewsCard({ post, priority = false }: NewsCardProps) {
  return (
    <Link
      to={`/noticias/${post.slug}`}
      className="group flex h-full flex-col border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden hover:shadow-[var(--shadow-md)] hover:border-[var(--border-strong)] transition-all duration-200"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge tone="brand">{post.category}</Badge>
        <h3 className="mt-3 font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug line-clamp-2" style={{ fontSize: "var(--text-h4)" }}>
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal line-clamp-3 flex-1">{post.excerpt}</p>
        <time className="mt-4 text-xs text-[var(--text-muted)]" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
