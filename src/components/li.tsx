import Link from "next/link";
interface LiProps {
  onNavigate?: () => void;
}

export default function Li({ onNavigate }: LiProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.();
  };
  return (
    <>
      <Link href="#sobreMim" onClick={() => handleClick("sobreMim")}>
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Sobre mim
        </li>
      </Link>
      <Link href="#habilidades" onClick={() => handleClick("habilidades")}>
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Habilidades
        </li>
      </Link>
      <Link href="#projetos" onClick={() => handleClick("projetos")}>
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Projetos
        </li>
      </Link>
      <Link href="#contato" onClick={() => handleClick("contato")}>
        <li className="text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-fuchsia-600 duration-200">
          Contato
        </li>
      </Link>
    </>
  );
}
