import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";
import { headerNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/common/Button";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  // Close when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSubmenu = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E9F0]">
          <div>
            <span className="font-bold text-[#17194D] text-base tracking-tight font-heading block">
              {siteConfig.companyName}
            </span>
            <span className="text-[10px] text-[#4B91CC] font-semibold uppercase tracking-wider block">
              {siteConfig.tagline}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#687386] hover:text-[#17194D] rounded-md focus-visible:outline-2 focus-visible:outline-[#4B91CC]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {headerNavItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isSubOpen = openDropdown === item.title;

            if (hasChildren) {
              return (
                <div key={item.title} className="py-1">
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-[#17194D] hover:bg-[#F5F7FA] rounded-md transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#687386] transition-transform ${
                        isSubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isSubOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-[#F5F7FA] rounded-md mt-1 border-l-2 border-[#4B91CC]">
                      {item.children?.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm rounded-md transition-colors ${
                              isActive
                                ? "text-[#17194D] font-semibold bg-white shadow-xs"
                                : "text-[#687386] hover:text-[#17194D]"
                            }`
                          }
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-base rounded-md transition-colors ${
                    isActive
                      ? "text-[#17194D] font-bold bg-[#F0F1F8]"
                      : "text-[#20242D] hover:text-[#17194D] hover:bg-[#F5F7FA]"
                  }`
                }
              >
                <span>{item.title}</span>
                <ChevronRight className="w-4 h-4 text-[#687386] opacity-40" />
              </NavLink>
            );
          })}
        </nav>

        {/* Action CTAs & Contact Info */}
        <div className="p-6 border-t border-[#E5E9F0] bg-[#F5F7FA] space-y-4">
          <div className="flex flex-col gap-2.5">
            <Button to="/employers" variant="primary" size="md" className="w-full">
              Hire Talent
            </Button>
            <Button to="/job-seekers" variant="outline" size="md" className="w-full">
              Find a Job
            </Button>
          </div>

          <div className="pt-2 text-xs text-[#687386] space-y-2 border-t border-[#E5E9F0]/80">
            <a
              href={`tel:${siteConfig.indiaPhone}`}
              className="flex items-center gap-2 hover:text-[#17194D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4B91CC]" />
              <span>India: {siteConfig.indiaPhone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-2 hover:text-[#17194D] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#4B91CC]" />
              <span>{siteConfig.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
