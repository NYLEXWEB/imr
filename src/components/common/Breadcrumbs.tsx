import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs sm:text-sm ${
        isDark ? "text-gray-300" : "text-[#687386]"
      } ${className}`}
    >
      <Link
        to="/"
        className={`inline-flex items-center gap-1 hover:text-[#4B91CC] transition-colors`}
        aria-label="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="hover:text-[#4B91CC] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${
                  isDark ? "text-white" : "text-[#17194D]"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
