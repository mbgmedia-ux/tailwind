import Link from "next/link";

export const metadata = {
  title: "Design System Preview: Lovable (Tailwind Digital) — DESIGN.md",
  description: "Complete live visual preview of the Tailwind Digital DESIGN.md system.",
};

const primarySwatches = [
  { name: "Parchment", hex: "#fbf7f4", role: "Page background canvas", bg: "#fbf7f4", darkText: false },
  { name: "Jet Black", hex: "#1f2a33", role: "Primary text, headings", bg: "#1f2a33", darkText: true },
  { name: "Blue Slate", hex: "#455a64", role: "Secondary text, borders", bg: "#455a64", darkText: true },
  { name: "Pale Slate", hex: "#b7c6d1", role: "Card borders, dividers", bg: "#b7c6d1", darkText: false },
  { name: "Sunlit Clay", hex: "#d4a667", role: "Brand accent, badges", bg: "#d4a667", darkText: false },
  { name: "Lavender Blush", hex: "#f2e6e6", role: "Subtle tag backgrounds, hover states", bg: "#f2e6e6", darkText: false },
  { name: "Taupe", hex: "#a89c93", role: "Captions, muted text", bg: "#a89c93", darkText: false },
];

const colorScales = [
  {
    name: "Jet Black",
    base: "#1f2a33",
    role: "Primary text, headings, dark CTA button background",
    shades: [
      { shade: "50", hex: "#eff3f5" },
      { shade: "100", hex: "#dfe6ec" },
      { shade: "200", hex: "#c0cdd8" },
      { shade: "300", hex: "#a0b4c5" },
      { shade: "400", hex: "#819bb1" },
      { shade: "500", hex: "#61839e" },
      { shade: "600", hex: "#4e687e" },
      { shade: "700", hex: "#3a4e5f" },
      { shade: "800", hex: "#27343f" },
      { shade: "900", hex: "#131a20" },
      { shade: "950", hex: "#0e1216" },
    ]
  },
  {
    name: "Blue Slate",
    base: "#455a64",
    role: "Secondary text, interactive borders",
    shades: [
      { shade: "50", hex: "#f0f3f5" },
      { shade: "100", hex: "#e1e7ea" },
      { shade: "200", hex: "#c3cfd5" },
      { shade: "300", hex: "#a5b8c0" },
      { shade: "400", hex: "#87a0ab" },
      { shade: "500", hex: "#698896" },
      { shade: "600", hex: "#546d78" },
      { shade: "700", hex: "#3f525a" },
      { shade: "800", hex: "#2a363c" },
      { shade: "900", hex: "#151b1e" },
      { shade: "950", hex: "#0f1315" },
    ]
  },
  {
    name: "Pale Slate",
    base: "#b7c6d1",
    role: "Subtle card borders, dividers, chip outlines",
    shades: [
      { shade: "50", hex: "#eff3f5" },
      { shade: "100", hex: "#e0e6eb" },
      { shade: "200", hex: "#c1ced7" },
      { shade: "300", hex: "#a2b5c3" },
      { shade: "400", hex: "#839daf" },
      { shade: "500", hex: "#63849c" },
      { shade: "600", hex: "#506a7c" },
      { shade: "700", hex: "#3c4f5d" },
      { shade: "800", hex: "#28353e" },
      { shade: "900", hex: "#141a1f" },
      { shade: "950", hex: "#0e1316" },
    ]
  },
  {
    name: "Sunlit Clay",
    base: "#d4a667",
    role: "Brand accent, badges, star icons, page background canvas & card surfaces",
    shades: [
      { shade: "50", hex: "#f9f3eb" },
      { shade: "100", hex: "#f4e8d7" },
      { shade: "200", hex: "#e9d1af" },
      { shade: "300", hex: "#ddba88" },
      { shade: "400", hex: "#d2a360" },
      { shade: "500", hex: "#c78b38" },
      { shade: "600", hex: "#9f702d" },
      { shade: "700", hex: "#775422" },
      { shade: "800", hex: "#503816" },
      { shade: "900", hex: "#281c0b" },
      { shade: "950", hex: "#1c1408" },
    ]
  },
  {
    name: "Lavender Blush",
    base: "#f2e6e6",
    role: "Subtle tag backgrounds, soft hover states",
    shades: [
      { shade: "50", hex: "#f6eeee" },
      { shade: "100", hex: "#eedddd" },
      { shade: "200", hex: "#dcbcbc" },
      { shade: "300", hex: "#cb9a9a" },
      { shade: "400", hex: "#ba7878" },
      { shade: "500", hex: "#a85757" },
      { shade: "600", hex: "#874545" },
      { shade: "700", hex: "#653434" },
      { shade: "800", hex: "#432323" },
      { shade: "900", hex: "#221111" },
      { shade: "950", hex: "#180c0c" },
    ]
  },
  {
    name: "Taupe",
    base: "#a89c93",
    role: "Captions, muted text, secondary metadata",
    shades: [
      { shade: "50", hex: "#f4f2f1" },
      { shade: "100", hex: "#e8e5e3" },
      { shade: "200", hex: "#d2cbc6" },
      { shade: "300", hex: "#bbb1aa" },
      { shade: "400", hex: "#a4988e" },
      { shade: "500", hex: "#8e7e71" },
      { shade: "600", hex: "#71655b" },
      { shade: "700", hex: "#554b44" },
      { shade: "800", hex: "#39322d" },
      { shade: "900", hex: "#1c1917" },
      { shade: "950", hex: "#141210" },
    ]
  },
];

