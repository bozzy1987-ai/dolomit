"use client";

import Image from "next/image";
import Link from "next/link";

const albums = [
  { 
    href: "/o-firmie/galeria/kopalnia", 
    title: "Kopalnia", 
    desc: "Zdjęcia z terenu kopalni", 
    cover: "/dz1.jpg" 
  },
  { 
    href: "/o-firmie/galeria/xx-lecie", 
    title: "XX-lecie", 
    desc: "Obchody 20-lecia firmy", 
    cover: "/bar2.jpg" 
  },
  { 
    href: "/o-firmie/galeria/biurowiec", 
    title: "Biurowiec", 
    desc: "Siedziba główna", 
    cover: "/dsc_7336.jpg" 
  },
  { 
    href: "/o-firmie/galeria/wyroznienia", 
    title: "Wyróżnienia", 
    desc: "Nagrody i certyfikaty", 
    cover: "/medal.jpg" 
  },
];

export default function GaleriaPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Galeria</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
          <p className="text-stone-300 text-lg">Zdjęcia z życia firmy</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album, i) => (
              <Link 
                key={i} 
                href={album.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-stone-900 mb-1 group-hover:text-amber-600 transition-colors">{album.title}</h3>
                  <p className="text-stone-500 text-sm">{album.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}