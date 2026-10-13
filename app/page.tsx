import Image from "next/image";
import Link from "next/link";
import { ConfirmedVsTba } from "@/components/ConfirmedVsTba";
import { FadeIn } from "@/components/FadeIn";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { MidForm } from "@/components/MidForm";
import { QuickFacts } from "@/components/QuickFacts";
import { RichText } from "@/components/RichText";
import { SpecDisclaimer } from "@/components/Disclaimer";
import {
  BUILDER_COPY,
  FAQS,
  HOME_ABOUT,
  HOME_FAQ_IDS,
  LOT_WIDTH_COPY,
  NEIGHBOURHOOD,
  PAGES,
  PRIORITY_BENEFITS,
  WHY_REGISTER_NOTE,
  faqsById,
  pageMeta,
} from "@/lib/content";
import { AREA_ICON_LINKS, MEDIA } from "@/lib/media";
import { faqLd, offerLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.home);

export default function HomePage() {
  const homeFaqs = faqsById(HOME_FAQ_IDS);
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ name: PAGES.home.h1, path: PAGES.home.path, description: PAGES.home.description }),
          offerLd,
          faqLd(homeFaqs),
        ]}
      />
      <Hero />
      <section className="section">
        <div className="page-wrap grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)]">
          <div>
            <h2 className="font-display text-4xl text-brand-deep">Why people register early</h2>
            <span className="rule-title" aria-hidden="true" />
            <p className="measure mt-5 leading-[1.75]">
              Digreen Homes describes these Priority Access benefits for Navera at Mayfield Village. They are information
              benefits, not a discount and not a hold.
            </p>
            <ol className="measure mt-5 list-decimal space-y-2 pl-5">
              {PRIORITY_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="measure mt-5 font-semibold leading-[1.75]">{WHY_REGISTER_NOTE}</p>
          </div>
          <div>
            <p className="text-lg leading-[1.75]">{FAQS[0].a}</p>
            <p className="mt-5 leading-[1.75]">
              Use the links below to go straight to{" "}
              <Link href="/floor-plans" className="prose-link">
                Navera floor plans
              </Link>
              ,{" "}
              <Link href="/pricing" className="prose-link">
                Navera Brampton prices
              </Link>
              , the{" "}
              <Link href="/location" className="prose-link">
                Navera at Mayfield Village location
              </Link>
              , the{" "}
              <Link href="/faq" className="prose-link">
                Navera Brampton FAQ
              </Link>
              , or a longer look at{" "}
              <Link href="/blog/brampton-pre-construction-guide" className="prose-link">
                pre-construction homes in Brampton
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="section border-t border-border pt-16">
        <div className="page-wrap">
          <h2 className="max-w-[22ch] font-display text-4xl text-brand-deep">
            38-foot vs 41-foot lots: what the difference means
          </h2>
          <span className="rule-title" aria-hidden="true" />
          <p className="measure mt-5 leading-[1.75]">{LOT_WIDTH_COPY}</p>
          <LotWidthDiagram title="Navera at Mayfield Village 38-foot and 41-foot lot width diagram" />
          <SpecDisclaimer className="mt-4" />
        </div>
      </section>
      <MidForm location="home-mid">
        <p className="measure leading-[1.75]">
          Free registration for floor plans, pricing, and release updates. It does not reserve a home.
        </p>
      </MidForm>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">About Navera at Mayfield Village</h2>
          <span className="rule-title" aria-hidden="true" />
          <div className="mt-6 max-w-3xl">
            {HOME_ABOUT.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-5 leading-[1.75] first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <FadeIn>
        <section className="section border-t border-border">
          <div className="page-wrap">
            <h2 className="max-w-[24ch] font-display text-4xl text-brand-deep">
              What is confirmed vs. still to be announced
            </h2>
            <span className="rule-title" aria-hidden="true" />
            <p className="measure mt-5 leading-[1.75]">
              Confirmed rows come from Digreen Homes&apos; Navera information. Open items stay labelled until the builder
              publishes them.
            </p>
            <ConfirmedVsTba />
            <SpecDisclaimer className="mt-6" />
          </div>
        </section>
      </FadeIn>
      <section id="quick-facts" className="section bg-surface-alt">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">Quick facts</h2>
          <span className="rule-title" aria-hidden="true" />
          <div className="mt-8">
            <QuickFacts />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">Neighbourhood at a glance</h2>
          <span className="rule-title" aria-hidden="true" />
          <p className="measure mt-5 leading-[1.75]">
            Drive times, schools, and the Regal Crest distinction are on the{" "}
            <Link href="/location" className="prose-link">
              Navera at Mayfield Village location
            </Link>{" "}
            page.
          </p>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {NEIGHBOURHOOD.map((item) => (
              <article key={item.title} className="grid gap-4 py-6 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-start">
                <div className="flex gap-2">
                  {item.icons.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={item.darkIcon ? 416 : 134}
                      height={item.darkIcon ? 104 : 134}
                      className={item.darkIcon ? "h-12 w-12 bg-brand-deep object-cover" : "h-12 w-12 object-contain"}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-brand-deep">{item.title}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
            {AREA_ICON_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center gap-3 text-sm font-semibold text-brand-primary">
                  <Image src={item.src} alt="" width={416} height={104} className="h-12 w-12 object-cover" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="border-y border-border">
        <Image src={MEDIA.pattern} alt="" width={2879} height={923} className="h-16 w-full object-cover" />
      </div>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">About the builder</h2>
          <span className="rule-title" aria-hidden="true" />
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Image src={MEDIA.digreenColour} alt="Digreen Homes" width={896} height={331} className="h-auto max-h-14 w-auto" />
            <Image src={MEDIA.digreenStacked} alt="" width={236} height={261} className="h-16 w-auto" />
            <span className="inline-flex bg-brand-deep p-3">
              <Image src={MEDIA.digreenMark} alt="" width={48} height={52} className="h-12 w-auto" />
            </span>
          </div>
          <p className="mt-3 text-sm text-text-muted">Digreen Homes marks, shown to identify the builder.</p>
          <RichText text={BUILDER_COPY} />
        </div>
      </section>
      <section className="section border-t border-border">
        <div className="page-wrap">
          <h2 className="font-display text-4xl text-brand-deep">Frequently asked questions</h2>
          <span className="rule-title" aria-hidden="true" />
          <p className="measure mt-5 leading-[1.75]">
            The full set of 20 is on the{" "}
            <Link href="/faq" className="prose-link">
              Navera Brampton FAQ
            </Link>
            .
          </p>
          <FaqList items={homeFaqs} heading="h3" />
        </div>
      </section>
    </>
  );
}
