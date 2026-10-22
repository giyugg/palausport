import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand${inverse ? " brand-inverse" : ""}`}
    >
      <span className="sr-only">Home: </span>
      <svg
        className="brand-symbol"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22.5" stroke="currentColor" />
        <path
          d="M11 27c5-5 8 5 13 0s8 5 13 0M11 33c5-5 8 5 13 0s8 5 13 0M24 9l2.5 8.5L35 20l-8.5 2.5L24 31l-2.5-8.5L13 20l8.5-2.5L24 9Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <span className="brand-name">PALAU SPORT</span>
        <span className="brand-caption">M/Y · PHILIPPINES</span>
      </span>
    </Link>
  );
}
