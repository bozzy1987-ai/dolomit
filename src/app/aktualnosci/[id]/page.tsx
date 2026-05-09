import Link from "next/link";

const newsData: Record<string, {
  title: string;
  date: string;
  category: string;
  content: string;
  image: string | null;
}> = {
  "116-zima-to-dobry-moment-na-wapnowanie-pol": {
    title: "Zima to dobry moment na wapnowanie pól",
    date: "15 stycznia 2025",
    category: "Rolnictwo",
    image: "/zima_wapnowanie.jpeg",
    content: `Przeczytaj poniższy artykuł i dowiedz się dlaczego warto już dziś pomyśleć o wapnowaniu swojego pola!

Choć zima kojarzy się z ograniczeniem prac polowych, coraz więcej rolników decyduje się właśnie w tym okresie na wapnowanie pól. Zamarznięta gleba umożliwia łatwy wjazd maszyn, ogranicza ugniatanie ziemi i pozwala sprawnie przygotować stanowiska pod wiosenne uprawy. W wielu gospodarstwach taki zabieg realnie ułatwia organizację pracy i pozwala wejść w nowy sezon z lepiej przygotowaną glebą.

Warto podkreślić, że wapno nawozowe zawierające magnez produkowane przez PPUH DOLOMIT Kopalnia Ząbkowice SA doskonale nadaje się do stosowania również zimą. Produkt jest łatwy w aplikacji, nie pyli podczas rozsiewania, a jego właściwości pozostają niezmienne nawet przy dłuższym przechowywaniu.

Kiedy warto sięgnąć po wapno magnezowe?

W ostatnich latach obserwujemy postępujące zakwaszenie gleb oraz spadek zawartości materii organicznej, co w praktyce bardzo często prowadzi do niedoborów magnezu. Intensywne nawożenie mineralne oraz ograniczone stosowanie nawozów naturalnych powodują, że gleby tracą zdolność do prawidłowego odżywiania roślin. W takich warunkach zastosowanie wapna nawozowego zawierającego magnez staje się rozwiązaniem szczególnie uzasadnionym.

Wapno magnezowe najlepiej sprawdza się tam, gdzie zakwaszenie gleby jest niewielkie lub umiarkowane, a celem zabiegu jest utrzymanie prawidłowego odczynu oraz uzupełnienie magnezu. W przypadku bardzo niskiego pH konieczne będzie zwiększenie dawkowania naszego nawozu. Wszelkie prowadzone badania i próby dowodzą, że dolomit jest rozwiązaniem skutecznym, bezpiecznym i długofalowym.

Ten typ wapna zalecany jest na wszystkie rodzaje gleb, ze szczególnym uwzględnieniem gleb lekkich, lekko kwaśnych oraz ubogich w wapń i magnez, gdzie jego działanie najszybciej przekłada się na poprawę struktury gleby i kondycji roślin.

Dlaczego wapń i magnez są tak ważne?

Wapń i magnez to pierwiastki kluczowe dla prawidłowego funkcjonowania gleby i rozwoju roślin. Ich niedobór:

- ogranicza pobieranie składników pokarmowych,
- obniża plonowanie,
- pogarsza jakość i zdrowotność plonów.

Współczesne rolnictwo coraz częściej wymaga stosowania nawozów, które nie tylko korygują odczyn gleby, ale również uzupełniają magnez — pierwiastek odpowiedzialny m.in. za fotosyntezę, gospodarkę energetyczną roślin i odporność na stresy środowiskowe.

Sprawdzony produkt na bazie czystego dolomitu

Wapno nawozowe zawierające magnez produkowane jest z wysokiej jakości dolomitu, poddanego procesowi mielenia, co zapewnia wysoką reaktywność i szybkie działanie w glebie.

Surowiec pochodzi ze złoża Chruszczobród II, które wyróżnia się:

- bardzo wysoką czystością geologiczną,
- brakiem zanieczyszczeń ilasto-gliniastych,
- jednorodnością struktury,
- wysoką i stabilną zawartością magnezu.

Dzięki temu rolnicy otrzymują produkt o powtarzalnych parametrach jakościowych, bezpieczny dla gleby i upraw.

Najważniejsze korzyści stosowania

Wapno nawozowe zawierające magnez:

- odkwasza glebę i poprawia jej strukturę chemiczną oraz fizyczną,
- zwiększa plony zbóż, roślin okopowych i warzyw,
- uzupełnia magnez w glebie i roślinach,
- poprawia jakość i zdrowotność plonów,
- wnosi cenne mikroelementy (m.in. bor, miedź, mangan, cynk, żelazo, molibden),
- zwiększa odporność roślin na wymarzanie,
- ogranicza degradację gleby i wiąże metale ciężkie,
- dzięki drobnemu uziarnieniu szybko przechodzi do roztworu glebowego,
- może być stosowane w różnych porach roku.

Skład i jakość potwierdzona badaniami

Produkt uzyskiwany jest z przemiału surowego dolomitu (granulacja 0–2 mm) i zawiera ponad 90% węglanów wapnia i magnezu, co odpowiada:

- CaO + MgO min. 45%
- MgO: 19–22%
- CaO: 29–34%

Wapno nawozowe zawierające magnez uzyskało pozytywne opinie m.in. w:

- Instytucie Uprawy, Nawożenia i Gleboznawstwa w Puławach,
- Instytucie Warzywnictwa w Skierniewicach,
- Instytucie Sadownictwa i Kwiaciarstwa w Skierniewicach.`
  },
  "115-spotkanie-barborkowe": {
    title: "Spotkanie Barbórkowe 2025",
    date: "4 grudnia 2025",
    category: "Firma",
    image: "/Barbrka_Dolomit_2025-0.jpg",
    content: `W dniu 4 grudnia 2025 roku odbyło się tradycyjne spotkanie barbórkowe w Event Place Boho Pogoria w Dąbrowie Górniczej. W wydarzeniu uczestniczyli przedstawiciele naszej Kopalni oraz zaproszeni goście.

Było to wyjątkowe spotkanie, podczas którego podsumowano miniony rok i nagrodzono najbardziej wyróżniających się pracowników. Oprawę muzyczną zapewniła orkiestra górnicza.

Dziękujemy wszystkim uczestnikom za wspólne świętowanie!`
  },
  "114-spotkanie-sfpp-w-naszej-siedzibie": {
    title: "Wizyta Śląskiej Federacji Przedsiębiorców Polskich w Kopalni Dolomit",
    date: "29 października 2025",
    category: "Współpraca",
    image: null,
    content: `Przedstawiciele firm zrzeszonych oraz współpracujących ze Śląską Federacją Przedsiębiorców Polskich (ŚFPP) 29 października 2025 r. odwiedzili nasze przedsiębiorstwo.

Wizyta miała na celu zapoznanie się z nowoczesnymi technologiami wydobycia i przeróbki dolomitu stosowanymi w naszej kopalni. Goście mieli okazję zobaczyć najnowocześniejszy sprzęt górniczy, w tym wiertnicę HAUSHERR oraz systemy przesiewcze.

Było to inspirujące spotkanie, które zaowocowało wieloma pomysłami na przyszłą współpracę.`
  },
  "112-barborka-2": {
    title: "Barbórka 2024",
    date: "6 grudnia 2024",
    category: "Firma",
    image: null,
    content: `W dniu 6 grudnia w Sali Balowej Luksor w Porębie wraz z Załogą oraz zaproszonymi Gośćmi, obchodziliśmy Dzień Świętej Barbary - patronki górników.

Tradycyjne barbórkowe spotkanie było okazją do podziękowania wszystkim pracownikom za ciężką pracę i zaangażowanie przez cały rok. Wręczono odznaczenia i nagrody dla najlepszych górników.

Dziękujemy wszystkim za obecność i wspólną zabawę do późnych godzin nocnych!`
  },
  "107-informacja-o-zakonczeniu-eksploatacji-zloza-w-kopalni-zabkowice": {
    title: "Zakończenie eksploatacji złoża Ząbkowice",
    date: "31 grudnia 2022",
    category: "Historia",
    image: null,
    content: `Z dniem 31.12.2022r. eksploatacja dolomitu ze złoża Ząbkowice Będzińskie I została zakończona. Po prawie 130 letnim okresie prowadzenia wydobycia nadszedł czas zagospodarowania terenów pogórniczych.

Historia tego złoża sięga początków przemysłu ciężkiego na Górnym Śląsku. Przez dziesięciolecia nasza kopalnia dostarczała wysokiej jakości dolomit dla budownictwa, przemysłu i rolnictwa.

Obecnie prowadzimy prace nad rekultywacją terenów i przygotowujemy nowe inwestycje, które pozwolą na dalszy rozwój przedsiębiorstwa.`
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = newsData[id];

  if (!article) {
    return (
      <div className="bg-stone-50 min-h-screen">
        <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-amber-200 mb-4">
              <Link href="/">Strona główna</Link> / <Link href="/aktualnosci">Aktualności</Link> / <span className="text-white">Artykuł</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Artykuł nie został znaleziony</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-stone-600">Przepraszamy, ten artykuł nie istnieje lub został przeniesiony.</p>
            <Link href="/aktualnosci" className="text-amber-600 font-medium hover:text-amber-700 mt-4 inline-block">
              ← Wróć do aktualności
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-amber-200 mb-4">
            <Link href="/">Strona główna</Link> / <Link href="/aktualnosci">Aktualności</Link> / <span className="text-white">{article.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-amber-200">
            <span className="bg-amber-500/30 px-3 py-1 rounded-full text-sm">{article.category}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-200">
            {article.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="prose prose-stone max-w-none">
              {article.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/aktualnosci" className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700">
              ← Wróć do aktualności
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}