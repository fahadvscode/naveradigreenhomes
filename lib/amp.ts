import {
  BLOG_BLOCKS,
  BLOG_LEDE,
  BUILDER_COPY,
  CONFIRMED,
  DRIVE_TIMES,
  FAQS,
  FLOOR_PLAN_BLOCKS,
  FLOOR_PLAN_LEDE,
  GALLERY_COPY,
  HOME_ABOUT,
  HOME_FAQ_IDS,
  INDEPENDENCE_DISCLAIMER,
  LOCATION_BLOCKS,
  LOCATION_DIAGRAM,
  LOT_DIAGRAM,
  LOT_WIDTH_COPY,
  NEIGHBOURHOOD,
  PAGES,
  PRICING_BLOCKS,
  PRICING_DISCLAIMER,
  PRIORITY_BENEFITS,
  PRIVACY_BLOCKS,
  QUICK_FACTS,
  SERIES,
  SITE_URL,
  TERMS_BLOCKS,
  TO_BE_ANNOUNCED,
  WHY_REGISTER_NOTE,
  faqsById,
  type Block,
  type PageDef,
} from "./content";
import { CASL_CONSENT } from "./consent";
import { AERIAL, AREA_PHOTOS, LIFESTYLE_PHOTOS, type SitePhoto } from "./media";
import {
  articleLd,
  breadcrumbLd,
  developerLd,
  faqLd,
  imageLd,
  offerLd,
  orgLd,
  projectLd,
  webPageLd,
  websiteLd,
} from "./schema";

const AMP_PAGES: Record<string, PageDef> = {
  "/": PAGES.home,
  "/floor-plans": PAGES.floorPlans,
  "/pricing": PAGES.pricing,
  "/location": PAGES.location,
  "/gallery": PAGES.gallery,
  "/faq": PAGES.faq,
  "/register": PAGES.register,
  "/privacy": PAGES.privacy,
  "/terms": PAGES.terms,
  "/blog/brampton-pre-construction-guide": PAGES.blog,
};

const BOILERPLATE =
  "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

const BOILERPLATE_NOSCRIPT = "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}";

const ALLOWED_HOSTS = new Set([
  "digreenhomes.com",
  "www.digreenhomes.com",
  "www.peelschools.org",
  "www.dpcdsb.org",
  "www.brampton.ca",
]);

const CUSTOM_CSS = `
body{margin:0;background:#FAF7F0;color:#1D2F25;font-family:Inter,sans-serif;font-size:1.05rem;line-height:1.7}
a{color:#2F4A3A}
.wrap{max-width:72rem;margin:0 auto;padding:0 1.25rem}
.top{background:#1D2F25;color:#FAF7F0}
.top a{color:#FAF7F0;text-decoration:none}
.brand{display:flex;gap:0.75rem;align-items:center;padding:1rem 0}
.brand p{margin:0;font-family:Fraunces,serif;font-size:1.35rem}
.brand span{display:block;font-family:Inter,sans-serif;font-size:0.85rem;opacity:0.8}
nav ul{display:flex;flex-wrap:wrap;gap:0.4rem 1rem;list-style:none;margin:0;padding:0 0 1rem}
nav a{text-decoration:underline;text-underline-offset:0.2rem}
h1,h2,h3{font-family:Fraunces,serif;font-weight:500;line-height:1.15;color:#1D2F25}
h1{font-size:2.6rem;max-width:16ch;margin:1.5rem 0 0}
h2{font-size:2rem;margin:2.2rem 0 0}
h3{font-size:1.35rem;margin:1.4rem 0 0}
.rule{display:block;width:3.5rem;height:2px;background:#8F5B38;margin:0.8rem 0 1rem}
.lede{font-size:1.2rem;max-width:42rem}
p,ul,ol{max-width:42rem}
ul,ol{padding-left:1.2rem}
figure{margin:1.25rem 0}
figcaption,.note{color:#3d4f45;font-size:0.95rem}
table{width:100%;max-width:42rem;border-collapse:collapse;margin:1rem 0}
th,td{text-align:left;vertical-align:top;padding:0.55rem 0.4rem;border-bottom:1px solid #ddd4c4}
th{width:38%}
details{border-bottom:1px solid #ddd4c4;padding:0.8rem 0}
summary{cursor:pointer}
fieldset{border:0;margin:1rem 0;padding:0}
legend{font-weight:600;margin-bottom:0.4rem}
label{display:block;margin:0.8rem 0 0.25rem}
input[type="text"],input[type="email"],input[type="tel"]{width:100%;max-width:28rem;background:transparent;border:0;border-bottom:1px solid #1D2F25;padding:0.7rem 0;font:inherit;color:inherit}
.choice{display:inline-flex;align-items:center;gap:0.4rem;min-height:48px;margin:0.4rem 0.6rem 0 0;padding:0 0.9rem;border:1px solid #1D2F25}
.check{display:flex;gap:0.6rem;align-items:flex-start;max-width:42rem}
.check input{margin-top:0.35rem}
button{background:#1D2F25;color:#FAF7F0;border:0;padding:0.9rem 1.2rem;font:600 1rem/1 Inter,sans-serif;margin-top:1rem}
.msg{min-height:1.4rem;color:#8F5B38}
.hp{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
.panel{border-top:1px solid #ddd4c4;margin-top:2rem;padding-top:0.5rem}
footer{margin-top:3rem;padding:2rem 0;background:#1D2F25;color:#FAF7F0}
footer a{color:#FAF7F0}
.full{margin:1rem 0 2rem}
`.replace(/\n/g, "");

