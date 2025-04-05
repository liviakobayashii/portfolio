import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  icon: string;
  description: string;
};

export default function IconSkills({ icon, description }: Props) {
  return (
    <div className="flex flex-col justify-center items-center border border-fuchsia-600 rounded-sm p-2 cursor-pointer duration-200 hover:text-fuchsia-600">
      <Icon icon={icon} className="size-10" />
      <p className="text-sm">{description}</p>
    </div>
  );
}
