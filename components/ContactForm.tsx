"use client";

import { useState } from "react";

const industries = [
  "HVAC",
  "Plumbing",
  "Landscaping / Lawn Care",
  "Construction / Remodeling",
  "Cleaning Services",
  "Auto Repair",
  "Electrical",
  "Roofing",
  "Pest Control",
  "Other Service Business",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    description: "",
    bestTime: "",
    _honey: "",
  });
  const [loadedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _loadedAt: loadedAt }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-5">
          <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "28px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-2">Got it. I&apos;ll be in touch.</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
          Usually within one business day. Check your spam folder if you don&apos;t hear back.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow">
      <div className="mb-6">
        <div className="w-12 h-12 kinetic-gradient rounded-xl flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
        </div>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-2">Book a free discovery call</h2>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          30 minutes. No pitch. Tell me what&apos;s going on and I&apos;ll tell you honestly if an audit makes sense.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="name">
              Your name <span className="text-brand-orange">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Josh Smith"
              className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-brand-orange/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="email">
              Email address <span className="text-brand-orange">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="josh@yourcompany.com"
              className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-brand-orange/60 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="company">
              Company name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Smith Plumbing LLC"
              className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-brand-orange/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="industry">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={form.industry}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-orange/60 transition-colors appearance-none"
            >
              <option value="" className="bg-surface-container">Select your industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind} className="bg-surface-container">{ind}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="description">
            What would you like help with? <span className="text-brand-orange">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder="Briefly describe what's eating up your time or where you think AI might help. Don't worry about getting it perfect."
            className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-brand-orange/60 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="bestTime">
            Best time to reach you <span className="text-xs font-normal">(optional)</span>
          </label>
          <input
            id="bestTime"
            name="bestTime"
            type="text"
            value={form.bestTime}
            onChange={handleChange}
            placeholder="e.g. Mornings, after 3pm, weekdays only"
            className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-brand-orange/60 transition-colors"
          />
        </div>

        {/* Honeypot — hidden from real users, bots fill it */}
        <div style={{ position: "absolute", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            value={form._honey}
            onChange={handleChange}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">Something went wrong. Try again or reach out directly.</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full kinetic-gradient text-white font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        >
          {status === "submitting" ? (
            <>
              <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
              Sending...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-sm">send</span>
              Request a Free Call
            </>
          )}
        </button>

        <p className="text-xs text-on-surface-variant text-center">
          Usually responds within one business day. No spam, ever.
        </p>
      </form>
    </div>
  );
}
