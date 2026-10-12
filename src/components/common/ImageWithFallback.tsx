import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatioClass?: string;
  categoryTag?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  aspectRatioClass = "aspect-[16/9]",
  categoryTag,
  priority = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F0F1F8] border border-[#E5E9F0] rounded-[12px] ${aspectRatioClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0E1033] to-[#17194D] text-white">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-[#4B91CC]">
            <ImageIcon className="w-6 h-6" />
          </div>
          {categoryTag && (
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4B91CC] bg-[#4B91CC]/15 px-2.5 py-1 rounded-[4px] mb-2">
              {categoryTag}
            </span>
          )}
          <p className="text-sm font-semibold text-white/90 max-w-sm">{alt}</p>
          <span className="mt-2 text-[11px] text-white/50 tracking-wide">
            Indian Manpower Resource
          </span>
        </div>
      )}
    </div>
  );
};
