import React from "react";
import { ArrowRight, Calendar, AlertCircle } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { companyTimeline } from "@/data/companyTimeline";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const OurStoryPage: React.FC = () => {
  usePageMetadata({
    title: "Our Story & Milestones | Two Decades of Manpower Services",
    description:
      "A chronological timeline of milestones in Indian Manpower Resource's corporate development from 2003 through our international coordination presence in 2024.",
    canonicalPath: "/about/our-story",
  });

  return (
    <div>
      <PageHero
        eyebrow="OUR HERITAGE"
        title="Our Story"
        description="A timeline of milestones in the company's development, documenting our evolution from regional recruitment roots into an international manpower consultancy."
        breadcrumbs={[
          { label: "About Us", path: "/about" },
          { label: "Our Story" },
        ]}
      />

      {/* Narrative & Visual Context */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#17194D]">
                Two Decades of Cross-Border Human Capital Placement
              </h2>
              <p className="text-base text-[#687386] leading-relaxed">
                Founded over twenty years ago, Indian Manpower Resource has consistently
                focused on bridging geographical boundaries to match qualified technical,
                medical, and skilled professionals with verified employer mandates.
              </p>
              <p className="text-sm text-[#687386] leading-relaxed">
                The chronological progression below outlines documented operational
                milestones as detailed in company historical records, charting our
                expansion across the Gulf Cooperation Council, Europe, and India.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/about/leadership-team.svg"
                alt="Leadership and administrative milestones of Indian Manpower Resource"
                aspectRatioClass="aspect-[16/10]"
                categoryTag="MILESTONES ARCHIVE"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Chronological Timeline Section */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
              {companyTimeline.map((item, idx) => (
                <div key={item.year} className="relative group">
                  {/* Timeline bullet badge */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#17194D] text-white flex items-center justify-center shadow-xs ring-4 ring-[#F5F7FA]">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>

                  {/* Year Tag & Title */}
                  <div className="bg-white p-6 sm:p-7 rounded-[10px] border border-[#E5E9F0] shadow-xs group-hover:border-[#4B91CC] transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-sm font-bold text-[#4B91CC] bg-[#4B91CC]/10 px-2.5 py-1 rounded">
                        YEAR {item.year}
                      </span>
                      <span className="text-xs text-[#687386]">
                        Milestone {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#17194D]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm font-medium text-[#20242D]">
                      {item.description}
                    </p>

                    <p className="mt-2.5 text-sm text-[#687386] leading-relaxed">
                      {item.detail}
                    </p>

                    {item.verificationNote && (
                      <div className="mt-4 pt-3 border-t border-[#E5E9F0] text-xs text-[#687386] flex items-start gap-1.5 bg-[#F0F1F8]/50 p-2.5 rounded">
                        <AlertCircle className="w-4 h-4 text-[#4B91CC] shrink-0 mt-0.5" />
                        <span>
                          <strong>Verification note:</strong> {item.verificationNote}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Footer CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Connect With Our Recruitment Team
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Discuss workforce requirements or candidate registration with our
              experienced international staffing consultants.
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

export default OurStoryPage;
