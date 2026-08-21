import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@/data/site";
import { isNavGroup } from "@/types";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const flatGroups = NAV_ITEMS.filter(isNavGroup);

  return (
    <footer className="bg-[var(--brand-primary-dark)] text-[var(--text-on-brand-muted)] border-t border-white/10">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={SITE.logoWhite} alt="SIMPERJ" className="h-10 w-auto" />
          <p className="eyebrow mt-4 text-white/60">Desde {SITE.founded}</p>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            {SITE.fullName}. Representando e fortalecendo a indústria de transformação de plástico fluminense.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-white/15 hover:border-white/40 transition-colors">
              <FacebookIcon size={17} />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-white/15 hover:border-white/40 transition-colors">
              <InstagramIcon size={17} />
            </a>
            <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 min-h-11 min-w-11 flex items-center justify-center border border-white/15 hover:border-white/40 transition-colors">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>

        {flatGroups.map((group) => (
          <div key={group.label}>
            <h3 className="eyebrow text-white/80">{group.label}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {group.children.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="eyebrow text-white/80">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {SITE.address} — CEP {SITE.cep}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>{SITE.contacts.administrative.phone}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}.
          </p>
          <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
