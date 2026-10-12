import React, { useRef } from "react";
import { ArrowDown, CheckCircle2, ShieldCheck, Users, CalendarCheck, HelpCircle } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { EmployerEnquiryForm } from "@/components/forms/EmployerEnquiryForm";
import { employerReferences } from "@/data/employerReferences";
import { siteConfig } from "@/data/siteConfig";

export const EmployersPage: React.FC = () => {
  usePageMetadata({
    title: "Employers | Hire Qualified International Talent",
    description:
      "Partner with Indian Manpower Resource to source skilled, healthcare, industrial, and technical professionals across global corridors.",
    canonicalPath: "/employers",
  });

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const supportPillars = [
    {
      title: "Requirement Understanding",
      description: "Discuss the positions, technical qualifications, licenses, and mobilization schedules required by your project.",
      icon: <HelpCircle className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Candidate Sourcing",
      description: "Identify potentially suitable candidates from our verified profile network and direct sourcing pipelines.",
      icon: <Users className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Screening Coordination",
      description: "Review and verify candidate background dossiers, trade competency testing, and credential validity.",
      icon: <ShieldCheck className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Interview Coordination",
      description: "Arrange remote video calls or full in-person client delegation interview drives and practical trials.",
      icon: <CalendarCheck className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Recruitment Support",
      description: "Coordinate relevant steps throughout the recruitment process, including visa paperwork and travel briefings.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#4B91CC]" />,
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="FOR INTERNATIONAL EMPLOYERS"
        title="The Right Talent for Your Business."
        description="Discuss your workforce requirements with Indian Manpower Resource and explore recruitment support aligned with your organization's needs."
        breadcrumbs={[{ label: "Employers" }]}
      >
        <div className="pt-2">
          <Button
            onClick={scrollToForm}
            variant="secondary"
            size="lg"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Submit Recruitment Enquiry
          </Button>
        </div>
      </PageHero>

      {/* Section 1: Employer Network */}
      {siteConfig.features.showEmployerReferences && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
          <Container>
            <div className="max-w-3xl mb-12">
              <SectionHeading
                eyebrow="CLIENT REFERENCES"
                title="Experience Across Diverse Employer Requirements"
                description="The company brochure references organizations across healthcare, construction and hospitality, production and transportation, and education."
              />
            </div>

            {/* Categorized genuine references */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Healthcare */}
              <div className="p-6 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0]">
                <h3 className="font-heading font-bold text-base text-[#17194D] mb-3 pb-2 border-b border-[#CBD5E1]">
                  Healthcare & Medical
                </h3>
                <ul className="space-y-2 text-xs text-[#20242D]">
                  {employerReferences.healthcare.items.map((item, i) => (
                    <li key={i} className="flex justify-between gap-2">
                      <span className="font-medium truncate">{item.name}</span>
                      <span className="text-[#687386] shrink-0">{item.location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Construction & Hospitality */}
              <div className="p-6 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0]">
                <h3 className="font-heading font-bold text-base text-[#17194D] mb-3 pb-2 border-b border-[#CBD5E1]">
                  Construction & Hospitality
                </h3>
                <ul className="space-y-2 text-xs text-[#20242D]">
                  {employerReferences.constructionHospitality.items.map((item, i) => (
                    <li key={i} className="flex justify-between gap-2">
                      <span className="font-medium truncate">{item.name}</span>
                      <span className="text-[#687386] shrink-0">{item.location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Production & Transportation */}
              <div className="p-6 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0]">
                <h3 className="font-heading font-bold text-base text-[#17194D] mb-3 pb-2 border-b border-[#CBD5E1]">
                  Production & Transportation
                </h3>
                <ul className="space-y-2 text-xs text-[#20242D]">
                  {employerReferences.productionTransportation.items.map((item, i) => (
                    <li key={i} className="flex justify-between gap-2">
                      <span className="font-medium truncate">{item.name}</span>
                      <span className="text-[#687386] shrink-0">{item.location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-xs text-[#687386] text-center italic">
              Organization names preserved from official company documentation. Indian Manpower Resource maintains independent recruitment representation.
            </div>
          </Container>
        </section>
      )}

      {/* Section 2: How We Support Employers */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeading
              align="center"
              eyebrow="CLIENT ADVANTAGE"
              title="How We Support Employers"
              description="A systematic recruitment partnership structured to deliver dependable talent precisely aligned with your operational brief."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[10px] bg-white border border-[#E5E9F0] shadow-xs"
              >
                <div className="w-10 h-10 rounded-[8px] bg-[#F0F1F8] flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-[#17194D]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[#687386] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Employer Enquiry Form */}
      <section ref={formSectionRef} className="py-16 sm:py-24 bg-white">
        <Container size="narrow">
          <EmployerEnquiryForm />
        </Container>
      </section>
    </div>
  );
};

export default EmployersPage;
