import React from "react";
import { ArrowRight, HeartPulse, UserCheck, Stethoscope } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const MedicalRecruitmentPage: React.FC = () => {
  usePageMetadata({
    title: "Medical Recruitment | Healthcare Staffing & Placement",
    description:
      "Specialized healthcare recruitment for hospitals and medical clinics. Sourcing physicians, registered nurses, allied clinicians, and administrative leaders.",
    canonicalPath: "/services/medical-recruitment",
  });

  const healthcareServices = [
    {
      title: "Job Placement",
      description: "Recruitment support for medical and healthcare roles across international clinics, acute hospitals, and specialized centers.",
    },
    {
      title: "Resume Assistance",
      description: "Guidance to help medical candidates present their clinical qualifications, certifications, and experience clearly.",
    },
    {
      title: "Interview Coaching",
      description: "Preparation support for professional clinical interviews and hospital assessment panels.",
    },
    {
      title: "Career Counselling",
      description: "Guidance for healthcare professionals evaluating overseas career options, licensing exams, and relocation steps.",
    },
  ];

  const targetAudiences = [
    "Specialist Physicians & Surgeons",
    "Registered Staff Nurses (ICU, OT, Inpatient)",
    "Allied Health Professionals & Lab Technologists",
    "Healthcare Administrators & Clinical Managers",
    "International Healthcare Employers & Hospital Groups",
  ];

  const whyChooseUs = [
    {
      title: "Industry Awareness",
      description: "Understanding clinical standards, statutory licensing frameworks, and role requirements across international jurisdictions.",
    },
    {
      title: "Role-Based Matching",
      description: "Rigorous focus on the exact medical qualifications, language competencies, and specialist clinical skills required for each role.",
    },
    {
      title: "Recruitment Coordination",
      description: "Dedicated administrative support facilitating candidate interviews, document authentication, and deployment coordination.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="HEALTHCARE PRACTICE"
        title="Find Your Perfect Fit in the Medical Field"
        description="We support recruitment-related needs across healthcare, with an approach focused on understanding role requirements and identifying suitable professional profiles."
        breadcrumbs={[
          { label: "Our Services", path: "/services" },
          { label: "Medical Recruitment" },
        ]}
      />

      {/* Overview & Image */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="CLINICAL SOURCING"
                title="Dedicated Recruitment for International Healthcare Systems"
                description="Healthcare recruitment demands deep accountability, verification of credentials, and mutual trust between clinical candidates and host medical institutions."
              />
              <p className="text-base text-[#687386] leading-relaxed">
                From nursing placements in regional hospitals to coordinating specialized
                clinical staff for tertiary medical centers, our recruitment team provides
                personalized guidance ensuring candidates meet regulatory standards while
                employers gain committed professionals.
              </p>

              {/* Target audiences */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17194D] mb-3">
                  Key Healthcare Profiles Sourced:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {targetAudiences.map((aud, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#20242D]">
                      <Stethoscope className="w-4 h-4 text-[#4B91CC] shrink-0" />
                      <span>{aud}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageWithFallback
                src="/images/services/medical-recruitment.svg"
                alt="Healthcare professionals in a modern medical hospital environment"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="HEALTHCARE SOURCING"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Specific Healthcare Services */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading
              align="center"
              eyebrow="HEALTHCARE SERVICES"
              title="Tailored Support for Clinicians & Employers"
              description="Comprehensive recruitment assistance structured around healthcare industry standards and candidate readiness."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthcareServices.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[10px] bg-white border border-[#E5E9F0] shadow-xs"
              >
                <div className="w-9 h-9 rounded-full bg-[#F0F1F8] text-[#4B91CC] flex items-center justify-center mb-3">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#17194D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#687386] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose This Service */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading
              align="center"
              eyebrow="OUR STRENGTHS"
              title="Why Choose Our Medical Recruitment Support"
              description="A disciplined recruitment partner helping healthcare employers build dependable medical teams."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]"
              >
                <UserCheck className="w-5 h-5 text-[#4B91CC] mb-3" />
                <h3 className="font-heading font-bold text-base text-[#17194D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#687386] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Discuss Healthcare Recruitment
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Connect with our medical staffing desk to discuss hospital workforce
              requirements or registered nurse deployments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Healthcare Recruitment
              </Button>
              <Button
                to="/job-seekers"
                variant="outline"
                size="md"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Medical Candidates: Apply Here
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MedicalRecruitmentPage;
