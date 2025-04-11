import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  projectName: string;
  projectImage: string;
  linkDeploy: string;
  linkGitHub: string;
  projectTechnologies: any;
  projectDescription: string;
};

export default function Modal({
  children,
  projectName,
  projectImage,
  linkDeploy,
  linkGitHub,
  projectTechnologies,
  projectDescription,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold pb-1">
            {projectName}
          </DialogTitle>
          <DialogDescription asChild>
            <section className="flex flex-col gap-7">
              <div className="flex flex-col gap-2 mb-3">
                <img
                  src={projectImage}
                  alt="Imagem do projeto"
                  className="rounded-sm shadow-lg w-100"
                />
                <div className="flex gap-3">
                  <Link
                    href={linkDeploy}
                    className="text-white/70 hover:cursor-pointer hover:text-fuchsia-600 duration-200"
                    target="_blank"
                  >
                    <Icon icon="bx:link" className="size-6" />
                  </Link>
                  <Link
                    href={linkGitHub}
                    className="text-white/70 hover:cursor-pointer hover:text-fuchsia-600 duration-200"
                    target="_blank"
                  >
                    <Icon icon="simple-icons:github" className="size-6" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-neutral-200 font-bold self-start">
                  Tecnologias utilizadas:
                </p>
                <div className="flex gap-1">{projectTechnologies}</div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-neutral-200 font-bold self-start">
                  Descrição do projeto:
                </p>
                <p className="text-neutral-200/70 text-justify">
                  {projectDescription}
                </p>
              </div>
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
