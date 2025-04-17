"use client";

import Link from "next/link";
import Li from "./li";
import { useEffect, useState } from "react";
import SheeterItem from "./sheet-item";
import SheetItem from "./sheet-item";

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
      className={`fixed w-screen z-53 duration-300 ${
        visible ? "bg-black/90" : "bg-black/30"
      }`}
    >
      <div className="container flex items-center justify-between duration-300">
        <div className="flex justify-between items-center max-lg:w-full">
          <img src="logo.png" alt="Logo" className="size-30" />
          <h1 className="max-lg:hidden text-3xl font-bold text-neutral-200">
            Livia
            <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
              Kobayashi
            </span>
          </h1>
          <SheetItem />
        </div>
        <ul className="flex gap-10 max-lg:hidden">
          <Li />
        </ul>
        <Link href="curriculo.pdf" target="_blank">
          <button className=" max-lg:hidden bg-fuchsia-600 p-3 rounded-sm text-neutral-200 font-bold hover:cursor-pointer hover:bg-fuchsia-700 duration-200">
            Baixar CV
          </button>
        </Link>
      </div>
    </div>
  );
}
