"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/studio" || pathname.startsWith("/studio/")) return <>{children}</>;
  return <><a href="#main-content" className="skip-link">Przejdź do treści</a><Navbar /><main id="main-content" className="flex-1">{children}</main><Footer /></>;
}
