"use client";

import { useState } from "react";
import { Project } from "@/data/projects/project";
import Description from "./description";
import { Icon } from "@iconify/react/dist/iconify.js";
import { technologies } from "@/data/technologies";
import Modal from "../modal";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = Project.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <>
      <h2 className="max-sm:text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold pb-2">
        Projetos
      </h2>

      <ul className="flex gap-5 text-neutral-200 font-medium text-md">
        <li
          onClick={() => setFilter("all")}
          className={`cursor-pointer ${
            filter === "all" ? "text-fuchsia-600" : ""
          }`}
        >
          Todos
        </li>
        <li
          onClick={() => setFilter("web")}
          className={`sm:hidden cursor-pointer ${
            filter === "web" ? "text-fuchsia-600" : ""
          }`}
        >
          Web
        </li>
        <li
          onClick={() => setFilter("web")}
          className={`max-sm:hidden cursor-pointer ${
            filter === "web" ? "text-fuchsia-600" : ""
          }`}
        >
          Aplicativos web
        </li>
        <li
          onClick={() => setFilter("mobile")}
          className={`sm:hidden cursor-pointer ${
            filter === "mobile" ? "text-fuchsia-600" : ""
          }`}
        >
          Mobile
        </li>
        <li
          onClick={() => setFilter("web")}
          className={`max-sm:hidden cursor-pointer ${
            filter === "mobile" ? "text-fuchsia-600" : ""
          }`}
        >
          Aplicativos mobile
        </li>
        <li
          onClick={() => setFilter("design")}
          className={`cursor-pointer ${
            filter === "design" ? "text-fuchsia-600" : ""
          }`}
        >
          Design
        </li>
      </ul>

      <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 p-10">
        {filteredProjects.map((item) => {
          const badges = technologies.filter((tec) =>
            item.project_technologies.includes(tec.name)
          );

          return (
            <Modal
              key={item.id}
              projectName={item.nome}
              projectImage={item.imagem}
              linkDeploy={item.deploy}
              linkGitHub={item.github}
              projectTechnologies={badges.map((badge, i) => (
                <Icon
                  key={i}
                  icon={badge.icon}
                  className="size-10 border border-fuchsia-600 text-fuchsia-600 p-2 rounded-sm"
                />
              ))}
              projectDescription={item.descricao}
            >
              <div className=" flex flex-col border border-fuchsia-600 rounded-sm bg-[#353535] shadow-lg  hover:cursor-pointer">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className={`object-cover rounded-sm ${
                    item.type === "design" ? "h-full" : "h-auto "
                  }`}
                />
                {item.type !== "design" && (
                  // <div className="flex flex-col p-3 h-auto gap-2 self-start">
                  <div className="flex flex-col p-3 h-auto gap-2 w-full">
                    {item.type === "web" && (
                      <Description>APLICATIVO WEB</Description>
                    )}
                    {item.type === "mobile" && (
                      <Description>APLICATIVO MOBILE</Description>
                    )}
                    <p className=" text-neutral-200 self-start">{item.nome}</p>

                    <div className="flex flex-wrap gap-1">
                      {badges.map((badge, i) => (
                        <Icon
                          key={i}
                          icon={badge.icon}
                          className="size-10 border border-fuchsia-600 text-white p-2 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          );
        })}

        {filteredProjects.length === 0 && (
          <p className="text-white">Nenhum projeto encontrado.</p>
        )}
      </div>
    </>
  );
}
