import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/amp-doc" || pathname.startsWith("/amp-doc/")) {
    return new NextResponse("Not found", { status: 404 });
  }
  const canonical = pathname === "/amp" ? "/" : pathname.endsWith("/amp") ? pathname.slice(0, -4) : null;
  if (!canonical) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = canonical === "/" ? "/amp-doc" : `/amp-doc${canonical}`;
  const headers = new Headers(request.headers);
  headers.set("x-amp-entry", "1");
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|.*\\..*).*)"],
};
