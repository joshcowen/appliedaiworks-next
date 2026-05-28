import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Things HVAC Companies Can Automate This Week — Applied AI Works",
  description:
    "Five specific, real automations for HVAC companies. What they are, what tool does it, how long setup takes, and how many hours you get back.",
};

export default function BlogPost2() {
  const automations = [
    {
      number: "01",
      title: "After-Visit Follow-Up Emails Written from a Voice Note",
      body: [
        "Your tech finishes a job, records a 30-second voice memo on their phone, and an email goes out to the customer within the hour summarizing what was done, what they recommended, and any notes for future service.",
        "You pair Otter.ai (voice transcription) with a simple Make.com automation and a ChatGPT prompt that turns the transcript into a customer-ready follow-up email. The email gets reviewed before it sends, or you set it to auto-send if you trust the format.",
        "Setup time: about 3 to 4 hours to build the Make.com workflow and dial in the prompt. If you've never used Make before, add another hour or two.",
        "What you get back: roughly 20 to 30 minutes per tech per day. For a crew of 4 techs, that's close to 2 hours of daily admin time that currently lives in someone's head or never gets done at all. The side benefit is that follow-ups actually happen consistently.",
      ],
    },
    {
      number: "02",
      title: "Scheduling Confirmation and Reminder Texts",
      body: [
        "When a job gets added to your dispatch board, a text automatically goes out to the customer confirming the appointment window, and another text goes out 24 hours before as a reminder.",
        "If you're using ServiceTitan or Housecall Pro, this is often already built in and just needs to be turned on. If you're scheduling in Google Calendar or something more manual, a Zapier automation can watch for new calendar events and trigger a text via SimpleTexting or Twilio.",
        "Setup time: 30 minutes if your field service software supports it. 2 to 3 hours if you're building it from scratch.",
        "What you get back: reduced no-shows, which is the bigger win. HVAC companies typically lose 8% to 15% of scheduled appointments to no-shows or last-minute reschedules. Cutting that in half saves real truck rolls.",
      ],
    },
    {
      number: "03",
      title: "Estimate Follow-Up Sequences",
      body: [
        "When you send an estimate that doesn't get a response, a sequence of 2 to 3 follow-up messages goes out automatically over the next 10 days. First one is a quick check-in at 48 hours. Second is a gentle push with a specific deadline at day 5. Third is a soft close at day 10.",
        "A Make.com or Zapier workflow triggered by 'estimate sent but not accepted' can queue the follow-up messages automatically.",
        "Setup time: 3 to 5 hours to build the sequence and write the messages. The messages themselves take most of the time because you want them to sound like a real person, not an automated sequence.",
        "What you get back: closed estimate data from several HVAC companies shows 20% to 35% of unsigned estimates were closed by the second or third follow-up. If you're currently not following up at all, the revenue recovery here can be significant.",
      ],
    },
    {
      number: "04",
      title: "Service Call Summaries for the Office",
      body: [
        "After a service call, your tech fills out a quick form on their phone (5 to 7 fields, 90 seconds max) and the office gets a structured summary with the equipment, issue, work done, parts used, and any recommended follow-up service.",
        "A simple Google Form or Jotform, connected to a Make.com automation that formats the data into an email or drops it into your CRM. You can add a step where the summary also pre-populates a service record in your software.",
        "Setup time: 1 to 2 hours. This is one of the faster setups because the form is simple and the automation is straightforward.",
        "What you get back: about 10 to 15 minutes per call that currently gets reconstructed from memory at the end of the day. On a day with 6 service calls across the crew, that's an hour of administrative reconstruction that goes away. Your service records also get more complete, which matters when the same customer calls back 8 months later.",
      ],
    },
    {
      number: "05",
      title: "Review Request Texts After Completed Jobs",
      body: [
        "When a job is marked complete in your field service software, a text goes out to the customer within 30 to 60 minutes with a direct link to your Google review page.",
        "Housecall Pro, ServiceTitan, and similar tools have this built in with varying levels of customization. If not, a Zapier automation watching for job completion status can trigger a text.",
        "Setup time: 15 to 45 minutes if your field service software supports it. 2 hours if you're building it externally.",
        "What you get back: reviews, consistently. Most HVAC companies get reviews when a customer had an unusually great or terrible experience. The automated ask after every completed job captures the large middle section of happy customers who would have left a review if someone had just asked at the right moment. One company I worked with went from 4 to 6 new Google reviews a month to 18 to 22 within 60 days of turning this on.",
      ],
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-on-surface-variant hover:text-brand-orange transition-colors mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">HVAC</span>
            <span className="text-xs text-on-surface-variant">April 2026</span>
            <span className="text-xs text-on-surface-variant">&middot;</span>
            <span className="text-xs text-on-surface-variant">6 min read</span>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
            5 Things HVAC Companies Can Automate This Week
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Not AI in the abstract sense. Not &ldquo;train a model on your data.&rdquo; Actual automations that take specific repetitive tasks off your plate. Here are five that work well for HVAC companies, with what tool does it, how long setup takes, and what you actually get back.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {automations.map((item) => (
              <div key={item.number} className="border-l-2 border-brand-orange/30 pl-6">
                <div className="font-headline text-xs font-bold text-brand-orange mb-2 tracking-widest">{item.number}</div>
                <h2 className="font-headline text-xl font-bold text-on-surface mb-4">{item.title}</h2>
                {item.body.map((para, i) => (
                  <p key={i} className="text-on-surface-variant leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              The full list here probably represents 12 to 20 hours of setup work if you did all five. But none of these require a developer, and none require enterprise software. If you&apos;re already paying for Housecall Pro or ServiceTitan, you might find half of these are already available and just need to be turned on.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-outline-variant/10">
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-2xl p-6 neural-glow">
              <h3 className="font-headline font-bold text-on-surface mb-2">Not sure where to start with your operation?</h3>
              <p className="text-on-surface-variant text-sm mb-4">An AI Audit maps out your specific opportunities and tells you what to build first.</p>
              <Link href="/ai-audit" className="kinetic-gradient text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform">
                See how the audit works
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
