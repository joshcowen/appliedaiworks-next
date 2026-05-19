import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI for Landscaping Companies — Applied AI Works",
  description:
    "AI consulting for landscaping companies in West Michigan. More proposals, better client retention, less seasonal admin. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "My business is relationship-based. Won't AI make it feel impersonal?",
    answer:
      "The opposite, actually. AI handles the admin and communication drafts so you have more time for the conversations that matter. And AI-assisted proposals still go out under your name — they&apos;re just faster to produce.",
  },
  {
    question: "Will AI proposals actually sound like me?",
    answer:
      "Yes, when we set them up right. Part of implementation is building templates trained on your tone and language. After a few rounds of feedback, the drafts sound like you wrote them — because you taught the system what you sound like.",
  },
  {
    question: "Is this worth it for a smaller operation?",
    answer:
      "Smaller operations often have the most to gain. A 4-person crew where the owner writes all the proposals, manages all the client communication, and handles hiring is leaving real hours on the table. The audit shows you exactly what that&apos;s worth.",
  },
  {
    question: "What does the audit include?",
    answer:
      "A written report with your AI opportunity map, specific tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call.",
  },
];

export default function LandscapingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>yard</span>
            Landscaping Companies
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Your peak season is when revenue is made.<br />
            <span className="text-kinetic">AI helps you capture all of it.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Faster proposals. Better client retention. Less time on seasonal admin that eats into actual work.
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
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where landscaping companies lose hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "edit_document",
                title: "Proposal writing slows you down",
                desc: "Every new project quote takes real time. Detailed scope, pricing, plant specs. Multiply that by 20 proposals a week in spring and it&apos;s a full-time job.",
              },
              {
                icon: "notifications_off",
                title: "Clients don't renew without a nudge",
                desc: "Maintenance contracts don&apos;t auto-renew. But sending personalized renewal reminders to 80 clients before spring — most people don&apos;t have a system for that.",
              },
              {
                icon: "group_add",
                title: "Seasonal hiring eats your spring",
                desc: "Recruiting, screening, onboarding. Just when you should be focused on ramping up work, you&apos;re drowning in hiring admin.",
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
              What AI actually does for landscaping companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "description",
                title: "Proposal Generation",
                desc: "AI drafts detailed proposals from your scope notes. You review, adjust, and send. Cut proposal time by half.",
              },
              {
                icon: "event_repeat",
                title: "Seasonal Maintenance Reminders",
                desc: "Spring clean-up, fall aeration, winterization — automated reminders go out to your client list on schedule.",
              },
              {
                icon: "handshake",
                title: "Client Retention Emails",
                desc: "Renewal campaigns, annual review check-ins, off-season touch points. Keep relationships warm without manual effort.",
              },
              {
                icon: "reviews",
                title: "Review Request Follow-Ups",
                desc: "After a job closes well, a review request sequence runs automatically. More reviews, less manual chasing.",
              },
              {
                icon: "photo_camera",
                title: "Social Content for the Season",
                desc: "Project photos become captions. Job completions become posts. AI drafts the content; you approve and post.",
              },
              {
                icon: "work",
                title: "Seasonal Hiring Content",
                desc: "Job postings, application screening questions, onboarding checklists. The hiring admin that pulls you away from spring.",
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
            <p className="text-on-surface-variant">Start before the busy season hits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 01</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Free Discovery Call</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">30 minutes. We talk about your operation and whether an audit makes sense.</p>
            </div>
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-2xl p-6 neural-glow relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">Step 02</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">AI Audit &mdash; $1,500</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Written report, opportunity map, and roadmap specific to your landscaping operation.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 03</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Build &amp; Train &mdash; $300/hr</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We build the tools. Or you use the roadmap yourself. No lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Josh */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-brand-orange">
                    <StatCounter target={2700} suffix="+" />
                  </div>
                  <div className="text-xs text-on-surface-variant mt-1">Hours of AI work logged</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-on-surface">
                    <StatCounter target={66} />
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
                I run a service business. I know what seasonal pressure feels like, what a proposal backlog costs, and what it means to lose a maintenance client because the renewal email never went out.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                That context is what makes the advice different. 2,700+ hours of hands-on AI work, applied to real business problems.
              </p>
              <Link href="/about" className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
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
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Landscaping-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Capture more of your peak season.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you exactly where the hours are going and what it takes to get them back.
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
