import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader } from "@/components/PageHeader";
import { FAQS, PAGES, PRIORITY_BENEFITS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.register);

export default function RegisterPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.register.h1,
            path: PAGES.register.path,
            description: PAGES.register.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Register", path: "/register" },
          ]),
        ]}
      />
      <PageHeader current="Register" title={PAGES.register.h1} />
      <section className="section">
        <div className="page-wrap grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <LeadForm location="register" />
          <div className="lg:border-l lg:border-border lg:pl-10">
            <h2 className="font-display text-3xl text-brand-deep">What registration includes</h2>
            <span className="rule-title" aria-hidden="true" />
            <ol className="mt-5 list-decimal space-y-2 pl-5">
              {PRIORITY_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="measure mt-6 leading-[1.75]">{FAQS[9].a}</p>
            <p className="measure mt-4 leading-[1.75]">{FAQS[10].a}</p>
          </div>
        </div>
      </section>
    </>
  );
}
