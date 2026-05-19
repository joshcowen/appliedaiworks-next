import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "AI for Plumbing Companies — Applied AI Works",
  description:
    "AI consulting for plumbing companies in West Michigan. Faster follow-ups, better estimates, less admin. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "Will AI replace my dispatch system?",
    answer:
      "No. AI works alongside your existing dispatch tools — it doesn&apos;t replace them. The biggest gains for plumbing companies come from the communication and documentation layers: auto-responses, follow-up sequences, estimate drafting. Your dispatch workflow stays intact.",
  },
  {
    question: "We run emergency calls. Is AI really useful for a reactive business?",
    answer:
      "Especially for reactive businesses. The chaos of emergency calls makes the repetitive admin even more painful. AI handles the routine communication so your team can focus on the work that actually requires being on-site.",
  },
  {
    question: "What does the audit actually deliver?",
    answer:
      "A written report with your specific AI opportunity map, tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call to walk through everything.",
  },
  {
    question: "Do I need to be tech-savvy to use what you build?",
    answer:
      "No. Everything I build is designed to be used by people running a plumbing business, not developers. I train you on how it works and make sure it fits into how you actually operate before handing it off.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>plumbing</span>
            Plumbing Companies
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Plumbing is reactive by nature.<br />
            <span className="text-kinetic">AI helps you get ahead of it.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Less time chasing quotes and writing follow-ups. More time on jobs.
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
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where plumbing companies lose hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "emergency",
                title: "Emergency calls bottleneck everything",
                desc: "When emergencies come in hot, everything else stops. The non-urgent quotes, follow-ups, and documentation pile up while you handle the crisis.",
              },
              {
                icon: "description",
                title: "Quote documentation is a slog",
                desc: "Writing up detailed quotes after a diagnostic visit takes time you don&apos;t have. Especially when half of them won&apos;t convert without a follow-up anyway.",
              },
              {
                icon: "person_off",
                title: "Non-emergency leads go cold",
                desc: "You give someone a quote on a water heater replacement. Life gets busy. No follow-up happens. They call someone else.",
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
              What AI actually does for plumbing companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "reply_all",
                title: "Emergency Inquiry Auto-Responses",
                desc: "Acknowledge emergency calls instantly with a professional response that buys your team time to get back to them.",
              },
              {
                icon: "request_quote",
                title: "Estimate Generation Templates",
                desc: "AI drafts estimates from your scope notes. Faster turnaround, more consistent pricing presentation.",
              },
              {
                icon: "chat",
                title: "Customer Communication Drafts",
                desc: "Appointment confirmations, delay notifications, follow-up check-ins. All drafted, ready to review and send.",
              },
              {
                icon: "reviews",
                title: "Review Request Sequences",
                desc: "After a job closes well, a timely review request goes out automatically. More reviews, less effort.",
              },
              {
                icon: "summarize",
                title: "Job Costing Summaries",
                desc: "Turn tech notes into structured job summaries for your records, billing, and customer documentation.",
              },
              {
                icon: "schedule_send",
                title: "Follow-Up Sequences for Non-Emergency Leads",
                desc: "Quoted a water heater but they haven&apos;t called back? A follow-up sequence runs automatically so nothing slips.",
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
            <p className="text-on-surface-variant">Stop losing jobs to slow follow-up.</p>
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
              <p className="text-on-surface-variant text-sm leading-relaxed">Written report, opportunity map, and roadmap specific to your plumbing operation.</p>
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
                Not an enterprise consultant. A business operator who went deep on AI tools and built 66 projects to figure out what actually works for service companies with real constraints.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Every recommendation is based on 2,700+ hours of hands-on work, not a vendor playbook.
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
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Plumbing-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Stop losing jobs to slow follow-up.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you where the gaps are and what it would take to close them.
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
