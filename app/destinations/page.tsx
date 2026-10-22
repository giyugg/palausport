import { pageMetadata } from "@/lib/metadata";
import { DestinationExplorer } from "@/components/site/destination-explorer";
import { InquiryBand, PageIntro } from "@/components/site/sections";

export const metadata = pageMetadata(
  "Dive Destinations",
  "Explore eight Philippine dive destinations, from Anilao’s small wonders to the remote reefs of Tubbataha. Find your next liveaboard inspiration.",
  "/destinations",
);

export default function DestinationsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="OUR DESTINATIONS"
        title="One ocean. So many ways to explore."
        description="Quiet moments on a reef. A glimpse into the blue. Discover the Philippine waters that make you want to dive a little deeper."
      />
      <section className="section">
        <div className="site-container">
          <DestinationExplorer />
          <p className="small-note" style={{ marginTop: 32 }}>
            Destinations are inspiration for planning. Routes, conditions and
            wildlife encounters vary; ask our team about a suitable itinerary.
          </p>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
