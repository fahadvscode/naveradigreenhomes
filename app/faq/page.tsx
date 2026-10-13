import Link from "next/link";
import { AmpLink } from "@/components/AmpLink";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { MidForm } from "@/components/MidForm";
import { PageHeader } from "@/components/PageHeader";
import { DISPLAY_DATE, FAQS, PAGES, pageMeta } from "@/lib/content";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.faq);

export default function FaqPage() {
  return (
    <>
      <AmpLink path={PAGES.faq.path} />
      <JsonLd
        data={[
          webPageLd({ name: PAGES.faq.h1, path: PAGES.faq.path, description: PAGES.faq.description }),
          faqLd(FAQS),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHeader current="FAQ" title={PAGES.faq.h1}>
        <p className="mt-6 text-sm text-text-muted">Last updated: {DISPLAY_DATE}</p>
        <p className="measure mt-4 leading-relaxed">
          These answers cover builder, price, lot sizes, launch, deposit, schools, and VIP access for Navera at Mayfield
          Village. Each one states what is known and what is still to be announced. Deposit details link with the{" "}
          <Link href="/pricing#deposit" className="prose-link">
            Navera Brampton prices
          </Link>{" "}
          page. School and Regal Crest questions link with the{" "}
          <Link href="/location#schools" className="prose-link">
            Navera at Mayfield Village location
          </Link>{" "}
          page.
        </p>
      </PageHeader>
      <section className="section">
        <div className="page-wrap">
          <FaqList items={FAQS} heading="h2" />
        </div>
      </section>
      <MidForm location="faq">
        <p className="measure leading-relaxed">
          Registration is free and does not reserve a home or a price.
        </p>
      </MidForm>
    </>
  );
}
