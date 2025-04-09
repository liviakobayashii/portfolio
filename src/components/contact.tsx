import { Icon } from "@iconify/react/dist/iconify.js";

export default function Contact() {
  return (
    <section className="flex justify-center items-center py-30 h-screen bg-[url('/background.png')] bg-cover bg-center w-full">
      <section className=" grid grid-cols-2  w-6xl p-6 rounded-sm bg-fuchsia-950 shadow-lg">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
              Contato
            </h2>
            <p className="text-sm text-gray-300">Formas de contato</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="entypo:email" className="size-6 text-fuchsia-600" />
            <div>
              <p className="font-bold text-xl">Email</p>
              <p className="text-gray-300">liviakmmartins@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-500 justify-center items-center">
          foto
        </div>
      </section>
    </section>
  );
}
