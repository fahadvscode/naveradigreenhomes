import type { Faq } from "@/lib/content";

export function FaqList({ items, heading = "h2" }: { items: Faq[]; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <div className="mt-8 divide-y divide-border border-y border-border">
      {items.map((faq) => (
        <details key={faq.id} id={faq.id} className="py-4" open>
          <summary>
            <Heading className="inline font-display text-2xl text-brand-deep">{faq.q}</Heading>
          </summary>
          <p className="measure mt-3 leading-[1.75]">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
