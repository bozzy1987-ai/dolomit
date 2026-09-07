import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="quarry-hero" aria-labelledby="hero-title">
      <Image src="/dz1.jpg" alt="Ładowarka i instalacja przeróbcza w kopalni dolomitu" fill preload sizes="100vw" className="hero-photo" />
      <div className="hero-shade" />
      <div className="site-width hero-content">
        <p className="eyebrow hero-eyebrow"><span /> Z NATURY SOLIDNY. OD POKOLEŃ.</p>
        <h1 id="hero-title">Siła natury.<br />Solidny <em>fundament.</em></h1>
        <p className="hero-description">Kruszywa dla wielkich inwestycji.<br />Wapno dla dobrych plonów.<br />Dolomit, na którym możesz polegać.</p>
        <div className="hero-actions">
          <a className="button button-orange" href="#oferta">Odkryj naszą ofertę <span aria-hidden="true">↗</span></a>
          <Link className="hero-story" href="/o-firmie">Poznaj DOLOMIT <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="hero-bottom site-width">
        <div className="hero-caption"><span className="location-cross" aria-hidden="true">＋</span><span>POLSKI PRODUCENT<br /><strong>Zagłębie Dąbrowskie</strong></span></div>
        <a href="#oferta" className="hero-scroll">Poznaj siłę dolomitu <span aria-hidden="true">↓</span></a>
      </div>
      <span className="hero-watermark" aria-hidden="true">DOLOMIT</span>
    </section>
  );
}
