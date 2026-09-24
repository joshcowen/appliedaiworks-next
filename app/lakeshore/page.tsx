import type { Metadata } from "next";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Automation for Lakeshore Business Connections",
  description:
    "An offer for Lakeshore Business Connections members. Notice what eats your week, meet for thirty minutes, and get one task automated off your plate for good.",
  // Unlisted on purpose. Shared by link inside the group, kept out of the nav
  // and sitemap so strangers do not find it looking for free work.
  robots: { index: false, follow: false, nocache: true },
};

// Framed as the problem the owner recognizes, not the tool that solves it.
// Every one of these is genuinely buildable inside the two-hour box.
const menu = [
  {
    icon: "send",
    title: "Follow-up that happens without you",
    body: "Someone asks for a quote. Three messages go out over the next week whether you remembered or not, and they stop the moment the person replies.",
  },
  {
    icon: "phone_missed",
    title: "Missed calls that text back",
    body: "A call goes unanswered and the caller gets a text inside a minute asking what they need. Most people will answer a text at 7pm. Almost nobody calls back twice.",
  },
  {
    icon: "hub",
    title: "Forms that go where they should",
    body: "A website form fills your spreadsheet, creates the record, and pings you. Nobody copies anything from one screen into another.",
  },
  {
    icon: "rate_review",
    title: "Review requests on autopilot",
    body: "The job finishes and the ask goes out on its own. Most customers would leave a review if somebody asked at the right moment, and nobody ever does.",
  },
  {
    icon: "event",
    title: "Reminders that cut no-shows",
    body: "A text and an email before the appointment. This one is boring and it pays for itself faster than anything else on this list.",
  },
  {
    icon: "summarize",
    title: "The weekly number, emailed to you",
    body: "Whatever you go pull up and check every Monday morning. It arrives instead, already assembled, before you sit down.",
  },
  {
    icon: "description",
    title: "Documents that fill themselves in",
    body: "Answer a short form, get back a finished proposal, contract, or quote with the details already in the right places.",
  },
  {
    icon: "chat",
    title: "An assistant that knows your business",
    body: "A custom AI trained on how you write and what you actually sell, so the draft it hands you sounds like you instead of like a robot.",
  },
  {
    icon: "repeat",
    title: "Two systems that finally talk",
    body: "The thing that lives in one place and has to end up in another place, moving by itself instead of by you.",
  },
];

const prompts = [
  "What did you do this week that made you think there has to be a better way to do this?",
  "What do you copy out of one place and retype into another?",
  "What only happens because you remembered it?",
  "What does somebody on your payroll spend time on that they are overqualified for?",
  "What do you put off all week and then do badly at 6pm on Friday?",
];

