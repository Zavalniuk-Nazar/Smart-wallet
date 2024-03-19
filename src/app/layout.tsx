import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/nav-links";
import FilterPanel from "./ui/filter-panel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart wallet",
  description:
    "Smart wallet is an application designed to control spending money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100 p-4 max-w-screen-lg mx-auto h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <FilterPanel />
        <div className="flex-1">{children}</div>
        <NavLinks />
      </body>
    </html>
  );
}
