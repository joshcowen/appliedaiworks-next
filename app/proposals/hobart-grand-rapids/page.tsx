import type { Metadata } from "next";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import SignForm from "./SignForm";

export const metadata: Metadata = {
  title: "Service Knowledge Search Proposal | Hobart Grand Rapids | Applied AI Works",
  description: "Phase one proposal for Hobart Sales and Service Grand Rapids.",
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
    tag: "Knowledge",
    title: "Carry your experienced techs' knowledge forward",
    body: "The know-how took years to build, and new hires start green. The goal is a tool that lets a new tech draw on all of it from day one, instead of learning it one truck roll at a time.",
  },
  {
    tag: "Data",
    title: "Put twenty years of service notes to work",
    body: "Every call has notes: oven not heating, found a bad pilot, checked operation. The history runs twenty-plus years at about 4,000 calls a year. The goal is to make all of it searchable.",
  },
  {
    tag: "Answers",
    title: "Answers at the machine",
    body: "Type in the model and the symptom and get back what usually fixes it, how often, and the actual service calls behind it. Something like: 60% of the time it was this pilot, and here are the calls.",
  },
  {
    tag: "Security",
    title: "Keep the service history safe",
    body: "Twenty years of equipment and customer records is the heart of the business, so protecting it comes first and shapes how everything is built.",
  },
  {
    tag: "Pace",
    title: "Start with a web page, add the app as it proves itself",
    body: "The CFO is budgeting this as a 2027 project. Crawl, walk, run: a tool the whole team can use soon, with the native phone app, dispatch help, and wearables as later phases.",
  },
  {
    tag: "Field notes",
    title: "Catch the best tips from the roundtable",
    body: "Techs share the one-in-a-million fixes at the weekly service meeting. Those meetings already run on Teams, so recording them and feeding them in is a small step.",
  },
];

const openItems = [
  {
    ask: "A sample of 5 to 10 service records, with customer names removed",
    why: "The tool is only as good as the technician notes, so one look at real notes settles the biggest unknown.",
    outcomes: [
      { when: "Typed sentences with real diagnostic detail", effect: "No change. $24,500 holds." },
      { when: "Short codes and abbreviations, or very different styles across the years", effect: "More cleanup work: +$3,000 to +$8,000." },
      { when: "Many notes nearly empty", effect: "We rescope together before any work begins, because the tool would have less to work with." },
    ],
  },
  {
    ask: "How the history comes out of Antec, and whether there is a live connection",
    why: "A spreadsheet export is enough for Phase 1. A live connection makes updates automatic.",
    outcomes: [
      { when: "Spreadsheet or file export, with nightly updates", effect: "No change." },
      { when: "A live connection (API) is available", effect: "No change, and updates happen as calls close." },
      { when: "No export, or Antec has to build the extract", effect: "+$2,000 to +$5,000, and the timeline moves with their schedule." },
    ],
  },
  {
    ask: "Whether the Hobart contractor agreement says anything about sending service data to outside software",
    why: "This is the one item that could change how the tool is built, so it is worth settling before anyone signs.",
    outcomes: [
      { when: "No restrictions", effect: "No change." },
      { when: "Needs sign-off from Hobart corporate", effect: "No change to price, plus the weeks that approval takes." },
      { when: "Data can't leave the building", effect: "A local-only setup, +$10,000 to +$20,000, with somewhat weaker answers." },
    ],
  },
  {
    ask: "Whether any records exist only on paper",
    why: "The 4,000 calls a year and 20-plus years of history cover what's in Antec today.",
    outcomes: [
      { when: "Paper-era records you'd like included", effect: "A separate scanning job, roughly $2,000 to $5,000. It is not part of this quote." },
    ],
  },
];

const stages = [
  { name: "Export", role: "Service history from Antec" },
  { name: "Clean", role: "Brands, models, parts, notes" },
  { name: "Search", role: "Model, symptom, error code" },
  { name: "Answer", role: "Cited service calls" },
  { name: "Grow", role: "Every new call added" },
];

