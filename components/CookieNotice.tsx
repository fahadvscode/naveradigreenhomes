"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_KEY } from "@/lib/consent";
import { captureUtm } from "@/lib/utm";

export function CookieNotice() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    captureUtm();
    try {
      const open = localStorage.getItem(CONSENT_KEY) === null;
      setVisible(open);
      document.body.classList.toggle("has-consent-note", open);
    } catch {
      setVisible(false);
    }
    return () => document.body.classList.remove("has-consent-note");
  }, [pathname]);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
    document.body.classList.remove("has-consent-note");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-primary/40 bg-brand-deep text-text-on-dark">
      <div className="page-wrap flex items-center justify-between gap-4 py-2.5">
        <p className="text-xs leading-snug sm:text-sm">Analytics stay off until you allow them.</p>
        <div className="flex shrink-0 items-center gap-3">
          <button type="button" className="bg-surface px-3 py-1.5 text-xs font-semibold text-brand-deep" onClick={() => choose("accepted")}>
            Allow
          </button>
          <button type="button" className="text-xs font-semibold underline underline-offset-2" onClick={() => choose("declined")}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
