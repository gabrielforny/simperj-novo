import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV_LINKS_FLAT, SITE, LOGO } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-petrol-950)] text-[var(--color-petrol-100)]/80 border-t border-white/10">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div>
          <img src={LOGO.white} alt="SIMPERJ" className="h-10 w-auto" loading="lazy" />
          <p className="eyebrow mt-3 text-[var(--color-rust-500)]">Desde 1947</p>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Sindicato da Indústria de Material Plástico do Estado do Rio de Janeiro. Representando e fortalecendo a
            indústria de transformação de plástico fluminense.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 border border-white/15 hover:border-[var(--color-rust-500)] hover:text-[var(--color-rust-500)] transition-colors">
              <FacebookIcon size={17} />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 border border-white/15 hover:border-[var(--color-rust-500)] hover:text-[var(--color-rust-500)] transition-colors">
              <InstagramIcon size={17} />
            </a>
            <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 border border-white/15 hover:border-[var(--color-rust-500)] hover:text-[var(--color-rust-500)] transition-colors">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-[var(--color-paper)]">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS_FLAT.slice(0, 5).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-[var(--color-paper)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-[var(--color-paper)]">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS_FLAT.slice(5).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-[var(--color-paper)] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/associe-se" className="hover:text-[var(--color-paper)] transition-colors">
                Associe-se
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-[var(--color-paper)]">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>{SITE.address} — CEP {SITE.cep}</span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 mt-0.5" />
              <span>{SITE.phone}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 mt-0.5" />
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-paper)]">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-[var(--color-petrol-100)]/50">
          <p>© {new Date().getFullYear()} SIMPERJ — Sindicato da Indústria de Material Plástico do Estado do Rio de Janeiro.</p>
          <p>Projeto de apresentação — redesign institucional.</p>
        </div>
      </div>
    </footer>
  );
}
