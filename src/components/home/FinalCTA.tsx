import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#17194D] text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#4B91CC]">
            PARTNER WITH INDIAN MANPOWER RESOURCE
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Let's Build Your Global Workforce.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Looking for qualified professionals or your next career opportunity?
            Connect with our recruitment team for dedicated, cross-border workforce
            support.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/employers"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Hire Talent
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Us
            </Button>
          </div>

          <p className="text-xs text-gray-400 pt-4">
            Operational coordination across India, UAE, and Ireland corridors.
          </p>
        </div>
      </Container>
    </section>
  );
};
