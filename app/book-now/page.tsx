import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  BookingSteps,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Book / Inquire",
  "Start planning your M/Y Palau Sport liveaboard adventure. Learn how to request trip details, availability and cabin information directly from the team.",
  "/book-now",
);

const faqs = [
  {
    question: "How do I request a trip?",
    answer:
      "Explore our destinations, then contact the team with your preferred dates, group size and diving interests. The team will confirm the next steps directly with you.",
  },
  {
    question: "Does sending an inquiry reserve my place?",
    answer:
      "An inquiry is a request for information, not a confirmed reservation. The team will confirm availability, details and any booking requirements separately.",
  },
  {
    question: "Where can I find current schedules and rates?",
    answer:
      "Contact the team for the latest schedules, rates and package inclusions. Current owner-approved departures will be added to the trips page when available.",
  },
  {
    question: "What should I tell the team?",
    answer:
      "Share your destination, preferred travel dates, number of guests, diving certification and experience, plus any cabin preferences. You can also ask about equipment and trip requirements.",
  },
];

export default function BookNowPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="BOOK / INQUIRE"
        title="Let’s make your next dive a little closer."
        description="A great adventure starts with a conversation. Tell us what you have in mind, and our team will help you explore the details."
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="Three steps toward the open water."
          />
          <BookingSteps />
          <div className="empty-state" style={{ marginTop: 64 }}>
            <div className="editorial-grid">
              <div>
                <p className="eyebrow">READY WHEN YOU ARE</p>
                <h2 style={{ marginTop: 16 }}>
                  Tell us about your next adventure.
                </h2>
              </div>
              <div className="prose-copy">
                <p>
                  Have a destination in mind, a group to bring, or a question
                  about life on board? Start an inquiry and work through the
                  possibilities with our team.
                </p>
                <Link
                  href="/contact"
                  className="button button-primary"
                  style={{ marginTop: 24 }}
                >
                  Start an inquiry
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <p className="small-note" style={{ marginTop: 18 }}>
                  Dates, rates and availability are subject to confirmation. An
                  inquiry does not create a reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-mist">
        <div className="site-container">
          <SectionHeading
            eyebrow="A FEW USEFUL DETAILS"
            title="Before you set sail."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <TextLink href="/the-vessel/accommodation">
              Explore accommodation
            </TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
