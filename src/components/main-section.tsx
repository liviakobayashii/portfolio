import Header from "./header";
import Social from "./icons/social";

export default function MainSection() {
  return (
    <>
      <Header />
      <section
        className="container flex justify-center items-center h-screen "
        data-aos="fade"
      >
        <div className="flex justify-center items-center">
          <img src="/perfil.png" alt="Perfil" className="w-100 rounded-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent pb-3">
                Livia Kobayashi
              </h1>
              <h2 className="text-2xl text-neutral-200 pb-3">
                Front-end developer | UI/UX Designer
              </h2>
            </div>
            <Social />
          </div>
        </div>
      </section>
      {/* <div
        className="flex flex-col gap-6 justify-center items-center h-screen text-center"
      >
        <div className="lg:w-1/2">
          <h2 className="lg:text-xl font-bold text-neutral-200/70">
            Seja bem vindo(a) ao meu{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
              portfólio
            </span>
            !
          </h2>
          <h1 className="max-sm:text-4xl sm:text-5xl md:text-6xl font-bold self-center text-neutral-200">
            Transformando ideias em interfaces intuitivas.
          </h1>
        </div>
      </div> */}
    </>
  );
}