export function ampPublicUrl(path: string) {
  if (path === "/") return `${SITE_URL}/amp`;
  return `${SITE_URL}${path}/amp`;
}

export function isAmpPage(path: string) {
  return Object.prototype.hasOwnProperty.call(AMP_PAGES, path);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toAmpHref(href: string) {
  const hashAt = href.indexOf("#");
  const path = hashAt >= 0 ? href.slice(0, hashAt) : href;
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const normalized = path === "" ? "/" : path;
  if (!isAmpPage(normalized)) return href;
  return ampPublicUrl(normalized).replace(SITE_URL, "") + hash;
}

function safeHref(href: string) {
  if (href.startsWith("/")) return toAmpHref(href);
  try {
    const url = new URL(href);
    if (url.protocol === "https:" && ALLOWED_HOSTS.has(url.hostname)) return href;
  } catch {
    return null;
  }
  return null;
}

function inline(text: string) {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let html = "";
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    html += escapeHtml(text.slice(last, index));
    const href = safeHref(match[2]);
    const label = escapeHtml(match[1]);
    if (href?.startsWith("/")) html += `<a href="${escapeHtml(href)}">${label}</a>`;
    else if (href)
      html += `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    else html += label;
    last = index + match[0].length;
  }
  html += escapeHtml(text.slice(last));
  return html;
}

function blocks(items: readonly Block[]) {
  return items
    .map((block) => {
      if (block.t === "h2") {
        const id = block.id ? ` id="${escapeHtml(block.id)}"` : "";
        return `<h2${id}>${escapeHtml(block.text)}</h2><span class="rule"></span>`;
      }
      if (block.t === "h3") return `<h3>${escapeHtml(block.text)}</h3>`;
      if (block.t === "p") return `<p>${inline(block.text)}</p>`;
      const tag = block.t === "ol" ? "ol" : "ul";
      return `<${tag}>${block.items.map((item) => `<li>${inline(item)}</li>`).join("")}</${tag}>`;
    })
    .join("");
}

function facts(rows: { label: string; value: string }[]) {
  return `<table>${rows
    .map((row) => `<tr><th>${escapeHtml(row.label)}</th><td>${escapeHtml(row.value)}</td></tr>`)
    .join("")}</table>`;
}

function pairTable(rows: readonly (readonly [string, string])[]) {
  return `<table>${rows
    .map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join("")}</table>`;
}

function photo(item: SitePhoto) {
  return `<figure><amp-img src="${escapeHtml(item.src)}" width="${item.width}" height="${item.height}" layout="responsive" alt="${escapeHtml(item.alt)}"></amp-img><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`;
}

function diagram(item: { path: string; name: string; caption: string }, width: number, height: number) {
  return `<figure><amp-img src="${escapeHtml(item.path)}" width="${width}" height="${height}" layout="responsive" alt="${escapeHtml(item.name)}"></amp-img><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`;
}

function faqs(items: { id: string; q: string; a: string }[], heading: "h2" | "h3") {
  return items
    .map(
      (faq) =>
        `<details id="${escapeHtml(faq.id)}" open><summary><${heading}>${escapeHtml(faq.q)}</${heading}></summary><p>${inline(faq.a)}</p></details>`,
    )
    .join("");
}

function leadForm(consentPage: string) {
  return `<section class="panel" id="register">
<h2>Get Priority Access</h2>
<span class="rule"></span>
<p>Registration is free and does not reserve a home or a price.</p>
<amp-script layout="container" script="lead-script">
<form id="lead" method="post" action-xhr="${SITE_URL}/api/lead" target="_top">
<label class="hp" for="website">Website</label>
<input class="hp" id="website" name="website" type="text" tabindex="-1" autocomplete="off">
<input id="consent_page" name="consent_page" type="hidden" value="${escapeHtml(consentPage)}">
<label for="first_name">First name</label>
<input id="first_name" name="first_name" type="text" autocomplete="given-name" required maxlength="80">
<label for="last_name">Last name</label>
<input id="last_name" name="last_name" type="text" autocomplete="family-name" required maxlength="80">
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email" required maxlength="200">
<label for="phone">Phone</label>
<input id="phone" name="phone" type="tel" autocomplete="tel" required minlength="10" maxlength="20">
<fieldset>
<legend>Are you a licensed real estate agent?</legend>
<label class="choice"><input type="radio" name="is_broker" value="true" required> Yes</label>
<label class="choice"><input type="radio" name="is_broker" value="false"> No</label>
</fieldset>
<label class="check"><input id="consent" name="casl_consent" type="checkbox" value="true" required><span>${escapeHtml(CASL_CONSENT)}</span></label>
<p id="form-msg" class="msg" role="alert"></p>
<button id="send" type="button">Get Priority Access</button>
</form>
<p id="form-done" hidden>Your Priority Access registration was received. It does not reserve a home or a price. <a href="${SITE_URL}/thank-you">Continue</a></p>
</amp-script>
<script id="lead-script" type="text/plain" target="amp-script">
var start = Date.now();
var form = document.getElementById("lead");
var msg = document.getElementById("form-msg");
document.getElementById("send").addEventListener("click", function () {
  var ms = Date.now() - start;
  var website = document.getElementById("website").value;
  var broker = document.querySelector("input[name=is_broker]:checked");
  var consent = document.getElementById("consent");
  if (website) { msg.textContent = "Registration could not be sent."; return; }
  if (!document.getElementById("first_name").value.trim() || !document.getElementById("last_name").value.trim() || !document.getElementById("email").value.trim() || !document.getElementById("phone").value.trim()) {
    msg.textContent = "Enter your name, email, and phone."; return;
  }
  if (!broker) { msg.textContent = "Select Yes or No for the agent question."; return; }
  if (!consent.checked) { msg.textContent = "Consent is required."; return; }
  if (ms < 3000) { msg.textContent = "Please wait a few seconds, then submit again."; return; }
  msg.textContent = "";
  fetch("${SITE_URL}/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: document.getElementById("first_name").value.trim(),
      last_name: document.getElementById("last_name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      is_broker: broker.value === "true",
      casl_consent: true,
      website: "",
      elapsed_ms: ms,
      consent_page: document.getElementById("consent_page").value,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null
    })
  }).then(function (res) {
    if (!res.ok) throw new Error("no");
    form.hidden = true;
    document.getElementById("form-done").hidden = false;
  }).catch(function () {
    msg.textContent = "Registration could not be sent. Please try again.";
  });
});
</script>
</section>`;
}

function pageMain(path: string) {
  if (path === "/") {
    return `<p class="lede">Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road. Registration is free and does not reserve a home.</p>
