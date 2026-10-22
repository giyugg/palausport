import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand inverse />
            <p>
              A home on the water.
              <br />A new world beneath it.
            </p>
            <span className="footer-location">
              Philippine liveaboard diving
            </span>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/destinations">Our destinations</Link>
            <Link href="/the-vessel">The vessel</Link>
            <Link href="/the-vessel/accommodation">Accommodation</Link>
            <Link href="/about">Our story</Link>
          </div>
          <div>
            <h2>Your next adventure</h2>
            <Link href="/packages">Trips & itineraries</Link>
            <Link href="/book-now">How to inquire</Link>
            <Link href="/dive-courses">Dive courses</Link>
            <Link href="/contact">Contact the team</Link>
          </div>
          <div className="footer-contact">
            <h2>Let’s talk diving</h2>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p>{site.location}</p>
            <p className="footer-small">
              Dates, rates and availability are confirmed directly with the
              team.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 M/Y Palau Sport. First website draft.</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/image-credits">Image credits</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
