"use client";

import Image from "next/image";
import Link from "next/link";

export default function HistoriaPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Historia</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Historia</h1>
          <p className="text-stone-300 text-lg">Ponad 130 lat tradycji górniczej w Zagłębiu Dąbrowskim</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <div className="relative h-64">
                <Image
                  src="/historia1.jpg"
                  alt="Kopalnia Ząbkowice - widok historyczny"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-900 mb-2">Początki górnictwa</h3>
                <p className="text-stone-600 text-sm">
                  Działalność górniczo-hutnicza na terenie Ząbkowic prowadzona była od średniowiecza.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <div className="relative h-64">
                <Image
                  src="/historia2.jpg"
                  alt="Wydobycie dolomitu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-stone-900 mb-2">Wydobycie dolomitu</h3>
                <p className="text-stone-600 text-sm">
                  Wydobycie i przeróbka rud cynku, żelaza, wapienia, a przez wiele ostatnich lat - dolomitu.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/art05.jpg"
                    alt="Artykuł historyczny"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Image
                    src="/sto_lat_kopalni_zabkowice.gif"
                    alt="Sto lat kopalni Ząbkowice"
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Zakończenie wydobycia</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Z dniem <strong>31.12.2022r.</strong> eksploatacja dolomitu ze złoża „Ząbkowice Będzińskie I" została zakończona. 
                  Po prawie 130 letnim okresie prowadzenia wydobycia nadszedł czas zagospodarowania terenów przekształconych robotami górniczymi.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                  <p className="text-stone-700">
                    <strong>Zakończył się pewien etap w gospodarczej i kulturalnej historii Dąbrowy Górniczej</strong>, 
                    z którym związane było życie miejscowej ludności oraz kontynuowane były tradycje górnicze Zagłębia Dąbrowskiego.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-stone-900 mb-4 mt-8">Nowe złoże</h2>
                <p className="text-stone-600 leading-relaxed">
                  Przedsiębiorstwo kontynuuje działalność wydobywczą ze złoża <strong>Chruszczobród II</strong>, 
                  które wyróżnia się bardzo wysoką czystością geologiczną i stabilną zawartością magnezu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}