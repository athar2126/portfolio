import { Icons } from "@/components/icons";
import { style } from "motion/react-client";

export const DATA = {
  navbar: [
    { href: "/blog", icon: Icons.instagram, label: "Instagram" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      Dribbble: {
        name: "Dribbble",
        url: "https://dub.sh/dillion-github",
        icon: Icons.dribbble,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
    },
  },
} as const;

export const imageLogos = [
  { src: "/img/tailwind.svg", alt: "Tailwind", href: "https://tailwindcss.com" },
  { src: "/img/blender.svg", alt: "Blender", href: "https://blender.org" },
  { src: "/img/nextjs.svg", alt: "NextJS", href: "https://nextjs.org" },
  { src: "/img/framer.svg", alt: "Framer", href: "https://framer.com" },
  { src: "/img/webflow.svg", alt: "Webflow", href: "https://webflow.com" },
];

export const imageProjects = [
  { src: "/img/project/breadlious.png", alt: "Breadlious", style: { borderRadius: '10px' } },
  { src: "/img/project/cart.png", alt: "Cart", style: { borderRadius: '10px' } },
  { src: "/img/project/loginpage.png", alt: "LoginPage", style: { borderRadius: '10px' } },
]