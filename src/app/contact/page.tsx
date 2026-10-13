import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
