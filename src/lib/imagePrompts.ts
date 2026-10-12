export interface ImageAssetMeta {
  path: string;
  name: string;
  category: string;
  aspectRatio: string;
  prompt: string;
  artDirectionNotes: string;
  status: "generated" | "editorial_svg_fallback" | "pending_quota_reset";
}

export const imageAssetRegistry: ImageAssetMeta[] = [
  {
    path: "/images/home/hero-global-workforce.svg",
    name: "hero-global-workforce",
    category: "home",
    aspectRatio: "16:9",
    prompt: "Generate a highly realistic editorial corporate photograph for an international manpower recruitment company website. Show a sophisticated international business environment with modern architecture and a diverse professional workforce. Clean visual space for website content. Natural daylight, realistic skin tones, restrained blue-gray color grading, balanced exposure, commercial photography style, no text, no watermark, no logos.",
    artDirectionNotes: "Wide landscape composition suitable for desktop hero header with natural corporate presence.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/home/company-introduction.svg",
    name: "company-introduction",
    category: "home",
    aspectRatio: "4:3",
    prompt: "A realistic corporate editorial portrait of recruitment consultants in a modern professional office reviewing candidate portfolios with international clients. Restrained lighting, authentic atmosphere, natural skin tones, no artificial smiles, no text.",
    artDirectionNotes: "Human-centered recruitment advisory scene conveying trust and thoroughness.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/home/recruitment-team.svg",
    name: "recruitment-team",
    category: "home",
    aspectRatio: "16:9",
    prompt: "Generate realistic corporate photography showing a diverse, professional recruitment team collaborating in a contemporary office. The people should look credible, confident, and natural. Understated professional clothing, natural light, no text, no logos.",
    artDirectionNotes: "Professional recruitment team collaborating over workforce strategy.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/about/company-story.svg",
    name: "company-story",
    category: "about",
    aspectRatio: "16:9",
    prompt: "Editorial architectural and business scene capturing an international corporate conference and recruitment milestone environment with global city skyline backdrop in soft natural light.",
    artDirectionNotes: "Captures corporate history, progression, and international mobility since 2003.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/about/leadership-team.svg",
    name: "leadership-team",
    category: "about",
    aspectRatio: "4:3",
    prompt: "A refined portrait of senior recruitment partners in an executive meeting room discussing human capital development. Authentic, dignified, human-centered.",
    artDirectionNotes: "Conveys management philosophy: humanity, loyalty, and good leadership.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/services/medical-recruitment.svg",
    name: "medical-recruitment",
    category: "services",
    aspectRatio: "16:9",
    prompt: "Generate realistic editorial photography showing qualified healthcare professionals in a modern professional medical environment. Authentic medical attire, natural lighting, realistic hospital surroundings, trustworthy atmosphere, no text, no logos.",
    artDirectionNotes: "Clinical excellence, nursing, and physician recruitment for hospitals.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/services/construction-recruitment.svg",
    name: "construction-recruitment",
    category: "services",
    aspectRatio: "16:9",
    prompt: "Generate a realistic professional photograph of qualified construction personnel and engineers working on an architectural development. Proper safety gear, natural lighting, authentic job site, no text.",
    artDirectionNotes: "Skilled civil trades, engineering, and infrastructure workforce.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/services/oil-gas-recruitment.svg",
    name: "oil-gas-recruitment",
    category: "services",
    aspectRatio: "16:9",
    prompt: "Generate a realistic industrial photograph of an oil and gas facility with qualified industrial engineers and technicians in safety attire. Technically credible, natural lighting, safe environment, no text.",
    artDirectionNotes: "Energy sector operations, plant maintenance, and engineering staff.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/services/education-recruitment.svg",
    name: "education-recruitment",
    category: "services",
    aspectRatio: "16:9",
    prompt: "Generate realistic editorial photography of academic professionals or educators in an authentic institutional or lecture hall setting. Natural expressions, professional composition, no text.",
    artDirectionNotes: "Academic integrity, educator staffing, and institutional talent.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/services/production-transportation.svg",
    name: "production-transportation",
    category: "services",
    aspectRatio: "16:9",
    prompt: "Generate realistic commercial photography showing a modern industrial production environment or professional logistics transportation center. Believable machinery, authentic details, natural color grading, no text.",
    artDirectionNotes: "Logistics, supply chain drivers, and manufacturing floor workers.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/industries/healthcare-industry.svg",
    name: "healthcare-industry",
    category: "industries",
    aspectRatio: "4:3",
    prompt: "Healthcare environment with modern diagnostic facility and specialized medical team in natural lighting.",
    artDirectionNotes: "Hospital setting reflecting healthcare talent sourcing.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/industries/construction-industry.svg",
    name: "construction-industry",
    category: "industries",
    aspectRatio: "4:3",
    prompt: "Major civil infrastructure project with engineers and skilled craftsmen collaborating over plans.",
    artDirectionNotes: "Modern construction, civil engineering, and infrastructure.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/industries/industrial-workforce.svg",
    name: "industrial-workforce",
    category: "industries",
    aspectRatio: "4:3",
    prompt: "Modern automated logistics warehouse and transport depot with qualified logistics personnel.",
    artDirectionNotes: "Logistics, production line, and European transportation corridors.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/industries/education-industry.svg",
    name: "education-industry",
    category: "industries",
    aspectRatio: "4:3",
    prompt: "Academic campus with international faculty members discussing academic curricula in natural light.",
    artDirectionNotes: "International higher education and academic opportunities.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/employers/recruitment-consultation.svg",
    name: "recruitment-consultation",
    category: "employers",
    aspectRatio: "16:9",
    prompt: "Executive consultation room where recruitment directors meet international corporate clients to discuss workforce planning.",
    artDirectionNotes: "Corporate consultation, demand letter processing, and employer support.",
    status: "editorial_svg_fallback"
  },
  {
    path: "/images/contact/office-environment.svg",
    name: "office-environment",
    category: "contact",
    aspectRatio: "16:9",
    prompt: "Contemporary international recruitment advisory office with welcoming reception and consultation desks in soft daylight.",
    artDirectionNotes: "Indian Manpower Resource headquarters and administrative coordination.",
    status: "editorial_svg_fallback"
  }
];
