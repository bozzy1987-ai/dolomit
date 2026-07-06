import Link from "next/link";
import Image from "next/image";

export default function AkcjonariuszePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Akcjonariusze</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Akcjonariusze</h1>
          <p className="text-stone-300 text-lg">Informacje dla akcjonariuszy</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Informacje dla Akcjonariuszy</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-stone-900 mb-4 text-center">OGŁOSZENIE</h3>
              <div className="flex justify-center mb-8">
                <Image 
                  src="/SKM_C25826041613030.jpg" 
                  alt="Ogłoszenie" 
                  width={666}
                  height={942}
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-stone-900 mb-4 text-center">OGŁOSZENIE</h3>
            </div>

            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              Zarząd PPUH DOLOMIT Kopalnia Ząbkowice SA informuje, że w dniu 16.05.2025 r na posiedzeniu Zwyczajnego Walnego Zgromadzenia Akcjonariuszy zostało zatwierdzone Sprawozdanie z działalności Zarządu za 2024 r., Sprawozdanie finansowe za 2024 r obejmujące bilans, rachunek zysków i strat, informację dodatkową, rachunek przepływów pieniężnych i zestawienie zmian w kapitale własnym wraz z opinią biegłego rewidenta.
            </p>

            <div className="bg-stone-50 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4">
                <a href="/sprawozdaniefin24.pdf" className="flex items-center gap-3 text-amber-600 hover:text-amber-700 font-medium">
                  <Image 
                    src="/pobieranie-pdf.jpg" 
                    alt="Pobierz PDF" 
                    width={48}
                    height={48}
                  />
                  Sprawozdanie finansowe za 2024 r.
                </a>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Struktura własnościowa</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                PPUH DOLOMIT Kopalnia Ząbkowice S.A. jest spółką z wieloletnią tradycją, 
                której akcje są własnością prywatnych inwestorów.
              </p>
              <div className="bg-stone-50 rounded-xl p-6">
                <p className="text-stone-600 text-sm">
                  Szczegółowe informacje dla akcjonariuszy dostępne są w siedzibie spółki 
                  lub po kontakcie z zarządem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}