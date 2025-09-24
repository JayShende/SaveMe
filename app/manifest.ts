import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BookmarkMe - Your Safe Place for All Links",
    short_name: "BookmarkMe",
    description:
      "Save and organize unlimited links from Instagram, Twitter, and the web. Never lose track of important content again.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["productivity", "utilities"],
    lang: "en",
    orientation: "portrait-primary",
  };
}
