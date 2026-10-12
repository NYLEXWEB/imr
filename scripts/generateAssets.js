import fs from 'fs';
import path from 'path';

const assets = [
  {
    filePath: 'public/images/home/hero-global-workforce.svg',
    width: 1200,
    height: 675,
    title: 'International Manpower Solutions',
    subtitle: 'Connecting Global Talent with Global Opportunities',
    category: 'GLOBAL SOURCING',
    iconType: 'globe',
    accent: '#4B91CC',
  },
  {
    filePath: 'public/images/home/company-introduction.svg',
    width: 800,
    height: 600,
    title: 'Your Trusted Recruitment Partner',
    subtitle: 'Professional Relationships & Careful Selection',
    category: 'ABOUT IMR',
    iconType: 'handshake',
    accent: '#17194D',
  },
  {
    filePath: 'public/images/home/recruitment-team.svg',
    width: 1200,
    height: 675,
    title: 'Experienced Recruitment Consultants',
    subtitle: 'Dedicated Cross-Border Coordination',
    category: 'CONSULTING TEAM',
    iconType: 'users',
    accent: '#4B91CC',
  },
  {
    filePath: 'public/images/about/company-story.svg',
    width: 1200,
    height: 675,
    title: 'Our Journey Since 2003',
    subtitle: 'Over Two Decades of Manpower Excellence',
    category: 'COMPANY MILESTONES',
    iconType: 'timeline',
    accent: '#17194D',
  },
  {
    filePath: 'public/images/about/leadership-team.svg',
    width: 800,
    height: 600,
    title: 'Partnership Built on Humanity & Loyalty',
    subtitle: 'Management Philosophy & Stewardship',
    category: 'EXECUTIVE LEADERSHIP',
    iconType: 'award',
    accent: '#4B91CC',
  },
  {
    filePath: 'public/images/services/medical-recruitment.svg',
    width: 1200,
    height: 675,
    title: 'Healthcare & Medical Recruitment',
    subtitle: 'Doctors, Registered Nurses & Allied Clinicians',
    category: 'HEALTHCARE SECTOR',
    iconType: 'medical',
    accent: '#2A7BBF',
  },
  {
    filePath: 'public/images/services/construction-recruitment.svg',
    width: 1200,
    height: 675,
    title: 'Construction & Civil Engineering',
    subtitle: 'Engineers, Site Supervisors & Trade Craftsmen',
    category: 'INFRASTRUCTURE',
    iconType: 'construction',
    accent: '#C7792B',
  },
  {
    filePath: 'public/images/services/hospitality-recruitment.svg',
    width: 1200,
    height: 675,
    title: 'Hospitality & Guest Services',
    subtitle: 'Culinary Experts, Hotel Crew & Service Staff',
    category: 'HOSPITALITY',
    iconType: 'hospitality',
    accent: '#B58334',
  },
  {
    filePath: 'public/images/services/oil-gas-recruitment.svg',
    width: 1200,
    height: 675,
    title: 'Oil & Gas Project Workforce',
    subtitle: 'Specialized Industrial Craftsmen & Engineers',
    category: 'ENERGY SECTOR',
    iconType: 'energy',
    accent: '#D9534F',
  },
  {
    filePath: 'public/images/services/education-recruitment.svg',
    width: 1200,
    height: 675,
    title: 'Education & Academic Staffing',
    subtitle: 'Educators, Technical Instructors & Staff',
    category: 'ACADEMIA',
    iconType: 'education',
    accent: '#3F6196',
  },
  {
    filePath: 'public/images/services/production-transportation.svg',
    width: 1200,
    height: 675,
    title: 'Production & Transportation',
    subtitle: 'Logistics Drivers, Operators & Manufacturing',
    category: 'SUPPLY CHAIN',
    iconType: 'transport',
    accent: '#455A64',
  },
  {
    filePath: 'public/images/industries/healthcare-industry.svg',
    width: 800,
    height: 600,
    title: 'Healthcare Institutions',
    subtitle: 'Hospitals, Clinics & Diagnostic Facilities',
    category: 'MEDICAL SOURCING',
    iconType: 'medical',
    accent: '#2A7BBF',
  },
  {
    filePath: 'public/images/industries/construction-industry.svg',
    width: 800,
    height: 600,
    title: 'Construction & Civil Works',
    subtitle: 'Commercial, Residential & Civil Builds',
    category: 'BUILDING & TRADES',
    iconType: 'construction',
    accent: '#C7792B',
  },
  {
    filePath: 'public/images/industries/industrial-workforce.svg',
    width: 800,
    height: 600,
    title: 'Industrial & Freight Operations',
    subtitle: 'European Freight, Drivers & Plants',
    category: 'MANUFACTURING & FREIGHT',
    iconType: 'transport',
    accent: '#455A64',
  },
  {
    filePath: 'public/images/industries/education-industry.svg',
    width: 800,
    height: 600,
    title: 'Academic Institutions',
    subtitle: 'Universities, Colleges & Training Centers',
    category: 'EDUCATION SECTOR',
    iconType: 'education',
    accent: '#3F6196',
  },
  {
    filePath: 'public/images/employers/recruitment-consultation.svg',
    width: 1200,
    height: 675,
    title: 'Employer Recruitment Consultation',
    subtitle: 'Tailored Sourcing, Demand Letters & Placement',
    category: 'CORPORATE ADVISORY',
    iconType: 'briefcase',
    accent: '#17194D',
  },
  {
    filePath: 'public/images/contact/office-environment.svg',
    width: 1200,
    height: 675,
    title: 'Indian Manpower Resource Operations',
    subtitle: 'Administrative Hub & International Liaison',
    category: 'OPERATIONAL CENTERS',
    iconType: 'building',
    accent: '#4B91CC',
  },
];

