export const site = {
  name: "M/Y Palau Sport",
  shortName: "Palau Sport",
  description:
    "Discover Philippine liveaboard diving aboard M/Y Palau Sport. Explore destinations, life on board, and plan your next dive adventure with our team.",
  email: "pinkieg@divepalausport.com",
  location: "Manila, Philippines",
  contactSource: "https://palausport.com/contact-us/",
  contentReviewedAt: "2026-10-22",
  // Keep phone numbers, trip prices and departure links unpublished until owner approval.
  phone: null,
  approvedTrips: [],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const launchApproved =
  process.env.SITE_LAUNCH_APPROVED === "true" &&
  Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "All destinations", href: "/destinations" },
      { label: "Anilao", href: "/destinations/anilao" },
      { label: "Apo Reef", href: "/destinations/apo-reef" },
      { label: "Busuanga", href: "/destinations/busuanga" },
      { label: "Calauit Island", href: "/destinations/calauit-island" },
      { label: "Malapascua", href: "/destinations/malapascua" },
      { label: "Puerto Galera", href: "/destinations/puerto-galera" },
      { label: "Tubbataha Reef", href: "/destinations/tubbataha-reef" },
      { label: "Verde Island", href: "/destinations/verde-island" },
    ],
  },
  {
    label: "The Vessel",
    href: "/the-vessel",
    children: [
      { label: "Meet the yacht", href: "/the-vessel" },
      { label: "Accommodation", href: "/the-vessel/accommodation" },
      { label: "Common areas", href: "/the-vessel/common-areas" },
      { label: "Chase boats", href: "/the-vessel/chase-boats" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story", href: "/about" },
      { label: "The crew", href: "/about/crew" },
    ],
  },
  {
    label: "Trips",
    href: "/packages",
    children: [
      { label: "Plan a trip", href: "/packages" },
      { label: "Dive courses", href: "/dive-courses" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;
