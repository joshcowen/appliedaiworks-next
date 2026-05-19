import type { Metadata } from "next";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI Consulting for West Michigan Service Businesses — Applied AI Works",
  description:
    "Applied AI Works helps West Michigan service businesses and skilled trades find where AI saves the most time and money. Serving Holland, Zeeland, Grand Rapids, Muskegon, and Kalamazoo.",
};

const industries = [
  { emoji: "🔧", name: "HVAC", desc: "Quote automation, seasonal follow-ups, dispatch scheduling, and maintenance reminder systems.", href: "/industries/hvac" },
  { emoji: "🚿", name: "Plumbing", desc: "Emergency response scripts, estimate templates, supplier communication, and customer follow-up workflows.", href: "/industries/plumbing" },
  { emoji: "🌿", name: "Landscaping", desc: "Seasonal proposal generation, crew scheduling, client communication templates, and upsell systems.", href: "/industries/landscaping" },
  { emoji: "🏗️", name: "Construction", desc: "Bid writing, subcontractor coordination, project update communications, and document generation.", href: "/industries/construction" },
  { emoji: "✨", name: "Cleaning", desc: "Quote calculators, booking automation, staff communication, and review request workflows.", href: "/industries/cleaning" },
  { emoji: "🚗", name: "Auto Repair", desc: "Service update messaging, appointment reminders, parts research, and vehicle history documentation.", href: "/industries/auto-repair" },
];

export default function WestMichiganPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>location_on</span>
              West Michigan
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
              AI consulting for<br />
              <span className="text-kinetic">West Michigan service businesses.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              From Holland and Zeeland to Grand Rapids, Muskegon, and Kalamazoo — Applied AI Works helps West Michigan service businesses and skilled trades find where AI saves the most time and money, then shows them exactly how to use it.
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
                  <StatCounter target={80} className="text-2xl font-headline font-bold text-on-surface" />
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

      {/* Region Overview */}
      <section className="py-24 bg-surface-container-low/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">The Region</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">One consultant. All of West Michigan.</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Applied AI Works is based in West Michigan and serves service businesses across the entire region — remotely or in person.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:border-brand-orange/20 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-brand-orange text-sm">water</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Holland &amp; Zeeland</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">The lakeshore communities have a strong mix of manufacturing, construction, and service trades. Relationship-driven businesses that run on referrals and reputation. AI helps them handle more volume without adding overhead.</p>
              <div className="flex flex-col gap-2">
                <Link href="/locations/holland-mi" className="inline-flex items-center gap-1 text-xs text-brand-orange font-bold uppercase tracking-widest hover:gap-2 transition-all">
                  Holland, MI AI Consulting <span className="material-symbols-outlined text-xs">north_east</span>
                </Link>
                <Link href="/locations/zeeland-mi" className="inline-flex items-center gap-1 text-xs text-brand-orange font-bold uppercase tracking-widest hover:gap-2 transition-all">
                  Zeeland, MI AI Consulting <span className="material-symbols-outlined text-xs">north_east</span>
                </Link>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:border-brand-orange/20 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-brand-orange text-sm">location_city</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Grand Rapids</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">West Michigan&apos;s largest market. Enterprise AI firms serve enterprise clients here, leaving a clear gap for service businesses with 5-50 employees. Applied AI Works fills that gap — practical AI for the trades, not the Fortune 500.</p>
              <Link href="/locations/grand-rapids-mi" className="inline-flex items-center gap-1 text-xs text-brand-orange font-bold uppercase tracking-widest hover:gap-2 transition-all">
                Grand Rapids, MI AI Consulting <span className="material-symbols-outlined text-xs">north_east</span>
              </Link>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-brand-orange text-sm">waves</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Muskegon</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">Muskegon&apos;s service economy — HVAC, construction, auto repair, landscaping — runs on tight margins and small teams. AI tools can meaningfully reduce the time spent on admin without significant upfront investment.</p>
              <a href="mailto:josh@appliedaiworks.com" className="inline-flex items-center gap-1 text-xs text-on-surface-variant font-bold uppercase tracking-widest hover:text-brand-orange hover:gap-2 transition-all">
                Reach out about Muskegon <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-brand-orange text-sm">forest</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Kalamazoo Area</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">Kalamazoo&apos;s trades and service businesses face the same challenges as the rest of West Michigan — too much admin, not enough hours, and a market that&apos;s increasingly competitive. AI helps level that playing field.</p>
              <a href="mailto:josh@appliedaiworks.com" className="inline-flex items-center gap-1 text-xs text-on-surface-variant font-bold uppercase tracking-widest hover:text-brand-orange hover:gap-2 transition-all">
                Reach out about Kalamazoo <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Industries</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Industries served across West Michigan.</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">I specialize in the trades and service businesses that keep West Michigan running. I understand your workflows, not just AI in the abstract.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Link
                key={i}
                href={industry.href}
                className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container hover:border-brand-orange/20 transition-all group"
              >
                <div className="text-3xl mb-4">{industry.emoji}</div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-brand-orange transition-colors">{industry.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{industry.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-brand-orange font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  See use cases <span className="material-symbols-outlined text-xs">north_east</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Josh / Credibility */}
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
                  <div className="text-xs text-on-surface-variant">Founder, Applied AI Works</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                  <div className="font-headline text-2xl font-bold text-brand-orange">
                    <StatCounter target={3500} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Hours of AI work</div>
                </div>
                <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                  <div className="font-headline text-2xl font-bold text-on-surface">
                    <StatCounter target={80} />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Projects built</div>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant">Holland, MI &middot; West Michigan based</div>
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">West Michigan is home. Not a market.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I live here. I know the businesses, the industries, and the community. When I work with a West Michigan service company, I&apos;m not applying a generic playbook — I&apos;m working with context that only comes from being local.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                3,500+ hours of hands-on AI work. 80+ projects built. No developers. No technical background required.
              </p>
              <Link href="/about" className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more about Josh
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Services available across West Michigan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI Audit", price: "$1,500", desc: "Complete workflow analysis and implementation roadmap.", featured: true },
              { title: "AI Training", price: "$300/hr", desc: "Hands-on training for you and your team.", featured: false },
              { title: "AI Implementation", price: "$300/hr", desc: "We build the workflows and automations.", featured: false },
              { title: "Monthly Advisor", price: "$1,500/mo", desc: "Ongoing strategy and support. Month-to-month.", featured: false },
            ].map((service, i) => (
              <div key={i} className={`bg-surface-container-low border rounded-2xl p-6 ${service.featured ? "border-brand-orange/30 neural-glow" : "border-outline-variant/10"}`}>
                <div className={`font-headline text-2xl font-bold mb-1 ${service.featured ? "text-brand-orange" : "text-on-surface"}`}>{service.price}</div>
                <h3 className="font-headline font-bold text-on-surface mb-2">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              See full service details
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Ready to see where AI fits your operation?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            Free 30-minute discovery call. No commitment.
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
        </div>
      </section>
    </>
  );
}
