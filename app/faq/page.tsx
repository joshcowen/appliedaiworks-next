import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need to be tech-savvy to work with you?", "acceptedAnswer": { "@type": "Answer", "text": "Not at all. My clients are business owners and operators — not tech people. I explain everything in plain language, show you exactly how to use each tool, and make sure you're comfortable before we move on." } },
    { "@type": "Question", "name": "How do I know if AI is actually relevant to my business?", "acceptedAnswer": { "@type": "Answer", "text": "If your business has repetitive tasks — answering the same customer questions, writing estimates, chasing invoices, scheduling follow-ups — AI can almost certainly help. The free discovery call is designed specifically to answer this question for your situation." } },
    { "@type": "Question", "name": "What happens on the free discovery call?", "acceptedAnswer": { "@type": "Answer", "text": "It's a 30-minute conversation about your operation. I ask about what tasks eat your time, where work gets stuck, how your team communicates, and what you've already tried. At the end, I'll tell you honestly whether the AI Audit makes sense for your situation." } },
    { "@type": "Question", "name": "Do you work with businesses outside West Michigan?", "acceptedAnswer": { "@type": "Answer", "text": "My focus is on West Michigan service businesses, but all work is done remotely so geography isn't a barrier. If you're a service business owner outside the area who found this and it resonates, reach out." } },
    { "@type": "Question", "name": "What exactly is included in the $1,500 AI Audit?", "acceptedAnswer": { "@type": "Answer", "text": "The audit includes a deep-dive interview about your workflows and operations, a written analysis of where AI can save you the most time and money, specific tool recommendations, a prioritized roadmap with estimated time savings for each item, and a 30-minute debrief call." } },
    { "@type": "Question", "name": "How long does the audit take to complete?", "acceptedAnswer": { "@type": "Answer", "text": "From our kickoff call to final delivery, typically 5-7 business days. The kickoff interview runs about 60-90 minutes. You'll have your full audit document and roadmap within a week of our first call." } },
    { "@type": "Question", "name": "What if I just want the audit and don't need implementation?", "acceptedAnswer": { "@type": "Answer", "text": "That's completely fine. The audit stands alone as a valuable deliverable. A lot of clients use the roadmap to implement things themselves, hand it off to a team member, or use it to evaluate whether they want to go further." } },
    { "@type": "Question", "name": "How is this different from a generic AI consulting engagement?", "acceptedAnswer": { "@type": "Answer", "text": "Most AI consultants come from a software or enterprise background and deliver frameworks and decks. I'm a business operator who has personally used AI to build 80+ projects and save over 3,500 hours of work. The roadmap you get is designed to be acted on, not filed away." } },
    { "@type": "Question", "name": "Is there a guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "I don't offer a formal refund guarantee because I can't guarantee how quickly you'll act on the roadmap. What I can guarantee is that you'll receive a thorough, specific, and honest deliverable." } },
    { "@type": "Question", "name": "Why is the audit $1,500 and not cheaper?", "acceptedAnswer": { "@type": "Answer", "text": "Because it takes real time and requires genuine expertise. The interview, research, written analysis, and debrief call amount to 8-12 hours of focused work. If the roadmap identifies just 5 hours per week in savings, you're looking at payback in 6-10 weeks." } },
    { "@type": "Question", "name": "What does implementation work cost?", "acceptedAnswer": { "@type": "Answer", "text": "Implementation is priced at $300/hr or as a project rate scoped upfront. For ongoing support and strategy, the Monthly Advisor retainer is $1,500/month and includes two strategy sessions plus async support." } },
    { "@type": "Question", "name": "Can you train my whole team, not just me?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Team training is available and priced per session. We work through real tasks from your business — not generic demos." } },
    { "@type": "Question", "name": "Do you take on ongoing clients or just one-time engagements?", "acceptedAnswer": { "@type": "Answer", "text": "Both. Most clients start with the audit and then decide what they want to do next. Some implement the roadmap themselves. Some hire me for project-based implementation. A smaller group wants ongoing monthly support as an AI advisor." } },
    { "@type": "Question", "name": "How much of my time does this require?", "acceptedAnswer": { "@type": "Answer", "text": "For the audit: about 90 minutes for the kickoff interview, plus a 30-minute debrief at the end. Everything in between is my work." } },
    { "@type": "Question", "name": "Will I become dependent on you to keep things running?", "acceptedAnswer": { "@type": "Answer", "text": "No — and I build everything specifically to avoid that. You'll understand how the tools work, how to modify them, and how to train your team on them. My goal is that after we're done, you can maintain and expand what we built without coming back to me." } },
    { "@type": "Question", "name": "What tools do you recommend most often for service businesses?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your operation. For most service businesses, the biggest wins typically come from AI-assisted communication, scheduling and dispatch optimization, and automating admin work. The audit is where I figure out the right fit for your specific stack." } },
    { "@type": "Question", "name": "What if I tried AI before and it didn't work?", "acceptedAnswer": { "@type": "Answer", "text": "That's the most common situation I walk into. Most people tried ChatGPT, got generic outputs, and concluded AI isn't for them. The audit specifically looks at what you tried, why it didn't stick, and where the real leverage is in your operation." } },
    { "@type": "Question", "name": "Will AI replace my employees?", "acceptedAnswer": { "@type": "Answer", "text": "No — and that's not what I help with. AI replaces tasks, not tradespeople. Your HVAC tech, plumber, or crew lead can't be replaced by software. What can be replaced is the two hours of admin work they do before and after each job." } }
  ]
};

