import type { MetadataRoute } from "next";
import { destinations } from "@/content/destinations";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/destinations",
    "/the-vessel",
    "/the-vessel/accommodation",
    "/the-vessel/common-areas",
    "/the-vessel/chase-boats",
    "/about",
    "/about/crew",
    "/packages",
    "/book-now",
    "/contact",
    "/dive-courses",
    "/privacy",
    "/image-credits",
    ...destinations.map(({ slug }) => `/destinations/${slug}`),
  ];
  return paths.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/destinations") ? 0.8 : 0.6,
  }));
}
