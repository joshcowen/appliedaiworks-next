import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getPost, getAllSlugs, readTime, formatDate } from "@/lib/posts";

const SITE = "https://www.appliedaiworks.com";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description ?? post.excerpt,
    alternates: { canonical: `${SITE}/blog/${slug}` },
  };
}

// Style MDX elements to match the site's article layout (dark theme tokens).
const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="font-headline text-lg font-bold text-on-surface mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-on-surface-variant leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 text-on-surface-variant leading-relaxed mb-6 space-y-2" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 text-on-surface-variant leading-relaxed mb-6 space-y-2" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-brand-orange underline hover:no-underline" {...props} />
  ),
  h1: (props: React.ComponentProps<"h1">) => (
    <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4" {...props} />
  ),
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${slug}`;
  const category = post.categories?.[0] ?? "AI";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description ?? post.excerpt,
    image: post.featuredImage,
    author: { "@type": "Person", name: "Josh Cowen", url: `${SITE}/about` },
    publisher: { "@type": "Organization", name: "Applied AI Works", url: SITE },
    datePublished: post.date,
    url,
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE },
          { name: "Blog", url: `${SITE}/blog` },
          { name: post.title, url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {post.schemaJson && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: post.schemaJson }} />
      )}

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-on-surface-variant hover:text-brand-orange transition-colors mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">{category}</span>
            <span className="text-xs text-on-surface-variant">{formatDate(post.date)}</span>
            <span className="text-xs text-on-surface-variant">&middot;</span>
            <span className="text-xs text-on-surface-variant">{readTime(post.content)}</span>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
            {post.title}
          </h1>
          {post.featuredImage && (
            <div className="rounded-2xl overflow-hidden mb-8 aspect-video">
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <div className="mt-16 bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 text-center neural-glow">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
              Want this working in your business?
            </h2>
            <p className="text-on-surface-variant mb-6">
              The AI audit gives you a specific roadmap for your operation. Not general ideas.
            </p>
            <Link
              href="/ai-audit"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
