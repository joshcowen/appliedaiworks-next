import type { Metadata } from "next";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "AI Receptionist Proposal — Envizion IT | Applied AI Works",
  description:
    "Hours forecast and scope for replacing the AnswerForce virtual receptionist with an AI receptionist at Envizion IT.",
  robots: { index: false, follow: false },
};

const RATE = 300;

type Row = { task: string; low: number; high: number };

const stage1: Row[] = [
  { task: "Platform setup, phone number, routing into your existing forward", low: 2, high: 3 },
  { task: "Agent design: greeting, persona, capturing what the caller volunteers", low: 3, high: 4 },
  { task: "Call routing: sales, support, specific person, everything else", low: 2, high: 3 },
  { task: "Urgency judgment mapped to your four SLA tiers", low: 3, high: 4 },
  { task: "Warm transfer and escalation through your existing calling groups", low: 4, high: 6 },
  { task: "After-hours path, including relay mode", low: 2, high: 3 },
  { task: "Ticket email into Support@EnvizionIT.com", low: 1, high: 2 },
  { task: "Call logging, transcripts, and summaries", low: 2, high: 3 },
  { task: "Testing and tuning against real call scenarios", low: 3, high: 4 },
  { task: "Documentation and handoff", low: 2, high: 2 },
];

const stage2: Row[] = [
  { task: "Zendesk API: contact lookup and open tickets", low: 4, high: 5 },
  { task: "Your PSA: organization, VIP contact, account data", low: 4, high: 5 },
  { task: "Caller ID matching, with spoken name and company as fallback", low: 2, high: 3 },
  { task: "Conversation changes so the agent uses that context naturally", low: 2, high: 3 },
  { task: "Context summary pushed to the tech on transfer", low: 2, high: 3 },
  { task: "Testing and tuning", low: 2, high: 3 },
];

const sum = (rows: Row[]) =>
  rows.reduce((a, r) => ({ low: a.low + r.low, high: a.high + r.high }), { low: 0, high: 0 });

const money = (h: number) => `$${(h * RATE).toLocaleString()}`;

const s1 = sum(stage1);
const s2 = sum(stage2);

