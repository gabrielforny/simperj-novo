import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string | undefined;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="border-t border-[var(--border)]">
      {items.map((item) => (
        <AccordionRow key={item.id} item={item} open={openId === item.id} onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))} />
      ))}
    </div>
  );
}

function AccordionRow({ item, open, onToggle }: { item: AccordionItemData; open: boolean; onToggle: () => void }) {
  const panelId = useId();

  return (
    <div className="border-b border-[var(--border)]">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-[var(--font-display)] font-semibold text-[var(--text)] hover:text-[var(--brand-primary)] transition-colors min-h-11"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          style={{ fontSize: "var(--text-h4)" }}
        >
          {item.title}
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={cn("shrink-0 transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-[var(--ease-standard)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-[var(--text-muted)] leading-[var(--leading-normal)]">{item.content}</div>
        </div>
      </div>
    </div>
  );
}