export const metadata: Metadata = {
  title: "FAQ — AI Consulting for Service Businesses | Applied AI Works",
  description:
    "Common questions about AI consulting, the AI Audit, pricing, and working with Applied AI Works. Plain answers for service business owners in West Michigan.",
};

const gettingStarted: FaqItem[] = [
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer:
      "Not at all. My clients are business owners and operators — not tech people. I explain everything in plain language, show you exactly how to use each tool, and make sure you&apos;re comfortable before we move on. The whole point is that you shouldn&apos;t need to become technical to get value from AI.",
  },
  {
    question: "How do I know if AI is actually relevant to my business?",
    answer:
      "If your business has repetitive tasks — answering the same customer questions, writing estimates, chasing invoices, scheduling follow-ups — AI can almost certainly help. The free discovery call is designed specifically to answer this question for your situation. In 30 minutes, I can give you a genuine read on whether there&apos;s real opportunity here or not.",
  },
  {
    question: "What happens on the free discovery call?",
    answer:
      "It&apos;s a 30-minute conversation about your operation. I ask about what tasks eat your time, where work gets stuck, how your team communicates, and what you&apos;ve already tried. At the end, I&apos;ll tell you honestly whether the AI Audit makes sense for your situation — or if there&apos;s something else you should do first. There&apos;s no pitch and no pressure.",
  },
  {
    question: "Do you work with businesses outside West Michigan?",
    answer:
      "My focus is on West Michigan service businesses, but all work is done remotely so geography isn&apos;t a barrier. If you&apos;re a service business owner outside the area who found this and it resonates, reach out. I take on a limited number of clients at a time and work best with businesses where I can develop real context.",
  },
];

const auditFaqs: FaqItem[] = [
  {
    question: "What exactly is included in the $1,500 AI Audit?",
    answer:
      "The audit includes a deep-dive interview about your workflows and operations, a written analysis of where AI can save you the most time and money, specific tool recommendations (not vague categories — exact tools with reasoning), a prioritized roadmap with estimated time savings for each item, and a 30-minute debrief call to walk through the findings and answer questions.",
  },
  {
    question: "How long does the audit take to complete?",
    answer:
      "From our kickoff call to final delivery, typically 5-7 business days. The kickoff interview runs about 60-90 minutes. I do the analysis and build the roadmap, then we schedule a debrief. You&apos;ll have your full audit document and roadmap within a week of our first call.",
  },
  {
    question: "What if I just want the audit and don't need implementation?",
    answer:
      "That&apos;s completely fine. The audit stands alone as a valuable deliverable. A lot of clients use the roadmap to implement things themselves, hand it off to a team member, or use it to evaluate whether they want to go further. There&apos;s no obligation to continue past the audit — it&apos;s designed to give you value on its own.",
  },
  {
    question: "How is this different from a generic AI consulting engagement?",
    answer:
      "Most AI consultants come from a software or enterprise background and deliver frameworks and decks. I&apos;m a business operator who has personally used AI to build 80+ projects and save over 3,500+ hours of work. I look at your operation the same way I look at mine — practical, specific, no buzzwords. The roadmap you get is designed to be acted on, not filed away.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "I don&apos;t offer a formal refund guarantee because I can&apos;t guarantee how quickly you&apos;ll act on the roadmap. What I can guarantee is that you&apos;ll receive a thorough, specific, and honest deliverable. If you do the discovery call and I don&apos;t think there&apos;s enough opportunity in your business to justify the audit fee, I&apos;ll tell you before you pay.",
  },
];

const pricingFaqs: FaqItem[] = [
  {
    question: "Why is the audit $1,500 and not cheaper?",
    answer:
      "Because it takes real time and requires genuine expertise. The interview, the research into your specific tools and workflows, the written analysis, and the debrief call amount to 8-12 hours of focused work. If the roadmap identifies just 5 hours per week in savings at your team&apos;s wage rate, you&apos;re looking at payback in 6-10 weeks. That math usually makes it an easy decision.",
  },
  {
    question: "What does implementation work cost?",
    answer:
      "Implementation is priced at $300/hr or as a project rate scoped upfront. For ongoing support and strategy, the Monthly Advisor retainer is $1,500/month and includes two strategy sessions plus async support. Every engagement is scoped before you commit so there are no surprises.",
  },
  {
    question: "Can you train my whole team, not just me?",
    answer:
      "Yes. Team training is available and priced per session. We work through real tasks from your business — not generic demos. Each person leaves with hands-on experience using the specific tools relevant to their role, plus written follow-up resources they can reference later.",
  },
  {
    question: "Do you take on ongoing clients or just one-time engagements?",
    answer:
      "Both. Most clients start with the audit and then decide what they want to do next. Some implement the roadmap themselves. Some hire me for project-based implementation. A smaller group wants ongoing monthly support as an AI advisor. I keep my client load intentionally small so I can stay engaged with each one.",
  },
];

