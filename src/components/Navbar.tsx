"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed top-4 left-0 right-0 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      <div className="bg-[#1f2a33] text-[#fbf7f4] rounded-2xl border border-[#455a64]/50 shadow-2xl px-6 py-3.5 flex items-center justify-between backdrop-blur-md pointer-events-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/tailwind-header-logo.svg"
            alt="Tailwind Digital Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION LINKS (CONTACT REMOVED AS REQUESTED) */}
        <nav className="hidden md:flex items-center space-x-14 lg:space-x-16 text-sm font-medium text-[#b7c6d1]">
          <Link href="#capabilities" className="hover:text-[#fbf7f4] transition-colors">
            Capabilities
          </Link>
          <Link href="#process" className="hover:text-[#fbf7f4] transition-colors">
            Process
          </Link>
          <Link href="#audience" className="hover:text-[#fbf7f4] transition-colors">
            Testimonials
          </Link>
        </nav>

        {/* CTA BUTTON (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
        <div className="hidden sm:block">
          <Link
            href="#contact"
            className="bg-[#f2e6e6] text-[#1f2a33] hover:bg-[#e8d8d8] px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-xs inline-flex items-center justify-center font-sans"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
