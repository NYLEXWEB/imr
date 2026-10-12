import React from "react";
import {
  FileSearch,
  MessagesSquare,
  FileCheck2,
  Users,
  Filter,
  Video,
  ShieldCheck,
  FileSignature,
  Stamp,
  PlaneTakeoff,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { fullRecruitmentSteps } from "@/data/recruitmentProcess";

export const RecruitmentProcessPage: React.FC = () => {
  usePageMetadata({
    title: "Our Recruitment Process | 11-Stage Placement Methodology",
    description:
      "A structured 11-step recruitment roadmap: from employer requirements discovery and candidate screening to work permit coordination and post-placement support.",
    canonicalPath: "/recruitment-process",
  });

  const iconMap: Record<string, React.ReactNode> = {
    FileSearch: <FileSearch className="w-5 h-5 text-[#4B91CC]" />,
    MessagesSquare: <MessagesSquare className="w-5 h-5 text-[#4B91CC]" />,
    FileCheck2: <FileCheck2 className="w-5 h-5 text-[#4B91CC]" />,
    Users: <Users className="w-5 h-5 text-[#4B91CC]" />,
    Filter: <Filter className="w-5 h-5 text-[#4B91CC]" />,
    Video: <Video className="w-5 h-5 text-[#4B91CC]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#4B91CC]" />,
    FileSignature: <FileSignature className="w-5 h-5 text-[#4B91CC]" />,
    Stamp: <Stamp className="w-5 h-5 text-[#4B91CC]" />,
    PlaneTakeoff: <PlaneTakeoff className="w-5 h-5 text-[#4B91CC]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#4B91CC]" />,
  };

  return (
    <div>
      <PageHero
        eyebrow="RECRUITMENT ROADMAP"
        title="Our Recruitment Process"
        description="Effective recruitment begins with understanding employer requirements and continues through candidate identification, selection, documentation, and placement coordination."
        breadcrumbs={[{ label: "Recruitment Process" }]}
      />

      {/* Process Intro */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#E5E9F0]">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#17194D]">
              A Disciplined, Compliant Placement Lifecycle
            </h2>
            <p className="text-base text-[#687386] leading-relaxed">
              Every international recruitment engagement is handled through a rigorous
              11-stage workflow designed to minimize project delays, ensure legal and
              emigration compliance, and foster transparent relationships between
              employers and professionals.
            </p>
          </div>
        </Container>
      </section>

      {/* Complete 11-Step Timeline */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
              {fullRecruitmentSteps.map((step) => (
                <div key={step.step} className="relative group">
                  {/* Step numbered badge */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#17194D] text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs ring-4 ring-[#F5F7FA]">
                    {step.step}
                  </div>

                  {/* Stage card */}
                  <div className="bg-white p-6 sm:p-7 rounded-[10px] border border-[#E5E9F0] shadow-xs group-hover:border-[#4B91CC] transition-colors">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-[#F0F1F8] flex items-center justify-center shrink-0">
                          {iconMap[step.iconName]}
                        </div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#17194D]">
                          {step.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#4B91CC] bg-[#4B91CC]/10 px-2 py-0.5 rounded shrink-0">
                        STAGE {step.step}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#20242D] mb-1.5">
                      {step.summary}
                    </p>

                    <p className="text-sm text-[#687386] leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* End CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Have a Recruitment Requirement?
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Initiate Stage 01 of our recruitment process with our international
              advisory team today.
            </p>
            <div className="pt-2">
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

export default RecruitmentProcessPage;
