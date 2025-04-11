import { ProjectType } from "@/types/projectType";

export const Project: ProjectType[] = [
  {
    id: 1,
    nome: "Controle financeiro",
    imagem: "/mockup-controle-financeiro.png",
    type: "mobile",
    project_technologies: ["HTML5", "CSS3", "Javascript"],
    descricao:
      "Sistema de controle de despesas, onde o clinte pode inserir transações com nome e valor, escolher se são despesas ou receitas e ter acesso ao saldo todal.",
    deploy: "https://liviakobayashii.github.io/controleFinanceiro",
    github: "https://github.com/liviakobayashii/controleFinanceiro",
  },
  {
    id: 2,
    nome: "To do List",
    imagem: "/mockup-to-do.png",
    type: "mobile",
    project_technologies: ["HTML5", "CSS3", "Javascript"],
    descricao:
      "Sistema de To do List simples, onde o cliente pode inserir, pesquisar, filtrar, editar e excluir uma tarefa. Pode-se também, marcar a tarefa como concluída.",
    deploy: "https://liviakobayashii.github.io/toDoList",
    github: "https://github.com/liviakobayashii/toDoList",
  },
  // {
  //   id: 3,
  //   nome: "Pokedéx",
  //   imagem: "/mockup-pokedex.png",
  //   type: "web",
  //   project_technologies: ["HTML5", "CSS3", "Javascript"],
  //   descricao:
  // },
  {
    id: 4,
    nome: "Bateria Virtual",
    imagem: "/mockup-bateria.png",
    type: "mobile",
    project_technologies: ["HTML5", "CSS3", "Javascript"],
    descricao:
      "Sistema de uma bateria virtual. O sistema é capaz de captar algumas teclas do teclado, e tocar um som diferente em cada uma delas. É possível também criar uma composição, escrevendo no campo as teclas escolhidas, e clicar no botão, que o sistema tocará a música criada.",
    deploy: "https://liviakobayashii.github.io/bateriaVirtual",
    github: "https://github.com/liviakobayashii/bateriaVirtual",
  },
  {
    id: 5,
    nome: "Clima",
    imagem: "/mockup-clima.png",
    type: "mobile",
    project_technologies: ["HTML5", "CSS3", "Javascript"],
    descricao:
      "Sistema capaz de fornecer informações de tempo e clima de todas as cidades do mundo em tempo real. Basta digitar o nome da cidade no campo, que aparecerá informações como temperatura e vento.",
    deploy: "https://liviakobayashii.github.io/clima",
    github: "https://github.com/liviakobayashii/clima",
  },
  {
    id: 6,
    nome: "Info dogs",
    imagem: "/mockup-info-dogs.png",
    type: "web",
    project_technologies: [
      "HTML5",
      "CSS3",
      "Typescript",
      "NextJS",
      "React",
      "TailwindCSS",
      "ShadcnUi",
    ],
    descricao:
      "Um sistema que, baseado em dados de uma API, busca todas as raças de cães disponíveis. Ao clicar no nome de uma raça, serão exibidas todas as imagens dessa raça. Também é possível, clicando em um botão, mostrar uma imagem aleatória de todos os cachorros disponíveis.",
    deploy: "https://info-dogs.vercel.app",
    github: "https://github.com/liviakobayashii/info-dogs",
  },
  // {
  //   id: 7,
  //   nome: "testeDesign",
  //   imagem: "loading.jpg",
  //   type: "design",
  //   project_technologies: [],
  // },
];
