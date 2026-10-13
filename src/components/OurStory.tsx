import Image from "next/image";
import { Calendar, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  description: string;
  image: string;
  badge?: string;
}

const milestones: Milestone[] = [
  {
    year: "2003",
    description:
      "Started Manpower Service as a Recruitment Agent at Mumbai major Business Capital City of India.",
    image: "/images/assets/story_2003_mumbai.png",
    badge: "Foundation in Mumbai",
  },
  {
    year: "2006",
    description:
      "Developed new connections and a business venture at Cochin City gods own country Kerala.",
    image: "/images/assets/story_2006_cochin.png",
    badge: "Kerala Expansion",
  },
  {
    year: "2008",
    description:
      "Recruited qualified Welders and Fabricators Gdansk Shipyard Poland.",
    image: "/images/assets/story_2008_poland.png",
    badge: "European Debut",
  },
  {
    year: "2010",
    description:
      "Recruited Registered Staff Nurses to King Hamad University Hospital Bahrain as an associate recruitment agent.",
    image: "/images/assets/story_2010_bahrain.png",
    badge: "Healthcare Milestone",
  },
  {
    year: "2013",
    description:
      "5000 more candidates were recruited to different countries through us.",
    image: "/images/assets/story_2013_candidates.png",
    badge: "5000+ Placements",
  },
  {
    year: "2018",
    description:
      "Registered our company as a partnership firm in the name of Indian Manpower Resource.",
    image: "/images/assets/story_2018_partnership.png",
    badge: "IMR Formalization",
  },
  {
    year: "2020",
    description:
      "Recognized under Ministry of External Affairs Govt. of India as a Govt. approved Recruiting Agent.",
    image: "/images/assets/story_2020_approved.png",
    badge: "Govt. Approved Agent",
  },
  {
    year: "2023",
    description:
      "Ireland based Administration department started for easy accessible for European Employers.",
    image: "/images/assets/story_2023_ireland.png",
    badge: "European Office (Ireland)",
  },
  {
    year: "2024",
    description:
      "2024 STARTED UAE BASED REGISTERED OFFICE.",
    image: "/images/assets/story_2024_uae.png",
    badge: "Middle East Hub (UAE)",
  },
];

export default function OurStory() {
  return (
    <section id="story" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Brochure Page 4 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-imr-blue-primary text-xs font-mono tracking-wider uppercase">
            <span>2003 — 2024 Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-imr-navy">
            Our <span className="text-sky-600">Story</span>
          </h2>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Over two decades of sustained growth, trust, and global recruitment milestones connecting exceptional talent from India to leading organizations worldwide.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={item.image}
                    alt={`${item.year} - ${item.badge}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Year Tag on Image */}
                  <div className="absolute bottom-3 left-3 bg-imr-navy/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white font-semibold text-sm">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="inline-block text-[11px] font-medium text-imr-blue-primary bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <p className="text-sm text-slate-700 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Step indicator bar */}
              <div className="px-6 pb-4 pt-0">
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-imr-navy to-sky-500 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ width: `${((index + 1) / milestones.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
