import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#455a64]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        {/* CONTENT SECTIONS */}
        <article className="prose prose-slate max-w-none space-y-8 font-sans text-base leading-relaxed text-[#455a64]">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">1. Introduction</h2>
            <p>
              Welcome to Tailwind Digital ("we," "our," or "us"). We are committed to protecting your personal privacy and respecting the data of the creators, partners, and audience members who interact with our services and website.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our growth marketing and digital architecture services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#455a64]">
              <li><strong>Personal Identifiers:</strong> Name, email address, social media handles (e.g., Instagram), and contact information provided through contact forms.</li>
              <li><strong>Business & Creator Information:</strong> Details regarding your audience size, product offer, revenue targets, and marketing strategy.</li>
              <li><strong>Technical Data:</strong> Browser type, IP address, operating system, and website usage statistics collected automatically via analytics tools.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">3. How We Use Your Information</h2>
            <p>
              We use the collected information for specific, legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#455a64]">
              <li>To evaluate partnership suitability and respond to inquiries submitted via the "Get in Touch" form.</li>
              <li>To construct, deploy, and manage bespoke marketing funnels and digital product launches.</li>
              <li>To maintain website performance, security, and user experience.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">4. Data Confidentiality & Protection</h2>
            <p>
              We prioritize stealth and confidentiality for all creator partnerships. We do not sell, rent, or trade your personal or business data to third parties. Information is strictly shared with trusted service providers (e.g., hosting, payment processors, email delivery tools) solely to fulfill operational requirements under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">5. Your Data Rights</h2>
            <p>
              Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal information held by Tailwind Digital. To exercise any of these rights, please contact us through our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1f2a33]">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please submit an inquiry via our contact section or reach out directly at <Link href="/#contact" className="underline text-[#1f2a33] font-medium">our contact page</Link>.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
