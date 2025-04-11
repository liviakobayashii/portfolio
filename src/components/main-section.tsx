import Header from "./header";

export default function MainSection() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6 justify-center items-center h-screen text-center">
        <div className="lg:w-1/2">
          <h2 className="lg:text-xl font-bold text-neutral-200/70">
            Seja bem vindo(a) ao meu{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
              portfólio
            </span>
            !
          </h2>
          <h1 className="max-sm:text-4xl sm:text-5xl md:text-6xl font-bold self-center text-neutral-200">
            Transformando suas ideias em resultados
          </h1>
        </div>
      </div>
    </>
  );
}
