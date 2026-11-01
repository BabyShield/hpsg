import type { MetadataRoute } from "next";

import { site } from "@/data/site";

const searchAndAiAgents = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        other: {
          "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
        },
      },
      {
        userAgent: searchAndAiAgents,
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: new URL(site.url).host,
  };
}
