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

export interface PostCard {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
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
    }));
}
