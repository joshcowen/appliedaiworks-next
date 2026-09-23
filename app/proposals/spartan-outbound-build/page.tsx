import type { Metadata } from "next";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import SignForm from "./SignForm";

export const metadata: Metadata = {
  title: "Outbound Build Proposal | Spartan Marketing | Applied AI Works",
  description: "Phase one outbound client acquisition build proposal for Spartan Marketing.",
  robots: { index: false, follow: false, nocache: true },
};

const Icon = ({ name, className = "", size = 20 }: { name: string; className?: string; size?: number }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontSize: `${size}px`, fontVariationSettings: "'FILL' 1" }}
    aria-hidden="true"
  >
    {name}
  </span>
);

const heard = [
  {
    tag: "Fit",
    title: "Fit has to be verified before anyone makes contact",
    body: "A company on Google Workspace can't become a client, so no sales time should go to it. Microsoft 365 companies stay on the list. Everyone else comes off before the first email.",
  },
  {
    tag: "Message",
    title: "Every first email needs a real finding to lead with",
    body: "Without something true and specific, it gets deleted like the rest. The plan is a real finding about each company's own email security, with a one-page report they can check themselves in thirty seconds.",
  },
  {
    tag: "Timing",
    title: "Almost no MSP tracks when a prospect can leave",
    body: "The program is built around capturing the renewal date on every account, so month thirteen produces more than month one.",
  },
  {
    tag: "Triggers",
    title: "Some events send a company shopping",
    body: "Their IT provider gets acquired, their IT person quits, a new CFO or COO starts, they move offices, or they grow past 15 people. Those accounts need to jump the queue.",
  },
  {
    tag: "Deliverability",
    title: "Outreach can't put the client's own email at risk",
    body: "Sending happens from separate, warmed-up lookalike domains, so the client's day-to-day email stays out of spam filters.",
  },
  {
    tag: "Scope",
    title: "The engine underneath is what's missing",
    body: "The client provides a dedicated caller and Spartan handles the messaging. What's left is the list, the verification, the infrastructure, and the tracking.",
  },
];

const stages = [
  { name: "Find", role: "Every company in 3 metros" },
  { name: "Verify", role: "Microsoft 365 or out" },
  { name: "Report", role: "Email security finding" },
  { name: "Reach", role: "Right people, warmed inboxes" },
  { name: "Track", role: "Renewal dates + triggers" },
];

const steps = [
  {
    icon: "checklist",
    title: "Build the account list",
    body: "Every company with 15 to 125 employees across the three metros, somewhere between 4,000 and 6,000 businesses, named and mapped by territory.",
  },
  {
    icon: "mark_email_read",
    title: "Check Microsoft 365",
    body: "A company's email settings are public. We read them for every company on the list. Google companies come off, so no sales time goes to them.",
  },
  {
    icon: "search",
    title: "Find the security problem",
    body: "The same lookup shows whether a company has protected its domain against forged email. We record exactly what's wrong and generate a one-page branded report for each company.",
  },
  {
    icon: "groups",
    title: "Find the decision-makers",
    body: "Two to three contacts per company across owner, finance, and operations. Companies this size don't have a CIO, so the IT vendor call usually sits with the CFO, controller, or operations lead.",
  },
  {
    icon: "schedule_send",
    title: "Set up safe sending",
    body: "Twelve inboxes on lookalike domains, authenticated and warmed for four weeks. Outreach never touches the client's own site or email.",
  },
  {
    icon: "event_repeat",
    title: "Track renewals and triggers",
    body: "Renewal date becomes a required field on every account. A weekly alert flags companies that just became worth calling, and a dashboard shows sends, replies, dates captured, and meetings set.",
  },
];

const deliverables = [
  "Account list: every company with 15 to 125 employees in the three metros, mapped by territory. Cost of the lists and data is covered by the client",
  "Microsoft 365 verification on every company, with Google Workspace companies removed",
  "Email security check on every company that stays, with a recorded finding",
  "One-page branded security report for each company, in plain language",
  "Two to three decision-maker contacts per company across owner, finance, and operations",
  "Twelve sending inboxes on lookalike domains, authenticated and warmed over four weeks",
  "CRM renewal tracking: required renewal-date field and the workflow that pulls accounts back into outreach",
  "Weekly trigger alerts: acquisitions, IT departures, new CFOs and COOs, office moves, growth past 15 employees",
  "Reporting dashboard: what went out, who replied, renewal dates captured, meetings set",
];

