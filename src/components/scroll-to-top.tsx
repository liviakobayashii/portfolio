"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex justify-center items-center bottom-20 right-5 bg-black/50 border-2 box-border border-fuchsia-600 rounded-full shadow-lg text-white hover:cursor-pointer transition-opacity duration-500 z-51  w-12 h-12 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Icon icon="mingcute:arrow-up-fill" className="text-fuchsia-600 size-5" />
    </button>
  );
}
