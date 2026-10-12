export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  path: string;
  iconName: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  targetAudiences?: string[];
  whyChooseUs?: Array<{
    title: string;
    description: string;
  }>;
}

export const servicesData: ServiceItem[] = [
  {
    id: "medical-recruitment",
    title: "Medical Recruitment",
    shortDescription: "Recruitment support for healthcare roles and medical professionals across international healthcare facilities.",
    fullDescription: "We support recruitment-related needs across healthcare, with an approach focused on understanding role requirements and identifying suitable professional profiles. Our processes encompass candidate sourcing, credential reviews, and interview coordination for clinical and operational medical teams.",
    path: "/services/medical-recruitment",
    iconName: "Stethoscope",
    imageSrc: "/images/services/medical-recruitment.svg",
    imageAlt: "Professional medical recruitment services for international hospitals",
    features: [
      "Job Placement: Recruitment support for medical and healthcare roles.",
      "Resume Assistance: Guidance to help candidates present qualifications and clinical experience clearly.",
      "Interview Coaching: Structured preparation support for professional and panel interviews.",
      "Career Counselling: Guidance for medical candidates evaluating overseas career opportunities."
    ],
    targetAudiences: [
      "Physicians & Specialized Surgeons",
      "Registered Staff Nurses & Nurse Supervisors",
      "Allied Health Professionals & Lab Technologists",
      "Healthcare Administrators & Facility Managers",
      "International Healthcare Employers & Hospital Groups"
    ],
    whyChooseUs: [
      {
        title: "Industry Awareness",
        description: "Deep comprehension of the demanding clinical standards and professional certifications needed across healthcare systems."
      },
      {
        title: "Role-Based Matching",
        description: "Disciplined evaluation of medical credentials, clinical competencies, and specialized experience against employer criteria."
      },
      {
        title: "Recruitment Coordination",
        description: "Hands-on administrative support connecting medical candidates and hospital hiring boards through every evaluation stage."
      }
    ]
  },
  {
    id: "construction-hospitality",
    title: "Construction & Hospitality",
    shortDescription: "Recruitment support for construction, infrastructure, and hospitality workforce requirements.",
    fullDescription: "Connecting skilled personnel with civil engineering, infrastructure builds, and premier hospitality venues. We help contractors and hotel operators mobilize dependable workforces capable of delivering high-quality performance.",
    path: "/services/construction-hospitality",
    iconName: "HardHat",
    imageSrc: "/images/services/construction-recruitment.svg",
    imageAlt: "Construction and hospitality skilled workforce recruitment",
    features: [
      "Workforce Requirements Analysis: Tailoring manpower mobilization plans to project schedules.",
      "Candidate Sourcing: Accessing deep pools of certified tradespeople, supervisors, and hotel crew.",
      "Experience & Qualification Review: Rigorous verification of trade skills, safety records, and certifications.",
      "Interview & Trade Test Coordination: Practical skill assessments and employer interviews.",
      "Recruitment Process Support: Guidance across documentation and deployment logistics."
    ],
    targetAudiences: [
      "Civil & Structural Engineers",
      "Site Foremen, Heavy Equipment Operators & Tradespeople",
      "Hospitality Supervisors, Chefs & Culinary Specialists",
      "Front-of-House, Service & Housekeeping Personnel",
      "International Contractors & Hospitality Groups"
    ],
    whyChooseUs: [
      {
        title: "Project-Scale Mobilization",
        description: "Capacity to coordinate multi-tier workforce deployments aligned with tight construction and grand-opening milestones."
      },
      {
        title: "Trade Competency Focus",
        description: "Focus on demonstrated technical capability, on-site safety standards, and real-world trade proficiencies."
      },
      {
        title: "End-to-End Coordination",
        description: "Streamlined logistics coordinating trade testing, compliance documentation, and mobilization."
      }
    ]
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Recruitment",
    shortDescription: "Recruitment coordination for oil and gas projects and related technical industrial workforce needs.",
    fullDescription: "The company brochure references direct interviews and recruitment activity associated with oil and gas projects. We support technical, maintenance, and engineering workforce requirements for upstream, midstream, and downstream operations.",
    path: "/services/oil-gas",
    iconName: "Flame",
    imageSrc: "/images/services/oil-gas-recruitment.svg",
    imageAlt: "Oil and gas energy projects technical recruitment",
    features: [
      "Employer Requirements Definition: Precision matching to rigorous technical safety and operational profiles.",
      "Candidate Sourcing: Identifying qualified engineers, certified welders, instrumentation technicians, and plant operators.",
      "Interview Coordination: Arranging client panel interviews and specialized technical evaluations.",
      "Relevant Documentation: Assisting with safety certifications, trade passports, and travel paperwork.",
      "Recruitment Support: Structured liaison between project managers and mobilised crews."
    ],
    targetAudiences: [
      "Plant & Petroleum Engineers",
      "Pipeline Technicians & Certified 6G Welders",
      "Instrumentation & Electrical Technicians",
      "Rig Operators & Safety Officers",
      "Energy Sector Contractors & Consortiums"
    ],
    whyChooseUs: [
      {
        title: "Technical Rigor",
        description: "Understanding the stringent certification requirements, HSE mandates, and specialized skills required in hazardous environments."
      },
      {
        title: "Documented Experience",
        description: "Brochure-referenced recruitment coordination with prominent regional and international energy contractors."
      },
      {
        title: "Compliance Alignment",
        description: "Systematic screening ensuring all candidates meet international energy industry workforce criteria."
      }
    ]
  },
  {
    id: "education",
    title: "Education Recruitment",
    shortDescription: "Education-related recruitment opportunities and workforce requirements associated with documented activities.",
    fullDescription: "The company brochure includes an education category with references to educational institutions and international destinations. We support educational workforce sourcing and academic coordination strictly within verified scopes.",
    path: "/services/education",
    iconName: "GraduationCap",
    imageSrc: "/images/services/education-recruitment.svg",
    imageAlt: "Education recruitment and academic staffing services",
    features: [
      "Academic & Faculty Staffing: Identifying qualified educators, instructors, and educational administrators.",
      "Credential Evaluation: Reviewing academic transcripts, teaching certifications, and linguistic competencies.",
      "Destination Advisory: Contextual guidance on regulatory and immigration steps for academic mobility.",
      "Interview Scheduling: Coordinating video and in-person interviews with educational hiring committees."
    ],
    targetAudiences: [
      "School & College Educators",
      "Technical Trainers & Vocational Instructors",
      "Academic Administrators & Support Personnel",
      "Educational Institutions Seeking International Staff"
    ],
    whyChooseUs: [
      {
        title: "Credential Scrutiny",
        description: "Careful verification of educational credentials, pedagogic qualifications, and subject-matter expertise."
      },
      {
        title: "Truthful Representation",
        description: "Clear demarcation of services, presenting institutional references only within confirmed scopes."
      },
      {
        title: "Candidate Preparation",
        description: "Helping academic professionals present their research and instructional background effectively."
      }
    ]
  },
  {
    id: "production-transportation",
    title: "Production & Transportation",
    shortDescription: "Recruitment support for production, industrial manufacturing, logistics, and transportation-related roles.",
    fullDescription: "Recruitment support for production, industrial, and transportation-related roles, based on employer requirements and relevant candidate profiles. We source dependable plant operators, warehouse logistics teams, and commercial drivers.",
    path: "/services/production-transportation",
    iconName: "Truck",
    imageSrc: "/images/services/production-transportation.svg",
    imageAlt: "Production and transportation workforce recruitment",
    features: [
      "Employer Requirements Mapping: Understanding operational shifts, machine types, and route profiles.",
      "Candidate Sourcing: Reaching experienced machine operators, assembly technicians, and licensed drivers.",
      "Skills & Experience Review: Validation of commercial licenses, clean driving records, and manufacturing experience.",
      "Interview Coordination: Synchronizing practical driving or operational trials and interviews.",
      "Recruitment Support: Overseeing cross-border logistics and administrative documentation."
    ],
    targetAudiences: [
      "Commercial Drivers (Heavy Goods & Transport)",
      "Plant Assembly Workers & Machine Operators",
      "Warehouse Supervisors & Logistics Coordinators",
      "Industrial Maintenance Technicians",
      "European & International Supply Chain Employers"
    ],
    whyChooseUs: [
      {
        title: "Cross-Border Experience",
        description: "Demonstrated placement history across European manufacturing and logistics hubs."
      },
      {
        title: "License & Compliance Verification",
        description: "Thorough checking of driving permits, tachograph training, and vocational machinery licenses."
      },
      {
        title: "Operational Reliability",
        description: "Focusing on candidates with proven work ethics, punctuality, and commitment to employer targets."
      }
    ]
  },
  {
    id: "skilled-professional",
    title: "Skilled & Professional Recruitment",
    shortDescription: "Candidate sourcing aligned with the skills, technical competencies, and qualifications required by employers.",
    fullDescription: "Candidate sourcing based on relevant experience, qualifications, and employer requirements. We connect organizations seeking specialized professionals with vetted talent across administrative, commercial, and technical disciplines.",
    path: "/employers",
    iconName: "Briefcase",
    imageSrc: "/images/services/construction-recruitment.svg",
    imageAlt: "Skilled and professional manpower placement services",
    features: [
      "Tailored Sourcing: Custom headhunting based on exact job descriptions and competency frameworks.",
      "Comprehensive Shortlisting: Delivering focused shortlists of qualified professionals ready for evaluation.",
      "Assessment Liaison: Coordinating psychometric, technical, or case-study assessments.",
      "Placement Support: Facilitating offer negotiation, acceptance, and onboarding alignment."
    ],
    targetAudiences: [
      "Corporate Employers",
      "Multinational Enterprises",
      "Small & Medium Enterprises Seeking Global Talent"
    ],
    whyChooseUs: [
      {
        title: "Requirement-Led Search",
        description: "Every engagement starts with thorough consultation to understand the employer's organizational culture."
      },
      {
        title: "Efficient Turnaround",
        description: "Structured workflows focused on delivering suitable candidate dossiers promptly."
      },
      {
        title: "Long-Term Perspective",
        description: "Building sustainable employment relationships rather than transactional placements."
      }
    ]
  }
];
