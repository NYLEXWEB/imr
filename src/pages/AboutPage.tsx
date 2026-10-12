import React from "react";
import { ArrowRight, ShieldCheck, Heart, Award, Users, Handshake } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export const AboutPage: React.FC = () => {
  usePageMetadata({
    title: "About Us | Corporate Overview & Philosophy",
    description:
      "Learn about Indian Manpower Resource: our partnership philosophy founded on humanity and loyalty, and our commitment to sustainable global workforce placement.",
    canonicalPath: "/about",
  });

  const values = [
    {
      title: "Integrity",
      description: "Build professional relationships through honest communication and rigorous compliance.",
      icon: <ShieldCheck className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Trust",
      description: "Value and protect the confidence placed in our recruitment and candidate vetting process.",
      icon: <Award className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Professionalism",
      description: "Approach employer workforce requirements and candidate career aspirations responsibly.",
      icon: <Users className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Human Connection",
      description: "Recognize the individual dignity and career ambitions of the people behind every placement decision.",
      icon: <Heart className="w-5 h-5 text-[#4B91CC]" />,
    },
    {
      title: "Long-Term Relationships",
      description: "Work toward lasting, mutually beneficial professional relationships between employers and employees.",
      icon: <Handshake className="w-5 h-5 text-[#4B91CC]" />,
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="ABOUT US"
        title="About Indian Manpower Resource"
        description="Building connections between skilled professionals and global employers through recruitment expertise and professional relationships."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Section 1: Company Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="COMPANY OVERVIEW"
                title="People, Partnerships and Purpose"
                description="Indian Manpower Resource focuses on manpower sourcing and recruitment support for employers seeking suitable professionals across multiple industries."
              />

              <div className="text-base text-[#687386] space-y-4 leading-relaxed">
                <p>
                  The company's approach emphasizes understanding employer requirements,
                  identifying suitable candidates, coordinating recruitment activities,
                  and supporting professional relationships between employers and employees.
                </p>
                <p>
                  With operational experience spanning healthcare institutions,
                  heavy civil construction, industrial production facilities, energy
                  complexes, and education, our focus remains on providing reliable,
                  structured recruitment support tailored to international deployment standards.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageWithFallback
                src="/images/about/company-story.svg"
                alt="Indian Manpower Resource corporate operations and global mobility"
                aspectRatioClass="aspect-[4/3]"
                categoryTag="MANPOWER SOURCING"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Words of Management */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E5E9F0]">
        <Container size="narrow">
          <div className="bg-white rounded-[12px] p-8 sm:p-10 lg:p-12 border border-[#E5E9F0] shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4B91CC] block mb-2">
              WORDS OF MANAGEMENT
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#17194D] tracking-tight">
              A Partnership Built on Humanity and Loyalty
            </h2>

            <blockquote className="mt-6 pl-4 border-l-3 border-[#4B91CC] text-base sm:text-lg text-[#20242D] italic leading-relaxed space-y-4">
              <p>
                "As a partnership firm, we believe in humanity and loyalty. We work
                to identify suitable job opportunities and match them with the
                requirements of employers and candidates."
              </p>
              <p>
                "Good leadership and manpower are important to the development of
                every organization. We aim to support both the company and the
                employee, working between them through the effective use of human
                resources."
              </p>
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#E5E9F0] flex items-center justify-between text-xs text-[#687386]">
              <span className="font-semibold text-[#17194D]">
                Management Statement
              </span>
              <span>Adapted faithfully from Official Company Profile</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Company Values */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionHeading
              align="center"
              eyebrow="CORE PRINCIPLES"
              title="What Guides Our Work"
              description="These core principles reflect our management philosophy and govern every interaction with international hiring partners and aspiring candidates."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E5E9F0] flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#17194D]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#687386] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: CTA linking to Our Story */}
      <section className="py-16 bg-[#17194D] text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Get to Know Our Journey
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Discover the historical milestones and international corridors traversed
              since the inception of our manpower services in 2003.
            </p>
            <div>
              <Button
                to="/about/our-story"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Story
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
