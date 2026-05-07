import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";

const products = [
  {
    name: "Wapno nawozowe",
    desc: "Wysokiej jakości wapno magnezowe do odkwaszania gleb",
    icon: "🌱",
    href: "/nawozy"
  },
  {
    name: "Kruszywa budowlane",
    desc: "Dolomit i kruszywa dla budownictwa i infrastruktury",
    icon: "🏗️",
    href: "/kruszywa"
  },
  {
    name: "Nawóz magnezowy",
    desc: "Kompleksowe nawozy dla rolnictwa i sadownictwa",
    icon: "🌾",
    href: "/nawozy"
  },
];

const stats = [
  { value: "130+", label: "Lat tradycji" },
  { value: "100%", label: "Polski producent" },
  { value: "90%+", label: "Czystość węglanów" },
  { value: "24/7", label: "Wsparcie techniczne" },
];

const news = [
  {
    title: "Zima to dobry moment na wapnowanie pól",
    date: "15 stycznia 2025",
    excerpt: "Przeczytaj dlaczego warto już dziś pomyśleć o wapnowaniu swojego pola.",
    href: "/aktualnosci/zima-wapnowanie"
  },
  {
    title: "Spotkanie Barbórkowe 2025",
    date: "4 grudnia 2025",
    excerpt: "Odbyło się tradycyjne spotkanie barbórkowe w Dąbrowie Górniczej.",
    href: "/aktualnosci/barborka-2025"
  },
  {
    title: "Wizyta Śląskiej Federacji Przedsiębiorców",
    date: "29 października 2025",
    excerpt: "Przedstawiciele ŚFPP odwiedzili naszą kopalnię.",
    href: "/aktualnosci/sfpp-wizyta"
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-stone-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nasze produkty</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Wysokiej jakości produkty dolomitowe dla rolnictwa, budownictwa i przemysłu.
              Badania IUNG Puławy potwierdzają skuteczność.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <Link 
                key={i}
                href={product.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-stone-100"
              >
                <div className="text-5xl mb-6">{product.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-600 mb-4">{product.desc}</p>
                <div className="text-amber-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Dowiedz się więcej
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nasza Kopalnia</h2>
            <p className="text-stone-600">Zobacz jak wygląda wydobycie i przeróbka dolomitu</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["kopalnia1.jpg", "kopalnia2.jpg", "kopalnia3.jpg", "kopalnia4.jpg"].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image 
                  src={`/${img}`} 
                  alt="Kopalnia" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/o-firmie/galeria"
              className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-2"
            >
              Zobacz całą galerię
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">Aktualności</h2>
              <p className="text-stone-600">Najnowsze wiadomości z Kopalni Dolomit</p>
            </div>
            <Link 
              href="/aktualnosci"
              className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-2"
            >
              Wszystkie aktualności
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-stone-200 flex items-center justify-center">
                  <span className="text-6xl opacity-50">📰</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-stone-500 mb-2">{item.date}</div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Potrzebujesz doradztwa?</h2>
          <p className="text-amber-100 max-w-2xl mx-auto mb-8">
            Nasi eksperci pomogą dobrać odpowiedni produkt do Twoich potrzeb. 
            Skontaktuj się z nami już dziś.
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold px-8 py-4 rounded-xl hover:bg-stone-100 transition-all shadow-lg"
          >
            Skontaktuj się
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}