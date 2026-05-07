import Link from "next/link";

export default function PracaPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Praca</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Praca</h1>
          <p className="text-blue-100 text-lg">Dołącz do zespołu Kopalni Dolomit</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Aktualne oferty pracy</h2>
            <div className="text-stone-600 mb-8">
              <p className="mb-4">Aktualnie nie mamy otwartych ofert pracy.</p>
              <p>Przesyłaj swoje CV na adres: <span className="text-amber-600">biuro@dolomit.com.pl</span></p>
            </div>
            
            <h3 className="text-xl font-bold text-stone-900 mb-4">Warunki pracy</h3>
            <ul className="space-y-3">
              {[
                " Stabilne zatrudnienie",
                " Atrakcyjne wynagrodzenie",
                " Praca w firmie z tradycjami",
                " Możliwość rozwoju",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}