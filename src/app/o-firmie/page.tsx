import Link from "next/link";

export default function OFirmiePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O firmie</h1>
          <p className="text-stone-300 text-lg">PPUH DOLOMIT Kopalnia Ząbkowice S.A.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">O przedsiębiorstwie</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <p className="text-stone-600 leading-relaxed mb-4">
                  PPUH DOLOMIT Kopalnia Ząbkowice S.A. to polski producent wysokiej jakości wyrobów dolomitowych. 
                  Przedsiębiorstwo posiada bogatą historię sięgającą początków górnictwa w regionie.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Nasze produkty znajdują zastosowanie w rolnictwie, budownictwie i przemyśle. 
                  Wapno nawozowe z magnezem produkowane przez naszą kopalnię cieszy się uznaniem wśród rolników w całej Polsce.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Zarząd</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center text-2xl">👤</div>
                  <div>
                    <div className="font-bold text-stone-900">Janusz Kmiecik</div>
                    <div className="text-amber-600">Prezes Zarządu</div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Janusz Kmiecik kieruje przedsiębiorstwem, rozwijając współpracę z lokalnym otoczeniem 
                  i promując produkty dolomitowe na rynku krajowym.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-stone-900 mb-6 mt-12">Menu firmy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/o-firmie/historia", label: "Historia", icon: "📜" },
              { href: "/o-firmie/certyfikaty", label: "Certyfikaty", icon: "📋" },
              { href: "/o-firmie/galeria", label: "Galeria", icon: "🖼️" },
              { href: "/o-firmie/praca", label: "Praca", icon: "💼" },
              { href: "/o-firmie/dotacja", label: "Dotacja", icon: "💰" },
              { href: "/o-firmie/dzialalnosc-spoleczna", label: "Działalność społeczna", icon: "❤️" },
              { href: "/o-firmie/inwestycje", label: "Inwestycje", icon: "🏗️" },
              { href: "/o-firmie/akcjonariusze", label: "Akcjonariusze", icon: "📊" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:border-amber-300 transition-all text-center group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-medium text-stone-900 group-hover:text-amber-600">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}