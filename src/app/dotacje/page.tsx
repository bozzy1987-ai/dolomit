"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    year: "2014",
    title: "Zwiększenie konkurencyjności PPUH Dolomit Kopalnia Ząbkowice S.A. poprzez obniżenie kosztów produkcji w wyniku zakupu nowoczesnej ładowarki Volvo L180H",
    beneficjent: "P.P.U.H. \"Dolomit\" Kopalnia \"Ząbkowice\" S.A.",
    value: "2 194 000,00 zł",
    euContribution: "1 096 000,00 zł",
    images: ["/1az.jpg", "/2az.jpg"],
    description: "Projekt w ramach Regionalnego Programu Operacyjnego Województwa Śląskiego na lata 2007-2013, Działanie 3.2. Innowacje i wiedza.",
    fund: "Europejski Fundusz Rozwoju Regionalnego",
    program: "RPO WŚ 2007-2013"
  },
  {
    year: "2015",
    title: "Zwiększenie konkurencyjności poprzez zakup maszyn do nowej linii produkującej materiały do nawozów granulowanych",
    beneficjent: "P.P.U.H. \"Dolomit\" Kopalnia \"Ząbkowice\" S.A.",
    value: "1 800 000,00 zł",
    euContribution: "900 000,00 zł",
    images: ["/DSC_9902.JPG", "/DSC_9907.JPG"],
    description: "Projekt w ramach Regionalnego Programu Operacyjnego Województwa Śląskiego na lata 2014-2020.",
    fund: "Europejski Fundusz Rozwoju Regionalnego",
    program: "RPO WŚ 2014-2020"
  },
  {
    year: "2023",
    title: "Badania nad wykorzystaniem dolomitu jako sorbentów wapniowych",
    beneficjent: "P.P.U.H. \"Dolomit\" Kopalnia \"Ząbkowice\" S.A.",
    value: "1 200 000,00 zł",
    euContribution: "840 000,00 zł",
    images: ["/01.jpg", "/02.jpg"],
    description: "Projekt w ramach Programu Operacyjnego Inteligentny Rozwój, Działanie 2.3.2. Badania na ryko.",
    fund: "Europejski Fundusz Rozwoju Regionalnego",
    program: "POIR 2.3.2"
  },
  {
    year: "2023",
    title: "Poprawa efektywności energetycznej w zakresie wymiany energochłonnej technologii na terenie zakładu w Chruszczobrodzie",
    beneficjent: "P.P.U.H. \"Dolomit\" Kopalnia \"Ząbkowice\" S.A.",
    value: "3 500 000,00 zł",
    euContribution: "2 100 000,00 zł",
    images: ["/03.jpg", "/04.jpg"],
    description: "Projekt w ramach Kredytu ekologicznego Banku Gospodarstwa Krajowego, finansowanego z Programu Fundusze Europejskie dla Nowoczesnej Gospodarki (FENG) na lata 2021-2027.",
    fund: "Fundusze Europejskie dla Nowoczesnej Gospodarki (FENG)",
    program: "FENG 2021-2027"
  },
];

export default function DotacjePage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  const next = () => setCurrent((prev) => (prev + 1) % projects.length);

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/">Strona główna</Link> / <span className="text-white">Dotacje unijne</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dotacje unijne</h1>
          <p className="text-blue-200 text-lg">Projekty współfinansowane ze środków Unii Europejskiej</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs font-bold text-center leading-tight p-2">
                  FUNDUSZE<br/>EUROPEJSKIE
                </div>
                <span className="text-stone-700 font-medium text-sm">Fundusze Europejskie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">POLSKA</span>
                </div>
                <span className="text-stone-700 font-medium text-sm">Polska</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">UE</span>
                </div>
                <span className="text-stone-700 font-medium text-sm">Unia Europejska</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center p-1">
                  <span className="text-white text-xs font-bold text-center leading-tight">BGK</span>
                </div>
                <span className="text-stone-700 font-medium text-sm">Bank Gospodarstwa Krajowego</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold text-xl">
                  {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <span className="text-blue-200 text-sm">Projekty unijne</span>
              </div>
            </div>

            <div className="relative h-[380px] md:h-[420px] bg-stone-100">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="flex h-full">
                    <div className="w-1/2 relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-1/2 relative">
                      <Image
                        src={project.images[1] || project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8 bg-stone-50">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-amber-500 text-white text-xl font-bold px-4 py-2 rounded-lg">
                  {projects[current].year}
                </span>
                <span className="bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {projects[current].program}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-stone-800 mb-3 leading-tight">
                {projects[current].title}
              </h2>

              <p className="text-stone-600 mb-5 text-sm">
                {projects[current].description}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-stone-200">
                  <p className="text-xs text-stone-500 mb-1">Beneficjent</p>
                  <p className="font-semibold text-stone-800 text-sm">{projects[current].beneficjent}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-stone-200">
                  <p className="text-xs text-stone-500 mb-1">Wartość projektu</p>
                  <p className="font-semibold text-stone-800">{projects[current].value}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <p className="text-xs text-green-600 mb-1">Dofinansowanie UE</p>
                  <p className="font-bold text-green-700 text-lg">{projects[current].euContribution}</p>
                </div>
              </div>

              <p className="text-xs text-stone-500 border-t pt-4">
                Źródło finansowania: {projects[current].fund}
              </p>
            </div>

            <div className="flex justify-center gap-2 pb-4 bg-stone-50 pt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-blue-800 w-8" : "bg-stone-300 hover:bg-stone-400"}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 text-center mb-8">
            <p className="text-stone-800 text-lg font-medium">
              <strong>Projekt współfinansowany przez Unię Europejską</strong>
            </p>
            <p className="text-stone-600 text-sm mt-1">
              z Europejskiego Funduszu Rozwoju Regionalnego
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image 
              src="/eu-banner.jpg" 
              alt="Unia Europejska" 
              width={800}
              height={75}
              className="rounded-xl"
            />
          </div>

          <div className="text-center text-stone-500 text-sm">
            <p>Informacje na temat programów unijnych znajdziesz na:</p>
            <div className="flex justify-center gap-6 mt-3">
              <a href="https://www.funduszeeuropejskie.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                funduszeeuropejskie.gov.pl
              </a>
              <a href="https://www.rpo.slaskie.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                rpo.slaskie.pl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}