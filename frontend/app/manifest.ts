// for PWA support
import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kinya & Co. Law Firm",
    short_name: "Kinya & Co.",
    description: "Trusted legal counsel for criminal defense, corporate law, and family litigation.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: "#0b1a2e",
    icons: [
        {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
        },
    ],
  };
}
