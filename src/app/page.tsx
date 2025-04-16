import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import MainSection from "@/components/main-section";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills";
import { social } from "@/data/social";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Page() {
  const linkWhatsapp = social.find((item) => item.name === "Whatsapp");

  return (
    <>
      {linkWhatsapp && (
        <Link href={linkWhatsapp.href} target="_blank">
          <button className="bg-[#59D264] rounded-full p-3 fixed bottom-0 right-0 m-5 'hover:cursor-pointer hover:bg-[#4ead55] duration-200 z-50">
            <Icon icon="logos:whatsapp-icon" className="size-7" />
          </button>
        </Link>
      )}

      <section className="flex flex-col h-screen bg-radial from-fuchsia-800 via-fuchsia-900 via-10%  to-black">
        <MainSection />
      </section>
      <section
        id="sobreMim"
        className="flex flex-col gap-6 py-30 bg-radial from-[#242424] via-[#1c1c1c] to-[#161616] lg:justify-center lg:items-center"
      >
        <AboutMe />
      </section>
      <section
        id="habilidades"
        className="flex flex-col gap-6 justify-center items-center py-30 h-full bg-[url('/background.png')] bg-cover bg-center w-full"
      >
        <Skills />
      </section>
      <section
        id="projetos"
        className="flex flex-col gap-6 justify-center items-center py-30 bg-radial from-[#242424] via-[#1c1c1c] to-[#161616]"
      >
        <Projects />
      </section>

      <section
        id="contato"
        className="flex flex-col justify-center items-center py-30 h-screen bg-[url('/background.png')] bg-cover bg-center w-full"
      >
        <Contact />
      </section>
    </>
  );
}
