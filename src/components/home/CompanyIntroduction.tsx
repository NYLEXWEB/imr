import React from "react";
import { ArrowRight, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const CompanyIntroduction: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <ImageWithFallback
                src="/images/home/company-introduction.svg"
                alt="Recruitment consultants reviewing international candidate requirements"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="RECRUITMENT ADVISORY"
              />
              <div className="mt-4 p-5 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]">
                <h4 className="font-heading font-bold text-sm text-[#17194D]">
                  Our Partnership Philosophy
                </h4>
                <p className="mt-1 text-xs text-[#687386] leading-relaxed">
                  "As a partnership firm, we believe in humanity and loyalty. We work to identify suitable job opportunities and match them with the requirements of employers and candidates."
                </p>
                <span className="block mt-2 text-[11px] font-semibold text-[#4B91CC] uppercase tracking-wider">
                  — Management Statement
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Overview */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="ABOUT INDIAN MANPOWER RESOURCE"
              title="Your Trusted Recruitment Partner"
              description="Indian Manpower Resource works to connect employers with suitable professionals through recruitment expertise, candidate sourcing, and an understanding of workforce needs."
            />

            <p className="text-base text-[#687386] leading-relaxed">
              Our approach emphasizes professional relationships, careful candidate
              selection, and recruitment support aligned with employer requirements.
              Rather than generic placements, we emphasize the people behind every
              recruitment decision, aligning skill profiles with operational realities.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              <div className="p-4 rounded-[8px] bg-[#F0F1F8]/60 border border-[#E5E9F0]">
                <ShieldCheck className="w-5 h-5 text-[#4B91CC] mb-2" />
                <h4 className="font-bold text-sm text-[#17194D]">Integrity</h4>
                <p className="text-xs text-[#687386] mt-1">
                  Honest, transparent communication at every stage.
                </p>
              </div>

              <div className="p-4 rounded-[8px] bg-[#F0F1F8]/60 border border-[#E5E9F0]">
                <HeartHandshake className="w-5 h-5 text-[#4B91CC] mb-2" />
                <h4 className="font-bold text-sm text-[#17194D]">Humanity</h4>
                <p className="text-xs text-[#687386] mt-1">
                  Valuing the aspirations of candidates and client goals.
                </p>
              </div>

              <div className="p-4 rounded-[8px] bg-[#F0F1F8]/60 border border-[#E5E9F0]">
                <Compass className="w-5 h-5 text-[#4B91CC] mb-2" />
                <h4 className="font-bold text-sm text-[#17194D]">Stewardship</h4>
                <p className="text-xs text-[#687386] mt-1">
                  Disciplined coordination across international corridors.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/about/our-story"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
