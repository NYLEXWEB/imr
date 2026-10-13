import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import {
  Search,
  MessageSquare,
  FileSignature,
  Database,
  Video,
  Plane,
  ShieldCheck,
  FileCheck,
  Award,
  CalendarCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const steps = [
  {
    step: "01",
    title: "Needs Assessment & Employer Discovery",
    description:
      "Understanding the employer's organizational culture, role parameters, salary structures, and required competency profiles.",
    icon: Search,
  },
  {
    step: "02",
    title: "Requirement Scoping & Mutual Contract",
    description:
      "Formalizing terms of engagement, SLAs, deployment timelines, and legal compliance contracts between parties.",
    icon: MessageSquare,
  },
  {
    step: "03",
    title: "Demand Letter & Power of Attorney",
    description:
      "Employer issues the Demand Letter and Power of Attorney to authorize official e-Migrate registration and recruitment.",
    icon: FileSignature,
  },
  {
    step: "04",
    title: "Candidate Mapping & Talent Databank",
    description:
      "Targeted sourcing and filtering through our active databank of 100,000+ verified professionals and regional partner networks.",
    icon: Database,
  },
  {
    step: "05",
    title: "Screening & Online/Offline Interviews",
    description:
      "Rigorous preliminary interviews and technical evaluations arranged via virtual conference or direct panel meetings.",
    icon: Video,
  },
  {
    step: "06",
    title: "Direct Client Delegation & Trade Tests",
    description:
      "Facilitating business invitations for client delegations to conduct direct interviews and accredited trade testing.",
    icon: Plane,
  },
  {
    step: "07",
    title: "Health & Criminal Background Verification",
    description:
      "Complete medical fitness screening via GAMCA / approved medical clinics and police clearance certificate (PCC) verification.",
    icon: ShieldCheck,
  },
  {
    step: "08",
    title: "Bespoke Job Offer Letter Formulation",
    description:
      "Issuing formal employment offer letters detailing compensation, accommodation, benefits, and contract duration.",
    icon: FileCheck,
  },
  {
    step: "09",
    title: "Candidate Undertaking & Visa Processing",
    description:
      "Executing candidate undertakings, document apostille, embassy attestation, and work permit application submissions.",
    icon: Award,
  },
  {
    step: "10",
    title: "Legal Travel Permission & Mobilization",
    description:
      "Flight bookings, pre-departure orientation, ticketing, and scheduled arrival coordination with the employer.",
    icon: CalendarCheck,
  },
  {
    step: "11",
    title: "6-Month Post-Deployment Support & Monitoring",
    description:
      "Continuous performance check-ins, candidate welfare monitoring, and organizational support for six months post-joining.",
    icon: UserCheck,
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
              Brochure Page 05 • 11 Sequential Stages
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811]">
              OUR RECRUITMENT PROCESS
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
              Every overseas appointment follows an uncompromising 11-step methodology designed for total transparency, speed, and regulatory compliance.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-3.5 sm:space-y-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-white p-4 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 group"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 w-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-50 text-sky-700 font-medium text-sm sm:text-base flex items-center justify-center flex-shrink-0 border border-sky-100">
                      {s.step}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="text-sm sm:text-base font-normal text-slate-900 tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 text-sky-600 flex-shrink-0 self-end sm:self-center border border-slate-100 group-hover:bg-sky-50 transition">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#050811] text-white text-center space-y-5 sm:space-y-6 shadow-xl border border-white/10">
            <h3 className="text-xl sm:text-3xl font-light">
              Ready to Initiate Your Recruitment Mandate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Issue your Demand Letter and Power of Attorney to commence immediate candidate mapping from our 100k+ active profile bank.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95 text-center"
              >
                <span>Initiate Demand Letter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <WhatsAppEnquiryButton
                message="Hello IMR, I would like to discuss initiating an overseas recruitment mandate."
                label="Quick WhatsApp Discussion"
                variant="modal"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 py-3.5"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