function HoursTable({ rows, total }: { rows: Row[]; total: { low: number; high: number } }) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-outline-variant/30">
            <th className="text-left py-3 pr-4 font-medium text-on-surface-variant">Work</th>
            <th className="text-right py-3 px-3 font-medium text-on-surface-variant whitespace-nowrap">Low</th>
            <th className="text-right py-3 pl-3 font-medium text-on-surface-variant whitespace-nowrap">High</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.task} className="border-b border-outline-variant/10">
              <td className="py-3 pr-4 text-on-surface-variant leading-relaxed">{r.task}</td>
              <td className="py-3 px-3 text-right text-on-surface tabular-nums">{r.low}</td>
              <td className="py-3 pl-3 text-right text-on-surface tabular-nums">{r.high}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-brand-orange/40">
            <td className="py-4 pr-4 font-headline font-bold text-on-surface">Total hours</td>
            <td className="py-4 px-3 text-right font-headline font-bold text-brand-orange tabular-nums text-lg">
              {total.low}
            </td>
            <td className="py-4 pl-3 text-right font-headline font-bold text-brand-orange tabular-nums text-lg">
              {total.high}
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 text-on-surface-variant">At ${RATE}/hour</td>
            <td className="py-2 px-3 text-right text-on-surface tabular-nums whitespace-nowrap">{money(total.low)}</td>
            <td className="py-2 pl-3 text-right text-on-surface tabular-nums whitespace-nowrap">{money(total.high)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function EnvizionProposalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>
              support_agent
            </span>
            Prepared for Mark Veldhoff, Envizion IT
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            An AI receptionist that
            <br />
            <span className="text-kinetic">already knows who&apos;s calling.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl">
            You sent me three AnswerForce recordings, the call script, and your call flow. I went
            through all of it. Here is what I found, what I&apos;d build, and an honest forecast of the
            hours it takes to get there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-2xl p-6 neural-glow">
              <div className="text-xs text-on-surface-variant mb-2">Stage 1 forecast</div>
              <div className="font-headline text-3xl font-bold text-brand-orange mb-1">
                {s1.low}&ndash;{s1.high} hrs
              </div>
              <div className="text-sm text-on-surface-variant">
                {money(s1.low)} to {money(s1.high)}
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Stage 2 forecast</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">
                {s2.low}&ndash;{s2.high} hrs
              </div>
              <div className="text-sm text-on-surface-variant">
                {money(s2.low)} to {money(s2.high)}
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Rate</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">${RATE}</div>
              <div className="text-sm text-on-surface-variant">per hour, billed as worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* What I found */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            What I found in your recordings
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            I transcribed all three calls. Average handle time was 1 minute 54 seconds. Every one of
            them opens with the receptionist announcing they are an outsourced virtual receptionist,
            and each call had a different agent. Here is what happened on each.
          </p>

          <div className="space-y-5">
            {[
              {
                tag: "Call 1",
                meta: "Aug 10, 3:15 PM · 1:55",
                title: "The caller answered the questions before they were asked",
                body:
                  "Karen says “this is Karen calling from Dr. Sterenberg’s office” eleven seconds in. The script asks for her name again at 38 seconds and her company at 54 seconds. She has to spell her last name out loud. There are four separate gaps of 10 to 13 seconds of dead air while the agent types into a form, roughly 45 of the 115 seconds. Then: “you are an existing client, right?”",
              },
              {
                tag: "Call 2",
                meta: "Aug 10, 8:53 AM · 2:54",
                title: "A customer had to argue for two minutes to get an SLA moved up",
                body:
                  "Kelly at Rockford Package Supply opens with “it says a technician will call me within eight hours, but it is urgent and I need that moved up.” Two minutes and five seconds pass before the transfer even starts. The agent misses the last name three times, spells the company back wrong, and garbles the callback number. Every fact collected in those two minutes was already in Zendesk.",
              },
              {
                tag: "Call 3",
                meta: "Aug 8, 3:15 PM · 0:54",
                title: "Somebody tried to reach you and left no trace",
                body:
                  "The caller asks for Mike Crenshaw, then asks a direct question: can I leave a voicemail? The agent ignores it and reads the next scripted line. The answer arrives 22 seconds later, after the caller has already given up and said they’ll email instead. No name was collected. No message was taken. Nothing was logged. You have no record that this call happened.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">
                    {c.tag}
                  </span>
                  <span className="text-xs text-on-surface-variant">{c.meta}</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{c.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-surface-container-low border-l-2 border-brand-orange rounded-r-2xl p-7">
            <p className="text-on-surface-variant leading-relaxed text-sm">
              One more thing worth knowing. AnswerForce bills by the minute, with published plans
              around $349 for 200 minutes and overage at $2.00 a minute. At roughly 100 calls a
              month and a 1:54 average, you are using about 190 of those 200 minutes and sitting
              right on the ceiling. Which means the dead air while someone types is billed at about
              $1.75 a minute. Their model pays them more when the call takes longer. That is the
              opposite of how you sell IT.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 1 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange tracking-wide uppercase mb-4">
            Stage 1
          </div>
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            Replace AnswerForce
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            The AI answers the call that today forwards to AnswerForce, and transfers into the same
            calling groups you already have. Nothing about your phone system changes. Non-urgent
            tickets still arrive as an email to Support@EnvizionIT.com, exactly like they do now,
            so Zendesk behaves the same on day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {[
              "Answers as Envizion, with one consistent name and no call-center disclaimer",
              "Takes what the caller volunteers instead of re-asking for it",
              "Sorts sales, support, a specific person, and everything else",
              "Judges urgency against your four SLA tiers",
              "Warm transfers through Techs &amp; Admins, then All Envizion, with retries",
              "Runs the after-hours groups and relay mode",
              "Opens non-urgent tickets by email to Support@EnvizionIT.com",
              "Logs every call with a recording, transcript, and summary",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-brand-orange mt-0.5"
                  style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <p
                  className="text-on-surface-variant text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>

          <h3 className="font-headline text-xl font-bold text-on-surface mb-5">Hours forecast</h3>
          <HoursTable rows={stage1} total={s1} />

          <div className="mt-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              <span className="text-on-surface font-medium">On safety:</span> when the agent
              is not confident about urgency, it escalates as urgent. That costs a few
              unnecessary pages and protects the SLA. I would rather wake somebody up than miss a
              real outage.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 2 */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange tracking-wide uppercase mb-4">
            Stage 2
          </div>
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            Make it know who&apos;s calling
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            This is the part you described as ideal. The agent matches the caller ID against Zendesk
            and your PSA before it says a word, so the call opens with &ldquo;Hi Kelly, this is
            Envizion, I see you have an open ticket on the network drive.&rdquo; When it transfers,
            the tech gets the account, the contact, and the ticket history instead of a verbal
            briefing.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl text-sm">
            Worth doing after Stage 1 is live and tuned, not alongside it. Getting the conversation
            right first makes this part faster.
          </p>

          <h3 className="font-headline text-xl font-bold text-on-surface mb-5">Hours forecast</h3>
          <HoursTable rows={stage2} total={s2} />
        </div>
      </section>

      {/* Optional demo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 md:p-10 neural-glow">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange tracking-wide uppercase mb-4">
              Optional first step
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4">
              Hear it before you commit
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              If you want proof before signing off on the full build, I&apos;ll stand up a working
              agent that handles Karen&apos;s call from Call 1. You call a real number from your cell
              phone and we play it back to back with the AnswerForce recording. Same call, about 25
              seconds instead of 115, and nobody spells their name.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">
              None of it is wasted if you move forward. The conversation design is the foundation of
              Stage 1, so those hours come off the Stage 1 forecast rather than adding to it.
            </p>
            <div className="flex items-baseline gap-3">
              <div className="font-headline text-3xl font-bold text-brand-orange">2&ndash;3 hrs</div>
              <div className="text-on-surface-variant text-sm">$600 to $900</div>
            </div>
          </div>
        </div>
      </section>

      {/* How I bill */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">How this is billed</h2>

          <div className="space-y-5">
            {[
              {
                icon: "schedule",
                title: "Time and materials at $300 an hour",
                body:
                  "You pay for hours worked, not a padded fixed fee. The ranges above are a forecast, the same way you forecast IT labor for your own clients. If the work runs clean, you pay the low end.",
              },
              {
                icon: "flag",
                title: "I flag before I pass the top of the range",
                body:
                  "If something turns out harder than it looks, you hear about it before the hours get spent, not on the invoice. Nothing above the high number happens without you saying yes to it first.",
              },
              {
                icon: "receipt_long",
                title: "Invoiced every two weeks with an itemized log",
                body:
                  "You see what was worked on and how long it took. No minimum, no retainer, no lock-in.",
              },
              {
                icon: "trending_down",
                title: "Ongoing support trends toward zero",
                body:
                  "Platform costs run about $40 to $70 a month and get passed through at cost. Tuning is billed hourly, usually one to two hours a month early on, dropping off as the agent settles. The goal is the same one you have with your own clients: spend less time on it every month.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7 flex gap-5"
              >
                <div className="w-10 h-10 kinetic-gradient rounded-xl flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I need */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            What I need from Envizion
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Short list, and most of it you already have. The forecast assumes these show up in the
            first week.
          </p>
          <div className="space-y-3">
            {[
              "Your current AnswerForce plan and monthly cost, so the comparison is real instead of estimated",
              "A 90-day AnswerForce message log export, which tells us how often the urgent call tree runs all the way out",
              "Access to point the existing forward at a new number when we go live",
              "For Stage 2: an endpoint on your PSA that takes a phone number or domain and returns organization, contact, VIP status, and open ticket IDs",
              "A Zendesk API token with read access to users and tickets",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary mt-0.5"
                  style={{ fontSize: "18px" }}
                >
                  arrow_right
                </span>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Since you built the PSA yourself, Stage 2 has no vendor limits and no API tier to
              negotiate. It does mean that piece moves at whatever pace you can expose the endpoint,
              so I&apos;ve scoped it as your side of the work rather than building the forecast around
              guessing at it.
            </p>
          </div>
        </div>
      </section>

      {/* Where this goes */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">Where this goes</h2>
          <p className="text-on-surface-variant leading-relaxed mb-5 max-w-2xl">
            You have 90 clients who are 25 to 50 person West Michigan companies, and a fair number of
            them have the same front-door problem you do. Once this is running and proven on your own
            phone, it is a thing Envizion could offer them.
          </p>
          <p className="text-on-surface-variant leading-relaxed max-w-2xl">
            That is not part of this proposal and I am not pricing it here. It is worth knowing while
            you decide, because it changes what Stage 1 actually is. Not just a receptionist fix, but
            the first working version of something you could sell.
          </p>
        </div>
      </section>

      {/* Next step */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 md:p-12 text-center neural-glow">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">
              Ready when you are
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto">
              Reply with a yes on Stage 1, or tell me you want the demo first. Either one starts
              this week. If a piece of the scope looks wrong to you, say so and I&apos;ll redo the
              forecast before anybody spends a dollar.
            </p>
            <ObfuscatedEmail className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform">
              Email Josh to get started
            </ObfuscatedEmail>
            <p className="text-xs text-on-surface-variant mt-8">
              Applied AI Works LLC &middot; Zeeland, MI &middot; Prepared for Envizion IT &middot;
              Valid 30 days
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
