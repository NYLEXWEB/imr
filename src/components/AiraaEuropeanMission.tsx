"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Award,
  CheckCircle2,
  Building2,
  FileCheck2,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Cpu,
  UserCheck,
  Scale,
  Handshake,
  Layers,
  Sparkles,
  Phone,
} from "lucide-react";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import { CONTACT_INFO } from "@/config/contact";
import {
  CountryFlag,
  GreeceFlag,
  BulgariaFlag,
  EuropeFlag,
} from "@/components/ui/CountryFlags";

export default function AiraaEuropeanMission() {
  const [activeTab, setActiveTab] = useState<"mission" | "framework" | "compliance">("mission");

  const eightPoints = [
    {
      num: "01",
      title: "Skilled Labour Mobility",
      desc: "Facilitating structured cross-border movement of verified professionals aligned with national quota systems and critical skill shortages.",
      icon: TrendingUp,
    },
    {
      num: "02",
      title: "Mutual Recognition of Skills",
      desc: "Promoting qualification equivalence and vocational standards harmonization with European EQF and national certifying bodies.",
      icon: Award,
    },
    {
      num: "03",
      title: "TVET Technical Training",
      desc: "Pre-departure industry simulation, workplace language training, and technical upskilling matching European job demands.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Skills–Demand Matching",
      desc: "Utilizing labour-market intelligence to match verified workforce availability with emerging European enterprise requirements.",
      icon: Cpu,
    },
    {
      num: "05",
      title: "Digital Mobility & Credentials",
      desc: "Leveraging digital credentials, digital social-security documentation, and fast-track biometric credential verification.",
      icon: FileCheck2,
    },
    {
      num: "06",
      title: "Future of Work Preparedness",
      desc: "Preparing workers for evolving industrial automation, renewable transition, modern logistics, and advanced healthcare practices.",
      icon: Sparkles,
    },
    {
      num: "07",
      title: "Worker Protection & Ethics",
      desc: "Strict adherence to the 'Employer Pays Principle', transparent contracts, zero-fee migration, and social welfare safeguards.",
      icon: Scale,
    },
    {
      num: "08",
      title: "Structured & Formal Migration",
      desc: "G2G bilateral agreements, MEA emigration clearances, and regulated institutional recruitment pathways.",
      icon: Handshake,
    },
  ];

  const europeanCorridors = [
    {
      country: "Romania",
      code: "romania",
      status: "Active Digital Corridor",
      platform: "Workinromania Integration",
      sectors: "Logistics, Production, Construction, Civil Infrastructure",
      desc: "Full integration with Romania's new digital immigration portal with verified bilateral documentation.",
    },
    {
      country: "Germany",
      code: "germany",
      status: "Skilled Immigration Pathway",
      platform: "FEG (Skilled Immigration Act)",
      sectors: "Engineering, Industrial Automation, Healthcare, Technical Trades",
      desc: "Structured talent pipelines compliant with Germany's Fachkräfteeinwanderungsgesetz standards.",
    },
    {
      country: "Ireland",
      code: "ireland",
      status: "Dedicated Regional Desk",
      platform: "Critical Skills & General Permits",
      sectors: "Healthcare, Nursing, Medical Technology, Specialized Engineering",
      desc: "Direct regional operations desk in Ireland (+353 874896695) serving Irish corporate & healthcare clients.",
    },
    {
      country: "Poland",
      code: "poland",
      status: "Logistics & Transport Corridor",
      platform: "Voivodeship Work Permits",
      sectors: "Heavy Transport (Magtrans), Industrial Warehousing, Fleet Operations",
      desc: "Proven track record deploying certified heavy transport drivers and warehouse mobilization teams.",
    },
    {
      country: "Greece & Bulgaria",
      code: "greece-bulgaria",
      status: "Bilateral Exploration Corridor",
      platform: "AIRAA Mission Partnerships",
      sectors: "Shipbuilding, Manufacturing, Agricultural Technology, Hospitality",
      desc: "Direct engagement under the AIRAA Strategic European Mission led by President Dr. Dev Mohanty.",
    },
  ];

  return (
    <section id="airaa-europe-mission" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Header & Official Association Badge */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Official Member: All India Recruiting Agency Association (AIRAA)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
            Strategic European Mission & <br className="hidden sm:inline" />
            <span className="font-normal text-sky-700">Global Workforce Mobility 2026</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
            International Manpower Resources (IMR) operates in direct alignment with AIRAA and the Ministry of External Affairs (MEA), Govt. of India, pioneering formal, ethical, and verifiable talent mobility corridors across the European Union.
          </p>
        </div>

        {/* Association Trust Card & European Mission Spotlight */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Official AIRAA Emblem & Mission Summary */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-4">
              {/* Emblem Box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-emerald-500/40 p-2.5 flex flex-col items-center justify-center text-center shadow-xs">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">
                  AIRAA
                </span>
                <Globe2 className="w-6 h-6 text-emerald-600 my-0.5" />
                <span className="text-[8px] font-medium text-slate-500 uppercase leading-none">
                  MEMBER
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-semibold block">
                  All India Recruiting Agency Association
                </span>
                <h3 className="text-base sm:text-xl font-normal text-slate-900 leading-snug">
                  European Strategic Mobility Framework
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  Affiliated with National MEA Standards & SEWA Indian Consular Services
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Under the strategic mission led by AIRAA President Dr. Dev L. Mohanty across <strong className="font-medium text-slate-900">Romania, Germany, Greece, and Bulgaria</strong>, IMR is expanding transparent, sustainable pathways for qualified Indian specialists and technicians entering the European single market.
            </p>

            {/* Core Credential Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">MEA Reg. License</span>
                <span className="text-xs font-semibold text-slate-900">B1157/KER/PART/200/5/9681</span>
                <span className="text-[10px] text-emerald-600 block font-light">Govt. of India Validated</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Europe Operations Desk</span>
                <span className="text-xs font-semibold text-slate-900">+353 874896695</span>
                <span className="text-[10px] text-emerald-600 block font-light">Ireland / EU Liaison Desk</span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Consular Portal</span>
                <span className="text-xs font-semibold text-slate-900">SEWA MEA Integrated</span>
                <span className="text-[10px] text-emerald-600 block font-light">Digital Document Verif.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct CTA For European Employers */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-medium border border-emerald-200">
                <EuropeFlag className="w-3.5 h-2.5 rounded-xs" />
                <span>For Employers in Europe</span>
              </span>
              <h4 className="text-base sm:text-lg font-normal text-slate-900">
                Partner with an Authorized Indian Recruiter
              </h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Connect directly with our European desk in Ireland for compliant workforce mobilization, trade-testing, and consular clearances.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <WhatsAppEnquiryButton
                message="Hello IMR European Desk, we are an employer in Europe interested in initiating workforce recruitment."
                label="WhatsApp European Desk"
                variant="emerald"
                showArrow={true}
                className="w-full py-3 text-xs font-medium"
              />

              <a
                href="tel:+353874896695"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-normal border border-slate-200 transition active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call Ireland Desk (+353 874896695)</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-light text-center">
              Zero Candidate Exploitation • Employer-Pays Ethics • MEA Verified
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs: Mission, Framework, Compliance */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                activeTab === "mission"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              European Mobility Corridors
            </button>

            <button
              onClick={() => setActiveTab("framework")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                activeTab === "framework"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              8-Point Ethical Mobility Agenda
            </button>

            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                activeTab === "compliance"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              EU Fair Labour & Regulatory Compliance
            </button>
          </div>

          {/* TAB 1: European Mobility Corridors */}
          {activeTab === "mission" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-in fade-in duration-200">
              {europeanCorridors.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-sky-300 hover:shadow-md transition space-y-3.5 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {c.code === "greece-bulgaria" ? (
                          <div className="flex items-center -space-x-1 shrink-0">
                            <GreeceFlag className="w-7 h-5 rounded-xs shadow-2xs" />
                            <BulgariaFlag className="w-7 h-5 rounded-xs border-l border-white shadow-2xs" />
                          </div>
                        ) : (
                          <CountryFlag code={c.code} className="w-7 h-5 rounded-xs shadow-2xs" />
                        )}
                        <h4 className="text-base font-normal text-slate-900">{c.country}</h4>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {c.status}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Framework Standard
                      </span>
                      <span className="text-xs font-medium text-slate-800 block">
                        {c.platform}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {c.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                        Priority Industries
                      </span>
                      <span className="text-xs text-sky-800 font-medium leading-relaxed block">
                        {c.sectors}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <WhatsAppEnquiryButton
                      message={`Hello IMR European Desk, we are an employer in ${c.country} inquiring about workforce recruitment.`}
                      label={`Inquire for ${c.country}`}
                      variant="subtle"
                      className="w-full text-xs py-2.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: 8-Point Ethical Mobility Framework */}
          {activeTab === "framework" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="max-w-2xl space-y-1.5">
                <h3 className="text-lg sm:text-xl font-normal text-slate-900">
                  The BRICS & AIRAA 8-Point Workforce Mobility Blueprint
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Transitioning from conventional overseas recruitment towards verified competencies, mutual recognition, ethical worker protection, and institutional mobility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {eightPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition hover:shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-700">
                          {item.num}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-sm font-normal text-slate-900 leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: EU Fair Labour & Regulatory Compliance */}
          {activeTab === "compliance" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-normal text-slate-900">
                  EU Fair Labour Mobility Package
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Europe is transitioning toward faster cross-border qualification recognition, digital social security coordination, and robust legal protections for international workers. IMR ensures all contracts comply strictly with European national labor codes.
                </p>
                <div className="pt-2 text-[11px] text-sky-700 font-mono">
                  • Equal pay & local collective agreement parity
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-normal text-slate-900">
                  SEWA Indian Consular Services
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  India’s Ministry of External Affairs SEWA platform ensures end-to-end digital visa verification, document apostille, and embassy authentication, preventing forged credentials and safeguarding European sponsor entities.
                </p>
                <div className="pt-2 text-[11px] text-emerald-700 font-mono">
                  • Verified MEA Emigration clearance system
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-normal text-slate-900">
                  Government-to-Government (G2G) Integrity
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Backing international workforce pacts with diplomatic bilateral frameworks. As highlighted in diplomatic relations updates, structured migration guarantees stable visa issuance, transparent quota allocation, and long-term retention.
                </p>
                <div className="pt-2 text-[11px] text-indigo-700 font-mono">
                  • Zero-exploitation & transparent deployment
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
