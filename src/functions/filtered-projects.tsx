import { Project } from "@/data/projects/project";
import { useState } from "react";

export type Props = {
  type: string;
};

export default function filteredProjects({ type }: Props) {
  const [filter, setFilter] = useState("all");
  if (filter === type) {
    const filteredWeb = Project.filter((item) => item.type === type);
    filteredWeb.map((item) => {
      <div>{item.nome}</div>;
    });
  }

  // const filteredProjects = Project.filter((item) =>
  //     filter === "web" ? true : item.tipo === filter
  //   );
}
