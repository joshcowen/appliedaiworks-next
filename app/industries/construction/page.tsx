import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI for Construction Companies — Applied AI Works",
  description:
    "AI consulting for construction companies in West Michigan. Better bids, faster client updates, less documentation overhead. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "Can AI actually help with bid writing?",
    answer:
      "Yes — significantly. AI can draft bid narratives, scope descriptions, and proposal content from your notes. You still own the numbers and the relationships. But the writing that goes between the line items takes a fraction of the time.",
  },
  {
    question: "We have a complex operation with lots of subs. Is this still useful?",
    answer:
      "Complex operations often have the most to gain. Subcontractor communication templates, change order documentation, jobsite reports — these are exactly the kinds of repetitive written work AI handles well. The audit maps it specifically to your operation.",
  },
  {
    question: "What about RFP responses? Is that in scope?",
    answer:
      "Yes. RFP response assistance is one of the highest-value applications for construction companies. AI helps structure your responses, draft the narrative sections, and ensure you&apos;re hitting all the required points. You provide the expertise; AI handles the documentation.",
  },
  {
    question: "What does the audit actually deliver?",
    answer:
      "A written report with your AI opportunity map, specific tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call to walk through everything.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>construction</span>
            Construction Companies
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Construction runs on communication.<br />
            <span className="text-kinetic">AI keeps everyone on the same page.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Less time writing bids and update emails. More time running the project.
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
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where construction companies lose hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "gavel",
                title: "Bid writing takes forever",
                desc: "A competitive bid requires pages of scope description, qualifications, and project narrative. Multiply that by the number of bids you need to submit and it&apos;s consuming your week.",
              },
              {
                icon: "update",
                title: "Clients want updates you don't have time to write",
                desc: "Weekly project status emails take longer than they should. Every stakeholder wants different detail. The communication work is real work that pulls you off the site.",
              },
              {
                icon: "folder_copy",
                title: "Change orders and documentation pile up",
                desc: "Change order documentation, jobsite reports, meeting summaries — the paper trail that protects you and your clients is also a significant time drain.",
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
              What AI actually does for construction companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "email",
                title: "Client Project Update Emails",
                desc: "AI drafts weekly status emails from your notes. Same information, fraction of the writing time.",
              },
              {
                icon: "rate_review",
                title: "Bid & Proposal Writing Assistance",
                desc: "Scope narratives, qualification sections, cover letters. AI drafts from your bullet points so you can focus on the numbers.",
              },
              {
                icon: "groups",
                title: "Subcontractor Communication Templates",
                desc: "Scope clarifications, scheduling coordination, safety reminders. Consistent templates that go out fast.",
              },
              {
                icon: "assignment",
                title: "Change Order Documentation",
                desc: "Change order write-ups from field notes. Clear, professional documentation that protects you and your client.",
              },
              {
                icon: "summarize",
                title: "Jobsite Report Summaries",
                desc: "Daily and weekly jobsite reports drafted from your observations. Keeps the paper trail current without doubling your time.",
              },
              {
                icon: "grading",
                title: "RFP Response Assistance",
                desc: "AI helps structure your RFP responses, draft narrative sections, and ensure you&apos;re covering all required points.",
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
            <p className="text-on-surface-variant">Fast to start. Built to last.</p>
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
              <p className="text-on-surface-variant text-sm leading-relaxed">Written report, opportunity map, and roadmap specific to your construction operation.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 03</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Build &amp; Train &mdash; $300/hr</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We build the tools. Or you use the roadmap yourself. No lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Josh — Construction layout: text left, stats grid right */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                I understand service businesses. Not just AI.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I&apos;m not an enterprise consultant parachuted in from a software background. I&apos;m a business operator who built 80+ AI projects and logged 3,500+ hours figuring out what works for companies running tight schedules and real crews.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                The advice is grounded in what actually moves the needle — not what looks good in a presentation.
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
                    <StatCounter target={80} />
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
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Construction-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Less writing. More building.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you where the documentation and communication overhead is coming from — and what it&apos;s worth to fix it.
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
