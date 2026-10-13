import Image from "next/image";
import { Clock, ShieldCheck, Zap, Headphones, Users, Award } from "lucide-react";

const reasons = [
  {
    metric: "20+ YEARS",
    title: "Deep Industry Experience",
    description: "Earned 20 years of experience from low level to upper level management",
    icon: Award,
    color: "from-blue-600 to-indigo-600",
  },
  {
    metric: "90%",
    title: "Candidate Trust & Referrals",
    description: "Personal reference by deployed candidates a promise of trust",
    icon: ShieldCheck,
    color: "from-sky-500 to-blue-600",
  },
  {
    metric: "15 Days",
    title: "Rapid Turnaround Time",
    description: "Fulfilling requirements within 15 days with suitable profiles",
    icon: Zap,
    color: "from-indigo-600 to-purple-600",
  },
  {
    metric: "24X7",
    title: "Dedicated Employer Support",
    description: "Full support to employer as per their requirements",
    icon: Headphones,
    color: "from-blue-700 to-imr-navy",
  },
  {
    metric: "100k Profiles",
    title: "Extensive Talent Database",
    description: "We have 100k + profiles from various categories",
    icon: Users,
    color: "from-cyan-600 to-blue-600",
  },
];

export default function ReasonToChoose() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Brochure Page 6 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-imr-blue-primary text-xs font-mono tracking-wider uppercase">
            <span>Proven Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy">
            REASON <span className="text-imr-blue-primary">TO CHOOSE</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Our numbers speak for our track record. We combine speed, volume, and rigorous quality assurance for global enterprises.
          </p>
        </div>

        {/* Highlight Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-imr-blue-primary mb-4 shadow-2xs group-hover:bg-imr-navy group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-2xl sm:text-3xl font-bold text-imr-navy tracking-tight mb-1 group-hover:text-imr-blue-primary transition-colors">
                    {r.metric}
                  </div>

                  <div className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
                    {r.title}
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span className="text-[10px] text-slate-400 font-mono">Metric #{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Team Banner matching Page 6 bottom visual */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <div className="relative aspect-[16/7] w-full min-h-[300px]">
            <Image
              src="/images/assets/reason_team_meeting.png"
              alt="Reason to Choose Indian Manpower Resource Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-imr-navy/90 via-imr-navy/60 to-transparent" />

            <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl text-white space-y-4">
              <span className="text-xs font-medium uppercase tracking-widest text-sky-400">
                End-To-End Global Placement
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Empowering Businesses With World-Class Talent
              </h3>
              <p className="text-sm text-slate-200 font-light leading-relaxed">
                From entry-level technicians to senior management executives, we deliver exact matching profiles backed by full regulatory compliance and seamless relocation support.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-imr-navy text-xs font-normal hover:bg-slate-100 transition shadow"
                >
                  Schedule an Employer Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
