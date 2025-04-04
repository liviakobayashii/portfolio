import { Icon } from "@iconify/react";

type Props = {
  icon: string;
};

export default function SocialIcons({ icon }: Props) {
  return (
    <button className="bg-fuchsia-600 p-3 rounded-sm">
      <Icon icon={icon} className="size-5" />
    </button>
  );
}
