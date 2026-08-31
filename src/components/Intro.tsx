"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraphText =
  "I partner with ambitious creators to build silent revenue engines, transforming attention into high-margin digital products and automated funnels without taking center stage.";

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(progress, range, ["#b7c6d1", "#1f2a33"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
}

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const words = paragraphText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-24 md:py-36 bg-[#fbf7f4] flex items-center justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-medium tracking-tight leading-[1.25] flex flex-wrap justify-center gap-x-[0.28em] gap-y-1.5">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  word={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
