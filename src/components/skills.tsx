import IconSkills from "./icons/icons-skills";

export default function Skills() {
  return (
    <section className="flex flex-col gap-6 justify-center items-center py-30 h-screen bg-[url('/background.png')] bg-cover bg-center w-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
          Habilidades
        </h2>
        <p>Tecnologias que utilizo ou já utilizei</p>
      </div>
      <div className="grid grid-cols-5 gap-3 justify-center items-center">
        <IconSkills icon="simple-icons:html5" description="HTML5" />
        <IconSkills icon="simple-icons:css3" description="CSS3" />
        <IconSkills icon="simple-icons:javascript" description="Javascript" />
        <IconSkills icon="cib:typescript" description="Typescript" />
        <IconSkills icon="simple-icons:react" description="ReactJs" />
        <IconSkills icon="simple-icons:nextdotjs" description="NextJs" />
        <IconSkills icon="simple-icons:php" description="PHP" />
        <IconSkills icon="fontisto:mysql" description="MySql" />
        <IconSkills icon="simple-icons:git" description="Git" />
        <IconSkills icon="simple-icons:github" description="Github" />
        <IconSkills icon="simple-icons:tailwindcss" description="TailwindCSS" />
        <IconSkills icon="simple-icons:shadcnui" description="ShadcnUi" />
        <IconSkills icon="simple-icons:axios" description="Axios" />
        <IconSkills icon="simple-icons:figma" description="Figma" />
        <IconSkills icon="simple-icons:gimp" description="Gimp" />
        <IconSkills icon="mage:photoshop" description="Photoshop" />
      </div>
    </section>
  );
}
