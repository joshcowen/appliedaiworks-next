import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact — Applied AI Works",
  description:
    "Get in touch with Applied AI Works. Email josh@appliedaiworks.com to book a free 30-minute discovery call for AI consulting in West Michigan.",
};

const faqItems: FaqItem[] = [
  {
    question: "How fast can we get started?",
    answer:
      "Discovery calls are usually available within a few business days. After that, audits typically kick off within a week of booking.",
  },
  {
    question: "What if I just want to ask a question first?",
    answer:
      "That&apos;s exactly what the discovery call is for. No pitch, no pressure. Just a conversation about where you are and whether an audit makes sense.",
  },
  {
    question: "I&apos;m not in West Michigan. Can you still help?",
    answer:
      "Yes. Everything is remote-friendly. The primary focus is West Michigan service businesses, but geography doesn&apos;t limit the work.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>mail</span>
            Contact
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Let&apos;s talk about<br />
            <span className="text-kinetic">your operation.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            The discovery call is free and there&apos;s no commitment. If it&apos;s not a fit, I&apos;ll tell you straight.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What to Expect */}
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">What to expect on the call</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "timer",
                    title: "30 minutes",
                    desc: "That&apos;s it. Focused conversation, no wasted time.",
                  },
                  {
                    icon: "quiz",
                    title: "Questions about your business",
                    desc: "What you do, how many people are on your team, where the bottlenecks are.",
                  },
                  {
                    icon: "lightbulb",
                    title: "Honest assessment",
                    desc: "Whether an audit makes sense for your situation right now, or not.",
                  },
                  {
                    icon: "visibility_off",
                    title: "No pitch",
                    desc: "I&apos;m not going to try to sell you something you don&apos;t need. If it&apos;s not a fit, I&apos;ll say so.",
                  },
                  {
                    icon: "arrow_forward",
                    title: "Clear next step",
                    desc: "If there&apos;s a fit, we&apos;ll outline exactly what the audit looks like and what happens after.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-headline font-semibold text-on-surface text-sm">{item.title}</div>
                      <p className="text-on-surface-variant text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 kinetic-gradient rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <h2 className="font-headline text-xl font-bold text-on-surface mb-2">Email to get started</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Send a note to book your free discovery call. Tell me a bit about your business and what you&apos;re dealing with.
                </p>
              </div>
              <a
                href="mailto:josh@appliedaiworks.com"
                className="kinetic-gradient text-white font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                josh@appliedaiworks.com
              </a>
              <div className="mt-6 pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>schedule</span>
                  Usually responds within one business day
                </div>
              </div>
              <div className="mt-4 bg-surface-container-highest rounded-xl p-4">
                <div className="text-xs text-on-surface-variant font-medium mb-1">Calendar booking</div>
                <div className="text-sm text-on-surface-variant">Coming soon. For now, email is the fastest way to get time on the calendar.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Summary Card */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Not sure if you need an audit?</h3>
                <p className="text-on-surface-variant text-sm mt-1">
                  If your team spends hours every week on emails, estimates, scheduling, or follow-ups, an audit will find the hours. Most businesses recover the $1,500 investment in the first month.
                </p>
              </div>
            </div>
            <Link
              href="/ai-audit"
              className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              See what the audit includes
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Based in West Michigan</h2>
            <p className="text-on-surface-variant text-sm">
              Serving trades and service businesses across the region. All work is remote-friendly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Holland, MI", href: "/locations/holland-mi" },
              { label: "Zeeland, MI", href: "/locations/zeeland-mi" },
              { label: "Grand Rapids, MI", href: "/locations/grand-rapids-mi" },
              { label: "West Michigan", href: "/locations/west-michigan" },
            ].map((loc, i) => (
              <Link
                key={i}
                href={loc.href}
                className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/10 rounded-full px-4 py-2 text-sm text-on-surface-variant hover:border-brand-orange/30 hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>location_on</span>
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Quick answers</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Email to book your free discovery call.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            No pitch. Just 30 minutes to figure out if this is worth your time.
          </p>
          <a
            href="mailto:josh@appliedaiworks.com"
            className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            josh@appliedaiworks.com
          </a>
        </div>
      </section>
    </>
  );
}
