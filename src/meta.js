const ORIGIN = "https://legaent.in";

function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  return el;
}
const meta = (attr, key) => upsert(`meta[${attr}="${key}"]`, () => { const m = document.createElement("meta"); m.setAttribute(attr, key); return m; });

export function setMeta({ title, description, path = "/", noindex = false }) {
  document.title = title;
  const url = ORIGIN + path;
  meta("name", "description").content = description;
  meta("name", "robots").content = noindex ? "noindex" : "index,follow";
  meta("property", "og:title").content = title;
  meta("property", "og:description").content = description;
  meta("property", "og:url").content = url;
  upsert('link[rel="canonical"]', () => { const l = document.createElement("link"); l.rel = "canonical"; return l; }).href = url;
}
