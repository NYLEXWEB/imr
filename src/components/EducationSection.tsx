import Image from "next/image";
import { GraduationCap, Globe, BookOpen, Award, Check } from "lucide-react";

const universities = [
  "Roehampton University",
  "Coventry University",
  "Demontfort University",
  "Teesside University",
  "Leceister University",
  "Birmingham University",
  "East London University",
  "Sterling University",
  "Bangkor University",
  "Buckinghamshire University",
  "Greenwich University",
  "Middlesex University",
  "Wolverhampton University",
  "Hertfordshire University",
  "Sunderland University",
  "East Anglia University",
  "University of Hull London",
  "Canterbury Christ Churchill University.",
];

const countries = [
  { name: "UK", note: "" },
  { name: "CANADA", note: "" },
  { name: "USA", note: "" },
  { name: "AUSTRALIA", note: "" },
  { name: "GERMANY", note: "" },
  { name: "FRANCE", note: "" },
  { name: "IRELAND", note: "" },
  {
    name: "SWEDEN",
    note: "(with dependent,mainly for engineers)",
  },
  {
    name: "DENMARK",
    note: "(with dependent)",
  },
  {
    name: "FINLAND",
    note: "(with dependent good profiles)",
  },
  { name: "SINGAPORE", note: "" },
  { name: "MALAYSIA", note: "" },
  { name: "DUBAI", note: "" },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Brochure Page 8 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-imr-blue-primary text-xs font-mono uppercase tracking-wider">
            <span>Study Abroad Division</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy">
            GLOBAL <span className="text-imr-blue-primary">EDUCATION</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Guidance, admissions, and visa support for premier universities across the UK, Europe, Australia, North America, and Asia.
          </p>
        </div>

        {/* Featured Callout Card matching Page 8 bottom highlight */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-imr-navy text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <GraduationCap className="w-7 h-7 text-sky-400" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-semibold text-imr-navy">
                BPP university UK ( 7 intakes in a year)
              </div>
              <div className="text-sm text-sky-700 font-normal">
                • Attractive scholarship depend on scores
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-imr-navy hover:bg-imr-blue-primary text-white text-xs font-normal transition shadow-sm"
          >
            Inquire About Admissions
          </a>
        </div>

        {/* 2-Column Grid: Universities & Countries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Universities Column */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <BookOpen className="w-5 h-5 text-imr-blue-primary" />
              <h3 className="text-lg font-semibold text-imr-navy">
                Partner Institutions & Universities
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {universities.map((uni, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700 font-light bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs"
                >
                  <Check className="w-3.5 h-3.5 text-imr-blue-primary flex-shrink-0 mt-0.5" />
                  <span>{uni}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Destinations Column */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <Globe className="w-5 h-5 text-sky-600" />
              <h3 className="text-lg font-semibold text-imr-navy">
                Study Destinations
              </h3>
            </div>

            <div className="space-y-2.5">
              {countries.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                >
                  <div className="flex items-center gap-2 font-medium text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-imr-blue-primary" />
                    <span>{c.name}</span>
                  </div>
                  {c.note && (
                    <span className="text-[11px] text-sky-600 font-normal">
                      {c.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graduates Banner matching Page 8 bottom visual */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <div className="relative aspect-[16/7] w-full min-h-[260px]">
            <Image
              src="/images/assets/education_graduates.png"
              alt="Graduating Students - Indian Manpower Resource Education"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-imr-navy/90 via-imr-navy/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-semibold mb-1">
                Your Academic Gateway to Global Horizons
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-light max-w-xl">
                Comprehensive visa guidance, documentation assistance, and interview preparation for international scholars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
