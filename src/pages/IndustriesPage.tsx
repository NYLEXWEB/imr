import React from "react";
import { ArrowRight, Check, Briefcase } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { industriesData } from "@/data/industries";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const IndustriesPage: React.FC = () => {
  usePageMetadata({
    title: "Industries We Serve | Sector-Specific Recruitment",
    description:
      "Recruitment requirements differ across sectors. We source qualified professionals across healthcare, construction, hospitality, transportation, and education.",
    canonicalPath: "/industries",
  });

  return (
    <div>
      <PageHero
        eyebrow="SECTOR EXPERTISE"
        title="Industries We Serve"
        description="Recruitment requirements differ across industries. Our approach focuses on understanding those requirements and identifying potentially suitable professionals."
        breadcrumbs={[{ label: "Industries" }]}
      />

      {/* Editorial Alternating Industry Sections */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="space-y-20">
            {industriesData.map((ind, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={ind.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-[#E5E9F0] last:border-0 last:pb-0"
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } space-y-5`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F1F8] text-xs font-semibold uppercase tracking-wider text-[#17194D]">
                      <Briefcase className="w-3.5 h-3.5 text-[#4B91CC]" />
                      <span>SECTOR 0{idx + 1}</span>
                    </div>

                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#17194D]">
                      {ind.name}
                    </h2>

                    <p className="text-base text-[#687386] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-3">
                        Key Recruitment & Staffing Disciplines:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#20242D]">
                        {ind.recruitmentAreas.map((area, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#4B91CC] shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button
                        to={ind.serviceLink}
                        variant="primary"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Explore {ind.name} Solutions
                      </Button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <ImageWithFallback
                      src={ind.imageSrc}
                      alt={ind.imageAlt}
                      aspectRatioClass="aspect-[4/3]"
                      categoryTag={ind.name.toUpperCase()}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Industries CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Have an Industry-Specific Sourcing Need?
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Speak with our recruitment advisors to discuss custom candidate sourcing aligned with your operational criteria.
            </p>
            <div>
              <Button
                to="/employers"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Industry Requirement
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IndustriesPage;
