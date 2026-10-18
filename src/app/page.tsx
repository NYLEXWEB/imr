import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Headphones,
  Users,
  HeartHandshake,
  Stethoscope,
  Factory,
  GraduationCap,
  FileCheck2,
  ChevronRight,
  HardHat,
  Truck,
  Building2,
  CheckCircle2,
  Flame,
  Sparkles,
} from "lucide-react";
import WhatsAppEnquiryButton from "@/components/WhatsAppEnquiryButton";
import AiraaEuropeanMission from "@/components/AiraaEuropeanMission";
import EuropeanDeploymentsGallery from "@/components/EuropeanDeploymentsGallery";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  const services = [
    {
      id: "medical",
      title: "Medical & Healthcare Recruitment",
      category: "Healthcare Division",
      description:
        "Physicians, Registered Nurses, Allied Health Experts, and Hospital Administrators across GCC & European healthcare systems with full credentialing.",
      features: [
        "MOH / DOH / DHA / QCHP Licensing Support",
        "Direct Placements in Bahrain, Kuwait & Qatar",
        "European Hospital Trust Pathways (HSE & NHS)",
      ],
      icon: Stethoscope,
      image: "/services/1.png",
      href: "/medical",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding Medical & Healthcare Recruitment services.",
    },
    {
      id: "oil-gas",
      title: "Oil & Gas Projects & Industrial Trades",
      category: "Energy & Infrastructure",
      description:
        "Direct recruitment interview campaigns for Saipem, Descon, Sinopec, and Aramco Projects with verified trade tests for welders and technicians.",
      features: [
        "Certified 6G Welders, Riggers & Pipe Fabricators",
        "Direct Employer Delegations & Trade Testing",
        "Saudi Arabia, UAE, Qatar & Europe Project Staffing",
      ],
      icon: Factory,
      image: "/services/2.png",
      href: "/sectors",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding Oil & Gas and Industrial Project recruitment.",
    },
    {
      id: "construction",
      title: "Construction, Civil & Hospitality",
      category: "Infrastructure & Commercial",
      description:
        "Supplying skilled civil engineers, project supervisors, master tradesmen, and hospitality personnel across Europe and the Gulf.",
      features: [
        "Civil, Structural & MEP Engineering Teams",
        "Direct European Work Permits & Relocation",
        "Hotel Operations, Culinary & Facility Staff",
      ],
      icon: HardHat,
      image: "/services/3.png",
      href: "/sectors",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding Construction & Hospitality manpower.",
    },
    {
      id: "transport",
      title: "Production, Logistics & European Transport",
      category: "Logistics & Manufacturing",
      description:
        "End-to-end recruitment for industrial factories, assembly plants, and long-haul transportation fleets across Poland, Lithuania, and Central Europe.",
      features: [
        "Heavy Vehicle & Long-Haul CE Drivers",
        "Factory Technicians, Welders & Assembly Lines",
        "Full Legal Work Authorization & Mobilization",
      ],
      icon: Truck,
      image: "/services/4.png",
      href: "/sectors",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding European Production & Transport recruitment.",
    },
    {
      id: "education",
      title: "Global Higher Education & Study Abroad",
      category: "Study Abroad Division",
      description:
        "Official student counseling, application processing, and dependent visa guidance for 18 premier partner universities across the UK, Canada, and Europe.",
      features: [
        "BPP University UK Direct Representative (7 Intakes/Year)",
        "Attractive Merit Scholarships & Career Guidance",
        "Dependent Visa Pathways for Graduate Students",
      ],
      icon: GraduationCap,
      image: "/services/5.png",
      href: "/education",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding Global Higher Education and Study Abroad admissions.",
    },
    {
      id: "process",
      title: "Executive Search & 11-Stage Mobilization",
      category: "Corporate Recruitment",
      description:
        "A rigorous, legally transparent cross-border methodology from employer Needs Assessment and Demand Letter to visa issuance and 6-month monitoring.",
      features: [
        "Ministry of External Affairs (India) Licensed",
        "Registered Administration Hubs in UAE & Ireland",
        "Comprehensive 6-Month Post-Deployment Guarantee",
      ],
      icon: FileCheck2,
      image: "/services/6.png",
      href: "/process",
      waMessage:
        "Hello Indian Manpower Resource, I would like to make an inquiry regarding Executive Search and the 11-Stage Recruitment workflow.",
    },
  ];

  // Original client logos extracted directly from Brochure Page 10
  const originalClientLogos = [
    {
      name: "Aamal (اعمال AAMAL)",
      file: "/images/assets/client_logos/logo_aamal.png",
      country: "Qatar / GCC Conglomerate",
    },
    {
      name: "sea zen",
      file: "/images/assets/client_logos/logo_seazen.png",
      country: "International Hospitality",
    },
    {
      name: "mercado 360",
      file: "/images/assets/client_logos/logo_mercado360.png",
      country: "Retail & Facility Services",
    },
    {
      name: "Reyada Medical Centre",
      file: "/images/assets/client_logos/logo_reyada.png",
      country: "Qatar Healthcare",
    },
    {
      name: "AMWAJ (أمواج AMWAJ)",
      file: "/images/assets/client_logos/logo_amwaj.png",
      country: "Catering & Services Qatar",
    },
    {
      name: "KIMSHEALTH",
      file: "/images/assets/client_logos/logo_kimshealth.png",
      country: "GCC Hospital Network",
    },
    {
      name: "Mag Trans",
      file: "/images/assets/client_logos/logo_magtrans.png",
      country: "Poland European Logistics",
    },
    {
      name: "ORION HOLDING COMPANY",
      file: "/images/assets/client_logos/logo_orion.png",
      country: "Kuwait Corporate Group",
    },
  ];

  const oilAndGasProjects = [
    { name: "Saipem ABUDHABI", region: "Abu Dhabi, UAE", tag: "Offshore Marine & EPC" },
    { name: "Descon UAE & QATAR", region: "UAE & Qatar", tag: "Refinery Engineering" },
    { name: "Sinopec SAUDI", region: "Saudi Arabia", tag: "Petrochemical Infrastructure" },
    { name: "Aramco Projects SAUDI", region: "Saudi Arabia", tag: "Mega Energy Projects" },
  ];

  const processHighlights = [
    { step: "01", title: "Needs Assessment", desc: "Understanding company culture & role parameters" },
    { step: "03", title: "Demand Letter & POA", desc: "Official MEA e-Migrate registration" },
    { step: "06", title: "Client Delegation", desc: "Direct interview campaigns & trade tests" },
    { step: "07", title: "Medical & PCC", desc: "GAMCA health fitness & police clearances" },
    { step: "10", title: "Visa & Mobilization", desc: "Flight ticketing & scheduled onboarding" },
    { step: "11", title: "6-Month Support", desc: "Post-deployment monitoring for candidate welfare" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* 1. Header with Global Contacts */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section - EXACT SINGLE SCREEN FIT with User's Background Video */}
        <HeroSection />

        {/* 3. NEAT ABOUT SECTION (Strictly White, Black & Light Blue, with 'See More' to /about) */}
        <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Story & Philosophy */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-[11px] sm:text-xs font-light tracking-wide border border-sky-200/80 shadow-2xs">
                  <HeartHandshake className="w-3.5 h-3.5 text-sky-500" />
                  <span>About Indian Manpower Resource • Est. 2003</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0a0f1d] leading-[1.15]">
                    Humanity, Loyalty & <br className="hidden sm:inline" />
                    <span className="font-normal text-sky-500">The Middle Bridge</span>
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed">
                    Indian Manpower Resource (IMR) is a Government-Approved International Recruiting Agent recognized under the Ministry of External Affairs (Govt. of India), with administration hubs in Ireland and the UAE.
                  </p>
                </div>

                {/* Management Core Quote */}
                <blockquote className="border-l-4 border-sky-500 pl-4 sm:pl-5 my-3 sm:my-4 text-xs sm:text-sm lg:text-base font-light text-slate-700 italic leading-relaxed bg-sky-50/50 p-3.5 sm:p-4 rounded-r-2xl border-y border-r border-sky-100">
                  &ldquo;As a partnership firm, we believe in humanity and loyalty. We are giving one hand to the employee and other hand to the employer. We are standing in the middle with the power of Human resources.&rdquo;
                  <div className="mt-2 text-[11px] sm:text-xs font-normal text-sky-800 not-italic">
                    — Leadership Board, Indian Manpower Resource
                  </div>
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Founded in Mumbai in 2003 and expanded to Cochin Kerala in 2006, IMR has recruited over 50,000 qualified professionals for Gdansk Shipyard Poland, King Hamad Hospital Bahrain, Saipem UAE, and universities across the UK and Europe.
                </p>

                {/* Verification Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-0.5">
                    <div className="text-xs font-normal text-slate-900">Govt. MEA License</div>
                    <div className="text-[11px] text-sky-600 font-light">B1157/KER/PART/200/5/9681</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-0.5">
                    <div className="text-xs font-normal text-slate-900">3 Regional Hubs</div>
                    <div className="text-[11px] text-sky-600 font-light">India • Ireland • UAE</div>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-0.5">
                    <div className="text-xs font-normal text-slate-900">20+ Years Trust</div>
                    <div className="text-[11px] text-sky-600 font-light">50,000+ Placed</div>
                  </div>
                </div>

                {/* See More Buttons linking to /about */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-medium transition shadow-sm shadow-sky-500/20 group active:scale-95 text-center"
                  >
                    <span>See More About Us</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <WhatsAppEnquiryButton
                    message="Hello IMR, I would like to learn more about your company profile and recruitment services."
                    label="WhatsApp Inquiry"
                    variant="hero-pill"
                  />
                </div>
              </div>

              {/* Right Column: Visual Leadership Card */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                  <Image
                    src="/about/about-image.png"
                    alt="Indian Manpower Resource Leadership Board"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-light text-[11px] sm:text-xs">
                    Ministry of External Affairs Registered
                  </span>
                  <span className="text-sky-700 font-medium text-[11px] sm:text-xs">
                    Govt. Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION (Placed Immediately After About Section) */}
        <section id="services" className="py-14 sm:py-20 lg:py-24 bg-slate-50/70 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
            {/* Section Header */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-[11px] sm:text-xs font-light tracking-wide border border-sky-200">
                <Building2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Specialized Manpower Divisions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0a0f1d]">
                OUR SERVICES
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Tailored recruitment, international licensing, trade-testing, and workforce mobilization across essential global industries.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((svc) => {
                const Icon = svc.icon;

                return (
                  <div
                    key={svc.id}
                    className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      {/* Service Photographic Image */}
                      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-light border shadow-2xs bg-white/95 text-sky-800 border-sky-200 backdrop-blur-md">
                          {svc.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 space-y-3 sm:space-y-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-200/70">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-sm sm:text-base font-normal text-[#0a0f1d] leading-snug">
                            {svc.title}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          {svc.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          {svc.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600 font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Buttons: WhatsApp Enquiry (Europe & India) + Learn More */}
                    <div className="p-5 sm:p-6 pt-0 space-y-2">
                      <WhatsAppEnquiryButton
                        message={`Hello IMR, I have an inquiry regarding ${svc.title}.`}
                        label="WhatsApp Enquiry"
                        variant="service-card"
                      />

                      <Link
                        href={svc.href}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[11px] font-light transition border border-slate-200/70 active:scale-95"
                      >
                        <span>View Division Details</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4B. AIRAA STRATEGIC EUROPEAN MISSION & 2026 MOBILITY BLUEPRINT */}
        <AiraaEuropeanMission />

        {/* 4C. EUROPEAN VISA STAMPINGS & DEPLOYMENT CORRIDORS */}
        <EuropeanDeploymentsGallery />

        {/* 5. SECTORS & ORIGINAL CLIENT LOGOS SECTION */}
        <section id="clients-section" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-wider text-sky-700 uppercase font-medium">
                Trusted by Global Employers
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#0a0f1d]">
                Established Corporate Partnerships
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Direct recruitments and established workforce partnerships with premier international hospitals, engineering contracting corporations, and European logistics fleets.
              </p>
            </div>

            {/* A. ORIGINAL CLIENT LOGOS */}
            <div className="space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <h3 className="text-sm sm:text-base font-normal text-slate-900">
                    Corporate Partner Brands (Official Logos)
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-light">
                  Verified Bilateral & Employer Mandates
                </span>
              </div>

              {/* Grid of 8 Original Client Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                {originalClientLogos.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-5 rounded-2xl bg-white hover:bg-sky-50/30 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-2.5 sm:gap-3 group"
                  >
                    <div className="relative w-full h-12 sm:h-16 flex items-center justify-center p-1 sm:p-2">
                      <Image
                        src={client.file}
                        alt={client.name}
                        fill
                        className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-0.5 border-t border-slate-100 pt-2 w-full">
                      <div className="text-[11px] sm:text-xs font-normal text-slate-800 line-clamp-1">
                        {client.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-light truncate">
                        {client.country}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Oil & Gas Direct Campaigns Box */}
            <div className="bg-slate-50 rounded-3xl p-5 sm:p-8 border border-slate-200 space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 uppercase">
                    <Flame className="w-3.5 h-3.5 text-sky-500" />
                    <span>Direct Interview Campaigns</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-light text-[#0a0f1d]">
                    Oil & Gas Major Project Delegations
                  </h3>
                </div>
                <Link
                  href="/sectors"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow-2xs w-full sm:w-fit active:scale-95"
                >
                  <span>Explore Sectors Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {oilAndGasProjects.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1"
                  >
                    <div className="text-[10px] font-mono text-sky-600 uppercase font-light">{p.tag}</div>
                    <div className="text-sm font-normal text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500 font-light">{p.region}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. 11-STAGE RECRUITMENT PROCESS PREVIEW */}
        <section id="process-preview" className="py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-wider text-sky-700 uppercase font-medium">
                Ethical Mobilization Framework
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#0a0f1d]">
                11-Stage Structured Recruitment Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A rigorous, transparent workflow from Demand Letter and candidate mapping to embassy visa issuance and 6-month post-deployment monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
              {processHighlights.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition flex items-start gap-3.5 sm:gap-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 text-sky-700 font-medium text-xs sm:text-sm flex items-center justify-center flex-shrink-0 border border-sky-100">
                    {proc.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-normal text-slate-900">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/process"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#050811] hover:bg-slate-800 text-white text-xs font-light transition active:scale-95 shadow-2xs"
              >
                <span>View Complete 11 Stages In Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. GLOBAL HIGHER EDUCATION HIGHLIGHT */}
        <section id="education-preview" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#050811] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/10">
              <div className="space-y-3 sm:space-y-4 max-w-2xl relative z-10 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-300 text-[11px] sm:text-xs font-mono uppercase">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Higher Education & Clinical Pathways</span>
                </div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                  Global Higher Education Admissions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Admissions for 18 premier partner universities in the UK, Canada, Australia, and Europe. Featuring BPP University UK with 7 intakes a year and attractive scholarships based on score.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-[11px] sm:text-xs text-slate-300 font-light">
                    • 18 Partner Universities
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-[11px] sm:text-xs text-slate-300 font-light">
                    • Dependent Visa Pathways
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-[11px] sm:text-xs text-slate-300 font-light">
                    • 13 Study Destinations
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3 relative z-10 w-full md:w-auto">
                <WhatsAppEnquiryButton
                  message="Hello IMR, I am interested in Global Higher Education and Study Abroad admissions."
                  label="WhatsApp Admission Desk"
                  variant="emerald"
                  showArrow={true}
                  className="py-3.5 px-6 font-medium text-xs shadow-md shadow-emerald-900/30"
                />
                <Link
                  href="/education"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow active:scale-95 text-center"
                >
                  <span>Explore Universities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. REASON TO CHOOSE */}
        <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-wider text-sky-600 uppercase">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#0a0f1d]">
                REASON TO CHOOSE IMR
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Key metrics that have defined our international partnerships for over two decades.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
              {[
                {
                  metric: "20+ YEARS",
                  label: "Industry Experience",
                  desc: "From lower technical to executive management",
                  icon: Award,
                },
                {
                  metric: "90%",
                  label: "Candidate Trust",
                  desc: "Personal references by deployed candidates",
                  icon: ShieldCheck,
                },
                {
                  metric: "15 Days",
                  label: "Rapid Delivery",
                  desc: "Fulfilling requirements with suitable profiles",
                  icon: Zap,
                },
                {
                  metric: "24X7",
                  label: "Support System",
                  desc: "Round-the-clock responsiveness for employers",
                  icon: Headphones,
                },
                {
                  metric: "100k+",
                  label: "Active Profiles",
                  desc: "Extensive data bank across disciplines",
                  icon: Users,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 sm:mb-4 border border-sky-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-xl sm:text-2xl font-light text-[#0a0f1d] tracking-tight">
                        {item.metric}
                      </div>
                      <div className="text-xs font-normal text-slate-800 mt-1">
                        {item.label}
                      </div>
                      <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Contact Consultation Banner */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
            <h2 className="text-xl sm:text-3xl font-light text-[#0a0f1d]">
              Start Sourcing or Inquire With Our Global Desks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
              Serving employers across India, Ireland, and the UAE with authorized recruitment accreditation from the Ministry of External Affairs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-normal transition shadow-sm shadow-sky-500/20 active:scale-95"
              >
                <span>Go to Contact & Inquiries Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <WhatsAppEnquiryButton
                message="Hello IMR, I would like to connect with your recruitment desk regarding workforce hiring."
                variant="banner"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer (White, Black & Light Blue) */}
      <Footer />
    </div>
  );
}
