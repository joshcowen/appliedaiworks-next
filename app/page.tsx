import type { Metadata } from "next";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";
import RoiCalculator from "@/components/RoiCalculator";
import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Applied AI Works | AI Consulting for Service Businesses in West Michigan",
  description:
    "Applied AI Works helps HVAC, plumbing, landscaping, and trades businesses in West Michigan find where AI saves time and money — starting with a $1,500 AI Audit.",
};

const homeFaqs: FaqItem[] = [
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer:
      "Not at all. My clients are business owners and operators — not tech people. I explain everything in plain language, show you exactly how to use each tool, and make sure you're comfortable before we move on. The whole point is that you shouldn't need to become technical to get value from AI.",
  },
  {
    question: "What exactly is included in the $1,500 AI Audit?",
    answer:
      "The audit includes a deep-dive interview about your workflows and operations, a written analysis of where AI can save you the most time and money, specific tool recommendations (not vague categories — exact tools with reasoning), a prioritized roadmap with estimated time savings for each item, and a 30-minute debrief call to walk through the findings and answer questions.",
  },
  {
    question: "How long does the audit take to complete?",
    answer:
      "From our kickoff call to final delivery, typically 5–7 business days. The kickoff interview runs about 60–90 minutes. I do the analysis and build the roadmap, then we schedule a debrief. You'll have your full audit document and roadmap within a week of our first call.",
  },
  {
    question: "What if I just want the audit and don't need implementation?",
    answer:
      "That's completely fine. The audit stands alone as a valuable deliverable. A lot of clients use the roadmap to implement things themselves, hand it off to a team member, or use it to evaluate whether they want to go further. There's no obligation to continue past the audit — it's designed to give you value on its own.",
  },
  {
    question: "Do you work with businesses outside West Michigan?",
    answer:
      "My focus is on West Michigan service businesses, but all work is done remotely so geography isn't a barrier. If you're a service business owner outside the area who found this and it resonates, reach out. I take on a limited number of clients at a time and work best with businesses where I can develop real context.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="hero">
        <div className="absolute top-[-5%] right-[-5%] w-[700px] h-[700px] bg-brand-orange/[0.08] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-primary/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-24 relative z-10 w-full">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">AI Consulting &middot; West Michigan</span>
              <div className="flex-1 h-px bg-brand-orange/30 max-w-[80px]" />
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-[1.0] mb-8 text-on-surface">
              Stop being the<br />
              <span className="text-kinetic">bottleneck</span><br />
              in your own business.
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Applied AI Works helps service businesses in West Michigan find exactly where AI saves time and money &mdash; then shows you how to use it. No technical background needed.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/ai-audit" className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl neural-glow flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform text-base">
                Book Your AI Audit &mdash; $1,500
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <a href="#how-it-works" className="font-bold px-8 py-4 rounded-xl border border-outline-variant/40 text-on-surface hover:bg-surface-container transition-colors text-base">
                See How It Works
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">
                  <StatCounter target={2700} suffix="+" />
                </div>
                <div className="text-xs text-brand-orange uppercase tracking-widest font-bold mt-1">Hours Saved</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">$400K+</div>
                <div className="text-xs text-primary uppercase tracking-widest font-bold mt-1">Work Value</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">
                  <StatCounter target={66} />
                </div>
                <div className="text-xs text-brand-orange uppercase tracking-widest font-bold mt-1">Projects Built</div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/10">
                <div className="text-2xl font-headline font-bold text-on-surface">$1,500</div>
                <div className="text-xs text-primary uppercase tracking-widest font-bold mt-1">Audit Price</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-outline-variant/20 bg-surface-container-low">
              <div className="p-6 border-b border-outline-variant/10">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">person</span>
                  </div>
                  <div>
                    <div className="font-headline font-bold text-on-surface text-sm">Josh Cowen</div>
                    <div className="text-xs text-on-surface-variant">Applied AI Works</div>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-brand-orange/15 text-brand-orange text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest">Available</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span className="text-on-surface-variant">Hours reclaimed (weekly)</span>
                    <span className="text-brand-orange font-bold">10&ndash;20 hrs</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full kinetic-gradient w-[72%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span className="text-on-surface-variant">Audit ROI (avg. payback)</span>
                    <span className="text-primary font-bold">7&ndash;10 weeks</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 w-[85%] shadow-[0_0_8px_#8ff5ff60]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span className="text-on-surface-variant">Client fit (service/trades biz)</span>
                    <span className="text-on-surface font-bold">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-on-surface-variant/40 w-full" />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="bg-surface-container-highest rounded-2xl p-4 border border-outline-variant/10">
                  <p className="text-xs text-on-surface-variant leading-relaxed italic">
                    &ldquo;I&apos;m not a tech consultant. I&apos;m a business operator who saved 2,700 hours using AI &mdash; and I&apos;ll show you exactly where to start in yours.&rdquo;
                  </p>
                  <p className="text-xs text-brand-orange font-bold mt-2">&mdash; Josh Cowen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-outline-variant/10 bg-surface-container-low/40 py-4">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold shrink-0">Serving West Michigan businesses in</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {[
              { href: "/industries/hvac", label: "HVAC" },
              { href: "/industries/plumbing", label: "Plumbing" },
              { href: "/industries/landscaping", label: "Landscaping" },
              { href: "/industries/construction", label: "Construction" },
              { href: "/industries/cleaning", label: "Cleaning" },
              { href: "/industries/auto-repair", label: "Auto Repair" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant hover:text-brand-orange hover:border-brand-orange/30 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-24 lg:py-32 bg-surface-container-low/20" id="problem">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">The Problem</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 max-w-lg">
              Your operation runs on you.<br />That&apos;s the problem.
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              You&apos;re good at what you do &mdash; and because you&apos;re good at it, everything runs through you. Estimates, follow-ups, scheduling, quality checks. Every hour you spend on operations is an hour you&apos;re not growing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "schedule", colorIcon: "text-brand-orange", colorBg: "bg-brand-orange/10", title: "Hours lost every week", body: "Answering the same questions. Rewriting the same emails. Chasing invoices. These tasks feel small — but they add up to 8–15 hours a week that AI could handle without you." },
              { icon: "hub", colorIcon: "text-primary", colorBg: "bg-primary/10", title: "Everything flows through you", body: "Your team can't make decisions without you. Customers want to talk to you. Work stalls when you're on a job. You're the system — and that's not a business, that's a job with payroll." },
              { icon: "trending_up", colorIcon: "text-brand-orange", colorBg: "bg-brand-orange/10", title: "Can't grow without hiring", body: "More revenue means more overhead. You need another person just to keep up — before you can actually scale. AI changes that equation. You can handle more volume with the same team." },
            ].map((c) => (
              <div key={c.title} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container transition-colors group">
                <div className={`w-12 h-12 rounded-2xl ${c.colorBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined ${c.colorIcon}`}>{c.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{c.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32" id="how-it-works">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">The Process</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">Simple. Fast. Practical.</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Three steps from conversation to clarity &mdash; no vendor selection, no 6-month engagement, no buzzword deck.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-brand-orange/30 via-primary/30 to-brand-orange/30 z-0" />
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 relative z-10">
              <div className="w-12 h-12 rounded-full kinetic-gradient flex items-center justify-center mb-6 font-headline font-bold text-white text-lg neural-glow">1</div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Free Discovery Call</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">A 30-minute conversation about your operation. What tasks eat your time. Where work gets stuck. What you&apos;ve already tried. No pitch, no pressure.</p>
              <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest">Free &mdash; 30 min</span>
            </div>
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 relative z-10 neural-glow">
              <div className="w-12 h-12 rounded-full kinetic-gradient flex items-center justify-center mb-6 font-headline font-bold text-white text-lg neural-glow">2</div>
              <div className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-brand-orange text-white font-bold uppercase tracking-widest mb-3">Most Popular</div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">AI Audit + Roadmap</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">I dig into your workflows and build a prioritized roadmap showing exactly where AI saves you the most time and money &mdash; with specific tools and steps.</p>
              <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange font-bold uppercase tracking-widest">$1,500 flat</span>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 relative z-10">
              <div className="w-12 h-12 rounded-full kinetic-gradient flex items-center justify-center mb-6 font-headline font-bold text-white text-lg neural-glow">3</div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Implementation</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">We build and roll out the highest-value tools together. I train you and your team so you own it completely &mdash; no dependency on me to keep it running.</p>
              <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest">$300/hr or retainer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 lg:py-32 bg-surface-container-low/20" id="about">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-brand-orange/[0.08] blur-3xl rounded-full pointer-events-none" />
              <div className="relative bg-surface-container-low border border-brand-orange/15 rounded-3xl p-8 primary-glow">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-headline font-bold text-on-surface">Case Study Snapshot</h4>
                  <span className="bg-brand-orange/15 text-brand-orange text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Verified</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-surface-container-highest rounded-2xl p-5">
                    <div className="font-headline text-3xl font-bold text-on-surface mb-1"><StatCounter target={2700} suffix="+" /></div>
                    <div className="text-xs text-brand-orange uppercase tracking-widest font-bold">Hours Saved</div>
                    <div className="text-xs text-on-surface-variant mt-1">With AI assistance</div>
                  </div>
                  <div className="bg-surface-container-highest rounded-2xl p-5">
                    <div className="font-headline text-3xl font-bold text-on-surface mb-1">$400K+</div>
                    <div className="text-xs text-primary uppercase tracking-widest font-bold">Work Value</div>
                    <div className="text-xs text-on-surface-variant mt-1">At agency rates</div>
                  </div>
                  <div className="bg-surface-container-highest rounded-2xl p-5">
                    <div className="font-headline text-3xl font-bold text-on-surface mb-1"><StatCounter target={66} /></div>
                    <div className="text-xs text-brand-orange uppercase tracking-widest font-bold">Projects Built</div>
                    <div className="text-xs text-on-surface-variant mt-1">Apps, tools, systems</div>
                  </div>
                  <div className="bg-surface-container-highest rounded-2xl p-5">
                    <div className="font-headline text-3xl font-bold text-on-surface mb-1">0</div>
                    <div className="text-xs text-primary uppercase tracking-widest font-bold">Developers Hired</div>
                    <div className="text-xs text-on-surface-variant mt-1">Solo operator, AI tools</div>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-4 border border-outline-variant/10">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-orange mt-0.5 text-xl">location_on</span>
                    <div>
                      <div className="text-sm font-bold text-on-surface">Based in West Michigan</div>
                      <div className="text-xs text-on-surface-variant">Holland &middot; Zeeland &middot; Grand Rapids &middot; Statewide remote</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">Who I Am</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-8 leading-tight">I built $400,000 worth of&nbsp;work.<br />By myself. With&nbsp;AI.</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-base mb-8">
                <p>I&apos;m not a developer. I don&apos;t have a computer science degree. I&apos;m a business operator who got obsessed with AI tools and figured out how to use them to do the work of a much larger team.</p>
                <p>Over the last two years, I&apos;ve completed 66 projects &mdash; websites, automations, content systems, internal tools &mdash; work that would have taken a full team to deliver. I did it alone, using AI as leverage.</p>
                <p>Now I help service business owners in West Michigan do the same thing. Not by making you into a tech person &mdash; by showing you exactly where AI fits into your operation and handing you the tools to use it.</p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                Read the full story <span className="material-symbols-outlined text-sm">north_east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32" id="services">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">Services</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Transparent pricing.<br /><span className="text-kinetic">No surprises.</span></h2>
            </div>
            <p className="text-on-surface-variant max-w-xs text-right leading-relaxed">Every engagement is scoped upfront. You know exactly what you&apos;re getting before you commit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-low border border-brand-orange/25 rounded-3xl p-8 relative overflow-hidden neural-glow group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/[0.05] blur-[60px] rounded-full pointer-events-none" />
              <span className="inline-block text-[10px] px-3 py-1 rounded-full bg-brand-orange text-white font-bold uppercase tracking-widest mb-6">Most Popular &mdash; Start Here</span>
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">AI Audit + Roadmap</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline text-4xl font-bold text-on-surface">$1,500</span>
                <span className="text-on-surface-variant text-sm">flat rate</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-6">A deep-dive into your operation. I map your workflows, identify your highest-value AI opportunities, and deliver a prioritized, actionable roadmap.</p>
              <ul className="space-y-2 mb-8">
                {["Workflow analysis & time audit", "Prioritized opportunity map", "Specific tool recommendations", "Written roadmap document", "30-min debrief call included"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-brand-orange text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/ai-audit" className="kinetic-gradient text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-transform">
                See What&apos;s Included <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">AI Training</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-headline text-3xl font-bold text-on-surface">$300</span>
                <span className="text-on-surface-variant text-sm">/hr</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">Hands-on training for you and your team. We work through real tasks from your business, not generic demos.</p>
              <ul className="space-y-2">
                {["Tailored to your business", "Team training available", "Written follow-up resources"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Monthly Advisor</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-headline text-3xl font-bold text-on-surface">$1,500</span>
                <span className="text-on-surface-variant text-sm">/mo</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">Ongoing access to me as your AI advisor. Monthly strategy sessions, async support, and help implementing new tools.</p>
              <ul className="space-y-2">
                {["2 strategy sessions/month", "Async support", "Priority implementation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-brand-orange text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest">
              Compare all services <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="py-24 lg:py-32 bg-surface-container-low/20" id="calculator">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">ROI Calculator</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">See what AI is worth<br />to your business.</h2>
            <p className="text-on-surface-variant text-lg max-w-md mx-auto">Move the sliders to match your operation. See the real numbers in seconds.</p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 lg:py-32" id="industries">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">Industries</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">Built for businesses like yours.</h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">I specialize in the trades and service industries. I understand your workflows, your customers, and your operational challenges.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/industries/hvac", emoji: "🔧", title: "HVAC", desc: "Quote automation, dispatch scheduling, seasonal follow-up sequences, and maintenance reminder systems." },
              { href: "/industries/plumbing", emoji: "🚿", title: "Plumbing", desc: "Emergency response scripts, estimate templates, supplier communication, and customer follow-up workflows." },
              { href: "/industries/landscaping", emoji: "🌿", title: "Landscaping", desc: "Seasonal proposal generation, crew scheduling assistance, client communication templates, and upsell systems." },
              { href: "/industries/construction", emoji: "🏗️", title: "Construction", desc: "Bid writing assistance, subcontractor coordination, project update communications, and document generation." },
              { href: "/industries/cleaning", emoji: "✨", title: "Cleaning", desc: "Quote calculators, recurring booking automation, staff communication systems, and review request workflows." },
              { href: "/industries/auto-repair", emoji: "🚗", title: "Auto Repair", desc: "Service update messaging, parts sourcing research, appointment reminders, and vehicle history documentation." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 hover:bg-surface-container hover:border-brand-orange/20 transition-all group">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-brand-orange font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  See use cases <span className="material-symbols-outlined text-xs">north_east</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-surface-container-low/20" id="faq">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4">FAQ</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">Common questions.</h2>
            <p className="text-on-surface-variant text-lg">If you have a question not covered here, ask it on the discovery call.</p>
          </div>
          <FaqAccordion items={homeFaqs} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest">
              See all questions <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8" id="cta">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="absolute -inset-12 bg-brand-orange/[0.08] blur-3xl rounded-[4rem] pointer-events-none" />
          <div className="relative bg-surface-container-low border border-brand-orange/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-orange/10 blur-[60px] pointer-events-none" />
            <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.25em] block mb-4 relative z-10">Get Started</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6 max-w-2xl mx-auto relative z-10">
              Your competitors are figuring out AI.<br /><span className="text-kinetic">Get there first.</span>
            </h2>
            <p className="text-on-surface-variant text-xl mb-10 max-w-lg mx-auto leading-relaxed relative z-10">
              The AI Audit gives you a clear, prioritized picture of where AI saves you the most time and money &mdash; in your specific operation, not a generic playbook.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href="mailto:josh@appliedaiworks.com" className="kinetic-gradient text-white font-bold px-10 py-5 rounded-2xl neural-glow text-lg hover:scale-[1.02] active:scale-95 transition-transform">
                Book Your AI Audit &mdash; $1,500
              </a>
              <Link href="/contact" className="bg-surface-variant text-on-surface font-bold px-10 py-5 rounded-2xl text-lg border border-outline-variant/30 hover:border-brand-orange/40 transition-colors">
                Start with a Free Call
              </Link>
            </div>
            <p className="text-on-surface-variant text-sm mt-6 relative z-10">Free 30-min discovery call first. No commitment, no pressure.</p>
          </div>
        </div>
      </section>
    </>
  );
}
