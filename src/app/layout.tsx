import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileQuickActions from "@/components/MobileQuickActions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Indian Manpower Resource | Sourcing Manpower to the World",
  description:
    "Indian Manpower Resource (IMR) - Govt. Approved Recruiting Agent (India & UAE). Sourcing global manpower for Healthcare, Construction, Hospitality, Oil & Gas, Transport, and International Education.",
  keywords: [
    "Indian Manpower Resource",
    "IMR",
    "Recruitment Agency India",
    "Global Manpower Sourcing",
    "Healthcare Recruitment",
    "Oil and Gas Recruitment",
    "Study Abroad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased overflow-x-hidden`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden relative pb-16 md:pb-0">
        {children}
        <MobileQuickActions />
      </body>
    </html>
  );
}

