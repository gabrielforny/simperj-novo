import { useEffect } from "react";
import { SITE } from "@/data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: Record<string, unknown> | undefined) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/** Componente sem render visual — gerencia title/meta/canonical/OG/JSON-LD por página (SPA, sem SSR). */
export function Seo({ title, description, path, image, type = "website", jsonLd }: SeoProps) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setCanonical(`${SITE.url}${path}`);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE.url}${path}`);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image ? `${SITE.url}${image}` : `${SITE.url}${SITE.logoColor}`);

    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    setJsonLd("page-jsonld", jsonLd);
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
