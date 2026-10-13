import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap py-8">
        <h1 className="font-display text-5xl text-brand-deep">Page not found</h1>
        <p className="measure mt-5 leading-[1.75]">
          This address is not part of the Navera at Mayfield Village information site.
        </p>
        <p className="mt-6">
          <Link href="/" className="prose-link">
            Navera at Mayfield Village
          </Link>
        </p>
      </div>
    </section>
  );
}
