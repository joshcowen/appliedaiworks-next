import type { Metadata } from "next";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import HoursTable from "@/components/HoursTable";
import { Row, RATE, sumRows, money } from "@/lib/hours";

export const metadata: Metadata = {
  title: "AI Receptionist Proposal — Envizion IT | Applied AI Works",
  description:
    "Hours forecast and scope for replacing the AnswerForce virtual receptionist with an AI receptionist at Envizion IT.",
  robots: { index: false, follow: false },
};

const stage1: Row[] = [
  {
    task: "Platform setup, phone number, routing into your existing forward",
    low: 2,
    high: 2,
    detail:
      "Standing up the voice platform, provisioning a number, and pointing your existing AnswerForce forward at it instead. Includes a rollback path, so if anything looks wrong on day one you are back on AnswerForce in about five minutes.",
  },
  {
    task: "Agent design: greeting, persona, capturing what the caller volunteers",
    low: 2,
    high: 3,
    detail:
      "Writing how it talks. One consistent name, an Envizion greeting with no call-center disclaimer, and the logic that hears “this is Karen from Dr. Sterenberg’s office” and files both facts instead of asking for them again thirty seconds later.",
  },
  {
    task: "Call routing: sales, support, specific person, everything else",
    low: 1,
    high: 2,
    detail:
      "The four branches already in your AnswerForce script. Working out which one the caller needs from how they open the call, and handling the ones who don’t fit neatly, without pushing anybody through a phone menu.",
  },
  {
    task: "Urgency judgment mapped to your four SLA tiers",
    low: 2,
    high: 3,
    detail:
      "Teaching it urgent, high, normal, and low the way your team actually applies them, including how many users are affected. Also covers the Call 2 case: an existing normal ticket that needs to be bumped up because the customer says it can’t wait eight hours.",
  },
  {
    task: "Warm transfer and escalation through your existing calling groups",
    low: 3,
    high: 4,
    detail:
      "Dialing Techs & Admins Urgent first, then All Envizion Urgent, retrying the way your script does today, and preserving the caller ID so whoever picks up can see which level it escalated from. Falls back to a ticket if the tree runs all the way out.",
  },
  {
    task: "After-hours path, including relay mode",
    low: 1,
    high: 2,
    detail:
      "The second page of your call flow. Afthours 1, then Afterhours 2, and relay mode where the caller hangs up and the tech calls them back rather than holding the line open.",
  },
  {
    task: "Ticket email into Support@EnvizionIT.com",
    low: 1,
    high: 1,
    detail:
      "Formatting the non-urgent ticket exactly the way Zendesk already expects it, so nothing changes on your side. Caller, company, callback number, and a clean summary of the problem in the customer’s own words rather than a form field.",
  },
  {
    task: "Call logging, transcripts, and summaries",
    low: 1,
    high: 2,
    detail:
      "Every call recorded, transcribed, and summarized somewhere you can search it. This is also what shows you when the agent got something wrong, which is what the tuning hours below actually run on.",
  },
  {
    task: "Testing and tuning against real call scenarios",
    low: 4,
    high: 6,
    detail:
      "The biggest line, and the one that does not get faster with AI. Forty to sixty test calls across every branch, urgent and normal, business hours and after hours, each one listened to and adjusted. A voice system can only be judged by ear, in real time, one call at a time.",
  },
  {
    task: "Documentation and handoff",
    low: 1,
    high: 1,
    detail:
      "Written docs on how it is wired, how to change the greeting or the escalation order yourself, and how to fall back to AnswerForce. Plus a walkthrough with whoever on your team ends up owning it.",
  },
];

const stage2: Row[] = [
  {
    task: "Zendesk API: contact lookup and open tickets",
    low: 2,
    high: 3,
    detail:
      "Reading Zendesk so the agent knows the caller has a ticket open before they bring it up. Read-only access to users and tickets. Nothing writes to or changes an existing record.",
  },
  {
    task: "Your PSA: organization, VIP contact, account data",
    low: 2,
    high: 3,
    detail:
      "The same lookup against the system you built, for company, VIP contacts, and account context. This is the one line that moves at whatever pace you can expose an endpoint, which is why it is listed as your side of the work.",
  },
  {
    task: "Caller ID matching, with spoken name and company as fallback",
    low: 2,
    high: 2,
    detail:
      "Matching the incoming number to a person before the agent says a word. When the number is unknown, or somebody calls from a cell phone, it asks once and matches on name and company instead.",
  },
  {
    task: "Conversation changes so the agent uses that context naturally",
    low: 1,
    high: 2,
    detail:
      "Knowing who somebody is and sounding like you know them are two different problems. This is the difference between reciting an account number back at them and just saying “hi Kelly, is this about the network drive?”",
  },
  {
    task: "Context summary pushed to the tech on transfer",
    low: 1,
    high: 2,
    detail:
      "Instead of Cody getting a forty-second verbal briefing like he did on Call 2, the account, contact, ticket history, and issue land in front of him as the call connects.",
  },
  {
    task: "Testing and tuning",
    low: 3,
    high: 4,
    detail:
      "Same as Stage 1, and it still does not compress. Verifying the lookups hit correctly, and making sure a wrong match or a missing record degrades gracefully instead of the agent confidently calling somebody by the wrong name.",
  },
];

