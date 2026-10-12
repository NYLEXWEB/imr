import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { homeSimplifiedSteps } from "@/data/recruitmentProcess";

export const RecruitmentProcessPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="SYSTEMATIC METHODOLOGY"
            title="A Clearer Path from Requirement to Placement"
            description="Our recruitment methodology delivers structure, transparency, and candidate quality at every stage of the cross-border placement lifecycle."
          />
          <Button
            to="/recruitment-process"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Full 11-Step Process
          </Button>
        </div>

        {/* 6 Stage Linear Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeSimplifiedSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-[12px] bg-[#F5F7FA] border border-[#E5E9F0] relative hover:border-[#4B91CC]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#17194D] text-white">
                  STAGE {step.step}
                </span>
                <span className="text-xs text-[#687386]">Milestone</span>
              </div>

              <h3 className="font-heading font-bold text-lg text-[#17194D]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-[#687386] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#687386]">
            Simplified overview of our formal 11-stage international recruitment protocol, encompassing documentation, visa assistance, and post-placement support.
          </p>
        </div>
      </Container>
    </section>
  );
};
