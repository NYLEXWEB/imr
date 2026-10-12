import React from "react";
import { AlertCircle } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/siteConfig";

export const PrivacyPolicyPage: React.FC = () => {
  usePageMetadata({
    title: "Privacy Policy (Draft) | Indian Manpower Resource",
    description:
      "Draft Privacy Policy governing data collection, resume handling, and recruitment communication for Indian Manpower Resource.",
    canonicalPath: "/privacy-policy",
  });

  return (
    <div>
      <PageHero
        eyebrow="LEGAL DRAFT FOR REVIEW"
        title="Privacy Policy"
        description="Draft statement regarding the collection, processing, and handling of information submitted to Indian Manpower Resource."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container size="narrow">
          {/* Draft Notice Alert */}
          <div className="mb-10 p-5 rounded-[10px] bg-[#F0F1F8] border border-[#CBD5E1] text-[#17194D]">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#4B91CC] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Draft Document for Corporate Review</h4>
                <p className="mt-1 text-xs text-[#687386] leading-relaxed">
                  This document serves as an architectural draft prepared for Indian Manpower Resource. It must undergo formal review and adaptation by qualified legal counsel to ensure compliance with applicable data protection laws across India, the United Arab Emirates, and the European Union (GDPR).
                </p>
              </div>
            </div>
          </div>

          <article className="prose prose-slate max-w-none text-[#20242D] space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                1. Scope & Purpose
              </h2>
              <p className="text-[#687386]">
                This Privacy Policy describes how Indian Manpower Resource ("IMR", "we", "us", or "our") collects, uses, and safeguards personal and professional information provided by job seekers, candidates, employer representatives, and website visitors through our online platform.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                2. Information Collected Through Enquiry Forms
              </h2>
              <p className="text-[#687386]">
                We collect information when you submit recruitment or candidate enquiries. This may include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#687386]">
                <li><strong>Candidate Information:</strong> Full name, email address, telephone number, qualifications, trade certifications, career histories, and curriculum vitae (CV/resume).</li>
                <li><strong>Employer Information:</strong> Organization name, business contact person, official email, phone number, industry, vacancy counts, and job descriptions.</li>
                <li><strong>General Inquiries:</strong> Name, contact details, and message contents.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                3. Intended Recruitment-Related Use
              </h2>
              <p className="text-[#687386]">
                All personal and professional information submitted is collected solely for legitimate international recruitment activities:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#687386]">
                <li>Evaluating candidate suitability against specific employer job specifications.</li>
                <li>Communicating with candidates regarding interview schedules, screening steps, and potential vacancies.</li>
                <li>Transmitting candidate dossiers to prospective employers strictly with candidate knowledge and consent.</li>
                <li>Coordinating documentation required for emigration, statutory licensing, or visa processing.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                4. Candidate Resume Information
              </h2>
              <p className="text-[#687386]">
                Uploaded resumes and personal documents are treated with strict confidentiality. We do not sell, rent, or commercialize candidate profiles to third-party data aggregators. Transmission of candidate profiles is restricted to legitimate hiring partners actively seeking staff.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                5. Data Retention & Security
              </h2>
              <p className="text-[#687386]">
                We maintain appropriate technical and administrative precautions to safeguard personal information against unauthorized access, loss, or misuse. Candidate profiles are retained only for the duration necessary to satisfy recruitment and regulatory requirements, after which records are archived or securely expunged upon request.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                6. User Rights
              </h2>
              <p className="text-[#687386]">
                Subject to applicable statutory laws (including India's DPDP Act and the EU GDPR where applicable), candidates and employers maintain the right to access their submitted data, request correction of inaccurate details, or request deletion of their profile from our active recruitment databases.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                7. Contact Details for Privacy Inquiries
              </h2>
              <p className="text-[#687386]">
                For questions concerning this draft Privacy Policy or to exercise your data subject rights, please contact our administrative desk:
              </p>
              <div className="mt-3 p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0] text-xs text-[#20242D] space-y-1">
                <div><strong>Entity:</strong> {siteConfig.companyName}</div>
                <div><strong>Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#4B91CC]">{siteConfig.contactEmail}</a></div>
                <div><strong>Address:</strong> {siteConfig.indiaAddress.fullFormatted}</div>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
