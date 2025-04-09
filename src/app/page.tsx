import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import MainSection from "@/components/main-section";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <div>
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
