import Header from "./header";

export default function MainSection() {
  return (
    <section className="flex flex-col h-screen bg-radial from-fuchsia-800 via-fuchsia-900 via-10%  to-black">
      <Header />
      <div className="flex flex-col gap-10 justify-center items-center h-full  max-w-5xl text-center self-center ">
        <h2 className="text-3xl font-bold">
          Seja bem vindo(a) ao meu{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
            portfólio
          </span>
          !
        </h2>
        <h1 className="text-7xl font-bold self-center">
          Transformando suas ideias em resultados
        </h1>
        {/* <p className="text-xl text-justify text-gray-400 w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
          similique libero. Cumque omnis, cum error aliquam aliquid iure quo
          sequi, ipsa magnam asperiores doloribus nesciunt, neque consectetur
          voluptatem beatae suscipit.
        </p> */}
      </div>
    </section>
  );
}
