import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "The Crew",
  "Connect with the M/Y Palau Sport team and ask about the crew, dive arrangements and support for your next Philippine liveaboard trip.",
  "/about/crew",
);

export default function CrewPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The people behind the journey"
        title="Meet your team, before you set sail."
        description="A liveaboard trip is a shared experience. Talk with the Palau Sport team about the people and arrangements that will support your journey."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Crew introductions"
            title="A personal introduction is on its way."
            description="Our crew profiles and portraits are being prepared for this website."
          />
          <div className="prose-copy">
            <p>
              In the meantime, contact the team for current crew information and
              questions about dive supervision, briefings, equipment
              arrangements or travelling with a group.
            </p>
            <p>
              Let us know your certification level and recent diving experience
              so the team can discuss the right questions for your chosen
              itinerary.
            </p>
            <TextLink href="/contact">Ask the team a question</TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
