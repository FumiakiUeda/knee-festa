import { Header } from "@/components/Header";
import Image from "next/image";

const stats = [
  { name: "所属メンバー", value: "5" },
  { name: "活動実績", value: "300+" },
  { name: "主な活動ジャンル", value: "男性向け" },
  { name: "創作カテゴリ", value: "イラスト、音楽、ゲーム" },
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            ひざを配りましょう
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              ひざ祭りとは、様々な方面で創作活動を行う同人活動サークルである。
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
