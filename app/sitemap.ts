import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.appliedaiworks.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ai-audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/roi-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/is-an-ai-audit-worth-it`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/5-hvac-automations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog/first-ai-tool-not-chatgpt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/industries/hvac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/plumbing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/landscaping`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/construction`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/cleaning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries/auto-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/holland-mi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/zeeland-mi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/grand-rapids-mi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/west-michigan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
