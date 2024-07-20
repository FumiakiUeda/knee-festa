import { Header } from "@/components/Header";
import Image from "next/image";

const people = [
  {
    name: "ともじぃ",
    role: "マネージャー",
    imageUrl:
      "https://cdn.discordapp.com/avatars/387539601583243277/67bf5d9447044eeb3c29d4424ab812b7.webp?size=128",
  },
  {
    name: "shurochiku",
    role: "マスコット",
    imageUrl:
      "https://cdn.discordapp.com/avatars/1065060211385180361/a11f20926b48386d0931605ee201ef07.webp?size=128",
  },
  {
    name: "omimo",
    role: "イラストレーター",
    imageUrl:
      "https://cdn.discordapp.com/avatars/455250818120286231/2824e27e4d45edca55e27bcd7c642fdc.webp?size=128",
  },
  {
    name: "クリオネット",
    role: "エンジニア",
    imageUrl:
      "https://cdn.discordapp.com/avatars/323711100266872832/dae96efa7cc6b7ea11f18f6eeb74eacf.webp?size=128",
  },
  {
    name: "海風夕",
    role: "エンジニア",
    imageUrl:
      "https://cdn.discordapp.com/avatars/622041442424061973/a5d98b2ce09a86094b5693c4a1936a16.webp?size=128",
  },
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className="relative isolate px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              メンバー
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              ひざ祭りに所属するメンバー
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    alt={person.name}
                    src={person.imageUrl}
                    width={128}
                    height={128}
                    className="h-16 w-16 rounded-full bg-slate-100"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-400">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
