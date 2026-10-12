import React from "react";
import { Container } from "./Container";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  theme?: "navy" | "subtle" | "white";
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  theme = "subtle",
  children,
}) => {
  const isNavy = theme === "navy";
  const isSubtle = theme === "subtle";

  const bgStyles = isNavy
    ? "bg-[#17194D] text-white border-b border-[#232766]"
    : isSubtle
    ? "bg-[#F5F7FA] text-[#20242D] border-b border-[#E5E9F0]"
    : "bg-white text-[#20242D] border-b border-[#E5E9F0]";

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${bgStyles}`}>
      <Container>
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} theme={isNavy ? "dark" : "light"} />
          </div>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <span
              className={`inline-block text-xs font-bold uppercase tracking-wider mb-3 ${
                isNavy ? "text-[#4B91CC]" : "text-[#4B91CC]"
              }`}
            >
              {eyebrow}
            </span>
          )}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
              isNavy ? "text-white" : "text-[#17194D]"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed ${
              isNavy ? "text-gray-300" : "text-[#687386]"
            }`}
          >
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
};