const coreIncludes = [
  "Account list: 4,000 to 6,000 companies across 3 metros, mapped by territory (list and data costs are paid by the client)",
  "Microsoft 365 verification on every company",
  "Email security check on every company that stays",
  "One-page branded security report generator",
  "2 to 3 decision-maker contacts per company",
  "12 inboxes on lookalike domains, authenticated and warmed for 4 weeks",
  "CRM setup with required renewal-date field and workflow",
  "Weekly trigger alerts",
  "Reporting dashboard",
];

const toolkitIncludes = [
  "Contract Exit Audit: the last day they can give notice before the contract renews",
  "Ownership Matrix: what they own versus what their provider owns and takes back",
  "Transition Timeline: a 90-day plan built backward from their notice deadline",
  "Bidder Question Set and Red Flag Checklist",
  "Proposal Comparison Worksheet",
  "Landing page, supporting search content, PDF download, and the form that captures who used it",
  "Five follow-up emails timed to each prospect's own deadline",
];

const platformCosts = [
  "Company lists and data enrichment for company and contact records",
  "LinkedIn Sales Navigator",
  "Sequencing software",
  "Sending domains and inboxes",
  "CRM seats",
];

const timeline = [
  { week: "Weeks 1-2", title: "Foundation", body: "Fit criteria agreed, company list built, sending domains purchased, and warmup started." },
  { week: "Weeks 3-4", title: "Verify + Find", body: "Every company checked for Microsoft 365 and email security problems, then contacts found at the ones that qualify." },
  { week: "Weeks 5-6", title: "Systems", body: "CRM and sending software set up, trigger alerts and dashboard built, Spartan's messaging and call guides loaded." },
  { week: "Weeks 7-8", title: "Approve + Launch", body: "Messaging approved, warmup finishes, first campaigns go live at low volume." },
];

const Check = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <Icon name="check_circle" className="text-brand-orange mt-0.5 shrink-0" size={18} />
    <p className="text-on-surface-variant text-sm leading-relaxed">{children}</p>
  </div>
);

