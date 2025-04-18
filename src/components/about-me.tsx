import Social from "./icons/social";

export default function AboutMe() {
  return (
    <div
      className="container flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-5 md:w-1/2">
        <h2 className="max-sm:text-3xl sm:text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold pb-2">
          Sobre mim
        </h2>

        <p className="text-justify text-neutral-200/70">
          Desenvolvedora Front-end & UI/UX Designer, movida por desafios e
          apaixonada por tecnologia. Tenho um olhar atento para a experiência do
          usuário e foco em criar interfaces funcionais, bem estruturadas e
          visualmente atrativas. Estou em constante evolução, sempre buscando
          aprender, crescer e transformar boas ideias em experiências digitais
          incríveis.
        </p>
        <Social />
      </div>
      <div className="max-md:hidden">
        <img src="girl.png" alt="Imagem" className="w-100" />
      </div>
    </div>
  );
}
