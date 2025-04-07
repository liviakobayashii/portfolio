"use client";

import { useState } from "react";
import { Project } from "@/data/projects/project";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = Project.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section className="flex flex-col gap-6 justify-center items-center py-30 h-screen">
      <h2 className="text-4xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
        Projetos
      </h2>

      <ul className="flex gap-4 text-white font-medium text-lg">
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
          Web
        </li>
        <li
          onClick={() => setFilter("design")}
          className={`cursor-pointer ${filter === "design" ? "underline" : ""}`}
        >
          Design
        </li>
      </ul>

      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {filteredProjects.map((item) => (
          <div key={item.id} className="text-center">
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <p className="mt-2 text-white">{item.nome}</p>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="text-white">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
}
