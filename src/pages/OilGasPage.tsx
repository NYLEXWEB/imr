import React from "react";
import { ArrowRight } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { employerReferences } from "@/data/employerReferences";
import { siteConfig } from "@/data/siteConfig";

export const OilGasPage: React.FC = () => {
  usePageMetadata({
    title: "Oil & Gas Recruitment | Energy Projects Workforce Coordination",
    description:
      "Recruitment coordination for oil and gas projects, sourcing technical engineers, certified pipe welders, instrumentation technicians, and plant operators.",
    canonicalPath: "/services/oil-gas",
  });

  const sections = [
    {
      title: "Employer Requirements Definition",
      description: "Reviewing project safety specifications, technical standards (ASME, API), offshore/onshore requirements, and skill prerequisites.",
    },
    {
      title: "Candidate Sourcing",
      description: "Reaching qualified petroleum engineers, certified 6G/TIG welders, pipe fitters, QA/QC inspectors, and plant technicians.",
    },
    {
      title: "Interview Coordination",
      description: "Arranging direct client interview delegations, virtual screening panels, and practical testing sessions.",
    },
    {
      title: "Relevant Documentation",
      description: "Supporting verification of mandatory safety passports (BOSIET, HUET where applicable), trade certificates, and medical fitness clearances.",
    },
    {
      title: "Recruitment Support",
      description: "Coordinating travel logistics, visa application administration, and mobilization liaison between contracting companies and workers.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="ENERGY & INDUSTRIAL PRACTICE"
        title="Recruitment Support for Oil & Gas Projects"
        description="The company brochure references direct interviews and recruitment activity associated with oil and gas projects across international energy corridors."
        breadcrumbs={[
          { label: "Our Services", path: "/services" },
          { label: "Oil & Gas" },
        ]}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="ENERGY SECTOR SOURCING"
                title="Specialized Technical Talent for Demanding Operating Environments"
                description="Oil and gas infrastructure requires absolute precision, stringent health and safety compliance, and specialized technical execution."
              />
              <p className="text-base text-[#687386] leading-relaxed">
                Our recruitment activity in the energy sector focuses on mobilizing
                technical and vocational workforces for upstream, midstream, and
                downstream contractor assignments, facilitating direct interview
                sessions and technical screening.
              </p>

              {/* Informational Scope Note */}
              <div className="p-4 rounded-[8px] bg-[#F0F1F8] border border-[#CBD5E1] text-xs text-[#20242D] space-y-1">
                <span className="font-semibold block text-[#17194D]">
                  Operational Scope & Transparency:
                </span>
                <p className="text-[#687386] leading-relaxed">
                  Recruitment activity is executed in support of contracting firms and
                  subcontractors. Indian Manpower Resource acts as an independent manpower
                  sourcing and recruitment facilitator.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/services/oil-gas-recruitment.svg"
                alt="Oil and gas facility operations and technical engineering personnel"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="ENERGY WORKFORCE"
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
              eyebrow="OPERATIONAL PHASES"
              title="Recruitment Workflow for Energy Projects"
              description="A structured approach adhering to rigorous health, safety, and technical compliance."
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

          {/* Referenced Projects Section (if enabled in siteConfig) */}
          {siteConfig.features.showOilGasReferences && (
            <div className="mt-12 p-6 rounded-[10px] bg-white border border-[#E5E9F0] max-w-3xl mx-auto">
              <h4 className="font-heading font-bold text-sm text-[#17194D] mb-2">
                {employerReferences.oilAndGas.category}
              </h4>
              <p className="text-xs text-[#687386] mb-4">
                {employerReferences.oilAndGas.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {employerReferences.oilAndGas.items.map((item, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#F5F7FA] border border-[#E5E9F0]">
                    <span className="font-bold text-[#17194D] block">{item.name}</span>
                    <span className="text-[#687386] text-[11px]">{item.location}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-[#687386] italic">
                {employerReferences.oilAndGas.disclaimer}
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Connect for Energy Workforce Deployment
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Discuss scheduled project shutdowns, new facility build-outs, or operational maintenance crews.
            </p>
            <div>
              <Button
                to="/employers"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Project Workforce Demand
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OilGasPage;
