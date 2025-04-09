"use client";

import { useState } from "react";
import { Project } from "@/data/projects/project";
import Description from "./description";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = Project.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section className="flex flex-col gap-6 justify-center items-center py-30">
      <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
        Projetos
      </h2>

      <ul className="flex gap-5 text-white font-medium text-md">
        <li
          onClick={() => setFilter("all")}
          className={`cursor-pointer ${filter === "all" ? "underline" : ""}`}
        >
          Todos
        </li>
        <li
          onClick={() => setFilter("web")}
          className={`cursor-pointer ${filter === "web" ? "underline" : ""}`}
        >
          Aplicativos web
        </li>
        <li
          onClick={() => setFilter("mobile")}
          className={`cursor-pointer ${filter === "mobile" ? "underline" : ""}`}
        >
          Aplicativos mobile
        </li>
        <li
          onClick={() => setFilter("design")}
          className={`cursor-pointer ${filter === "design" ? "underline" : ""}`}
        >
          Design
        </li>
      </ul>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className=" border border-fuchsia-600 rounded-sm bg-[#353535]"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className={`w-85 object-cover rounded-sm ${
                item.type === "design" ? "h-85" : "h-70"
              }`}
            />
            {item.type !== "design" && (
              <div className="px-3 h-15">
                {item.type === "web" && (
                  <Description>APLICATIVO WEB</Description>
                )}
                {item.type === "mobile" && (
                  <Description>APLICATIVO MOBILE</Description>
                )}
                <p className="mt-2 text-white">{item.nome}</p>
              </div>
            )}
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="text-white">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
}
