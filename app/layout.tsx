import type { Metadata } from "next";
import { Racing_Sans_One, Russo_One } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import { Suspense } from "react";

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-racing',
});

const russoOne = Russo_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-numbers',
});

export const metadata: Metadata = {
  title: "F1 Info Hub",
  description: "Your go-to source for F1 information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${racingSansOne.variable} ${russoOne.variable} min-h-screen flex flex-col`}
      >
        <header>
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
          </Suspense>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
