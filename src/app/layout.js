import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ひざ祭り公式サイト",
  description: "「ひざ祭り」とは、様々な方面で創作活動を行う同人活動サークルである。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notojp.className + " bg-slate-900 text-white"}>{children}</body>
    </html>
  );
}
