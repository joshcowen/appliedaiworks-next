import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI for Cleaning Companies — Applied AI Works",
  description:
    "AI consulting for cleaning companies in West Michigan. Better onboarding, fewer scheduling headaches, more consistent communication. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "We have high turnover. Will AI actually help with that?",
    answer:
      "AI won&apos;t fix root causes of turnover — but it makes onboarding faster and more consistent, which reduces the pain when turnover does happen. New hire checklists, training materials, and onboarding communications all take a fraction of the time to produce.",
  },
  {
    question: "Our clients are mostly residential. Is this still worth it?",
    answer:
      "Residential cleaning is one of the best fits for AI communication tools. Scheduling confirmations, cancellation handling, review requests, and recurring client reminders — all of these are repetitive and high-volume. That&apos;s exactly where AI saves real hours.",
  },
  {
    question: "Do we need to change our software to use AI?",
    answer:
      "No. The audit looks at what you already use and finds AI tools that work alongside it. Most cleaning companies find the biggest wins come from communication layers added on top of existing scheduling software — not from switching platforms.",
  },
  {
    question: "What does the audit actually deliver?",
    answer:
      "A written report with your AI opportunity map, specific tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call.",
  },
];

export default function CleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>cleaning_services</span>
            Cleaning Companies
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Cleaning companies live and die on consistency.<br />
            <span className="text-kinetic">AI helps you deliver it.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Better onboarding, fewer scheduling headaches, more consistent communication — without adding headcount.
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
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where cleaning companies lose hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "person_off",
                title: "Employee turnover is a time drain",
                desc: "High turnover means constant onboarding. Without a system, every new hire is a fresh production from scratch — and quality is inconsistent.",
              },
              {
                icon: "repeat",
                title: "Client onboarding is repetitive",
                desc: "Every new client gets the same orientation — house rules, access info, special instructions, payment setup. It&apos;s high-volume and completely repeatable.",
              },
              {
                icon: "sync_problem",
                title: "Rescheduling communication is chaos",
                desc: "A weather day or sick call creates a cascade of client messages. Getting everyone rescheduled and confirmed takes hours of back-and-forth.",
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
              What AI actually does for cleaning companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "waving_hand",
                title: "New Client Onboarding Emails",
                desc: "Welcome sequences, service confirmations, what-to-expect messages. Consistent from day one, every time.",
              },
              {
                icon: "event_available",
                title: "Scheduling Confirmations & Changes",
                desc: "Appointment confirmations, reschedule notifications, and cancellation handling — drafted and ready to send.",
              },
              {
                icon: "checklist",
                title: "Employee Onboarding Checklists",
                desc: "New hire checklists, training summaries, policy documents. Built once, used every time someone new starts.",
              },
              {
                icon: "reviews",
                title: "Review Request Sequences",
                desc: "After a job closes well, a review request goes out automatically. More reviews with less chasing.",
              },
              {
                icon: "request_quote",
                title: "Service Quote Templates",
                desc: "Initial quote emails and follow-up sequences drafted from your scope. Faster turnaround, better conversion.",
              },
              {
                icon: "mail",
                title: "Recurring Client Communication",
                desc: "Seasonal check-ins, service updates, and retention emails. Keep clients engaged without manually writing each one.",
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
            <p className="text-on-surface-variant">Three steps to better systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 01</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Free Discovery Call</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">30 minutes. We talk about your operation and whether an audit makes sense.</p>
            </div>
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">Step 02</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">AI Audit &mdash; $1,500</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Written report, opportunity map, and roadmap specific to your cleaning operation.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 03</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Build &amp; Train &mdash; $300/hr</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We build the tools. Or you use the roadmap yourself. No lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Josh — Cleaning layout: text left, stats grid right */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                I understand service businesses. Not just AI.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I run a service business. I know what it costs when communication is inconsistent, when onboarding takes three times longer than it should, and when scheduling chaos eats the day.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                3,500+ hours of hands-on AI work applied to real business problems — not a vendor playbook.
              </p>
              <Link href="/about" className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more about Josh
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
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
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-primary">$<StatCounter target={600} suffix="K+" /></div>
                  <div className="text-xs text-on-surface-variant mt-1">In recoverable time found</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-on-surface">
                    <StatCounter target={0} />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Developers needed</div>
                </div>
              </div>
              <div className="mt-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5">
                <p className="text-on-surface-variant text-sm italic leading-relaxed">
                  &ldquo;Practical tools for people running real businesses. No technical background required.&rdquo;
                </p>
                <div className="text-xs text-on-surface-variant mt-3">Josh Cowen &middot; Holland, MI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Cleaning-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            More consistency. Less chaos.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you where the communication and admin overhead is coming from — and what it would take to fix it.
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
