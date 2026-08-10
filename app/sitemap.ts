import { MetadataRoute } from "next";
import { getAllBlogEntries } from "@/lib/posts";

const base = "https://www.appliedaiworks.com";

// Non-blog pages stay listed by hand on purpose. Walking the app directory would
// also sweep up drafts that are deliberately unlisted (see middleware.ts), so
// anything new here is an explicit decision to publish it.
const staticPages: { path: string; priority: number; changeFrequency: "monthly" | "weekly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/ai-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/roi-calculator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/industries/hvac", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/plumbing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/landscaping", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/construction", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/cleaning", priority: 0.7, changeFrequency: "monthly" },
  { path: "/industries/auto-repair", priority: 0.7, changeFrequency: "monthly" },
  { path: "/locations/holland-mi", priority: 0.6, changeFrequency: "monthly" },
  { path: "/locations/zeeland-mi", priority: 0.6, changeFrequency: "monthly" },
  { path: "/locations/grand-rapids-mi", priority: 0.6, changeFrequency: "monthly" },
  { path: "/locations/west-michigan", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // Blog posts are discovered at build time from content/posts/*.mdx and the
  // app/blog/<slug>/ route directories, so anything the pipeline publishes shows
  // up here without this file being touched. lastModified is the real publish
  // date or file mtime rather than "now".
  const posts: MetadataRoute.Sitemap = getAllBlogEntries().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
