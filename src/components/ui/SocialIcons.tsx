interface IconProps {
  size?: number;
}

export function FacebookIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 26 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.006 3 3.334 8.67 3.334 15.667c0 2.34.63 4.53 1.73 6.42L3 29l7.09-1.86a12.6 12.6 0 0 0 5.91 1.5h.005c6.998 0 12.67-5.67 12.67-12.667C28.675 8.67 23.003 3 16.004 3zm6.212 15.16c-.27.756-1.567 1.446-2.16 1.532-.552.08-1.243.114-2.006-.126-.462-.146-1.056-.34-1.816-.667-3.198-1.38-5.29-4.588-5.45-4.803-.16-.216-1.306-1.737-1.306-3.314 0-1.577.828-2.352 1.122-2.674.294-.322.641-.402.855-.402.213 0 .428.002.615.011.198.01.463-.075.724.552.27.646.919 2.223.999 2.386.08.163.133.353.027.568-.107.216-.16.35-.32.539-.16.19-.336.423-.48.568-.16.16-.327.334-.14.656.187.322.83 1.37 1.782 2.221 1.224 1.093 2.256 1.43 2.578 1.59.322.16.51.134.699-.081.187-.216.802-.936 1.016-1.258.213-.322.428-.268.723-.161.294.107 1.868.882 2.189 1.043.32.16.535.242.615.376.08.135.08.777-.19 1.533z" />
    </svg>
  );
}
