import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { industriesData } from "@/data/industries";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const IndustriesOverview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E5E9F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="SECTOR EXPERTISE"
            title="Workforce Solutions Across Industries"
            description="Recruitment requirements differ substantially across sectors. Our sourcing methodology aligns technical prerequisites with vetted international professionals."
          />
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17194D] hover:text-[#4B91CC] transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric 2x2 Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[12px] border border-[#E5E9F0] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <ImageWithFallback
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  aspectRatioClass="aspect-[16/9]"
                  categoryTag={item.name.toUpperCase()}
                />

                <div className="p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4B91CC] block mb-1">
                    Industry Sector
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#17194D]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#687386] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E5E9F0]/80">
                    <span className="text-xs font-semibold text-[#17194D] block mb-2">
                      Key Workforce Specializations:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#687386]">
                      {item.recruitmentAreas.slice(0, 4).map((area, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                          <span className="truncate">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  to={item.serviceLink}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#17194D] hover:text-[#4B91CC] transition-colors"
                >
                  <span>Explore Sector Recruitment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
