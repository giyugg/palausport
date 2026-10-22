import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Common Areas",
  "Explore the shared spaces described aboard M/Y Palau Sport, from the dive deck to dining and alfresco areas, and ask about current onboard arrangements.",
  "/the-vessel/common-areas",
);

const spaces = [
  {
    title: "Dive deck",
    description:
      "The starting point for a day in the water. Ask about gear setup, equipment storage and the diving arrangements for your trip.",
  },
  {
    title: "Dining & lounge",
    description:
      "A shared setting for meals and conversation between dives. Speak with the team about meal arrangements and any dietary requirements before you travel.",
  },
  {
    title: "Alfresco spaces",
    description:
      "Time in the open air is part of life at sea. Ask about the yacht’s outdoor areas and how they are used during your itinerary.",
  },
  {
    title: "Equipment & charging",
    description:
      "Bringing a camera or specialist equipment? Confirm charging provision, electrical requirements and storage arrangements with the team in advance.",
  },
];

export default function CommonAreasPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The vessel / Common areas"
        title="Room for the moments between dives."
        description="Share a meal, talk through the day’s discoveries, or spend a quiet moment looking out to sea. The yacht’s shared spaces are part of the liveaboard experience."
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Life on board"
            title="A place to gather. A place to pause."
            description="The vessel’s published overview describes a dive deck, dining and lounge space, and alfresco areas. Current facilities and arrangements should be confirmed with the team."
          />
          <div className="editorial-grid">
            {spaces.map((space) => (
              <article className="detail-card" key={space.title}>
                <h3>{space.title}</h3>
                <p>{space.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <TextLink href="/the-vessel/accommodation">
              Explore the cabins
            </TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
