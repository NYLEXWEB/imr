import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/common/Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17194D] text-white border-t border-[#232766]">
      {/* Main Footer Links */}
      <div className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1: Brand & Positioning (2 cols wide on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white block">
                  {siteConfig.companyName}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B91CC] mt-1 block">
                  {siteConfig.tagline}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                Recruitment support focused on connecting employer requirements
                with suitable professional candidates across international
                healthcare, industrial, civil, and commercial sectors.
              </p>
              <div className="pt-2 text-xs text-gray-400 space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#4B91CC] shrink-0 mt-0.5" />
                  <span>
                    City Heights Bldg, N.H. 47, South Chalakudy, Thrissur, Kerala, India.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                  <span>{siteConfig.officialDomain}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Company */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-300">
                {footerLinks.company.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-[#4B91CC] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-300">
                {footerLinks.services.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-[#4B91CC] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Regional */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
                Contact & Regional
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href={`tel:${siteConfig.indiaPhone}`}
                    className="flex items-center gap-2 hover:text-[#4B91CC] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                    <span>India: {siteConfig.indiaPhone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.uaePhone}`}
                    className="flex items-center gap-2 hover:text-[#4B91CC] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                    <span>UAE: {siteConfig.uaePhone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.irelandPhone}`}
                    className="flex items-center gap-2 hover:text-[#4B91CC] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                    <span>Ireland: {siteConfig.irelandPhone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="flex items-center gap-2 hover:text-[#4B91CC] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#4B91CC] shrink-0" />
                    <span>{siteConfig.contactEmail}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#232766] py-6 text-xs text-gray-400">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
