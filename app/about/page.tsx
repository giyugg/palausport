import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "About M/Y Palau Sport",
  "Get to know M/Y Palau Sport, a liveaboard dive yacht exploring the Philippines, and start planning a journey around your interests.",
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The story aboard"
        title="A different perspective on the Philippines."
        description="M/Y Palau Sport brings your home base along for the journey, connecting life aboard a dive yacht with the extraordinary underwater landscapes of the Philippines."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="M/Y Palau Sport"
            title="More time close to the sea."
            description="A liveaboard journey lets the destination set the rhythm: time in the water, shared stories on deck, and the anticipation of the next dive."
          />
          <div className="prose-copy">
            <p>
              Palau Sport is a Philippines-based liveaboard dive yacht. Its
              destination collection spans critter-rich Anilao, the reefs of Apo
              Reef, the Coron area, and the remote waters of Tubbataha,
              alongside other Philippine dive destinations.
            </p>
            <p>
              Every destination offers a different reason to get in the water.
              Explore the places that interest you, learn about the yacht, then
              speak with the team about a trip that suits your experience and
              travel plans.
            </p>
            <TextLink href="/destinations">Explore the destinations</TextLink>
          </div>
        </div>
      </section>
      <section className="section section-mist">
        <div className="site-container">
          <SectionHeading
            eyebrow="Your journey, thoughtfully considered"
            title="Start with a conversation."
            description="The best trip planning begins with the details that matter to you."
          />
          <div className="editorial-grid">
            <article className="detail-card">
              <h3>Discover life aboard</h3>
              <p>
                Compare cabin options and explore the shared spaces before
                deciding how you would like to travel.
              </p>
              <TextLink href="/the-vessel">Discover the yacht</TextLink>
            </article>
            <article className="detail-card">
              <h3>Plan with the team</h3>
              <p>
                Share your dive experience, preferred dates, group size and
                interests. Ask the team about route suitability, onboard
                arrangements and the next steps.
              </p>
              <TextLink href="/contact">Contact the team</TextLink>
            </article>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
