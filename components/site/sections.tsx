import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Waves } from "lucide-react";

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
        <span className="intro-ornament" aria-hidden="true">
          <Waves />
        </span>
      </div>
    </section>
  );
}

export function InquiryBand() {
  return (
    <section className="inquiry-band">
      <div className="site-container inquiry-band-inner">
        <div>
          <p className="eyebrow">THE OCEAN IS CALLING</p>
          <h2>Where will the water take you?</h2>
          <p>
            Tell us what you have in mind. Let’s plan your next dive adventure.
          </p>
        </div>
        <Link href="/book-now" className="button button-light">
          Book / Inquire
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function BookingSteps() {
  const steps = [
    {
      title: "Find your inspiration",
      body: "Explore our destinations and discover the kind of diving you love.",
    },
    {
      title: "Start a conversation",
      body: "Share your preferred dates, destination and group size with the team.",
    },
    {
      title: "Plan the details together",
      body: "Our team confirms the itinerary, availability and next steps directly with you.",
    },
  ];
  return (
    <ol className="booking-steps">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="step-number">0{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function MediaPlaceholder({
  title,
  kind = "photography",
  className = "",
}: {
  title: string;
  kind?: string;
  className?: string;
}) {
  return (
    <div
      className={`media-placeholder ${className}`}
      role="img"
      aria-label={`${title}: approved ${kind} to follow`}
    >
      <Compass size={52} strokeWidth={0.65} aria-hidden="true" />
      <div>
        <span className="eyebrow">A GLIMPSE ON BOARD</span>
        <p>{title}</p>
        <span className="placeholder-note">Approved {kind} to follow</span>
      </div>
    </div>
  );
}
