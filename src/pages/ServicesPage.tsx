import React from "react";
import {
  Stethoscope,
  HardHat,
  Flame,
  GraduationCap,
  Truck,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { servicesData } from "@/data/services";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const ServicesPage: React.FC = () => {
  usePageMetadata({
    title: "Recruitment Services | International Manpower Solutions",
    description:
      "Explore Indian Manpower Resource recruitment services across medical, construction, hospitality, oil and gas, education, and transportation sectors.",
    canonicalPath: "/services",
  });

  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5 text-[#4B91CC]" />,
    HardHat: <HardHat className="w-5 h-5 text-[#4B91CC]" />,
    Flame: <Flame className="w-5 h-5 text-[#4B91CC]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#4B91CC]" />,
    Truck: <Truck className="w-5 h-5 text-[#4B91CC]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#4B91CC]" />,
  };

  return (
    <div>
      <PageHero
        eyebrow="OUR CAPABILITIES"
        title="Recruitment Solutions for a Global Workforce"
        description="We support recruitment requirements across multiple industries by connecting employer needs with potentially suitable candidates and coordinating recruitment activities."
        breadcrumbs={[{ label: "Our Services" }]}
      />

      {/* Services Grid with Comprehensive Details */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="space-y-12">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0]"
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"} space-y-4`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#E5E9F0] text-xs font-semibold uppercase tracking-wider text-[#17194D]">
                    {iconMap[service.iconName]}
                    <span>SERVICE 0{idx + 1}</span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#17194D]">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#687386] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-3">
                      Core Recruitment Support:
                    </h4>
                    <ul className="space-y-2 text-sm text-[#20242D]">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4B91CC] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      to={service.path}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Explore {service.title}
                    </Button>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <ImageWithFallback
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    aspectRatioClass="aspect-[16/10]"
                    categoryTag={service.title.toUpperCase()}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Our Approach */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="RECRUITMENT PRINCIPLES"
              title="Understanding Requirements Before Finding Talent"
              description="A disciplined recruitment process begins with requirement discovery. We take the time to understand position responsibilities, workplace culture, and technical proficiencies."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]">
              <span className="font-mono text-xs font-bold text-[#4B91CC] bg-[#4B91CC]/10 px-2 py-0.5 rounded">
                STAGE I
              </span>
              <h3 className="font-heading font-bold text-base text-[#17194D] mt-3">
                Job Specification Audit
              </h3>
              <p className="mt-2 text-xs text-[#687386] leading-relaxed">
                Consultation with hiring leadership to document necessary qualifications, certifications, and project mobilization targets.
              </p>
            </div>

            <div className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]">
              <span className="font-mono text-xs font-bold text-[#4B91CC] bg-[#4B91CC]/10 px-2 py-0.5 rounded">
                STAGE II
              </span>
              <h3 className="font-heading font-bold text-base text-[#17194D] mt-3">
                Sourcing & Vetting
              </h3>
              <p className="mt-2 text-xs text-[#687386] leading-relaxed">
                Candidate matching against verified databases, conducting initial credential evaluations and preliminary interviews.
              </p>
            </div>

            <div className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]">
              <span className="font-mono text-xs font-bold text-[#4B91CC] bg-[#4B91CC]/10 px-2 py-0.5 rounded">
                STAGE III
              </span>
              <h3 className="font-heading font-bold text-base text-[#17194D] mt-3">
                Placement Coordination
              </h3>
              <p className="mt-2 text-xs text-[#687386] leading-relaxed">
                Coordinating employer interviews, offer issuance, and pre-departure compliance steps in alignment with statutory standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Discuss Your Recruitment Requirements
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Speak directly with an experienced recruitment consultant to explore
              targeted workforce solutions for your enterprise.
            </p>
            <div>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
