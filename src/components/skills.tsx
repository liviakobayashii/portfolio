import { technologies } from "@/data/technologies";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-5xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
          Habilidades
        </h2>
        <p>Tecnologias que utilizo ou já utilizei</p>
      </div>
      <div className="grid grid-cols-5 gap-3 justify-center items-center mt-4">
        {technologies.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center bg-fuchsia-950 shadow-lg rounded-sm p-4 cursor-pointer duration-200 hover:text-fuchsia-600"
          >
            <Icon icon={item.icon} className="size-12" />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
