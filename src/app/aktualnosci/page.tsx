import Link from "next/link";
import Image from "next/image";

import { getNews } from "@/lib/news";

export const dynamic = "force-dynamic";

export default async function AktualnosciPage() {
  const news = await getNews();
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aktualności</h1>
          <p className="text-amber-100 text-lg">Najnowsze wiadomości z Kopalni Dolomit</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <Link 
                key={i} 
                href={`/aktualnosci/${item.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all group"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image} 
                      alt={item.imageAlt || item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">{item.category}</span>
                    {item.date && <span className="text-stone-400 text-xs">{item.date}</span>}
                  </div>
                  <h2 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h2>
                  <p className="text-stone-600 text-sm line-clamp-3">{item.excerpt}</p>
                  <div className="mt-4 text-amber-600 font-medium text-sm inline-flex items-center gap-1">
                    Czytaj więcej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
