"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center pt-16 bg-cover bg-[right_center] bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/tailwind-hero.webp')" }}
    >
      {/* 50/50 Split Gradient: Sunlit Clay 50 (#f9f3eb) from left transitioning to transparent on right with 60% gradient stop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f9f3eb] via-[#f9f3eb]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-4 my-auto relative z-10">
        <div className="max-w-3xl text-left -ml-4 sm:-ml-8 lg:-ml-14">
          
          {/* MASK IN FROM THE TOP FOR "GROWTH MARKETING FOR CREATORS" */}
          <div className="overflow-hidden mb-8 font-sans">
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64] inline-block">
                GROWTH MARKETING FOR CREATORS
              </span>
            </motion.div>
          </div>

          {/* ANIMATED HEADING TEXT ONLY USING REACT BITS <BlurText /> */}
          <BlurText
            as="h1"
            text="The digital engine behind your influence"
            delay={120}
            animateBy="words"
            direction="bottom"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#1f2a33] leading-[1.10]"
          />

          {/* MASK IN FROM THE BOTTOM FOR INTRO PARAGRAPH */}
          <div className="overflow-hidden mt-8 max-w-2xl font-sans">
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="text-lg sm:text-[20px] text-[#455a64] font-normal leading-relaxed"
            >
              I help creators and personal brands launch products, build funnels, and monetise their audience — all without showing my face.
            </motion.p>
          </div>

          {/* SLIDE IN UP FOR CTA BUTTONS */}
          <div className="overflow-hidden mt-10 font-sans">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <Link
                href="#contact"
                className="btn-primary-dark w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium shadow-md"
              >
                Work With Me &rarr;
              </Link>
              <Link
                href="#capabilities"
                className="border border-[#1f2a33] text-[#1f2a33] bg-transparent hover:bg-[#1f2a33] hover:text-[#fbf7f4] w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 shadow-xs font-sans"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
