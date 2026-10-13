import Image from "next/image";
import type { SitePhoto } from "@/lib/media";

export function PhotoFigure({ photo, priority = false }: { photo: SitePhoto; priority?: boolean }) {
  return (
    <figure>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        className="h-auto w-full"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
