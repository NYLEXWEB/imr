"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useWhatsAppModal } from "@/context/WhatsAppModalContext";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-24 lg:py-28 border-b border-slate-200/90 overflow-hidden">
      {/* Subtle Ambient Radial Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
        {/* Subtle Trust Badge Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[11px] sm:text-xs font-medium shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
          <span>AIRAA Member</span>
          <span className="text-slate-300">•</span>
          <span>MEA Govt. Approved</span>
          <span className="text-slate-300">•</span>
          <span className="text-sky-700 font-semibold">European Mobility</span>
        </div>

        {/* Executive Centered Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 max-w-4xl mx-auto leading-[1.14]">
            International Manpower Resources <br className="hidden sm:inline" />
            <span className="text-sky-600 font-bold">& Healthcare Recruiters</span>
          </h1>

          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-slate-500 pt-1">
            INDIAN MANPOWER RESOURCE (IMR) • SOURCING TO EUROPE, UK & WORLDWIDE
          </p>
        </div>

        {/* Focused Centered Description */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
          Connecting premier global employers across Ireland, Europe, the UK, and the GCC with verified, pre-screened talent across Healthcare, Logistics, Engineering, and Critical Industries.
        </p>

        {/* 2 Centered Useful Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Button 1: European Corridors */}
          <Link
            href="/europe"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0a2540] hover:bg-slate-900 text-white text-xs sm:text-sm font-medium transition shadow-md active:scale-95 text-center group"
          >
            <span>European Talent Corridors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Button 2: Direct WhatsApp Regional Desk */}
          <button
            type="button"
            onClick={() =>
              openWhatsAppModal({
                message: "Hello IMR, I would like to inquire about recruitment and manpower services.",
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition shadow-md active:scale-95 text-center"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Regional Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
}
