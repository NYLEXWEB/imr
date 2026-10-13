import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Users2,
  Target,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const milestones = [
  {
    year: "2003",
    title: "Inception in Mumbai",
    description:
      "Started Manpower Service as a Recruitment Agent at Mumbai, the major Business Capital City of India.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    year: "2006",
    title: "Kerala Expansion",
    description:
      "Developed new connections and established our primary operational base in Cochin, Kerala.",
    color: "from-emerald-600 to-teal-600",
  },
  {
    year: "2008",
    title: "European Debut (Poland)",
    description:
      "Mobilized certified Welders and Fabricators for the prestigious Gdansk Shipyard in Poland.",
    color: "from-amber-600 to-orange-600",
  },
  {
    year: "2010",
    title: "Healthcare in Bahrain",
    description:
      "Recruited Registered Staff Nurses to King Hamad University Hospital Bahrain as an associate recruitment agent.",
    color: "from-rose-600 to-pink-600",
  },
  {
    year: "2013",
    title: "5,000+ Global Placements",
    description:
      "Surpassed 5,000 international professional placements across Gulf infrastructure and European industries.",
    color: "from-purple-600 to-violet-600",
  },
  {
    year: "2018",
    title: "Partnership Registration",
    description:
      "Formally registered as a partnership firm in the name of Indian Manpower Resource (IMR).",
    color: "from-sky-600 to-blue-600",
  },
  {
    year: "2020",
    title: "Govt. Approved MEA Agent",
    description:
      "Officially recognized under the Ministry of External Affairs, Govt. of India, as an authorized Recruiting Agent.",
    color: "from-emerald-600 to-green-600",
  },
  {
    year: "2023",
    title: "Ireland Administration Hub",
    description:
      "Established our Ireland-based administration department for direct accessibility by European employers.",
    color: "from-indigo-600 to-blue-600",
  },
  {
    year: "2024",
    title: "UAE Registered Office",
    description:
      "Inaugurated our UAE registered office (Lic. SC241019101) to support Middle East client mandates.",
    color: "from-amber-600 to-yellow-600",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
              About Indian Manpower Resource
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811]">
              Leadership, Philosophy & Journey
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
              Established with an unshakeable commitment to human integrity and mutual value creation across international labor markets.
            </p>
          </div>

          {/* Words of Management Card with Deep Luxury Gradient */}
          <section className="bg-gradient-to-br from-[#050811] via-[#0a0f1d] to-[#111936] text-white p-6 sm:p-10 lg:p-14 rounded-3xl shadow-xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
            <div className="space-y-5 sm:space-y-6 relative z-10 max-w-3xl">
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-sky-400 uppercase">
                Brochure Page 02 • Executive Message
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight">
                WORDS OF <span className="text-sky-400 font-normal">MANAGEMENT</span>
              </h2>

              <blockquote className="text-xs sm:text-base lg:text-lg font-light text-slate-200 leading-relaxed border-l-4 border-sky-400 pl-4 sm:pl-6 my-4 sm:my-6 bg-white/5 p-3.5 sm:p-5 rounded-r-2xl border-y border-r border-white/10">
                &ldquo;As a partnership firm, we believe in humanity and loyalty. We are trying to find the maximum number of jobs that are suitable and required for that. Good leadership and manpower are the wealth of each developing company. We are giving one hand to the employee and other hand to the employer. We are standing in the middle with the power of Human resources.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <HeartHandshake className="w-5 h-5 text-sky-400 mb-2" />
                  <h3 className="text-xs sm:text-sm font-normal text-white">Humanity & Loyalty</h3>
                  <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                    Upholding the rights, dignity, and career aspirations of every deployed candidate.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <Users2 className="w-5 h-5 text-sky-400 mb-2" />
                  <h3 className="text-xs sm:text-sm font-normal text-white">The Middle Bridge</h3>
                  <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                    Equally balancing employer performance demands with worker welfare and protection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Photo & Mission Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
              <Image
                src="/images/assets/team_management.png"
                alt="Management Board"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs p-2">
                <div className="font-normal text-white text-xs sm:text-sm">Leadership & Executive Board</div>
                <div className="text-[10px] sm:text-[11px] text-sky-300 font-light">Indian Manpower Resource</div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono tracking-wider text-sky-600 uppercase">
                Brochure Page 03 • Matching Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#050811]">
                CHOOSE RIGHT PLACE
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Our seasoned recruiting teams efficiently comprehend the culture, values, and specific requirements of both clients and candidates. We collaborate closely with all parties to ensure the best match. By quickly grasping employer needs, we identify candidates who align with organizational culture and values.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/70">
                  <Target className="w-4 h-4 text-sky-600 mb-1" />
                  <div className="text-xs font-normal text-slate-900">Cultural Alignment</div>
                  <div className="text-[10px] text-slate-500 font-light">Precision employer fit</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
                  <div className="text-xs font-normal text-slate-900">Govt. Authorization</div>
                  <div className="text-[10px] text-slate-500 font-light">100% legal MEA clearance</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200/70">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mb-1" />
                  <div className="text-xs font-normal text-slate-900">Long-Term Bonds</div>
                  <div className="text-[10px] text-slate-500 font-light">Multi-year client renewals</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Timeline (2003 to 2024) */}
          <section className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-wider text-sky-600 uppercase">
                Brochure Page 04 • 2003 to 2024
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#050811]">
                Our Journey & Milestones
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light">
                Over 20 years of relentless dedication to global recruitment standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-light tracking-tight bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                        {m.year}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Milestone {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xs font-normal text-slate-900 uppercase tracking-wider">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action CTAs */}
          <div className="text-center pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/process"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95"
            >
              <span>Explore Our 11-Stage Recruitment Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/919388770039?text=Hello%20IMR%2C%20I%20would%20like%20to%20connect%20regarding%20corporate%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-light border border-slate-300 transition active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

