import Image from "next/image";
import { Flame, CheckCircle, Factory, ShieldAlert } from "lucide-react";

const oilProjects = [
  { name: "Saipem ABUDHABI", country: "UAE" },
  { name: "Descon UAE & QATAR", country: "UAE & Qatar" },
  { name: "Sinopec SAUDI", country: "Saudi Arabia" },
  { name: "Aramco Projects SAUDI", country: "Saudi Arabia" },
];

const clientLogos = [
  { name: "AAMAL", src: "/images/assets/client_aamal.png" },
  { name: "Sea Zen", src: "/images/assets/client_seazen.png" },
  { name: "Mercado 360", src: "/images/assets/client_mercado.png" },
  { name: "Reyada Medical Centre", src: "/images/assets/client_reyada.png" },
  { name: "Amwaj", src: "/images/assets/client_amwaj.png" },
  { name: "KIMS Health", src: "/images/assets/client_kimshealth.png" },
  { name: "Mag Trans", src: "/images/assets/client_magtrans.png" },
  { name: "Orion Holding Company", src: "/images/assets/client_orion.png" },
];

export default function OilAndGasProjects() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card with Refined Industrial Navy & White Aesthetics matching Page 10 */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-imr-blue-primary text-xs font-mono uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>Heavy Industry & Energy Operations</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy leading-tight">
              We Made Direct Interviews For <br />
              <span className="text-imr-blue-primary">Oil & Gas Projects</span>
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Conducting direct recruitment campaigns, technical trade assessments, and visa mobilization for major global energy conglomerates.
            </p>
          </div>

          {/* 4 Featured Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            {oilProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2 text-imr-blue-primary">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Project Partner
                  </span>
                </div>
                <div className="text-base font-semibold text-imr-navy">
                  {proj.name}
                </div>
                <div className="mt-2 text-xs text-slate-500 font-light flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Direct Client Delegations</span>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section matching Page 10 */}
          <div className="pt-10 border-t border-slate-200/80">
            <div className="text-center mb-8">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                Featured Partner & Employer Brands
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-4 h-24 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md flex items-center justify-center transition-all duration-300 hover:border-blue-300"
                >
                  <div className="relative w-full h-14">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
