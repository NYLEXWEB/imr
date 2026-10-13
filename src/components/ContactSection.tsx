"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Globe,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Employer",
    country: "India",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-[11px] sm:text-xs font-light tracking-wide border border-sky-200/80">
            <span>Global Contact Points</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#050811]">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
            Reach out to our registered offices across India, Ireland, and the UAE for international recruitment and workforce mobilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xs space-y-6 sm:space-y-8">
            {/* Header / Brand info */}
            <div className="flex items-center gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-100">
              <div className="relative w-32 sm:w-36 h-10 sm:h-12 flex-shrink-0">
                <Image
                  src="/images/assets/imr_logo_pill.png"
                  alt="Indian Manpower Resource"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-slate-200 pl-3 sm:pl-4">
                <h3 className="text-sm sm:text-base font-normal text-[#050811] leading-tight">
                  INDIAN MANPOWER RESOURCE
                </h3>
                <p className="text-[11px] sm:text-xs text-sky-600 font-light">
                  Sourcing Manpower To The World
                </p>
              </div>
            </div>

            {/* Direct Phone Lines with WhatsApp Quick Buttons */}
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
                Direct Regional Desks
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {/* For European Clients */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/50 border-2 border-emerald-500/30 hover:border-emerald-500 transition flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light">
                        <span className="text-base">🇪🇺 🇮🇪</span>
                        <span className="font-semibold text-slate-900">For European Clients</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-800 font-medium block mb-1">
                      Europe / Ireland Desk
                    </span>
                    <a
                      href="tel:+353874896695"
                      className="text-xs font-normal text-[#050811] hover:underline block font-mono"
                    >
                      +353 874896695
                    </a>
                  </div>
                  <a
                    href="https://wa.me/353874896695?text=Hello%20IMR%20European%20Desk%2C%20I%20am%20reaching%20out%20regarding%20recruitment%20for%20European%20clients."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium shadow-2xs transition active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp (Europe)</span>
                  </a>
                </div>

                {/* For India */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light">
                        <span className="text-base">🇮🇳</span>
                        <span className="font-semibold text-slate-900">For India</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 block mb-1">
                      India Head Office
                    </span>
                    <a
                      href="tel:+919388770039"
                      className="text-xs font-normal text-[#050811] hover:underline block font-mono"
                    >
                      +91 93887 70039
                    </a>
                  </div>
                  <a
                    href="https://wa.me/919388770039?text=Hello%20IMR%20India%20Desk%2C%20I%20have%20an%20inquiry%20regarding%20recruitment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium transition active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp (India)</span>
                  </a>
                </div>

                {/* UAE Desk */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light">
                        <span className="text-base">🇦🇪</span>
                        <span className="font-semibold text-slate-900">For UAE</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 block mb-1">
                      Middle East Desk
                    </span>
                    <a
                      href="tel:+971501165956"
                      className="text-xs font-normal text-[#050811] hover:underline block font-mono"
                    >
                      +971 50 116 5956
                    </a>
                  </div>
                  <a
                    href="https://wa.me/971501165956?text=Hello%20IMR%20UAE%20Desk%2C%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-medium transition active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp (UAE)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="mailto:info@imrhr.com"
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Email Address</div>
                  <div className="text-xs font-normal text-slate-900">info@imrhr.com</div>
                </div>
              </a>

              <a
                href="https://indianmanpowerresource.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Official Portal</div>
                  <div className="text-xs font-normal text-slate-900 truncate">indianmanpowerresource.com</div>
                </div>
              </a>
            </div>

            {/* Registered Address */}
            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200 flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono text-slate-400">Head Office Address</div>
                <p className="text-xs text-slate-700 font-light leading-relaxed">
                  Indian Manpower Resource, First Floor, City heights building N.H 47, South Chalakudy, Thrissur, Kerala, India.
                </p>
              </div>
            </div>

            {/* Government License Badges */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2">
              <div className="text-[11px] font-light text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>LIC. No: B1157/KER/PART/200/5/9681/2020 - INDIA</span>
              </div>
              <div className="text-[11px] font-light text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>LIC. No: SC241019101 - UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xs">
            <div className="mb-5 sm:mb-6 space-y-1">
              <h3 className="text-lg sm:text-xl font-light text-[#050811]">
                Send an Inquiry / Demand
              </h3>
              <p className="text-xs text-slate-500 font-light">
                Whether you are an overseas employer or an aspiring candidate, get connected with our recruiters today.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mx-auto border border-sky-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-normal text-slate-900">
                  Thank You for Your Submission!
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Our regional coordinator will review your inquiry and get in touch with you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs text-sky-600 underline font-light hover:text-sky-700"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-light text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-light bg-slate-50/50 focus:bg-white transition"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-light text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-light bg-slate-50/50 focus:bg-white transition"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-light text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-light bg-slate-50/50 focus:bg-white transition"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-light text-slate-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50 focus:bg-white font-light transition"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="Employer">European / Overseas Employer</option>
                      <option value="JobSeeker">Job Seeker / Candidate</option>
                      <option value="Student">Student (Study Abroad)</option>
                      <option value="Partner">Business Partner / Agency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-light text-slate-700 mb-1">
                    Designated Regional Desk
                  </label>
                  <select
                    className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50 focus:bg-white font-light transition"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="Europe">🇪🇺 Europe & Ireland Desk (For European Clients)</option>
                    <option value="India">🇮🇳 India Head Office (For India)</option>
                    <option value="UAE">🇦🇪 UAE & GCC Regional Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-light text-slate-700 mb-1">
                    Message / Demand Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about requirements, roles, country preference, or questions..."
                    className="w-full text-base sm:text-xs p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 font-light bg-slate-50/50 focus:bg-white transition"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#050811] hover:bg-slate-800 text-white text-xs font-normal transition shadow-sm active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
