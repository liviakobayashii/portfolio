import SocialIcons from "./social-icons";

export default function Social() {
  return (
    <div className="flex gap-3">
      <SocialIcons
        href="https://www.linkedin.com/in/liviakobayashii"
        icon="mdi:linkedin"
      />
      <SocialIcons
        href="https://github.com/liviakobayashii"
        icon="mdi:github"
      />
      <SocialIcons href="https://wa.me/5514920006436" icon="mdi:whatsapp" />
      <SocialIcons
        href="https://www.facebook.com/liviakobayashii"
        icon="mdi:facebook"
      />
      <SocialIcons
        href="https://www.instagram.com/liviakobayashii"
        icon="mdi:instagram"
      />
    </div>
  );
}
