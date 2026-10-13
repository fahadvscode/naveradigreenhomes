import { CONFIRMED, TO_BE_ANNOUNCED } from "@/lib/content";

export function ConfirmedVsTba() {
  return (
    <div className="mt-10 grid gap-12 md:grid-cols-2">
      <div>
        <h3 className="font-display text-2xl text-brand-deep">Confirmed</h3>
        <ul className="mt-4 space-y-3 border-t border-brand-primary pt-4">
          {CONFIRMED.map((item) => (
            <li key={item} className="border-b border-border pb-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-2xl text-brand-deep">To be announced</h3>
        <ul className="mt-4 space-y-3 border-t border-brand-accent-ink pt-4">
          {TO_BE_ANNOUNCED.map((item) => (
            <li key={item} className="border-b border-border pb-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
