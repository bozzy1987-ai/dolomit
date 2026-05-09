import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
            Nasze produkty
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-stone-800">Kruszywa budowlane</h3>
              <p className="text-stone-600 mb-6">
                Wysokiej jakości kruszywa dla budownictwa, infrastruktury i robót ziemnych. 
                Produkowane z własnego złoża dolomitu.
              </p>
              <a href="/kruszywa" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
                Zobacz ofertę →
              </a>
            </div>
            <div className="bg-stone-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-stone-800">Wapno nawozowe</h3>
              <p className="text-stone-600 mb-6">
                Wapno nawozowe z magnezem - certyfikowane przez IUNG Puławy. 
                Idealne dla rolnictwa i ogrodnictwa.
              </p>
              <a href="/nawozy" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
                Zobacz produkty →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-stone-800">O firmie</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Ponad 130 lat historii. Własne złoże dolomitu w Ząbkowicach Śląskich. 
            Polski producent z certyfikowaną jakością.
          </p>
          <a href="/o-firmie" className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-semibold px-8 py-4 rounded-xl transition-all">
            Poznaj nas →
          </a>
        </div>
      </section>
    </>
  );
}