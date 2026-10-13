"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { useWhatsAppModal } from "@/context/WhatsAppModalContext";

export default function Navbar() {
  const { openWhatsAppModal } = useWhatsAppModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll position to handle transparent navbar in hero section
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Europe Mobility", href: "/europe" },
    { name: "Sectors", href: "/sectors" },
    { name: "Medical", href: "/medical" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Bar: Compact 64px on mobile, 80px on desktop */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Left: Clean Brand Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <div className="relative w-32 h-9 sm:w-36 sm:h-10 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/assets/imr_logo.png"
                  alt="Indian Manpower Resource"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[13px] tracking-tight transition-colors py-1 relative whitespace-nowrap ${
                      isActive
                        ? "text-[#1d4ed8] font-semibold"
                        : "text-slate-800 font-normal hover:text-[#1d4ed8]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d4ed8] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Desktop CTA Button (Minimal Aesthetic Blue) */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Header Actions: Quick Call, WhatsApp & Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              {/* Quick WhatsApp shortcut */}
              <button
                onClick={() =>
                  openWhatsAppModal({
                    message: "Hello IMR, I have an inquiry regarding recruitment services.",
                  })
                }
                className="p-2 sm:px-3 sm:py-1.5 rounded-full transition flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100"
                aria-label="Direct Regional WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline font-semibold">WhatsApp</span>
              </button>

              {/* Quick Call shortcut */}
              <a
                href="tel:+919388770039"
                className="p-2 rounded-full transition bg-slate-100 text-slate-900 hover:bg-slate-200"
                aria-label="Call India Desk"
              >
                <Phone className="w-4 h-4 text-slate-800" />
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full transition active:scale-90 text-slate-900 hover:bg-slate-100"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto p-5 sm:p-6 animate-fade-in-down border-b border-slate-200 shadow-2xl">
          {/* Nav links */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 px-3">
              Navigation
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm py-3 px-4 rounded-xl transition ${isActive
                      ? "bg-sky-50 text-sky-700 font-medium border border-sky-100"
                      : "text-slate-700 hover:bg-slate-50 font-light"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? "text-sky-500" : "text-slate-400"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Regional Desks & Trust Credentials */}
          <div className="pt-6 mt-4 border-t border-slate-100 space-y-4">
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 px-1">
              Direct Global Desks
            </div>

            <div className="grid grid-cols-3 gap-2">
              <a
                href="tel:+353874896695"
                className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-center hover:bg-emerald-100 transition"
              >
                <div className="text-base mb-0.5">🇪🇺 🇮🇪</div>
                <div className="text-[10px] font-medium text-emerald-950">Europe</div>
                <div className="text-[9px] text-emerald-700 font-light truncate">
                  For EU Clients
                </div>
              </a>

              <a
                href="tel:+919388770039"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100 transition"
              >
                <div className="text-base mb-0.5">🇮🇳</div>
                <div className="text-[10px] font-normal text-slate-900">India</div>
                <div className="text-[9px] text-sky-600 font-light truncate">
                  +91 93887
                </div>
              </a>

              <a
                href="tel:+971501165956"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100 transition"
              >
                <div className="text-base mb-0.5">🇦🇪</div>
                <div className="text-[10px] font-normal text-slate-900">UAE</div>
                <div className="text-[9px] text-sky-600 font-light truncate">
                  +971 50
                </div>
              </a>
            </div>

            {/* Direct Regional WhatsApp Action in Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppModal({
                  message: "Hello IMR, I would like to inquire about recruitment services.",
                });
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-normal transition shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry (Europe & India)</span>
            </button>

            {/* License Stamp */}
            <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center gap-2.5 text-[11px] text-sky-900">
              <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <div>
                <span className="font-medium">Govt. MEA Lic: </span>
                <span className="font-light">B1157/KER/PART/2020</span>
              </div>
            </div>

            {/* Action CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#050811] hover:bg-slate-800 text-white text-xs py-3.5 rounded-full transition font-normal shadow-sm"
            >
              <span>Get In Touch / Submit Demand</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

