import type { Partner } from "@/types";

interface PartnerLogoProps {
  partner: Partner;
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="flex h-8 md:h-12 w-auto items-center justify-center" title={partner.name}>
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className="h-full w-auto max-w-[9rem] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}
