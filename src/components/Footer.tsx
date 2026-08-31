import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 bg-[#fbf7f4] text-[#455a64] font-sans border-t border-[#b7c6d1]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          {/* JET BLACK TAILWIND LOGO FOR LIGHT FOOTER BACKGROUND */}
          <Link href="/" className="inline-block">
            <img
              src="/tailwind-footer-logo.svg"
              alt="Tailwind Digital Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-[#a89c93] mt-1.5 font-sans">
            Growth Marketing for Creators
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#455a64]">
          <Link href="#capabilities" className="hover:text-[#1f2a33] transition-colors">
            Capabilities
          </Link>
          <Link href="#process" className="hover:text-[#1f2a33] transition-colors">
            Process
          </Link>
          <Link href="#audience" className="hover:text-[#1f2a33] transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-[#1f2a33] transition-colors">
            Contact
          </Link>
          <span className="text-[#b7c6d1] hidden sm:inline">•</span>
          <Link href="/privacy" className="hover:text-[#1f2a33] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#1f2a33] transition-colors">
            Terms of Service
          </Link>
        </nav>

        <p className="text-xs text-[#a89c93]">
          © {new Date().getFullYear()} Tailwind Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
