import Social from "./icons/social";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-6 justify-center items-center my-30">
      <div className="flex flex-col gap-4 w-6xl">
        <img src="perfil.jpg" alt="Minha foto" className="w-80 rounded-sm" />
        <h2 className="text-4xl text-fuchsia-600">
          Livia Kobayashi Machado Martins
        </h2>
        <hr className="text-fuchsia-600" />
      </div>
      <div className="flex flex-col gap-4 w-6xl">
        <p className="text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repellendus nisi pariatur facere, impedit sequi expedita aut corporis
          earum explicabo hic? Quis ad aperiam beatae quod dicta totam molestias
          a? Sint mollitia porro labore, deserunt, perferendis itaque doloribus
          cum perspiciatis quod facere quaerat incidunt sunt tenetur fugit eius,
          odio dolore quam rem voluptatibus! Repellat adipisci perspiciatis quia
          officiis voluptatem! Possimus.
        </p>
        <Social />
      </div>
    </section>
  );
}
