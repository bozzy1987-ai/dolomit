import Link from "next/link";

export default function DzialalnoscSpolecznaPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-red-200 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Działalność społeczna</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Działalność prospołeczna</h1>
          <p className="text-red-100 text-lg">Wspieramy lokalną społeczność</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <p className="text-stone-600 leading-relaxed mb-6">
              PPUH DOLOMIT Kopalnia Ząbkowice S.A. aktywnie wspiera lokalną społeczność poprzez 
              działalność charytatywną i sponsorską w regionie Dąbrowy Górniczej.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">🏥 Wsparcie zdrowia</h3>
                <p className="text-stone-600 text-sm">Pomoc szpitalom i placówkom medycznym</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">🎓 Edukacja</h3>
                <p className="text-stone-600 text-sm">Wspieranie szkół i instytucji edukacyjnych</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">🏃 Sport</h3>
                <p className="text-stone-600 text-sm">Sponsoring lokalnych klubów sportowych</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">🎭 Kultura</h3>
                <p className="text-stone-600 text-sm">Wspieranie wydarzeń kulturalnych</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}