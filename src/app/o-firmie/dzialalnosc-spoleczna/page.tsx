import Link from "next/link";
import Image from "next/image";

export default function DzialalnoscSpolecznaPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-red-200 mb-4">
            <Link href="/">Strona główna</Link> / 
            <Link href="/o-firmie"> O firmie</Link> / 
            <span className="text-white"> Działalność społeczna</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Działalność prospołeczna</h1>
          <p className="text-red-100 text-lg">Wspieramy lokalną społeczność</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
            <div className="mb-8">
              <Image 
                src="/stories/stypendia.jpg" 
                alt="Stypendia" 
                width={330}
                height={220}
                className="float-right ml-6 mb-4 rounded-lg"
              />
              <p className="text-stone-600 leading-relaxed mb-6 text-justify">
                Nasza kopalnia utrzymuje i pogłębia ścisłe związki z regionem: z lokalnymi samorządami, przedstawicielami środowisk biznesu, szkolnictwa, służby zdrowia, instytucji kultury, jednostek straży pożarnej i klubów sportowych. Firma sponsoruje rożne przedsięwzięcia lokalne oraz bierze udział w projektach o zasięgu ogólnokrajowym, jeśli służą one także miejscowej społeczności. Udziela wsparcia finansowego na określone cele lub rzeczowego, ofiarowując beneficjentom potrzebny im sprzęt lub wyposażenie.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6 text-justify">
                Bliskie i obopólnie satysfakcjonujące związki i partnerskie kontakty mamy z gospodarzami naszego miasta – Dąbrowy Górniczej. Wspieramy ambitne przedsięwzięcia miejscowych władz i samorządu.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mb-6 clear-both">Instytucje kulturalno-oświatowe</h2>
            
            <div className="mb-8">
              <Image 
                src="/stories/1_korty.jpg" 
                alt="Korty tenisowe" 
                width={355}
                height={237}
                className="float-left mr-6 mb-4 rounded-lg"
              />
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Przedszkola nr 10 i nr 33</strong> – wsparcie finansowe i rzeczowe;
              </p>
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Szkoła Podstawowa nr 21 w Dąbrowie Górniczej</strong>. Wyremontowaliśmy tam salę gimnastyczną, odnowiliśmy niektóre klasy, sprezentowaliśmy komputery. Świadczymy tej szkole również usługi transportowe;
              </p>
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Szkoła Podstawowa nr 35 w Dąbrowie Górniczej</strong> - pomoc w budowie kortu tenisowego;
              </p>
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Gimnazjum im. Marii Skłodowskiej-Curie w Dąbrowie Górniczej</strong> - dodatkowe wyposażenie sali informatycznej, ufundowanie sztandaru, zorganizowanie imprezy rowerowej;
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4 text-justify clear-both">
              <strong>Łazy i Gmina Łazy</strong> (Wysoka, Chruszczobród) – wsparcie rzeczowe i finansowe dla szkół, m.in. pomoc w budowie kortu tenisowego Chruszczobrodzie. W ramach Ogólnopolskiego Programu Stypendiów Pomostowych „Dyplom marzeń", administrowanego przez Fundację Edukacyjna Przedsiębiorczości, kopalnia jest fundatorem stypendiów za najlepsze wyniki egzaminów maturalnych dla absolwentów Zespołu Szkół nr 3 w Chruszczobrodzie, obecnie już studentów Uniwersytetu Jagiellońskiego, Politechniki Śląskiej oraz uniwersytetu Ekonomicznego w Katowicach;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              Zespół Szkół Ekonomicznych i Budowlanych w Dąbrowie Górniczej oraz Zespół Szkół Technicznych – umożliwienie uczniom odbywania jednodniowych praktyk w kopalni, w ramach udziału naszej firmy w programie „Światowy Dzień Przedsiębiorczości" (obecnie pod patronatem prezydenta R.P. Bronisława Komorowskiego);
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Zespół Szkół Projektowania i Stylizacji Ubioru w Sosnowcu</strong> – wsparcie materialne szkoły i pomoc w prezentacji artystycznej w formie pokazu mody;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Specjalny Ośrodek Szkolno-Wychowawczy w Gołuchowicach</strong> – wsparcie materialne dla placówki oraz uczestnictwo w III Konkursie Charytatywnym;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Dom Dziecka w Piekarach Śląskich</strong> - sponsoring „Dnia Uśmiechu Dziecka";
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Zespół Szkół Specjalnych w Czeladzi</strong> - zakup pomocy dydaktycznych i zorganizowanie wycieczki do Ustronia i Krakowa;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Miejska Biblioteka Publiczna w Dąbrowie Górniczej</strong> – wsparcie akcji „Biblioteka na 102";
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              <strong>Muzeum Miejskie „Sztygarka" w Dąbrowie Górniczej</strong> - pomoc w pracach nad udostępnieniem podziemnej trasy turystycznej w Kopalni Ćwiczebnej i organizacji I Barbórki Muzealnej.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mb-6 clear-both">Stowarzyszenia i fundacje</h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Teatr Za Jeden Uśmiech</strong> - pomoc w organizacji spektakli w Szpitalu Specjalistycznym w Dąbrowie Górniczej;
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              <strong>Fundacja Godne Życie</strong> – pomoc materialna na rzecz podopiecznych tej fundacji.
            </p>

            <div className="mb-8">
              <Image 
                src="/stories/dolomit_przemsza_2.jpg" 
                alt="Dolomit Przemsza" 
                width={367}
                height={420}
                className="float-right ml-6 mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Instytucje i kluby sportowe</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Centrum Sportu i Rekreacji w Dąbrowie Górniczej</strong> – pomoc w organizacji imprezy sportowo-rekreacyjnej i Półmaratonu Dąbrowskiego;
              </p>
              <p className="text-stone-600 leading-relaxed mb-4 text-justify">
                <strong>Kluby piłki nożnej:</strong> LKS Przemsza Siewierz, UKS Przemsza Okradzionów, KS Unia Ząbkowice, MKS Tauron Dąbrowa Górnicza, KKS Łazowianka Łazy, LKS Wysoka;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mb-6 clear-both">Instytucje użyteczności publicznej</h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              OSP Dąbrowa Górnicza, OSP Siewierz, OSP Wiesiółka, Ząbkowice i Chruszczobród – wsparcie finansowe i rzeczowe;
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              <strong>Zakład Opieki Zdrowotnej Ministerstwa Spraw Wewnętrznych i Administracji w Katowicach</strong> – pomoc w remoncie Oddziału Chirurgii, zakup specjalistycznego fotela do dializ, wsparcie finansowe wyposażenia nowego bloku operacyjnego.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              Każdego roku udzielamy pomocy finansowej w organizacji Dni Dąbrowy Górniczej, Dni Ziemi Siewierskiej oraz Dni Łaz.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mb-6">Podziękowania i wyróżnienia</h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              Udokumentowaniem działalności społecznej i charytatywnej kopalni „Ząbkowice" są liczne podziękowania, gratulacje i wyróżnienia. Przekazali nam je między innymi:
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Burmistrz Miasta i Gminy Łazy</strong> – podziękowanie za pomoc w odnowieniu placówek oświatowych;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Urząd Miejski i Prezydent Sosnowca</strong> – podziękowanie za wsparcie działań uczniów Szkół Projektowania i Stylizacji Ubioru w Sosnowcu oraz promowanie talentów;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4 text-justify">
              <strong>Prezydent Dąbrowy Górniczej</strong> – Podziękowanie za udział w projekcie „Otwarta Firma" w ramach „Światowego Tygodnia Przedsiębiorczości" oraz za wsparcie inicjatywy otwarcia Zamiejscowego Ośrodka Dydaktycznego Akademii Górniczo-Hutniczej oraz przyczynienie się do wdrażania strategii rozwoju miasta;
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              <strong>Burmistrz Miasta i Gminy Siewierz</strong> – podziękowanie za zaangażowanie się w działania gminy oraz wsparcie przedsięwzięć kulturalnych.
            </p>

            <p className="text-stone-600 leading-relaxed mb-8 text-justify">
              Całokształt prospołecznych działań ząbkowickiej kopalni <strong>docenił Sejmik Województwa Śląskiego</strong>, który w roku 2007 przyznał jej złotą honorową odznakę <strong>„Za Zasługi dla Województwa Śląskiego"</strong>. Natomiast za udział w „Światowym Tygodniu Przedsiębiorczości", w ramach projektu „Otwarta Firma" kopalnia otrzymała podziękowanie od Wicepremiera i Ministra Gospodarki Waldemara Pawlaka, przewodniczącego Komitetu Honorowego Światowego Tygodnia Przedsiębiorczości.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}