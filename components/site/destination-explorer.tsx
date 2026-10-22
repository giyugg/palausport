"use client";

import { useState } from "react";
import { destinations } from "@/content/destinations";
import { DestinationCard } from "./destination-card";

const filters = [
  { label: "All destinations", slugs: null },
  {
    label: "Reefs & walls",
    slugs: ["apo-reef", "puerto-galera", "tubbataha-reef", "verde-island"],
  },
  {
    label: "Marine encounters",
    slugs: ["anilao", "calauit-island", "malapascua"],
  },
  { label: "Wrecks & reefs", slugs: ["busuanga"] },
] as const;

export function DestinationExplorer() {
  const [filter, setFilter] = useState(0);
  const selected = filters[filter];
  const visible = destinations.filter(
    (destination) =>
      !selected.slugs ||
      (selected.slugs as readonly string[]).includes(destination.slug),
  );
  return (
    <>
      <div
        className="destination-filter"
        role="group"
        aria-label="Filter destinations by interest"
      >
        {filters.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className="filter-button"
            aria-pressed={filter === index}
            onClick={() => setFilter(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} destinations
      </p>
      <div className="destination-grid">
        {visible.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </>
  );
}
