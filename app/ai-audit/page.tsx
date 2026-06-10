import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Audit for Service Businesses — Applied AI Works",
  description:
    "A complete AI audit for your service business. Know exactly where AI can save you time and money. $1,500 flat fee, includes written roadmap and debrief call.",
};

const faqItems: FaqItem[] = [
  {
    question: "What do I get when it's done?",
    answer:
      "A written report with your AI opportunity map, specific tool recommendations, time-savings estimates per opportunity, and a prioritized implementation roadmap. Plus a 60-minute debrief call where we walk through everything together.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "About two weeks from kickoff to debrief. Week one: questionnaire and kickoff interview. Week two: analysis and report writing. Then we schedule the debrief.",
  },
  {
    question: "Do I have to do anything to prepare?",
    answer:
      "Just fill out the pre-audit questionnaire and show up for the kickoff call. The questionnaire takes about 20 minutes. The more detail you give, the better the report.",
  },
];

export default function AiAuditPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.appliedaiworks.com" }, { name: "AI Audit", url: "https://www.appliedaiworks.com/ai-audit" }]} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>search</span>
                The AI Audit
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                Know exactly where AI fits<br />
                <span className="text-kinetic">in your business.</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Before you buy a tool, hire a developer, or spend a dollar on AI — know what&apos;s actually worth doing. The audit gives you a clear roadmap with real numbers.
              </p>
              <Link
                href="/contact"
                className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
              >
                Book Your AI Audit &mdash; $1,500
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <p className="text-xs text-on-surface-variant mt-3">Free 30-min discovery call first. No commitment.</p>
            </div>

            {/* Price Card */}
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 neural-glow">
              <div className="text-center mb-6">
                <div className="font-headline text-5xl font-bold text-brand-orange mb-1">$1,500</div>
                <div className="text-on-surface-variant text-sm">Flat fee. Everything included.</div>
              </div>
              <div className="space-y-3">
                {[
                  "Pre-audit questionnaire",
                  "60-min kickoff interview",
                  "Written workflow analysis",
                  "AI opportunity map",
                  "Tool recommendations",
                  "Time-savings estimates",
                  "Implementation roadmap",
                  "60-min debrief call",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 kinetic-gradient rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                </div>
              </div>
              <blockquote className="text-on-surface-variant leading-relaxed italic text-base mb-6">
                &ldquo;The audit wasn&apos;t just a list of ideas. It was a clear picture of where my team was losing time every week, with specific tools and a plan to get it back.&rdquo;
              </blockquote>
              <div className="text-sm text-on-surface-variant">Applied AI Works client</div>
            </div>

            <div>
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
                What you walk away with
              </h2>
              <div className="space-y-4">
                {[
                  "A written report you can act on immediately",
                  "Specific tool recommendations for your business",
                  "Time-savings estimates in real hours per week",
                  "A prioritized roadmap — so you know what to do first",
                  "Honest answers about what AI can and can&apos;t do for you",
                  "A clear ROI picture before spending another dollar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-orange mt-0.5" style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <p className="text-on-surface-variant text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right For Me */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Is this right for your business?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low border border-green-400/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="font-headline font-bold text-on-surface">Good fit</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "5-50 employees",
                  "Service or trades business",
                  "Spending hours on admin, communication, or documentation",
                  "Open to trying new tools if they save real time",
                  "Want a clear picture before investing in AI",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                <h3 className="font-headline font-bold text-on-surface">Not the right fit</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Looking for fully automated AI systems with no human involvement",
                  "Expecting AI to replace your entire team",
                  "Not open to changing any existing workflows",
                  "Large enterprise looking for IT department-level solutions",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              How it works
            </h2>
            <p className="text-on-surface-variant">From kickoff to roadmap in about two weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                day: "Day 1-2",
                title: "Questionnaire",
                desc: "Fill out a 20-minute pre-audit survey about your business, team, and current workflows.",
                icon: "assignment",
              },
              {
                day: "Day 3",
                title: "Kickoff Call",
                desc: "60-minute interview to go deeper on your operation, pain points, and goals.",
                icon: "call",
              },
              {
                day: "Day 4-10",
                title: "Analysis",
                desc: "I map your workflows against AI capabilities and identify the highest-value opportunities.",
                icon: "analytics",
              },
              {
                day: "Day 14",
                title: "Debrief",
                desc: "60-minute call to walk through your report, roadmap, and answer every question.",
                icon: "co_present",
              },
            ].map((step, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5">
                <div className="text-xs text-brand-orange font-bold uppercase tracking-widest mb-3">{step.day}</div>
                <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>{step.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-2">{step.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Context */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">The math usually works out fast</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              A 5-person team spending 15 hours per week on tasks AI can handle. At $22/hr average wage, that&apos;s $330/week in recoverable time. The audit pays for itself in about 4 weeks. And that&apos;s before implementation.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-surface-container-highest rounded-xl p-4">
                <div className="font-headline text-2xl font-bold text-brand-orange">$330</div>
                <div className="text-xs text-on-surface-variant mt-1">Weekly value recovered</div>
              </div>
              <div className="bg-surface-container-highest rounded-xl p-4">
                <div className="font-headline text-2xl font-bold text-on-surface">4-5 wks</div>
                <div className="text-xs text-on-surface-variant mt-1">To break even on audit</div>
              </div>
              <div className="bg-surface-container-highest rounded-xl p-4">
                <div className="font-headline text-2xl font-bold text-primary">$17K+</div>
                <div className="text-xs text-on-surface-variant mt-1">First-year value</div>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant mt-4 text-center">
              Example: 5-person team, $22/hr avg wage, 15 hrs/wk of automatable tasks, 60% automation rate
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Questions about the audit</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Book your AI Audit.<br />Know before you spend.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            Free 30-minute discovery call first. We&apos;ll make sure it&apos;s the right fit before anything else.
          </p>
          <Link
            href="/contact"
            className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow mx-auto"
          >
            Book Your AI Audit &mdash; $1,500
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <p className="text-center text-xs text-on-surface-variant mt-3">Free 30-min discovery call first. No commitment.</p>
        </div>
      </section>
    </>
  );
}
