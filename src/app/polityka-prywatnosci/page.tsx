import Link from "next/link";

export default function RodoPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / 
            <span className="text-white"> Polityka prywatności</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Polityka prywatności</h1>
          <p className="text-stone-300 text-lg">RODO - Ochrona danych osobowych</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 prose prose-stone max-w-none">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Administrator danych</h2>
            <p className="text-stone-600 mb-6">
              Administratorem Państwa danych osobowych jest PPUH DOLOMIT Kopalnia Ząbkowice S.A. 
              z siedzibą w Dąbrowie Górniczej.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Cel przetwarzania</h2>
            <p className="text-stone-600 mb-6">
              Dane osobowe przetwarzane są w celu realizacji prawnie uzasadnionych interesów 
              administratora oraz w celach określonych w zgodach.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Prawa użytkownika</h2>
            <p className="text-stone-600 mb-6">
              Mają Państwo prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia 
              przetwarzania, wniesienia sprzeciwu, przenoszenia danych.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Kontakt</h2>
            <p className="text-stone-600">
              We wszystkich sprawach związanych z ochroną danych osobowych prosimy o kontakt 
              pod adresem email: <span className="text-amber-600">biuro@dolomit.com.pl</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}