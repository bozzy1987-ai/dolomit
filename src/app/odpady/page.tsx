import Link from "next/link";

export default function OdpadyPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-700 to-stone-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Odpady</h1>
          <p className="text-stone-300 text-lg">Gospodarka odpadami i ochrona środowiska</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Informacje o odpadach</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              PPUH DOLOMIT prowadzi gospodarkę odpadami zgodnie z obowiązującymi przepisami prawa 
              i normami środowiskowymi. Nasze przedsiębiorstwo posiada wymagane zezwolenia 
              i stosuje najwyższe standardy w zakresie postępowania z odpadami.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-2">🌿 Polityka ekologiczna</h3>
              <p className="text-green-700 text-sm">
                Dążymy do minimalizacji wpływu na środowisko i promujemy zasady gospodarki cyrkulacyjnej.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <Link href="/do-pobrania" className="inline-flex gap-6 items-center bg-stone-800 text-white px-7 py-4 font-semibold">Druki zamówień i dokumenty <span aria-hidden="true">↓</span></Link>
      </section>
    </div>
  );
}