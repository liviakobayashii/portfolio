import ContactItem from "./contact-item";
import H2 from "./h2";

export default function Contact() {
  return (
    <>
      <section
        className=" flex rounded-sm shadow-lg bg-fuchsia-950 p-4 md:p-6 lg:p-10 gap-15 "
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col ">
            <H2 text="Contato" />
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
        <img src="contact.png" alt="Contact" className="w-100 max-lg:hidden" />
      </section>
      <footer className="mt-20 text-sm text-neutral-200">
        &copy; Desenvolvido por Livia Kobayashi
      </footer>
    </>
  );
}
