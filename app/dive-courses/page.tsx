import { pageMetadata } from "@/lib/metadata";
import {
  InquiryBand,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata = pageMetadata(
  "Dive Courses",
  "Ask M/Y Palau Sport about current dive courses, prerequisites, instructor availability and whether training can fit your proposed liveaboard journey.",
  "/dive-courses",
);

export default function DiveCoursesPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Keep exploring"
        title="Make room to learn."
        description="Thinking about your next step in diving? Discuss your goals with the team and find out whether a course can fit the journey you are planning."
      />
      <section className="section">
        <div className="site-container editorial-grid">
          <SectionHeading
            eyebrow="Course inquiries"
            title="Find the right next step for you."
            description="Course offerings, instructor availability, prerequisites and rates need to be confirmed for each request."
          />
          <div className="prose-copy">
            <p>
              Share your current certification, recent diving experience and the
              skills you would like to develop. Include your preferred itinerary
              and dates so the team can discuss what may be possible.
            </p>
            <p>
              Before making travel plans around a course, request the course
              name, training agency, prerequisites, expected schedule, equipment
              needs and complete cost in writing.
            </p>
            <TextLink href="/contact">Ask about dive courses</TextLink>
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
