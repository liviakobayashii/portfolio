export type ProjectType = {
  id: number;
  nome: string;
  imagem: string;
  type: "web" | "mobile" | "design";
  project_technologies: string[];
  descricao: string;
  deploy: string;
  github: string;
};
