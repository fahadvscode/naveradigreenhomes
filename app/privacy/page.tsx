import { AmpLink } from "@/components/AmpLink";
import { Blocks } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { MidForm } from "@/components/MidForm";
import { PageHeader } from "@/components/PageHeader";
import { PAGES, PRIVACY_BLOCKS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.privacy);

export default function PrivacyPage() {
  return (
    <>
      <AmpLink path={PAGES.privacy.path} />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.privacy.h1,
            path: PAGES.privacy.path,
            description: PAGES.privacy.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />
      <PageHeader current="Privacy" title={PAGES.privacy.h1} />
      <section className="section">
        <div className="page-wrap">
          <Blocks blocks={PRIVACY_BLOCKS} />
          <p className="measure mt-6 leading-[1.75]">
            Privacy requests:{" "}
            <a className="prose-link" href="mailto:privacy@naveradigreenhomes.com">
              privacy@naveradigreenhomes.com
            </a>
          </p>
        </div>
      </section>
      <MidForm location="privacy">
        <p className="measure leading-relaxed">Registration is free and does not reserve a home or a price.</p>
      </MidForm>
    </>
  );
}
