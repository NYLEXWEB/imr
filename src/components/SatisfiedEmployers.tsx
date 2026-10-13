import Image from "next/image";
import { HeartPulse, HardHat, Truck, CheckCircle2 } from "lucide-react";

export default function SatisfiedEmployers() {
  const sectors = [
    {
      title: "HEALTH CARE",
      icon: HeartPulse,
      banner: "/images/assets/banner_healthcare.png",
      badgeColor: "bg-rose-50 text-rose-600 border-rose-200",
      employers: [
        "King Hamad University Hospital Bahrain",
        "Super Metro Specialized Medical Center KUWAIT",
        "Alorf Hospital KUWAIT",
        "KIMS Health Medical Center QATAR",
        "Reyada Medical Centre QATAR",
        "Gardania Medical Center QATAR",
        "Al Hekma Medical Complex QATAR",
        "Kings Dental Center QATAR",
      ],
    },
    {
      title: "CONSTRUCTION & HOSPITALITY",
      icon: HardHat,
      banner: "/images/assets/banner_construction.png",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
      employers: [
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
      ],
    },
    {
      title: "PRODUCTION & TRANSPORTING",
      icon: Truck,
      banner: "/images/assets/banner_transport.png",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
      employers: [
        "Adpro POLAND",
        "Ditola POLAND",
        "T&T People POLAND",
        "Vincy-Play POLAND",
        "Saudingos LITHUANIA",
        "Mag Trans POLAND",
        "Kaspryska POLAND",
        "Foer Group LITHUANIA",
        "UAB Transport LITHUANIA",
      ],
    },
  ];

  return (
    <section id="sectors" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Brochure Page 7 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-imr-blue-primary text-xs font-mono uppercase tracking-wider">
            <span>Global Placement Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy leading-tight">
            Our candidates were satisfied <br />
            <span className="text-imr-blue-primary">with the following Employers</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Leading hospital systems, infrastructure consortiums, and transport networks across the Middle East and Europe partnered with Indian Manpower Resource.
          </p>
        </div>

        {/* 3 Sector Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Sector Banner Visual */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={sec.banner}
                      alt={sec.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-imr-navy/80 via-transparent to-transparent" />
                    
                    {/* Header Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold tracking-tight">
                          {sec.title}
                        </h3>
                      </div>
                      <span className="text-xs text-sky-300 font-mono">
                        {sec.employers.length} Orgs
                      </span>
                    </div>
                  </div>

                  {/* Employer List */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {sec.employers.map((emp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-light">
                          <CheckCircle2 className="w-4 h-4 text-imr-blue-primary flex-shrink-0 mt-0.5" />
                          <span>{emp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100/60 mt-4">
                  <div className="text-[11px] text-slate-400 font-light italic">
                    Verified overseas recruitment & placement
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
