import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

export interface PageMetadataProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
}

export function usePageMetadata({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
}: PageMetadataProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.companyName}`;
    document.title = fullTitle;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const fullUrl = `https://${siteConfig.officialDomain}${canonicalPath}`;
    canonical.setAttribute("href", fullUrl);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", fullTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);

    // OpenGraph Type
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement("meta");
      ogTypeMeta.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeMeta);
    }
    ogTypeMeta.setAttribute("content", ogType);

    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title, description, canonicalPath, ogType]);
}
