import Link from "next/link";

export default function Header() {
  return (
    <div className="flex max-md:flex-col md:justify-between md:items-center px-4 py-10 bg-black/30">
      <h1 className="text-3xl font-bold text-neutral-200">
        Livia
        <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
          Kobayashi
        </span>
      </h1>
      <Link href="curriculo.pdf" target="_blank">
        <button className=" max-md:hidden bg-fuchsia-600 p-3 rounded-sm text-neutral-200 font-bold hover:cursor-pointer hover:bg-fuchsia-700 duration-200">
          Baixar CV
        </button>
      </Link>
    </div>
  );
}
