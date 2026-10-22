import { pageMetadata } from "@/lib/metadata";
import {
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Privacy Information",
  "Draft privacy information for the M/Y Palau Sport website, including email inquiries and information needed before a public launch.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Your information"
        title="Privacy, with clarity."
        description="This draft explains the inquiry features available on this website. The owner must review and approve a complete privacy notice before public launch."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Draft for owner review"
            title="How inquiries work here."
            description="This notice describes the website draft and does not replace the operator’s final privacy policy."
          />
          <div className="prose-copy">
            <h3>Email inquiries</h3>
            <p>
              This website does not currently have an active inquiry-submission
              backend. Email inquiry links open your chosen email application.
              Your message is sent only when you choose to send it there, using
              your email provider.
            </p>
            <p>
              Information you include in an email, such as your name, contact
              details, travel preferences or message, will be shared with the
              recipient. Include only what is needed for your inquiry; please do
              not send payment-card details or identity documents through this
              website.
            </p>
            <h3>Website services</h3>
            <p>
              No analytics service is configured for this website draft. Hosting
              providers and services used to deliver the website may process
              technical information under their own terms. The owner must
              confirm those providers, any cookies, and their data practices
              before publication.
            </p>
            <h3>Other websites</h3>
            <p>
              If you follow a link to another website or service, its own
              privacy notice and terms apply. Review them before providing
              personal information.
            </p>
            <h3>Your questions</h3>
            <p>
              Contact the Palau Sport team with privacy questions or requests
              relating to an inquiry you have sent. The final notice must
              identify the responsible business, its contact details, data
              retention practices and the process for exercising applicable
              privacy rights.
            </p>
            <TextLink href="/contact">Contact the team</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
