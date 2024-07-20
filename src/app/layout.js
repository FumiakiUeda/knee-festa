import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "お知らせ",
  description: "○○に関するお知らせ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className + " bg-slate-900 text-white"}>{children}</body>
    </html>
  );
}
