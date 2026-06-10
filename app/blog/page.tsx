import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Practical AI Blog for Trades and Service Businesses",
  description:
    "No hype. No buzzwords. Real tools, real examples, and honest takes on what AI can and can't do for service businesses and skilled trades in West Michigan.",
};

const featuredPost = {
  title: "How One Business Operator Saved 3,500+ Hours Using AI — And What That Means for Your Operation",
  category: "Case Study",
  date: "March 2026",
  readTime: "12 min read",
  stats: [
    { value: "3,500+", label: "Hours saved" },
    { value: "$600K+", label: "Value recovered" },
    { value: "80+", label: "Projects built" },
  ],
  excerpt: "The full story of what 3,500+ hours of AI work actually looks like — what worked, what didn't, and what it means for a service business with real constraints.",
};

const posts = [
  {
    title: "The $1,500 Question: Is an AI Audit Worth It?",
    category: "Pricing",
    date: "April 2026",
    readTime: "8 min read",
    excerpt: "A straight answer to the question most business owners are actually thinking: is the audit going to pay for itself? Here's how to do the math for your operation.",
    href: "/blog/is-an-ai-audit-worth-it",
  },
  {
    title: "5 Things HVAC Companies Can Automate This Week",
    category: "HVAC",
    date: "April 2026",
    readTime: "6 min read",
    excerpt: "Not theory. Five specific automations that HVAC companies are using right now to get hours back every week — without replacing a single employee.",
    href: "/blog/5-hvac-automations",
  },
  {
    title: "Why Your First AI Tool Probably Shouldn't Be ChatGPT",
    category: "Getting Started",
    date: "March 2026",
    readTime: "5 min read",
    excerpt: "Most people start with ChatGPT, get generic outputs, and conclude AI isn't for them. Here's a better starting point for service business owners.",
    href: "/blog/first-ai-tool-not-chatgpt",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.appliedaiworks.com" }, { name: "Blog", url: "https://www.appliedaiworks.com/blog" }]} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>article</span>
            Blog
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            No hype. Real tools. Real hours saved.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            No hype. No buzzwords. Real tools, real examples, and honest takes on what AI can and can&apos;t do for the trades and service businesses that keep West Michigan running.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 neural-glow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">{featuredPost.category}</span>
              <span className="text-xs text-on-surface-variant">{featuredPost.date}</span>
              <span className="text-xs text-on-surface-variant">&middot;</span>
              <span className="text-xs text-on-surface-variant">{featuredPost.readTime}</span>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">{featuredPost.excerpt}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {featuredPost.stats.map((stat, i) => (
                <div key={i} className="bg-surface-container-highest rounded-xl p-3 text-center">
                  <div className="font-headline text-xl font-bold text-brand-orange">{stat.value}</div>
                  <div className="text-xs text-on-surface-variant mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-on-surface-variant text-sm cursor-not-allowed opacity-60">
              Coming soon
              <span className="material-symbols-outlined text-sm">schedule</span>
            </span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href={post.href} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:border-brand-orange/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-on-surface-variant">{post.date}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface text-lg mb-3 leading-tight flex-1 group-hover:text-brand-orange transition-colors">{post.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">{post.readTime}</span>
                  <span className="text-xs text-brand-orange flex items-center gap-1">
                    Read
                    <span className="material-symbols-outlined" style={{ fontSize: "12px" }}>arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 max-w-md mx-auto">
              <span className="material-symbols-outlined text-brand-orange mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>edit_note</span>
              <h3 className="font-headline font-bold text-on-surface mb-2">More posts coming soon</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Practical guides, industry breakdowns, and honest takes on AI for service businesses. Check back regularly or reach out to get notified.</p>
              <a href="mailto:josh@appliedaiworks.com" className="mt-4 inline-flex items-center gap-1 text-sm text-brand-orange font-semibold hover:gap-2 transition-all">
                Get notified by email
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Ready to stop reading and start saving hours?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The audit gives you a specific roadmap for your operation. Not general ideas.
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
              Start with a free call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
