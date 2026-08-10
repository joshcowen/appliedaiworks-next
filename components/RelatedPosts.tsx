import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts } from "@/lib/posts";

interface Props {
  /** Industry slug, e.g. "hvac". Matches PostCard.topics. */
  topic: string;
  heading?: string;
  subhead?: string;
}

export default function RelatedPosts({ topic, heading, subhead }: Props) {
  const posts = getRelatedPosts(topic);
  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
            {heading ?? "Worth reading next"}
          </h2>
          {subhead && (
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{subhead}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden flex flex-col hover:border-brand-orange/30 transition-colors group"
            >
              <div className="overflow-hidden aspect-video">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-on-surface-variant">{post.readTime}</span>
                </div>
                {/* No flex-1 here: these cards have no footer row, so letting the
                    heading grow would push excerpts to uneven vertical positions. */}
                <h3 className="font-headline font-bold text-on-surface text-base mb-3 leading-tight group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-brand-orange text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            See everything on the blog
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
