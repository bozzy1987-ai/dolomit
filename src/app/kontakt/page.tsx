import Link from "next/link";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-stone-300 mb-4">
            <Link href="/">Strona główna</Link> / <span className="text-white">Kontakt</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-stone-300 text-lg">Skontaktuj się z nami w sprawie produktów i współpracy</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <img src="/04.jpg" alt="Kopalnia Dolomit" className="w-full rounded-xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Nasz adres:</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100">
                <p className="text-lg font-semibold text-stone-900 mb-4">
                  PRZEDSIĘBIORSTWO PRODUKCYJNO-USŁUGOWO-HANDLOWE "DOLOMIT" <br />
                  KOPALNIA "ZĄBKOWICE" Spółka Akcyjna
                </p>
                <p className="text-stone-600 mb-2">42-520 Dąbrowa Górnicza, ul. Dolomitowa 6</p>
                <p className="text-stone-600 mb-6">Kopalnia Chruszczobród, ul. Wincentego Witosa 19</p>
                
                <p className="text-stone-600 mb-2"><strong>Tel:</strong> (032) 639-07-10, (032) 262-30-15, 264-02-71</p>
                <p className="text-stone-600 mb-2"><strong>Tel Waga:</strong> 609 803 675, 609 677 120</p>
                <p className="text-stone-600 mb-6"><strong>Fax:</strong> (032) 639-07-13, (032) 639-07-28</p>

                <p className="text-stone-600 mb-1"><strong>NIP:</strong> 629-001-36-74</p>
                <p className="text-stone-600 mb-1"><strong>REGON:</strong> 271105393</p>
                <p className="text-stone-600 mb-1"><strong>KRS:</strong> 0000188812</p>
                <p className="text-stone-600 mb-6">Sąd Rejonowy w Katowicach, VIII Wydział Krajowego Rejestru Sądowego</p>
                <p className="text-stone-600 mb-6">Wysokość kapitału zakładowego: 525.000 zł</p>

                <p className="text-stone-600 mb-4">
                  <strong>KONTO:</strong> ING. Bank Śląski S.A. w Katowicach Oddział Zawiercie<br />
                  54 1050 1591 1000 0008 0070 0189
                </p>
              </div>

              <div className="mt-6">
                <img src="/mapa2.jpg" alt="Mapa" className="w-full rounded-xl" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Telefony:</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100 space-y-4">
                {[
                  { dzial: "Sekretariat", tel: "(32) 639 07 29" },
                  { dzial: "Zbyt/kasa", tel: "(32) 639 07 21" },
                  { dzial: "Sprzedaż", tel: "(32) 639 07 27" },
                  { dzial: "Kadry", tel: "(32) 639 07 29" },
                  { dzial: "Fax", tel: "(32) 639 07 13" },
                  { dzial: "Waga Chruszcz.", tel: "609 677 120" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-stone-100 pb-3">
                    <span className="text-stone-600">{item.dzial}</span>
                    <span className="font-semibold text-stone-900">{item.tel}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <img src="/solidna2012.jpg" alt="Solidna Firma 2012" className="h-32" />
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mb-6 mt-8">Zarząd</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100 space-y-6">
                <div className="flex items-start gap-6 mb-6">
                  <img src="/kmiecik.jpg" alt="Janusz Kmiecik" className="w-40 h-40 object-cover rounded-xl" />
                  <div>
                    <p className="font-semibold text-stone-900">Prezes Zarządu - Dyrektor</p>
                    <p className="text-stone-600">Janusz Kmiecik</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">V-ce Prezes Zarządu - Z-ca Dyrektora</p>
                  <p className="text-stone-600">Zbigniew Grochalski</p>
                  <p className="text-stone-500 text-sm">Tel. (032) 6390729, Fax (032) 6390713</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Prokurent - Główny Księgowy</p>
                  <p className="text-stone-600">Ilona Olszowiec</p>
                  <p className="text-stone-500 text-sm">Tel. (032) 639-07-20</p>
                  <p className="text-amber-600 text-sm">ksiegowosc@dolomit.com.pl</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">E-mail Biura Zarządu:</p>
                  <p className="text-amber-600">organizacyjnokadrowy@dolomit.com.pl</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mb-6 mt-8">Kierownictwo</h2>
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100 space-y-4">
                {[
                  { stanowisko: "Kierownik Ruchu Zakładu Górniczego", imie: "Piotr Golik", tel: "(032) 639-07-11", email: "golikp@dolomit.com.pl" },
                  { stanowisko: "Zastępca Kierownika Ruchu Zakładu Górniczego", imie: "Piotr Bednarczyk", tel: "(032) 639-07-11", email: "krzg@dolomit.com.pl" },
                  { stanowisko: "Główny Inżynier ds. Energo-Mechanicznych", imie: "Krystian Wyszyński", tel: "607 783 605", email: "k.wyszynski@dolomit.com.pl" },
                  { stanowisko: "Sztygar ds. Rekultywacji i BDO (kontakt w sprawie odpadów)", imie: "Łukasz Grochalski", tel: "607 783 093", email: "srodowisko@dolomit.com.pl" },
                  { stanowisko: "Główny Specjalista ds. Sprzedaży i Marketingu", imie: "Aneta Bromblik", tel: "(032) 639-07-27, 609-060-125", email: "handel@dolomit.com.pl" },
                  { stanowisko: "Dział Marketingu", imie: "Krystian Sołtysik", tel: "609-060-093", email: "marketing@dolomit.com.pl" },
                  { stanowisko: "Główny Specjalista ds. Produkcji i Ochrony Środowiska", imie: "Marcin Śliwa", tel: "603 093 363", email: "jakosc@dolomit.com.pl" },
                  { stanowisko: "Pełnomocnik Zarządu ds. Rozwoju", imie: "Michał Bentkowski", tel: "783-639-634, (032) 639-07-28", email: "inwestycje@dolomit.com.pl" },
                  { stanowisko: "Specjalista ds. BHP", imie: "Agnieszka Rydzowska", tel: "(032) 639-07-12", email: "bhp@dolomit.com.pl" },
                  { stanowisko: "Główny Specjalista ds. Organizacyjno Kadrowych", imie: "Iwona Szkliniarz", tel: "(032) 639-07-29", email: "organizacyjnokadrowy@dolomit.com.pl" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-stone-100 pb-4">
                    <p className="font-semibold text-stone-900">{item.stanowisko}</p>
                    <p className="text-stone-600">{item.imie}</p>
                    <p className="text-stone-500 text-sm">{item.tel}</p>
                    <p className="text-amber-600 text-sm">{item.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}