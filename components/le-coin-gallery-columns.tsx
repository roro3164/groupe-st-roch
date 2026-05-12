"use client";

import { DeliColumnsGallery } from "@/components/deli-columns-gallery";
import { gsrColumnsGalleryImages } from "@/lib/gsr-gallery-data";

export function LeCoinGalleryColumns() {
  return <DeliColumnsGallery images={gsrColumnsGalleryImages} columns={3} />;
}
