import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  HardHat,
  Truck,
  Flame,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function SectorsPage() {
  const healthcareEmployers = [
    "King Hamad University Hospital Bahrain",
    "Super Metro Specialized Medical Center KUWAIT",
    "Alorf Hospital KUWAIT",
    "KIMS Health Medical Center QATAR",
    "Reyada Medical Centre QATAR",
    "Gardania Medical Center QATAR",
    "Al Hekma Medical Complex QATAR",
    "Kings Dental Center QATAR",
  ];

  const constructionEmployers = [
    "Timbertech LLC UAE",
    "Gladpol POLAND",
    "Firma Espirit POLAND",
    "IMR – Hamburg CROATIA",
    "Venman GREECE",
    "Lintark SLOVAKIA",
    "HR Corporation",
    "SPEK Global",
    "Orion Group KUWAIT",
    "Season Group KUWAIT",
    "Vavoulus GREECE",
  ];

  const productionEmployers = [
    "Adpro POLAND",
    "Ditola POLAND",
    "T&T People POLAND",
    "Vincy-Play POLAND",
    "Saudingos LITHUANIA",
    "Mag Trans POLAND",
    "Kaspryska POLAND",
    "Foer Group LITHUANIA",
    "UAB Transport LITHUANIA",
  ];

  const oilAndGasProjects = [
    { name: "Saipem ABUDHABI", region: "Abu Dhabi, UAE", tag: "Offshore Marine & EPC" },
    { name: "Descon UAE & QATAR", region: "UAE & Qatar", tag: "Refinery Engineering" },
    { name: "Sinopec SAUDI", region: "Saudi Arabia", tag: "Petrochemical Infrastructure" },
    { name: "Aramco Projects SAUDI", region: "Saudi Arabia", tag: "Mega Energy Projects" },
  ];

  const originalClientLogos = [
    {
      name: "Aamal (اعمال AAMAL)",
      file: "/images/assets/client_logos/logo_aamal.png",
      country: "Qatar / GCC Conglomerate",
    },
    {
      name: "sea zen",
      file: "/images/assets/client_logos/logo_seazen.png",
      country: "International Hospitality",
    },
    {
      name: "mercado 360",
      file: "/images/assets/client_logos/logo_mercado360.png",
      country: "Retail & Facility Services",
    },
    {
      name: "Reyada Medical Centre",
      file: "/images/assets/client_logos/logo_reyada.png",
      country: "Qatar Healthcare",
    },
    {
      name: "AMWAJ (أمواج AMWAJ)",
      file: "/images/assets/client_logos/logo_amwaj.png",
      country: "Catering & Services Qatar",
    },
    {
      name: "KIMSHEALTH",
      file: "/images/assets/client_logos/logo_kimshealth.png",
      country: "GCC Hospital Network",
    },
    {
      name: "Mag Trans",
      file: "/images/assets/client_logos/logo_magtrans.png",
      country: "Poland European Logistics",
    },
    {
      name: "ORION HOLDING COMPANY",
      file: "/images/assets/client_logos/logo_orion.png",
      country: "Kuwait Corporate Group",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
              Brochure Pages 07 & 10 • Verified Placements
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811]">
              Sectors & Satisfied Employers
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
              Serving prominent healthcare institutes, engineering conglomerates, European industrial factories, and Gulf oil projects.
            </p>
          </div>

          {/* Section: ORIGINAL CLIENT LOGOS */}
          <section className="bg-white p-5 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Brochure Page 10 • Official Client Credentials</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-light text-[#050811] tracking-tight mt-1">
                  Corporate Partner Brands (Original Logos)
                </h2>
              </div>
              <WhatsAppEnquiryButton
                message="Hello IMR, we are an employer inquiring about corporate recruitment and workforce mobilization."
                label="Employer WhatsApp Inquiry"
                variant="emerald"
                showArrow={true}
                className="py-2.5 px-5 font-medium text-xs"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {originalClientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-2.5 sm:gap-3 group"
                >
                  <div className="relative w-full h-12 sm:h-16 flex items-center justify-center p-1 sm:p-2">
                    <Image
                      src={client.file}
                      alt={client.name}
                      fill
                      className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-0.5 border-t border-slate-100 pt-2 w-full">
                    <div className="text-[11px] sm:text-xs font-normal text-slate-800 line-clamp-1">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-light truncate">
                      {client.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Oil & Gas Projects */}
          <section className="bg-white p-5 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-amber-600 uppercase tracking-wider">
                  Direct Interview Campaigns
                </span>
                <h2 className="text-xl sm:text-3xl font-light text-[#050811] tracking-tight mt-1">
                  We Made Direct Interviews For Oil & Gas Projects
                </h2>
              </div>
              <div className="p-2.5 sm:p-3 bg-amber-50 text-amber-600 rounded-2xl w-fit border border-amber-200">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {oilAndGasProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-amber-300 transition"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-amber-700 uppercase font-medium">
                      {p.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-normal text-[#050811]">
                      {p.name}
                    </h3>
                  </div>
                  <div className="mt-3 text-xs text-sky-600 font-normal">
                    {p.region}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Satisfied Employers by Sector */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-wider text-sky-600 uppercase">
                Brochure Page 07 • Cross-Border Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#050811]">
                Our Candidates Were Satisfied with the Following Employers
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Healthcare */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-[#050811]">
                        HEALTH CARE
                      </h3>
                      <span className="text-[11px] text-slate-400 font-light">GCC Hospitals & Clinics</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-4">
                    {healthcareEmployers.map((emp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span>{emp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <WhatsAppEnquiryButton
                    message="Hello IMR, I am inquiring about Healthcare candidate placements."
                    label="WhatsApp Healthcare Desk"
                    variant="emerald"
                    showArrow={true}
                    className="w-full py-2.5 text-xs font-medium"
                  />
                  <Link
                    href="/medical"
                    className="w-full text-center text-xs text-sky-600 font-normal hover:underline block pt-1"
                  >
                    View Specialized Medical Division →
                  </Link>
                </div>
              </div>

              {/* Construction & Hospitality */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-[#050811]">
                        CONSTRUCTION & HOSPITALITY
                      </h3>
                      <span className="text-[11px] text-slate-400 font-light">Europe & Gulf</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-4">
                    {constructionEmployers.map((emp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span>{emp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <WhatsAppEnquiryButton
                    message="Hello IMR, I am inquiring about Construction and Hospitality staffing."
                    label="WhatsApp Construction Desk"
                    variant="emerald"
                    showArrow={true}
                    className="w-full py-2.5 text-xs font-medium"
                  />
                </div>
              </div>

              {/* Production & Transporting */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-[#050811]">
                        PRODUCTION & TRANSPORTING
                      </h3>
                      <span className="text-[11px] text-slate-400 font-light">Poland & Lithuania</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-4">
                    {productionEmployers.map((emp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{emp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <WhatsAppEnquiryButton
                    message="Hello IMR European Desk, I am inquiring about European Production and Transport staffing (Poland & Lithuania)."
                    label="WhatsApp Logistics Desk"
                    variant="emerald"
                    showArrow={true}
                    className="w-full py-2.5 text-xs font-medium"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="text-center pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95"
            >
              <span>Submit Manpower Demand for Your Industry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <WhatsAppEnquiryButton
              message="Hello IMR, we have an urgent industry demand to discuss."
              label="Discuss via WhatsApp"
              variant="emerald"
              showArrow={true}
              className="px-8 py-3.5 text-xs font-medium"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

