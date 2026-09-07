import "server-only";
import { createClient } from "@sanity/client";
import type { PortableTextBlock } from "@portabletext/react";
import { legacyNews, legacyNewsData } from "@/data/legacy-news";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export type Article = {
  id: string;
  title: string;
  date: string | null;
  category: string;
  excerpt: string;
  image: string | null;
  imageAlt?: string;
  body?: PortableTextBlock[];
  content?: string;
  images: string[];
  imageAlts?: string[];
  links?: { label: string; href: string }[];
  source?: string;
};

type CmsArticle = Omit<Article, "date"> & { publishedAt: string | null };
const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: "published", timeout: 10000, maxRetries: 1 }) : null;
const fields = `"id": slug.current, title, category, excerpt, publishedAt,
  "image": mainImage.asset->url, "imageAlt": mainImage.alt,
  body, "images": coalesce(gallery[].asset->url, []), "imageAlts": gallery[].alt, links`;
const published = `_type == "news" && defined(slug.current) && !(_id in path("drafts.**")) && !(_id in path("versions.**"))`;

function normalize(article: CmsArticle): Article {
  const date = article.publishedAt ? new Date(article.publishedAt) : null;
  return { ...article, date: date && !Number.isNaN(date.getTime()) ? new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Warsaw" }).format(date) : null };
}

export async function getNews(): Promise<Pick<Article, "id" | "title" | "date" | "category" | "excerpt" | "image" | "imageAlt">[]> {
  if (!client) return legacyNews;
  try {
    const articles = await client.fetch<CmsArticle[]>(`*[${published}] | order(publishedAt desc, _createdAt desc) {${fields}}`, {}, { cache: "no-store" });
    const ids = new Set(articles.map((article) => article.id));
    return [...articles.map(normalize), ...legacyNews.filter((article) => !ids.has(article.id))];
  } catch (error) {
    console.error("Nie udało się pobrać aktualności z Sanity:", error instanceof Error ? error.message : "Błąd połączenia");
    return legacyNews;
  }
}

export async function getArticle(id: string): Promise<Article | null> {
  if (client) {
    // Let an upstream error reach the error boundary rather than cache a false 404.
    const article = await client.fetch<CmsArticle | null>(`*[${published} && slug.current == $id][0] {${fields}}`, { id }, { cache: "no-store" });
    if (article) return normalize(article);
  }
  const legacy = legacyNewsData[id];
  const summary = legacyNews.find((article) => article.id === id);
  return legacy && summary ? { ...summary, ...legacy } : null;
}
