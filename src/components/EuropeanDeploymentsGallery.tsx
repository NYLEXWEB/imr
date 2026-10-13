"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  FileBadge2,
  Calendar,
  Building,
  PlaneTakeoff,
  Award,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Truck,
  Stethoscope,
  HardHat,
  Factory,
} from "lucide-react";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import {
  CountryFlag,
  PolandFlag,
  LithuaniaFlag,
  IrelandFlag,
  RomaniaFlag,
  GermanyFlag,
  UKFlag,
  EuropeFlag,
} from "@/components/ui/CountryFlags";

interface DeploymentItem {
  id: string;
  country: string;
  flag?: string;
  category: "poland" | "ireland" | "romania" | "germany" | "uk";
  title: string;
  employer: string;
  permitType: string;
  visaType: string;
  candidatesCount: string;
  year: string;
  icon: React.ElementType;
  description: string;
  status: "Completed & Mobilized" | "Active Deployment Corridor";
  badges: string[];
}

export default function EuropeanDeploymentsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const deployments: DeploymentItem[] = [
    {
      id: "pl-01",
      country: "Poland",
      flag: "🇵🇱",
      category: "poland",
      title: "International Heavy Transport Drivers & Fleet Specialists",
      employer: "Magtrans Sp. z o.o. & European Logistics Corridors",
      permitType: "Zezwolenie na Pracę (Type A Work Permit)",
      visaType: "National D-Type Schengen Visa Endorsed",
      candidatesCount: "85+ Certified Heavy Truck Drivers",
      year: "2024 – 2026",
      icon: Truck,
      description:
        "Full pre-departure EU Code 95 qualification, psychological fitness verification, and biometric Schengen visa stamping for European cross-border freight operations.",
      status: "Completed & Mobilized",
      badges: ["EU Code 95 Compliant", "CE Category Heavy Drivers", "Schengen D-Visa"],
    },
    {
      id: "ie-01",
      country: "Ireland",
      flag: "🇮🇪",
      category: "ireland",
      title: "Registered Healthcare Professionals & Nursing Assistants",
      employer: "Irish Health Facilities & Residential Care Trusts",
      permitType: "Critical Skills & General Employment Permit (DETE)",
      visaType: "Irish Employment Visa Endorsed",
      candidatesCount: "40+ Healthcare Staff",
      year: "2025 – 2026",
      icon: Stethoscope,
      description:
        "Direct recruitment liaison managed by our Ireland Regional Desk (+353 874896695), ensuring NMBI/QQI documentation, IELTS/OET coaching, and smooth relocation.",
      status: "Active Deployment Corridor",
      badges: ["NMBI Documentation", "Ireland Regional Desk", "Critical Skills"],
    },
    {
      id: "ro-01",
      country: "Romania",
      flag: "🇷🇴",
      category: "romania",
      title: "Industrial Production & Civil Construction Specialists",
      employer: "European Infrastructure & Logistics Consortia",
      permitType: "Aviz de Angajare (General Inspectorate for Immigration)",
      visaType: "Long-Stay D/AM Work Visa Endorsed",
      candidatesCount: "120+ Skilled Workers",
      year: "2024 – 2026",
      icon: HardHat,
      description:
        "Mobilized in strict accordance with the new Romanian digital immigration platform (Workinromania) and AIRAA European Mission compliance standards.",
      status: "Completed & Mobilized",
      badges: ["Workinromania Verified", "Trade-Tested Welder/Mason", "SEWA Consular Cleared"],
    },
    {
      id: "de-01",
      country: "Germany",
      flag: "🇩🇪",
      category: "germany",
      title: "Technical Trades & Mechanical Maintenance Engineers",
      employer: "German Manufacturing & Facility Enterprises",
      permitType: "FEG Fachkräfteeinwanderungsgesetz (Skilled Immigration Act)",
      visaType: "National Visa for Qualified Employment (§18a/§18b)",
      candidatesCount: "25+ Specialized Technicians",
      year: "2025 – 2026",
      icon: Factory,
      description:
        "End-to-end German ZAV labor market verification, A2/B1 Goethe-Institut language compliance, and recognition of technical vocational credentials.",
      status: "Active Deployment Corridor",
      badges: ["ZAV Pre-Approval", "German Skilled Immigration", "VET Equivalence"],
    },
    {
      id: "pl-02",
      country: "Poland & Lithuania",
      flag: "🇵🇱 🇱🇹",
      category: "poland",
      title: "Automated Warehousing & Fleet Maintenance Crews",
      employer: "Central European Supply-Chain Operators",
      permitType: "Voivodeship Multi-Year Work Permit",
      visaType: "National D-Type Work Permit Stamped",
      candidatesCount: "60+ Certified Warehouse Operatives",
      year: "2024 – 2025",
      icon: Building,
      description:
        "Forklift certified operatives, supply chain dispatchers, and heavy vehicle mechanics mobilized with complete MEA consular emigration stamps.",
      status: "Completed & Mobilized",
      badges: ["Forklift Certified", "MEA Emigration Approved", "Zero Exploitation"],
    },
    {
      id: "uk-01",
      country: "United Kingdom",
      flag: "🇬🇧",
      category: "uk",
      title: "Higher Education & Clinical Health Placements",
      employer: "BPP University & Partner Healthcare Trusts",
      permitType: "UKVI Student Route & Health and Care Worker Pathway",
      visaType: "UK Visas and Immigration (UKVI) Endorsed",
      candidatesCount: "90+ Academic & Healthcare Candidates",
      year: "2024 – 2026",
      icon: Award,
      description:
        "Strategic counseling, university admission processing, and verified health staff migration under the revised UK immigration rules.",
      status: "Active Deployment Corridor",
      badges: ["UKVI Compliant", "BPP University Partner", "IELTS Verified"],
    },
  ];

  const filtered =
    activeCategory === "all"
      ? deployments
      : deployments.filter((d) => d.category === activeCategory);

  return (
    <section id="deployments" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium">
              <FileBadge2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Consular Endorsements & Stamped Visas</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              European Deployments & <br className="hidden sm:inline" />
              <span className="font-normal text-sky-700">Visa Stamping Showcase</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Demonstrated capability deploying compliant workforce batches into Poland, Ireland, Romania, Germany, and the UK with full biometric visa endorsements and Ministry of External Affairs clearance.
            </p>
          </div>

          <div className="flex-shrink-0">
            <WhatsAppEnquiryButton
              message="Hello IMR European Desk, I would like to inquire about European workforce deployment timelines and candidate availability."
              label="Discuss European Hiring"
              variant="emerald"
              showArrow={true}
              className="px-6 py-3 font-medium text-xs shadow-sm shadow-emerald-600/20"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: "all", label: "All Corridors", flag: "all" },
            { id: "poland", label: "Poland & Lithuania", flag: "poland-lithuania" },
            { id: "ireland", label: "Ireland Desk", flag: "ireland" },
            { id: "romania", label: "Romania", flag: "romania" },
            { id: "germany", label: "Germany", flag: "germany" },
            { id: "uk", label: "United Kingdom", flag: "uk" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap active:scale-95 ${
                activeCategory === tab.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {tab.flag === "all" ? (
                <EuropeFlag className="w-4 h-2.5 rounded-xs shrink-0" />
              ) : tab.flag === "poland-lithuania" ? (
                <div className="flex items-center -space-x-1 shrink-0">
                  <PolandFlag className="w-3.5 h-2.5 rounded-xs shadow-2xs" />
                  <LithuaniaFlag className="w-3.5 h-2.5 rounded-xs border-l border-white shadow-2xs" />
                </div>
              ) : (
                <CountryFlag code={tab.flag} className="w-4 h-2.5 rounded-xs shrink-0 shadow-2xs" />
              )}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Deployments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Country Flag & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      {item.id === "pl-02" ? (
                        <div className="flex items-center -space-x-1 shrink-0">
                          <PolandFlag className="w-7 h-5 rounded-xs shadow-2xs" />
                          <LithuaniaFlag className="w-7 h-5 rounded-xs border-l border-white shadow-2xs" />
                        </div>
                      ) : (
                        <CountryFlag code={item.category} className="w-7 h-5 rounded-xs shadow-2xs" />
                      )}
                      <div>
                        <span className="text-xs font-medium text-slate-900 block leading-tight">
                          {item.country}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-normal text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">
                        {item.employer}
                      </p>
                    </div>
                  </div>

                  {/* Stamping & Permit Badges */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 text-[11px]">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-400 font-mono text-[10px] uppercase">
                        Work Authorization:
                      </span>
                      <span className="font-medium text-slate-800 text-right text-[10px]">
                        {item.permitType}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200/60">
                      <span className="text-slate-400 font-mono text-[10px] uppercase">
                        Visa Stamp:
                      </span>
                      <span className="font-semibold text-emerald-700 text-right text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span>{item.visaType}</span>
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200/60">
                      <span className="text-slate-400 font-mono text-[10px] uppercase">
                        Mobilized Volume:
                      </span>
                      <span className="font-medium text-slate-900 text-right text-[10px]">
                        {item.candidatesCount}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.badges.map((b, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-light border border-slate-200/70"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <WhatsAppEnquiryButton
                    message={`Hello IMR European Desk, we are an employer interested in candidates for: ${item.title} (${item.country}).`}
                    label={`Inquire for ${item.country}`}
                    variant="dark"
                    showArrow={true}
                    className="w-full text-xs py-2.5 font-medium"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Standardized European Deployment Process */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sky-700 font-semibold block">
              Standardized Corporate Mobilization SLA
            </span>
            <h3 className="text-lg sm:text-2xl font-light text-slate-900">
              The 4-Stage European Recruitment & Stamping Lifecycle
            </h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Engineered to minimize employer lead-times while guaranteeing 100% compliance with EU labour regulations, national immigration departments, and India MEA emigration rules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4.5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-600 block">Stage 01</span>
              <h4 className="text-xs sm:text-sm font-normal text-slate-900">
                Demand & Job Order Verification
              </h4>
              <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                Employer mandate registration, job quota verification, and European labor market test fulfillment.
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-600 block">Stage 02</span>
              <h4 className="text-xs sm:text-sm font-normal text-slate-900">
                Trade Testing & Skill Validation
              </h4>
              <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                Rigorous practical trade-testing at certified training centers, medical screening, and police clearance certificates (PCC).
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-600 block">Stage 03</span>
              <h4 className="text-xs sm:text-sm font-normal text-slate-900">
                Work Permit & Biometric Visa
              </h4>
              <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                Submission to European immigration authorities (Workinromania, Voivodeship, DETE, FEG) and embassy visa stamping.
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-600 block">Stage 04</span>
              <h4 className="text-xs sm:text-sm font-normal text-slate-900">
                MEA Clearance & Direct Mobilization
              </h4>
              <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                Final eMigrate / MEA emigration sanction, pre-departure European cultural briefing, and coordinated flight deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
