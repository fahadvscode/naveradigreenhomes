import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const allow = ["Googlebot", "Googlebot-Image", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "anthropic-ai", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];

const closed = ["/thank-you", "/api/", "/amp-doc"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allow.map((userAgent) => ({ userAgent, allow: "/", disallow: closed })),
      { userAgent: "*", allow: "/", disallow: closed },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
