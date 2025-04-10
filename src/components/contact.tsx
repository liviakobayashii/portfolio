import { Icon } from "@iconify/react/dist/iconify.js";
import ContactItem from "./contact-item";

export default function Contact() {
  return (
    <>
      <section className="flex justify-center items-center ">
        <section className=" flex justify-between w-4xl p-10 rounded-sm bg-fuchsia-950 shadow-lg">
          <div className=" flex flex-col gap-5 justify-center ">
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
                Contato
              </h2>
              <p className="text-sm text-gray-300">Formas de contato</p>
            </div>
            <ContactItem
              icon="entypo:email"
              title="Email"
              subtitle="liviakmmartins@gmail.com"
            />
            <ContactItem
              icon="solar:phone-outline"
              title="Telefone"
              subtitle="(14) 92000-6436"
            />
            <ContactItem
              icon="line-md:home"
              title="Endereço"
              subtitle="Lins - SP"
            />
          </div>
          <img src="contact.png" alt="Contact" className="size-96" />
        </section>
      </section>
      <footer className="mt-20 text-sm">
        &copy; Desenvolvido por Livia Kobayashi
      </footer>
    </>
  );
}