export default function SpartanOutboundBuildProposal() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <Icon name="send" className="text-brand-orange" size={14} />
            Prepared for David Lillard, Spartan Marketing
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            An outbound engine that checks
            <br />
            <span className="text-kinetic">every company before anyone calls.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl">
            Phase one of the outbound program for a managed IT provider in three North Carolina
            metros. Here is what I&apos;d build, how it works, what it costs, and when it goes live.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-2xl p-6 neural-glow">
              <div className="text-xs text-on-surface-variant mb-2">Core build</div>
              <div className="font-headline text-3xl font-bold text-brand-orange mb-1">$21,200</div>
              <div className="text-sm text-on-surface-variant">fixed fee, half at kickoff</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Switching MSPs Toolkit</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">$7,400</div>
              <div className="text-sm text-on-surface-variant">optional add-on</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Timeline</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">8 weeks</div>
              <div className="text-sm text-on-surface-variant">to first campaigns live</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we heard */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">What I heard</h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            The client is a managed IT services provider that only sells to companies of 15 to 125
            employees running fully on Microsoft 365 and willing to hand their whole technology
            function to one provider. That is roughly 2,500 to 4,000 companies. The goal is to find
            all of them, confirm they fit before contact, and reach each one before their current IT
            arrangement comes up for review.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {heard.map((c) => (
              <div key={c.tag} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7">
                <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-3">{c.tag}</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{c.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why build this */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">Why build this</h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            These volumes come straight from the program model in Spartan&apos;s scope of work.
            Every one of them depends on the same foundation being in place first.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              ["4,000-6,000", "companies named, checked, and mapped", true],
              ["275", "accounts worked per month, each with its own report", false],
              ["7-10", "new clients projected across months 4 to 12", false],
            ].map(([n, l, hot]) => (
              <div
                key={String(n)}
                className={`bg-surface-container-low rounded-2xl p-6 ${
                  hot ? "border border-brand-orange/30 neural-glow" : "border border-outline-variant/20"
                }`}
              >
                <div className={`font-headline text-3xl font-bold mb-2 ${hot ? "text-brand-orange" : "text-on-surface"}`}>
                  {n}
                </div>
                <div className="text-sm text-on-surface-variant">{l}</div>
              </div>
            ))}
          </div>

          <p className="text-on-surface-variant leading-relaxed mb-4 max-w-2xl">
            The same table has about 33 replies, 6 meetings, and 3 proposals a month at full volume.
            Seven to ten new clients is the total across the nine months from month 4 on.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Here is what the build replaces. Checking 4,000 to 6,000 companies by hand for Microsoft
            365, then again for email security, then writing a custom report for each, is months of
            work for a person, and it would never get redone as companies change. Built as a
            system, it runs in the background, and each finding costs almost nothing to produce.
          </p>

          <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7 mb-6">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
              The renewal calendar keeps growing
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Every conversation records when a company can leave its current provider. That
              calendar is the one asset in the program a competitor can&apos;t copy by hiring a
              bigger sales team, and it is why month thirteen produces more than month one.
            </p>
          </div>

          <p className="text-on-surface leading-relaxed max-w-2xl font-medium">
            One new managed IT client is a multi-year relationship. The build is a one-time cost
            against a program designed to produce seven to ten of them in its first nine months at
            full volume.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">How it works</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Five stages, one engine. Each stage feeds the next. Companies that don&apos;t fit drop
            out early, so the client&apos;s caller only ever talks to accounts that already qualify.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3 mb-12">
            {stages.map((s, i) => (
              <div key={s.name} className="contents">
                <div className="bg-surface-container-low border border-outline-variant/10 border-t-2 border-t-brand-orange rounded-xl p-4 text-center">
                  <div className="font-headline font-bold text-on-surface mb-1">{s.name}</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wide leading-snug">{s.role}</div>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-brand-orange">
                    <Icon name="arrow_forward" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7 flex gap-5"
              >
                <div className="w-10 h-10 kinetic-gradient rounded-xl flex items-center justify-center shrink-0">
                  <Icon name={s.icon} className="text-white" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    {i + 1}. {s.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">What you walk away with</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            A working engine, the data behind it, and a tracking system that gets better every
            month. Campaign messaging and the call guides stay with Spartan. We load them into the
            sending software and CRM once approved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <Check key={d}>{d}</Check>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Investment</h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Fixed prices, invoiced by Applied AI Works, half at kickoff and half at go-live.
          </p>

          <div className="space-y-5">
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 neural-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-2">Core build</div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Core Outbound Build</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    Everything required to run outbound, from the first list to the tracking system.
                    Fixed scope, built over eight weeks.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="font-headline text-4xl font-bold text-brand-orange">$21,200</div>
                  <div className="text-sm text-on-surface-variant">$10,600 at kickoff / $10,600 at go-live</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {coreIncludes.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-2">Optional add-on</div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Switching MSPs Toolkit</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    A tool on the client&apos;s website that walks a company through leaving its
                    current IT provider. It works as the giveaway inside the campaigns, gives
                    referral partners something useful to hand over, and lets the client&apos;s team
                    walk a prospect through it live on a call. The thing that stops most buyers from
                    switching is fear of the transition, and this takes that fear away.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="font-headline text-4xl font-bold text-on-surface">$7,400</div>
                  <div className="text-sm text-on-surface-variant">$3,700 at kickoff / $3,700 at go-live</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {toolkitIncludes.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    Platform and data costs
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    As stated in the scope of work, these are paid directly by the client and are not
                    part of this fee. I recommend and set up each one, with no markup.
                  </p>
                </div>
                <div className="font-headline text-xl font-bold text-on-surface shrink-0">Client-paid</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {platformCosts.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">What this quote assumes</h2>
          <p className="text-on-surface-variant leading-relaxed mb-5 max-w-2xl">
            The scope of work says the client provides access to its CRM and existing prospect
            records, a do-not-contact list, and approval on messaging within five business days of
            submission. This quote depends on those, plus Spartan supplying the campaign messaging,
            call guides, and the copy for the Toolkit&apos;s page and emails.
          </p>
          <p className="text-on-surface-variant leading-relaxed max-w-2xl">
            It also depends on the enrichment and monitoring platforms returning the data fields we
            need, and on the client&apos;s CRM allowing a required renewal-date field. If anything
            turns out different once we&apos;re inside the accounts, we&apos;ll review scope and
            price together before any related work begins. No surprises.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Timeline</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Live at low volume in eight weeks, full volume by month 4. If the Toolkit is included,
            it gets built alongside the core work during weeks 4 to 10.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {timeline.map((t) => (
              <div key={t.week} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-2">{t.week}</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{t.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">Ready when you are</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto">
              Sign below and I&apos;ll reach out within one business day to get started. The first
              things I&apos;ll need are the fit criteria for the three metros and access to the
              client&apos;s CRM. If a piece of the scope looks wrong, say so and I&apos;ll redo the
              quote before anybody spends a dollar.
            </p>
            <ObfuscatedEmail className="text-brand-orange font-bold text-sm inline-flex items-center gap-2 hover:underline">
              Questions first? Email Josh
            </ObfuscatedEmail>
          </div>
          <SignForm />
          <p className="text-xs text-on-surface-variant text-center mt-8">
            Applied AI Works LLC &middot; Zeeland, MI &middot; Prepared for Spartan Marketing &middot;
            Valid 30 days
          </p>
        </div>
      </section>
    </>
  );
}
