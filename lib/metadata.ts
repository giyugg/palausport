import type { Metadata } from "next";
import { getMediaCredit, mediaCredits } from "@/content/media";
import { site } from "@/content/site";

type PageImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: PageImage,
): Metadata {
  const fallback = getMediaCredit("tubbataha-reef-diver");
  const selectedImage = image ?? fallback;
  const credit = mediaCredits.find(({ src }) => src === selectedImage.src);
  const pageTitle = title.includes(site.shortName)
    ? title
    : `${title} | ${site.name}`;
  const socialImage = {
    url: selectedImage.src,
    alt: credit
      ? `${selectedImage.alt}. Photo: ${credit.author}, ${credit.license}.`
      : selectedImage.alt,
    ...(selectedImage.width ? { width: selectedImage.width } : {}),
    ...(selectedImage.height ? { height: selectedImage.height } : {}),
  };

  return {
    title: { absolute: pageTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PH",
      siteName: site.name,
      title: pageTitle,
      description,
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImage],
    },
  };
}
