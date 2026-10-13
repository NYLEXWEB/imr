import {
  Stethoscope,
  Briefcase,
  FileText,
  UserCheck2,
  Compass,
  CheckCircle,
  Building,
  Heart,
  Users,
} from "lucide-react";

export default function MedicalServices() {
  const services = [
    {
      title: "Job Placement",
      description:
        "We offer a wide range of opportunities from nursing to specialized medical roles.",
      icon: Briefcase,
    },
    {
      title: "Resume Assistance",
      description:
        "Tailored support to help you stand out in a competitive market.",
      icon: FileText,
    },
    {
      title: "Interview Coaching",
      description:
        "Prepare effectively for interviews with our expert guidance.",
      icon: UserCheck2,
    },
    {
      title: "Career Counseling",
      description:
        "Personalized advice to navigate your career path in healthcare.",
      icon: Compass,
    },
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description:
        "Our team has years of experience in medical recruitment.",
      icon: Stethoscope,
    },
    {
      title: "Tailored Matches",
      description:
        "We take the time to understand your goals and skills to find the best fit.",
      icon: UserCheck2,
    },
    {
      title: "Strong Network",
      description:
        "Partnerships with top hospitals and healthcare organizations.",
      icon: Building,
    },
  ];

  const specializations = [
    "Physicians",
    "Nurses",
    "Allied Health Professionals",
    "Healthcare Administrators",
    "Employers",
  ];

  return (
    <section id="medical" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Brochure Page 9 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-imr-blue-primary text-xs font-mono uppercase tracking-wider">
            <span>Healthcare Recruitment Division</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy leading-tight">
            Find Your Perfect Fit in the <br />
            <span className="text-imr-blue-primary">Medical Field</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Connecting premier healthcare talent with prestigious hospitals, clinics, and health systems across the GCC and Europe.
          </p>
        </div>

        {/* 2 Main Columns: Our Services & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Section: Our Services */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-imr-blue-primary text-xs font-semibold uppercase tracking-wider">
                  Our Services
                </span>
              </div>

              <div className="space-y-6">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-blue-50 text-imr-blue-primary flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-imr-navy mb-1 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: Why Choose Us? */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                  Why Choose Us?
                </span>
              </div>

              <div className="space-y-6">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-imr-navy mb-1 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs text-slate-500 font-light">
              Full assistance with MOH, DOH, DHA, OMSB, QCHP, and European licensing.
            </div>
          </div>
        </div>

        {/* Section: Job Seekers - Specialization Pill Box */}
        <div className="bg-gradient-to-r from-imr-navy via-[#161c42] to-imr-blue-primary rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-white/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
                Job Seekers
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Ready to advance your career?{" "}
                <span className="text-sky-300">We specialize in:</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Direct interviews and placement opportunities with world-class medical institutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
              {specializations.map((spec, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-normal"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
