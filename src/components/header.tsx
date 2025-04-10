export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-10 bg-black/30">
      <h1 className="text-3xl font-bold text-neutral-200">
        Livia
        <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
          Kobayashi
        </span>
      </h1>
      <button className="bg-fuchsia-600 p-3 rounded-sm text-xl text-neutral-200 font-bold">
        Baixar CV
      </button>
    </div>
  );
}
