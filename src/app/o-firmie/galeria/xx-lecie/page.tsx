"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/bar2.jpg", alt: "Obchody XX-lecia - barek" },
  { src: "/bar5.jpg", alt: "Impreza jubileuszowa" },
  { src: "/bar6.jpg", alt: "Spotkanie pracowników" },
  { src: "/bar7.jpg", alt: "Uroczystość" },
  { src: "/bar8.jpg", alt: "Rozrywka" },
  { src: "/bba2.jpg", alt: "Bal z okazji XX-lecia" },
  { src: "/bba3.jpg", alt: "Goście jubileuszowi" },
  { src: "/brka11.jpg", alt: "Warsztat" },
  { src: "/brka12.jpg", alt: "Prezentacja" },
  { src: "/brka1.jpg", alt: "Uczestnicy" },
  { src: "/brka3.jpg", alt: "Pamiątki" },
];

export default function GaleriaXXPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-700 to-stone-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie/galeria"> Galeria</Link> / 
            <span className="text-white"> XX-lecie</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria - XX-lecie</h1>
          <p className="text-stone-300">Obchody 20-lecia PPUH Dolomit</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(img.src)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>

          {selected && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src={selected}
                  alt="Powiększone zdjęcie"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link 
            href="/o-firmie/galeria/biurowiec"
            className="flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Poprzednia galeria
          </Link>
          <Link 
            href="/o-firmie/galeria/wyroznienia"
            className="flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors"
          >
            Następna galeria
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}