import React from "react";
import { Phone, Mail, MapPin, Globe, AlertCircle } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyContact } from "@/data/companyContact";

export const ContactPage: React.FC = () => {
  usePageMetadata({
    title: "Contact Us | Indian Manpower Resource Offices",
    description:
      "Contact Indian Manpower Resource for international recruitment enquiries, candidate coordination, and office locations in India, UAE, and Ireland.",
    canonicalPath: "/contact",
  });

  return (
    <div>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Start a Conversation"
        description="Contact Indian Manpower Resource to discuss recruitment requirements, candidate enquiries, or general questions."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E9F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="COMMUNICATION CHANNELS"
                  title="Official Company Contacts"
                  description="Reach our administration and recruitment desks across our operational corridors."
                />
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {companyContact.offices.map((office) => (
                  <div
                    key={office.country}
                    className="p-5 sm:p-6 rounded-[10px] bg-[#F5F7FA] border border-[#E5E9F0]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-bold text-base text-[#17194D]">
                        {office.country}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4B91CC]">
                        {office.label}
                      </span>
                    </div>

                    <div className="space-y-2 mt-3 text-sm text-[#20242D]">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#4B91CC] shrink-0" />
                        <a
                          href={`tel:${office.phoneRaw}`}
                          className="font-medium text-[#17194D] hover:text-[#4B91CC] transition-colors"
                        >
                          {office.phoneFormatted}
                        </a>
                      </div>

                      {office.addressLines && (
                        <div className="flex items-start gap-2.5 pt-1 text-xs text-[#687386]">
                          <MapPin className="w-4 h-4 text-[#4B91CC] shrink-0 mt-0.5" />
                          <div>
                            {office.addressLines.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#E5E9F0] text-[11px] text-[#687386]">
                      {office.notes}
                    </div>
                  </div>
                ))}
              </div>

              {/* Email & Website Hub */}
              <div className="p-5 rounded-[10px] bg-[#F0F1F8] border border-[#CBD5E1] space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#4B91CC] shrink-0" />
                  <div>
                    <span className="text-xs text-[#687386] block">Central Email:</span>
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="font-semibold text-[#17194D] hover:text-[#4B91CC] transition-colors"
                    >
                      {companyContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm pt-2 border-t border-[#E5E9F0]/80">
                  <Globe className="w-4 h-4 text-[#4B91CC] shrink-0" />
                  <div>
                    <span className="text-xs text-[#687386] block">Official Domain:</span>
                    <span className="font-semibold text-[#17194D]">
                      {companyContact.websiteDomain}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verification disclaimer */}
              <div className="p-4 rounded-[8px] bg-white border border-[#E5E9F0] text-xs text-[#687386] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#4B91CC] shrink-0 mt-0.5" />
                <p>{companyContact.verificationNotice}</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
