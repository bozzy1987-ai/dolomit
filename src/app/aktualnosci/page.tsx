import Link from "next/link";

const news = [
  {
    id: "116-zima-to-dobry-moment-na-wapnowanie-pol",
    title: "Zima to dobry moment na wapnowanie pól",
    date: "15 stycznia 2025",
    category: "Rolnictwo",
    excerpt: "Przeczytaj poniższy artykuł i dowiedz się dlaczego warto już dziś pomyśleć o wapnowaniu swojego pola!",
    image: null
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
    excerpt: "Przedstawiciele firm zrzeszonych oraz współpracujących ze Śląską Federacją Przedsiębiorców Polskich (ŚFPP) 29 października 2025 r. odwiedzili nasze przedsiębiorstwo.",
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
    title: "Zakończenie eksploatacji złoża Ząbkowice",
    date: "31 grudnia 2022",
    category: "Historia",
    excerpt: "Z dniem 31.12.2022r. eksploatacja dolomitu ze złoża Ząbkowice Będzińskie I została zakończona. Po prawie 130 letnim okresie prowadzenia wydobycia nadszedł czas zagospodarowania terenów.",
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
          <div className="space-y-6">
            {news.map((item, i) => (
              <Link 
                key={i} 
                href={`/aktualnosci/${item.id}`}
                className="block bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {item.image && (
                    <div className="relative w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <span className="text-sm text-amber-600 font-medium bg-amber-50 px-3 py-1 rounded-full w-fit">{item.category}</span>
                      <span className="text-stone-500 text-sm">{item.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h2>
                    <p className="text-stone-600 leading-relaxed">{item.excerpt}</p>
                    <div className="mt-4 text-amber-600 font-medium inline-flex items-center gap-2">
                      Czytaj więcej
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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