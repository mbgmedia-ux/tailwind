import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 bg-[#fbf7f4] text-[#455a64] font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif font-semibold text-base text-[#1f2a33]">
            Tailwind <span className="text-[#455a64] font-normal font-sans">Digital</span>
          </span>
          <p className="text-xs text-[#a89c93] mt-1 font-sans">
            Growth Marketing for Creators
          </p>
        </div>

        <nav className="flex items-center space-x-6 text-xs font-medium text-[#455a64]">
          <Link href="#capabilities" className="hover:text-[#1f2a33] transition-colors">
            Capabilities
          </Link>
          <Link href="#process" className="hover:text-[#1f2a33] transition-colors">
            Process
          </Link>
          <Link href="#audience" className="hover:text-[#1f2a33] transition-colors">
            Audience
          </Link>
          <Link href="#contact" className="hover:text-[#1f2a33] transition-colors">
            Contact
          </Link>
        </nav>

        <p className="text-xs text-[#a89c93]">
          © {new Date().getFullYear()} Tailwind Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
