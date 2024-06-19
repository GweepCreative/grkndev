import {
  Github,
  LinkedinIcon,
  InstagramIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Store,
  Wand2Icon,
  BookmarkIcon,
  ArmchairIcon,
  Mail,
} from "lucide-react";
import { title } from "process";

export const TECS = {
  js:{
    title: "JavaScript",
    icon: "https://skillicons.dev/icons?i=js&theme=light"
  },
  react:{
    title: "React",
    icon: "https://skillicons.dev/icons?i=react&theme=light"
  },
  ts:{
    title: "TypeScript",
    icon: "https://skillicons.dev/icons?i=typescript&theme=light"
  },
  node:{
    title: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs&theme=light"
  },
  next:{
    title: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs&theme=light"
  },
  express:{
    title: "Express",
    icon: "https://skillicons.dev/icons?i=express&theme=light"
  },
  mongo:{
    title: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb&theme=light"
  },
  mysql:{
    title: "MySQL",
    icon: "https://skillicons.dev/icons?i=mysql&theme=light"
  },
  firebase:{
    title: "Firebase",
    icon: "https://skillicons.dev/icons?i=firebase&theme=light"
  },
  postgres:{
    title: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgresql&theme=light"
  },
  graphql:{
    title: "GraphQL",
    icon: "https://skillicons.dev/icons?i=graphql&theme=light"
  },
  csharp:{
    title: "C#",
    icon: "https://skillicons.dev/icons?i=cs&theme=light"
  },
  python:{
    title: "Python",
    icon: "https://skillicons.dev/icons?i=python&theme=light"
  },
  cpp:{
    title: "C++",
    icon: "https://skillicons.dev/icons?i=cpp&theme=light"
  },
  arduino:{
    title: "Arduino",
    icon: "https://skillicons.dev/icons?i=arduino&theme=light"
  },
  html:{
    title: "HTML",
    icon: "https://skillicons.dev/icons?i=html&theme=light"
  },
  css:{
    title: "CSS",
    icon: "https://skillicons.dev/icons?i=css&theme=light"
  },
  tailwind:{
    title: "Tailwind CSS",
    icon: "https://skillicons.dev/icons?i=tailwindcss&theme=light"
  },
  git:{
    title: "Git",
    icon: "https://skillicons.dev/icons?i=git&theme=light"
  },
  figma:{
    title: "Figma",
    icon: "https://skillicons.dev/icons?i=figma&theme=light"
  },


}
export const PROFILES = {
  Mail: {
    title: "info@grkn.dev",
    url: "mailto:info@grkn.dev",
    icon: <Mail size={16} />,
  },
  twitter: {
    title: "X (Twitter)",
    username: "grkndev",
    url: "https://twitter.com/intent/user?screen_name=grkndev",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  github: {
    title: "GitHub",
    url: "https://github.com/GweepCreative",
    icon: <Github size={16} />,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/grkndev",
    icon: <LinkedinIcon size={16} />,
  },
  bionluk: {
    title: "Bionluk",
    url: "https://www.bionluk.com/gweepcreative",
    icon: <Store size={16} />,
  },
};

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <SparklesIcon size={16} />,
  },
  {
    href: "/writing",
    label: "Writing",
    icon: <PencilLineIcon size={16} />,
  },
  {
    href: "/journey",
    label: "Journey",
    icon: <NavigationIcon size={16} />,
  },
  {
    href: "/stack",
    label: "Stack",
    icon: <Wand2Icon size={16} />,
  },
  {
    href: "/workspace",
    label: "Workspace",
    icon: <ArmchairIcon size={16} />,
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: <BookmarkIcon size={16} />,
  },
];

