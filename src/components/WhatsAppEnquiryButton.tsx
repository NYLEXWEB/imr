"use client";

import React from "react";
import { useWhatsAppModal } from "@/context/WhatsAppModalContext";
import { buildWhatsAppUrl } from "@/config/contact";
import { ArrowUpRight } from "lucide-react";

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export type WhatsAppButtonVariant =
  | "emerald"
  | "dark"
  | "outline"
  | "subtle"
  | "modal"
  | "service-card"
  | "hero-pill"
  | "banner";

export interface WhatsAppEnquiryButtonProps {
  message?: string;
  label?: string;
  variant?: WhatsAppButtonVariant;
  className?: string;
  showBadge?: boolean;
  showArrow?: boolean;
}

export default function WhatsAppEnquiryButton({
  message = "Hello IMR, I have an inquiry regarding recruitment services.",
  label = "WhatsApp Enquiry",
  variant = "emerald",
  className = "",
  showBadge = false,
  showArrow = false,
}: WhatsAppEnquiryButtonProps) {
  const { openWhatsAppModal } = useWhatsAppModal();

  const europeUrl = buildWhatsAppUrl("europe", message);
  const indiaUrl = buildWhatsAppUrl("india", message);

  // Variant: Service Card action with quick regional choice
  if (variant === "service-card") {
    return (
      <div className="space-y-1.5 w-full">
        <button
          type="button"
          onClick={() => openWhatsAppModal({ message })}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#050811] hover:bg-slate-800 text-white text-xs font-medium transition active:scale-95 shadow-2xs group"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
          <span className="text-white">{label}</span>
          <span className="text-[10px] text-emerald-300 font-normal px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
            Europe & India
          </span>
        </button>

        {/* Quick direct regional sub-links */}
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <a
            href={europeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/70 transition font-medium text-center"
            title="Direct WhatsApp with European Desk"
          >
            <span>🇪🇺 For Europe</span>
          </a>
          <a
            href={indiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition text-center font-medium"
            title="Direct WhatsApp with India Head Office"
          >
            <span>🇮🇳 For India</span>
          </a>
        </div>
      </div>
    );
  }

  // Variant: Hero Pill with direct European Clients & India split
  if (variant === "hero-pill") {
    return (
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="relative inline-flex items-center rounded-full bg-white border border-slate-300 shadow-sm p-1">
          <button
            type="button"
            onClick={() => openWhatsAppModal({ message })}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-slate-800 font-medium hover:bg-slate-50 transition"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-slate-800">{label}:</span>
          </button>

          <a
            href={europeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium transition shadow-2xs"
          >
            <span>🇪🇺 For European Clients</span>
          </a>

          <a
            href={indiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-slate-100 text-slate-700 text-[11px] font-normal transition"
          >
            <span>🇮🇳 For India</span>
          </a>
        </div>
      </div>
    );
  }

  // Variant: Banner dual actions
  if (variant === "banner") {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
        <a
          href={europeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition shadow-sm active:scale-95"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span className="text-white">WhatsApp: For European Clients</span>
        </a>

        <a
          href={indiaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-medium border border-slate-300 transition active:scale-95 shadow-2xs"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-slate-800">WhatsApp: For India</span>
        </a>
      </div>
    );
  }

  // Determine button color style based on variant and classes passed
  // Priority: explicit dark / explicit emerald / subtle / outline
  const isDark =
    variant === "dark" ||
    className.includes("bg-slate-900") ||
    className.includes("bg-slate-800") ||
    className.includes("bg-[#050811]") ||
    className.includes("bg-[#0a0f1d]");

  const isSubtle =
    variant === "subtle" ||
    className.includes("bg-slate-50") ||
    className.includes("bg-emerald-50");

  const isOutline =
    variant === "outline" ||
    (className.includes("bg-white") && !className.includes("bg-emerald-"));

  // Default theme is vibrant Emerald (the recognizable, highest-converting WhatsApp look)
  let themeButtonClasses = "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/25";
  let themeIconClasses = "text-white";
  let themeLabelClasses = "text-white font-medium";

  if (isDark) {
    themeButtonClasses = "bg-[#0a0f1d] hover:bg-slate-800 text-white border border-slate-800 shadow-sm";
    themeIconClasses = "text-emerald-400";
    themeLabelClasses = "text-white font-medium";
  } else if (isSubtle) {
    themeButtonClasses = "bg-emerald-50/90 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/90";
    themeIconClasses = "text-emerald-600";
    themeLabelClasses = "text-emerald-900 font-medium";
  } else if (isOutline) {
    themeButtonClasses = "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs";
    themeIconClasses = "text-emerald-600";
    themeLabelClasses = "text-slate-800 font-medium";
  }

  // Clean caller className from conflicting backgrounds or text colors
  // to avoid CSS specificity conflicts
  const sanitizedCallerClasses = className
    .replace(/\b(bg-white|bg-emerald-600|bg-emerald-700|bg-slate-900|bg-slate-800|bg-slate-50|bg-emerald-50)\b/g, "")
    .replace(/\b(text-white|text-slate-800|text-slate-700|text-slate-900)\b/g, "")
    .trim();

  return (
    <button
      type="button"
      onClick={() => openWhatsAppModal({ message })}
      className={`group inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition active:scale-95 text-center ${themeButtonClasses} ${sanitizedCallerClasses}`}
    >
      <WhatsAppIcon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${themeIconClasses}`} />
      <span className={themeLabelClasses}>{label}</span>

      {showArrow && (
        <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity ${themeIconClasses}`} />
      )}

      {showBadge && (
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-medium backdrop-blur-xs shrink-0">
          Europe & India
        </span>
      )}
    </button>
  );
}
