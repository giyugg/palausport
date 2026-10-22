import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  MapPin,
  Sailboat,
  Waves,
} from "lucide-react";
import { featuredDestinations } from "@/content/destinations";
import { getMediaCredit } from "@/content/media";
import { DestinationCard } from "@/components/site/destination-card";
import { PhotoCredit } from "@/components/site/photo-credit";
import {
  BookingSteps,
  InquiryBand,
  MediaPlaceholder,
  SectionHeading,
  TextLink,
} from "@/components/site/sections";

export const metadata: Metadata = { alternates: { canonical: "/" } };
const hero = getMediaCredit("tubbataha-reef-diver");
const reef = getMediaCredit("tubbataha-sharks");

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="hero-image"
          src={hero.src}
          alt={hero.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="site-container hero-content">
          <p className="eyebrow">PHILIPPINE LIVEABOARD DIVING</p>
          <h1 id="home-title">
            A different world.
            <br />
            Just <em>beneath the surface.</em>
          </h1>
          <p className="hero-copy">
            Wake up to the ocean. Dive into the extraordinary. Discover the
            Philippines aboard M/Y Palau Sport.
          </p>
          <div className="hero-actions">
            <Link href="/packages" className="button button-light">
              Explore Trips
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/the-vessel" className="button button-ghost-light">
              Discover the Yacht
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="site-container hero-bottom">
          <a className="hero-scroll" href="#destinations">
            <ArrowDown size={17} aria-hidden="true" />
            There’s more to discover
          </a>
          <p className="hero-credit">
            Tubbataha Reef, Philippines
            <br />
            Photo: Anna Varona · CC BY 4.0
            <br />
            <Link href="/image-credits">
              Destination photograph · Cropped for layout
            </Link>
          </p>
        </div>
      </section>
      <div className="intro-strip">
        <div className="site-container intro-strip-inner">
          <p>For the love of the ocean. And everything beneath it.</p>
          <span>
            <MapPin size={13} aria-hidden="true" />
            The Philippines, from a different perspective
          </span>
        </div>
      </div>
      <section className="section" id="destinations">
        <div className="site-container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="FIND YOUR NEXT ADVENTURE"
              title="Extraordinary places. Unforgettable perspectives."
              description="From the smallest reef residents to the wonder of the open blue, find the underwater world that speaks to you."
            />
            <TextLink href="/destinations">Explore all destinations</TextLink>
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
      <section className="section section-mist">
        <div className="site-container">
          <div className="editorial-grid vessel-preview">
            <div>
              <MediaPlaceholder title="Meet M/Y Palau Sport" />
              <div className="vessel-note">
                <Sailboat size={20} strokeWidth={1.2} aria-hidden="true" />
                <p>Your home on the water</p>
                <span>M/Y Palau Sport</span>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="LIFE ABOARD PALAU SPORT"
                title="The journey is part of the destination."
                description="A quiet morning at sea. Stories shared after a dive. A cabin to call your own. Get to know the yacht that brings it all together."
              />
              <p className="small-note" style={{ marginTop: 22 }}>
                Explore the accommodation, common spaces and diving
                arrangements, then talk with our team about life on board.
              </p>
              <TextLink href="/the-vessel">Discover the yacht</TextLink>
            </div>
          </div>
          <div className="feature-row">
            <article className="feature-item">
              <Waves size={24} strokeWidth={1.2} aria-hidden="true" />
              <h3>A little closer to the ocean</h3>
              <p>
                Make the water your starting point. Explore the places and
                diving experiences that inspire your next journey.
              </p>
            </article>
            <article className="feature-item">
              <Sailboat size={24} strokeWidth={1.2} aria-hidden="true" />
              <h3>Life at a different pace</h3>
              <p>
                Discover cabin options and shared spaces for the moments between
                getting in the water.
              </p>
            </article>
            <article className="feature-item">
              <Compass size={24} strokeWidth={1.2} aria-hidden="true" />
              <h3>Your adventure starts here</h3>
              <p>
                Talk through your interests and experience with the team, and
                take the next step toward a thoughtful itinerary.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="THE NEXT CHAPTER"
              title="Let the sea set the scene."
            />
            <TextLink href="/packages">Plan your trip</TextLink>
          </div>
          <div className="trip-feature">
            <figure className="trip-feature-image">
              <Image
                src={reef.src}
                alt={reef.alt}
                fill
                sizes="(max-width:767px) 100vw, 50vw"
              />
              <span>Tubbataha Reef · Destination inspiration</span>
            </figure>
            <div className="trip-feature-content">
              <p className="eyebrow">REMOTE REEFS. OPEN BLUE.</p>
              <h3>Dreaming of Tubbataha?</h3>
              <p>
                Find inspiration in a remote reef destination. Share your
                preferred travel dates and ask our team about current schedules,
                trip requirements and availability.
              </p>
              <TextLink href="/contact?destination=tubbataha-reef">
                Ask about Tubbataha
              </TextLink>
              <p className="small-note">
                Itineraries and wildlife encounters vary. Dates and availability
                are subject to confirmation.
              </p>
            </div>
          </div>
          <figure>
            <PhotoCredit src={reef.src} />
          </figure>
        </div>
      </section>
      <section className="section section-mist">
        <div className="site-container">
          <SectionHeading
            eyebrow="FROM INSPIRATION TO ITINERARY"
            title="Your next dive begins with a conversation."
            description="A few simple steps, with the details worked out together."
          />
          <BookingSteps />
        </div>
      </section>
      <InquiryBand />
    </main>
  );
}
