import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  MediaPlaceholder,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Accommodation",
  "Explore suite and twin bunk cabin options aboard M/Y Palau Sport, and ask the team about your preferred cabin arrangement.",
  "/the-vessel/accommodation",
);

export default function AccommodationPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="THE VESSEL / ACCOMMODATION"
        title="Rest well. Dive again."
        description="A space to make your own, with the ocean never far away. Explore the cabin styles described aboard M/Y Palau Sport."
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="YOUR SPACE AT SEA"
            title="Choose your kind of comfort."
            description="The published accommodation overview lists suites and twin bunk cabins with ensuite bathrooms. Confirm current layouts, amenities and cabin availability before booking."
          />
          <div className="cabin-grid">
            <article className="cabin-card">
              <MediaPlaceholder title="Suite cabins" />
              <div className="cabin-copy">
                <h2>Suite cabins</h2>
                <p>
                  For guests considering a suite, ask the team about the current
                  bed arrangement, storage and ensuite facilities. Share whether
                  you are travelling as a couple or with a companion.
                </p>
                <TextLink href="/contact?topic=Suite%20cabin%20inquiry">
                  Ask about a suite
                </TextLink>
              </div>
            </article>
            <article className="cabin-card">
              <MediaPlaceholder title="Twin bunk cabins" />
              <div className="cabin-copy">
                <h2>Twin bunk cabins</h2>
                <p>
                  A bunk-style option for sharing your liveaboard experience.
                  Discuss cabin sharing, bunk access, storage and ensuite
                  facilities with the team before choosing your arrangement.
                </p>
                <TextLink href="/contact?topic=Twin%20bunk%20cabin%20inquiry">
                  Ask about a twin cabin
                </TextLink>
              </div>
            </article>
          </div>
          <p className="approval-note">
            Cabin photography and amenity details will be added after owner
            approval. These placeholders are not representations of the actual
            interiors.
          </p>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
