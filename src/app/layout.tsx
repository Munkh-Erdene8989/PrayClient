import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Эрдэнэ Зуу Хийд",
  description: "Монгол тулгатны анхны нандин шүтээн - Эрдэнэ Зуу Хийд",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
