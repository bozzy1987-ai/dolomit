"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/dz1.jpg",
    title: "Kruszywa budowlane",
    subtitle: "Dolomit premium",
    description: "Kruszywa dla budownictwa i infrastruktury",
    cta: "Zobacz ofertę",
    href: "/kruszywa"
  },
  {
    image: "/dz2.jpg",
    title: "Wapno nawozowe",
    subtitle: "wapno",
    description: "Wysokiej jakości nawóz wapniowo-magnezowy dla rolnictwa",
    cta: "Zobacz produkty",
    href: "/nawozy"
  },
  {
    image: "/1-budy.jpg",
    title: "Ponad 130 lat",
    subtitle: "historia",
    description: "Polski producent z własnym złożem",
    cta: "Poznaj nas",
    href: "/o-firmie"
  },
  {
    image: "/dsc_7336.jpg",
    title: "Certyfikowana",
    subtitle: "jakość",
    description: "Badania IUNG Puławy potwierdzają skuteczność",
    cta: "Certyfikaty",
    href: "/o-firmie/certyfikaty"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className={`max-w-2xl transition-all duration-500 ${current === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm mb-4">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              {slides[current].subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-8">
              {slides[current].description}
            </p>
            <Link
              href={slides[current].href}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/25"
            >
              {slides[current].cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-amber-500 w-8" : "bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}