import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  current,
  title,
  children,
}: {
  current: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="page-wrap py-12 md:py-16">
        <Breadcrumbs current={current} />
        <h1 className="mt-6 max-w-4xl font-display text-4xl text-brand-deep md:text-6xl">{title}</h1>
        <span className="rule-title" aria-hidden="true" />
        {children}
      </div>
    </header>
  );
}
