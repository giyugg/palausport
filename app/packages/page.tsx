import { pageMetadata } from "@/lib/metadata";
import {
  BookingSteps,
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";
import { DestinationCard } from "@/components/site/destination-card";
import { featuredDestinations } from "@/content/destinations";

export const metadata = pageMetadata(
  "Trips & Itineraries",
  "Plan a Philippine liveaboard journey with M/Y Palau Sport. Explore destination inspiration and contact the team for current trip schedules and details.",
  "/packages",
);

export default function PackagesPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="TRIPS & ITINERARIES"
        title="A new adventure on the horizon."
        description="Start with a place that inspires you. We’ll help you explore the possibilities for your next liveaboard journey."
      />
      <section className="section">
        <div className="site-container">
          <div className="empty-state">
            <SectionHeading
              eyebrow="LET’S PLAN SOMETHING"
              title="Your next trip starts here."
              description="Ask our team for current schedules, routes and package details. Let us know your preferred dates and the destinations you have in mind."
            />
            <div style={{ marginTop: 24 }}>
              <TextLink href="/book-now">Find out how to inquire</TextLink>
            </div>
            <p className="small-note" style={{ marginTop: 20 }}>
              Confirmed departures and rates will appear here once approved.
              Dates and availability are subject to confirmation.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-mist">
        <div className="site-container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="A LITTLE INSPIRATION"
              title="Where would you like to go?"
            />
            <TextLink href="/destinations">All destinations</TextLink>
          </div>
          <div className="destination-grid featured-grid">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="PLANNING YOUR JOURNEY"
            title="From a first idea to the finer details."
          />
          <BookingSteps />
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
