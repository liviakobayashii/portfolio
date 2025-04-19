export type ProjectType = {
  id: number;
  nome: string;
  imagem: string;
  type: "web" | "mobile" | "design";
  project_technologies: string[] | null;
  descricao: string | null;
  deploy: string | null;
  github: string | null;
};
