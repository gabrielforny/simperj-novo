import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE, LOGO } from "../data/content";

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();
  const isActive = item.children.some((c) => pathname === c.to);

  function openNow() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-[var(--color-rust-500)]" : "text-[var(--color-petrol-100)]/85 hover:text-[var(--color-paper)]"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full min-w-[15rem] border border-white/10 bg-[var(--color-petrol-950)] py-2 shadow-xl"
          role="menu"
        >
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              role="menuitem"
              className={({ isActive: active }) =>
                `block px-4 py-2.5 text-sm transition-colors duration-150 ${
                  active
                    ? "text-[var(--color-rust-500)] bg-white/5"
                    : "text-[var(--color-petrol-100)]/85 hover:bg-white/5 hover:text-[var(--color-paper)]"
                }`
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-petrol-950)]/95 backdrop-blur border-b border-white/10" : "bg-[var(--color-petrol-950)]"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-3 gap-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="SIMPERJ — página inicial">
          <img src={LOGO.white} alt="SIMPERJ" className="h-11 w-auto" loading="eager" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <DropdownItem key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[var(--color-rust-500)]" : "text-[var(--color-petrol-100)]/85 hover:text-[var(--color-paper)]"
                  }`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-sm text-[var(--color-petrol-100)]/80 hover:text-[var(--color-paper)] whitespace-nowrap"
          >
            <Phone size={16} strokeWidth={1.75} />
            {SITE.phone}
          </a>
          <Link to="/associe-se" className="btn btn-primary whitespace-nowrap">
            Associe-se
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-[var(--color-paper)] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--color-petrol-950)] max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav className="container-wide flex flex-col py-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-white/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-[var(--color-petrol-100)]/85"
                    onClick={() => setMobileGroupsOpen((s) => ({ ...s, [item.label]: !s[item.label] }))}
                    aria-expanded={!!mobileGroupsOpen[item.label]}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileGroupsOpen[item.label] ? "rotate-180" : ""}`} />
                  </button>
                  {mobileGroupsOpen[item.label] && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block py-2.5 text-sm ${isActive ? "text-[var(--color-rust-500)]" : "text-[var(--color-petrol-100)]/70"}`
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
                  className={({ isActive }) =>
                    `py-3 border-b border-white/5 text-base font-medium ${
                      isActive ? "text-[var(--color-rust-500)]" : "text-[var(--color-petrol-100)]/85"
                    }`
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link to="/associe-se" className="btn btn-primary justify-center mt-4">
              Associe-se
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
