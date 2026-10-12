export interface NavItem {
  title: string;
  path: string;
  description?: string;
  children?: NavItem[];
}

export const headerNavItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
    children: [
      {
        title: "Company Overview",
        path: "/about",
        description: "Our mission, management philosophy, and values",
      },
      {
        title: "Our Story & Milestones",
        path: "/about/our-story",
        description: "Chronological timeline from 2003 through today",
      },
    ],
  },
  {
    title: "Our Services",
    path: "/services",
    children: [
      {
        title: "Services Overview",
        path: "/services",
        description: "Comprehensive manpower sourcing capabilities",
      },
      {
        title: "Medical Recruitment",
        path: "/services/medical-recruitment",
        description: "Physicians, registered nurses, and healthcare staff",
      },
      {
        title: "Construction & Hospitality",
        path: "/services/construction-hospitality",
        description: "Skilled workforce for civil projects and hospitality",
      },
      {
        title: "Oil & Gas Recruitment",
        path: "/services/oil-gas",
        description: "Technical workforce coordination for energy projects",
      },
      {
        title: "Education Recruitment",
        path: "/services/education",
        description: "Education sector staffing and academic opportunities",
      },
      {
        title: "Production & Transportation",
        path: "/services/production-transportation",
        description: "Industrial plants, logistics, and transport personnel",
      },
    ],
  },
  {
    title: "Industries",
    path: "/industries",
  },
  {
    title: "Recruitment Process",
    path: "/recruitment-process",
  },
  {
    title: "Employers",
    path: "/employers",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

export const footerLinks = {
  company: [
    { title: "About Us", path: "/about" },
    { title: "Our Story", path: "/about/our-story" },
    { title: "Recruitment Process", path: "/recruitment-process" },
    { title: "Industries We Serve", path: "/industries" },
  ],
  services: [
    { title: "Medical Recruitment", path: "/services/medical-recruitment" },
    { title: "Construction & Hospitality", path: "/services/construction-hospitality" },
    { title: "Oil & Gas Recruitment", path: "/services/oil-gas" },
    { title: "Education Recruitment", path: "/services/education" },
    { title: "Production & Transportation", path: "/services/production-transportation" },
  ],
  stakeholders: [
    { title: "Hire Talent (Employers)", path: "/employers" },
    { title: "Candidate Enquiries (Job Seekers)", path: "/job-seekers" },
    { title: "Contact Offices", path: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms & Conditions", path: "/terms" },
  ],
};
