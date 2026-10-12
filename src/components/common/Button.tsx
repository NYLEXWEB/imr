import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "subtle";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  to,
  href,
  children,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...rest
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B91CC]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-[6px] gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-[8px] gap-2",
    lg: "text-base px-6 py-3 rounded-[8px] gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#17194D] text-white hover:bg-[#121440] shadow-sm hover:shadow active:scale-[0.99]",
    secondary: "bg-[#4B91CC] text-white hover:bg-[#3d7fb8] shadow-sm active:scale-[0.99]",
    outline: "border border-[#E5E9F0] text-[#17194D] bg-white hover:bg-[#F5F7FA] hover:border-[#CBD5E1] active:scale-[0.99]",
    white: "bg-white text-[#17194D] hover:bg-[#F5F7FA] shadow-sm font-semibold active:scale-[0.99]",
    subtle: "bg-[#F0F1F8] text-[#17194D] hover:bg-[#E5E9F0] active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};
