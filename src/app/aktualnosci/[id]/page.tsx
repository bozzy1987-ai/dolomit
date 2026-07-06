import Link from "next/link";

const newsData: Record<string, {
  title: string;
  date: string;
  category: string;
  content: string;
  images: string[];
}> = {
  "116-zima-to-dobry-moment-na-wapnowanie-pol": {
    title: "Zima to dobry moment na wapnowanie pól",
    date: "15 stycznia 2025",
    category: "Rolnictwo",
    images: ["/zima_wapnowanie.jpeg"],
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
    images: [
      "/Barbrka_Dolomit_2025-0.jpg",
      "/Barbrka_Dolomit_2025-41.jpg",
      "/Barbrka_Dolomit_2025-44.jpg",
      "/Barbrka_Dolomit_2025-24.jpg",
      "/Barbrka_Dolomit_2025-63.jpg",
      "/Barbrka_Dolomit_2025-65.jpg"
    ],
    content: `W dniu 4 grudnia 2025 roku odbyło się spotkanie barbórkowe w Event Place Boho Pogoria w Dąbrowie Górniczej. W wydarzeniu uczestniczyli przedstawiciele naszej Kopalni oraz zaproszeni goście - politycy, przedstawiciele samorządów, duchowni, środowisko naukowe i edukacyjne, przedstawiciele urzędu górniczego, branży medycznej oraz przedsiębiorcy.

Zapraszamy do obejrzenia galerii wykonanej przez zespół z wydawnictwa Europerspektywy z tego wydarzenia.

Zapraszamy również na stronę Europerspektywy, gdzie znajduje się fotogaleria z imprezy autorstwa Pana Roberta Pilszaka: https://europerspektywy.eu/barborka-2025-dolomit-swieto-i-plany-rozwoju/`
  },
  "114-spotkanie-sfpp-w-naszej-siedzibie": {
    title: "Wizyta Śląskiej Federacji Przedsiębiorców Polskich w Kopalni Dolomit",
    date: "29 października 2025",
    category: "Współpraca",
    images: ["/1.jpg", "/4.jpeg", "/7.jpeg", "/3.jpeg", "/5.jpeg"],
    content: `Przedstawiciele firm zrzeszonych oraz współpracujących ze Śląską Federacją Przedsiębiorców Polskich (ŚFPP) 29 października 2025 r. na zaproszenie Prezesa Kopalni, pana Janusza Kmiecika, odwiedzili nasze przedsiębiorstwo.

Uczestnicy spotkania poznali historię powstania Kopalni, transformację technologiczną, nasze produkty oraz główne gałęzie przemysłu, z którymi współpracujemy. Prezes Kopalni, pan Janusz Kmiecik, opowiedział również o współpracy z lokalnym otoczeniem.

Tradycje naszej firmy sięgają 120 lat, ale jesteśmy jedną z najnowocześniejszych kopalni odkrywkowych w Polsce. Współpracujemy z odbiorcami z różnych sektorów gospodarki, jak budownictwo drogowe, hutnictwo i rolnictwo. — Janusz Kmiecik, prezes PPUH Dolomit

To już kolejne spotkanie w firmie członkowskiej ŚFPP. Takie wydarzenia są bardzo ważne — na miejscu możemy zobaczyć, jak poszczególne przedsiębiorstwa funkcjonują, jakie odnoszą sukcesy i z jakimi wyzwaniami się mierzą. To także doskonała okazja do wymiany doświadczeń i wzajemnego wsparcia firm zrzeszonych w ŚFPP. Naszym wspólnym zadaniem jest dbanie o konkurencyjność przedsiębiorstw z regionu woj. śląskiego i wspieranie ich w działalności na rynku polskim i międzynarodowym. — Michał Gawroński, przewodniczący ŚFPP`
  },
  "112-barborka-2": {
    title: "Barbórka 2024",
    date: "6 grudnia 2024",
    category: "Firma",
    images: ["/barborka24/9.jpg", "/8.jpg", "/barborka24/7.jpg", "/barborka24/6.jpg", "/barborka24/5.jpg", "/barborka24/4.jpg", "/barborka24/3b.jpg", "/barborka24/2b.jpg", "/barborka24/12.jpg", "/barborka24/11.jpg", "/barborka24/10.jpg"],
    content: `W dniu 6 grudnia w Sali Balowej Luksor w Porębie wraz z Załogą oraz zaproszonymi Gośćmi, obchodziliśmy Dzień Świętej Barbary - patronki górników.

Z tej okazji nasi zasłużeni Górnicy uhonorowani zostali państwowymi i wojewódzkimi odznaczeniami, wyróżnieniami, nagrodami i podziękowaniami za zaangażowanie oraz wkład w rozwój Naszego Przedsiębiorstwa.

Zarząd Kopalni na swoje ręce przyjął wiele życzeń oraz podziękowań. Naszą uroczystość uświetnił swoim wspaniałym występem zespół Capri New Beat z Krakowa.

Poniżej przedstawiamy piękne zdjęcia dzięki uprzejmości Europerspektywy.`
  },
  "107-informacja-o-zakonczeniu-eksploatacji-zloza-w-kopalni-zabkowice": {
    title: "Informacja o zakończeniu eksploatacji złoża w Kopalni Ząbkowice",
    date: "31 grudnia 2022",
    category: "Historia",
    images: ["/historia1.jpg"],
    content: `Z dniem 31.12.2022r. eksploatacja dolomitu ze złoża "Ząbkowice Będzińskie I" została zakończona. Po prawie 130 letnim okresie prowadzenia wydobycia nadszedł czas zagospodarowania terenów przekształconych robotami górniczymi. Zakończył się pewien etap w gospodarczej i kulturalnej historii Dąbrowy Górniczej, z którym związane było życie miejscowej ludności oraz kontynuowane były tradycje górnicze Zagłębia Dąbrowskiego. Działalność górniczo-hutnicza była prowadzona na terenie Ząbkowic od średniowiecza i związana była z wydobyciem i przeróbką rud cynku, żelaza, wapienia i przez wiele ostatnich lat dolomitu.

Jeszcze w czasie prowadzenia wydobycia na wniosek naszego Przedsiębiorstwa, dla pogórniczych terenów po odkrywkowej eksploatacji dolomitu został opracowany "Miejscowy plan zagospodarowania przestrzennego miasta Dąbrowy Górniczej dla terenu górniczego Kopalni Dolomitu "Ząbkowice"", który następnie został przyjęty przez Radę Miejską Dąbrowy Górniczej uchwałą nr VIII/134/11 z dnia 22 czerwca 2011r. Ustalenia miejscowego planu określały zarówno przeznaczenie tymczasowe terenów objętych planem jak i ich przeznaczenie docelowe.

Na podstawie zapisów planu został opracowany "Projekt rekultywacji wyrobiska po odkrywkowym wydobywaniu kopalin ze złoża dolomitu "Ząbkowice Będzińskie I" zlokalizowanego w Dąbrowie Górniczej" (wraz z późniejszym aneksem). Projekt rekultywacji został pozytywnie zaopiniowany przez Dyrektora Okręgowego Urzędu Górniczego w Katowicach i zatwierdzony przez Prezydenta Miasta Dąbrowy Górniczej decyzją nr WGN-II.6125.2.1.2018.DG.

Technicznie zaprojektowano podzielenie terenów pogórniczych na trzy rejony: zachodni, środkowy i wschodni. Dla każdego z nich zostały określone kierunki zagospodarowania i sposoby przeprowadzenia rekultywacji.

Rejon wschodni został przeznaczony pod zalesienie. Oprócz wylesionych przed eksploatacją terenów, przeznaczono pod zalesienie wcześniejsze nieużytki, powiększając tym samym tereny leśne o około 5 hektarów. W roku 2021 mimo trwającej nieopodal eksploatacji kolejne 5 hektarów zostało zrekultywowane, przekazane Nadleśnictwu Siewierz i zalesione. W 2023 roku przedsiębiorstwo planuje zrekultywować i zalesić 26 hektarów gruntów.

Rejon środkowy został w miejscowym planie przeznaczony pod terenu sportu i rekreacji. Ustalenia projektu rekultywacji wyrobiska przewidują pozostawienie powstałej niecki po wydobyciu dolomitu i późniejsze zagospodarowanie jej w kierunku rekreacyjnym. Projektuje się na tym terenie wykonanie prac związanych z makroniwelacją terenu, wykonanie odwodnienia, wykonanie zabezpieczenia dolnych krawędzi skarp ostatecznych. Po zakończeniu rekultywacji możliwe będzie na terenie około 25 hektarów wykonanie infrastruktury sportowej i rekreacyjnej służącej społeczeństwu Dąbrowy Górniczej.

Rejon zachodni został przeznaczony pod tereny zieleni urządzonej. W tym celu konieczne jest przywrócenie pierwotnej rzeźby terenu. Jak ustalono w projekcie rekultywacji do zasypania wyrobiska do poziomu terenów przyległych będą wykorzystane: ziemia z kamieniami, beton oraz gruz betonowy z rozbiórek i remontów, gruz ceglany, odpady innych materiałów ceramicznych i elementów wyposażenia (wykonane z ceramiki). Są to materiały obojętne dla środowiska, pozwalające odtworzyć warstwę biologicznie czynną. Wszystkie stosowane materiały są zgodne z Rozporządzeniem Ministra Środowiska z dnia 11 maja 2015r. w sprawie odzysku odpadów poza instalacjami. Ponadto przedsiębiorstwo uzyskało decyzję Marszałka Województwa Śląskiego nr 3609/OS/2018 zezwalające na przetwarzanie w/w odpadów. Wszelkie dostawy są ewidencjonowane w systemie Baza Danych o Odpadach przez wytwarzającego, transportującego i przyjmującego. Ponadto w przedsiębiorstwie został wdrożony system monitoringu i kontroli dowożonego materiału przeznaczonego do zasypywania wyrobiska. Z organizacją przyjmowania odpadów, zatwierdzoną przez Prezesa Przedsiębiorstwa, zostały zapoznane wszystkie osoby zatrudnione przy ich przyjmowaniu.

W rejonie zachodnim w 2022r. została zakończona rekultywacja techniczna gruntów na obszarze 7 hektarów. W bieżącym roku zostanie zakupione ponad 6 000 sztuk sadzonek, które będą wykorzystane do wykonania rekultywacji biologicznej. W kolejnych latach będą prowadzone prace związane z rekultywacją techniczną oraz biologiczną pozostałych terenów, co pozwoli utworzyć kompleks zieleni urządzonej o powierzchni około 10 hektarów.

W projekcie rekultywacji zostały zestawione materiały niezbędne do przeprowadzenia rekultywacji.

Rekultywacja techniczna:
- 2 500 000 ton materiału pozyskanego z rynku,
- 1 600 000 ton materiału własnego,
- 15 000 ton kruszyw,
- Inne materiały: piasek, geowłóknina, koryta odwadniające betonowe, płyty betonowe, rury żelbetowe, chudy beton, i inne

Rekultywacja biologiczna:
- 33 000 szt. sadzonek,
- 2 135 kg nasion traw,
- 500 kg nawozów

Cały proces rekultywacji wyrobiska został przewidziany na 5 lat, więc jego zakończenie jest przewidywane najpóźniej do 31.12.2027 roku.`
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
            <div className="prose prose-stone max-w-none mb-8">
              {article.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
            {article.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.images.map((img, idx) => (
                  <div key={idx} className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <img src={img} alt={`${article.title} - zdjęcie ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
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