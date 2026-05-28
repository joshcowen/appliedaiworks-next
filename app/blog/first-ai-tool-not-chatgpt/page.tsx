import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your First AI Tool Probably Shouldn't Be ChatGPT — Applied AI Works",
  description:
    "Most service business owners try ChatGPT, get vague outputs, and quit. Here are three better starting points for trades and service businesses.",
};

export default function BlogPost3() {
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
            <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">Getting Started</span>
            <span className="text-xs text-on-surface-variant">March 2026</span>
            <span className="text-xs text-on-surface-variant">&middot;</span>
            <span className="text-xs text-on-surface-variant">5 min read</span>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
            Why Your First AI Tool Probably Shouldn&apos;t Be ChatGPT
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Most service business owners try ChatGPT at some point. They type in something like &ldquo;write me an email to a customer about their estimate,&rdquo; get something vague and generic, and conclude that AI isn&apos;t really useful for their business. I hear this a lot. And I get it.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">

            <p className="text-on-surface-variant leading-relaxed mb-6">
              The issue isn&apos;t that ChatGPT is bad. The issue is that it&apos;s like handing someone a professional-grade table saw on their first day in a woodshop. The tool is capable of incredible things, but if you&apos;ve never learned how to feed the wood properly, you&apos;re going to make a mess and probably decide woodworking isn&apos;t for you.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              ChatGPT needs two things to be genuinely useful: context about your specific business, and specific prompts that tell it exactly what you want. Most first-time users give it neither. They type a vague request, get a vague response, and walk away. There are better first tools for someone running a trades or service business who&apos;s never done this before.
            </p>

            <div className="space-y-10">
              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 kinetic-gradient rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-headline font-bold text-white text-sm">1</span>
                  </div>
                  <h2 className="font-headline text-lg font-bold text-on-surface">Google NotebookLM for Turning Your SOPs Into Something Searchable</h2>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  If you have any kind of documentation in your business, whether it&apos;s a procedure for how you handle warranty calls, notes from a training session, your employee handbook, or PDFs from equipment manufacturers, NotebookLM lets you upload all of it and ask questions about it in plain English.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  &ldquo;What does our warranty process say about compressor failures?&rdquo; And it finds it, quotes it, and tells you where it came from.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  This is a better starting point than ChatGPT because you&apos;re not asking it to generate anything. You&apos;re asking it to help you find and use what you already have. The output is grounded in your actual documents.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Setup is about 20 minutes. Create a notebook, upload your documents, and start asking questions. No prompt engineering required.
                </p>
              </div>

              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 kinetic-gradient rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-headline font-bold text-white text-sm">2</span>
                  </div>
                  <h2 className="font-headline text-lg font-bold text-on-surface">Otter.ai for Getting Something Useful Out of Your Client Calls</h2>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  If you take any calls with customers, walk them through estimates, or run sales conversations, Otter.ai will transcribe them and give you a searchable record with an automatic summary.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  A lot of service business owners are doing 5 to 10 calls a day and relying entirely on memory to follow up correctly. Otter captures what was actually said. You can pull up the transcript before a follow-up call, search for what the customer told you about their equipment age, or find exactly what you quoted.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Setup is under 10 minutes. Download the app, connect it to Zoom or Google Meet, or leave it running on your phone during calls. Free tier covers about 600 minutes a month, which is enough to test whether it changes how you work.
                </p>
              </div>

              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 kinetic-gradient rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-headline font-bold text-white text-sm">3</span>
                  </div>
                  <h2 className="font-headline text-lg font-bold text-on-surface">One Simple Make.com Automation Instead of Starting with Prompts</h2>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  Make.com connects apps together. If X happens, do Y. New form submission, send an email. Job marked complete, text the customer. Estimate sent, start a follow-up sequence.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  This is a better first tool than ChatGPT because it solves a problem you can see. You know you have a task that happens 20 times a week and someone does it manually every single time. You don&apos;t need to learn prompting or think abstractly about AI. You need to identify the specific repetitive thing and build one trigger-and-action workflow.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  The learning curve is real but approachable. Most basic automations take 2 to 4 hours to set up the first time. The free tier includes 1,000 operations per month, which is enough to automate a real workflow without paying anything.
                </p>
              </div>
            </div>

            <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4">What to Do with ChatGPT When You&apos;re Ready</h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Once you have some experience with what these tools do and don&apos;t do, ChatGPT becomes dramatically more useful. You&apos;ll know what context it needs. You&apos;ll know how to write a prompt that tells it exactly what format you want. You&apos;ll know when to trust the output and when to check it.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The AI intern analogy I use with clients: ChatGPT is an intern who knows everything, but like any intern, you have to direct it. Give it context. Check its work. Most people who give up on ChatGPT gave up because they handed the intern a vague task and were surprised when the output was vague. Start with NotebookLM, Otter.ai, or one Make.com automation. Build some confidence. Then come back to ChatGPT with a real task and a real prompt, and the gap closes up considerably.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-outline-variant/10">
            <div className="bg-surface-container-low border border-brand-orange/20 rounded-2xl p-6 neural-glow">
              <h3 className="font-headline font-bold text-on-surface mb-2">Want help figuring out where to start?</h3>
              <p className="text-on-surface-variant text-sm mb-4">A free discovery call takes 30 minutes. I&apos;ll tell you honestly what the best first move is for your operation.</p>
              <Link href="/contact" className="kinetic-gradient text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform">
                Book a Free Call
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
