import Header from "./header";
import Social from "./icons/social";

export default function MainSection() {
  return (
    <>
      <Header />
      <section
        className="container flex justify-center items-center h-screen"
        data-aos="fade"
      >
        <div className="max-md:hidden flex justify-center items-center">
          <img src="/perfil.png" alt="Perfil" className="w-100 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col  max-md:justify-center max-md:items-center gap-6">
            <div className="flex flex-col max-md:justify-center max-md:items-center">
              <h1 className="max-md:text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent pb-3">
                Livia Kobayashi
              </h1>
              <h2 className="max-md:text-center text-xl md:text-2xl text-neutral-200 pb-3">
                Front-end developer | UI/UX Designer
              </h2>
            </div>
            <Social />
          </div>
        </div>
      </section>
    </>
  );
}
