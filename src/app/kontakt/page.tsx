import Link from "next/link";

export default function KontaktPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-stone-300 text-lg">Skontaktuj się z nami w sprawie produktów i współpracy</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-8">Dane kontaktowe</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100 space-y-6">
                {[
                  { label: "Adres", value: "ul. Kopalnia 1\n42-500 Dąbrowa Górnicza" },
                  { label: "Telefon", value: "+48 32 123 45 67" },
                  { label: "Email", value: "biuro@dolomit.com.pl" },
                  { label: "Godziny pracy", value: "Pon-Pt: 7:00 - 15:00" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {i === 0 ? "📍" : i === 1 ? "📞" : i === 2 ? "✉️" : "🕐"}
                    </div>
                    <div>
                      <div className="text-sm text-stone-500">{item.label}</div>
                      <div className="font-medium text-stone-900 whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-8">Wyślij zapytanie</h2>
              <form className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Imię i nazwisko</label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none" placeholder="jan@firma.pl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Temat</label>
                  <select className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
                    <option>Zapytanie o nawóz</option>
                    <option>Zapytanie o kruszywa</option>
                    <option>Współpraca</option>
                    <option>Inne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Wiadomość</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none" placeholder="Treść zapytania..." />
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-xl transition-colors">
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}