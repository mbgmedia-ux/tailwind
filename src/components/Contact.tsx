"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send email. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Form Submission Error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen w-full flex items-center justify-center py-20 md:py-28"
      style={{ backgroundColor: "oklch(93% 0.012 240)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 my-auto w-full">
        {/* HEADER BLOCK */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="mb-4 font-sans">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#455a64]">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-[48px] font-medium tracking-tight text-[#1f2a33] mb-4 leading-[1.05]">
            Let's see if we're a fit
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#455a64] leading-relaxed">
            Tell me a little about yourself and I'll be in touch within 48 hours.
          </p>
        </div>

        {/* ASYMMETRIC GRID: SMALLER IMAGE (COL-SPAN-5), WIDER FORM (COL-SPAN-7), SAME STRETCHED HEIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* COLUMN 1 (SMALLER WIDTH ~40%): TAILWIND LOADER LOGO CARD */}
          <div className="md:col-span-5 bg-[#fbf7f4] p-8 sm:p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs">
            <img
              src="/tailwind-loader-logo.svg"
              alt="Tailwind Digital Logo"
              className="w-48 sm:w-56 h-auto object-contain"
            />
          </div>

          {/* COLUMN 2 (WIDER WIDTH ~60%): CONTACT FORM CARD */}
          <div className="md:col-span-7 bg-[#fbf7f4] p-8 sm:p-10 rounded-2xl font-sans w-full flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1f2a33] mb-2">
                  Message Received!
                </h3>
                <p className="text-base text-[#455a64]">
                  Thank you for reaching out. I'll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1f2a33] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#fbf7f4] text-[#1f2a33] border border-[#b7c6d1] px-4 py-3 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#455a64]/50 focus:border-[#455a64] placeholder-[#a89c93] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1f2a33] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#fbf7f4] text-[#1f2a33] border border-[#b7c6d1] px-4 py-3 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#455a64]/50 focus:border-[#455a64] placeholder-[#a89c93] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-[#1f2a33] mb-2"
                  >
                    Instagram handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    placeholder="@yourhandle"
                    className="w-full bg-[#fbf7f4] text-[#1f2a33] border border-[#b7c6d1] px-4 py-3 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#455a64]/50 focus:border-[#455a64] placeholder-[#a89c93] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-dark w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium font-sans disabled:opacity-50 mt-2"
                >
                  {loading ? "Sending..." : "Let's Talk"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
