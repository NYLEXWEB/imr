import React from "react";
import { AlertCircle } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/siteConfig";

export const TermsPage: React.FC = () => {
  usePageMetadata({
    title: "Terms and Conditions (Draft) | Indian Manpower Resource",
    description:
      "Draft terms and conditions governing website use, candidate applications, recruitment representations, and legal notices for Indian Manpower Resource.",
    canonicalPath: "/terms",
  });

  return (
    <div>
      <PageHero
        eyebrow="LEGAL DRAFT FOR REVIEW"
        title="Terms and Conditions"
        description="Draft terms governing the use of the Indian Manpower Resource corporate recruitment website."
        breadcrumbs={[{ label: "Terms and Conditions" }]}
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
                  These Terms and Conditions constitute a structural draft intended for review and final execution by the management of Indian Manpower Resource and its legal advisers prior to formal commercial publication.
                </p>
              </div>
            </div>
          </div>

          <article className="prose prose-slate max-w-none text-[#20242D] space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#687386]">
                By accessing or browsing this website, you acknowledge that you have read, understood, and agreed to be bound by these draft Terms and Conditions. If you do not agree to these terms, you should refrain from utilizing this portal.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                2. Nature of Website Information
              </h2>
              <p className="text-[#687386]">
                The materials, sector overviews, and recruitment timelines presented on this website are provided for general informational purposes. While Indian Manpower Resource makes reasonable efforts to maintain accuracy, content is subject to change without prior notice as regulatory or commercial environments evolve.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                3. Accuracy of Candidate & Employer Information
              </h2>
              <p className="text-[#687386]">
                All individuals submitting candidate profiles and resumes warrant that the information, educational credentials, work experience records, and personal representations provided are truthful, accurate, and complete. Submission of falsified credentials may result in immediate disqualification and reporting to relevant statutory authorities.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                4. No Guarantee of Job Placement or Employment
              </h2>
              <p className="text-[#687386]">
                Submission of a candidate enquiry, registration form, or curriculum vitae does NOT constitute an employment offer, contract of service, or guarantee of overseas job placement. Hiring decisions rest solely with prospective employer organizations.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                5. No Guarantee of Visa or Immigration Clearance
              </h2>
              <p className="text-[#687386]">
                Indian Manpower Resource facilitates recruitment coordination and documentation assistance. We do NOT guarantee work permit approvals, visa issuance, or emigration clearances. The decision to grant entry visas or work authorizations is the exclusive statutory prerogative of sovereign immigration authorities and consulates.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                6. Permissible Website Use
              </h2>
              <p className="text-[#687386]">
                Visitors agree to use this site strictly for legitimate recruitment and workforce sourcing purposes. Prohibited activities include attempting to compromise security protocols, uploading malicious files, scrapers or automated crawlers disrupting server capacity, or submitting fraudulent enquiries.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                7. Limitation of Liability
              </h2>
              <p className="text-[#687386]">
                To the fullest extent permitted by applicable law, Indian Manpower Resource and its partners shall not be liable for any indirect, incidental, or consequential damages resulting from website downtime, delays in recruitment processing, or third-party communications.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#17194D] mb-3">
                8. Contact Information
              </h2>
              <p className="text-[#687386]">
                For legal notices or questions regarding these terms:
              </p>
              <div className="mt-3 p-4 rounded-[8px] bg-[#F5F7FA] border border-[#E5E9F0] text-xs text-[#20242D] space-y-1">
                <div><strong>Entity:</strong> {siteConfig.companyName}</div>
                <div><strong>Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#4B91CC]">{siteConfig.contactEmail}</a></div>
                <div><strong>Location:</strong> {siteConfig.indiaAddress.fullFormatted}</div>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
};

export default TermsPage;
