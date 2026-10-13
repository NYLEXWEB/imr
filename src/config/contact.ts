export interface RegionalDesk {
  id: "europe" | "india" | "uae";
  label: string;
  shortLabel: string;
  region: string;
  phoneDisplay: string;
  phoneTel: string;
  waNumber: string;
  flag: string;
  country: string;
  description: string;
  hours: string;
  badge: string;
}

export const CONTACT_INFO: {
  europe: RegionalDesk;
  india: RegionalDesk;
  uae: RegionalDesk;
} = {
  europe: {
    id: "europe",
    label: "For European Clients",
    shortLabel: "European Clients",
    region: "Europe & Ireland Desk",
    phoneDisplay: "+353 874896695",
    phoneTel: "+353874896695",
    waNumber: "353874896695",
    flag: "🇪🇺",
    country: "Ireland / Europe",
    description: "Dedicated regional desk for European employers, corporate workforce demands, and institutional recruitment.",
    hours: "Mon – Fri (09:00 – 18:00 GMT/CET)",
    badge: "Europe Desk",
  },
  india: {
    id: "india",
    label: "For India",
    shortLabel: "India Office",
    region: "India & Asia Head Office",
    phoneDisplay: "+91 93887 70039",
    phoneTel: "+919388770039",
    waNumber: "919388770039",
    flag: "🇮🇳",
    country: "India",
    description: "Head office recruitment operations, trade testing center, candidate screening, and overseas mobilization desk.",
    hours: "Mon – Sat (09:30 – 18:30 IST)",
    badge: "India Head Office",
  },
  uae: {
    id: "uae",
    label: "For UAE / Middle East",
    shortLabel: "UAE Desk",
    region: "Middle East Operations",
    phoneDisplay: "+971 50 116 5956",
    phoneTel: "+971501165956",
    waNumber: "971501165956",
    flag: "🇦🇪",
    country: "UAE",
    description: "Authorized GCC recruitment, project staffing, and corporate employer liaison across the Middle East.",
    hours: "Sun – Thu (09:00 – 18:00 GST)",
    badge: "Middle East Desk",
  },
};

export function buildWhatsAppUrl(
  target: "europe" | "india" | "uae",
  customMessage?: string
): string {
  const desk = CONTACT_INFO[target];
  const defaultMsg =
    target === "europe"
      ? "Hello IMR European Desk, I am reaching out regarding recruitment services for European clients."
      : target === "india"
      ? "Hello IMR India Desk, I would like to inquire about recruitment and manpower services."
      : "Hello IMR UAE Desk, I would like to inquire about manpower recruitment services.";

  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${desk.waNumber}?text=${text}`;
}
