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
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Needs Assessment & Understanding",
    description:
      "We are starting to understand each other Once we understand the employer who they are as a company and what they looking for .",
    icon: Search,
  },
  {
    step: "02",
    title: "Requirement Scoping & Contract",
    description:
      "Start conversation according to requirements and it will develop a mutual contract .",
    icon: MessageSquare,
  },
  {
    step: "03",
    title: "Demand Letter & Power of Attorney",
    description:
      "Employer need to issue Demand Letter and power of attorney to start the recruitment process.",
    icon: FileSignature,
  },
  {
    step: "04",
    title: "Candidate Mapping & Sourcing",
    description:
      "We will map out the candidates for employer, utilizing the extensive resource available with us through our data bank and our partners .",
    icon: Database,
  },
  {
    step: "05",
    title: "Screening & Interviews",
    description:
      "We will find candidates who completely satisfy the employer requirements and will arrange online or offline interviews accordingly.",
    icon: Video,
  },
  {
    step: "06",
    title: "Direct Client Visit & Trade Tests",
    description:
      "if employer require to meet candidates directly we will provide business invitation to visit country to choose the right candidate directly with or without trade test.",
    icon: Plane,
  },
  {
    step: "07",
    title: "Medical & Background Verification",
    description:
      "We will verify selected candidates health condition and criminal back ground through Government authorized agency.",
    icon: ShieldCheck,
  },
  {
    step: "08",
    title: "Job Offer Formulation",
    description:
      "After found perfect candidates we continue work to build a job offer letter , that will satisfy both employer and employee .",
    icon: FileCheck,
  },
  {
    step: "09",
    title: "Offer Acceptance & Visa Processing",
    description:
      "Collect signed offer letter and undertaking from candidate without delay to start Work permit application or visa.",
    icon: Award,
  },
  {
    step: "10",
    title: "Travel Clearances & Deployment",
    description:
      "Once got the legal permission to travel , we will make sure all employees join with the employer in specified time .",
    icon: CalendarCheck,
  },
  {
    step: "11",
    title: "6-Month Post-Deployment Support",
    description:
      "We will assist and monitor the employees performance up to six months and provide all support to employer and employee .",
    icon: UserCheck,
  },
];

export default function RecruitmentProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Brochure Page 5 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-imr-blue-primary text-xs font-mono uppercase tracking-wider">
            <span>Structured End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy">
            OUR <span className="text-imr-blue-primary">RECRUITMENT PROCESS</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Our 11-stage systematic hiring blueprint ensures thorough compliance, certified vetting, and seamless deployment for global partners.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-imr-navy to-imr-blue-primary text-white flex items-center justify-center font-semibold text-lg shadow-sm group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-imr-blue-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-imr-navy mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs text-slate-500 font-light">
            Government Authorized Verification • Medical Testing Under GAMCA/Approved Centers • Legal Visa Sponsorship Clearance
          </p>
        </div>
      </div>
    </section>
  );
}
