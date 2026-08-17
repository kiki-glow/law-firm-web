import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://law-firm-web-smoky.vercel.app"; //TODO: change to actual domain name    

    const routes = [
        "",
        "/about",
        "/practice-areas",
        "/pricing",
        "/contact"
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

  return routes;
}
