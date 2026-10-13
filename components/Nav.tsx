import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { MEDIA } from "@/lib/media";

export function Nav() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="h-1.5 bg-brand-deep" />
      <div className="page-wrap flex flex-wrap items-end justify-between gap-x-8 gap-y-3 py-4">
        <Link href="/" aria-label="Navera at Mayfield Village, home" className="shrink-0">
          <Image
            src={MEDIA.naveraBlk}
            alt="Navera at Mayfield Village"
            width={649}
            height={165}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <p className="pb-1 text-sm text-text-muted">Countryside Drive and Torbram Road, Brampton</p>
      </div>
      <nav aria-label="Primary" className="border-t border-border">
        <ul className="page-wrap flex gap-x-6 gap-y-2 overflow-x-auto py-3 text-sm font-semibold text-brand-primary">
          {NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="underline-offset-4 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
