import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import type { EventItem } from "@/types";
import { Badge } from "@/components/ui/Badge";

const STATUS_LABEL: Record<EventItem["status"], string> = {
  aberto: "Em agenda",
  "em-breve": "Em breve",
  encerrado: "Encerrado",
};

const STATUS_TONE: Record<EventItem["status"], "success" | "neutral" | "warning"> = {
  aberto: "success",
  "em-breve": "neutral",
  encerrado: "warning",
};

function formatRange(start?: string, end?: string): string | null {
  if (!start) return null;
  const opts: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" };
  const startLabel = new Date(`${start}T00:00:00`).toLocaleDateString("pt-BR", opts);
  if (!end || end === start) return startLabel;
  const endLabel = new Date(`${end}T00:00:00`).toLocaleDateString("pt-BR", opts);
  return `${startLabel} — ${endLabel}`;
}

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const range = formatRange(event.startDate, event.endDate);

  return (
    <div className="h-full border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-[var(--font-display)] font-semibold text-[var(--text)] leading-snug" style={{ fontSize: "var(--text-h4)" }}>
          {event.name}
        </h3>
        <Badge tone={STATUS_TONE[event.status]} className="shrink-0">
          {STATUS_LABEL[event.status]}
        </Badge>
      </div>

      {event.description && <p className="text-sm text-[var(--text-muted)] leading-normal">{event.description}</p>}

      <div className="mt-auto space-y-1.5 pt-2 text-sm text-[var(--text-muted)]">
        {range && (
          <p className="flex items-center gap-2">
            <CalendarDays size={16} aria-hidden="true" className="shrink-0" /> {range}
          </p>
        )}
        {event.location && (
          <p className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" className="shrink-0" /> {event.location}
          </p>
        )}
      </div>

      {event.url && (
        <a
          href={event.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline mt-1"
        >
          Ver site do evento <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