function generateSVG(item) {
  const { width, height, title, subtitle, category, accent } = item;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E1033"/>
      <stop offset="50%" stop-color="#17194D"/>
      <stop offset="100%" stop-color="#1E235C"/>
    </linearGradient>
    <linearGradient id="accent-glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#4B91CC" stop-opacity="0.2"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad-bg)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Architectural accent elements -->
  <g opacity="0.3">
    <circle cx="${width * 0.85}" cy="${height * 0.35}" r="${Math.min(width, height) * 0.45}" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="6 6"/>
    <circle cx="${width * 0.85}" cy="${height * 0.35}" r="${Math.min(width, height) * 0.3}" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
    <path d="M 0 ${height * 0.85} L ${width * 0.6} ${height * 0.85} L ${width * 0.75} ${height}" fill="none" stroke="${accent}" stroke-width="2"/>
    <line x1="${width * 0.1}" y1="${height * 0.15}" x2="${width * 0.4}" y2="${height * 0.15}" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>
  </g>

  <!-- Subtle watermark emblem -->
  <g transform="translate(${width * 0.76}, ${height * 0.25})" opacity="0.12">
    <polygon points="50,10 90,30 90,80 50,100 10,80 10,30" fill="none" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="50" cy="55" r="22" fill="none" stroke="#FFFFFF" stroke-width="3"/>
  </g>

  <!-- Content Container Card -->
  <g transform="translate(${Math.round(width * 0.08)}, ${Math.round(height * 0.42)})">
    <!-- Category Badge -->
    <rect x="0" y="0" width="${category.length * 9.5 + 24}" height="28" rx="6" fill="${accent}" fill-opacity="0.2" stroke="${accent}" stroke-opacity="0.6" stroke-width="1"/>
    <text x="12" y="18" font-family="'Manrope', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#E8EEF5" letter-spacing="1.5">${category}</text>

    <!-- Main Title -->
    <text x="0" y="70" font-family="'Manrope', -apple-system, sans-serif" font-size="${Math.min(Math.round(width * 0.038), 34)}" font-weight="700" fill="#FFFFFF" letter-spacing="-0.5">${title}</text>

    <!-- Subtitle -->
    <text x="0" y="105" font-family="'Inter', -apple-system, sans-serif" font-size="${Math.min(Math.round(width * 0.02), 17)}" font-weight="400" fill="#A7B3C6">${subtitle}</text>

    <!-- Brand Signature -->
    <g transform="translate(0, 145)">
      <text font-family="'Manrope', -apple-system, sans-serif" font-size="12" font-weight="600" fill="#6C7A92" letter-spacing="0.5">INDIAN MANPOWER RESOURCE  •  EDITORIAL ARCHIVE</text>
    </g>
  </g>
</svg>`;
}

for (const item of assets) {
  const dir = path.dirname(item.filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(item.filePath, generateSVG(item), 'utf8');
  console.log(`Generated: ${item.filePath}`);
}
console.log('All image assets created successfully.');
