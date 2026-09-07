import Link from "next/link";
import Image from "next/image";

import { getArticle } from "@/lib/news";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) notFound();

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-amber-200 mb-4">
            <Link href="/">Strona główna</Link> / <Link href="/aktualnosci">Aktualności</Link> / <span className="text-white">{article.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-amber-200">
            <span className="bg-amber-500/30 px-3 py-1 rounded-full text-sm">{article.category}</span>
            {article.date && <span>{article.date}</span>}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-200">
            {article.image && <div className="relative aspect-video mb-8 overflow-hidden rounded-xl"><Image src={article.image} alt={article.imageAlt || article.title} fill sizes="(max-width: 768px) 100vw, 800px" className="object-contain" /></div>}
            <div className="prose prose-stone max-w-none mb-8">
              <ArticleBody body={article.body} content={article.content} />
            </div>
            {article.links && (
              <ul className="space-y-3 mb-8">
                {article.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 border border-stone-200 p-5 text-stone-800 font-medium hover:bg-stone-50 hover:border-amber-500 transition-colors">
                      <span>{link.label}<span className="block text-sm font-normal text-stone-500 mt-1">Otwórz odnośnik (nowa karta)</span></span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {article.source && <p className="text-sm text-stone-500 mb-8">Źródło: <a href={article.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">ogłoszenie na stronie DOLOMIT</a>.</p>}
            {article.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.images.map((img, idx) => (
                  <div key={idx} className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image src={img} alt={article.imageAlts?.[idx] || `${article.title} - zdjęcie ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/aktualnosci" className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700">
              ← Wróć do aktualności
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
