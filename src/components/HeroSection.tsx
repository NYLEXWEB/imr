"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useWhatsAppModal } from "@/context/WhatsAppModalContext";
import { buildWhatsAppUrl, CONTACT_INFO } from "@/config/contact";
import {
  IrelandFlag,
  UAEFlag,
  IndiaFlag,
  EuropeFlag,
} from "@/components/ui/CountryFlags";
import { WhatsAppIcon } from "@/components/WhatsAppEnquiryButton";

export default function HeroSection() {
  const { openWhatsAppModal } = useWhatsAppModal();

  const europeWa = buildWhatsAppUrl(
    "europe",
    "Hello IMR European Desk, we are an employer in Europe interested in recruiting Asian workers."
  );
  const uaeWa = buildWhatsAppUrl(
    "uae",
    "Hello IMR UAE Desk, we are an employer in the GCC interested in workforce recruitment."
  );
  const indiaWa = buildWhatsAppUrl(
    "india",
    "Hello IMR India Desk, I would like to inquire about recruitment and manpower services."
  );

  return (
    <section className="relative bg-white text-slate-900 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-slate-200/90 overflow-hidden">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-sky-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* TOP: Highlighted IMR Emblem & Official Accreditation Pill */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Government & Association Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-[11px] sm:text-xs font-medium shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Govt. of India MEA Reg: <strong className="text-slate-900 font-semibold">B1157/KER/PART/200/5/9681</strong></span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-sky-800 font-medium">AIRAA Official Member</span>
          </div>

          {/* Prominently Highlighted IMR Emblem */}
          <div className="pt-1">
            <div className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-44 h-12 sm:w-56 sm:h-14">
                <Image
                  src="/images/assets/imr_logo.png"
                  alt="Indian Manpower Resource (IMR) Official Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* EXACT CLIENT CAPTION / HEADLINE */}
          <div className="space-y-3 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-950 tracking-tight leading-[1.14]">
              We Are Recruiting <br className="hidden sm:inline" />
              <span className="font-semibold text-slate-900">Asian Workers</span>{" "}
              <span className="font-normal text-sky-700">To All Over The World</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              Connecting verified, trade-tested Asian professionals, healthcare specialists, and technicians with authorized employers across Europe, the UK, the Middle East, and worldwide.
            </p>
          </div>

          {/* 2 Focused Hero Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() =>
                openWhatsAppModal({
                  message: "Hello IMR, I would like to inquire about workforce recruitment.",
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition shadow-md shadow-emerald-600/25 active:scale-95 text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>Connect on WhatsApp</span>
            </button>

            <Link
              href="/europe"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0a2540] hover:bg-slate-900 text-white text-xs sm:text-sm font-medium transition shadow-sm active:scale-95 text-center group"
            >
              <EuropeFlag className="w-4.5 h-3 rounded-xs shrink-0" />
              <span>Explore European Corridors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 INTERNATIONAL HUBS & DIRECT CONTACT CARDS (Requested by Client in Audio Note) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-600" />
              <h2 className="text-xs sm:text-sm font-medium text-slate-900 uppercase tracking-wider">
                Direct Global Administration & Operational Desks
              </h2>
            </div>
            <span className="text-[11px] text-slate-400 font-light hidden sm:inline">
              Ireland • United Arab Emirates • India
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* 1. IRELAND / EUROPE */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <IrelandFlag className="w-7 h-5 rounded-xs shadow-2xs" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">IMR HR</h3>
                      <span className="text-[10px] text-emerald-700 font-medium block">
                        Europe & Ireland Desk
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    EU Liaison
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-600 font-light leading-relaxed">
                  <p className="font-normal text-slate-800">
                    18 Bramble Lane, Limerick Road,
                  </p>
                  <p>Ennis, Co. Clare, Ireland</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-light">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Mon – Fri (09:00 – 18:00 GMT/CET)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href="tel:+353874896695"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-medium border border-slate-200 transition"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+353 874896695</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-light">Call Desk</span>
                </a>

                <a
                  href={europeWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Ireland Desk</span>
                </a>
              </div>
            </div>

            {/* 2. UAE / MIDDLE EAST */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <UAEFlag className="w-7 h-5 rounded-xs shadow-2xs" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">IMR HR FZ-LLC</h3>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        UAE & Middle East Hub
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    GCC Operations
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-600 font-light leading-relaxed">
                  <p className="font-normal text-slate-800">
                    Sharjah Free Zone (SAIF Zone),
                  </p>
                  <p>Sharjah & Dubai, United Arab Emirates</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-light">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Sun – Thu (09:00 – 18:00 GST)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href="tel:+971501165956"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-medium border border-slate-200 transition"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+971 50 116 5956</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-light">Call Desk</span>
                </a>

                <a
                  href={uaeWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp UAE Desk</span>
                </a>
              </div>
            </div>

            {/* 3. INDIA / ASIA HQ */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <IndiaFlag className="w-7 h-5 rounded-xs shadow-2xs" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Indian Manpower Resource
                      </h3>
                      <span className="text-[10px] text-sky-700 font-medium block">
                        India & Asia Head Office
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                    MEA Registered
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-600 font-light leading-relaxed">
                  <p className="font-normal text-slate-800">
                    Vyapar Bhavan Building, Bank Junction,
                  </p>
                  <p>Angamaly, Ernakulam, Kerala – 683572, India</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-light">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Mon – Sat (09:30 – 18:30 IST)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <a
                  href="tel:+919388770039"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-medium border border-slate-200 transition"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+91 93887 70039</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-light">Call HQ</span>
                </a>

                <a
                  href={indiaWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp India HQ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
