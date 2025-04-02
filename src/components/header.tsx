export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-10 bg-black/80">
      <h1 className="text-3xl font-bold">
        Livia <span className="text-fuchsia-600">Kobayashi</span>
      </h1>
      <button className="bg-fuchsia-600 p-3 rounded-sm text-xl">
        Baixar CV
      </button>
    </div>
  );
}
