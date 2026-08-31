import {
  TrendingUp,
  Rocket,
  GitMerge,
  LineChart,
  GraduationCap,
  Package,
} from "lucide-react";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative min-h-screen w-full flex items-center justify-center py-20 md:py-24 overflow-hidden"
      style={{ backgroundColor: "oklch(93% 0.012 240)" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 my-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64] mb-3 inline-block font-sans">
            CAPABILITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-[48px] font-medium tracking-tight text-[#1f2a33] leading-[1.05]">
            What I do <span className="italic font-medium text-[#1f2a33]">for creators</span>
          </h2>
        </div>

        {/* 2 ROWS x 3 COLUMNS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ROW 1 — CARD 1: Audience Monetisation */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  REVENUE
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Audience Monetisation
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                Turn attention into revenue with offers your audience already wants to buy.
              </p>
            </div>
          </div>

          {/* ROW 1 — CARD 2: Product Launches */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  LAUNCH
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Product Launches
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                End-to-end launch strategy, copy, and coordination without the spotlight.
              </p>
            </div>
          </div>

          {/* ROW 1 — CARD 3: Funnel Build-Out */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <GitMerge className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  FUNNELS
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Funnel Build-Out
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                Design and build the full funnel that converts followers into customers.
              </p>
            </div>
          </div>

          {/* ROW 2 — CARD 4: Growth Strategy */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <LineChart className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  SCALING
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Growth Strategy
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                A clear plan to scale your reach, revenue, and long-term business value.
              </p>
            </div>
          </div>

          {/* ROW 2 — CARD 5: Digital Courses */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  COURSES
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Digital Courses
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                Package your expertise into a course that sells while you sleep.
              </p>
            </div>
          </div>

          {/* ROW 2 — CARD 6: Other Digital Products */}
          <div className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e0e6eb] text-[#1f2a33] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                  ASSETS
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                Other Digital Products
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                Templates, downloads, memberships, and anything else your audience needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
