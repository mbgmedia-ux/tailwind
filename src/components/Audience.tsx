import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We launched our first digital product and generated $42,000 in 7 days. The entire backend ran seamlessly while I stayed focused purely on content.",
    name: "Marcus Vance",
    details: "Tech & Software Creator · 120k Audience",
    initials: "MV",
  },
  {
    quote:
      "I used to spend 15 hours a week managing custom requests and DMs. The automated offer funnel took over 90% of our sales cycle overnight.",
    name: "Elena Rostova",
    details: "Fitness & Lifestyle Creator · 250k Audience",
    initials: "ER",
  },
  {
    quote:
      "The cleanest execution I have experienced. My audience trust remained 100% intact while our recurring membership revenue tripled in 90 days.",
    name: "Julian Thorne",
    details: "Business & Finance Creator · 480k Audience",
    initials: "JT",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative z-10 min-h-screen w-full flex items-center justify-center py-20 md:py-28 bg-[#fbf7f4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 my-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3 font-sans">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64]">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-[48px] font-medium tracking-tight text-[#1f2a33] mb-6 leading-[1.05]">
            Stories from <span className="italic font-medium text-[#1f2a33]">the background</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#455a64] leading-relaxed">
            Hear from creators who turned attention into predictable revenue without sacrificing their brand or privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-[#b7c6d1] bg-[#fbf7f4] flex flex-col justify-between hover:border-[#455a64] transition-all duration-200 shadow-xs hover:shadow-md group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center mb-6 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <Quote className="w-5 h-5 text-[#d4a667]" />
                </div>
                <p className="font-serif italic text-lg sm:text-[19px] text-[#1f2a33] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#b7c6d1]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f2a33] text-[#fbf7f4] font-serif font-semibold text-xs flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#1f2a33] text-base">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs font-medium text-[#a89c93]">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
