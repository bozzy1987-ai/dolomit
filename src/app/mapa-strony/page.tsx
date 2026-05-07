export default function MapaStronyPage() {
  const links = [
    { section: "Strona główna", items: [{ label: "Strona główna", href: "/" }] },
    { section: "O firmie", items: [
      { label: "O firmie", href: "/o-firmie" },
      { label: "Historia", href: "/o-firmie/historia" },
      { label: "Certyfikaty", href: "/o-firmie/certyfikaty" },
      { label: "Galeria", href: "/o-firmie/galeria" },
      { label: "Praca", href: "/o-firmie/praca" },
      { label: "Dotacja", href: "/o-firmie/dotacja" },
      { label: "Działalność społeczna", href: "/o-firmie/dzialalnosc-spoleczna" },
      { label: "Inwestycje", href: "/o-firmie/inwestycje" },
      { label: "Akcjonariusze", href: "/o-firmie/akcjonariusze" },
    ]},
    { section: "Produkty", items: [
      { label: "Kruszywa budowlane", href: "/kruszywa" },
      { label: "Nawozy", href: "/nawozy" },
      { label: "Odpady", href: "/odpady" },
    ]},
    { section: "Informacje", items: [
      { label: "Aktualności", href: "/aktualnosci" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    ]},
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-stone-900 mb-8 text-center">Mapa strony</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((section, i) => (
            <div key={i}>
              <h2 className="font-bold text-amber-600 mb-4">{section.section}</h2>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} className="text-stone-600 hover:text-amber-600 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}