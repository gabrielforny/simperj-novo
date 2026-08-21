import { SITE } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function WhatsAppButton() {
  const digits = SITE.contacts.administrative.phone.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/55${digits}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[var(--z-toast)] flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 min-h-11 shadow-[var(--shadow-lg)] hover:bg-[#1EBE5A] transition-colors duration-150"
      aria-label="Falar com o SIMPERJ pelo WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
    </a>
  );
}
