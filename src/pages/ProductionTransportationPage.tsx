import React from "react";
import { ArrowRight, Truck, Factory } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { employerReferences } from "@/data/employerReferences";

export const ProductionTransportationPage: React.FC = () => {
  usePageMetadata({
    title: "Production & Transportation Recruitment | Logistics & Manufacturing",
    description:
      "Recruitment support for production plants, manufacturing assembly lines, commercial freight drivers, and international logistics operations.",
    canonicalPath: "/services/production-transportation",
  });

  const sections = [
    {
      title: "Employer Requirements Analysis",
      description: "Mapping plant production schedules, automated machinery competencies, shift rotations, route assignments, and driving license tiers (e.g. CE/C+E).",
    },
    {
      title: "Candidate Sourcing",
      description: "Accessing active networks of licensed commercial heavy vehicle drivers, warehouse forklift operators, industrial mechanics, and manufacturing line staff.",
    },
    {
      title: "Skills and Experience Review",
      description: "Thorough verification of clean driving licenses, tachograph cards, machine operator qualifications, and documented European logistics experience.",
    },
    {
      title: "Interview Coordination",
      description: "Arranging structured client interviews, simulator or practical yard driving assessments, and technical aptitude trials.",
    },
    {
      title: "Recruitment Support",
      description: "Overseeing cross-border work permits, statutory medical evaluations, pre-departure logistics briefings, and employer deployment coordination.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="SUPPLY CHAIN & INDUSTRIAL PRACTICE"
        title="Supporting Production and Transportation Workforce Needs"
        description="Recruitment support for production, industrial, and transportation-related roles, based on employer requirements and relevant candidate profiles."
        breadcrumbs={[
          { label: "Our Services", path: "/services" },
          { label: "Production & Transportation" },
        ]}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="OPERATIONAL WORKFORCES"
                title="Mobilizing Reliable Manufacturing & Transportation Teams"
                description="Modern industrial supply chains require resilient, punctual, and safety-conscious personnel to maintain continuous production cycles."
              />

              <p className="text-base text-[#687386] leading-relaxed">
                With historical recruitment references spanning manufacturing plants
                and transport companies in Poland and Lithuania, Indian Manpower
                Resource specializes in matching qualified operators and commercial
                drivers with international logistics operators.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0]">
                  <Truck className="w-5 h-5 text-[#4B91CC] mb-2" />
                  <h4 className="font-bold text-sm text-[#17194D]">Commercial Transportation</h4>
                  <p className="text-xs text-[#687386] mt-1">
                    Heavy goods vehicle (HGV) drivers, container transport, and depot operators.
                  </p>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0]">
                  <Factory className="w-5 h-5 text-[#4B91CC] mb-2" />
                  <h4 className="font-bold text-sm text-[#17194D]">Production & Assembly</h4>
                  <p className="text-xs text-[#687386] mt-1">
                    Assembly workers, machine operators, warehouse pickers, and maintenance technicians.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/services/production-transportation.svg"
                alt="Production plant assembly and logistics transport personnel"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="LOGISTICS & INDUSTRIAL"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Content Sections */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="RECRUITMENT STAGES"
              title="Our Industrial Sourcing Workflow"
              description="A disciplined recruitment path designed for dependable factory and transport mobilization."
            />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[10px] bg-white border border-[#E5E9F0] flex items-start gap-4 shadow-xs"
              >
                <div className="font-mono text-xs font-bold w-7 h-7 rounded-full bg-[#17194D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#17194D]">
                    {sec.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#687386] leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* References Box */}
          <div className="mt-12 p-6 rounded-[10px] bg-white border border-[#E5E9F0] max-w-3xl mx-auto">
            <h4 className="font-heading font-bold text-sm text-[#17194D] mb-2">
              {employerReferences.productionTransportation.category}
            </h4>
            <p className="text-xs text-[#687386] mb-4">
              {employerReferences.productionTransportation.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              {employerReferences.productionTransportation.items.map((item, i) => (
                <div key={i} className="p-2 rounded bg-[#F5F7FA] border border-[#E5E9F0]">
                  <span className="font-bold text-[#17194D] block">{item.name}</span>
                  <span className="text-[#687386] text-[11px]">{item.location}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[#687386] italic">
              {employerReferences.productionTransportation.disclaimer}
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Mobilize Your Industrial Workforce
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Submit your logistics staffing requirements or manufacturing volume targets to begin recruitment coordination.
            </p>
            <div>
              <Button
                to="/employers"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Workforce Enquiry
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProductionTransportationPage;
