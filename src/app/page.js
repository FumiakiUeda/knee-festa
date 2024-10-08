import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ひざ祭り
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              ひざから広がる創作の世界
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
