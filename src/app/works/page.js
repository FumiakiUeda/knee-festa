import { Header } from "@/components/Header";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Bossa Waltz",
    category: "音楽",
    href: "https://soundcloud.com/gtsehf2wdxwv/bossa-waltz",
    imageSrc: "/icon-note.png",
    imageAlt: "Bossa Waltz",
    date: "2024/2/18",
    creator: "海風夕",
  },
  {
    id: 2,
    name: "Toy Block",
    category: "音楽",
    href: "https://soundcloud.com/gtsehf2wdxwv/toy-block",
    imageSrc: "/icon-note.png",
    imageAlt: "Toy Block",
    date: "2024/2/11",
    creator: "海風夕",
  },
  {
    id: 3,
    name: "ふーPOT",
    category: "ゲーム",
    href: "https://unityroom.com/games/hupot",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/47975/icon_20230619_044304.png?h=1687117384",
    imageAlt: "ふーPOT",
    date: "2023/6/19",
    creator: "クリオネット, omimo",
  },
  {
    id: 4,
    name: "CarrotAction",
    category: "ゲーム",
    href: "https://unityroom.com/games/carrotaction",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/47657/icon_20230612_062511.png?h=1686518711",
    imageAlt: "CarrotAction",
    date: "2023/6/12",
    creator: "クリオネット, omimo",
  },
  {
    id: 5,
    name: "ぐみFactory",
    category: "ゲーム",
    href: "https://unityroom.com/games/gumi_factory",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/47338/icon_20230605_001702.png?h=1685891822",
    imageAlt: "ぐみFactory",
    date: "2023/6/5",
    creator: "クリオネット, omimo",
  },
  {
    id: 6,
    name: "うさたまころりん",
    category: "ゲーム",
    href: "https://unityroom.com/games/usatamakororin",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/39489/icon_20230118_020523.png?h=1673975123",
    imageAlt: "うさたまころりん",
    date: "2023/1/17",
    creator: "クリオネット, omimo",
  },
  {
    id: 7,
    name: "ぴょんぴょんすうじうさぎ",
    category: "ゲーム",
    href: "https://unityroom.com/games/numberusagi",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/16452/icon_20200909_233439.png?h=1599662079",
    imageAlt: "ぴょんぴょんすうじうさぎ",
    date: "2020/9/9",
    creator: "海風夕, omimo",
  },
  {
    id: 8,
    name: "Calorie Monster",
    category: "ゲーム",
    href: "/CalorieMonsterStandaloneBuild.zip",
    imageSrc: "/calorie_monster.png",
    imageAlt: "Calorie Monster",
    date: "2021/7/31",
    creator: "ともじぃ, 海風夕",
  },
  {
    id: 9,
    name: "ローリングアクション",
    category: "ゲーム",
    href: "https://scratch.mit.edu/projects/332464631",
    imageSrc: "/rolling.png",
    imageAlt: "ローリングアクション",
    date: "2019/9/30",
    creator: "クリオネット",
  },
  {
    id: 10,
    name: "ｳｻﾁｬﾝｼｭｰﾃｨﾝｸﾞ",
    category: "ゲーム",
    href: "https://scratch.mit.edu/projects/329210687/",
    imageSrc: "/shooting.png",
    imageAlt: "ｳｻﾁｬﾝ",
    date: "2019/9/19",
    creator: "クリオネット, omimo",
  },
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          作品一覧
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={280}
                  height={320}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href={product.href} target="_blank">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {product.creator}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 text-right">
                    {product.category}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {product.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
