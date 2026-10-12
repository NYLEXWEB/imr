import React from "react";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import { usePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const NotFoundPage: React.FC = () => {
  usePageMetadata({
    title: "Page Not Found (404)",
    description: "The requested page could not be located on the Indian Manpower Resource recruitment portal.",
  });

  return (
    <div className="py-24 sm:py-32 bg-[#F5F7FA] min-h-[60vh] flex items-center">
      <Container size="narrow">
        <div className="text-center space-y-6 bg-white p-8 sm:p-12 rounded-[12px] border border-[#E5E9F0] shadow-xs">
          <span className="font-mono text-sm font-bold text-[#4B91CC] bg-[#4B91CC]/10 px-3 py-1 rounded">
            ERROR 404
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#17194D]">
            Page Not Found
          </h1>

          <p className="text-base text-[#687386] max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily
            unavailable. Please use the navigation links below to continue browsing.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Return to Home
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<Search className="w-4 h-4" />}
            >
              Explore Our Services
            </Button>
          </div>

          <div className="pt-6 border-t border-[#E5E9F0] text-xs text-[#687386]">
            Looking for a specific department?{" "}
            <Link to="/contact" className="text-[#4B91CC] underline font-medium hover:text-[#17194D]">
              Contact our recruitment team
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
