import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Partner Resorts",
  "Ask the M/Y Palau Sport team about shore stays and travel arrangements before or after your Philippine liveaboard trip.",
  "/partners/resorts",
);

export default function PartnerResortsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Beyond the liveaboard"
        title="A little more time in the islands."
        description="If you are considering a shore stay before or after your liveaboard, start by discussing your route and travel dates with the team."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Partner resorts"
            title="Shore-stay information is being prepared."
            description="Our approved partner listings will appear here when their details are ready to share."
          />
          <div className="prose-copy">
            <p>
              For now, contact the team about your intended arrival and
              departure points, the number of extra nights you have in mind, and
              any transfer questions.
            </p>
            <p>
              Accommodation availability, services and any separate booking
              terms should be confirmed directly before making arrangements.
            </p>
            <TextLink href="/contact">Discuss your travel plans</TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
