import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Stethoscope,
  Briefcase,
  FileText,
  UserCheck2,
  Compass,
  CheckCircle,
  Building,
  ArrowRight,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function MedicalPage() {
  const services = [
    {
      title: "Job Placement",
      description:
        "We offer a wide range of opportunities from nursing to specialized medical roles across leading hospital trusts.",
      icon: Briefcase,
    },
    {
      title: "Credentialing & Verification",
      description:
        "Full support for MOH, DOH, DHA, OMSB, and QCHP licensing documentation and credential dataflow verification.",
      icon: FileText,
    },
    {
      title: "Interview Coaching",
      description:
        "Prepare effectively for hospital board interviews with our expert medical recruitment panel guidance.",
      icon: UserCheck2,
    },
    {
      title: "Career Counseling",
      description:
        "Personalized advice to navigate your international career path across Middle Eastern and European health systems.",
      icon: Compass,
    },
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description:
        "Over two decades of experience specifically focused on overseas medical recruitment and clinical staffing.",
      icon: Stethoscope,
    },
    {
      title: "Tailored Matches",
      description:
        "We align clinical specialties and institutional culture for sustained doctor and nurse career satisfaction.",
      icon: UserCheck2,
    },
    {
      title: "Strong Network",
      description:
        "Direct associate partnerships with top hospitals, specialty clinics, and university health complexes.",
      icon: Building,
    },
  ];

  const specializations = [
    "Physicians & Consultants",
    "Registered Staff Nurses",
    "Allied Health Professionals",
    "Healthcare Administrators",
    "Specialized Lab Technicians",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
              Medical & Healthcare Division
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811] leading-tight">
              Find Your Perfect Fit in the <br className="hidden sm:inline" />
              <span className="text-sky-600 font-normal">Medical Field</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
              Specialized global recruitment pathways for healthcare professionals seeking positions across leading hospitals, clinics, and health departments.
            </p>
          </div>

          {/* 2 Main Columns: Our Services & Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Our Services */}
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-sky-600">
                  Our Services
                </span>
                <h2 className="text-lg sm:text-xl font-light text-[#050811] mt-1">
                  Healthcare Candidate Support
                </h2>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 flex-shrink-0 mt-0.5 border border-sky-100">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-normal text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-sky-600">
                  Why Choose Us?
                </span>
                <h2 className="text-lg sm:text-xl font-light text-[#050811] mt-1">
                  Trusted Medical Agency
                </h2>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 flex-shrink-0 mt-0.5 border border-sky-100">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-normal text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Specializations & Job Seekers Banner */}
          <div className="bg-[#050811] text-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-xl space-y-5 sm:space-y-6 border border-white/10">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-sky-400 uppercase">
                Job Seekers & Hospitals
              </span>
              <h2 className="text-xl sm:text-3xl font-light tracking-tight">
                Ready to advance your healthcare staffing?{" "}
                <span className="text-slate-400">We specialize in:</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
              {specializations.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-light text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs text-slate-400 font-light max-w-md">
                Direct interview campaigns for Bahrain, Kuwait, Qatar, UAE, and European healthcare trusts.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
                <a
                  href="https://wa.me/919388770039?text=Hello%20IMR%2C%20I%20am%20a%20healthcare%20professional%20seeking%20overseas%20placement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-normal transition active:scale-95 text-center shadow-sm"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Healthcare Desk</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95 text-center"
                >
                  <span>Submit Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

