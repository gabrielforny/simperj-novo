import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@/data/site";
import { isNavGroup } from "@/types";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-[var(--z-sticky-header)] bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
      <div className="container-wide flex items-center justify-between h-18 py-3 gap-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="SIMPERJ — página inicial">
          <img src={SITE.logoColor} alt="SIMPERJ" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) =>
            isNavGroup(item) ? (
              <NavDropdown key={item.label} group={item} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium transition-colors min-h-11 flex items-center",
                    isActive ? "text-[var(--brand-primary)]" : "text-[var(--text)] hover:text-[var(--brand-primary)]"
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block shrink-0">
          <ButtonLink to="/associe-se" variant="primary">
            Associe-se
          </ButtonLink>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-[var(--text)] min-h-11 min-w-11 flex items-center justify-center"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)] max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav className="container-wide flex flex-col py-3" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) =>
              isNavGroup(item) ? (
                <div key={item.label} className="border-b border-[var(--border)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 min-h-11 text-base font-medium text-[var(--text)]"
                    aria-expanded={Boolean(openGroups[item.label])}
                    onClick={() => setOpenGroups((s) => ({ ...s, [item.label]: !s[item.label] }))}
                  >
                    {item.label}
                    <ChevronDown size={18} aria-hidden="true" className={cn("transition-transform", openGroups[item.label] && "rotate-180")} />
                  </button>
                  {openGroups[item.label] && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            cn("block py-2.5 min-h-11 flex items-center text-sm", isActive ? "text-[var(--brand-primary)]" : "text-[var(--text-muted)]")
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "py-3 min-h-11 flex items-center border-b border-[var(--border)] text-base font-medium",
                      isActive ? "text-[var(--brand-primary)]" : "text-[var(--text)]"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <ButtonLink to="/associe-se" variant="primary" className="justify-center mt-4">
              Associe-se
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
