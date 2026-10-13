import Link from "next/link";
import { DISPLAY_DATE, NAV } from "@/lib/content";
import { IndependenceDisclaimer, SpecDisclaimer } from "./Disclaimer";
import { FooterFormGate } from "./FooterFormGate";
import { LeadForm } from "./LeadForm";

const MORE = [
  { href: "/blog/brampton-pre-construction-guide", label: "Pre-construction guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-text-on-dark">
      <div className="page-wrap py-16 md:py-20">
        <FooterFormGate>
          <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)]">
            <div>
              <h2 className="font-display text-4xl text-surface">Register for Priority Access</h2>
              <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-on-dark">
                Free registration for floor plans, pricing, and release updates. It does not reserve a home or a price.
              </p>
            </div>
            <LeadForm location="footer" tone="ink" />
          </div>
        </FooterFormGate>
        <nav aria-label="Footer" className="mt-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline underline-offset-4">
                  {item.href === "/" ? "Navera at Mayfield Village" : item.label}
                </Link>
              </li>
            ))}
            {MORE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-sm font-semibold">Last updated: {DISPLAY_DATE}</p>
        <div className="mt-4 max-w-3xl space-y-3 text-text-on-dark/90">
          <IndependenceDisclaimer />
          <SpecDisclaimer className="text-text-on-dark/80" />
        </div>
      </div>
    </footer>
  );
}
