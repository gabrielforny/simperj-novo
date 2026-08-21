import { FileText, Download } from "lucide-react";
import type { DocumentItem } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface DocumentCardProps {
  document: DocumentItem;
}

export function DocumentCard({ document }: DocumentCardProps) {
  return (
    <div className="h-full flex flex-col border border-[var(--border)] rounded-[var(--radius-md)] p-5">
      <div className="flex items-center justify-between">
        <FileText size={24} aria-hidden="true" className="text-[var(--brand-primary)]" />
        <Badge tone="neutral">{document.year}</Badge>
      </div>
      <Badge tone="secondary" className="mt-4 self-start">
        {document.category}
      </Badge>
      <h3 className="mt-2 font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug" style={{ fontSize: "var(--text-h4)" }}>
        {document.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--text-muted)] leading-normal flex-1">{document.description}</p>
      <a
        href={document.file}
        download
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-primary-dark)] self-start"
      >
        <Download size={16} aria-hidden="true" /> Baixar PDF
      </a>
    </div>
  );
}
