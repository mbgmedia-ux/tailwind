"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Lock body scroll when mobile sidebar menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
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

          {/* DESKTOP NAVIGATION LINKS */}
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

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-[#f2e6e6] text-[#1f2a33] hover:bg-[#e8d8d8] px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-xs inline-flex items-center justify-center font-sans"
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE HAMBURGER ICON BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg text-[#fbf7f4] hover:bg-[#455a64]/40 transition-colors focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE RIGHT SIDEBAR MENU & BACKDROP */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 pointer-events-auto"
            />

            {/* RIGHT SIDEBAR PANEL */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#1f2a33] text-[#fbf7f4] z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-[#455a64]/40 pointer-events-auto font-sans"
            >
              <div>
                {/* SIDEBAR HEADER ROW WITH LOGO AND CLOSE BUTTON */}
                <div className="flex items-center justify-between pb-6 border-b border-[#455a64]/40">
                  <img
                    src="/tailwind-header-logo.svg"
                    alt="Tailwind Digital Logo"
                    className="h-7 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#b7c6d1] hover:text-[#fbf7f4] hover:bg-[#455a64]/40 transition-colors"
                    aria-label="Close Mobile Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* SIDEBAR NAVIGATION LINKS */}
                <nav className="mt-8 flex flex-col space-y-6 text-base font-medium text-[#b7c6d1]">
                  <Link
                    href="#capabilities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#fbf7f4] transition-colors py-1"
                  >
                    Capabilities
                  </Link>
                  <Link
                    href="#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#fbf7f4] transition-colors py-1"
                  >
                    Process
                  </Link>
                  <Link
                    href="#audience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#fbf7f4] transition-colors py-1"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/privacy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#fbf7f4] transition-colors py-1 text-sm text-[#a89c93]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#fbf7f4] transition-colors py-1 text-sm text-[#a89c93]"
                  >
                    Terms of Service
                  </Link>
                </nav>
              </div>

              {/* BOTTOM SECTION: GET IN TOUCH ABOVE DIVIDER, SOCIAL ICONS BELOW DIVIDER */}
              <div>
                {/* GET IN TOUCH BUTTON ABOVE DIVIDER */}
                <div className="mb-6">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-[#f2e6e6] text-[#1f2a33] hover:bg-[#e8d8d8] w-full py-3.5 rounded-xl text-base font-medium transition-colors shadow-sm inline-flex items-center justify-center font-sans"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* DIVIDER & SOCIAL ICONS BELOW DIVIDER */}
                <div className="pt-6 border-t border-[#455a64]/40 flex items-center justify-center space-x-6 text-[#b7c6d1]">
                  {/* FACEBOOK SVG ICON */}
                  <div
                    className="p-2.5 rounded-full bg-[#455a64]/20 hover:bg-[#455a64]/40 hover:text-[#fbf7f4] transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>

                  {/* INSTAGRAM SVG ICON */}
                  <div
                    className="p-2.5 rounded-full bg-[#455a64]/20 hover:bg-[#455a64]/40 hover:text-[#fbf7f4] transition-colors cursor-pointer"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
