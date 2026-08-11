import { SITE } from "../data/content";

function WhatsAppGlyph({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.006 3 3.334 8.67 3.334 15.667c0 2.34.63 4.53 1.73 6.42L3 29l7.09-1.86a12.6 12.6 0 0 0 5.91 1.5h.005c6.998 0 12.67-5.67 12.67-12.667C28.675 8.67 23.003 3 16.004 3zm6.212 15.16c-.27.756-1.567 1.446-2.16 1.532-.552.08-1.243.114-2.006-.126-.462-.146-1.056-.34-1.816-.667-3.198-1.38-5.29-4.588-5.45-4.803-.16-.216-1.306-1.737-1.306-3.314 0-1.577.828-2.352 1.122-2.674.294-.322.641-.402.855-.402.213 0 .428.002.615.011.198.01.463-.075.724.552.27.646.919 2.223.999 2.386.08.163.133.353.027.568-.107.216-.16.35-.32.539-.16.19-.336.423-.48.568-.16.16-.327.334-.14.656.187.322.83 1.37 1.782 2.221 1.224 1.093 2.256 1.43 2.578 1.59.322.16.51.134.699-.081.187-.216.802-.936 1.016-1.258.213-.322.428-.268.723-.161.294.107 1.868.882 2.189 1.043.32.16.535.242.615.376.08.135.08.777-.19 1.533z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const digits = SITE.phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/55${digits}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-lg hover:bg-[#1EBE5A] transition-colors duration-200"
      style={{ boxShadow: "0 6px 20px rgba(37, 211, 102, 0.45)" }}
      aria-label="Falar com o SIMPERJ pelo WhatsApp"
    >
      <WhatsAppGlyph size={26} />
      <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
    </a>
  );
}