${photo(LIFESTYLE_PHOTOS[0])}
${leadForm("/amp")}
<h2>Why people register early</h2><span class="rule"></span>
<p>Digreen Homes describes these Priority Access benefits for Navera at Mayfield Village. They are information benefits, not a discount and not a hold.</p>
<ol>${PRIORITY_BENEFITS.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
<p><strong>${escapeHtml(WHY_REGISTER_NOTE)}</strong></p>
<p>${escapeHtml(FAQS[0].a)}</p>
<h2>Lot widths</h2><span class="rule"></span>
<p>${escapeHtml(LOT_WIDTH_COPY)}</p>
${diagram(LOT_DIAGRAM, 640, 280)}
<h2>About Navera at Mayfield Village</h2><span class="rule"></span>
${HOME_ABOUT.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
<p>${inline(BUILDER_COPY)}</p>
<h2>Confirmed and still to come</h2><span class="rule"></span>
<h3>Confirmed</h3>
<ul>${CONFIRMED.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
<h3>To be announced</h3>
<ul>${TO_BE_ANNOUNCED.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
<h2 id="quick-facts">Quick facts</h2><span class="rule"></span>
${facts(QUICK_FACTS)}
<h2>Neighbourhood</h2><span class="rule"></span>
${NEIGHBOURHOOD.map((item) => `<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>`).join("")}
<h2>Questions</h2><span class="rule"></span>
${faqs(faqsById(HOME_FAQ_IDS), "h3")}`;
  }
  if (path === "/floor-plans") {
    return `<p class="lede">${escapeHtml(FLOOR_PLAN_LEDE)}</p>
${blocks(FLOOR_PLAN_BLOCKS)}
${diagram(LOT_DIAGRAM, 640, 280)}
${SERIES.map((series) => `<h3>${escapeHtml(series.name)}</h3>${pairTable(series.rows)}`).join("")}
${leadForm("/floor-plans/amp")}`;
  }
  if (path === "/pricing") {
    return `<p class="lede">${escapeHtml(FAQS[3].a)}</p>
<p class="note">${escapeHtml(PRICING_DISCLAIMER)}</p>
${blocks(PRICING_BLOCKS)}
${leadForm("/pricing/amp")}`;
  }
  if (path === "/location") {
    return `${blocks(LOCATION_BLOCKS)}
${diagram(LOCATION_DIAGRAM, 640, 360)}
${photo(AERIAL)}
<h2>Drive time estimates</h2><span class="rule"></span>
<table><tr><th>Place</th><th>Estimate</th></tr>${DRIVE_TIMES.map((row) => `<tr><td>${escapeHtml(row.place)}</td><td>${escapeHtml(row.time)}</td></tr>`).join("")}</table>
<amp-iframe width="600" height="400" layout="responsive" sandbox="allow-scripts allow-same-origin allow-popups" src="https://maps.google.com/maps?q=Countryside+Drive+and+Torbram+Road,+Brampton,+Ontario&amp;hl=en&amp;z=14&amp;output=embed" title="Map of the general area around Countryside Drive and Torbram Road, Brampton, Ontario"><amp-img layout="fill" src="/images/media/map-pointer.png" placeholder alt=""></amp-img></amp-iframe>
<p class="note">Map shows the general area. The pin is centred on Countryside Drive and Torbram Road, Brampton. It is not a surveyed lot line.</p>
${leadForm("/location/amp")}`;
  }
  if (path === "/gallery") {
    const photos = [AERIAL, ...AREA_PHOTOS, ...LIFESTYLE_PHOTOS];
    return `<p class="lede">${escapeHtml(GALLERY_COPY)}</p>
${photos.map(photo).join("")}
${diagram(LOT_DIAGRAM, 640, 280)}
${diagram(LOCATION_DIAGRAM, 640, 360)}
${leadForm("/gallery/amp")}`;
  }
  if (path === "/faq") {
    return `${faqs(FAQS, "h2")}${leadForm("/faq/amp")}`;
  }
  if (path === "/register") {
    return `<p class="lede">${escapeHtml(PAGES.register.description)}</p>
${leadForm("/register/amp")}
<h2>What registration includes</h2><span class="rule"></span>
<ul>${PRIORITY_BENEFITS.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
<p><strong>${escapeHtml(WHY_REGISTER_NOTE)}</strong></p>`;
  }
  if (path === "/privacy") return `${blocks(PRIVACY_BLOCKS)}${leadForm("/privacy/amp")}`;
  if (path === "/terms") return `${blocks(TERMS_BLOCKS)}${leadForm("/terms/amp")}`;
  return `<p class="lede">${escapeHtml(BLOG_LEDE)}</p>${blocks(BLOG_BLOCKS)}${diagram(LOT_DIAGRAM, 640, 280)}${leadForm("/blog/brampton-pre-construction-guide/amp")}`;
}

function structuredData(path: string, page: PageDef) {
  const data: unknown[] = [
    websiteLd,
    orgLd,
    developerLd,
    projectLd,
    webPageLd({ name: page.h1, path: page.path, description: page.description }),
  ];
  if (path === "/") data.push(offerLd, faqLd(faqsById(HOME_FAQ_IDS)));
  if (path === "/pricing") data.push(offerLd);
  if (path === "/faq") data.push(faqLd(FAQS));
  if (path === "/gallery") {
    for (const item of [AERIAL, ...AREA_PHOTOS, ...LIFESTYLE_PHOTOS]) {
      data.push(imageLd({ path: item.src, name: item.alt, caption: item.caption }));
    }
    data.push(imageLd(LOT_DIAGRAM), imageLd(LOCATION_DIAGRAM));
  }
  if (path === "/blog/brampton-pre-construction-guide") data.push(articleLd);
  if (path !== "/") {
    const crumbName: Record<string, string> = {
      "/floor-plans": "Floor plans",
      "/pricing": "Pricing",
      "/location": "Location",
      "/gallery": "Gallery",
      "/faq": "FAQ",
      "/register": "Register",
      "/privacy": "Privacy",
      "/terms": "Terms",
      "/blog/brampton-pre-construction-guide": "Pre-construction homes in Brampton",
    };
    data.push(breadcrumbLd([
      { name: "Navera at Mayfield Village", path: "/" },
      { name: crumbName[path], path },
    ]));
  }
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

export function renderAmpDocument(path: string) {
  const page = AMP_PAGES[path];
  if (!page) return null;
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const iframeScript =
    path === "/location"
      ? `<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>`
      : "";
  const navLabels = ["Overview", "Floor Plans", "Pricing", "Location", "Gallery", "FAQ", "Register"];
  const navPaths = ["/", "/floor-plans", "/pricing", "/location", "/gallery", "/faq", "/register"];
  const nav = navPaths
    .map((item, index) => {
      const current = item === path ? ` aria-current="page"` : "";
      return `<li><a href="${escapeHtml(ampPublicUrl(item))}"${current}>${navLabels[index]}</a></li>`;
    })
    .join("");

  return `<!doctype html><html amp lang="en-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"><title>${escapeHtml(page.title)}</title><link rel="canonical" href="${canonical}"><meta name="description" content="${escapeHtml(page.description)}"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&amp;family=Inter:wght@400;500;600&amp;display=swap"><script async src="https://cdn.ampproject.org/v0.js"></script><script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script><script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>${iframeScript}<style amp-boilerplate>${BOILERPLATE}</style><noscript><style amp-boilerplate>${BOILERPLATE_NOSCRIPT}</style></noscript><style amp-custom>${CUSTOM_CSS}</style>${structuredData(path, page)}</head><body><a href="#content">Skip to content</a><header class="top"><div class="wrap brand"><amp-img src="/images/media/digreen-favicon.svg" width="48" height="52" alt="Digreen Homes"></amp-img><p>Navera at Mayfield Village<span>Countryside Drive and Torbram Road, Brampton</span></p></div><div class="wrap"><nav aria-label="Pages"><ul>${nav}</ul></nav></div></header><main id="content" class="wrap"><h1>${escapeHtml(page.h1)}</h1><span class="rule"></span><p class="full"><a href="${canonical}">Full page</a></p>${pageMain(path)}<p class="note">${escapeHtml(INDEPENDENCE_DISCLAIMER)}</p></main><footer><div class="wrap"><p>${escapeHtml(INDEPENDENCE_DISCLAIMER)}</p><p><a href="${SITE_URL}/privacy/amp">Privacy</a> · <a href="${SITE_URL}/terms/amp">Terms</a> · <a href="${canonical}">Full page</a></p><p>Analytics stay off on this AMP page.</p></div></footer></body></html>`;
}
