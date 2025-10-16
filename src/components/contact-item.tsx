import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function ContactItem({ icon, title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <Icon icon={icon} className="size-6 lg:size-7 text-fuchsia-600" />
      <div>
        <p className="font-bold text-xl text-neutral-200">{title}</p>
        <p className="text-neutral-200/70">{subtitle}</p>
      </div>
    </div>
  );
}
