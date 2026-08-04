import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"], // block internal API routes from being indexed
    },
    sitemap: "https://kinyaandco.vercel.app/sitemap.xml", // TODO: change domain
  };
}
