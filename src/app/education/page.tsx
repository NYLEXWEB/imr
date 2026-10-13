import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import { GraduationCap, BookOpen, Globe, ArrowRight, Check } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function EducationPage() {
  const universities = [
    "Roehampton University",
    "Coventry University",
    "Demontfort University",
    "Teesside University",
    "Leicester University",
    "Birmingham University",
    "East London University",
    "Stirling University",
    "Bangor University",
    "Buckinghamshire University",
    "Greenwich University",
    "Middlesex University",
    "Wolverhampton University",
    "Hertfordshire University",
    "Sunderland University",
    "East Anglia University",
    "University of Hull London",
    "Canterbury Christ Church University",
  ];

  const destinations = [
    { name: "UK", note: "" },
    { name: "CANADA", note: "" },
    { name: "USA", note: "" },
    { name: "AUSTRALIA", note: "" },
    { name: "GERMANY", note: "" },
    { name: "FRANCE", note: "" },
    { name: "IRELAND", note: "" },
    { name: "SWEDEN", note: "(with dependent, mainly for engineers)" },
    { name: "DENMARK", note: "(with dependent)" },
    { name: "FINLAND", note: "(with dependent good profiles)" },
    { name: "SINGAPORE", note: "" },
    { name: "MALAYSIA", note: "" },
    { name: "DUBAI", note: "" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
              Study Abroad Division
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811]">
              GLOBAL EDUCATION
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
              Assisting international aspirants with university admissions, scholarships, dependent visas, and career pathways.
            </p>
          </div>

          {/* Featured Highlight Card */}
          <div className="bg-[#050811] text-white border border-white/10 p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 border border-white/15">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400" />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-light text-white">
                  BPP University UK (7 intakes per year)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  • Attractive scholarship options based on academic scores
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <WhatsAppEnquiryButton
                message="Hello IMR, I would like to apply for BPP University UK / Global Universities."
                label="WhatsApp Admission Desk"
                variant="modal"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-none py-3.5"
              />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95 text-center"
              >
                <span>Apply for BPP University</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 2 Grid Columns: Universities & Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Universities */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-light text-[#050811]">
                  Partner Institutions (18 Premier Universities)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {universities.map((uni, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 font-light bg-slate-50/70 p-3 rounded-xl border border-slate-200/80 hover:border-sky-300 transition"
                  >
                    <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-light text-[#050811]">
                  Study Destinations (13 Countries)
                </h3>
              </div>

              <div className="space-y-2">
                {destinations.map((d, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs hover:border-sky-300 transition"
                  >
                    <span className="font-normal text-slate-900">{d.name}</span>
                    {d.note && (
                      <span className="text-[11px] text-slate-500 font-light">
                        {d.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95 text-center"
            >
              <span>Get Free Student Counseling & University Guidance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <WhatsAppEnquiryButton
              message="Hello IMR, I would like to inquire about study abroad counseling and university guidance."
              label="WhatsApp Counselor"
              variant="modal"
              className="px-8 py-3.5"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

