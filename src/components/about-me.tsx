import Social from "./icons/social";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col gap-4 w-6xl">
        <img src="perfil.jpg" alt="Minha foto" className="w-70 rounded-sm" />
        <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
          Front-end developer | UI/UX Designer
        </h2>
        <hr className="text-fuchsia-600" />
      </div>
      <div className="flex flex-col gap-6 w-6xl">
        <p className="text-justify text-fuchsia-200 text-xl">
          Desenvolvedora Front-end & UI/UX Designer, movida por desafios e
          apaixonada por tecnologia. Tenho um olhar atento para a experiência do
          usuário e foco em criar interfaces funcionais, bem estruturadas e
          visualmente atrativas. Estou em constante evolução, sempre buscando
          aprender, crescer e transformar boas ideias em experiências digitais
          incríveis.
        </p>
        <Social />
      </div>
    </>
  );
}
