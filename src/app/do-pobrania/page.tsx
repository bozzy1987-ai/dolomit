import Link from "next/link";
import type { Metadata } from "next";
import { downloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Druki zamówień i dokumenty do pobrania — DOLOMIT",
  description: "Pobierz zamówienie na kruszywo, zlecenie utylizacji odpadów oraz deklaracje właściwości użytkowych produktów DOLOMIT.",
};

export default function DownloadsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-[#263128] text-white py-16 md:py-20">
        <div className="site-width">
          <nav className="text-sm text-stone-300 mb-7" aria-label="Ścieżka strony"><Link href="/">Strona główna</Link> / Do pobrania</nav>
          <p className="eyebrow text-orange-300">DLA KLIENTA</p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">Druki zamówień<br />i dokumenty.</h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">Wybierz potrzebny formularz lub deklarację i pobierz plik. Dokumenty DOC możesz uzupełnić w edytorze tekstu, a PDF otworzyć i wydrukować.</p>
        </div>
      </section>
      <div className="site-width py-14 md:py-20">
        {["Formularze zamówień", "Deklaracje właściwości użytkowych"].map((category, index) => (
          <section key={category} className="mb-14" aria-labelledby={`documents-${index}`}>
            <p className="eyebrow text-stone-500">0{index + 1} / DOKUMENTY</p>
            <h2 id={`documents-${index}`} className="text-2xl md:text-3xl font-medium tracking-tight mb-7">{category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {downloads.filter((item) => item.category === category).map((item) => (
                <a key={item.file} href={`/dokumenty/${item.file}`} download className="group flex items-center gap-4 border border-stone-200 bg-white p-5 md:p-6 hover:border-orange-500 transition-colors">
                  <span className="text-xs font-bold border border-stone-300 text-stone-600 px-2 py-3 shrink-0">{item.file.endsWith(".pdf") ? "PDF" : "DOC"}</span>
                  <span className="flex-1 min-w-0"><span className="block text-stone-900 font-medium">{item.title}</span><span className="block text-xs text-stone-500 mt-2">{item.sizeKB} KB · Pobierz plik</span></span>
                  <span aria-hidden="true" className="text-2xl text-orange-700 group-hover:translate-y-1 transition-transform">↓</span>
                </a>
              ))}
            </div>
          </section>
        ))}
        <div className="bg-stone-200/60 p-7 md:p-9 flex flex-col md:flex-row justify-between gap-6 md:items-center">
          <div><h2 className="text-xl font-semibold mb-3">Potrzebujesz rozszerzyć zamówienie?</h2><p className="text-stone-600 text-sm max-w-xl leading-relaxed">Skontaktuj się z nami, aby otrzymać odpowiedni formularz rozszerzenia zamówienia na kruszywo lub zlecenia utylizacji odpadów.</p></div>
          <Link href="/kontakt" className="button button-dark shrink-0 self-start md:self-center">Skontaktuj się z nami <span aria-hidden="true">↗</span></Link>
        </div>
        <p className="mt-7 text-sm text-stone-600">Szukasz materiałów dotyczących wapna nawozowego? <Link href="/nawozy" className="underline underline-offset-4 text-stone-900">Przejdź do oferty nawozów →</Link></p>
      </div>
    </div>
  );
}
