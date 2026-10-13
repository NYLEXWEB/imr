"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 text-xs font-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand & Mission Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="relative w-36 sm:w-44 h-12 sm:h-14">
              <Image
                src="/images/assets/imr_logo.png"
                alt="Indian Manpower Resource"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-normal text-white tracking-tight">
                INDIAN MANPOWER RESOURCE
              </h3>
              <p className="text-[10px] text-sky-400 uppercase tracking-widest font-light">
                SOURCING MANPOWER TO THE WORLD
              </p>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              A Government-Approved recruiting agency dedicated to humanity, loyalty, and precision recruitment. Giving one hand to the employee and the other to the employer.
            </p>

            <div className="pt-2 space-y-1.5 text-[11px] text-slate-300 font-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Govt. Approved: LIC. B1157/KER/PART/200/5/9681/2020</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>UAE Registered: LIC. SC241019101</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">
              Company & Process
            </h4>
            <ul className="space-y-2 font-light">
              {[
                { name: "About Indian Manpower Resource", href: "/about" },
                { name: "Words of Management", href: "/about" },
                { name: "Our Story (2003-2024)", href: "/about" },
                { name: "11-Stage Recruitment Process", href: "/process" },
                { name: "Sectors & Satisfied Employers", href: "/sectors" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-300 transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">
              Specialized Sectors
            </h4>
            <ul className="space-y-2 font-light">
              {[
                { name: "Healthcare Services", href: "/medical" },
                { name: "Oil & Gas Projects", href: "/sectors" },
                { name: "Construction & Civil", href: "/sectors" },
                { name: "Production & Transport", href: "/sectors" },
                { name: "Global Study Abroad", href: "/education" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-300 transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Regional Desks */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">
              Global Regional Desks
            </h4>
            <div className="space-y-2.5 text-xs font-light">
              <div>
                <span className="text-slate-200 font-normal">🇮🇳 India Office:</span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  First Floor, City heights building N.H 47, South Chalakudy, Thrissur, Kerala India.
                </p>
                <a href="tel:+919388770039" className="text-sky-400 hover:underline text-[11px] inline-block mt-0.5">
                  +91 93887 70039
                </a>
              </div>

              <div>
                <span className="text-slate-200 font-normal">🇮🇪 Ireland Desk:</span>
                <div>
                  <a href="tel:+353874896695" className="text-sky-400 hover:underline text-[11px] inline-block">
                    +353 874896695
                  </a>
                </div>
              </div>

              <div>
                <span className="text-slate-200 font-normal">🇦🇪 UAE Desk:</span>
                <div>
                  <a href="tel:+971501165956" className="text-sky-400 hover:underline text-[11px] inline-block">
                    +971 50 116 5956
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="mailto:info@imrhr.com"
                  className="text-slate-300 hover:text-white transition flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>info@imrhr.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light">
          <div className="text-slate-400 text-center sm:text-left">
            © 2026 Indian Manpower Resource. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden sm:inline">Govt. Reg. B1157/KER/PART/200/5/9681/2020</span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

