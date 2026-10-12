export interface SiteConfig {
  companyName: string;
  tagline: string;
  brandPositioning: string;
  officialDomain: string;
  contactEmail: string;
  indiaPhone: string;
  uaePhone: string;
  irelandPhone: string;
  indiaAddress: {
    name: string;
    building: string;
    location: string;
    city: string;
    state: string;
    country: string;
    fullFormatted: string;
  };
  features: {
    showCompanyMetrics: boolean;
    showEmployerReferences: boolean;
    showOilGasReferences: boolean;
    showEducationReferences: boolean;
  };
  metrics: {
    experience: {
      label: string;
      value: string;
      description: string;
      sourceNote: string;
    };
    candidateNetwork: {
      label: string;
      value: string;
      description: string;
      sourceNote: string;
    };
    fulfillmentTarget: {
      label: string;
      value: string;
      description: string;
      sourceNote: string;
    };
    support: {
      label: string;
      value: string;
      description: string;
      sourceNote: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Indian Manpower Resource",
  tagline: "Sourcing Manpower to the World",
  brandPositioning: "International recruitment, manpower sourcing, workforce placement, and recruitment support.",
  officialDomain: "indianmanpowerresource.com",
  contactEmail: "info@imrhr.com",
  indiaPhone: "+91 93887 70039",
  uaePhone: "+971 50 116 5956",
  irelandPhone: "+353 874896695",
  indiaAddress: {
    name: "Indian Manpower Resource",
    building: "First Floor, City Heights Building",
    location: "N.H. 47, South Chalakudy",
    city: "Thrissur",
    state: "Kerala",
    country: "India",
    fullFormatted: "Indian Manpower Resource, First Floor, City Heights Building, N.H. 47, South Chalakudy, Thrissur, Kerala, India."
  },
  features: {
    showCompanyMetrics: true, // Set false to cleanly hide unverified brochure statistics
    showEmployerReferences: true, // Set false to cleanly hide employer showcase
    showOilGasReferences: true, // Set false to cleanly hide oil & gas references
    showEducationReferences: true, // Set false to cleanly hide education list
  },
  metrics: {
    experience: {
      label: "Experience",
      value: "20+ Years",
      description: "Recruitment and manpower consultancy experience referenced across international corridors.",
      sourceNote: "Figures originate from company brochure claims and are subject to documentary verification prior to public launch."
    },
    candidateNetwork: {
      label: "Candidate Network",
      value: "100,000+",
      description: "Candidate profile repository across technical, medical, and skilled trades.",
      sourceNote: "Brochure-referenced profile database figure."
    },
    fulfillmentTarget: {
      label: "Fulfillment Target",
      value: "15 Days",
      description: "Target turnaround for presenting qualified and pre-screened candidate shortlists.",
      sourceNote: "Target turnaround time stated in company documentation."
    },
    support: {
      label: "Employer Support",
      value: "Round-the-Clock",
      description: "Dedicated account coordination spanning multiple international time zones.",
      sourceNote: "Service availability claim noted in company profile."
    }
  }
};
