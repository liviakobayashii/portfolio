import { technologies } from "@/data/technologies";
import { Icon } from "@iconify/react/dist/iconify.js";
import H2 from "./h2";

export default function Skills() {
  return (
    <div className="container">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <H2 text="Habilidades" />

        <p className="text-neutral-200/70" data-aos="fade-up">
          Tecnologias que utilizo ou já utilizei
        </p>
      </div>
      <div className="max-w-150 mx-auto">
        <div
          className="grid max-sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 justify-center items-center mt-4"
          data-aos="fade-up"
        >
          {technologies.map((item, i) => (
            <div
              key={i}
              className="flex flex-col w-25 h-25 justify-center items-center bg-fuchsia-950  text-white shadow-lg rounded-sm max-sm:p-2 sm:p-4 cursor-pointer duration-200 hover:text-fuchsia-600"
            >
              <Icon icon={item.icon} className="size-12 max-sm:size-10" />
              <p className="text-sm ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
