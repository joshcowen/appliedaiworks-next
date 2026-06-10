import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import StatCounter from "@/components/StatCounter";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Consulting for Auto Repair Shops — Applied AI Works",
  description:
    "AI consulting for auto repair shops in West Michigan. Better estimate communication, service reminders, more reviews. Start with a $1,500 AI Audit.",
};

const faqItems: FaqItem[] = [
  {
    question: "We already use Mitchell/NAPA TRACS. Will AI work with that?",
    answer:
      "Yes. The audit looks at what you already use and finds AI tools that work alongside it — not replace it. For most shops, the biggest gains come from communication layers on top of your existing shop management software: customer-facing repair explanations, follow-up sequences, review requests.",
  },
  {
    question: "Our customers trust us because we explain things clearly. Won't AI make that generic?",
    answer:
      "The opposite. AI helps you explain repairs in plain language consistently — not just when you have time. The templates are trained on your approach, so they sound like you, not a corporate service department.",
  },
  {
    question: "Is this worth it for an independent shop?",
    answer:
      "Independent shops often win on trust and communication. AI helps you deliver that consistently — every customer, every visit — without adding staff hours. The audit shows you where the biggest wins are for your specific operation.",
  },
  {
    question: "What does the audit actually deliver?",
    answer:
      "A written report with your AI opportunity map, specific tool recommendations, time-savings estimates for each area, and a prioritized implementation roadmap. Plus a 60-minute debrief call to walk through everything.",
  },
];

export default function AutoRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.appliedaiworks.com" }, { name: "Industries", url: "https://www.appliedaiworks.com/industries/auto-repair" }, { name: "Auto Repair", url: "https://www.appliedaiworks.com/industries/auto-repair" }]} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>car_repair</span>
            Auto Repair Shops
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Auto repair runs on trust.<br />
            <span className="text-kinetic">AI helps you build it faster.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Clearer estimates, consistent follow-ups, and more reviews — without more hours at the desk.
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
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Where auto repair shops lose hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "description",
                title: "Estimate communication is unclear",
                desc: "Customers don&apos;t always understand what they&apos;re approving. Plain-language explanations of the work build trust — and reduce the &quot;why does this cost so much&quot; calls.",
              },
              {
                icon: "notifications_off",
                title: "No system for service reminders",
                desc: "You know a customer is due for an oil change or a tire rotation. But there&apos;s no consistent system for reaching out. Those are jobs that go to the shop down the street.",
              },
              {
                icon: "reviews",
                title: "Reviews left to chance",
                desc: "Happy customers rarely leave reviews unless asked. And asking every customer manually at checkout just doesn&apos;t happen consistently.",
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
              What AI actually does for auto repair shops
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "translate",
                title: "Plain-Language Repair Explanations",
                desc: "AI translates your tech notes into customer-friendly repair summaries. Builds trust, reduces &quot;can you explain this&quot; calls.",
              },
              {
                icon: "update",
                title: "Service Update Templates",
                desc: "Vehicle ready, parts delayed, additional work found — all drafted and ready to text or email. Consistent updates every time.",
              },
              {
                icon: "schedule_send",
                title: "Estimate Follow-Up Sequences",
                desc: "Customer got an estimate but hasn&apos;t approved? A follow-up sequence runs automatically so open estimates don&apos;t just go cold.",
              },
              {
                icon: "car_crash",
                title: "Maintenance Reminder Campaigns",
                desc: "Oil change intervals, annual inspections, tire rotations. AI builds the reminder sequences; customers come back more consistently.",
              },
              {
                icon: "thumb_up",
                title: "Review Request Automation",
                desc: "After a job closes well, a review request goes out automatically. More reviews, without manually asking every customer.",
              },
              {
                icon: "work",
                title: "Technician Hiring Content",
                desc: "Job postings, screening questions, onboarding checklists. The hiring admin that pulls you away from the shop.",
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
            <p className="text-on-surface-variant">Three steps. No surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 01</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Free Discovery Call</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">30 minutes. We talk about your shop and whether an audit makes sense.</p>
            </div>
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">Step 02</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">AI Audit &mdash; $1,500</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Written report, opportunity map, and roadmap specific to your auto repair operation.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Step 03</div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Build &amp; Train &mdash; $300/hr</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">We build the tools. Or you use the roadmap yourself. No lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Josh — Auto Repair layout: text left, stats grid right */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                I understand service businesses. Not just AI.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                I&apos;m not an enterprise consultant. I&apos;m a business operator who went deep on AI tools and figured out what actually works for shops running on customer relationships and tight margins.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Every recommendation is grounded in 3,500+ hours of hands-on work — not a vendor playbook.
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
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Auto repair-specific questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Better communication. More repeat business.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit shows you where the communication gaps are — and what it would take to close them.
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
