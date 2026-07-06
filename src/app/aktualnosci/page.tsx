import Link from "next/link";

const news = [
  {
    id: "116-zima-to-dobry-moment-na-wapnowanie-pol",
    title: "Zima to dobry moment na wapnowanie pól",
    date: "15 stycznia 2025",
    category: "Rolnictwo",
    excerpt: "Przeczytaj poniższy artykuł i dowiedz się dlaczego warto już dziś pomyśleć o wapnowaniu swojego pola!",
    image: "/zima_wapnowanie.jpeg"
  },
  {
    id: "115-spotkanie-barborkowe",
    title: "Spotkanie Barbórkowe 2025",
    date: "4 grudnia 2025",
    category: "Firma",
    excerpt: "W dniu 4 grudnia 2025 roku odbyło się spotkanie barbórkowe w Event Place Boho Pogoria w Dąbrowie Górniczej. W wydarzeniu uczestniczyli przedstawiciele naszej Kopalni oraz zaproszeni goście.",
    image: "/Barbrka_Dolomit_2025-0.jpg"
  },
  {
    id: "114-spotkanie-sfpp-w-naszej-siedzibie",
    title: "Wizyta Śląskiej Federacji Przedsiębiorców Polskich w Kopalni Dolomit",
    date: "29 października 2025",
    category: "Współpraca",
    excerpt: "Przedstawiciele firm zrzeszonych oraz współpracujących ze Śląską Federacją Przedsiębiorców Polskich (ŚFPP) 29 października 2025 r. na zaproszenie Prezesa Kopalni, pana Janusza Kmiecika, odwiedzili nasze przedsiębiorstwo.",
    image: null
  },
  {
    id: "112-barborka-2",
    title: "Barbórka 2024",
    date: "6 grudnia 2024",
    category: "Firma",
    excerpt: "W dniu 6 grudnia w Sali Balowej Luksor w Porębie wraz z Załogą oraz zaproszonymi Gośćmi, obchodziliśmy Dzień Świętej Barbary - patronki górników.",
    image: null
  },
  {
    id: "107-informacja-o-zakonczeniu-eksploatacji-zloza-w-kopalni-zabkowice",
    title: "Informacja o zakończeniu eksploatacji złoża w Kopalni Ząbkowice",
    date: "31 grudnia 2022",
    category: "Historia",
    excerpt: "Z dniem 31.12.2022r. eksploatacja dolomitu ze złoża Ząbkowice Będzińskie I została zakończona. Po prawie 130 letnim okresie prowadzenia wydobycia nadszedł czas zagospodarowania terenów przekształconych robotami górniczymi.",
    image: null
  },
];

export default function AktualnosciPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aktualności</h1>
          <p className="text-amber-100 text-lg">Najnowsze wiadomości z Kopalni Dolomit</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <Link 
                key={i} 
                href={`/aktualnosci/${item.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all group"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">{item.category}</span>
                    <span className="text-stone-400 text-xs">{item.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">{item.title}</h2>
                  <p className="text-stone-600 text-sm line-clamp-3">{item.excerpt}</p>
                  <div className="mt-4 text-amber-600 font-medium text-sm inline-flex items-center gap-1">
                    Czytaj więcej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}