import { ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-slate-900">
      {/* Background Video - High Clarity & Full Visibility */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-85 pointer-events-none"
      >
        <source src="/video/8061757-uhd_2160_3840_25fps.mp4" type="video/mp4" />
      </video>

      {/* Subtle Light Mist Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />

      {/* Main Container - Exact Full Screen Single View Fit */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-16 sm:pt-20 pb-20 sm:pb-8 flex items-center">
        <div className="max-w-xl text-left space-y-3.5 sm:space-y-4">
          {/* Regulatory Trust Badge - Clean & Classic White Glass */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-700 text-[10px] sm:text-xs font-normal tracking-wide shadow-xs max-w-full">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-700 flex-shrink-0" />
            <span className="hidden sm:inline">
              Govt. Approved Recruiting Agent (India & UAE) • MEA Licensed
            </span>
            <span className="sm:hidden">
              Govt. Approved Agent • MEA Licensed
            </span>
          </div>

          {/* Headline - Slim, Elegant Editorial Typography */}
          <div className="space-y-1.5">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-[1.12]">
              INDIAN <br className="hidden sm:inline" />
              <span className="font-normal text-sky-700">MANPOWER</span> RESOURCE
            </h1>

            <div className="flex items-center gap-3 pt-0.5">
              <span className="h-px w-6 sm:w-8 bg-sky-600/70 rounded-full" />
              <p className="text-[10px] sm:text-xs font-medium tracking-[0.22em] sm:tracking-[0.25em] uppercase text-slate-600">
                SOURCING MANPOWER TO THE WORLD
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed max-w-xl">
            Connecting premier global employers with thoroughly verified professionals across Healthcare, Oil & Gas, Construction, Transport, and International Education.
          </p>
        </div>
      </div>
    </section>
  );
}

