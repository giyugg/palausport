import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { mediaCredits } from "@/content/media";
import { PageIntro } from "@/components/site/sections";

export const metadata = pageMetadata(
  "Image Credits",
  "Photography credits and Creative Commons license information for destination images used in the M/Y Palau Sport website draft.",
  "/image-credits",
);

export default function ImageCreditsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="THROUGH THEIR LENS"
        title="An ocean of inspiration."
        description="Thank you to the photographers who make these places visible. These are licensed destination photographs, not photographs of Palau Sport trips, guests or crew."
      />
      <section className="section">
        <div className="site-container">
          <div className="editorial-grid">
            {mediaCredits.map((credit) => (
              <article className="detail-card prose-copy" key={credit.id}>
                <Image
                  src={credit.src}
                  alt={credit.alt}
                  width={credit.width}
                  height={credit.height}
                  sizes="(max-width:767px) 100vw, 50vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                    marginBottom: 24,
                  }}
                />
                <h2 style={{ fontSize: "1.8rem" }}>{credit.title}</h2>
                <p>
                  By{" "}
                  <a
                    href={credit.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {credit.author}
                    {credit.author === "Diego Delso" ? ", delso.photo" : ""}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {credit.license}
                  </a>
                </p>
                <p>{credit.subject}</p>
                <p className="small-note">{credit.modifications}</p>
                <p>
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View original photograph and license
                  </a>
                </p>
              </article>
            ))}
          </div>
          <p className="approval-note">
            The destination images retain their stated Creative Commons
            licenses. The typographic Palau Sport wordmark and compass emblem
            are draft design treatments awaiting owner approval. Vessel and
            cabin photography has not been supplied.
          </p>
        </div>
      </section>
    </main>
  );
}
