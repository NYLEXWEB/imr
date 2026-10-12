import React from "react";
import { usePageMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/HomeHero";
import { CompanyIntroduction } from "@/components/home/CompanyIntroduction";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesOverview } from "@/components/home/IndustriesOverview";
import { RecruitmentProcessPreview } from "@/components/home/RecruitmentProcessPreview";
import { EmployerShowcase } from "@/components/home/EmployerShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";

export const HomePage: React.FC = () => {
  usePageMetadata({
    title: "Global Recruitment Solutions & Manpower Placement",
    description:
      "Indian Manpower Resource connects international employers with qualified professionals across healthcare, construction, oil & gas, education, and logistics sectors.",
    canonicalPath: "/",
  });

  return (
    <div className="flex flex-col">
      {/* 01: Hero */}
      <HomeHero />

      {/* 02: Company Introduction */}
      <CompanyIntroduction />

      {/* 03: Core Services */}
      <ServicesOverview />

      {/* 04: Why Choose Us (Metrics & Claims) */}
      <WhyChooseUs />

      {/* 05: Industries We Serve */}
      <IndustriesOverview />

      {/* 06: Recruitment Process (6-Stage Overview) */}
      <RecruitmentProcessPreview />

      {/* 07: Employer References Showcase */}
      <EmployerShowcase />

      {/* 08: Final Action CTA */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
