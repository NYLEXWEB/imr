"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, Phone, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useWhatsAppModal } from "@/context/WhatsAppModalContext";
import { CONTACT_INFO, buildWhatsAppUrl } from "@/config/contact";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppInquiryModal() {
  const { isOpen, message, closeWhatsAppModal } = useWhatsAppModal();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWhatsAppModal();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeWhatsAppModal]);

  if (!isOpen) return null;

  const europeUrl = buildWhatsAppUrl("europe", message);
  const indiaUrl = buildWhatsAppUrl("india", message);
  const uaeUrl = buildWhatsAppUrl("uae", message);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={closeWhatsAppModal}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Subtle Top Glow Banner */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />

        <div className="p-5 sm:p-7 space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] sm:text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant Regional WhatsApp Enquiry</span>
              </div>
              <h3
                id="modal-title"
                className="text-lg sm:text-2xl font-normal text-slate-900 tracking-tight"
              >
                Connect With Our Team
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Please select your designated recruitment desk below to start a direct WhatsApp conversation.
              </p>
            </div>

            <button
              onClick={closeWhatsAppModal}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition active:scale-95"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Optional Message Context Tag */}
          {message && (
            <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-2.5 text-xs text-sky-950">
              <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-medium text-[11px] text-sky-800 uppercase tracking-wider block">
                  Enquiry Topic
                </span>
                <p className="font-light text-slate-700 text-xs line-clamp-2">
                  &ldquo;{message}&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* Options Grid */}
          <div className="space-y-3">
            {/* OPTION 1: FOR EUROPEAN CLIENTS (Primary requested highlight) */}
            <a
              href={europeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeWhatsAppModal}
              className="group block p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 border-2 border-emerald-500/30 hover:border-emerald-500 hover:shadow-md transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition">
                        For European Clients
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] font-medium border border-emerald-200">
                        <span>🇪🇺 🇮🇪</span>
                        <span>Europe Desk</span>
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed">
                      Direct WhatsApp liaison for European employers, companies, and organizations.
                    </p>
                    <div className="pt-1 flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                      <span className="font-medium text-slate-800">{CONTACT_INFO.europe.phoneDisplay}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-sans flex items-center gap-1 text-[10px]">
                        <Clock className="w-3 h-3" />
                        <span>GMT / CET Hours</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white text-emerald-600 border border-emerald-200 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0 mt-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* OPTION 2: FOR INDIA */}
            <a
              href={indiaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeWhatsAppModal}
              className="group block p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform group-hover:bg-[#1d4ed8]">
                    <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#1d4ed8] transition">
                        For India
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200">
                        <span>🇮🇳</span>
                        <span>India Head Office</span>
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed">
                      Recruitment operations, candidate screening, interviews, and trade testing inquiries.
                    </p>
                    <div className="pt-1 flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                      <span className="font-medium text-slate-800">{CONTACT_INFO.india.phoneDisplay}</span>
                      <span>•</span>
                      <span className="text-sky-700 font-sans flex items-center gap-1 text-[10px]">
                        <Clock className="w-3 h-3" />
                        <span>IST Working Hours</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors flex-shrink-0 mt-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Footer note with UAE desk */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-light">
            <div className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Govt. Reg. Recruiting Agency</span>
            </div>
            <a
              href={uaeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeWhatsAppModal}
              className="hover:text-sky-600 transition flex items-center gap-1 underline decoration-slate-300"
            >
              <span>🇦🇪 UAE / Middle East Desk ({CONTACT_INFO.uae.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
