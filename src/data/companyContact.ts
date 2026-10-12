export interface OfficeLocation {
  country: string;
  label: string;
  phone: string;
  phoneFormatted: string;
  phoneRaw: string;
  notes: string;
  addressLines?: string[];
}

export const companyContact = {
  email: "info@imrhr.com",
  websiteUrl: "https://indianmanpowerresource.com",
  websiteDomain: "indianmanpowerresource.com",
  verificationNotice: "Contact details and regional communication links originate from company brochure profiles. Verify with Indian Manpower Resource before production routing.",
  offices: [
    {
      country: "India",
      label: "Registered Operational Office",
      phone: "+91 93887 70039",
      phoneFormatted: "+91 93887 70039",
      phoneRaw: "+919388770039",
      addressLines: [
        "Indian Manpower Resource",
        "First Floor, City Heights Building",
        "N.H. 47, South Chalakudy",
        "Thrissur, Kerala, India"
      ],
      notes: "Main administrative coordination and candidate documentation hub."
    },
    {
      country: "United Arab Emirates",
      label: "UAE Regional Coordination",
      phone: "+971 50 116 5956",
      phoneFormatted: "+971 50 116 5956",
      phoneRaw: "+971501165956",
      addressLines: [
        "UAE Coordination Office (Referenced in Company Profile)",
        "Registered Office Presence"
      ],
      notes: "GCC employer liaison and mobilization coordination."
    },
    {
      country: "Ireland",
      label: "European Administration Link",
      phone: "+353 874896695",
      phoneFormatted: "+353 874896695",
      phoneRaw: "+353874896695",
      addressLines: [
        "European Administration Department",
        "Ireland"
      ],
      notes: "Liaison for European employer recruitment requirements."
    }
  ]
};
