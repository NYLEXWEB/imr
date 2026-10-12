import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
            isDark ? "text-[#4B91CC]" : "text-[#4B91CC]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#17194D]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-[#687386]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