export default function DesignSystemPreviewPage() {
  return (
    <div className="min-h-screen bg-[#fbf7f4] text-[#1f2a33] font-sans antialiased pb-16">
      {/* Floating Jet Black NAV */}
      <nav className="sticky top-4 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bg-[#1f2a33] text-[#fbf7f4] rounded-2xl border border-[#455a64]/50 shadow-2xl px-6 py-3.5 flex items-center justify-between backdrop-blur-md">
          <a className="flex items-center space-x-2" href="/">
            <img
              src="/tailwind-header-logo.svg"
              alt="Tailwind Digital Logo"
              className="h-7 w-auto object-contain"
            />
          </a>
          <ul className="hidden md:flex gap-6 list-none text-sm font-medium text-[#b7c6d1]">
            <li><a href="#colors" className="hover:text-[#fbf7f4] transition-colors">Colors</a></li>
            <li><a href="#typography" className="hover:text-[#fbf7f4] transition-colors">Typography</a></li>
            <li><a href="#buttons" className="hover:text-[#fbf7f4] transition-colors">Buttons</a></li>
            <li><a href="#cards" className="hover:text-[#fbf7f4] transition-colors">Cards</a></li>
            <li><a href="#forms" className="hover:text-[#fbf7f4] transition-colors">Forms</a></li>
            <li><a href="#spacing" className="hover:text-[#fbf7f4] transition-colors">Spacing</a></li>
            <li><a href="#radius" className="hover:text-[#fbf7f4] transition-colors">Radius</a></li>
            <li><a href="#elevation" className="hover:text-[#fbf7f4] transition-colors">Elevation</a></li>
          </ul>
          <a className="bg-[#fbf7f4] text-[#1f2a33] hover:bg-[#e0e6eb] px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-xs" href="/">
            Start Building
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-4 sm:px-8 pt-20 pb-20 text-center max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.10] tracking-tight text-[#1f2a33] mb-4">
          The digital engine<br />
          <span className="italic font-medium text-[#1f2a33]">behind your influence</span>
        </h1>
        <p className="font-sans text-lg font-normal leading-[1.38] text-[#455a64] max-w-[560px] mx-auto mb-8">
          A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.
        </p>
        <div className="flex flex-wrap justify-center gap-3 font-sans">
          <a className="btn-primary-dark inline-block px-5 py-2.5 text-sm font-medium" href="#">
            Start Building
          </a>
          <a className="btn-ghost inline-block px-5 py-2.5 text-sm font-medium" href="#">
            View Documentation
          </a>
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 01 / COLORS */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="colors">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          01 / Colors
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Color Palette &amp; 50–950 Shade Scales
        </h2>

        {/* Primary Color Swatches */}
        <div className="text-sm font-semibold text-[#455a64] mb-3 font-sans">Official 7-Color Palette Swatches</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 mb-10 font-sans">
          {primarySwatches.map((sw, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-[#b7c6d1] bg-[#fbf7f4]">
              <div
                className="h-18 w-full border-b border-[#b7c6d1]"
                style={{ backgroundColor: sw.bg }}
              />
              <div className="p-3">
                <div className="text-xs font-semibold text-[#1f2a33] font-serif">{sw.name}</div>
                <div className="text-xs text-[#a89c93] font-mono">{sw.hex}</div>
                <div className="text-[11px] text-[#455a64] mt-1 leading-tight">{sw.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 50-950 Tailwind Shade Scales */}
        <div className="space-y-8 font-sans">
          <div className="text-sm font-semibold text-[#455a64]">Complete 50–950 Color Ladders</div>
          {colorScales.map((c, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1f2a33] font-serif text-sm">{c.name} ({c.base})</span>
                <span className="text-[#a89c93]">{c.role}</span>
              </div>
              <div className="grid grid-cols-11 gap-1 rounded-lg overflow-hidden border border-[#b7c6d1] p-1 bg-white">
                {c.shades.map((s, si) => (
                  <div key={si} className="text-center">
                    <div
                      className="h-10 w-full rounded-md border border-black/5"
                      style={{ backgroundColor: s.hex }}
                    />
                    <span className="text-[10px] font-mono block mt-1 text-[#1f2a33] font-semibold">{s.shade}</span>
                    <span className="text-[9px] font-mono text-[#a89c93] block">{s.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 02 / TYPOGRAPHY */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="typography">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          02 / Typography
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Typography Scale (Playfair Display + Poppins)
        </h2>

        <div className="space-y-8">
          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.10] tracking-tight text-[#1f2a33]">
              The digital engine <span className="italic font-medium text-[#1f2a33]">behind your influence</span>
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Hero Display Heading — text-5xl sm:text-6xl md:text-7xl lg:text-8xl (6rem / 96px) / 500 Medium + Italic / Playfair Display
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-serif text-3xl sm:text-[48px] font-semibold leading-[1.05] tracking-[-0.5px] text-[#1f2a33]">
              Section Heading
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Section Heading — 48px / 600 / 1.05 / -0.5px / Playfair Display
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-serif text-2xl sm:text-[36px] font-semibold leading-[1.10] text-[#455a64]">
              Sub-heading
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Sub-heading — 36px / 600 / 1.10 / Playfair Display
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-serif text-[20px] font-semibold leading-[1.25] text-[#1f2a33]">
              Card Title
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Card Title — 20px / 600 / 1.25 / Playfair Display
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-sans text-[18px] font-normal leading-[1.40] text-[#455a64]">
              Body Large — Build something lovable. Create web applications with AI-powered development tools.
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Body Large — 18px / 400 / 1.40 / Poppins
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-sans text-[16px] font-normal leading-[1.50] text-[#455a64]">
              Body — Standard reading text for descriptions, paragraphs, and UI content.
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Body — 16px / 400 / 1.50 / Poppins
            </div>
          </div>

          <div className="pb-6 border-b border-[#b7c6d1]">
            <div className="font-sans text-[14px] font-medium leading-[1.50] text-[#1f2a33]">
              Button / Link — Interactive text
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Button / Link — 14px / 500 / 1.50 / Poppins
            </div>
          </div>

          <div>
            <div className="font-sans text-[14px] font-normal leading-[1.50] text-[#a89c93]">
              Caption — Metadata and small labels
            </div>
            <div className="text-xs font-mono text-[#a89c93] mt-2">
              Caption — 14px / 400 / 1.50 / Poppins
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 03 / BUTTONS */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="buttons">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          03 / Buttons
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Button Variants
        </h2>

        <div className="flex flex-wrap items-center gap-6 font-sans">
          <div className="text-center">
            <button className="btn-primary-dark px-5 py-2.5 text-sm font-medium">
              Start Building
            </button>
            <div className="text-xs font-medium text-[#455a64] mt-2">Primary Dark</div>
          </div>

          <div className="text-center">
            <button className="btn-ghost px-5 py-2.5 text-sm font-medium">
              Documentation
            </button>
            <div className="text-xs font-medium text-[#455a64] mt-2">Ghost / Outline</div>
          </div>

          <div className="text-center">
            <button className="bg-[#fbf7f4] text-[#1f2a33] px-5 py-2.5 rounded-[6px] text-sm font-medium border border-[#b7c6d1] hover:bg-[#e0e6eb] transition-colors">
              Settings
            </button>
            <div className="text-xs font-medium text-[#455a64] mt-2">Cream Surface</div>
          </div>

          <div className="text-center">
            <button className="w-10 h-10 rounded-full bg-[#e0e6eb] text-[#1f2a33] text-sm flex items-center justify-center border-0 font-semibold hover:opacity-80 transition-opacity">
              +
            </button>
            <div className="text-xs font-medium text-[#455a64] mt-2">Pill Icon</div>
          </div>
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 04 / CARDS */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="cards">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          04 / Cards
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Card Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#fbf7f4] rounded-xl p-6 border border-[#b7c6d1] hover:border-[#455a64] transition-colors">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#e0e6eb] text-[#1f2a33] mb-3 font-sans border-0">
              Template
            </span>
            <h3 className="font-serif text-[20px] font-semibold tracking-[-0.3px] mb-2 text-[#1f2a33]">
              Portfolio Website
            </h3>
            <p className="text-sm text-[#455a64] leading-[1.50] font-sans">
              A minimal portfolio template with project showcase, about section, and contact form. Built with modern design principles.
            </p>
          </div>

          <div className="bg-[#fbf7f4] rounded-xl p-6 border border-[#455a64] shadow-xs">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#e0e6eb] text-[#1f2a33] mb-3 font-sans border-0">
              Featured
            </span>
            <h3 className="font-serif text-[20px] font-semibold tracking-[-0.3px] mb-2 text-[#1f2a33]">
              AI Chat Application
            </h3>
            <p className="text-sm text-[#455a64] leading-[1.50] font-sans">
              Full-stack AI chat interface with streaming responses, conversation history, and customizable prompts. Hover-state border shown.
            </p>
          </div>

          <div className="bg-[#fbf7f4] rounded-xl p-6 border border-[#b7c6d1] hover:border-[#455a64] transition-colors">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#e0e6eb] text-[#1f2a33] mb-3 font-sans border-0">
              Starter
            </span>
            <h3 className="font-serif text-[20px] font-semibold tracking-[-0.3px] mb-2 text-[#1f2a33]">
              SaaS Dashboard
            </h3>
            <p className="text-sm text-[#455a64] leading-[1.50] font-sans">
              Analytics dashboard with charts, data tables, and user management. Integrates with common APIs and databases.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 05 / FORMS */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="forms">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          05 / Forms
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Form Elements
        </h2>

        <div className="max-w-[400px] space-y-5 font-sans">
          <div>
            <label className="block text-sm font-medium text-[#1f2a33] mb-1.5">
              Project Name
            </label>
            <input
              type="text"
              defaultValue="my-lovable-app"
              className="w-full bg-[#fbf7f4] text-[#1f2a33] border border-[#b7c6d1] px-3 py-2.5 rounded-[6px] text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50"
            />
            <div className="text-[11px] text-[#a89c93] mt-1 font-mono">Default (border)</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f2a33] mb-1.5">
              Repository
            </label>
            <input
              type="text"
              defaultValue="lovable/my-project"
              className="w-full bg-[#fbf7f4] text-[#1f2a33] border-transparent ring-2 ring-blue-500/50 px-3 py-2.5 rounded-[6px] text-sm outline-none"
            />
            <div className="text-[11px] text-[#a89c93] mt-1 font-mono">Focus (blue ring)</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f2a33] mb-1.5">
              Domain
            </label>
            <input
              type="text"
              defaultValue="invalid domain"
              className="w-full bg-[#fbf7f4] text-[#1f2a33] border-transparent ring-2 ring-red-500 px-3 py-2.5 rounded-[6px] text-sm outline-none"
            />
            <div className="text-[11px] text-[#a89c93] mt-1 font-mono">Error (red ring)</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1f2a33] mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe your project..."
              className="w-full bg-[#fbf7f4] text-[#1f2a33] border border-[#b7c6d1] px-3 py-2.5 rounded-[6px] text-sm outline-none focus:ring-2 focus:ring-blue-500/50 resize-y"
            />
          </div>
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 06 / SPACING */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="spacing">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          06 / Spacing
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Spacing Scale
        </h2>

        <div className="flex items-end gap-2.5 flex-wrap">
          {[8, 10, 12, 16, 24, 32, 40, 56, 80].map((v) => (
            <div key={v} className="text-center">
              <div
                className="bg-[#1f2a33] rounded-[3px] mb-1.5 h-7"
                style={{ width: `${v}px` }}
              />
              <div className="font-mono text-[11px] font-medium text-[#455a64]">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 07 / RADIUS */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="radius">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          07 / Radius
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Border Radius Scale
        </h2>

        <div className="flex items-center gap-3.5 flex-wrap">
          {[
            { r: "4px", name: "Small" },
            { r: "6px", name: "Buttons" },
            { r: "8px", name: "Compact" },
            { r: "12px", name: "Cards" },
            { r: "16px", name: "Containers" },
            { r: "9999px", name: "Pills" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div
                className="w-16 h-16 bg-[#1f2a33] mb-1.5"
                style={{ borderRadius: item.r }}
              />
              <div className="font-mono text-[11px] font-medium text-[#455a64]">{item.r}</div>
              <div className="text-[10px] text-[#a89c93]">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#b7c6d1] my-0" />

      {/* 08 / ELEVATION */}
      <section className="px-4 sm:px-8 py-16 max-w-[1200px] mx-auto" id="elevation">
        <div className="text-xs font-medium text-[#455a64] uppercase tracking-[0.5px] mb-2 font-sans">
          08 / Elevation
        </div>
        <h2 className="font-serif text-3xl sm:text-[36px] font-semibold leading-[1.10] tracking-[-0.5px] mb-8 text-[#1f2a33]">
          Elevation &amp; Depth
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 font-sans">
          <div className="bg-[#fbf7f4] rounded-xl p-5 text-center border border-[#b7c6d1]">
            <div className="text-sm font-semibold mb-1 text-[#1f2a33]">Level 0: Flat</div>
            <div className="font-mono text-[11px] text-[#455a64]">No shadow, parchment bg</div>
          </div>

          <div className="bg-[#fbf7f4] rounded-xl p-5 text-center border border-[#b7c6d1]">
            <div className="text-sm font-semibold mb-1 text-[#1f2a33]">Level 1: Bordered</div>
            <div className="font-mono text-[11px] text-[#455a64]">1px solid #b7c6d1</div>
          </div>

          <div className="bg-[#1f2a33] rounded-xl p-5 text-center shadow-[rgba(255,255,255,0.2)_0px_0.5px_0px_0px_inset,rgba(0,0,0,0.2)_0px_0px_0px_0.5px_inset,rgba(0,0,0,0.05)_0px_1px_2px_0px]">
            <div className="text-sm font-semibold mb-1 text-[#fbf7f4]">Level 2: Inset</div>
            <div className="font-mono text-[11px] text-[rgba(251,247,244,0.6)]">Button inset shadow</div>
          </div>

          <div className="bg-[#fbf7f4] rounded-xl p-5 text-center border border-[#b7c6d1] shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
            <div className="text-sm font-semibold mb-1 text-[#1f2a33]">Level 3: Focus</div>
            <div className="font-mono text-[11px] text-[#455a64]">Focus shadow glow</div>
          </div>

          <div className="bg-[#fbf7f4] rounded-xl p-5 text-center ring-2 ring-blue-500/50">
            <div className="text-sm font-semibold mb-1 text-[#1f2a33]">Ring</div>
            <div className="font-mono text-[11px] text-[#455a64]">Accessibility ring</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-8 border-t border-[#b7c6d1] text-center text-xs text-[#a89c93] font-sans">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Built with <span className="font-semibold text-[#1f2a33]">Tailwind Digital</span> DESIGN.md Specification
          </div>
          <div>
            <a className="text-[#1f2a33] underline hover:text-[#d4a667]" href="#">
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
