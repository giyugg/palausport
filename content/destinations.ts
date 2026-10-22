import { getMediaCredit } from "./media";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  eyebrow: string;
  shortDescription: string;
  heroImage: string | null;
  imageAlt: string;
  highlights: string[];
  bodySections: { title: string; body: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  seo: { title: string; description: string };
};

const destinationRecords: Destination[] = [
  {
    slug: "anilao",
    title: "Anilao",
    region: "Batangas",
    eyebrow: "A closer look",
    shortDescription:
      "Slow down for the small wonders. Discover a destination known for macro photography and critter diving.",
    heroImage: null,
    imageAlt: "",
    highlights: ["Macro photography", "Critter diving", "Close observation"],
    bodySections: [
      {
        title: "Small subjects, lasting impressions",
        body: "Anilao invites a different kind of attention. Known for critter diving and macro photography, it is a place to take your time, look closely, and appreciate the details that can be easy to miss on a reef.",
      },
      {
        title: "Plan a thoughtful dive",
        body: "Tell the team whether photography or critter diving is your focus when you inquire. Sites and conditions shape each dive, and wildlife encounters are never guaranteed. Give marine life space, keep clear of the seabed, and follow your guide's briefing.",
      },
    ],
    gallery: [],
    seo: {
      title: "Anilao Diving | M/Y Palau Sport",
      description:
        "Explore Anilao, known for macro photography and critter diving. Ask M/Y Palau Sport about itineraries, conditions, and trip details.",
    },
  },
  {
    slug: "apo-reef",
    title: "Apo Reef",
    region: "Mindoro",
    eyebrow: "Into the blue",
    shortDescription:
      "Follow the contours of the reef and look out into the blue at a destination known for reef and wall diving.",
    heroImage: null,
    imageAlt: "",
    highlights: ["Reef diving", "Wall diving", "Underwater landscapes"],
    bodySections: [
      {
        title: "A different view of the reef",
        body: "Apo Reef's reef and wall diving draws the eye from small details to broader underwater landscapes. It is an invitation to notice the shape of the reef as much as the life around it, with each site offering a different perspective.",
      },
      {
        title: "Let conditions guide the day",
        body: "Ask the team how Apo Reef could fit into your itinerary and which experience requirements apply. Dive plans depend on sea conditions and site assessments. Follow local guidance, maintain careful buoyancy, and leave coral and other marine life undisturbed.",
      },
    ],
    gallery: [],
    seo: {
      title: "Apo Reef Diving | M/Y Palau Sport",
      description:
        "Discover Apo Reef's reef and wall diving. Contact M/Y Palau Sport to discuss your experience, itinerary options, and trip details.",
    },
  },
  {
    slug: "busuanga",
    title: "Busuanga / Coron",
    region: "Northern Palawan",
    eyebrow: "Reefs meet history",
    shortDescription:
      "Explore the Busuanga and Coron area, where wreck diving and reef experiences offer contrasting perspectives.",
    heroImage: null,
    imageAlt: "",
    highlights: ["Wreck diving", "Reef exploration", "Varied dive interests"],
    bodySections: [
      {
        title: "Two sides of an underwater journey",
        body: "The Busuanga and Coron area is known for wrecks and reefs. That combination makes it an intriguing destination for divers interested in underwater structures as well as the living landscapes surrounding them.",
      },
      {
        title: "Choose dives that suit your experience",
        body: "Share your certification, recent diving experience, and interests with the team before planning a trip. Wreck sites can have distinct conditions and requirements; an itinerary should never imply automatic access to a wreck's interior. Ask which sites and activities are appropriate for your experience.",
      },
    ],
    gallery: [],
    seo: {
      title: "Busuanga & Coron Diving | M/Y Palau Sport",
      description:
        "Explore wreck and reef diving around Busuanga and Coron. Discuss suitable sites and itinerary options with the M/Y Palau Sport team.",
    },
  },
  {
    slug: "calauit-island",
    title: "Calauit Island",
    region: "Northern Palawan",
    eyebrow: "Wildlife, with care",
    shortDescription:
      "Discover a destination associated with dugongs, where respectful wildlife observation comes first.",
    heroImage: null,
    imageAlt: "",
    highlights: [
      "Possible dugong encounters",
      "Wildlife observation",
      "Conservation awareness",
    ],
    bodySections: [
      {
        title: "An encounter on nature's terms",
        body: "Calauit Island is associated with dugongs, making it a compelling destination for guests interested in marine wildlife. These are wild animals: their presence and behavior cannot be predicted, and no sighting can be promised.",
      },
      {
        title: "Make space for wildlife",
        body: "Ask the team about current local conservation guidance and permitted activities before planning your visit. Any observation should follow local rules and guide instructions. Never chase, touch, feed, or crowd animals, and let their behavior determine the encounter.",
      },
    ],
    gallery: [],
    seo: {
      title: "Calauit Island | M/Y Palau Sport",
      description:
        "Learn about Calauit Island and responsible wildlife observation. Ask M/Y Palau Sport about itinerary options and local conservation guidance.",
    },
  },
  {
    slug: "malapascua",
    title: "Malapascua",
    region: "Cebu",
    eyebrow: "A reason to look up",
    shortDescription:
      "A destination known for thresher sharks, offering the possibility of a memorable encounter in the blue.",
    heroImage: null,
    imageAlt: "",
    highlights: [
      "Known for thresher sharks",
      "Wildlife-focused diving",
      "Respectful observation",
    ],
    bodySections: [
      {
        title: "The possibility of something extraordinary",
        body: "Malapascua is known among divers for thresher sharks. The opportunity to observe these animals gives a visit a special sense of anticipation, while their presence remains a possibility rather than a promise.",
      },
      {
        title: "Prepare for the experience",
        body: "Discuss site conditions, experience requirements, and current wildlife guidance with the team when you inquire. Follow the dive briefing, allow animals to move freely, and respect any observation limits set by local guides or site managers.",
      },
    ],
    gallery: [],
    seo: {
      title: "Malapascua Diving | M/Y Palau Sport",
      description:
        "Explore Malapascua, known for thresher sharks. Ask M/Y Palau Sport about suitable itineraries, dive conditions, and responsible encounters.",
    },
  },
  {
    slug: "puerto-galera",
    title: "Puerto Galera",
    region: "Oriental Mindoro",
    eyebrow: "Life on the reef",
    shortDescription:
      "Take time to explore a destination known for reef biodiversity and the details of life beneath the surface.",
    heroImage: null,
    imageAlt: "",
    highlights: [
      "Reef biodiversity",
      "Reef exploration",
      "Underwater observation",
    ],
    bodySections: [
      {
        title: "Look closer at a living reef",
        body: "Puerto Galera's reputation for reef biodiversity offers a rewarding focus for a dive journey. Rather than a checklist of sightings, approach it as a chance to observe how different forms of marine life share an underwater landscape.",
      },
      {
        title: "Build a trip around your interests",
        body: "Share what you enjoy most about diving when you contact the team, whether it is observing marine life or photographing reef scenes. Suitable sites depend on conditions and experience. Follow local briefings and avoid touching or disturbing the reef.",
      },
    ],
    gallery: [],
    seo: {
      title: "Puerto Galera Diving | M/Y Palau Sport",
      description:
        "Discover Puerto Galera's reef biodiversity. Contact M/Y Palau Sport to discuss your dive interests and suitable trip options.",
    },
  },
  {
    slug: "tubbataha-reef",
    title: "Tubbataha Reef",
    region: "Sulu Sea",
    eyebrow: "Further from the everyday",
    shortDescription:
      "Set your sights on remote reef diving and the sense of perspective that comes with a journey out to sea.",
    heroImage: null,
    imageAlt: "",
    highlights: [
      "Remote reef diving",
      "An expedition perspective",
      "Reef conservation",
    ],
    bodySections: [
      {
        title: "A journey with the reef at its heart",
        body: "Tubbataha Reef brings remote reef diving into focus. Its distance from the everyday is part of the appeal: a trip built around time at sea, thoughtful dive planning, and attention to the marine environment.",
      },
      {
        title: "Plan ahead with the team",
        body: "Ask about current trip dates, applicable requirements, and itinerary details directly with the reservations team. Departures and dive plans are subject to confirmation and conditions. Follow local conservation rules and your guide's instructions throughout the visit.",
      },
    ],
    gallery: [],
    seo: {
      title: "Tubbataha Reef Diving | M/Y Palau Sport",
      description:
        "Explore remote reef diving at Tubbataha Reef. Request current trip details, requirements, and itinerary information from M/Y Palau Sport.",
    },
  },
  {
    slug: "verde-island",
    title: "Verde Island",
    region: "Verde Island Passage",
    eyebrow: "Where the water moves",
    shortDescription:
      "A destination known for marine biodiversity and currents, best explored with thoughtful planning and local guidance.",
    heroImage: null,
    imageAlt: "",
    highlights: [
      "Marine biodiversity",
      "Current-aware dive planning",
      "Reef observation",
    ],
    bodySections: [
      {
        title: "A dynamic underwater landscape",
        body: "Verde Island is known for marine biodiversity and currents. It invites divers to appreciate both the life on the reef and the water moving around it, with conditions playing an important role in how each dive unfolds.",
      },
      {
        title: "Match the plan to the conditions",
        body: "Tell the team about your experience and comfort with currents before arranging a trip. Site choices and dive plans should reflect current conditions and your guide's assessment. Attend every briefing and keep the reef undisturbed through careful buoyancy and positioning.",
      },
    ],
    gallery: [],
    seo: {
      title: "Verde Island Diving | M/Y Palau Sport",
      description:
        "Discover Verde Island's marine biodiversity. Discuss dive experience, conditions, and itinerary options with M/Y Palau Sport.",
    },
  },
];

const destinationMedia = {
  anilao: getMediaCredit("anilao-nudibranch"),
  "apo-reef": getMediaCredit("apo-reef-island"),
  "tubbataha-reef": getMediaCredit("tubbataha-sharks"),
};

export const destinations: Destination[] = destinationRecords.map(
  (destination) => {
    const photo =
      destinationMedia[destination.slug as keyof typeof destinationMedia];
    const gallery =
      destination.slug === "tubbataha-reef"
        ? [getMediaCredit("tubbataha-reef-diver")].map((image) => ({
            src: image.src,
            alt: image.alt,
            caption:
              "A diver documents the reef at Tubbataha. Destination photography, not a Palau Sport trip image.",
          }))
        : [];
    return {
      ...destination,
      heroImage: photo?.src ?? null,
      imageAlt: photo?.alt ?? "",
      gallery,
    };
  },
);

export const featuredDestinations = [
  "anilao",
  "apo-reef",
  "tubbataha-reef",
].map((slug) => destinations.find((destination) => destination.slug === slug)!);
