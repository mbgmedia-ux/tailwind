"use client";

import {
  Target,
  Rocket,
  CoinStack,
  Dashboard,
  Book,
  Box,
} from "@duo-icons/react";

const capabilitiesData = [
  {
    eyebrow: "OFFER ARCHITECTURE",
    title: "High-Converting Offer Architecture",
    description:
      "Structure irresistible, high-margin offers engineered specifically for your audience.",
    icon: Target,
  },
  {
    eyebrow: "LAUNCH EXECUTION",
    title: "0-to-Launch Execution",
    description:
      "End-to-end launch strategy, copy, technical build, and coordination behind the scenes.",
    icon: Rocket,
  },
  {
    eyebrow: "CONVERSIONS",
    title: "Automated Conversions",
    description:
      "Design and build automated funnels that convert attention into sales 24/7.",
    icon: CoinStack,
  },
  {
    eyebrow: "ENTERPRISE VALUE",
    title: "Long-Term Enterprise Value",
    description:
      "Build sustainable recurring revenue models that increase the equity value of your brand.",
    icon: Dashboard,
  },
  {
    eyebrow: "MONETISATION",
    title: "Knowledge Monetisation",
    description:
      "Package your unique expertise and authority into scalable digital courses and products.",
    icon: Book,
  },
  {
    eyebrow: "ECOSYSTEMS",
    title: "Custom Digital Ecosystems",
    description:
      "Bespoke membership portals, digital assets, and automated infrastructure tailored to your business.",
    icon: Box,
  },
];

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

        {/* 2 ROWS x 3 COLUMNS BENTO GRID WITH DUOTONE ICONS IN #a85757 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilitiesData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#fbf7f4] rounded-2xl p-8 flex flex-col justify-between group font-sans border-0 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#f6eeee] text-[#a85757] flex items-center justify-center border-0 group-hover:bg-[#1f2a33] group-hover:text-[#fbf7f4] transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.20em] text-[#455a64]">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1f2a33] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#455a64] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
