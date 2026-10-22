import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Chase Boats",
  "Plan the details of dive-site transfers aboard M/Y Palau Sport. Ask the team about chase boats, boarding arrangements and equipment handling.",
  "/the-vessel/chase-boats",
);

export default function ChaseBoatsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The vessel / Chase boats"
        title="From the yacht to the dive."
        description="The journey to a dive site is part of your day on the water. Ask about chase-boat and transfer arrangements for the itinerary you have in mind."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Planning your dive day"
            title="Know what to expect at the water’s edge."
            description="Confirm the practical details with the team before you travel, especially if you have individual boarding or equipment needs."
          />
          <div className="prose-copy">
            <p>
              Dive-site access and transfers depend on the route, sea conditions
              and operational plans. The team can explain the arrangements for
              your proposed trip and how the dive-day briefing will work.
            </p>
            <p>
              Tell the team if you are travelling with camera equipment, need
              assistance boarding, or have questions about carrying and storing
              dive gear. Chase-boat specifications and photographs will be added
              after review.
            </p>
            <TextLink href="/contact">Ask about dive transfers</TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
