import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  ...rest
}) => {
  const maxSizes = {
    narrow: "max-w-4xl",
    default: "max-w-[1240px]",
    wide: "max-w-[1360px]",
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxSizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
