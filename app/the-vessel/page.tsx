import { pageMetadata } from "@/lib/metadata";
import { BedDouble, Coffee, Waves } from "lucide-react";
import {
  InquiryBand,
  MediaPlaceholder,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "The Vessel",
  "Meet M/Y Palau Sport, your home on the water for a Philippine liveaboard diving journey. Explore cabin options and life aboard.",
  "/the-vessel",
);

export default function VesselPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="MEET THE YACHT"
        title="Your home, beyond the shore."
        description="A dive journey is made of more than time underwater. Meet M/Y Palau Sport and discover the spaces for the rest of your adventure."
      />
      <section className="section">
        <div className="site-container editorial-grid vessel-preview">
          <MediaPlaceholder title="M/Y Palau Sport" />
          <div>
            <SectionHeading
              eyebrow="AT A GLANCE"
              title="Made for life at sea."
              description="The operator’s published vessel overview describes the following layout. Please confirm current specifications and arrangements with the team."
            />
            <dl className="spec-list">
              <div>
                <dt>Vessel length</dt>
                <dd>Approximately 38 m</dd>
              </div>
              <div>
                <dt>Guest accommodation</dt>
                <dd>Up to 24 guests</dd>
              </div>
              <div>
                <dt>Cabin types</dt>
                <dd>Suites & twin bunk cabins</dd>
              </div>
              <div>
                <dt>Published cabin layout</dt>
                <dd>3 suites · 9 twin bunk cabins</dd>
              </div>
            </dl>
            <p className="approval-note">
              Reference specifications are awaiting owner sign-off for this
              website draft.{" "}
              <a
                href="https://palausport.com/the-vessel/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                View the operator’s vessel overview.
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="section section-mist">
        <div className="site-container">
          <SectionHeading
            eyebrow="BETWEEN THE DIVES"
            title="Find your place on board."
          />
          <div className="feature-row">
            <article className="feature-item">
              <BedDouble size={26} strokeWidth={1.2} aria-hidden="true" />
              <h3>A cabin to come back to</h3>
              <p>
                Explore suite and twin bunk cabin options, then ask the team
                about the right arrangement for your group.
              </p>
              <TextLink href="/the-vessel/accommodation">
                Explore accommodation
              </TextLink>
            </article>
            <article className="feature-item">
              <Coffee size={26} strokeWidth={1.2} aria-hidden="true" />
              <h3>Room to unwind</h3>
              <p>
                Learn about the dining, lounge and alfresco spaces that bring
                people together between dives.
              </p>
              <TextLink href="/the-vessel/common-areas">
                View common areas
              </TextLink>
            </article>
            <article className="feature-item">
              <Waves size={26} strokeWidth={1.2} aria-hidden="true" />
              <h3>From deck to dive site</h3>
              <p>
                Find out about chase boats and ask how diving and transfers work
                on your proposed itinerary.
              </p>
              <TextLink href="/the-vessel/chase-boats">
                Meet the chase boats
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
