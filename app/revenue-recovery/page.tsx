import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FitCalculator from "@/components/FitCalculator";

export const metadata: Metadata = {
  title: "Revenue Recovery — No Build Fee, Pay From What It Recovers | Applied AI Works",
  description:
    "Automated bid follow-up and customer reactivation for service businesses. No build fee, no monthly retainer. Applied AI Works takes a percentage of the revenue the system brings back. Check if you qualify.",
  // Unlisted while in draft. Password-gated in middleware.ts and kept out of
  // sitemap.ts. Remove this block when the page goes public.
  robots: { index: false, follow: false, nocache: true },
};

const faqItems: FaqItem[] = [
  {
    question: "What's the catch?",
    answer:
      "The qualifying bar. This only works if there's enough volume that a percentage adds up to real money on my end. Under roughly $2M in annual quoted work, I'd be doing a free build for a few hundred dollars a month, and I'd resent it by month three. That's why the calculator is sitting right there on this page instead of behind a sales call.",
  },
  {
    question: "My margin is 20%. Isn't 10% of revenue half my profit?",
    answer:
      "On a job you were already going to win, yes, and I wouldn't ask for it. The percentage only applies to jobs that came back from dead. A quote that sat three weeks with nobody touching it was worth $0 to you. Keeping 90 cents on the dollar from it beats keeping 100% of nothing. If you'd rather not share the upside at all, I'll quote you a flat build fee and you keep every dollar.",
  },
  {
    question: "How do you know a job came from your automation?",
    answer:
      "The contact has to engage with an automated message, meaning they reply to it, click it, or call the tracked number back. Then the quote has to close within 30 days of that engagement. Both of those are visible to you in the dashboard. It's a conservative rule and I lose credit on jobs where the reminder worked but the customer called your main line instead. I'd rather give up those than argue with you every month about attribution.",
  },
  {
    question: "How long am I locked in?",
    answer:
      "Twelve months minimum. I'm covering the build and the platform costs up front, so I need enough runway to earn that back. After 24 months the percentage steps down. There's a kill fee if you cancel inside the first year, and it prorates down each month you stay.",
  },
  {
    question: "What if I want out of the percentage later?",
    answer:
      "There's a buyout. You pay a lump sum based on your trailing average and the system is yours outright, no ongoing fee. A few owners hate the idea of a percentage running forever, and I get that, so the exit is written into the agreement from day one.",
  },
  {
    question: "What do you need from me to make this work?",
    answer:
      "Read access to whatever tracks your closed jobs, and one person who will answer questions during the build. That's most of it. If access gets cut off, the agreement converts to a flat monthly fee, because I can't bill a percentage of numbers I can't see.",
  },
];

const programs = [
  {
    icon: "mark_email_read",
    title: "Bid follow-up sequence",
    body:
      "Every quote that goes out gets a three-touch follow-up over four days, by email and text, sent from the estimator who wrote it. Stops the moment the customer approves, rejects, or asks for time. Most shops send the quote and move on, which is where the 30% that go dark come from.",
    needs: "Needs software with an API",
  },
  {
    icon: "history",
    title: "Database reactivation",
    body:
      "One campaign to every customer who hasn't booked in 12 months or more. Clean attribution, because nobody else has touched those people in over a year. This is usually where I start, since it puts money in your account inside 60 days and proves the whole thing works before we build anything bigger.",
    needs: "Needs a customer list, no API required",
  },
  {
    icon: "phone_missed",
    title: "Missed call text-back",
    body:
      "An unanswered call gets an automatic text inside 60 seconds asking what they need and offering to book. Every service business bleeds calls during the workday. This one is high volume and dead simple to measure, because the text either turns into a booking or it doesn't.",
    needs: "Needs a business phone number we can route",
  },
  {
    icon: "bolt",
    title: "Speed to lead",
    body:
      "Web form and purchased leads get contacted in under a minute instead of four hours. If you're buying leads from Angi or Thumbtack you already know your cost per lead, which makes the before and after easy to compare.",
    needs: "Works best if you buy leads",
  },
];

const tiers = [
  { pipeline: "Under $2M", cut: "Flat fee", note: "Performance deal doesn't pencil out. I'll quote the build." },
  { pipeline: "$2M to $5M", cut: "12%", note: "Of recovered revenue only" },
  { pipeline: "$5M to $15M", cut: "8%", note: "Of recovered revenue only" },
  { pipeline: "$15M+", cut: "5%", note: "Of recovered revenue only" },
];

