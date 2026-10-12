import React from "react";
import { ArrowRight, Hammer, UtensilsCrossed } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const ConstructionHospitalityPage: React.FC = () => {
  usePageMetadata({
    title: "Construction & Hospitality Recruitment | Skilled Trades & Staffing",
    description:
      "Sourcing skilled trade craftsmen, engineers, culinary teams, and hospitality professionals for major civil builds and premier international hospitality venues.",
    canonicalPath: "/services/construction-hospitality",
  });

  const sections = [
    {
      title: "Workforce Requirements Analysis",
      description: "Detailed consultation analyzing project blueprints, construction milestones, hotel opening schedules, and skill tiers required by contractors.",
    },
    {
      title: "Candidate Sourcing",
      description: "Accessing seasoned artisan pools, certified heavy machinery operators, master carpenters, culinary specialists, and front-of-house staff.",
    },
    {
      title: "Experience & Qualification Review",
      description: "Disciplined review of trade certifications, past job site portfolios, occupational safety records, and linguistic proficiencies.",
    },
    {
      title: "Interview & Trade Test Coordination",
      description: "Organizing client panel evaluations, remote video assessments, or hands-on trade testing at certified technical workshops.",
    },
    {
      title: "Recruitment Process Support",
      description: "Structured coordination assisting with candidate documentation, emigration clearance, medical evaluations, and flight mobilization.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="CIVIL & HOSPITALITY PRACTICE"
        title="Connecting Skilled People with Construction and Hospitality Opportunities"
        description="Recruitment support for construction and hospitality workforce requirements, with attention to employer needs and relevant candidate experience."
        breadcrumbs={[
          { label: "Our Services", path: "/services" },
          { label: "Construction & Hospitality" },
        ]}
      />

      {/* Main Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="SKILLED WORKFORCE MOBILIZATION"
                title="Supplying Proven Craftsmanship & Hospitality Excellence"
                description="Infrastructure projects and luxury hospitality environments require workforces with demonstrated technical capability and reliable work ethics."
              />
              <p className="text-base text-[#687386] leading-relaxed">
                Whether deploying large crews of trade-tested civil craftsmen to
                European construction hubs or sourcing front-of-house service staff
                for premier Middle Eastern hospitality chains, Indian Manpower
                Resource coordinates recruitment with speed, compliance, and care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0]">
                  <Hammer className="w-5 h-5 text-[#4B91CC] mb-2" />
                  <h4 className="font-bold text-sm text-[#17194D]">Construction & Trades</h4>
                  <p className="text-xs text-[#687386] mt-1">
                    Masons, carpenters, electricians, welders, foremen, and civil engineers.
                  </p>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0]">
                  <UtensilsCrossed className="w-5 h-5 text-[#4B91CC] mb-2" />
                  <h4 className="font-bold text-sm text-[#17194D]">Hospitality Services</h4>
                  <p className="text-xs text-[#687386] mt-1">
                    Chefs, food & beverage service, housekeeping crews, and guest attendants.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/services/construction-recruitment.svg"
                alt="Construction engineering personnel and skilled craftsmen on modern site"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="SKILLED TRADES"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="METHODOLOGY"
              title="Our End-to-End Recruitment Process Support"
              description="Structured workflows designed to ensure seamless candidate selection and project milestone alignment."
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
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Discuss Your Workforce Requirements
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Submit your demand specifications or project schedules to discuss candidate availability and deployment schedules.
            </p>
            <div>
              <Button
                to="/employers"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Workforce Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ConstructionHospitalityPage;
