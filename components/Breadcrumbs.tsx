import Link from "next/link";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/" className="prose-link font-medium">
            Navera at Mayfield Village
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
