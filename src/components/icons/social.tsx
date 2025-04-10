import { social } from "@/data/social";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Social() {
  return (
    <div className="flex gap-3">
      {social.map((item, i) => (
        <Link key={i} href={item.href} target="_blank">
          <button className="bg-fuchsia-600 p-3 rounded-sm cursor-pointer hover:bg-fuchsia-700 duration-200">
            <Icon icon={item.icon} className="size-5 text-neutral-200" />
          </button>
        </Link>
      ))}
    </div>
  );
}
