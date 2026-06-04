export type GsrColumnsGalleryImage = {
  src?: string;
  alt: string;
  title?: string;
  video?: string;
};

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

/** Numéros `delis-galerie-NN` à exclure du flux galerie. */
const EXCLUDED_DELIS_GALLERY_NUMBERS = new Set([2, 31]);

/** Visuels Deli's — fichiers `public/images/external/gallery/delis-galerie-*.webp`. */
const deliGalleryImages: GsrColumnsGalleryImage[] = Array.from({ length: 34 }, (_, i) => {
  const n = i + 1;
  if (EXCLUDED_DELIS_GALLERY_NUMBERS.has(n)) return [];
  return [
    {
      src: `/images/external/gallery/delis-galerie-${pad2(n)}.webp`,
      alt: `Deli's Corner — galerie, photo ${n}`,
    },
  ];
}).flat();

/** 21 photos — mêmes fichiers que la galerie Niña (`image galerie`). */
const ninaGalleryImages: GsrColumnsGalleryImage[] = Array.from({ length: 21 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/images/external/gallery/nina-galerie-${pad2(n)}.webp`,
    alt: `Niña Bonita — galerie, photo ${n}`,
  };
});

/** Mélange alterné Deli's / Niña pour les colonnes (entrées Deli's sans 02 et 31). */
export const gsrColumnsGalleryImages: GsrColumnsGalleryImage[] = (() => {
  const out: GsrColumnsGalleryImage[] = [];
  const max = Math.max(deliGalleryImages.length, ninaGalleryImages.length);
  for (let i = 0; i < max; i++) {
    if (i < deliGalleryImages.length) out.push(deliGalleryImages[i]!);
    if (i < ninaGalleryImages.length) out.push(ninaGalleryImages[i]!);
  }
  return out;
})();