export default function LakeshorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}>handshake</span>
              For Lakeshore Business Connections
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
              Pick one thing you hate doing.<br />
              <span className="text-kinetic">I&apos;ll automate it. Free.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-2xl">
              Spend a week noticing what eats your time. We meet for thirty minutes. Then I build something that takes that task off your plate and keeps it off. No cost, no catch, one per business.
            </p>
            <Link
              href="#start"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              How to claim yours
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
            The work nobody decided to do
          </h2>
          <div className="space-y-5 text-on-surface-variant leading-relaxed">
            <p>
              Every business has a layer of work that just accumulated. Somebody retypes an address out of an email into the scheduling system. The follow-up goes out when you remember it, which is not always. That same message you have written forty times this month gets written a forty-first time.
            </p>
            <p>
              None of it makes the to-do list, because none of it is a project. It is just Tuesday.
            </p>
            <p>
              And it costs you in a way that never shows up on an invoice. There is no line item for it. There is a person on your payroll doing work they are overqualified for, or an evening you spent catching up on something a computer would have done at 2am for free.
            </p>
            <p>
              Most owners know exactly which task this is for them. They have just never had a reason to stop and deal with it.
            </p>
          </div>
        </div>
      </section>

      {/* The plan */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">Three steps, about an hour of your time</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Most of the work is mine. Your part is noticing and one short conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                icon: "checklist",
                title: "Spend a week noticing",
                body: "Go about your normal week and pay attention to what annoys you. Jot it down when it happens. You do not need to know whether it can be automated. That part is mine.",
              },
              {
                n: "2",
                icon: "co_present",
                title: "We talk for thirty minutes",
                body: "Bring your list. We go through it and pick the one that gives you back the most for the least work. I will tell you straight if something is bigger than this offer.",
              },
              {
                n: "3",
                icon: "bolt",
                title: "I build it and hand it over",
                body: "Usually within a week or two. I set it up, test it, show you how it runs, and it is yours. No subscription to me, no strings.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 kinetic-gradient rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}>{step.icon}</span>
                  </div>
                  <span className="font-headline text-2xl font-bold text-brand-orange">{step.n}</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Things I can build in an afternoon
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              This is not a full list of what is possible. It is a list of what fits inside a free project, so you can see the size of the thing before we talk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menu.map((item) => (
              <div key={item.title} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-7 flex flex-col">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <h3 className="font-headline text-base font-bold text-on-surface mb-3 leading-tight">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-on-surface-variant text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            If the thing eating your week is not on here, bring it anyway. Half the time it turns out to be a version of one of these wearing different clothes.
          </p>
        </div>
      </section>

      {/* The noticing week */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Your part: one week of paying attention</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            You do not need to arrive with a solution, or even know what is possible. You just need to catch yourself in the act. Keep these five questions somewhere you will see them, and write down whatever surfaces.
          </p>
          <div className="space-y-3">
            {prompts.map((q, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-orange mt-0.5 shrink-0" style={{ fontSize: "18px" }}>check_circle</span>
                <p className="text-on-surface leading-relaxed text-sm">{q}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed mt-8">
            Three or four answers is plenty. The one worth building is usually obvious once it is written down.
          </p>
        </div>
      </section>

      {/* The trade */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow">
            <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1" }}>reviews</span>
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-5">What I am asking for</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                I would rather be straight about why I am doing this than pretend it is pure generosity.
              </p>
              <p>
                Applied AI Works is new. I do not have a wall of testimonials yet, and the honest way to get one is to do real work for people who will tell the truth about how it went. You all are getting to know me and you will not blow smoke, which is exactly what makes it worth something.
              </p>
              <p>
                So if what I build actually helps, two things. Leave an honest Google review, and let me write up what we did so other business owners can see a real example instead of a claim.
              </p>
              <p className="text-on-surface">
                If it does not help, tell me that instead and you owe me nothing. That is genuinely useful too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface mb-3">Keeping this honest about size</h3>
                <div className="space-y-3 text-on-surface-variant text-sm leading-relaxed">
                  <p>
                    One automation per business, and I am capping my build time at roughly two hours. That is enough for everything on the list above and not enough for a custom software project.
                  </p>
                  <p>
                    If what you need is bigger than that, I will say so in the meeting rather than starting something I cannot finish. We can talk about whether it is worth doing as real work, or not, and there is no pressure either way. You still get the free one if there is something smaller worth building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-24 bg-surface-container-lowest scroll-mt-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Ready when you are
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Do the week of noticing first. Then send me your list below, or just grab me at the next meeting and we will find thirty minutes.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-left">
            {/* The form, not a mailto. A mailto silently does nothing for anyone
                whose computer has no mail client set up, which is most people who
                live in Gmail in a browser tab. The source prop tags the email so
                Lakeshore requests are obvious in the inbox. */}
            <ContactForm
              source="Lakeshore"
              submitLabel="Send It Over"
              heading="Send me your list"
              subhead="Free build for Lakeshore Business Connections members. One per business. Tell me what you noticed this week and I will tell you which one I can build."
              descriptionLabel="What ate up your time this week?"
              descriptionPlaceholder="The thing you did more than twice. Quoting, follow-ups, scheduling, the same email over and over. List a few if you have them. Rough is fine."
            />
          </div>

          <p className="text-xs text-on-surface-variant mt-6 text-center">
            One per business. No deadline, but the calendar fills up in the order people ask.
            {" "}Prefer email? <ObfuscatedEmail className="text-brand-orange hover:underline" />
          </p>
        </div>
      </section>
    </>
  );
}
