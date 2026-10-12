import React from "react";
import { ArrowRight, Globe, BookOpen } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { educationReferences } from "@/data/employerReferences";
import { siteConfig } from "@/data/siteConfig";

export const EducationRecruitmentPage: React.FC = () => {
  usePageMetadata({
    title: "Education Recruitment | Academic Workforce & Opportunities",
    description:
      "Education-related recruitment opportunities and academic workforce sourcing referenced in Indian Manpower Resource company profile documentation.",
    canonicalPath: "/services/education",
  });

  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC PRACTICE"
        title="Education-Related Recruitment Opportunities"
        description="The company brochure includes an education category with references to educational institutions and international destinations."
        breadcrumbs={[
          { label: "Our Services", path: "/services" },
          { label: "Education Recruitment" },
        ]}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="EDUCATION SECTOR SOURCING"
                title="Academic Workforce & Institutional Placement Support"
                description="Educational institutions require qualified faculty, certified instructors, and academic support personnel with verified pedagogic credentials."
              />

              <p className="text-base text-[#687386] leading-relaxed">
                Our documented education recruitment activities focus on candidate
                sourcing and liaison for teaching personnel, vocational instructors,
                and academic administration roles, strictly within verified company
                operational scopes.
              </p>

              {/* Informational Transparency Note */}
              <div className="p-4 rounded-[8px] bg-[#F0F1F8] border border-[#CBD5E1] text-xs text-[#20242D] space-y-1">
                <span className="font-semibold block text-[#17194D]">
                  Operational Scope & Institutional References:
                </span>
                <p className="text-[#687386] leading-relaxed">
                  Indian Manpower Resource lists academic institutions and overseas
                  destinations as referenced in historical company brochure profiles.
                  We make no representation of proprietary university partnerships
                  or student admissions advisory unless explicitly contracted.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/services/education-recruitment.svg"
                alt="Academic professionals and educators in university environment"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="ACADEMIC TALENT"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Profile Referenced Institutions & Destinations */}
      {siteConfig.features.showEducationReferences && (
        <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionHeading
                align="center"
                eyebrow="DOCUMENTED REFERENCES"
                title="Institutions & Destinations Referenced in Our Company Profile"
                description={educationReferences.description}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Institutions */}
              <div className="p-6 rounded-[12px] bg-white border border-[#E5E9F0]">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-[#4B91CC]" />
                  <h3 className="font-heading font-bold text-base text-[#17194D]">
                    Referenced Educational Institutions
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#20242D]">
                  {educationReferences.institutions.map((inst, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-[#F5F7FA] border border-[#E5E9F0] truncate"
                    >
                      {inst}
                    </div>
                  ))}
                </div>
              </div>

              {/* Destinations */}
              <div className="p-6 rounded-[12px] bg-white border border-[#E5E9F0]">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#4B91CC]" />
                  <h3 className="font-heading font-bold text-base text-[#17194D]">
                    Referenced International Destinations
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#20242D]">
                  {educationReferences.destinations.map((dest, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-[#F5F7FA] border border-[#E5E9F0] text-center"
                    >
                      {dest}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-[#687386] max-w-2xl mx-auto italic">
                {educationReferences.disclaimer}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Inquire Regarding Education Sector Staffing
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Contact our team to discuss institutional faculty sourcing or academic recruitment liaison.
            </p>
            <div>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default EducationRecruitmentPage;
