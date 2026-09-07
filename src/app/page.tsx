import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <section className="proof-strip" aria-label="Co nas wyróżnia">
        <div className="site-width proof-grid">
          <div><strong>130<span> lat</span></strong><p>tradycji górniczej w regionie</p></div>
          <div><strong>Własne złoże<span> ↗</span></strong><p>dolomit z Chruszczobrodu</p></div>
          <div><strong>Sprawdzona jakość</strong><p>produkty z dokumentacją jakościową</p></div>
          <Link href="/o-firmie/certyfikaty" className="proof-link">Poznaj nasze standardy <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="offer-section site-width" id="oferta">
        <div className="section-heading">
          <div><p className="eyebrow">01 / NASZA OFERTA</p><h2>Jeden surowiec.<br /><span>Wiele możliwości.</span></h2></div>
          <p>Od fundamentów dróg i budynków po żyzną glebę.<br className="desktop-break" /> Odkryj naturalny potencjał dolomitu.</p>
        </div>
        <div className="product-grid">
          <Link href="/kruszywa" className="product-card">
            <Image src="/1edi9.jpg" alt="Załadunek kruszywa dolomitowego na samochód ciężarowy" fill sizes="(max-width: 700px) 100vw, 50vw" />
            <div className="product-shade" /><span className="product-category">DLA BUDOWNICTWA</span>
            <div className="product-copy"><span className="product-number">01</span><h3>Kruszywa<br />budowlane</h3><p>Solidna podstawa Twojej inwestycji.</p><span className="product-cta">Zobacz kruszywa <span aria-hidden="true">↗</span></span></div>
          </Link>
          <Link href="/nawozy" className="product-card">
            <Image src="/Hala_magazynowa_1.jpg" alt="Wapno nawozowe przechowywane w hali magazynowej" fill sizes="(max-width: 700px) 100vw, 50vw" />
            <div className="product-shade" /><span className="product-category">DLA ROLNICTWA</span>
            <div className="product-copy"><span className="product-number">02</span><h3>Wapno<br />nawozowe</h3><p>Naturalne wsparcie gleby. Potencjał plonów.</p><span className="product-cta">Poznaj wapno z magnezem <span aria-hidden="true">↗</span></span></div>
          </Link>
        </div>
        <div className="offer-help"><p>Dobry materiał to początek. Pomożemy Ci wybrać właściwy.</p><Link href="/kontakt">Porozmawiajmy o Twoich potrzebach <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="heritage-section">
        <div className="site-width heritage-grid">
          <div className="heritage-image"><Image src="/dz6.jpg" alt="Rozległe wyrobisko kopalni dolomitu" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="heritage-badge"><strong>130</strong><span>LAT GÓRNICZEJ<br />TRADYCJI</span></div></div>
          <div className="heritage-copy"><p className="eyebrow">02 / NASZE KORZENIE</p><h2>Z tej ziemi.<br />Z myślą o <span>przyszłości.</span></h2><p>Nasza historia zaczęła się w Zagłębiu Dąbrowskim. Przez pokolenia poznawaliśmy dolomit, rozwijaliśmy produkcję i budowaliśmy doświadczenie.</p><p>Dziś kontynuujemy tę tradycję w kopalni Chruszczobród, dostarczając surowiec dla budownictwa i rolnictwa.</p><Link href="/o-firmie/historia" className="text-link">Odkryj naszą historię <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className="contact-band"><div className="site-width contact-band-inner"><div><p className="eyebrow">ZACZNIJMY OD ROZMOWY</p><h2>Solidna współpraca<br />zaczyna się tutaj.</h2></div><div><Link href="/kontakt" className="button button-dark">Skontaktuj się z nami <span aria-hidden="true">↗</span></Link><a href="tel:+48326390727" className="contact-phone">Dział sprzedaży: +48 32 639 07 27</a></div></div></section>
    </div>
  );
}
