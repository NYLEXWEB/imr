import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiraaEuropeanMission from "@/components/AiraaEuropeanMission";
import EuropeanDeploymentsGallery from "@/components/EuropeanDeploymentsGallery";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import { ShieldCheck, Globe2, ArrowRight, Phone } from "lucide-react";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import { CONTACT_INFO } from "@/config/contact";

export const metadata = {
  title: "European Workforce Mobility & AIRAA Mission | IMR International",
  description:
    "Authorized European workforce mobilization corridors across Romania, Germany, Ireland, Poland, Greece, and Bulgaria. Member: All India Recruiting Agency Association (AIRAA).",
};

export default function EuropeMobilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Europe Mobility Header Banner */}
        <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-light">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>AIRAA Member</span>
              </span>
              <span>•</span>
              <span>Govt. of India MEA Licensed</span>
              <span>•</span>
              <span className="text-sky-300 font-medium">Ireland Regional Desk ({CONTACT_INFO.europe.phoneDisplay})</span>
            </div>

            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                European Workforce Mobility & <br className="hidden sm:inline" />
                <span className="text-sky-400 font-normal">Bilateral Talent Corridors</span>
              </h1>
              <p className="text-xs sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                Partnering with European enterprises, logistics carriers, health trusts, and infrastructure groups across Romania, Germany, Ireland, Poland, Greece, and Bulgaria.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppEnquiryButton
                message="Hello IMR European Desk, we are an employer in Europe interested in initiating candidate recruitment."
                label="WhatsApp European Desk"
                variant="emerald"
                showArrow={true}
                className="py-3 px-6 text-xs font-medium"
              />

              <a
                href="tel:+353874896695"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-light border border-white/20 transition active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Ireland Desk (+353 874896695)</span>
              </a>
            </div>
          </div>
        </section>

        {/* 1. AIRAA Mission Section */}
        <AiraaEuropeanMission />

        {/* 2. Verified Deployments & Visa Stamping Showcase */}
        <EuropeanDeploymentsGallery />

        {/* 3. Global Contact Section with European Desk Highlight */}
        <div className="py-8 bg-slate-50">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
