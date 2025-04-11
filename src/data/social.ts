const phone = "5514920006436";
const message = "Olá! Vi seu portfólio e gostaria de conversar!";
const encodedMessage = encodeURIComponent(message);

export const social = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/liviakobayashii",
    icon: "mdi:linkedin",
  },
  {
    name: "Github",
    href: "https://github.com/liviakobayashii",
    icon: "mdi:github",
  },
  {
    name: "Whatsapp",
    href: `https://wa.me/${phone}?text=${encodedMessage}`,
    icon: "mdi:whatsapp",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/liviakobayashii",
    icon: "mdi:facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/liviakobayashii",
    icon: "mdi:instagram",
  },
];