const s1 = sumRows(stage1);
const s2 = sumRows(stage2);

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

      {/* What this is worth */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">
            What this is actually worth
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-4 max-w-2xl">
            Here is the honest problem with putting a number on this. Call 3 ended with no name, no
            message, and no ticket. It is not in Zendesk and it is not in your PSA. You have no
            record it happened.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            So the front door cannot be measured today. Not because nobody has run the math, but
            because the system throws away the evidence every time it fails.
          </p>

          <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 mb-10 neural-glow">
            <div className="text-xs text-on-surface-variant mb-2 uppercase tracking-wide font-bold">
              The one number we can prove
            </div>
            <div className="font-headline text-4xl md:text-5xl font-bold text-brand-orange mb-4">
              $1,560 a year
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
              AnswerForce bills by the minute. Across the three recordings, roughly 39% of Call 1 was
              dead air while the agent typed into a form. At about 190 minutes a month, that is
              somewhere near 74 minutes a month you are paying for silence. Not slow service.
              Nothing at all.
            </p>
          </div>

          <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
            The rest of it is simpler than a model. A client at 25 to 50 users is worth real
            recurring money to you. This project is not.
          </p>

          <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left py-3 pr-4 font-medium text-on-surface-variant">
                    If one client bills
                  </th>
                  <th className="text-left py-3 pl-4 font-medium text-on-surface-variant">
                    Stage 1 costs about
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["$1,500 / month", "4 months of that one client"],
                  ["$3,000 / month", "2 months of that one client"],
                  ["$5,000 / month", "6 weeks of that one client"],
                ].map(([a, b]) => (
                  <tr key={a} className="border-b border-outline-variant/10 last:border-0">
                    <td className="py-3 pr-4 text-on-surface tabular-nums whitespace-nowrap">{a}</td>
                    <td className="py-3 pl-4 text-on-surface-variant">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-on-surface-variant mt-5">
              Illustrative figures, since I don&apos;t have your real ones. Substitute them and the
              conclusion doesn&apos;t move.
            </p>
          </div>

          <p className="text-on-surface-variant leading-relaxed mb-4 max-w-2xl">
            These relationships run five years and up. At $3,000 a month, one client is worth around
            $180,000 across that stretch. Stage 1 is about 3% of one client.
          </p>
          <p className="text-on-surface leading-relaxed mb-10 max-w-2xl font-medium">
            Which means this does not have to be impressive. It has to be better than a stranger
            reading a script. If it protects one relationship, one time, it has paid for itself
            several times over.
          </p>

          <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
              And you stop flying blind
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              About 1,200 calls a year go into AnswerForce and come back out as nothing you can
              query. When I asked how often the urgent call tree runs all the way to the end, there
              was no way to find out.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              After Stage 1, every call has a recording, a transcript, a summary, and a
              classification. You get the urgent versus normal mix, the after-hours load, and how
              often the urgent tree actually runs out. You built your own PSA because you wanted
              your data in one place. This is the last part of the business still running on somebody else&apos;s
              clipboard.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 1 */}
      <section className="py-20 bg-surface-container-lowest">
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

          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Hours forecast</h3>
          <p className="text-on-surface-variant text-xs mb-5">
            Hover or tap any line to see what that work actually involves.
          </p>
          <HoursTable rows={stage1} />

          <div className="mt-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              <span className="text-on-surface font-medium">On safety:</span> when the agent is
              not sure how urgent a call is, it treats it as urgent. That means a tech occasionally
              gets pulled in for something that turns out to be routine. That is the right trade,
              because a false alarm costs somebody two minutes and a missed outage costs you an SLA
              and a hard phone call.
            </p>
          </div>
        </div>
      </section>

      {/* Stage 2 */}
      <section className="py-20">
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

          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Hours forecast</h3>
          <p className="text-on-surface-variant text-xs mb-5">
            Hover or tap any line to see what that work actually involves.
          </p>
          <HoursTable rows={stage2} />
        </div>
      </section>

      {/* Optional demo */}
      <section className="py-20 bg-surface-container-lowest">
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
      <section className="py-20">
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
      <section className="py-20 bg-surface-container-lowest">
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
      <section className="py-20">
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
      <section className="py-24 bg-surface-container-lowest">
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
