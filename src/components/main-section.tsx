import Header from "./header";

export default function MainSection() {
  return (
    <>
      <Header />
      <div className="sm:border sm:border-red-500 flex flex-col gap-10 justify-center items-center h-full max-w-5xl text-center self-center ">
        <h2 className="md:text-3xl font-bold text-neutral-200/70">
          Seja bem vindo(a) ao meu{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
            portfólio
          </span>
          !
        </h2>
        <h1 className="max-md:text-4xl md:text-7xl font-bold self-center text-neutral-200">
          Transformando suas ideias em resultados
        </h1>
      </div>
    </>
  );
}