const workingTogetherFaqs: FaqItem[] = [
  {
    question: "How much of my time does this require?",
    answer:
      "For the audit: about 90 minutes for the kickoff interview, plus a 30-minute debrief at the end. Everything in between is my work. For implementation engagements, we scope the time commitment upfront. I try to work in focused sprints so I&apos;m not pulling you away from running your business constantly.",
  },
  {
    question: "Will I become dependent on you to keep things running?",
    answer:
      "No — and I build everything specifically to avoid that. You&apos;ll understand how the tools work, how to modify them, and how to train your team on them. My goal is that after we&apos;re done, you can maintain and expand what we built without coming back to me. If you want ongoing support, great, but it should never be a necessity.",
  },
  {
    question: "What tools do you recommend most often for service businesses?",
    answer:
      "It depends on your operation and what you&apos;re already using. For most service businesses, the biggest wins typically come from AI-assisted communication (drafting emails, follow-ups, and quotes), scheduling and dispatch optimization, and automating the admin work that doesn&apos;t need a human touch. The audit is where I figure out the right fit for your specific stack — not a generic checklist.",
  },
  {
    question: "What if I tried AI before and it didn't work?",
    answer:
      "That&apos;s the most common situation I walk into. Most people tried ChatGPT, got generic outputs, and concluded AI isn&apos;t for them. That&apos;s like buying a circular saw, not knowing how to use it, and concluding power tools don&apos;t work. The audit specifically looks at what you tried, why it didn&apos;t stick, and where the real leverage is in your operation. Previous failures don&apos;t disqualify you — they give me more to work with.",
  },
  {
    question: "Will AI replace my employees?",
    answer:
      "No — and that&apos;s not what I help with. AI replaces tasks, not tradespeople. Your HVAC tech, plumber, or crew lead can&apos;t be replaced by software. What can be replaced is the two hours of admin work they do before and after each job. The outcome is the same team doing more billable work and spending less time on paperwork. That&apos;s a win for everyone.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/[0.08] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Common Questions</span>
            <div className="h-px bg-brand-orange/30 w-16" />
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-6 leading-tight">
            Honest answers.<br /><span className="text-kinetic">No runaround.</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            Everything you want to know about working with Applied AI Works — before you commit to a single conversation.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[800px] mx-auto px-6">

          {/* Getting Started */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Getting Started</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <FaqAccordion items={gettingStarted} />
          </div>

          {/* The AI Audit */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">The AI Audit</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <FaqAccordion items={auditFaqs} />
          </div>

          {/* Pricing & Services */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Pricing &amp; Services</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <FaqAccordion items={pricingFaqs} />
          </div>

          {/* Working Together */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Working Together</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <FaqAccordion items={workingTogetherFaqs} />
          </div>

          {/* Still Have Questions */}
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-brand-orange">chat</span>
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Still have a question?</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-md mx-auto mb-6">
              Ask it on the free discovery call. I&apos;d rather answer your real question than have you guess at whether this is right for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 kinetic-gradient text-white font-bold px-6 py-3 rounded-xl neural-glow hover:scale-[1.02] transition-transform text-sm"
            >
              Book a Free Call
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="absolute -inset-12 bg-brand-orange/[0.08] blur-3xl rounded-[4rem] pointer-events-none" />
          <div className="relative bg-surface-container-low border border-brand-orange/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-orange/10 blur-[60px] pointer-events-none" />
            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">Get Started</span>
              <div className="h-px bg-brand-orange/30 w-16" />
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6 max-w-2xl mx-auto relative z-10">
              Your competitors are figuring out AI.<br /><span className="text-kinetic">Get there first.</span>
            </h2>
            <p className="text-on-surface-variant text-xl mb-10 max-w-lg mx-auto leading-relaxed relative z-10">
              The AI Audit gives you a clear, prioritized picture of where AI saves you the most time and money — in your specific operation, not a generic playbook.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                href="/ai-audit"
                className="kinetic-gradient text-white font-bold px-10 py-5 rounded-2xl neural-glow text-lg hover:scale-[1.02] transition-transform"
              >
                Book Your AI Audit &mdash; $1,500
              </Link>
              <Link
                href="/contact"
                className="bg-surface-variant text-on-surface font-bold px-10 py-5 rounded-2xl text-lg border border-outline-variant/30 hover:border-brand-orange/40 transition-colors"
              >
                Start with a Free Call
              </Link>
            </div>
            <p className="text-on-surface-variant text-sm mt-6 relative z-10">Free 30-min discovery call first. No commitment, no pressure.</p>
          </div>
        </div>
      </section>
    </>
  );
}
