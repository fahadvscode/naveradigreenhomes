import { INDEPENDENCE_DISCLAIMER, PRICING_DISCLAIMER } from "@/lib/content";

export function IndependenceDisclaimer({ className = "" }: { className?: string }) {
  return <p className={`text-sm leading-relaxed ${className}`}>{INDEPENDENCE_DISCLAIMER}</p>;
}

export function SpecDisclaimer({ className = "" }: { className?: string }) {
  return <p className={`text-sm leading-relaxed text-text-muted ${className}`}>{PRICING_DISCLAIMER}</p>;
}
