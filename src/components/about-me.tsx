import Social from "./icons/social";

export default function AboutMe() {
  return (
    <div className="container">
      <div
        className="flex flex-col gap-4 px-3 max-md:px-6 lg:w-2/3"
        data-aos="fade-up"
      >
        <img
          src="perfil.jpg"
          alt="Minha foto"
          className="max-w-50 lg:w-70 rounded-sm"
        />
        <h2 className="max-sm:text-3xl sm:text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold pb-2">
          Front-end developer | UI/UX Designer
        </h2>
        <hr className="" />
      </div>
      <div
        className="flex flex-col gap-6 px-3 max-md:px-6 lg:w-2/3"
        data-aos="fade-up"
      >
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
    </div>
  );
}
