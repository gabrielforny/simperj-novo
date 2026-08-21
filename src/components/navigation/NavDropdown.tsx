import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { NavGroup } from "@/types";
import { cn } from "@/lib/cn";

interface NavDropdownProps {
  group: NavGroup;
}

export function NavDropdown({ group }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const { pathname } = useLocation();
  const isActive = group.children.some((child) => pathname === child.to);

  // Fecha o dropdown após navegar para um dos itens filhos.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function openNow() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors min-h-11",
          isActive ? "text-[var(--brand-primary)]" : "text-[var(--text)] hover:text-[var(--brand-primary)]"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={openNow}
        onFocus={openNow}
      >
        {group.label}
        <ChevronDown size={14} aria-hidden="true" className={cn("transition-transform duration-150", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full min-w-[15rem] border border-[var(--border)] bg-[var(--background)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] py-2 z-[var(--z-dropdown)]"
          role="menu"
        >
          {group.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              role="menuitem"
              className={({ isActive: active }) =>
                cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  active ? "text-[var(--brand-primary)] bg-[var(--brand-primary-light)]" : "text-[var(--text)] hover:bg-[var(--surface)]"
                )
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
