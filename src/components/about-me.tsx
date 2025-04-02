export default function AboutMe() {
  return (
    <section className="grid grid-cols-2 my-40">
      <div className=" flex justify-center items-center p-10">
        <div className="border border-fuchsia-600 rounded-sm p-10 ">
          <img src="perfil.jpg" alt="Minha foto" className="w-80 rounded-sm" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="border border-fuchsia-600 rounded-sm p-4 w-2xl">
          <h2 className="text-3xl font-bold py-6 text-fuchsia-600">
            Sobre mim
          </h2>
          <p className="text-xl text-justify text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            aliquid eaque ipsum, quae alias, fuga nihil provident quod harum
            perferendis corrupti. Corrupti sit sunt rem illum, ullam quisquam
            veritatis perspiciatis?
          </p>
        </div>
      </div>
    </section>
  );
}
