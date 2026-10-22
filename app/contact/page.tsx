import { pageMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { InquiryForm } from "@/components/site/inquiry-form";
import {
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Contact & Inquiries",
  "Contact the M/Y Palau Sport team to discuss Philippine liveaboard trips, cabin options and current availability.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="LET’S TALK DIVING"
        title="Every adventure starts somewhere."
        description="Tell us about your next one. From a first question to the finer details, get in touch with the Palau Sport team."
      />
      <section className="section">
        <div className="site-container contact-grid">
          <div>
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="A little closer to your next dive."
              description="Ask about destinations, current trip schedules, cabin arrangements or travelling with a group."
            />
            <div className="contact-methods">
              <div className="contact-method">
                <Mail aria-hidden="true" />
                <div>
                  <h3>Send an email</h3>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <div className="contact-method">
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Based in</h3>
                  <p>{site.location}</p>
                </div>
              </div>
              <div className="contact-method">
                <MessageCircle aria-hidden="true" />
                <div>
                  <h3>A conversation, then a plan</h3>
                  <p>
                    The team will confirm trip details and next steps directly
                    with you. An inquiry is not a reservation.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <TextLink href="/book-now">How to plan your trip</TextLink>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="inquiry-form">
                <h2>Prepare an email inquiry</h2>
                <p className="inquiry-form-intro">
                  You can email{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a> directly.
                </p>
              </div>
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
