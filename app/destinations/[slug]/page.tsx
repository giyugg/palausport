import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight, Compass } from "lucide-react";
import { destinations } from "@/content/destinations";
import { DestinationCard } from "@/components/site/destination-card";
import { PhotoCredit } from "@/components/site/photo-credit";
import {
  InquiryBand,
  MediaPlaceholder,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};
  return pageMetadata(
    destination.seo.title,
    destination.seo.description,
    `/destinations/${slug}`,
    destination.heroImage
      ? { src: destination.heroImage, alt: destination.imageAlt }
      : undefined,
  );
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  const inquiryHref = `/contact?destination=${encodeURIComponent(slug)}`;
  const related = destinations.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <main id="main-content">
      <section className="destination-detail-hero">
        <div className="destination-detail-copy">
          <p className="eyebrow">
            {destination.region} · {destination.eyebrow}
          </p>
          <h1>{destination.title}</h1>
          <p>{destination.shortDescription}</p>
          <Link href={inquiryHref} className="button button-primary">
            Inquire about this destination
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="destination-detail-image">
          {destination.heroImage ? (
            <Image
              src={destination.heroImage}
              alt={destination.imageAlt}
              fill
              preload
              sizes="(max-width:767px) 100vw, 50vw"
            />
          ) : (
            <MediaPlaceholder title={destination.title} />
          )}
        </div>
      </section>
      {destination.heroImage && (
        <div className="site-container">
          <figure>
            <PhotoCredit src={destination.heroImage} />
          </figure>
        </div>
      )}
      <section className="section">
        <div className="site-container">
          <ul className="highlight-list">
            {destination.highlights.map((highlight) => (
              <li key={highlight}>
                <Compass size={17} strokeWidth={1.3} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="destination-body">
            <div>
              {destination.bodySections.map((section) => (
                <article key={section.title} className="prose-copy">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
            <aside className="detail-card">
              <p className="eyebrow">MAKE IT YOUR NEXT ADVENTURE</p>
              <h3>Let’s talk about {destination.title}.</h3>
              <p>
                Share your preferred dates, group size and diving experience.
                The team can help you understand the next steps.
              </p>
              <Link href={inquiryHref} className="button button-primary">
                Request availability
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <p className="approval-note">
                Dates and availability are subject to confirmation. An inquiry
                is not a confirmed reservation.
              </p>
            </aside>
          </div>
        </div>
      </section>
      {destination.gallery.length > 0 && (
        <section className="section section-mist">
          <div className="site-container">
            <SectionHeading
              eyebrow="BELOW THE SURFACE"
              title={`A glimpse of ${destination.title}.`}
            />
            <div className="editorial-grid" style={{ marginTop: 40 }}>
              {destination.gallery.map((photo) => (
                <figure key={photo.src}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1600}
                    height={1000}
                    sizes="(max-width:767px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto", borderRadius: 16 }}
                  />
                  <PhotoCredit src={photo.src} />
                  <p className="photo-caption">{photo.caption}</p>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="site-container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="KEEP EXPLORING"
              title="Another world awaits."
            />
            <TextLink href="/destinations">All destinations</TextLink>
          </div>
          <div className="destination-grid featured-grid">
            {related.map((item) => (
              <DestinationCard key={item.slug} destination={item} />
            ))}
          </div>
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
