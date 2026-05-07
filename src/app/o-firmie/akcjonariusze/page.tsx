import Link from "next/link";

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
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Struktura własnościowa</h2>
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
      </section>
    </div>
  );
}