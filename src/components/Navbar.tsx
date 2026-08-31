"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near top of page
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else {
        // Scrolling up -> reveal header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
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

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#b7c6d1]">
          <Link href="#capabilities" className="hover:text-[#fbf7f4] transition-colors">
            Capabilities
          </Link>
          <Link href="#process" className="hover:text-[#fbf7f4] transition-colors">
            Process
          </Link>
          <Link href="#audience" className="hover:text-[#fbf7f4] transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-[#fbf7f4] transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div>
          <Link
            href="#contact"
            className="bg-[#f2e6e6] text-[#1f2a33] hover:bg-[#e8d8d8] px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-xs inline-flex items-center justify-center font-sans"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
