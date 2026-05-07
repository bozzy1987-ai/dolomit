import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="pl">
      <body className="min-h-screen flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}