const steps = [
  {
    icon: "download",
    title: "Get the data out of Antec",
    body: "Jimmy decides which fields matter and which are junk. We start with a sample of a few hundred records so everyone can see what the data looks like before the full build.",
  },
  {
    icon: "cleaning_services",
    title: "Clean and organize it",
    body: "Hobart GR works on every brand of commercial kitchen equipment, so the same oven shows up under five spellings. The cleanup standardizes brands, models, and part names and condenses long notes down to what matters.",
  },
  {
    icon: "manage_search",
    title: "Build the search",
    body: "A tech enters the equipment, model, and what it's doing. The tool finds the matching service calls across every brand and every year in the history.",
  },
  {
    icon: "forum",
    title: "Write the answer, with proof",
    body: "Claude reads the matching calls and writes a plain answer: the most common causes, how often each one turned out to be the problem, and links to the service calls that back it up. Every answer shows its sources, so a senior tech can check it in seconds.",
  },
  {
    icon: "phone_iphone",
    title: "Put it in every tech's pocket",
    body: "It runs in the phone's browser and installs to the home screen on iPhone and Android. Each person has a private login. Techs, dispatch, and the service manager can all use it.",
  },
  {
    icon: "sync",
    title: "Keep it current",
    body: "New service calls flow in automatically, either overnight or live if Antec offers a connection. What got fixed on Monday is searchable Tuesday.",
  },
];

const foundationIncludes = [
  "Discovery sessions with Jimmy, including a sample-data review before the full build",
  "Data cleanup and organization across all brands of equipment",
  "Search by equipment, model, serial, symptom, and error code",
  "Answers written by Claude with the service calls cited, so every claim can be checked",
  "Mobile-first web app that installs on iPhone and Android home screens",
  "Private logins for the technicians, dispatch, and service managers, with an access log",
  "Automatic updates as new service calls come in",
  "Hobart GR's YouTube troubleshooting videos indexed and searchable, plus links to the manuals techs already use (links only, no copies)",
  "Training session for the whole team and 30 days of tuning after launch",
  "Year 1 maintenance and support, included",
];

const completeAdds = [
  "Private on-site data box in the Grandville shop: the master copy of your service history lives in your building (hardware and setup included)",
  "Weekly field-notes workflow: record the service roundtable on Teams, drop in the file, and the useful technical content becomes searchable. Side talk gets filtered out",
  "Built for more than one shop: if other Hobart dealers want the same tool, I can add them as separate customers, each with their own private data and their own license.",
  "Dispatch-assist scoping session: how technician skills and van GPS could feed routing, with a written recommendation (planning, not a build)",
  "90-day success review: usage, time saved, what techs ask for that the data can't answer yet",
];

const pillLicense =
  "inline-flex items-center rounded-full border border-outline-variant/30 bg-surface-container-lowest px-3 py-1 text-xs font-medium text-on-surface-variant";

const mobileAdds = [
  "Phase 2 included: native iPhone and Android app with nameplate camera scan for model and serial, voice input for gloved hands, and offline access for walk-in coolers and dead zones",
  "Built right after Phase 1 goes live, on the same data and logins, so the techs move straight from the web app to the native app",
  "Apple's $99 a year and Google's $25 one-time developer fees are in Hobart GR's name and paid by Hobart GR",
];

const licenseRights =
  "This option is a license. Hobart GR can use the tool for its own business for as long as it likes. Applied AI Works keeps ownership of the code and the platform, and can offer the tool to other shops. Your service data always belongs to Hobart GR.";

const running = [
  { label: "Claude (Anthropic API)", value: "$30 to $90 / mo", note: "at about 1,000 questions a month" },
  { label: "Hosting and database", value: "$50 to $100 / mo", note: "paid directly to the provider" },
];

const nextPhases = [
  {
    tag: "Phase 2",
    title: "Native iPhone and Android app",
    range: "$18,000 to $26,000",
    body: "Camera scan of the equipment nameplate to fill in the model and serial, voice input for gloved hands, and offline access for walk-in coolers and dead zones. Apple's developer fee is $99 a year and Google's is $25 once, both in Hobart GR's name. Private distribution is planned, and store review adds two to three weeks. Native apps also need yearly maintenance, because iOS and Android both require updates every fall. That cost is quoted with Phase 2. Included in Option 3 above.",
  },
  {
    tag: "Phase 3",
    title: "Dispatch, wearables, and parts",
    range: "Scoped after Phase 1",
    body: "Technician skills and GPS feeding the dispatcher's decisions (with a person still in charge), live video help from the service manager to a tech on site, and parts quoting from the same history. These get a real number once Phase 1 shows what the data supports.",
  },
];

