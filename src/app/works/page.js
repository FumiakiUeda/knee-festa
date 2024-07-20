import { Header } from "@/components/Header";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "ぴょんぴょんすうじうさぎ",
    href: "https://unityroom.com/games/numberusagi",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/16452/icon_20200909_233439.png?h=1599662079",
    imageAlt: "ぴょんぴょんすうじうさぎ",
    date: "2020/9/9",
    creator: "海風夕",
  },
  {
    id: 2,
    name: "ぐみFactory",
    href: "https://unityroom.com/games/gumi_factory",
    imageSrc:
      "https://os-worker.unityroom.com/unityroom_production/icon/47338/icon_20230605_001702.png?h=1685891822",
    imageAlt: "ぐみFactory",
    date: "2023/6/5",
    creator: "クリオネット",
  },
  {
    id: 3,
    name: "Work3",
    href: "#",
    imageSrc:
      "/dummy.png",
    imageAlt: "Work3",
    date: "2024/4/3",
    creator: "Official",
  },
  {
    id: 4,
    name: "Work4",
    href: "#",
    imageSrc:
      "/dummy.png",
    imageAlt: "Work4",
    date: "2024/4/4",
    creator: "Official",
  },
  {
    id: 5,
    name: "Work5",
    href: "#",
    imageSrc:
      "/dummy.png",
    imageAlt: "Work5",
    date: "2024/4/5",
    creator: "Official",
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
                <div
                className="">
                </div>
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
                  <p className="mt-1 text-sm text-slate-500">{product.creator}</p>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  {product.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