export const WORKSPACE_ITEMS = [
  {
    title: "Richard Lampert Eiermann 2 Desk",
    url: "https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/",
    specs: "White, 80x160cm",
  },
  {
    title: "Herman Miller Aeron Remastered",
    url: "https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html",
    specs: "Graphite, Size C",
  },
  {
    title: "Apple Studio Display",
    url: "https://www.apple.com/nl/studio-display/",
    specs: "Tilt- and height-adjustable stand",
  },
  {
    title: '14" MacBook Pro',
    url: "https://www.apple.com/nl/macbook-pro/",
    specs: "Space Gray, M2, 16GB RAM, 256GB SSD",
  },
  {
    title: "Apple Magic Trackpad",
    url: "https://www.apple.com/nl/shop/product/MK2D3Z/A/magic-trackpad-wit-multi%E2%80%91touch-oppervlak",
    specs: "White",
  },
  {
    title: "Apple Magic Keyboard",
    url: "https://www.apple.com/nl/shop/product/MK293N/A/magic-keyboard-met-touch-id-voor-mac-modellen-met-apple-silicon-nederlands",
    specs: "White, Touch ID",
  },
  {
    title: "Logitech MX Master 3S",
    url: "https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html",
    specs: "Pale Gray",
  },
  {
    title: "Dyson Solarcycle Morph",
    url: "https://www.dyson.nl/verlichting/bureaulamp/solarcycle-morph-cd06/wit-zilver",
    specs: "White/Silver",
  },
  {
    title: "Apple Airpods Max",
    url: "https://www.apple.com/nl/airpods-max/",
    specs: "Space Gray",
  },
  {
    title: "Apple Airpods Pro",
    url: "https://www.apple.com/nl/airpods-pro/",
    specs: "2nd generation",
  },
  {
    title: "Braun Analogue Wall Clock",
    url: "https://braun-clocks.com/collections/wall-clocks/products/bc17-classic-large-analogue-wall-clock-white",
    specs: "White, BC17 Classic Large",
  },
  {
    title: "IKEA Alex Drawer Unit",
    url: "https://www.ikea.com/nl/en/p/alex-drawer-unit-white-00473546/",
    specs: "White, 36x70cm",
  },
  {
    title: "IKEA Övning Footrest",
    url: "https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/",
    specs: "Gray/Blue",
  },
];

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;
export const SUPABASE_TABLE_NAME = "pages";

export const SUBMIT_BOOKMARK_FORM_TITLE = "Submit a bookmark";
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day.";
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5;
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = "formSubmissionCount";

export const CONTENT_TYPES = {
  PAGE: "page",
  POST: "post",
  LOGBOOK: "logbook",
};

export const STORE = [
  {
    img: "https://bgcp.bionluk.com/images/portfolio/1400x788/818d2dff-7f34-45a6-a0a9-91d291cb6931.jpg",
    title: "I can create a QR menu for your restaurant",
    price: "3000",
    description:
      "QR Script, unlimited pages, unlimited categories, unlimited products, admin panel, domain, and more.",
    url: "https://bionluk.com/gweepcreative/isletmenize-ozel-qr-menu-sitesi-hazirlayabilirim-678907",
    provider: "Bionluk",
    priceList: {
      basic: "3000",
      standard: "4000",
      premium: "4500",
    },
  },

  {
    img: "https://bgcp.bionluk.com/images/portfolio/1400x788/ca400014-8540-421e-a295-5a5b0ab22afa.jpg",
    title: "I can make a desktop application with c# for you",
    price: "1500",
    description: "I can make a desktop application with c# for you.",
    url: "https://bionluk.com/gweepcreative/isletmenize-ozel-qr-menu-sitesi-hazirlayabilirim-678907",
    provider: "Bionluk",
    priceList: {
      Standart: "1500",
    },
  },

  {
    img: "https://bgcp.bionluk.com/images/portfolio/1400x788/e93d29c9-0cee-4c36-94d4-27103a270cb3.png",
    title: "I can make minecraft launcher for you guys.",
    price: "1200",
    description: "I can make minecraft launcher for you guys.",
    url: "https://bionluk.com/gweepcreative/sizlerin-icin-minecraft-launcher-yapabilirim-562557",
    provider: "Bionluk",
    priceList: {
      Standart: "1200",
    },
  },
];