const timeline = [
  { week: "Weeks 1-2", title: "Discovery", body: "Fields agreed, Antec export in hand, sample data reviewed with Jimmy." },
  { week: "Weeks 3-4", title: "Clean + organize", body: "Full history cleaned and normalized across all brands. The searchable index is built." },
  { week: "Weeks 5-6", title: "Search + answers", body: "Search, cited answers, and the phone-friendly app go live for a small group of technicians." },
  { week: "Weeks 7-8", title: "Pilot + launch", body: "Real calls, real feedback, tuning. Team training, then the full shop goes live." },
];

const Check = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <Icon name="check_circle" className="text-brand-orange mt-0.5 shrink-0" size={18} />
    <p className="text-on-surface-variant text-sm leading-relaxed">{children}</p>
  </div>
);

export default function HobartGrandRapidsProposal() {
  return (
    <div className="proposal-light">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <Icon name="build" className="text-brand-orange" size={14} />
            Prepared for Jimmy Leach Jr., Hobart Sales and Service Grand Rapids
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Every service call you&apos;ve ever run,
            <br />
            <span className="text-kinetic">searchable from the truck.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl">
            Phase one of a service knowledge tool for Hobart Grand Rapids. It turns years of
            technician notes into answers a new hire can use on day one. Here is what I&apos;d
            build, how it works, what it costs, and what comes after.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-2xl p-6 neural-glow">
              <div className="text-xs text-on-surface-variant mb-2">Phase 1, starting at</div>
              <div className="font-headline text-3xl font-bold text-brand-orange mb-1">$24,500</div>
              <div className="text-sm text-on-surface-variant">three options, fixed price</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Year 1 support</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">Included</div>
              <div className="text-sm text-on-surface-variant">maintenance and updates</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6">
              <div className="text-xs text-on-surface-variant mb-2">Timeline</div>
              <div className="font-headline text-3xl font-bold text-on-surface mb-1">6 to 8 weeks</div>
              <div className="text-sm text-on-surface-variant">from the day the data arrives</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we heard */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">What I heard</h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Hobart Grand Rapids is a family-owned shop in Grandville with ten technicians covering
            Grand Rapids, Battle Creek, Kalamazoo, and the Tri-Cities, available around the clock,
            on every brand of commercial kitchen equipment. The goal is to move the experience of
            the people who are leaving into a tool that the people arriving can use.
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
            An experienced tech carries years of &quot;I&apos;ve seen this one before&quot; in
            their head. A new hire has to learn it the slow way, one truck roll at a time. This
            gives the new hire the shop&apos;s whole memory on day one.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              ["20+ years", "of service history, about 80,000 calls, searchable in seconds", true],
              ["15 min", "saved on each of 4,000 calls a year is about 1,000 hours", false],
              ["Day one", "a new hire gets answers that used to take years", false],
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

          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            The 15 minutes is an illustration, not a promise. Fifteen minutes on each of about
            4,000 calls a year is 1,000 hours, roughly twenty-five work weeks. The 90-day review in
            the Complete option measures the real number in your shop.
          </p>

          <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7 mb-6">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
              It gets better with every call
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Each new service call and each roundtable tip goes back in. A year from now the tool
              knows more than it does today, and the shop&apos;s knowledge stops depending on who
              happens to be standing in the parts room.
            </p>
          </div>

          <p className="text-on-surface leading-relaxed max-w-2xl font-medium">
            The AI works like a very well-read intern. It suggests, it shows its sources, and your
            people make the call. Your senior techs stay in charge of the answer.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">How it works</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Five stages, one tool. The data you already collect becomes the answer a tech needs at
            the machine.
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

      {/* Security */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Keeping it private</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Your service history is the most valuable thing in this project, so here is exactly how
            it is handled.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Check>Your data sits in its own encrypted database, separate from every other customer.</Check>
            <Check>Every person has their own login, and every search is logged.</Check>
            <Check>The page lives at a private address and isn&apos;t indexed or listed anywhere.</Check>
            <Check>
              Questions go to Anthropic&apos;s business API, which under its commercial terms is not
              used to train models. I&apos;ll confirm that in writing before launch.
            </Check>
          </div>
          <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
              About the on-site box
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              The Complete option adds a small computer in your shop that holds the master copy of
              your records. It keeps stored data in your building. Each answer still sends the
              relevant service notes to Anthropic to be read, so it is not a fully offline system.
              A fully offline version is possible on larger hardware, with noticeably weaker
              answers, and I would price it separately.
            </p>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Investment</h2>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Three fixed-price options. Foundation and Complete are paid half at kickoff, half at
            go-live. Year 1 maintenance and support is included in all three.
          </p>

          <div className="space-y-5">
            {/* Foundation */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">Option 1</span>
                    <span className={pillLicense}>License to use</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Foundation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    The working tool: your history cleaned, searchable, and answering questions on
                    every technician&apos;s phone.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="font-headline text-4xl font-bold text-on-surface">$24,500</div>
                  <div className="text-sm text-on-surface-variant">$12,250 at kickoff / $12,250 at go-live</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {foundationIncludes.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-5 pt-4 border-t border-outline-variant/20">
                <span className="text-on-surface font-medium">Rights:</span> {licenseRights}
              </p>
            </div>

            {/* Complete */}
            <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 neural-glow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">
                      Option 2 &middot; Recommended
                    </span>
                    <span className={pillLicense}>License to use</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Complete</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    Everything in Foundation, plus the pieces that protect the data, capture what
                    the roundtable knows, and set up what comes next.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="font-headline text-4xl font-bold text-brand-orange">$44,500</div>
                  <div className="text-sm text-on-surface-variant">$22,250 at kickoff / $22,250 at go-live</div>
                </div>
              </div>
              <div className="text-xs font-bold text-on-surface-variant tracking-wide uppercase mb-3">
                Everything in Foundation, plus
              </div>
              <div className="grid grid-cols-1 gap-3">
                {completeAdds.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-5 pt-4 border-t border-outline-variant/20">
                <span className="text-on-surface font-medium">Rights:</span> {licenseRights}
              </p>
            </div>

            {/* Complete + Mobile App */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">Option 3</span>
                    <span className={pillLicense}>License to use</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
                    Complete + Mobile App
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                    Complete, with Phase 2 built in: the native app your techs use in the field,
                    delivered right after Phase 1 at a bundled price.
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="font-headline text-4xl font-bold text-on-surface">$64,500</div>
                  <div className="text-sm text-on-surface-variant">
                    $22,250 at kickoff / $22,250 at go-live / $20,000 at app launch
                  </div>
                </div>
              </div>
              <div className="text-xs font-bold text-on-surface-variant tracking-wide uppercase mb-3">
                Everything in Complete, plus
              </div>
              <div className="grid grid-cols-1 gap-3">
                {mobileAdds.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-5 pt-4 border-t border-outline-variant/20">
                <span className="text-on-surface font-medium">Rights:</span> {licenseRights}
              </p>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed px-2">
              <span className="text-on-surface font-medium">Want to own the code outright?</span>{" "}
              Ownership of the source code, cleaned data, and accounts is available on request and
              priced separately.
            </p>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-7 mt-5">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Referral credit</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              If you introduce another Hobart dealer who becomes a customer, you receive one year of
              your own maintenance and support free: $6,600 on Complete, $4,800 on Foundation. It is
              applied to your next renewal once that dealer pays its go-live invoice, and each
              dealer you introduce earns another year. The terms go in writing before anyone is
              approached.
            </p>
          </div>

          {/* Running costs and support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                What it costs to run
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Paid directly by Hobart GR to each provider. No markup. For a ten-tech shop, I expect
                about $100 to $200 a month in total.
              </p>
              <div className="space-y-3">
                {running.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <div>
                      <div className="text-on-surface font-medium">{r.label}</div>
                      <div className="text-xs text-on-surface-variant">{r.note}</div>
                    </div>
                    <div className="font-headline font-bold text-on-surface shrink-0">{r.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-4">
                Hobart GR opens its own Anthropic API account on the company card. No Claude
                subscription is needed. Anthropic bills API use from prepaid credits, so you pay only
                for what the tool actually uses.
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-3">
                <span className="text-on-surface font-medium">No surprise bills:</span> I can set a
                monthly spending cap on the account. If the cap is ever reached, the tool pauses
                until the next month or until you raise it, so I&apos;d set it comfortably above the
                expected cost.
              </p>
            </div>

            <div className="bg-surface-container-low border-l-2 border-primary rounded-r-2xl p-7">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                Maintenance and support
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                The first year is included in every option, a $4,800 value. It covers monitoring,
                moving to newer Claude models when they&apos;re worth it, keeping the Antec sync
                healthy, and four hours a month of changes and requests.
              </p>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <div className="text-on-surface font-medium">Year 2 and later: Foundation</div>
                <div className="font-headline font-bold text-on-surface">$4,800 / yr</div>
              </div>
              <div className="flex items-baseline justify-between gap-4 text-sm mt-2">
                <div className="text-on-surface font-medium">
                  Year 2 and later: Complete, and Complete + Mobile App
                  <div className="text-xs text-on-surface-variant font-normal">includes the on-site box; native app upkeep is quoted before the app build</div>
                </div>
                <div className="font-headline font-bold text-on-surface shrink-0">$6,600 / yr</div>
              </div>
            </div>

            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/20 rounded-2xl p-7">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                If you skip renewal
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                The tool does not switch off, and your data
                stays yours. What stops is everything that keeps it healthy. Here is what can
                happen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <Check>
                  Monitoring and fixes stop. If hosting or a software update breaks something, it
                  stays broken until someone repairs it.
                </Check>
                <Check>
                  Claude models get retired on a schedule. When the one your tool uses is retired,
                  answers stop until it is moved to a newer model.
                </Check>
                <Check>
                  New service calls can stop flowing in if Antec changes how it exports data.
                </Check>
                <Check>
                  The four hours a month of changes and requests end. No new features or tuning.
                </Check>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                You can bring support back whenever you like, and I&apos;ll check the system over
                first. One-off fixes in between are billed at $300 an hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">What comes after Phase 1</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            None of this is part of the quote above. It is here so you can plan the budget and see
            where Phase 1 leads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nextPhases.map((p) => (
              <div key={p.tag} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-7">
                <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-3">{p.tag}</div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{p.title}</h3>
                <div className="font-headline text-xl font-bold text-on-surface mb-3">{p.range}</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assumptions and open items */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">
            What I still need, and what it changes
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-5 max-w-2xl">
            The prices above assume the history comes out of Antec as a spreadsheet at minimum, the
            notes are readable, and nothing in the Hobart contractor agreement stands in the way.
            Four things are still open. Here is what each answer does to the number, so there are no
            surprises.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Good news first: your numbers (20-plus years, about 4,000 calls a year, roughly 80,000
            calls in total) make this a manageable, well-sized dataset.
          </p>

          <div className="space-y-5 mb-10">
            {openItems.map((item) => (
              <div
                key={item.ask}
                className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-7"
              >
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{item.ask}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{item.why}</p>
                <div className="space-y-3">
                  {item.outcomes.map((o) => (
                    <div
                      key={o.when}
                      className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-1 md:gap-6 border-t border-outline-variant/20 pt-3"
                    >
                      <div className="text-sm text-on-surface-variant">{o.when}</div>
                      <div className="text-sm font-medium text-on-surface">{o.effect}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-on-surface-variant leading-relaxed mb-5 max-w-2xl">
            Most likely, the price stays where it is. I would like to review the sample records
            before you sign, so the number you approve is the number you pay.
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-5 max-w-2xl">
            The Hobart service manual portal is password-protected and limited to trained
            technicians, so this quote does not copy or scrape it. The tool links to it instead.
          </p>
          <p className="text-on-surface-variant leading-relaxed max-w-2xl">
            If the data turns out different once we&apos;re inside it, I&apos;ll review scope and
            price with you before any related work begins.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Timeline</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Six to eight weeks from the day the data export arrives. The calendar depends mostly on
            how fast the export comes out of Antec.
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
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">Ready when you are</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto">
              Pick an option and approve the quote below. I&apos;ll reach out within one business day
              with a services agreement that covers licensing, data, and the details, and to start
              the data conversation. If a piece of the scope looks wrong, say so
              and I&apos;ll redo the quote before anybody spends a dollar.
            </p>
            <ObfuscatedEmail className="text-brand-orange font-bold text-sm inline-flex items-center gap-2 hover:underline">
              Questions first? Email Josh
            </ObfuscatedEmail>
          </div>
          <SignForm />
          <p className="text-xs text-on-surface-variant text-center mt-8">
            Applied AI Works LLC &middot; Zeeland, MI &middot; Prepared for Hobart Sales and Service
            Grand Rapids &middot; Valid 30 days
          </p>
        </div>
      </section>
    </div>
  );
}
