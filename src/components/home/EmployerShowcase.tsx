import React from "react";
import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { employerReferences } from "@/data/employerReferences";
import { siteConfig } from "@/data/siteConfig";

export const EmployerShowcase: React.FC = () => {
  if (!siteConfig.features.showEmployerReferences) {
    return null;
  }

  // Showcase a selection of genuine employer names across healthcare, construction & production
  const sampleItems = [
    { name: "King Hamad University Hospital", sector: "Healthcare", location: "Bahrain" },
    { name: "KIMS Health Medical Center", sector: "Healthcare", location: "Qatar" },
    { name: "Timbertech LLC", sector: "Engineering", location: "UAE" },
    { name: "Gladpol", sector: "Industrial", location: "Poland" },
    { name: "Orion Group", sector: "Operations", location: "Kuwait" },
    { name: "Adpro", sector: "Manufacturing", location: "Poland" },
    { name: "Saudingos", sector: "Transportation", location: "Lithuania" },
    { name: "Reyada Medical Centre", sector: "Healthcare", location: "Qatar" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E5E9F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="CLIENT REFERENCES"
            title="Experience Across Diverse Employer Requirements"
            description="The company brochure references organizations across healthcare, construction and hospitality, production and transportation, and education."
          />
          <Link
            to="/employers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17194D] hover:text-[#4B91CC] transition-colors shrink-0"
          >
            <span>Explore Employer Network</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clean, Restrained Text-Based Employer Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sampleItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-[8px] bg-white border border-[#E5E9F0] flex flex-col justify-between hover:border-[#CBD5E1] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4B91CC]">
                    {item.sector}
                  </span>
                  <Building2 className="w-4 h-4 text-[#687386]/50" />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-[#17194D] leading-snug">
                  {item.name}
                </h4>
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#E5E9F0]/60 text-xs text-[#687386]">
                {item.location}
              </div>
            </div>
          ))}
        </div>

        {/* Informational Data Transparency Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#687386] max-w-2xl mx-auto">
            {employerReferences.healthcare.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
};
