export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  serviceLink: string;
  imageSrc: string;
  imageAlt: string;
  recruitmentAreas: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Connecting clinical institutions with dedicated medical professionals",
    description: "Medical recruitment requirements demand rigor, clinical compliance, and compassion. We support acute hospitals, specialized polyclinics, and rehabilitation centers with vetted doctors, nurses, and allied healthcare staff.",
    serviceLink: "/services/medical-recruitment",
    imageSrc: "/images/industries/healthcare-industry.svg",
    imageAlt: "Healthcare and medical recruitment solutions",
    recruitmentAreas: [
      "Specialist Physicians & Surgeons",
      "Registered Staff Nurses (ICU, OT, General Ward)",
      "Radiographers & Diagnostic Technicians",
      "Physiotherapists & Rehabilitation Specialists",
      "Hospital Administration & Support Staff"
    ]
  },
  {
    id: "construction-hospitality",
    name: "Construction & Hospitality",
    tagline: "Building infrastructure and delivering world-class service standards",
    description: "From large-scale civil engineering works to luxury hospitality operations, workforce quality defines project success. We mobilize trade-tested artisans, engineers, culinary teams, and guest-service professionals.",
    serviceLink: "/services/construction-hospitality",
    imageSrc: "/images/industries/construction-industry.svg",
    imageAlt: "Construction and hospitality workforce staffing",
    recruitmentAreas: [
      "Civil Engineers & Site Project Managers",
      "Carpenters, Steel Fixers & Masons",
      "Executive Chefs, Sous Chefs & Commis",
      "Front Office & Guest Services Staff",
      "Facility Maintenance & Housekeeping Crews"
    ]
  },
  {
    id: "production-transportation",
    name: "Production & Transportation",
    tagline: "Fueling supply chains and manufacturing reliability",
    description: "Modern industrial production and international logistics depend on disciplined operators and qualified transport professionals. We support manufacturing plants, fulfillment hubs, and freight carriers across European and Middle Eastern corridors.",
    serviceLink: "/services/production-transportation",
    imageSrc: "/images/industries/industrial-workforce.svg",
    imageAlt: "Industrial production and logistics workforce solutions",
    recruitmentAreas: [
      "Commercial Drivers (HGV / International Freight)",
      "Factory Assembly Line Operatives",
      "Warehouse Pickers & Forklift Operators",
      "Plant Maintenance Fitters & Electricians",
      "Supply Chain & Dispatch Coordinators"
    ]
  },
  {
    id: "education",
    name: "Education & Academics",
    tagline: "Supporting educational institutions with verified academic talent",
    description: "Education recruitment activities documented in company information focus on connecting academic institutions with qualified educators, trainers, and educational support professionals.",
    serviceLink: "/services/education",
    imageSrc: "/images/industries/education-industry.svg",
    imageAlt: "Education sector recruitment and academic talent",
    recruitmentAreas: [
      "Primary & Secondary School Teachers",
      "Vocational & Technical Instructors",
      "Academic Support Coordinators",
      "Language Instructors & Curriculum Advisors",
      "Institutional Administrative Staff"
    ]
  }
];
