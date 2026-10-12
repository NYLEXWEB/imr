import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Briefcase, FileText, UserCheck, Compass, AlertCircle, Shield } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CandidateEnquiryForm } from "@/components/forms/CandidateEnquiryForm";

export const JobSeekersPage: React.FC = () => {
  usePageMetadata({
    title: "Job Seekers | Candidate Support & International Career Enquiry",
    description:
      "Explore candidate recruitment services, interview preparation, and registration with Indian Manpower Resource for international career opportunities.",
    canonicalPath: "/job-seekers",
  });

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const candidateSupport = [
    {
      title: "Job Placement Assistance",
      description: "Recruitment-related support matching candidates against validated employer demands across healthcare, technical, and skilled trades.",
      icon: <Briefcase className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Resume Assistance",
      description: "Help candidates present qualifications, work histories, technical certifications, and references clearly in international CV formats.",
      icon: <FileText className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Interview Coaching",
      description: "Interview preparation and professional presentation guidance for technical panel interviews and video evaluations.",
      icon: <UserCheck className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Career Counselling",
      description: "Objective guidance helping candidates navigate international licensing, destination norms, and long-term professional development.",
      icon: <Compass className="w-5 h-5 text-[#4B91CC]" />,
    },
  ];

  const industries = [
    { name: "Healthcare & Life Sciences", path: "/services/medical-recruitment" },
    { name: "Construction & Hospitality", path: "/services/construction-hospitality" },
    { name: "Oil & Gas / Energy Projects", path: "/services/oil-gas" },
    { name: "Production & Transportation", path: "/services/production-transportation" },
    { name: "Education & Academics", path: "/services/education" },
  ];

  return (
    <div>
      <PageHero
        eyebrow="FOR ASPIRING PROFESSIONALS"
        title="Your Next Career Opportunity Starts Here."
        description="Explore recruitment support and candidate services designed to help you prepare for suitable professional opportunities."
        breadcrumbs={[{ label: "Job Seekers" }]}
      >
        <div className="pt-2">
          <Button
            onClick={scrollToForm}
            variant="secondary"
            size="lg"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Submit Candidate Profile & Resume
          </Button>
        </div>
      </PageHero>

      {/* Section 1: Candidate Support */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeading
              align="center"
              eyebrow="CANDIDATE SERVICES"
              title="How We Support Your International Career Path"
              description="From fine-tuning your professional dossier to preparing for overseas employer interviews, we guide you through each stage."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidateSupport.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E5E9F0] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#17194D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#687386] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2: Industries & Ethical Disclosure */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <SectionHeading
                align="center"
                eyebrow="TARGET SECTORS"
                title="Active Recruitment Corridors"
                description="We process requirements across five primary sectors based on employer demand cycles."
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {industries.map((ind) => (
                <Link
                  key={ind.name}
                  to={ind.path}
                  className="px-4 py-2 rounded-full bg-white border border-[#E5E9F0] text-xs font-semibold text-[#17194D] hover:border-[#4B91CC] hover:text-[#4B91CC] transition-colors"
                >
                  {ind.name} &rarr;
                </Link>
              ))}
            </div>

            {/* Crucial Ethical Policy Disclosure */}
            <div className="p-5 rounded-[10px] bg-white border border-[#CBD5E1] text-xs text-[#20242D] space-y-2 mt-8">
              <div className="flex items-center gap-2 font-bold text-[#17194D]">
                <AlertCircle className="w-4 h-4 text-[#4B91CC] shrink-0" />
                <span>Ethical Recruitment & Truth in Advertising Policy</span>
              </div>
              <p className="text-[#687386] leading-relaxed">
                Candidate opportunities depend strictly on active employer requirements,
                verified candidate qualifications, and current recruitment authorizations.
                Indian Manpower Resource does not manufacture fictitious vacancies, does
                not guarantee job placement outcomes, and does not promise visa approvals.
                All visa and immigration decisions reside exclusively with host-country governments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Candidate Enquiry Form */}
      <section ref={formRef} className="py-16 sm:py-24 bg-white border-b border-[#E5E9F0]">
        <Container size="narrow">
          <CandidateEnquiryForm />
        </Container>
      </section>

      {/* Section 4: Privacy Notice */}
      <section className="py-12 bg-[#F5F7FA]">
        <Container size="narrow">
          <div className="flex items-start gap-3 text-xs text-[#687386]">
            <Shield className="w-5 h-5 text-[#4B91CC] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Data Privacy & Use:</strong> Candidate information and uploaded resumes
              are collected exclusively for recruitment-related communication and suitability
              evaluations with potential employers. We do not sell or monetize personal candidate
              data. Review our full{" "}
              <Link to="/privacy-policy" className="text-[#4B91CC] underline hover:text-[#17194D]">
                Privacy Policy
              </Link>{" "}
              for complete details.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default JobSeekersPage;
