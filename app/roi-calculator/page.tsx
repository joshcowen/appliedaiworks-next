import type { Metadata } from "next";
import Link from "next/link";
import RoiCalculator from "@/components/RoiCalculator";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI ROI Calculator for Service Businesses — Applied AI Works",
  description:
    "See what AI is worth to your service business. Calculate hours saved per week, annual dollar value, and weeks to ROI on an AI Audit.",
};

export default function RoiCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.appliedaiworks.com" }, { name: "ROI Calculator", url: "https://www.appliedaiworks.com/roi-calculator" }]} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>calculate</span>
            ROI Calculator
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            See what AI is worth<br />
            <span className="text-kinetic">to your business.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Adjust the sliders to match your team size, wages, and where your hours go. The numbers update in real time.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <RoiCalculator />
        </div>
      </section>

      {/* How We Calculate */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">How we calculate this</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              The math is conservative. Real-world results often exceed these estimates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "auto_fix_high",
                title: "60% automation rate",
                desc: "Research consistently shows AI tools can handle 50-70% of common admin tasks. We use 60% as a conservative baseline.",
              },
              {
                icon: "attach_money",
                title: "Wage-based dollar value",
                desc: "We value saved hours at your team's average wage. This is the minimum value — freed hours often go toward higher-value work.",
              },
              {
                icon: "calendar_month",
                title: "52-week annualization",
                desc: "Weekly savings multiplied by 52. Consistent, compounding. The math gets more compelling every month.",
              },
              {
                icon: "trending_up",
                title: "Audit payback period",
                desc: "$1,500 divided by your weekly value saved. How many weeks until the audit pays for itself entirely.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Could You Do With Those Hours */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">What could you do with those hours?</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              The calculator shows dollar value. But here&apos;s what the hours actually mean.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "construction",
                title: "Take on more jobs",
                desc: "Every hour freed from admin is an hour that could be billable. More jobs, same team.",
              },
              {
                icon: "bedtime",
                title: "Actually sleep at night",
                desc: "When follow-ups and estimates stop piling up, the mental load drops. That&apos;s worth something that doesn&apos;t show up in a calculator.",
              },
              {
                icon: "family_restroom",
                title: "Time with your family",
                desc: "Service business owners don&apos;t start companies to spend evenings writing emails. Get those evenings back.",
              },
              {
                icon: "trending_up",
                title: "Grow without hiring first",
                desc: "Handle more volume with your current team before you need your next hire. That&apos;s margin, not just time.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            The math is clear.<br />Let&apos;s build the roadmap.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The calculator gives you an estimate. The audit gives you the exact plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-audit"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:border-brand-orange/40 transition-colors"
            >
              Start with a free call
            </Link>
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-4">Free 30-min discovery call first. No commitment.</p>
        </div>
      </section>
    </>
  );
}
