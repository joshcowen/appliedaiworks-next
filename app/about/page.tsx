import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "About Josh Cowen — Applied AI Works",
  description:
    "Josh Cowen built 80+ AI tools, logged 3,500+ hours of hands-on AI work, and helped businesses find $600K+ in recoverable time — without a single developer.",
};

export default function AboutPage() {
  const projects = [
    {
      name: "SignatureCraft",
      desc: "Email signature SaaS. Built with Next.js, Stripe, and Vercel. Live product, paying users.",
      tag: "SaaS Product",
      tagColor: "text-brand-orange",
    },
    {
      name: "SEO Auditor",
      desc: "Internal agency tool that runs full SEO, GEO, AEO, and accessibility audits. Replaced $300/mo software.",
      tag: "Internal Tool",
      tagColor: "text-primary",
    },
    {
      name: "Blog Pipeline",
      desc: "Fully autonomous monthly blog system. GitHub Actions, AI writing, auto-publish. Zero manual work after setup.",
      tag: "Automation",
      tagColor: "text-green-400",
    },
    {
      name: "9 Replit Apps",
      desc: "Proposal generators, calculators, client-facing tools. Each one solved a real problem for a real business.",
      tag: "Client Tools",
      tagColor: "text-primary",
    },
    {
      name: "9 Custom GPTs",
      desc: "AI assistants trained on specific business contexts. Faster onboarding, better consistency, fewer repeated questions.",
      tag: "AI Assistants",
      tagColor: "text-brand-orange",
    },
    {
      name: "80+ Projects",
      desc: "From small automations to full-stack apps. Every one started with a real problem worth solving.",
      tag: "And Counting",
      tagColor: "text-green-400",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
                <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>person</span>
                About
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                I&apos;m not a tech person.<br />
                <span className="text-kinetic">I just figured it out.</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                No CS degree. No developer background. Just a business operator who got obsessed with AI tools and built a lot of things to see what actually worked.
              </p>
            </div>
            {/* Right: photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-outline-variant/20 neural-glow">
                <Image
                  src="/josh-cowen.jpg"
                  alt="Josh Cowen — Applied AI Works"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-headline text-4xl font-bold text-brand-orange">
                <StatCounter target={80} />
              </div>
              <div className="text-sm text-on-surface-variant mt-1">AI projects built</div>
            </div>
            <div>
              <div className="font-headline text-4xl font-bold text-on-surface">
                <StatCounter target={3500} suffix="+" />
              </div>
              <div className="text-sm text-on-surface-variant mt-1">Hours of AI work logged</div>
            </div>
            <div>
              <div className="font-headline text-4xl font-bold text-primary">$<StatCounter target={600} suffix="K+" /></div>
              <div className="text-sm text-on-surface-variant mt-1">In recoverable time found</div>
            </div>
            <div>
              <div className="font-headline text-4xl font-bold text-on-surface">
                <StatCounter target={0} />
              </div>
              <div className="text-sm text-on-surface-variant mt-1">Developers needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-on-surface">How this started</h2>
              <p className="text-on-surface-variant leading-relaxed">
                I run a marketing agency. A few years ago I started playing with AI tools to see if they could help with client work. I expected gimmicks. I found something that actually worked.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Not everything worked. A lot of early experiments were a waste of time. But the ones that did work saved real hours — hours I used to spend on writing, research, building reports, formatting proposals.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                So I kept going. Built more. Documented what worked and what didn&apos;t. Hit 3,500+ hours of hands-on AI work. Built 80+ projects. Started helping other businesses do the same thing.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                That&apos;s what Applied AI Works is. Not a firm. Not a platform. Just someone who went deep on this and can show you what&apos;s actually worth doing.
              </p>
              <div className="pt-4">
                <Link
                  href="/ai-audit"
                  className="kinetic-gradient text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
                >
                  See how the audit works
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 kinetic-gradient rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <div>
                    <div className="font-headline font-bold text-on-surface">Josh Cowen</div>
                    <div className="text-xs text-on-surface-variant">Founder, Applied AI Works</div>
                  </div>
                </div>
                <blockquote className="text-on-surface-variant leading-relaxed italic text-base">
                  &ldquo;Every business I talk to has the same story: they&apos;re spending hours on stuff that AI could handle. The question isn&apos;t whether AI works. It&apos;s figuring out where to start.&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-outline-variant/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-headline text-2xl font-bold text-brand-orange">8+ yrs</div>
                    <div className="text-xs text-on-surface-variant">Running a service business</div>
                  </div>
                  <div>
                    <div className="font-headline text-2xl font-bold text-primary">Holland, MI</div>
                    <div className="text-xs text-on-surface-variant">West Michigan based</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              What 80+ projects looks like
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Not side experiments. Real tools that solved real problems, for my agency and for clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <div className={`text-xs font-bold uppercase tracking-widest ${project.tagColor} mb-3`}>{project.tag}</div>
                <h3 className="font-headline font-bold text-on-surface text-lg mb-2">{project.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">How I work</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              I don&apos;t sell software. I don&apos;t have a platform to push. Every recommendation I make is based on what actually works for businesses like yours, not what earns me a commission.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              The audit is a flat fee. The implementation is hourly. There are no long-term contracts because I don&apos;t want clients who feel stuck. I want clients who got real value and come back because it worked.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              I focus on West Michigan trades and service businesses because I know them. The margins, the seasonality, the admin overhead, the communication bottlenecks. That context makes the advice better.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Ready to see where AI fits?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            Start with a free 30-minute discovery call. No pitch. Just a conversation about your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-audit"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:border-brand-orange/40 transition-colors"
            >
              Ask a question first
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
