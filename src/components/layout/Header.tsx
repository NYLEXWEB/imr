import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { headerNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { MobileNavigation } from "./MobileNavigation";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change or click outside
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E9F0] transition-colors">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Wordmark Logo */}
            <Link
              to="/"
              className="flex flex-col group py-1 focus-visible:outline-2 focus-visible:outline-[#4B91CC] rounded-sm"
              aria-label="Indian Manpower Resource Home"
            >
              <span className="font-heading font-extrabold text-lg sm:text-xl text-[#17194D] tracking-tight group-hover:text-[#4B91CC] transition-colors">
                INDIAN MANPOWER RESOURCE
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#687386] uppercase">
                {siteConfig.tagline}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center space-x-1 xl:space-x-2"
              aria-label="Main Navigation"
            >
              {headerNavItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isDropdownOpen = activeDropdown === item.title;

                if (hasChildren) {
                  const isParentActive =
                    item.children?.some((c) => location.pathname === c.path) ||
                    location.pathname.startsWith(item.path);

                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown(isDropdownOpen ? null : item.title)
                        }
                        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isParentActive
                            ? "text-[#17194D] font-semibold bg-[#F0F1F8]"
                            : "text-[#20242D] hover:text-[#17194D] hover:bg-[#F5F7FA]"
                        }`}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#687386] transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg border border-[#E5E9F0] py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.children?.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm transition-colors ${
                                  isActive
                                    ? "bg-[#F0F1F8] text-[#17194D] font-semibold"
                                    : "text-[#20242D] hover:bg-[#F5F7FA] hover:text-[#17194D]"
                                }`
                              }
                            >
                              <div className="font-medium">{sub.title}</div>
                              {sub.description && (
                                <div className="text-xs text-[#687386] mt-0.5 line-clamp-1">
                                  {sub.description}
                                </div>
                              )}
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
                      `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-[#17194D] font-semibold bg-[#F0F1F8]"
                          : "text-[#20242D] hover:text-[#17194D] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/job-seekers"
                className="text-sm font-medium text-[#687386] hover:text-[#17194D] px-2 py-2 transition-colors"
              >
                Find a Job
              </Link>
              <Button to="/employers" variant="primary" size="md">
                Hire Talent
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2 text-[#17194D] hover:bg-[#F5F7FA] rounded-md focus-visible:outline-2 focus-visible:outline-[#4B91CC]"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
