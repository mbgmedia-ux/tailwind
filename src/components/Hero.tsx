"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-24 sm:pt-16 pb-12 sm:pb-0 overflow-hidden bg-[#f9f3eb]">
      {/* DESKTOP BACKGROUND IMAGE (SCALES UP 1ST FROM 0.15 TO 1.0, HIDDEN ON MOBILE) */}
      <motion.div
        initial={{ scale: 0.15, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0 }}
        className="hidden sm:block absolute inset-0 bg-cover bg-[right_center] bg-no-repeat pointer-events-none origin-center"
        style={{ backgroundImage: "url('/images/tailwind-hero.webp')" }}
      />

      {/* DESKTOP SPLIT GRADIENT OVERLAY */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#f9f3eb] via-[#f9f3eb]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-4 my-auto relative z-10">
        <div className="flex flex-col sm:block items-center justify-between">
          
          {/* TOP SECTION (CONTENT BLOCK WITH ALL ANIMATION EFFECTS) */}
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0 sm:-ml-8 lg:-ml-14 w-full">
            
            {/* 1. MASK IN FROM THE TOP FOR "GROWTH MARKETING FOR CREATORS" */}
            <div className="overflow-hidden mb-6 sm:mb-8 font-sans">
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              >
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64] inline-block">
                  GROWTH MARKETING FOR CREATORS
                </span>
              </motion.div>
            </div>

            {/* 2. ANIMATED HEADING TEXT ONLY USING REACT BITS <BlurText /> */}
            <BlurText
              as="h1"
              text="The digital engine behind your influence"
              delay={120}
              animateBy="words"
              direction="bottom"
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#1f2a33] leading-[1.10]"
            />

            {/* 3. MASK IN FROM THE BOTTOM FOR INTRO PARAGRAPH */}
            <div className="overflow-hidden mt-6 sm:mt-8 max-w-2xl mx-auto sm:mx-0 font-sans">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
                className="text-base sm:text-lg md:text-[20px] text-[#455a64] font-normal leading-relaxed"
              >
                I help creators and personal brands launch products, build funnels, and monetise their audience — all without showing my face.
              </motion.p>
            </div>

            {/* 4. SLIDE IN UP FOR CTA BUTTONS */}
            <div className="overflow-hidden mt-8 sm:mt-10 font-sans">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
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

          {/* MOBILE ONLY BOTTOM SECTION (50/50 VIEW) — CARD CONTAINING tailwind-hero copy-MOBILE.webp IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1.0, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
            className="sm:hidden mt-10 w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-[#fbf7f4] border border-[#b7c6d1]/40 p-3 shadow-md"
          >
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden">
              <Image
                src="/images/tailwind-hero copy-MOBILE.webp"
                alt="Tailwind Digital Creator Mobile"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
