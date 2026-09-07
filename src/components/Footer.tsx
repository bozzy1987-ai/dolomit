import Link from "next/link";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width">
        <div className="footer-grid">
          <div><Link href="/" aria-label="Dolomit — strona główna"><Brand /></Link><p>PPUH DOLOMIT<br />Kopalnia Ząbkowice S.A.<br />Z natury solidny. Od pokoleń.</p></div>
          <div><h3>Nasza oferta</h3><Link href="/kruszywa">Kruszywa budowlane</Link><Link href="/nawozy">Wapno nawozowe</Link><Link href="/odpady">Gospodarka odpadami</Link><Link href="/o-firmie/certyfikaty">Certyfikaty</Link></div>
          <div><h3>Poznaj DOLOMIT</h3><Link href="/o-firmie">O firmie</Link><Link href="/aktualnosci">Aktualności</Link><Link href="/o-firmie/praca">Kariera</Link><Link href="/dotacje">Dotacje</Link></div>
          <div><h3>Jesteśmy do dyspozycji</h3><p>ul. Dolomitowa 6<br />42-520 Dąbrowa Górnicza</p><a href="tel:+48326390727">+48 32 639 07 27 ↗</a><a href="mailto:handel@dolomit.com.pl">handel@dolomit.com.pl ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} PPUH DOLOMIT Kopalnia Ząbkowice S.A.</span><div><Link href="/polityka-prywatnosci">Polityka prywatności</Link><Link href="/mapa-strony">Mapa strony</Link></div></div>
      </div>
    </footer>
  );
}
