import AboutMe from "@/components/about-me";
import MainSection from "@/components/main-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <div>
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
