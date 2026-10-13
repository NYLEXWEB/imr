import Image from "next/image";
import { Check, Target, Sparkles, Building2, UserCheck } from "lucide-react";

export default function ChooseRightPlace() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Geometrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Brochure-inspired Geometric Framing */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Overlapping Blue Geometric accents matching Page 3 */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-imr-navy rounded-2xl -z-10 opacity-90 hidden sm:block" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-500 rounded-2xl -z-10 opacity-80 hidden sm:block" />

              <div className="relative bg-white p-4 sm:p-5 rounded-3xl shadow-xl border border-slate-200/80">
                <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/assets/choose_right_place.png"
                    alt="Choose Right Place - Indian Manpower Resource"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-imr-navy/60 via-transparent to-transparent" />

                  {/* Concentric Circle Decorative Element from Page 3 */}
                  <div className="absolute bottom-4 right-4 flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-4 mt-2 flex items-center justify-between text-xs text-slate-500 font-light">
                  <span className="font-mono text-imr-blue-primary font-medium">+ + PRECISION MATCHING</span>
                  <span>100% Verified Candidates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Exact Brochure Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-imr-blue-primary tracking-widest uppercase">
                <span>+ +</span>
                <span>Placement Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy">
                CHOOSE <br />
                <span className="text-imr-blue-primary">RIGHT PLACE</span>
              </h2>
            </div>

            {/* Exact Content from Brochure */}
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Our team of seasoned recruiters efficiently comprehends the culture, values, and specific requirements of both clients and candidates. We collaborate closely with all parties to ensure the best match. By quickly grasping employer needs, we identify candidates who align with organizational culture and values. We are dedicated to fostering long-term relationships with both employers and employees, taking pride in our role in this process.
            </p>

            {/* Strategic Value Highlights */}
            <div className="space-y-3 pt-2">
              {[
                "Comprehends organizational culture, values, and exact technical demands",
                "Dedicated to fostering long-term relationships for both employer and employee",
                "Government authorized legal and credentials verification framework",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-imr-blue-primary flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-700 font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-imr-navy hover:bg-imr-blue-primary text-white text-xs font-normal transition-all shadow-sm hover:shadow"
              >
                <span>Partner With Us Today</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
