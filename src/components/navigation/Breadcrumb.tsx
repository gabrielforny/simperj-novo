import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--text-muted)]">
        <li>
          <Link to="/" className="hover:text-[var(--brand-primary)] transition-colors">
            Início
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight size={14} aria-hidden="true" />
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="hover:text-[var(--brand-primary)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--text)] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
