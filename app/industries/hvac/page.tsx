import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI Consulting for HVAC Companies — Applied AI Works",
  description:
    "AI consulting for HVAC companies in West Michigan. Save hours on scheduling, follow-ups, and estimates. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "Will AI replace my office manager?",
    answer:
      "No. AI handles the repetitive, time-consuming tasks — drafting follow-up emails, summarizing service calls, scheduling reminders — so your office manager can focus on the work that actually requires human judgment. The goal is to make your existing team more effective, not smaller.",
  },
  {
    question: "We already use ServiceTitan. Will AI work with that?",
    answer:
      "Yes. The audit looks specifically at what you already use and finds the best AI tools to work alongside it — not replace it. Most HVAC businesses find the biggest gains come from communication and documentation layers on top of their dispatch software, not from switching platforms.",
  },
  {
    question: "We're a small HVAC company. Is this worth it for us?",
    answer:
      "Small HVAC companies often have the most to gain. A 3-person team spending 10 hours per week on admin, estimates, and follow-ups is losing real money every month. The audit is specifically designed to identify that value and show you what it would take to get it back.",
  },
  {
    question: "What does the audit actually deliver?",
    answer:
      "A written report with your specific AI opportunity map, tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call to walk through everything.",
  },
];

export default function HvacPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>ac_unit</span>
            HVAC Companies
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            HVAC companies run on tight margins<br />
            <span className="text-kinetic">and tighter schedules.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            AI helps you keep both. Less time on admin, more time on jobs that actually pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-audit"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:border-brand-orange/40 transition-colors"
            >
              Start with a free call
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where HVAC companies lose hours</h2>
            <p className="text-on-surface-variant text-sm max-w-xl mx-auto">These aren&apos;t edge cases. Every HVAC operation deals with these.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "calendar_today",
                title: "Scheduling chaos at peak",
                desc: "Summer and winter demand spikes create dispatch bottlenecks. Calls get missed, follow-ups fall through, and techs end up idle or overbooked.",
              },
              {
                icon: "mark_email_unread",
                title: "Follow-ups that fall through",
                desc: "Maintenance agreements, unresolved quotes, post-service check-ins. All of them sit in someone&apos;s head or a sticky note instead of a system.",
              },
              {
                icon: "edit_note",
                title: "Estimate writing eats evenings",
                desc: "After a full day of service calls, someone still has to write detailed estimates. That work shouldn&apos;t require a human from scratch every time.",
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

      {/* AI Applications */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
              What AI actually does for HVAC companies
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Specific applications, not vague potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "event",
                title: "Scheduling Assistance",
                desc: "AI drafts dispatch communication, handles scheduling confirmations, and flags conflicts before they become problems.",
              },
              {
                icon: "autorenew",
                title: "Automated Follow-Up Sequences",
                desc: "Quote follow-ups, maintenance agreement renewals, post-service check-ins. Set them up once, let them run.",
              },
              {
                icon: "summarize",
                title: "Post-Visit Call Summaries",
                desc: "Techs give a quick verbal recap; AI turns it into a structured service summary ready for the customer and your records.",
              },
              {
                icon: "campaign",
                title: "Seasonal Maintenance Campaigns",
                desc: "Spring tune-up and fall furnace check campaigns written and ready to send. Consistent, professional, and out the door fast.",
              },
              {
                icon: "request_quote",
                title: "Estimate Writing Templates",
                desc: "AI drafts estimates from your scope notes. You review and send instead of writing from scratch every time.",
              },
              {
                icon: "person_search",
                title: "Technician Hiring Content",
                desc: "Job postings, onboarding checklists, training summaries. The hiring admin that pulls you away from running the business.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">How it works</h2>
            <p className="text-on-surface-variant">Three steps. No long commitments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 01</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Free Discovery Call</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">30 minutes. We talk about your operation and whether an audit makes sense for your situation.</p>
            </div>
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-2xl p-6 neural-glow relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">Step 02</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">AI Audit &mdash; $1,500</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Deep-dive into your workflows. Written report, opportunity map, and implementation roadmap.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 03</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Build &amp; Train &mdash; $300/hr</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We build the tools from the roadmap. Or you use the roadmap yourself. Either way, you&apos;re not locked in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Josh */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Stats Card */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-brand-orange">
                    <StatCounter target={3500} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Hours of AI work logged</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-on-surface">
                    <StatCounter target={80} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">AI projects built</div>
                </div>
              </div>
              <div className="border-t border-outline-variant/10 pt-6">
                <div className="font-headline font-bold text-on-surface">Josh Cowen</div>
                <div className="text-xs text-on-surface-variant mt-1">Founder, Applied AI Works &middot; Holland, MI</div>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                I understand service businesses. Not just AI.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I&apos;m not an enterprise software consultant who learned about trades from a case study. I&apos;m a business operator who got obsessed with AI and figured out what actually works for companies that run on service calls, dispatches, and tight margins.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Every recommendation I make comes from real hands-on work — 3,500+ hours of it — not a vendor playbook.
              </p>
              <Link
                href="/about"
                className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more about Josh
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">HVAC-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Stop losing evenings to admin work.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you exactly where the hours are going and what it would take to get them back.
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
          <p className="text-center text-xs text-on-surface-variant mt-3">Free 30-min discovery call first. No commitment.</p>
        </div>
      </section>
    </>
  );
}
