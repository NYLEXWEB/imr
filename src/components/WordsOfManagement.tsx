import Image from "next/image";
import { HeartHandshake, Compass, Users2, Shield } from "lucide-react";

export default function WordsOfManagement() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-imr-navy via-[#161c42] to-[#1a2352] text-white shadow-2xl border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-medium tracking-widest text-sky-400 uppercase">
                  Leadership Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                  WORDS OF <br />
                  <span className="text-sky-400">MANAGEMENT</span>
                </h2>
              </div>

              {/* Exact Brochure Statement */}
              <div className="relative">
                <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed pl-4 border-l-2 border-sky-400">
                  &ldquo;As a partnership firm, we believe in humanity and loyalty. We are trying to find the maximum number of jobs that are suitable and required for that. Good leadership and manpower are the wealth of each developing company. We are giving one hand to the employee and other hand to the employer. We are standing in the middle with the power of Human resources.&rdquo;
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-sky-400 flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Humanity & Loyalty</h3>
                    <p className="text-xs text-slate-300 font-light mt-0.5">
                      Fostering authentic trust with every candidate and global organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-sky-400 flex-shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">The Middle Bridge</h3>
                    <p className="text-xs text-slate-300 font-light mt-0.5">
                      Giving one hand to the employee and the other to the employer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column: Management Team */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800">
                  <Image
                    src="/images/assets/team_management.png"
                    alt="Indian Manpower Resource Management Team"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-imr-navy/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-imr-navy/90 backdrop-blur-md border border-white/10 text-center">
                    <p className="text-xs font-semibold text-white">Leadership & Executive Board</p>
                    <p className="text-[10px] text-sky-300 font-light">Indian Manpower Resource</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
