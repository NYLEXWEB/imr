export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
}

export const fullRecruitmentSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Employer Requirements",
    summary: "Establish a comprehensive understanding of the employer's workforce needs.",
    details: "We consult directly with hiring stakeholders to analyze the role specifications, required technical competencies, desired experience levels, language proficiencies, and deployment timelines.",
    iconName: "FileSearch"
  },
  {
    step: "02",
    title: "Initial Discussion",
    summary: "Review commercial frameworks, mobilization targets, and contractual details.",
    details: "Clear discussion outlining the scope of recruitment services, delivery schedules, fee structures, and responsibilities for both parties to ensure total alignment.",
    iconName: "MessagesSquare"
  },
  {
    step: "03",
    title: "Documentation & Authorization",
    summary: "Receive formal authorization documents, such as Demand Letters.",
    details: "Facilitate receipt and processing of required recruitment instruments, which may include a formal Demand Letter, Power of Attorney, and Agency Agreement as referenced in company recruitment protocols.",
    iconName: "FileCheck2"
  },
  {
    step: "04",
    title: "Candidate Mapping",
    summary: "Identify potentially suitable talent through proprietary candidate pools and sourcing networks.",
    details: "Mobilize database searches across our repository of professional profiles, alongside regional sourcing networks and industry outreach to compile an initial talent pool.",
    iconName: "Users"
  },
  {
    step: "05",
    title: "Candidate Screening & Shortlisting",
    summary: "Evaluate credentials, certifications, and experience against the employer's criteria.",
    details: "Conduct preliminary evaluations to ensure candidate qualifications, professional licenses, language fluency, and career aspirations match the employer's exact brief.",
    iconName: "Filter"
  },
  {
    step: "06",
    title: "Interview Coordination",
    summary: "Arrange client interviews online or via in-person interview delegations.",
    details: "Coordinate interview schedules between employer panels and shortlisted candidates, facilitating video conferences or organizing physical interview drives and trade testing facilities as required.",
    iconName: "Video"
  },
  {
    step: "07",
    title: "Verification & Compliance Checks",
    summary: "Coordinate medical examinations, background verification, and credential checks.",
    details: "Coordinate applicable health-related screenings (e.g. GAMCA/relevant medicals), credential authentications, and background clearances. We coordinate these steps in conjunction with certified authorities.",
    iconName: "ShieldCheck"
  },
  {
    step: "08",
    title: "Offer Letter Issuance",
    summary: "Facilitate transparent employment offer communication and candidate acceptance.",
    details: "Support the presentation of formal employment contracts to selected individuals, clarifying terms, salary packages, and working conditions to ensure unambiguous mutual consent.",
    iconName: "FileSignature"
  },
  {
    step: "09",
    title: "Work Permit & Visa Documentation",
    summary: "Liaise on visa applications, emigration clearance, and work authorizations.",
    details: "Assist candidates and employers with gathering and submitting necessary paperwork for entry visas, work permits, and mandatory emigration clearances through official diplomatic and labor channels.",
    iconName: "Stamp"
  },
  {
    step: "10",
    title: "Travel & Deployment Coordination",
    summary: "Coordinate flight bookings, pre-departure briefings, and mobilization logistics.",
    details: "Provide comprehensive pre-departure orientations covering destination cultural norms, workplace expectations, flight reservations, and arrival hand-off coordination with employer representatives.",
    iconName: "PlaneTakeoff"
  },
  {
    step: "11",
    title: "Post-Placement Support",
    summary: "Follow-up coordination ensuring smooth candidate onboarding and integration.",
    details: "Maintain communication channels after candidate arrival to verify initial workplace orientation, settlement support, and ongoing alignment between employer and worker.",
    iconName: "HeartHandshake"
  }
];

export const homeSimplifiedSteps = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the employer's requirements and exact workforce specifications."
  },
  {
    step: "02",
    title: "Source",
    description: "Identify potentially suitable candidates across specialized talent pools."
  },
  {
    step: "03",
    title: "Screen",
    description: "Review candidate qualifications and professional competencies against the role."
  },
  {
    step: "04",
    title: "Interview",
    description: "Coordinate employer interviews either virtually or through organized in-person sessions."
  },
  {
    step: "05",
    title: "Select",
    description: "Support the candidate selection, offer issuance, and compliance documentation."
  },
  {
    step: "06",
    title: "Deploy",
    description: "Coordinate the relevant pre-departure briefings, travel steps, and mobilization."
  }
];
