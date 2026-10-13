import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { MidForm } from "@/components/MidForm";
import { PageHeader } from "@/components/PageHeader";
import { GALLERY_COPY, LOCATION_DIAGRAM, LOT_DIAGRAM, PAGES, pageMeta } from "@/lib/content";
import { AERIAL, AREA_PHOTOS, LIFESTYLE_PHOTOS } from "@/lib/media";
import { breadcrumbLd, imageLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.gallery);

const GALLERY = [AERIAL, ...AREA_PHOTOS, ...LIFESTYLE_PHOTOS];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.gallery.h1,
            path: PAGES.gallery.path,
            description: PAGES.gallery.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          ...GALLERY.map((photo) => imageLd({ path: photo.src, name: photo.alt, caption: photo.caption })),
          imageLd(LOT_DIAGRAM),
          imageLd(LOCATION_DIAGRAM),
        ]}
      />
      <PageHeader current="Gallery" title={PAGES.gallery.h1}>
        <p className="measure mt-6 text-lg leading-relaxed">{GALLERY_COPY}</p>
      </PageHeader>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">Area illustration and photographs</h2>
          <span className="rule-title" aria-hidden="true" />
          <div className="mt-8">
            {GALLERY.map((photo) => (
              <figure key={photo.src} className="grid items-end gap-4 border-b border-border py-10 md:grid-cols-[minmax(0,1.45fr)_minmax(14rem,0.7fr)]">
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="h-auto w-full" />
                <figcaption className="text-sm leading-relaxed text-text-muted md:pb-2">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <h2 className="mt-16 font-display text-4xl text-brand-deep">Diagrams drawn for this page</h2>
          <span className="rule-title" aria-hidden="true" />
          <p className="measure mt-5 leading-[1.75]">
            The two drawings below were made for this page. One compares the approximate 38-foot and 41-foot lot widths. The
            other is a location schematic for Countryside Drive and Torbram Road. Neither is a photograph and neither is a
            builder rendering.
          </p>
          <figure className="mt-8">
            <Image
              src={LOT_DIAGRAM.path}
              alt="Diagram comparing approximate 38-foot and 41-foot lots at Navera at Mayfield Village"
              width={640}
              height={280}
              unoptimized
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOT_DIAGRAM.caption}</figcaption>
          </figure>
          <figure className="mt-10">
            <Image
              src={LOCATION_DIAGRAM.path}
              alt="Schematic of Countryside Drive and Torbram Road"
              width={640}
              height={360}
              unoptimized
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOCATION_DIAGRAM.caption}</figcaption>
          </figure>
        </div>
      </section>
      <MidForm location="gallery">
        <p className="measure leading-relaxed">Register to be notified when the builder releases floor plans and a site plan.</p>
      </MidForm>
    </>
  );
}
