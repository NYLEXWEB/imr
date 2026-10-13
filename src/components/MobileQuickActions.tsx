"use client";

import Link from "next/link";
import { Phone, MessageCircle, Send } from "lucide-react";

export default function MobileQuickActions() {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto max-w-sm w-full mx-auto bg-slate-950/90 backdrop-blur-xl text-white border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.35)] rounded-full px-3 py-2 flex items-center justify-between gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:+919388770039"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition text-[11px] font-normal text-slate-200"
          aria-label="Direct Phone Call to IMR"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call Desk</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href="https://wa.me/919388770039?text=Hello%20Indian%20Manpower%20Resource%2C%20I%20would%20like%20to%20make%20an%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 active:scale-95 transition text-[11px] font-medium text-white shadow-sm"
          aria-label="WhatsApp Chat with IMR"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Inquiry Link */}
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-sky-500 hover:bg-sky-400 active:scale-95 transition text-[11px] font-medium text-white shadow-sm shadow-sky-500/30"
        >
          <Send className="w-3 h-3" />
          <span>Inquire</span>
        </Link>
      </div>
    </aside>
  );
}
