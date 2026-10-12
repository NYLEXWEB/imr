export interface EmployerCategory {
  category: string;
  description: string;
  disclaimer: string;
  items: Array<{
    name: string;
    location: string;
  }>;
}

export const employerReferences: Record<string, EmployerCategory> = {
  healthcare: {
    category: "Healthcare & Medical Facilities",
    description: "Hospitals, specialized clinics, and medical complexes referenced in company recruitment documentation.",
    disclaimer: "Organizations referenced in company brochure profiles. Presented for informational context regarding past recruitment sourcing; does not imply exclusive representation.",
    items: [
      { name: "King Hamad University Hospital", location: "Kingdom of Bahrain" },
      { name: "Super Metro Specialized Medical Center", location: "State of Kuwait" },
      { name: "Aloft Hospital", location: "State of Kuwait" },
      { name: "KIMS Health Medical Center", location: "State of Qatar" },
      { name: "Reyada Medical Centre", location: "State of Qatar" },
      { name: "Gardania Medical Center", location: "State of Qatar" },
      { name: "Al Hekma Medical Complex", location: "State of Qatar" },
      { name: "Kings Dental Center", location: "State of Qatar" },
    ],
  },
  constructionHospitality: {
    category: "Construction & Hospitality",
    description: "Contractors, engineering enterprises, and hospitality employers referenced in historical candidate placements.",
    disclaimer: "Company profile references. Spelling preserved as documented in source brochure.",
    items: [
      { name: "Timbertech LLC", location: "United Arab Emirates" },
      { name: "Gladpol", location: "Poland" },
      { name: "Firma Espirit", location: "Poland" },
      { name: "IMR – Hamburg", location: "Croatia" },
      { name: "Venman", location: "Greece" },
      { name: "HR Corporation", location: "International" },
      { name: "SPEK Global", location: "International" },
      { name: "Orion Group", location: "Kuwait" },
      { name: "Season Group", location: "Kuwait" },
      { name: "Vavoulus", location: "Greece" },
    ],
  },
  productionTransportation: {
    category: "Production & Transportation",
    description: "Industrial plants, manufacturing units, logistics firms, and transport operators referenced in company files.",
    disclaimer: "Documented employer references across European logistics and manufacturing corridors.",
    items: [
      { name: "Adpro", location: "Poland" },
      { name: "Ditola", location: "Poland" },
      { name: "T&T People", location: "Poland" },
      { name: "Vincey-Play", location: "Poland" },
      { name: "Saudingos", location: "Lithuania" },
      { name: "Mag Trans", location: "Poland" },
      { name: "Kaspryska", location: "Poland" },
      { name: "Foer Group", location: "Lithuania" },
      { name: "UAB Transport", location: "Lithuania" },
    ],
  },
  oilAndGas: {
    category: "Oil & Gas Project Workforces",
    description: "Major industrial energy projects referenced in company recruitment drives and direct interview coordination.",
    disclaimer: "References denote projects and contractors documented in recruitment drives. Does not imply direct proprietary association or corporate endorsement.",
    items: [
      { name: "Saipem", location: "Abu Dhabi, UAE" },
      { name: "Descon", location: "UAE & Qatar" },
      { name: "Sinopec", location: "Kingdom of Saudi Arabia" },
      { name: "Aramco Projects", location: "Kingdom of Saudi Arabia" },
    ],
  },
};

export const educationReferences = {
  category: "Institutions & Destinations Referenced in Company Profile",
  description: "Educational institutions and international destinations cited in company historical materials.",
  disclaimer: "These institutions and destinations are listed as presented in the company brochure. Indian Manpower Resource makes no claim of exclusive university representation or proprietary admissions authority unless confirmed.",
  institutions: [
    "Roehampton University",
    "Coventry University",
    "Demontfort University",
    "Teesside University",
    "Leicester University",
    "Birmingham",
    "East London University",
    "Sterling University",
    "Bangor University",
    "Buckinghamshire University",
    "Greenwich University",
    "Middlesex University",
    "Wolverhampton University",
    "Hertfordshire University",
    "Sunderland University",
    "East Anglia University",
    "University of Hull",
    "Canterbury Christ Church University",
  ],
  destinations: [
    "United Kingdom",
    "Canada",
    "United States",
    "Australia",
    "Germany",
    "France",
    "Ireland",
    "Sweden",
    "Denmark",
    "Finland",
    "Singapore",
    "Malaysia",
    "Dubai (UAE)",
  ],
};
