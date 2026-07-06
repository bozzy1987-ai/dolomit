"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const certs = [
  { src: "/00035.jpg", alt: "Certyfikat ISO 9001" },
  { src: "/certyfikat_prb.jpg", alt: "Certyfikat PRB" },
  { src: "/certyfikat_jakosc.jpg", alt: "Certyfikat jakości" },
  { src: "/00036.jpg", alt: "Certyfikat 00036" },
  { src: "/00037.jpg", alt: "Certyfikat 00037" },
  { src: "/00038.jpg", alt: "Certyfikat 00038" },
  { src: "/certyfikaty/bcc_rekomendacja.jpg", alt: "BCC Rekomendacja" },
  { src: "/dsc_4205.jpg", alt: "DSC 4205" },
  { src: "/medal.jpg", alt: "Medal" },
  { src: "/solidna2011.jpg", alt: "Solidna Firma 2011" },
  { src: "/solidna2012.jpg", alt: "Solidna Firma 2012" },
  { src: "/swscan00029.jpg", alt: "SW Scan 00029" },
  { src: "/swscan00138.jpg", alt: "SW Scan 00138" },
  { src: "/wjk.jpg", alt: "WJK" },
];

export default function CertyfikatyPage() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((prev) => (prev - 1 + certs.length) % certs.length);
  const next = () => setCurrent((prev) => (prev + 1) % certs.length);

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Certyfikaty</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certyfikaty</h1>
          <p className="text-stone-300 text-lg">Potwierdzone jakość i bezpieczeństwo produktów</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-4">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold text-xl">
                  {String(current + 1).padStart(2, '0')} / {String(certs.length).padStart(2, '0')}
                </span>
                <span className="text-green-200 text-sm">Certyfikaty i wyróżnienia</span>
              </div>
            </div>

            <div className="relative h-[500px] md:h-[600px] bg-stone-100">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
                >
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setLightbox(true)}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-green-700 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-green-700 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 p-4 bg-stone-50">
              {certs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-green-800 w-8" : "bg-stone-300 hover:bg-stone-400"}`}
                />
              ))}
            </div>

            <div className="p-6 bg-stone-50 border-t border-stone-200">
              <p className="text-center text-stone-600 text-sm">
                Kliknij na certyfikat aby powiększyć
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 text-center mb-8">
            <p className="text-stone-800 text-lg font-medium">
              <strong>Projekt współfinansowany przez Unię Europejską</strong>
            </p>
            <p className="text-stone-600 text-sm mt-1">
              z Europejskiego Funduszu Rozwoju Regionalnego
            </p>
          </div>

          <div className="flex justify-center">
            <Image 
              src="/eu-banner.jpg" 
              alt="Unia Europejska" 
              width={800}
              height={75}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {lightbox && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={certs[current].src}
              alt={certs[current].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}