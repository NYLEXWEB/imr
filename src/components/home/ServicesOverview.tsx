import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  HardHat,
  Flame,
  GraduationCap,
  Truck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { servicesData } from "@/data/services";

export const ServicesOverview: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5" />,
    HardHat: <HardHat className="w-5 h-5" />,
    Flame: <Flame className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Truck: <Truck className="w-5 h-5" />,
    Briefcase: <Briefcase className="w-5 h-5" />,
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E5E9F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Recruitment Solutions Across Key Industries"
            description="We support recruitment requirements across healthcare, construction and hospitality, oil and gas, education, and production and transportation."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17194D] hover:text-[#4B91CC] transition-colors shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid with subtle variation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-[12px] bg-white border transition-all duration-200 hover:shadow-md hover:border-[#CBD5E1] ${
                  isFeatured ? "border-[#CBD5E1]" : "border-[#E5E9F0]"
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-[8px] bg-[#F0F1F8] text-[#17194D] flex items-center justify-center mb-5">
                    {iconMap[service.iconName] || <Briefcase className="w-5 h-5" />}
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#17194D]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#687386] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5E9F0]/80">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B91CC] hover:text-[#17194D] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
