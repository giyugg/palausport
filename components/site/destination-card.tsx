import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import type { Destination } from "@/content/destinations";
import { PhotoCredit } from "./photo-credit";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <figure>
      <Link
        href={`/destinations/${destination.slug}`}
        className="destination-card"
      >
        {destination.heroImage ? (
          <Image
            src={destination.heroImage}
            alt={destination.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        ) : (
          <div className="destination-placeholder">
            <span>Destination photography to follow</span>
            <Compass size={60} strokeWidth={0.6} aria-hidden="true" />
          </div>
        )}
        <div className="destination-card-shade" aria-hidden="true" />
        <div className="destination-card-content">
          <span className="eyebrow">{destination.region}</span>
          <h3>{destination.title}</h3>
          <p>{destination.highlights.slice(0, 2).join(" · ")}</p>
        </div>
        <span className="destination-card-arrow" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </Link>
      {destination.heroImage && <PhotoCredit src={destination.heroImage} />}
    </figure>
  );
}
