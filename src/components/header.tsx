"use client";

import Link from "next/link";
import Li from "./li";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div
      className={`flex max-md:flex-col md:justify-between md:items-center fixed w-screen z-53 px-10 duration-300 ${
        visible ? "bg-black/90" : "bg-black/30"
      }`}
    >
      <div className="flex justify-center items-center">
        <img src="logo.png" alt="Logo" className="size-30" />
        <h1 className="text-3xl font-bold text-neutral-200">
          Livia
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
            Kobayashi
          </span>
        </h1>
      </div>
      <ul className="flex gap-10">
        <Link href="#sobreMim">
          <Li text="Sobre mim" />
        </Link>
        <Link href="#habilidades">
          <Li text="Habilidades" />
        </Link>
        <Link href="#projetos">
          <Li text="Projetos" />
        </Link>
        <Link href="#contato">
          <Li text="Contato" />
        </Link>
      </ul>
      <Link href="curriculo.pdf" target="_blank">
        <button className=" max-md:hidden bg-fuchsia-600 p-3 rounded-sm text-neutral-200 font-bold hover:cursor-pointer hover:bg-fuchsia-700 duration-200">
          Baixar CV
        </button>
      </Link>
    </div>
  );
}
