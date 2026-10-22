import { mediaCredits } from "@/content/media";

export function PhotoCredit({ src }: { src: string }) {
  const credit = mediaCredits.find((image) => image.src === src);
  if (!credit) return null;
  return (
    <figcaption className="photo-caption">
      Photo:{" "}
      <a href={credit.authorUrl} target="_blank" rel="noopener noreferrer">
        {credit.author}
        {credit.author === "Diego Delso" ? ", delso.photo" : ""}
      </a>{" "}
      ·{" "}
      <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
        {credit.license}
      </a>{" "}
      · <a href="/image-credits">Resized; layout crop</a>
    </figcaption>
  );
}
