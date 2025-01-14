import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster"
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import ScrollToTopButton from "../components/ScrollToTopButton";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "xTrafikSkola Göteborg",
  description: "【 Trafikskola i Göteborg 】 med delbetalning. ⚡Prisvärda paket ⚡ för alla behov ➦ boka dina körlektioner redan idag och ta körkort enkelt! ☎ 0768503663",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <ThemeSwitcher />
        </div>
        <main className="pt-[80px]">{children}</main>
        <Toaster />
        <Footer/>
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
