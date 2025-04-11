import ContactItem from "./contact-item";

export default function Contact() {
  return (
    <>
      {/* <section className=" flex justify-between rounded-sm bg-fuchsia-950 shadow-lg mx-4"> */}
      <section className=" flex rounded-sm shadow-lg bg-fuchsia-950 m-4 p-6 lg:p-10 gap-15 ">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="max-sm:text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
              Contato
            </h2>
            <p className="max-sm:text-sm flex flex-wrap text-neutral-200/70 w-xs">
              Sinta-se à vontade para entrar em contato comigo através dos
              canais abaixo.
            </p>
          </div>
          <div className="flex flex-col gap-5">
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
        </div>
        <img
          src="contact.png"
          alt="Contact"
          className="max-w-96 max-lg:hidden"
        />
      </section>
      <footer className="mt-20 text-sm text-neutral-200">
        &copy; Desenvolvido por Livia Kobayashi
      </footer>
    </>
  );
}
