import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PawDirectory – Find Dog Grooming & Baths Near You",
  description:
    "Browse dog grooming salons, mobile groomers, self-service baths, and vet grooming near you. Trusted reviews from real dog owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 hover:text-amber-600 transition-colors">
              <span className="text-2xl">🐾</span>
              PawDirectory
            </Link>
            <Link
              href="/submit"
              className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              + Add Listing
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} PawDirectory — Find the best dog grooming near you.
        </footer>
      </body>
    </html>
  );
}
