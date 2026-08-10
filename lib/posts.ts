import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

// Frontmatter written by the blog pipeline's GitHub publisher.
export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  categories: string[];
  tags?: string[];
  excerpt: string;
  featuredImage: string;
  metaTitle?: string;
  metaDescription?: string;
  description?: string;
  focusKeyword?: string;
}

export interface Post extends PostMeta {
  content: string;
  schemaJson?: string;
}

function readAll(): { data: PostMeta; content: string }[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data, content } = matter(raw);
      return { data: data as PostMeta, content };
    });
}

export function getAllPosts(): PostMeta[] {
  return readAll()
    .map((p) => p.data)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as PostMeta), content };
}

// Rough read time from body length, matching the site's "N min read" label.
export function readTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export interface BlogEntry {
  slug: string;
  lastModified: Date;
}

// Blog posts exist in two forms and the sitemap needs both:
//   1. MDX in content/posts/, served by app/blog/[slug] (what the pipeline writes)
//   2. Hand-built route directories at app/blog/<slug>/page.tsx (the originals)
// Slugs come from the filename/directory name rather than frontmatter, because
// that is what generateStaticParams uses. Keying off frontmatter could emit a
// sitemap URL that 404s if the two ever drift apart.
export function getAllBlogEntries(): BlogEntry[] {
  const entries = new Map<string, BlogEntry>();

  // Route-directory posts. Skip [slug] and any directory without a page file.
  const routeDir = path.join(process.cwd(), "app/blog");
  if (fs.existsSync(routeDir)) {
    for (const e of fs.readdirSync(routeDir, { withFileTypes: true })) {
      if (!e.isDirectory() || e.name.startsWith("[")) continue;
      const pageFile = path.join(routeDir, e.name, "page.tsx");
      if (!fs.existsSync(pageFile)) continue;
      entries.set(e.name, { slug: e.name, lastModified: fs.statSync(pageFile).mtime });
    }
  }

  // MDX posts. These win on a slug collision since they carry a real publish date.
  if (fs.existsSync(postsDir)) {
    for (const file of fs.readdirSync(postsDir)) {
      if (!file.endsWith(".mdx")) continue;
      const slug = file.replace(/\.mdx$/, "");
      const full = path.join(postsDir, file);
      const { data } = matter(fs.readFileSync(full, "utf-8"));
      const parsed = data.date ? new Date(data.date) : null;
      const lastModified =
        parsed && !Number.isNaN(parsed.getTime()) ? parsed : fs.statSync(full).mtime;
      entries.set(slug, { slug, lastModified });
    }
  }

  // Array.from rather than spread: the project's TS target predates downlevelIteration.
  return Array.from(entries.values()).sort(
    (a, b) => b.lastModified.getTime() - a.lastModified.getTime()
  );
}

export interface PostCard {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  // Industry slugs this post is specific to (e.g. ["hvac"]). Empty means the
  // post applies to any industry and can be used as filler on any page.
  topics?: string[];
}

// The four original posts that live as route directories rather than MDX.
// This is the single source for their card metadata: the blog index and the
// related-posts rail on industry pages both read from here, so titles and
// excerpts can't drift between surfaces.
export const staticPostCards: PostCard[] = [
  {
    title: "The $1,500 Question: Is an AI Audit Worth It?",
    category: "Pricing",
    date: "April 2026",
    readTime: "8 min read",
    excerpt:
      "A straight answer to the question most business owners are actually thinking: is the audit going to pay for itself? Here's how to do the math for your operation.",
    href: "/blog/is-an-ai-audit-worth-it",
    image:
      "https://res.cloudinary.com/dh0xneapb/image/upload/v1774539234/rightpeopleco/library/AdobeStock_143079956.jpg",
    imageAlt: "Team reviewing business expenses and budget analysis",
    topics: [],
  },
  {
    title: "5 Things HVAC Companies Can Automate This Week",
    category: "HVAC",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Not theory. Five specific automations that HVAC companies are using right now to get hours back every week — without replacing a single employee.",
    href: "/blog/5-hvac-automations",
    image:
      "https://res.cloudinary.com/dh0xneapb/image/upload/v1774539179/rightpeopleco/library/AdobeStock_129108292.jpg",
    imageAlt: "HVAC technician servicing a water heater",
    topics: ["hvac"],
  },
  {
    title: "Why Your First AI Tool Probably Shouldn't Be ChatGPT",
    category: "Getting Started",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "Most people start with ChatGPT, get generic outputs, and conclude AI isn't for them. Here's a better starting point for service business owners.",
    href: "/blog/first-ai-tool-not-chatgpt",
    image:
      "https://res.cloudinary.com/dh0xneapb/image/upload/v1774539208/rightpeopleco/library/AdobeStock_135379542.jpg",
    imageAlt: "Freelancer working on a laptop",
    topics: [],
  },
  {
    title: "How One Operator Saved 3,500+ Hours Using AI",
    category: "Case Study",
    date: "March 2026",
    readTime: "12 min read",
    excerpt:
      "What 3,500+ hours of AI work actually looks like. What worked, what didn't, and what it means for a service business with real constraints.",
    href: "/blog/how-one-operator-saved-3500-hours",
    image: "/josh-cowen-featured.jpg",
    imageAlt: "Josh Cowen in his workshop",
    topics: [],
  },
];

// Posts for the related rail on an industry page: anything tagged for that
// industry first, then industry-agnostic posts as filler. Posts tagged for a
// *different* industry are left out entirely, so plumbing pages never surface
// HVAC-specific reading.
export function getRelatedPosts(topic: string, limit = 3): PostCard[] {
  const all = [...getAllPostCards(), ...staticPostCards];
  const key = topic.toLowerCase();
  const specific = all.filter((p) => p.topics?.some((t) => t.toLowerCase() === key));
  const general = all.filter((p) => !p.topics || p.topics.length === 0);

  const seen = new Set<string>();
  const out: PostCard[] = [];
  for (const post of [...specific, ...general]) {
    if (seen.has(post.href)) continue;
    seen.add(post.href);
    out.push(post);
    if (out.length === limit) break;
  }
  return out;
}

// Industry slugs that have a page under /industries. A pipeline post is treated
// as specific to one of these only if a tag matches, so a stray tag like
// "Make.com" never pins a post to an industry.
const INDUSTRY_SLUGS = [
  "hvac",
  "plumbing",
  "landscaping",
  "construction",
  "cleaning",
  "auto-repair",
];

function topicsFromTags(tags: string[] = [], categories: string[] = []): string[] {
  const normalized = [...tags, ...categories].map((t) =>
    t.toLowerCase().trim().replace(/\s+/g, "-")
  );
  return INDUSTRY_SLUGS.filter((slug) => normalized.includes(slug));
}

// Cards for the blog index, newest first, ready to render alongside the
// hand-built static entries.
export function getAllPostCards(): PostCard[] {
  return readAll()
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map(({ data, content }) => ({
      title: data.title,
      category: data.categories?.[0] ?? "AI",
      date: formatDate(data.date),
      readTime: readTime(content),
      excerpt: data.excerpt,
      href: `/blog/${data.slug}`,
      image: data.featuredImage,
      imageAlt: data.title,
      topics: topicsFromTags(data.tags, data.categories),
    }));
}
