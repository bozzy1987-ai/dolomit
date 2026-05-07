"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function KruszywaPage() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-700 to-stone-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / <span className="text-white">Kruszywa budowlane</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kruszywa budowlane</h1>
          <p className="text-stone-300 text-lg max-w-2xl">
            Wysokiej jakości kruszywo dolomitowe do budownictwa, infrastruktury i robót drogowych. 
            Produkowane z czystego dolomitu z własnego złoża.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-12">
            <h2 className="text-xl font-bold text-stone-900 mb-6">O kopalni</h2>
            <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>
                PPUH "DOLOMIT" Kopalnia "Ząbkowice" Spółka Akcyjna jest właścicielem kopalni odkrywkowej dolomitu. 
                Urabianie złoża prowadzone jest sposobem minerskim przy pomocy strzelania metodą długich otworów. 
                Otwory strzałowe wiercone są wiertnicą typu{" "}
                <span 
                  className="relative inline-block cursor-pointer"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <span className="text-amber-600 font-semibold hover:text-amber-700 border-b-2 border-amber-400 border-dashed">
                    HAUSHERR
                  </span>
                  {showTooltip && (
                    <div className="absolute z-50 left-1/2 -translate-x-1/2 top-8 w-96 bg-white rounded-xl shadow-2xl border border-stone-200 p-2">
                      <img 
                        src="https://images.sodineg.com/nw/zoom/p058286_680bb21e035fb.jpg" 
                        alt="Wiertnica HAUSHERR" 
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-center text-sm text-stone-500 mt-2">Wiertnica HAUSHERR</p>
                    </div>
                  )}
                </span>
                .
              </p>
              <p>
                Odstrzelone masy skalne po rozdrobnieniu brył ponadwymiarowych przy pomocy materiału wybuchowego lub 
                młota hydraulicznego typu KRUPP, transportowane są do zakładu przeróbczego samochodami technologicznymi. 
                Rozdrobniony kamień w kruszarce szczękowej oraz stożkowej zostaje rozfrakcjonowany na zespołach przesiewczych. 
                W ten sposób uzyskiwane są kruszywa zgodne z Polską Normą lub na indywidualne zamówienie odbiorcy. 
                Produkowane asortymenty kruszywa są badane pod względem fizykomechanicznym.
              </p>
              <p className="text-stone-700 font-medium">
                Przedsiębiorstwo posiada potencjał wysoko wykwalifikowanych pracowników, sprzęt i urządzenia mechaniczne 
                oraz zasoby bilansowe złoża pozwalające na zwiększenie produkcji.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-stone-100">
                <Image src="/kruszywo-ciagle.jpg" alt="Kruszywo o uziarnieniu ciągłym" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">KRUSZYWO DOLOMITOWE O UZIARNIENIU CIĄGŁYM</h3>
              <ul className="space-y-2">
                {["0 - 4 mm", "0 - 11,2 mm", "0 - 31,5 mm", "0 - 63 mm"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-stone-100">
                <Image src="/kruszywo-grube.jpg" alt="Kruszywo o uziarnieniu grubym" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">KRUSZYWO DOLOMITOWE O UZIARNIENIU GRUBYM</h3>
              <ul className="space-y-2">
                {["2 - 8 mm", "4 - 8 mm", "11,2 - 31,5 mm", "11,2 - 45 mm", "31,5 - 63 mm", "45 - 90 mm", "90 - 220 mm"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-stone-100">
                <Image src="/kruszywo-pyl.jpg" alt="Kruszywo z zawartością frakcji iłowo-pyłowej" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">KRUSZYWO DOLOMITOWE O UZIARNIENIU CIĄGŁYM Z PODWYŻSZONĄ ZAWARTOŚCIĄ FRAKCJI IŁOWO-PYŁOWEJ</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-stone-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  0 - 22,4 mm
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <p className="text-stone-700 text-sm leading-relaxed">
              <strong>KRUSZYWA są scharakteryzowane normą PN-EN 13242</strong> - Kruszywa do niezwiązanych i związanych hydraulicznie materiałów stosowanych w obiektach budowlanych i budownictwie drogowym.
            </p>
            <p className="text-stone-600 text-sm mt-3">
              Analizy fizyko-chemiczne oraz badania sitowe dla kruszyw pochodzących ze złoża Ząbkowice - Będzińskie I produkowanych przez P.P.U.H. "DOLOMIT" Kopalnia Ząbkowice S.A. w Dąbrowie Górniczej wykonane przez: <strong>LABORATORIUM INŻYNIERII LĄDOWEJ "LABOTEST" SP. Z O.O. KATOWICE</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Zastosowanie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Budownictwo", desc: "Fundamenty, ściany, stropy", icon: "🏗️" },
              { title: "Infrastruktura", desc: "Drogi, mosty, parkingi", icon: "🛣️" },
              { title: "Kolejnictwo", desc: "Podkłady, nawierzchnie", icon: "🚂" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 hover:bg-stone-50 rounded-2xl transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}