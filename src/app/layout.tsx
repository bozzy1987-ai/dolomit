import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "PPUH DOLOMIT - Kopalnia Ząbkowice S.A.",
  description: "Wapno nawozowe, kruszywa budowlane i produkty dolomitowe. Ponad 130 lat tradycji górniczej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-stone-50">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
