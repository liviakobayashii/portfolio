import Link from "next/link";

export default function Li() {
  return (
    //   <Link href="#sobreMim">
    //   <Li text="Sobre mim" />
    // </Link>
    // <Link href="#habilidades">
    //   <Li text="Habilidades" />
    // </Link>
    // <Link href="#projetos">
    //   <Li text="Projetos" />
    // </Link>
    // <Link href="#contato">
    //   <Li text="Contato" />
    // </Link>
    <>
      <Link href="#sobreMim">
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Sobre mim
        </li>
      </Link>
      <Link href="#habilidades">
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Habilidades
        </li>
      </Link>
      <Link href="#projetos">
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Projetos
        </li>
      </Link>
      <Link href="#contato">
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Contato
        </li>
      </Link>
    </>
  );
}
