import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-white">
                D
              </div>
              <span className="font-bold text-white text-lg">DOLOMIT</span>
            </div>
            <p className="text-sm text-stone-400">
              PPUH DOLOMIT Kopalnia Ząbkowice S.A.<br />
              Ponad 130 lat tradycji górniczej
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Produkty</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kruszywa" className="hover:text-amber-400">Kruszywa budowlane</Link></li>
              <li><Link href="/nawozy" className="hover:text-amber-400">Wapno nawozowe</Link></li>
              <li><Link href="/nawozy" className="hover:text-amber-400">Nawóz magnezowy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Firma</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/o-firmie" className="hover:text-amber-400">O firmie</Link></li>
              <li><Link href="/o-firmie/historia" className="hover:text-amber-400">Historia</Link></li>
              <li><Link href="/o-firmie/certyfikaty" className="hover:text-amber-400">Certyfikaty</Link></li>
              <li><Link href="/aktualnosci" className="hover:text-amber-400">Aktualności</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>ul. Kopalnia 1</li>
              <li>42-500 Dąbrowa Górnicza</li>
              <li className="pt-2">
                <span className="text-amber-400">tel:</span> +48 32 123 45 67
              </li>
              <li>
                <span className="text-amber-400">email:</span> biuro@dolomit.com.pl
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 PPUH DOLOMIT Kopalnia Ząbkowice S.A.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/polityka-prywatnosci" className="hover:text-amber-400">Polityka prywatności</Link>
            <Link href="/mapa-strony" className="hover:text-amber-400">Mapa strony</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}