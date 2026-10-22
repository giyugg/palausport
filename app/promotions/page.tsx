import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Promotions",
  "Contact M/Y Palau Sport for current trip information and any confirmed offers. Dates, rates, availability and promotion terms are subject to confirmation.",
  "/promotions",
);

export default function PromotionsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Trip updates"
        title="Your next chapter at sea."
        description="Find the destination that calls to you, then ask the team about current trip options and any confirmed offers."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Promotions"
            title="Ask us what’s coming up."
            description="There are no confirmed promotions published on this website at the moment."
          />
          <div className="prose-copy">
            <p>
              Share your preferred destination, approximate dates and group
              size. The team can provide the current trip details and explain
              any applicable offer, including its dates and terms.
            </p>
            <p>
              Rates and availability are subject to confirmation. An inquiry
              does not reserve a place aboard.
            </p>
            <TextLink href="/book-now">Request trip information</TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
