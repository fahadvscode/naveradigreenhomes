import { isAmpPage, renderAmpDocument } from "@/lib/amp";

export function GET(request: Request, context: { params: Promise<{ slug?: string[] }> }) {
  return render(request, context);
}

async function render(request: Request, context: { params: Promise<{ slug?: string[] }> }) {
  if (request.headers.get("x-amp-entry") !== "1") {
    return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  }
  const { slug } = await context.params;
  const path = slug?.length ? `/${slug.join("/")}` : "/";
  if (!isAmpPage(path)) {
    return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  }
  const html = renderAmpDocument(path);
  if (!html) return new Response("Not found", { status: 404 });
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
