import SocialIcons from "./social-icons";

export default function Social() {
  return (
    <div className="flex gap-3">
      <SocialIcons icon="mdi:facebook" />
      <SocialIcons icon="mdi:instagram" />
      <SocialIcons icon="mdi:whatsapp" />
      <SocialIcons icon="mdi:github" />
      <SocialIcons icon="mdi:linkedin" />
    </div>
  );
}
