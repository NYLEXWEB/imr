import React from "react";

export interface FlagProps {
  className?: string;
}

// 1. Romania Flag (Vertical Tricolor: Blue, Yellow, Red)
export function RomaniaFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Romania"
    >
      <rect width="100" height="200" fill="#002B7F" />
      <rect x="100" width="100" height="200" fill="#FCD116" />
      <rect x="200" width="100" height="200" fill="#CE1126" />
    </svg>
  );
}

// 2. Germany Flag (Horizontal Tricolor: Black, Red, Gold)
export function GermanyFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Germany"
    >
      <rect width="300" height="66.7" fill="#000000" />
      <rect y="66.7" width="300" height="66.7" fill="#DD0000" />
      <rect y="133.4" width="300" height="66.7" fill="#FFCE00" />
    </svg>
  );
}

// 3. Ireland Flag (Vertical Tricolor: Green, White, Orange)
export function IrelandFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Ireland"
    >
      <rect width="100" height="200" fill="#169B62" />
      <rect x="100" width="100" height="200" fill="#FFFFFF" />
      <rect x="200" width="100" height="200" fill="#FF883E" />
    </svg>
  );
}

// 4. Poland Flag (Horizontal Bicolor: White, Red)
export function PolandFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Poland"
    >
      <rect width="300" height="100" fill="#FFFFFF" />
      <rect y="100" width="300" height="100" fill="#DC143C" />
    </svg>
  );
}

// 5. Greece Flag (9 Alternating Stripes + Blue Canton Cross)
export function GreeceFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Greece"
    >
      {/* 9 Stripes */}
      <rect width="300" height="22.2" fill="#0D5EAF" />
      <rect y="22.2" width="300" height="22.2" fill="#FFFFFF" />
      <rect y="44.4" width="300" height="22.2" fill="#0D5EAF" />
      <rect y="66.6" width="300" height="22.2" fill="#FFFFFF" />
      <rect y="88.8" width="300" height="22.2" fill="#0D5EAF" />
      <rect y="111" width="300" height="22.2" fill="#FFFFFF" />
      <rect y="133.2" width="300" height="22.2" fill="#0D5EAF" />
      <rect y="155.4" width="300" height="22.2" fill="#FFFFFF" />
      <rect y="177.6" width="300" height="22.4" fill="#0D5EAF" />
      {/* Blue Canton */}
      <rect width="111.1" height="111.1" fill="#0D5EAF" />
      {/* White Cross */}
      <rect x="44.4" width="22.2" height="111.1" fill="#FFFFFF" />
      <rect y="44.4" width="111.1" height="22.2" fill="#FFFFFF" />
    </svg>
  );
}

// 6. Bulgaria Flag (Horizontal Tricolor: White, Green, Red)
export function BulgariaFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Bulgaria"
    >
      <rect width="300" height="66.7" fill="#FFFFFF" />
      <rect y="66.7" width="300" height="66.7" fill="#00966E" />
      <rect y="133.4" width="300" height="66.7" fill="#D62612" />
    </svg>
  );
}

// 7. Lithuania Flag (Horizontal Tricolor: Yellow, Green, Red)
export function LithuaniaFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of Lithuania"
    >
      <rect width="300" height="66.7" fill="#FDB913" />
      <rect y="66.7" width="300" height="66.7" fill="#006A44" />
      <rect y="133.4" width="300" height="66.7" fill="#C1272D" />
    </svg>
  );
}

// 8. United Kingdom Flag (Union Jack)
export function UKFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 60 30"
      overflow="hidden"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of the United Kingdom"
    >
      <rect width="60" height="30" fill="#012169" />
      {/* White Diagonals */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      {/* Red Diagonals */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      {/* White Cross */}
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      {/* Red Cross */}
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

// 9. European Union Flag (12 Gold Stars on European Blue)
export function EuropeFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of the European Union"
    >
      <rect width="300" height="200" fill="#003399" />
      {/* 12 Stars arranged around center (150, 100) with radius 60 */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 150 + 60 * Math.sin(rad);
        const cy = 100 - 60 * Math.cos(rad);
        return (
          <polygon
            key={idx}
            fill="#FFCC00"
            points={`
              ${cx},${cy - 8}
              ${cx + 2.4},${cy - 2.5}
              ${cx + 8},${cy - 2.5}
              ${cx + 3.4},${cy + 1}
              ${cx + 5.2},${cy + 6.8}
              ${cx},${cy + 3.4}
              ${cx - 5.2},${cy + 6.8}
              ${cx - 3.4},${cy + 1}
              ${cx - 8},${cy - 2.5}
              ${cx - 2.4},${cy - 2.5}
            `}
          />
        );
      })}
    </svg>
  );
}

// 10. India Flag (Saffron, White, Green with Ashoka Chakra)
export function IndiaFlag({ className = "w-6 h-4" }: FlagProps) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`inline-block rounded-xs shadow-2xs border border-slate-300/50 object-cover shrink-0 ${className}`}
      aria-label="Flag of India"
    >
      <rect width="300" height="66.7" fill="#FF9933" />
      <rect y="66.7" width="300" height="66.7" fill="#FFFFFF" />
      <rect y="133.4" width="300" height="66.7" fill="#138808" />
      {/* Ashoka Chakra */}
      <circle cx="150" cy="100" r="22" fill="none" stroke="#000080" strokeWidth="2.5" />
      <circle cx="150" cy="100" r="3.5" fill="#000080" />
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map(
        (deg, i) => (
          <line
            key={i}
            x1="150"
            y1="100"
            x2={150 + 22 * Math.cos((deg * Math.PI) / 180)}
            y2={100 + 22 * Math.sin((deg * Math.PI) / 180)}
            stroke="#000080"
            strokeWidth="1.2"
          />
        )
      )}
    </svg>
  );
}

// Country Code Resolver Component
export function CountryFlag({
  code,
  className = "w-6 h-4",
}: {
  code: string;
  className?: string;
}) {
  const normalized = code.toLowerCase().trim();
  switch (normalized) {
    case "romania":
    case "ro":
      return <RomaniaFlag className={className} />;
    case "germany":
    case "de":
      return <GermanyFlag className={className} />;
    case "ireland":
    case "ie":
      return <IrelandFlag className={className} />;
    case "poland":
    case "pl":
      return <PolandFlag className={className} />;
    case "greece":
    case "gr":
      return <GreeceFlag className={className} />;
    case "bulgaria":
    case "bg":
      return <BulgariaFlag className={className} />;
    case "lithuania":
    case "lt":
      return <LithuaniaFlag className={className} />;
    case "uk":
    case "united kingdom":
    case "gb":
      return <UKFlag className={className} />;
    case "india":
    case "in":
      return <IndiaFlag className={className} />;
    case "europe":
    case "eu":
    default:
      return <EuropeFlag className={className} />;
  }
}
