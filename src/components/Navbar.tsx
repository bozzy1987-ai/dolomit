"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";

const companyLinks = [
  ["/o-firmie", "Poznaj firmę"], ["/o-firmie/historia", "Historia"],
  ["/o-firmie/certyfikaty", "Certyfikaty"], ["/o-firmie/galeria", "Galeria"],
  ["/o-firmie/praca", "Praca"], ["/o-firmie/dzialalnosc-spoleczna", "Działalność społeczna"],
  ["/o-firmie/inwestycje", "Inwestycje"], ["/o-firmie/akcjonariusze", "Akcjonariusze"],
];
const links = [["/kruszywa", "Kruszywa"], ["/nawozy", "Wapno nawozowe"], ["/aktualnosci", "Aktualności"], ["/dotacje", "Dotacje"]];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();
  const close = () => { setMobileOpen(false); setCompanyOpen(false); };
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMobileOpen(false); setCompanyOpen(false); } };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="site-header">
      <div className="header-top"><div className="site-width"><span>Polski surowiec. Górnicza tradycja. Solidny partner.</span><a href="tel:+48326390727">Dział sprzedaży <strong>+48 32 639 07 27 ↗</strong></a></div></div>
      <div className="site-width header-main">
        <Link href="/" aria-label="Dolomit — strona główna" onClick={close}><Brand /></Link>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="main-navigation" aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}>{mobileOpen ? "Zamknij ×" : "Menu ☰"}</button>
        <nav id="main-navigation" className={`main-navigation ${mobileOpen ? "is-open" : ""}`} aria-label="Menu główne">
          <div className="company-menu" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setCompanyOpen(false); }}>
            <button onClick={() => setCompanyOpen(!companyOpen)} aria-expanded={companyOpen} aria-controls="company-navigation">O firmie <span aria-hidden="true">⌄</span></button>
            {companyOpen && <div id="company-navigation" className="company-dropdown">{companyLinks.map(([href, label]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}</div>}
          </div>
          {links.map(([href, label]) => <Link key={href} href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
          <Link href="/kontakt" className="nav-contact" onClick={close}>Kontakt <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
