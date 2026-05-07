"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/budynek.jpg", alt: "Budynek biurowy" },
  { src: "/wagi.jpg", alt: "Wagi samochodowe" },
  { src: "/waga.jpg", alt: "Waga samochodowa" },
  { src: "/waga_prod.jpg", alt: "Waga produkcyjna" },
  { src: "/stacja.jpg", alt: "Stacja" },
  { src: "/flagi.jpg", alt: "Flagi" },
  { src: "/hala_bud.jpg", alt: "Hala magazynowa" },
  { src: "/hala_bud2.jpg", alt: "Hala magazynowa - widok 2" },
  { src: "/dolomity_3.jpg", alt: "Oświetlenie terenu - wizualizacja" },
  { src: "/dolomity_7.jpg", alt: "Oświetlenie - realizacja" },
  { src: "/dolomity_9.jpg", alt: "Oświetlenie terenu" },
];

export default function InwestycjePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Inwestycje</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inwestycje</h1>
          <p className="text-stone-300 text-lg">Rozwój i modernizacja przedsiębiorstwa</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <p className="text-stone-600 leading-relaxed mb-4">
              W <strong>Zakładzie Górniczym Chruszczobród</strong> realizowana jest inwestycja: 
              <em>"Budowa zaplecza technicznego i biurowo-socjalnego w skład którego wchodzą: budynek biurowy, 
              portiernia, budynek obsługi sprzedaży, dwie wagi samochodowe, myjka samochodowa, 
              przenośny zbiornik na paliwo, hala magazynowa, organizacja dróg wewnętrznych, 
              oświetlenie terenu, kanalizacja sanitarna"</em>
            </p>
            <p className="text-stone-600">
              Przedstawiamy dokumentację zdjęciową z realizacji:
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Budynek biurowy i wagi</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/budynek.jpg" alt="Budynek biurowy" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/wagi.jpg" alt="Wagi samochodowe" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/waga.jpg" alt="Waga samochodowa" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/waga_prod.jpg" alt="Waga produkcyjna" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/stacja.jpg" alt="Stacja" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/flagi.jpg" alt="Flagi" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Budowa hali remontowo magazynowej</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/hala_bud.jpg" alt="Hala magazynowa" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/hala_bud2.jpg" alt="Hala magazynowa - widok 2" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Oświetlenie terenu</h2>
            <p className="text-stone-600 mb-6">Oświetlenie zostało wykonane zgodnie z projektem, który przedstawia poniższa wizualizacja:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/dolomity_3.jpg" alt="Oświetlenie - wizualizacja" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/dolomity_7.jpg" alt="Oświetlenie - realizacja" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/dolomity_9.jpg" alt="Oświetlenie terenu" fill className="object-cover" />
              </div>
            </div>
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
    </div>
  );
}