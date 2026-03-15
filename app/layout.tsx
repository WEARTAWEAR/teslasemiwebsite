import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "READZ — A modern magazine",
  description: "A modern magazine for curious minds. Read, explore, and discover.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 bg-[color:var(--paper)]/85 backdrop-blur border-b border-black/10">
          <nav className="mx-auto max-w-[1120px] px-5 h-14 flex items-center justify-between text-[11px] tracking-[0.22em] uppercase">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Scan
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                The zine
              </Link>
              <Link href="/" className="hover:opacity-70 transition-opacity">
                New stories
              </Link>
            </div>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Menu
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-[1120px] px-5 py-10 text-sm text-black/60 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <p>© {new Date().getFullYear()} READZ</p>
            <p className="text-black/45">A modern magazine for curious minds.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
