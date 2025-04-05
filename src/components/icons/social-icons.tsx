import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  href: string;
  icon: string;
};

export default function SocialIcons({ href, icon }: Props) {
  return (
    <Link href={href} target="_blank">
      <button className="bg-fuchsia-600 p-3 rounded-sm cursor-pointer hover:bg-fuchsia-700 duration-200">
        <Icon icon={icon} className="size-5" />
      </button>
    </Link>
  );
}
