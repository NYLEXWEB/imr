import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { Info } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { showCompanyMetrics } = siteConfig.features;
  const { experience, candidateNetwork, fulfillmentTarget, support } = siteConfig.metrics;

  if (!showCompanyMetrics) {
    return null;
  }

  const metricsList = [
    experience,
    candidateNetwork,
    fulfillmentTarget,
    support,
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9F0]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeading
            align="center"
            eyebrow="WHY INDIAN MANPOWER RESOURCE"
            title="Built Around People, Expertise and Trust"
            description="Our recruitment model combines decades of cross-border experience, specialized candidate networks, and disciplined turnaround standards."
          />
        </div>

        {/* 4 Metric Claim Cards (Static, Non-Animated, Transparently Attributed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsList.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B91CC] block">
                  {item.label}
                </span>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#17194D] mt-2 mb-3 tracking-tight">
                  {item.value}
                </div>
                <p className="text-sm text-[#687386] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E9F0] text-[11px] text-[#687386]/80 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#4B91CC] shrink-0 mt-0.5" />
                <span>{item.sourceNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Compliance Note */}
        <div className="mt-8 p-3.5 rounded-[8px] bg-[#F0F1F8]/80 border border-[#E5E9F0] text-center text-xs text-[#687386] max-w-3xl mx-auto">
          Metrics reflect company brochure documentation. Indian Manpower Resource maintains disciplined candidate verification standards prior to international placement.
        </div>
      </Container>
    </section>
  );
};
