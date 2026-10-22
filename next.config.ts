import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Wait for unknown destination params so notFound() can set HTTP 404
  // before streaming the response. All known destinations are prerendered.
  partialPrefetching: false,
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      {
        source: "/about-us/the-crew",
        destination: "/about/crew",
        permanent: true,
      },
      { source: "/contact-us", destination: "/contact", permanent: true },
      {
        source: "/the-vessel/the-chase-boats",
        destination: "/the-vessel/chase-boats",
        permanent: true,
      },
      {
        source: "/discount-and-promos",
        destination: "/promotions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
