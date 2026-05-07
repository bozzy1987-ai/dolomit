"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { href: "/", label: "Strona główna" },
  { href: "/o-firmie", label: "O firmie", children: [
    { href: "/o-firmie/historia", label: "Historia" },
    { href: "/o-firmie/certyfikaty", label: "Certyfikaty" },
    { href: "/o-firmie/galeria", label: "Galeria" },
    { href: "/o-firmie/praca", label: "Praca" },
    { href: "/o-firmie/dzialalnosc-spoleczna", label: "Działalność społeczna" },
    { href: "/o-firmie/inwestycje", label: "Inwestycje" },
    { href: "/o-firmie/akcjonariusze", label: "Akcjonariusze" },
  ]},
  { href: "/kruszywa", label: "Kruszywa budowlane" },
  { href: "/nawozy", label: "Nawozy" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/dotacje", label: "Dotacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-stone-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-20 h-12">
              <Image 
                src="/logo.jpg" 
                alt="DOLOMIT" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 bg-stone-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[200px]">
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 rounded-lg hover:bg-stone-700 text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-stone-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-stone-700">
            {menuItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 hover:bg-stone-800 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-stone-400 hover:bg-stone-800 rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}