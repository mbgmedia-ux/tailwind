import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbf7f4] text-[#1f2a33] font-sans selection:bg-[#455a64] selection:text-[#fbf7f4]">
      <Navbar />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB / BACK LINK */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[#455a64] hover:text-[#1f2a33] transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>

        {/* HEADER */}
        <header className="mb-12 pb-8 border-b border-[#b7c6d1]/40">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1f2a33] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#455a64]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        {/* CONTENT SECTIONS */}
        <article className="prose prose-slate max-w-none space-y-8 font-sans text-base leading-relaxed text-[#455a64]">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the Tailwind Digital website and consulting services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to all of these Terms, you may not access the site or utilize our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">2. Services Overview</h2>
            <p>
              Tailwind Digital provides growth marketing, offer architecture, funnel build-outs, and digital product launch execution for creators and personal brands. All specific engagements, deliverables, revenue shares, or retainer structures are finalized under separate master service agreements (MSAs) or statements of work (SOWs) executed directly between Tailwind Digital and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise agreed upon in writing, all original content, branding assets, code, copy, and structural architectures provided on this website are the exclusive property of Tailwind Digital. Client deliverables produced under active engagement remain subject to the specific intellectual property assignment defined in the individual client contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">4. User Responsibilities & Conduct</h2>
            <p>
              When interacting with our website or submitting information through our inquiry forms, you agree:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#455a64]">
              <li>To provide accurate, current, and complete information.</li>
              <li>Not to engage in unauthorized scraping, reverse engineering, or data mining of our website architecture.</li>
              <li>Not to submit unlawful, fraudulent, or malicious content through our forms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">5. Limitation of Liability</h2>
            <p>
              In no event shall Tailwind Digital, its founder, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of this website or general information provided herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following any changes constitutes acceptance of those updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">7. Contact</h2>
            <p>
              For any legal questions regarding these Terms, please reach out via <Link href="/#contact" className="underline text-[#1f2a33] font-medium">our contact page</Link>.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
