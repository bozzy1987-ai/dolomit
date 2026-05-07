"use client";

import Image from "next/image";
import Link from "next/link";

const downloads = [
  { href: "/Firma.doc", label: "Informacja o firmie", icon: "/pobieranie-word.jpg" },
  { href: "/Firmatrans.doc", label: "Informacja o firmie (transakcja)", icon: "/pobieranie-word.jpg" },
  { href: "/rolnik.doc", label: "Dla rolnika", icon: "/pobieranie-word.jpg" },
  { href: "/rolniktrans.doc", label: "Dla rolnika (transakcja)", icon: "/pobieranie-word.jpg" },
];

export default function NawozyPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/">Strona główna</Link> / 
            <span className="text-white"> Nawozy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wapno nawozowe zawierające magnez</h1>
          <p className="text-green-100 text-lg">Wysokiej jakości nawóz wapniowo-magnezowy z dolomitu</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Prbka_-_kopia.jpg"
                  alt="Wapno nawozowe - proces mielenia"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-stone-500 text-sm mt-2 text-center italic">
                Wapno przechodzi proces mielenia, dzięki czemu posiada wysoką reaktywność.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Skład chemiczny</h2>
              <p className="text-stone-600 mb-4">
                Wapno nawozowe jest uzyskiwane z przemiału surowego dolomitu. Granulacja wapna wynosi 0-2 mm, 
                a w jego składzie jest ponad 90% węglanów wapna i magnezu, co w przeliczeniu na zawartość tlenków wynosi:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
                <p className="text-xl font-bold text-green-800">
                  CaO + MgO minimum 45%
                </p>
                <p className="text-stone-600 mt-2">
                  w tym MgO 19-22% | CaO 29-34%
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-stone-700 font-medium">
                  <strong>Wapno nawozowe zawierające magnez jest łatwe w stosowaniu, nie pyli przy rozsiewaniu!!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Wapń i magnez dla zdrowej gleby</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              <strong>Wapń i magnez</strong> są to pierwiastki, których brak w glebie uniemożliwia wydajną produkcję 
              tak potrzebnej dla ludzi zdrowej żywności.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Aktualnie na świecie preferuje się nawozy zawierające wapń i magnez z uwagi na to, że stosowane 
              często w nadmiarze skoncentrowane i fizjologicznie kwaśne nawozy sztuczne, przy mało regularnym 
              stosowaniu obornika spowodowały duże zakwaszenie gleb, a w konsekwencji ich degradację.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Produktem spełniającym te warunki jest <strong>Wapno nawozowe zawierające magnez</strong> 
              typ: węglanowy produkowane z dolomitu w PPUH DOLOMIT Kopalnia "Ząbkowice" Spółka Akcyjna.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Korzyści stosowania wapna</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Odkwasza glebę, poprawiając równocześnie jej chemiczną i fizyczną strukturę" },
              { text: "Zwiększa plony zbóż, roślin okopowych, warzyw" },
              { text: "Zwiększa zawartość magnezu (Mg) w glebie i roślinach" },
              { text: "Poprawia cechy jakościowe roślin, oddziaływując na zdrowotność produktów roślinnych" },
              { text: "Wnosi do gleby mikroelementy (bor, miedź, mangan, cynk, żelazo, molibden)" },
              { text: "Zwiększa odporność roślin na wymarzanie w okresie zimy" },
              { text: "Przeciwstawia się degradacji gleby wywołanej skażeniem metalami ciężkimi" },
              { text: "Łatwo przechodzi do roztworu glebowego i jest szybko przyswajalny przez rośliny" },
              { text: "Można stosować w różnych porach roku" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-stone-100 flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                <span className="text-stone-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Stosowanie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-4 text-center">Terminy stosowania</h3>
              <ul className="space-y-3 text-stone-600">
                <li><strong>Termin optymalny:</strong> lato/jesień przed orką</li>
                <li><strong>Termin dopuszczalny:</strong> zimą na zmarzniętą glebę, lub wiosną pod uprawy przedsiewne</li>
                <li>Na użytkach zielonych można wysiewać jesienią po skoszeniu trawy lub wczesną wiosną</li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-4 text-center">Ilości zalecane</h3>
              <ul className="space-y-3 text-stone-600">
                <li><strong>Gleby lekkie:</strong> 2-3 tony/ha</li>
                <li><strong>Gleby średnie:</strong> 3-4 tony/ha</li>
                <li><strong>Gleby ciężkie:</strong> 4-5 ton/ha</li>
              </ul>
              <p className="text-stone-500 text-sm mt-4">Dla utrzymania właściwego odczynu gleby stosowanie należy powtarzać w okresach 2-5 letnich.</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-4 text-center">Sposób użycia</h3>
              <ul className="space-y-3 text-stone-600">
                <li>Stosować na wszystkich glebach i pod wszystkie uprawy</li>
                <li>W szczególności na glebach lekkich i kwaśnych</li>
                <li>Wymieszać z glebą na głębokość co najmniej 20 cm</li>
                <li>Sposób wysiewania - rozrzutnikiem do nawozów</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Badania i opinie</h2>
          <p className="text-stone-600 text-center mb-8">
            <strong>Wapno nawozowe zawierające magnez</strong> zostało przebadane i uzyskało pozytywne opinie w:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Instytucie Upraw, Nawożenia i Gleboznawstwa w Puławach",
              "Instytucie Warzywnictwa w Skierniewicach",
              "Instytucie Sadownictwa i Kwiaciarstwa w Skierniewicach",
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-green-200 text-center">
                <p className="text-stone-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/Hala_magazynowa_1.jpg"
                    alt="Hala magazynowa"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-stone-500 text-sm mt-2 text-center italic">
                  Wapno w postaci sypkiej, suche, luzem spod hali magazynowej.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Zapraszamy do współpracy!</h3>
                  <p className="text-stone-600 mb-2">
                    Każda tona wapna jest atestowana.
                  </p>
                </div>
                <p className="text-stone-600">
                  <strong>Krystian Sołtysik</strong><br />
                  Specjalista ds. Marketingu<br />
                  tel: +48 609 060 093
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Do pobrania</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((doc, i) => (
              <a
                key={i}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-50 rounded-xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all text-center group"
              >
                <Image
                  src="/pobieranie-word.jpg"
                  alt="Pobierz"
                  width={48}
                  height={48}
                  className="mx-auto mb-4 opacity-60 group-hover:opacity-100"
                />
                <p className="text-stone-700 font-medium">{doc.label}</p>
                <p className="text-stone-400 text-sm mt-1">DOC</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 text-center mb-8">
            <p className="text-stone-800 text-lg font-medium">
              <strong>Projekt współfinansowany przez Unię Europejską</strong>
            </p>
            <p className="text-stone-600 text-sm mt-1">
              z Europejskiego Funduszu Rozwoju Regionalnego
            </p>
          </div>

          <div className="flex justify-center">
            <Image 
              src="/eu-banner.jpg" 
              alt="Unia Europejska" 
              width={800}
              height={75}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-stone-100 transition-all">
            Zamów nawóz
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}