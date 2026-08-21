import { MapPin } from "lucide-react";

export default function MapSection({ query, label = "Map preview" }: { query: string; label?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-black/10 bg-crust-charcoal sm:aspect-[16/10]">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2A94C" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        <path d="M0 90 H400" stroke="#E2A94C" strokeWidth="2" opacity="0.5" />
        <path d="M0 190 H400" stroke="#E2A94C" strokeWidth="1.5" opacity="0.3" />
        <path d="M120 0 V300" stroke="#E2A94C" strokeWidth="2" opacity="0.5" />
        <path d="M280 0 V300" stroke="#E2A94C" strokeWidth="1.5" opacity="0.3" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="flex h-14 w-14 animate-floatSlow items-center justify-center rounded-full bg-crust-ember shadow-lift">
          <MapPin className="h-7 w-7 text-crust-cream" />
        </span>
        <p className="max-w-[220px] text-sm font-semibold text-crust-cream/90">{query}</p>
        <span className="text-[11px] uppercase tracking-[0.2em] text-crust-cream/50">{label}</span>
      </div>
    </div>
  );
}
