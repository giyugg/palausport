import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, TextLink } from "@/components/site/sections";

export default function NotFound() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="404 / OFF THE CHART"
        title="Let’s get you back on course."
        description="This page has drifted out of reach. There’s still plenty to discover."
      />
      <section className="section">
        <div className="site-container">
          <div className="hero-actions">
            <Link href="/destinations" className="button button-primary">
              Explore destinations
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <TextLink href="/">Return home</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
