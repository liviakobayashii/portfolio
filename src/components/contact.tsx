import ContactItem from "./contact-item";

export default function Contact() {
  return (
    <>
      <section className=" flex justify-between w-4xl p-10 rounded-sm bg-fuchsia-950 shadow-lg">
        <div className=" flex flex-col gap-8 justify-center ">
          <div className="flex flex-col gap-1">
            <h2 className="text-5xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
              Contato
            </h2>
            <p className="text-neutral-200/70 w-xs">
              Sinta-se à vontade para entrar em contato comigo através dos
              canais abaixo.
            </p>
          </div>
          <ContactItem
            icon="line-md:email-multiple"
            title="Email"
            subtitle="liviakmmartins@gmail.com"
          />
          <ContactItem
            icon="line-md:phone"
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
      <footer className="mt-20 text-sm text-neutral-200">
        &copy; Desenvolvido por Livia Kobayashi
      </footer>
    </>
  );
}
