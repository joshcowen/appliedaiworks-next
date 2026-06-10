import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "AI Consulting Services & Pricing — Applied AI Works",
  description:
    "Transparent AI consulting pricing for service businesses. AI Audit starting at $1,500. Training and implementation at $300/hr. No long-term contracts.",
};

const faqItems: FaqItem[] = [
  {
    question: "Do I have to use you for implementation after the audit?",
    answer:
      "No. The audit report is yours. You can take it and run — implement it yourself, hand it to an employee, or hire someone else. Most clients find it valuable enough to continue with us, but there&apos;s no pressure.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "It depends on the scope. A single automation workflow might take 4-6 hours. A full set of client communication templates and scheduling tools might take 15-20 hours. We scope it clearly before starting.",
  },
  {
    question: "Can I do training without the audit first?",
    answer:
      "Yes. If you already know what you want to work on, we can jump straight to training. The audit is recommended if you&apos;re not sure where to start — it makes the training more targeted.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. The audit is a flat-fee project. Training and implementation are billed hourly. The Monthly AI Advisor is month-to-month. You can stop at any time.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>payments</span>
            Services & Pricing
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Transparent pricing.<br />
            <span className="text-kinetic">No surprises.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Every engagement starts with a free 30-minute discovery call. From there, you choose what makes sense for your business.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* AI Audit — Featured, spans 2 cols */}
            <div className="lg:col-span-2 bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 neural-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                      <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: "'FILL' 1" }}>star</span>
                      Most Popular Starting Point
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-on-surface">AI Audit</h2>
                    <p className="text-on-surface-variant mt-1">A complete picture of where AI can save you time and money.</p>
                  </div>
                  <div className="text-right">
                    <div className="font-headline text-4xl font-bold text-brand-orange">$1,500</div>
                    <div className="text-xs text-on-surface-variant">Flat fee</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Pre-audit business questionnaire",
                    "60-minute kickoff interview",
                    "Written analysis of your current workflows",
                    "AI opportunity map (where the hours are hiding)",
                    "Tool recommendations with no vendor bias",
                    "Time-savings estimates per opportunity",
                    "Written implementation roadmap",
                    "60-minute debrief call to walk through findings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ai-audit"
                  className="kinetic-gradient text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform"
                >
                  Learn about the audit
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* AI Training */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 flex flex-col">
              <div className="mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">AI Training</h2>
                <p className="text-on-surface-variant mt-1 text-sm">Hands-on sessions for you and your team.</p>
              </div>
              <div className="mb-6">
                <div className="font-headline text-3xl font-bold text-primary">$300<span className="text-lg font-normal text-on-surface-variant">/hr</span></div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Hands-on tool walkthroughs",
                  "Workflow building in real-time",
                  "Team training sessions",
                  "Custom prompt libraries for your business",
                  "Recorded sessions for future reference",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="bg-surface-container-highest border border-outline-variant/10 text-on-surface font-semibold px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:border-primary/40 transition-colors"
              >
                Book a session
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* AI Implementation */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 flex flex-col">
              <div className="mb-6">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">AI Implementation</h2>
                <p className="text-on-surface-variant mt-1 text-sm">I build the tools and workflows for you.</p>
              </div>
              <div className="mb-6">
                <div className="font-headline text-3xl font-bold text-brand-orange">$300<span className="text-lg font-normal text-on-surface-variant">/hr</span></div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Automation workflow setup",
                  "Custom AI tool builds",
                  "Prompt system development",
                  "Integration with your existing tools",
                  "Handoff documentation and training",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="bg-surface-container-highest border border-outline-variant/10 text-on-surface font-semibold px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:border-brand-orange/40 transition-colors"
              >
                Talk about a project
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Monthly AI Advisor — spans 2 cols */}
            <div className="lg:col-span-2 bg-surface-container-low border border-primary/20 rounded-3xl p-8">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface">Monthly AI Advisor</h2>
                  <p className="text-on-surface-variant mt-1">Ongoing support as your business grows into AI.</p>
                </div>
                <div className="text-right">
                  <div className="font-headline text-4xl font-bold text-primary">$1,500<span className="text-lg font-normal text-on-surface-variant">/mo</span></div>
                  <div className="text-xs text-on-surface-variant">Month-to-month</div>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Monthly strategy call",
                  "Ongoing tool and workflow recommendations",
                  "New AI tool vetting as the landscape changes",
                  "Team questions answered as they come up",
                  "Priority scheduling for implementation work",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Clients Start */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              How clients typically start
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Most businesses follow the same path. You can jump in at any step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "AI Audit",
                desc: "Know exactly where the opportunities are before spending anything on tools or implementation.",
                color: "text-brand-orange",
                border: "border-brand-orange/20",
              },
              {
                step: "02",
                title: "Training",
                desc: "Get you and your team comfortable with the tools. Hands-on, in your business context.",
                color: "text-primary",
                border: "border-primary/20",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Build out the workflows and automations identified in the audit. Real tools, running in your business.",
                color: "text-green-400",
                border: "border-green-400/20",
              },
            ].map((step, i) => (
              <div key={i} className={`bg-surface-container-low border ${step.border} rounded-2xl p-6`}>
                <div className={`font-headline text-5xl font-bold ${step.color} opacity-30 mb-4`}>{step.step}</div>
                <h3 className="font-headline font-bold text-on-surface text-lg mb-2">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Common questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Start with the audit. Know before you spend.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            Free 30-minute discovery call first. No commitment, no pitch deck.
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
              Ask a question first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
