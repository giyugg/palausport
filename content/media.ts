/**
 * Real, locally hosted destination photography. Rights checked against the
 * linked Wikimedia Commons file pages on 22 October 2026. These photographs
 * show their stated destinations; they are not Palau Sport trip/vessel media.
 *
 * Preserve author, source, license and modification notices when displaying.
 * The CC BY-SA images and their resized WebP copies retain CC BY-SA 4.0.
 * Diego Delso requests the credit "Diego Delso, delso.photo, CC BY-SA" legibly
 * next to his photograph; include that caption where the Anilao photo appears.
 */
export const mediaCredits = [
  {
    id: "tubbataha-reef-diver",
    title: "Over 1million Hectares and 1 scientist",
    src: "/images/tubbataha-reef-diver.webp",
    alt: "A scuba diver photographing a broad coral reef at Tubbataha, Philippines",
    author: "Anna Varona",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Anna_Varona",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Over_1million_Hectares_and_1_scientist.jpg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    width: 1920,
    height: 1280,
    modifications:
      "Resized to 1920 × 1280 and compressed as WebP (quality 66). No crop or color adjustment; displayed layouts may crop the image.",
    subject:
      "Scientist Alessandro Ponzo documenting reef life at Tubbataha Reef, photographed in July 2017. This is destination photography, not a Palau Sport guest or crew photograph.",
  },
  {
    id: "anilao-nudibranch",
    title: "Nembrotha chamberlaini, Anilao, Philippines",
    src: "/images/anilao-nudibranch.webp",
    alt: "A purple, green and blue Nembrotha chamberlaini nudibranch in Anilao, Philippines",
    author: "Diego Delso",
    authorUrl: "https://delso.photo/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Babosa_de_mar_(Nembrotha_chamberlaini),_Anilao,_Filipinas,_2023-08-23,_DD_02.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    width: 1600,
    height: 1067,
    modifications:
      "Resized to 1600 × 1067 and compressed as WebP (quality 82). No crop or color adjustment; displayed layouts may crop the image. Resized image licensed CC BY-SA 4.0.",
    subject: "A nudibranch photographed at Anilao on 23 August 2023.",
  },
  {
    id: "apo-reef-island",
    title: "Apo Reef Natural Park",
    src: "/images/apo-reef-island.webp",
    alt: "Turquoise water and a white sand island at Apo Reef Natural Park, Philippines",
    author: "Billy Palatino",
    authorUrl:
      "https://commons.wikimedia.org/wiki/Special:Contributions/Billy_Palatino",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Apo_Reef_Natural_Park.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    width: 1600,
    height: 1060,
    modifications:
      "Resized to 1600 × 1060 and compressed as WebP (quality 82). No crop or color adjustment; displayed layouts may crop the image. Resized image licensed CC BY-SA 4.0.",
    subject:
      "Island scenery at Apo Reef Natural Park, photographed in March 2014. Apo Reef is distinct from Apo Island in Negros Oriental.",
  },
  {
    id: "tubbataha-sharks",
    title: "Silver Tip",
    src: "/images/tubbataha-sharks.webp",
    alt: "Silvertip sharks swimming with a school of black jacks at Tubbataha Reef, Philippines",
    author: "Anna Varona",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Anna_Varona",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Silver_Tip.tif",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    width: 1600,
    height: 901,
    modifications:
      "Downloaded a Wikimedia JPEG preview of the original TIFF, resized to 1600 × 901 and compressed as WebP (quality 54). No crop or color adjustment; displayed layouts may crop the image. Resized image licensed CC BY-SA 4.0.",
    subject:
      "Silvertip sharks and black jacks photographed at Tubbataha Reef in April 2017. Wildlife sightings are not guaranteed.",
  },
] as const;

export function getMediaCredit(id: (typeof mediaCredits)[number]["id"]) {
  return mediaCredits.find((credit) => credit.id === id)!;
}
