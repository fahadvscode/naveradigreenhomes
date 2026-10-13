import type { ReactNode } from "react";
import { LeadForm } from "./LeadForm";

export function MidForm({ location, children }: { location: string; children?: ReactNode }) {
  return (
    <section className="border-y border-border bg-surface-alt">
      <div className="page-wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <h2 className="font-display text-4xl text-brand-deep">Register for Priority Access</h2>
          <span className="rule-title" aria-hidden="true" />
          <div className="mt-5">{children}</div>
        </div>
        <LeadForm location={location} />
      </div>
    </section>
  );
}
