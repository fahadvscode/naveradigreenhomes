import Image from "next/image";
import { PAGES } from "@/lib/content";
import { LIFESTYLE_PHOTOS } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const family = LIFESTYLE_PHOTOS[0];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="page-wrap pb-8 pt-10 md:pb-10 md:pt-14">
        <h1 className="max-w-[16ch] font-display text-[2.7rem] leading-[1.02] text-brand-deep sm:text-6xl lg:text-[4.35rem]">
          {PAGES.home.h1}
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed">
          Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road. Registration is free and does not reserve a home.{" "}
          <a href="#quick-facts" className="prose-link">
            See what is confirmed
          </a>
        </p>
      </div>
      <div className="page-wrap grid items-start gap-10 pb-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,26rem)] lg:gap-14 lg:pb-20">
        <figure>
          <Image
            src={family.src}
            alt={family.alt}
            width={family.width}
            height={family.height}
            priority
            className="h-auto w-full"
          />
          <figcaption className="mt-3 max-w-[58ch] text-sm leading-relaxed text-text-muted">{family.caption}</figcaption>
        </figure>
        <div className="lg:border-l lg:border-border lg:pl-10">
          <h2 className="font-display text-3xl text-brand-deep">Get Priority Access</h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Free registration. It does not reserve a home or a price.
          </p>
          <div className="mt-6">
            <LeadForm location="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
