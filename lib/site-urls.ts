/** URLs publiques des deux vitrines (override en prod via variables d’environnement). */
export function getDelisSiteUrl(): string {
  return process.env.NEXT_PUBLIC_DELIS_URL?.trim() || "http://127.0.0.1:3010";
}

export function getNinaSiteUrl(): string {
  return process.env.NEXT_PUBLIC_NINA_URL?.trim() || "http://127.0.0.1:3011";
}
