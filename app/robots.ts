import type { MetadataRoute } from "next";
import { launchApproved, siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: launchApproved
      ? { userAgent: "*", allow: "/", disallow: ["/auth/", "/protected/"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
