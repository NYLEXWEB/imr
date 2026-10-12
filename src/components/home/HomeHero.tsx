import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5F7FA] to-white border-b border-[#E5E9F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17194D]/5 border border-[#17194D]/10 text-xs font-semibold uppercase tracking-wider text-[#17194D]">
              <span className="w-2 h-2 rounded-full bg-[#4B91CC]"></span>
              International Recruitment & Manpower Solutions
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[58px] tracking-tight text-[#17194D] leading-[1.12]">
              Connecting Global Talent with Global Opportunities.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#687386] leading-relaxed max-w-2xl">
              Indian Manpower Resource connects employers with qualified
              professionals through tailored recruitment solutions, industry
              expertise, and a commitment to long-term relationships.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/employers"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Hire Talent
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-[#E5E9F0] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#20242D]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4B91CC] shrink-0" />
                <span>Specialized Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4B91CC] shrink-0" />
                <span>End-to-End Compliance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-[#4B91CC] shrink-0" />
                <span>Cross-Border Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <ImageWithFallback
                src="/images/home/hero-global-workforce.svg"
                alt="International workforce and global recruitment operations"
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                categoryTag="GLOBAL CORRIDORS"
                priority={true}
                className="shadow-sm"
              />

              {/* Restrained Editorial Overlay Card */}
              <div className="mt-4 p-4 rounded-[8px] bg-white border border-[#E5E9F0] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#4B91CC] uppercase tracking-wider block">
                    Global Reach
                  </span>
                  <span className="text-sm font-bold text-[#17194D]">
                    Europe • Middle East • Asia
                  </span>
                </div>
                <span className="text-xs text-[#687386] font-mono">
                  ISO-Aligned Process
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