export default function RevenueRecoveryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.appliedaiworks.com" },
          { name: "Revenue Recovery", url: "https://www.appliedaiworks.com/revenue-recovery" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>trending_up</span>
                Revenue Recovery
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                No build fee.<br />
                <span className="text-kinetic">I get paid when you do.</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Most automation projects want $10,000 up front plus a monthly retainer before anything works. This one runs backward. I build the system, cover the platform costs, and take a cut of the revenue it brings back. If it recovers nothing, you owe me nothing.
              </p>
              <Link
                href="#calculator"
                className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
              >
                Check if you qualify
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </Link>
              <p className="text-xs text-on-surface-variant mt-3">Takes about 30 seconds. No email required.</p>
            </div>

            {/* Zero-cost card */}
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 neural-glow">
              <div className="text-center mb-6">
                <div className="font-headline text-5xl font-bold text-brand-orange mb-1">$0</div>
                <div className="text-on-surface-variant text-sm">To get started. Not a discount, an actual zero.</div>
              </div>
              <div className="space-y-3">
                {[
                  "No build fee",
                  "No monthly retainer",
                  "Platform costs covered by me",
                  "Copywriting included",
                  "Setup, testing, and training included",
                  "You pay only on recovered revenue",
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

      {/* Why this exists */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Why I set it up this way</h2>
          <div className="space-y-5 text-on-surface-variant leading-relaxed">
            <p>
              I&apos;ve sat in enough discovery calls where the owner nods along, sees the number, and goes quiet. Usually it isn&apos;t that the idea is bad. It&apos;s that they already bought software nobody ended up using, and they are not doing that again.
            </p>
            <p>
              So I stopped asking people to take my word for it. Bid follow-up is measurable in a way most marketing isn&apos;t. A quote either sat there and died, or somebody got a text on day two and signed. You can look at it in the dashboard yourself.
            </p>
            <p>
              If the system recovers a job, I take a cut of that job. If it recovers nothing, I ate the build cost and that is my problem, not yours. The risk sits on the person making the claim, which is where it belongs.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Do your numbers work?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Move the sliders. The calculator tells you which programs you qualify for and roughly what each one recovers. If you don&apos;t qualify, it says that too.
            </p>
          </div>
          <FitCalculator />
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              What actually gets built
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Four programs, all of them tied to revenue you can trace. Most shops start with one and add another once the first is paying.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 flex flex-col">
                <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{p.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{p.body}</p>
                <div className="mt-5 pt-4 border-t border-outline-variant/10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "14px" }}>info</span>
                  <span className="text-xs text-on-surface-variant">{p.needs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              The terms, up front
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              You shouldn&apos;t have to get on a call to find out what something costs. The percentage scales down as your volume goes up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {tiers.map((t, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">{t.pipeline}</div>
                <div className="font-headline text-3xl font-bold text-brand-orange mb-2">{t.cut}</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-6">The rest of the agreement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {[
                { label: "Attribution", value: "The contact engages with an automated message and the quote closes within 30 days. Visible to you in the dashboard." },
                { label: "Minimum term", value: "12 months, with a kill fee that prorates down every month you stay." },
                { label: "Step-down", value: "The percentage drops after 24 months. It doesn't run at full rate forever." },
                { label: "Buyout", value: "Convert to a flat fee any time by paying a lump sum based on your trailing average." },
                { label: "Pass-through costs", value: "Text and email usage billed at cost. I cover the platform, you cover what you send." },
                { label: "Data access", value: "Read access to closed job data. If access stops, the deal converts to a flat monthly fee." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-orange mt-0.5" style={{ fontSize: "16px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <div className="font-headline font-semibold text-on-surface text-sm mb-1">{item.label}</div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not a fit */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Didn&apos;t qualify? That&apos;s a real answer, not a brush-off.</h3>
                <p className="text-on-surface-variant text-sm mt-1">
                  Plenty of good businesses don&apos;t have the bid volume for a performance deal, and most of them still have hours getting eaten every week by scheduling, quoting, and email. That&apos;s what the $1,500 audit is for. You get a written roadmap either way, and you can hand it to somebody else to build if you want.
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

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Questions people actually ask</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Worth a 30-minute call?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
            We pull your real quote volume and close rate and check them against the estimates on this page. If the numbers don&apos;t hold up, I&apos;ll tell you on that call instead of three weeks into a build.
          </p>
          <Link
            href="/contact"
            className="kinetic-gradient text-white font-bold px-10 py-5 rounded-2xl neural-glow text-lg inline-flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform"
          >
            Book a Free Call
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
