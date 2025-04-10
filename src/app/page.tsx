import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import MainSection from "@/components/main-section";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <>
      <section className="flex flex-col h-screen bg-radial from-fuchsia-800 via-fuchsia-900 via-10%  to-black">
        <MainSection />
      </section>

      <section className="flex flex-col gap-6 justify-center items-center py-30 h-screen bg-radial from-[#242424] via-[#1c1c1c] to-[#161616]">
        <AboutMe />
      </section>
      <section className="flex flex-col gap-6 justify-center items-center py-30 h-full bg-[url('/background.png')] bg-cover bg-center w-full">
        <Skills />
      </section>
      <section className="flex flex-col gap-6 justify-center items-center py-30 bg-radial from-[#242424] via-[#1c1c1c] to-[#161616]">
        <Projects />
      </section>

      <section className="flex flex-col justify-center items-center py-30 h-screen bg-[url('/background.png')] bg-cover bg-center w-full">
        <Contact />
      </section>
    </>
  );
}
