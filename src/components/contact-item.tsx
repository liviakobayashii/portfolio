import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function ContactItem({ icon, title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Icon icon={icon} className="size-6 text-fuchsia-600" />
      <div>
        <p className="font-bold text-xl">{title}</p>
        <p className="text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
}
