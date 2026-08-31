"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: "01",
    digit: "1",
    title: "Identify the gap",
    description:
      "We start by mapping the distance between your current audience and your revenue, uncovering what's actually missing in between.",
  },
  {
    step: "02",
    digit: "2",
    title: "Build in the background",
    description:
      "I construct and run everything behind the scenes: the offer, the funnel, the launch, and the follow-up.",
  },
  {
    step: "03",
    digit: "3",
    title: "You collect the results",
    description:
      "You show up as the creator. I stay invisible. You get the revenue, the time, and the clean brand.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Exact scroll progress tracking matched to sticky top-20 (80px) pinning position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80px", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveStep(0);
      } else if (latest < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
  }, [scrollYProgress]);

  // Direct y percentage offsets for the 3 rolling digits
  const rollOffsets = ["0%", "-33.333%", "-66.666%"];
  const currentItem = steps[activeStep];

  return (
    <section id="process" className="relative bg-[#fbf7f4]">
      {/* ROW 1 — NORMAL FLOW CENTERED HEADER BLOCK */}
      <div className="relative z-10 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-3 font-sans">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64]">
            HOW WE WORK
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#1f2a33] leading-[1.10] mb-4 max-w-4xl mx-auto">
          Getting you results{" "}
          <span className="italic font-medium text-[#1f2a33]">
            without the complexity.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#455a64] leading-relaxed max-w-2xl mx-auto">
          Our three-step process takes you from identifying opportunities to launching systems, with clear communication and support at every stage.
        </p>
      </div>

      {/* ROW 2 — PINNED STICKY SECTION */}
      <div ref={containerRef} className="relative z-10 h-[300vh]">
        <div className="sticky top-20 sm:top-24 flex h-[75vh] min-h-[500px] w-full items-center justify-center overflow-hidden relative">
          
          {/* STATIC DUAL LAYERED SVG DOODLE LINES AT ENLARGED 3.5X SCALE */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden -translate-y-10 sm:-translate-y-16 lg:-translate-y-24">
            <svg
              viewBox="0 0 6000 680"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full min-w-full min-h-full scale-[2.4] sm:scale-[2.9] lg:scale-[3.5] origin-center"
            >
              <path
                d="M 266.813 0 C 69.979 399.076 179.274 526.363 486.263 603.62 C 793.252 680.877 193.717 233.573 155.057 603.62 C 116.397 973.667 836.552 940.009 503.173 983.738 C 169.794 1027.467 588.875 1760.187 111.673 1393.045 C -365.528 1025.903 868.694 1619.076 425.173 1846.885 C -18.348 2074.694 495.457 2268.192 212.173 2328.747 C -71.111 2389.301 806.443 1867.048 470.173 2451 C 133.903 3034.952 112.591 3053.182 288.673 3014.5 C 464.755 2975.818 789.478 3168.482 444.173 3469.102 C 98.868 3769.722 467.924 3891.534 567.173 3825.369 C 666.422 3759.204 258.499 3589.284 168.173 3942.457 C 77.848 4295.629 457.414 3896.327 567.173 4025.519 C 676.933 4154.711 467.466 4413.512 285.673 4327.746 C 103.88 4241.979 546.582 4385.053 339.423 4843.132 C 132.265 5301.212 405.515 5167.326 425.173 5072.805 C 444.831 4978.283 66.831 5142.487 198.173 5338.504 C 329.515 5534.52 864.701 5541.779 486.173 5370 C 107.645 5198.221 -173.336 5577.671 204.673 5715.5 C 582.682 5853.329 339.423 6000 339.423 6000"
                transform="translate(2725.687 -2660) rotate(90 300 3000)"
                fill="none"
                stroke="#b7c6d1"
                strokeWidth="1.0"
                opacity="0.50"
              />
              <path
                d="M 258.784 0 C 172.776 235.538 179.274 526.363 486.263 603.62 C 793.252 680.877 193.717 233.573 155.057 603.62 C 116.397 973.667 836.552 940.009 503.173 983.738 C 169.794 1027.467 588.875 1760.187 111.673 1393.045 C -365.528 1025.903 868.694 1619.076 425.173 1846.885 C -18.348 2074.694 495.457 2268.192 212.173 2328.747 C -71.111 2389.301 806.443 1867.048 470.173 2451 C 133.903 3034.952 112.591 3053.182 288.673 3014.5 C 464.755 2975.818 789.478 3168.482 444.173 3469.102 C 98.868 3769.722 467.924 3891.534 567.173 3825.369 C 666.422 3759.204 258.499 3589.284 168.173 3942.457 C 77.848 4295.629 457.414 3896.327 567.173 4025.519 C 676.933 4154.711 467.466 4413.512 285.673 4327.746 C 103.88 4241.979 546.582 4385.053 339.423 4843.132 C 132.265 5301.212 405.515 5167.326 425.173 5072.805 C 444.831 4978.283 66.831 5142.487 198.173 5338.504 C 329.515 5534.52 864.701 5541.779 486.173 5370 C 107.645 5198.221 -173.336 5577.671 204.673 5715.5 C 582.682 5853.329 339.423 6000 339.423 6000"
                transform="translate(2689.827 -2660) rotate(90 309.75 3000)"
                fill="none"
                stroke="#455a64"
                strokeWidth="1.2"
                opacity="0.35"
              />
            </svg>
          </div>

          {/* STEP CONTENT GRID */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* LEFT COLUMN — STEP TITLE & DESCRIPTION WITH MOBILE-ONLY TOP-RIGHT NUMBER */}
              <div className="md:col-span-6 lg:col-span-5 relative min-h-[280px] flex items-center">
                
                {/* MOBILE-ONLY GIANT NUMBER ALIGNED AT TOP RIGHT CORNER (#dfe6ec COLOR) */}
                <div className="md:hidden absolute -top-16 -right-4 sm:-right-8 pointer-events-none z-0 select-none overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif font-light text-[220px] sm:text-[280px] leading-none text-[#dfe6ec] tracking-tighter block"
                    >
                      {currentItem.step}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -35 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-center w-full relative z-10 pr-24 md:pr-0"
                  >
                    <div className="mb-4">
                      <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#455a64]">
                        STEP {currentItem.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#1f2a33] leading-[1.08] mb-6">
                      {currentItem.title}
                    </h3>
                    <p className="font-sans text-base sm:text-lg text-[#455a64] leading-relaxed max-w-lg">
                      {currentItem.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT COLUMN — DESKTOP ONLY: STATIC '0' + ROLLING DIGIT IN PERFECT LOCKSTEP */}
              <div className="hidden md:flex md:col-span-6 lg:col-span-7 justify-end items-center select-none overflow-hidden py-4">
                <div className="inline-flex items-center font-serif font-light text-[180px] sm:text-[260px] md:text-[320px] lg:text-[380px] leading-none text-[#1f2a33]/85 tracking-tighter">
                  {/* Static prefix digit '0' */}
                  <span className="py-2 inline-block">0</span>

                  {/* Vertical Rolling Slot Window */}
                  <div className="h-[1.18em] overflow-hidden relative inline-block">
                    <motion.div
                      animate={{ y: rollOffsets[activeStep] }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col"
                    >
                      <span className="h-[1.18em] flex items-center justify-center px-1">1</span>
                      <span className="h-[1.18em] flex items-center justify-center px-1">2</span>
                      <span className="h-[1.18em] flex items-center justify-center px-1">3</span>
                    </motion.div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
