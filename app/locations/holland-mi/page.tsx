import type { Metadata } from "next";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI Consulting in Holland, MI — Applied AI Works",
  description:
    "AI consulting for Holland, MI service businesses and skilled trades. Find where AI saves your operation the most time and money. $1,500 AI Audit.",
};

const industries = [
  { emoji: "🔧", name: "HVAC", href: "/industries/hvac" },
  { emoji: "🚿", name: "Plumbing", href: "/industries/plumbing" },
  { emoji: "🌿", name: "Landscaping", href: "/industries/landscaping" },
  { emoji: "🏗️", name: "Construction", href: "/industries/construction" },
  { emoji: "✨", name: "Cleaning", href: "/industries/cleaning" },
  { emoji: "🚗", name: "Auto Repair", href: "/industries/auto-repair" },
];

export default function HollandMiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>location_on</span>
              Holland, MI
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
              AI consulting for<br />
              <span className="text-kinetic">Holland, MI service businesses.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              Applied AI Works is based in Holland. I work with local trades and service businesses to find where AI saves the most time and money — then help you put it to work.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/ai-audit"
                className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl neural-glow flex items-center gap-2 hover:scale-[1.02] transition-transform text-base"
              >
                Book Your AI Audit &mdash; $1,500
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/#how-it-works"
                className="font-bold px-8 py-4 rounded-xl border border-outline-variant/40 text-on-surface hover:bg-surface-container transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">
                  <StatCounter target={3500} suffix="+" className="text-2xl font-headline font-bold text-on-surface" />
                </div>
                <div className="text-xs text-brand-orange uppercase tracking-widest font-bold mt-1">Hours Saved</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">$600K+</div>
                <div className="text-xs text-primary uppercase tracking-widest font-bold mt-1">Work Value</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">
                  <StatCounter target={80} suffix="+" className="text-2xl font-headline font-bold text-on-surface" />
                </div>
                <div className="text-xs text-brand-orange uppercase tracking-widest font-bold mt-1">Projects Built</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">$1,500</div>
                <div className="text-xs text-primary uppercase tracking-widest font-bold mt-1">Audit Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Context */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Holland runs on relationship-driven service businesses.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The Holland economy is built on skilled trades, manufacturing, and service companies that compete on reputation and relationships. Those businesses work hard. Most of them are spending more hours on admin than they should be.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                AI doesn&apos;t change what makes them good. It just takes the repetitive work off their plate — estimates, follow-ups, scheduling communications, documentation — so they can focus on the jobs that actually matter.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                I live here. I understand the community and the businesses. That context makes the advice better.
              </p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-highest rounded-xl p-4 text-center">
                  <div className="font-headline text-2xl font-bold text-brand-orange">8-15 hrs</div>
                  <div className="text-xs text-on-surface-variant mt-1">Saved per week, avg</div>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-4 text-center">
                  <div className="font-headline text-2xl font-bold text-on-surface">60%</div>
                  <div className="text-xs text-on-surface-variant mt-1">Admin tasks automatable</div>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-4 text-center">
                  <div className="font-headline text-2xl font-bold text-primary">$1,500</div>
                  <div className="text-xs text-on-surface-variant mt-1">Audit flat fee</div>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-4 text-center">
                  <div className="font-headline text-2xl font-bold text-on-surface">4-6 wks</div>
                  <div className="text-xs text-on-surface-variant mt-1">To ROI on audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Industries served in Holland, MI</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <Link
                key={i}
                href={industry.href}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 flex items-center gap-3 hover:border-brand-orange/30 hover:bg-surface-container transition-all group"
              >
                <span className="text-2xl">{industry.emoji}</span>
                <span className="font-headline font-semibold text-on-surface group-hover:text-brand-orange transition-colors">{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Josh */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 kinetic-gradient rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                </div>
                <div>
                  <div className="font-headline font-bold text-on-surface">Josh Cowen</div>
                  <div className="text-xs text-on-surface-variant">Founder, Applied AI Works &middot; Holland, MI</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                  <div className="font-headline text-2xl font-bold text-brand-orange">
                    <StatCounter target={3500} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Hours logged</div>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                  <div className="font-headline text-2xl font-bold text-on-surface">
                    <StatCounter target={80} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Projects built</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Local. Practical. No technical background required.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I&apos;m a Holland business owner who built 80+ AI tools and logged 3,500+ hours figuring out what works. Not a consultant from Grand Rapids who added &quot;AI&quot; to their website. I live in the community I serve.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                The advice is grounded in real work with real businesses — no jargon, no vendor bias, no long-term contracts.
              </p>
              <Link href="/about" className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more about Josh
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Location */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Also Serving</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/zeeland-mi" className="bg-surface-container-low border border-outline-variant/10 rounded-full px-4 py-2 text-sm text-on-surface-variant hover:border-brand-orange/30 transition-colors">Zeeland, MI</Link>
            <Link href="/locations/grand-rapids-mi" className="bg-surface-container-low border border-outline-variant/10 rounded-full px-4 py-2 text-sm text-on-surface-variant hover:border-brand-orange/30 transition-colors">Grand Rapids, MI</Link>
            <Link href="/locations/west-michigan" className="bg-surface-container-low border border-outline-variant/10 rounded-full px-4 py-2 text-sm text-on-surface-variant hover:border-brand-orange/30 transition-colors">All of West Michigan</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Let&apos;s talk about your Holland business.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">Free 30-minute discovery call. No commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-audit" className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow">
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link href="/contact" className="bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:border-brand-orange/40 transition-colors">
              Start with a free call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
