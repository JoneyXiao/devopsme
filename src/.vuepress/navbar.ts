import { navbar } from "vuepress-theme-hope";

export default navbar([
  // {
  //   text: "Home",
  //   icon: "house",
  //   prefix: "/",
  //   link: "/",
  // },
  {
    text: "Categories",
    icon: "bx:category",
    children: [
      {
        text: "Categories",
        prefix: "/categories/",
        // children: ["ci-cd/", { text: "CICD", icon: "catppuccin:release", link: "ci-cd/" }],
        children: [
          "ci-cd/",
          "cloud/",
          "containers/",
          "general/",
          "infrastructure/",
          "monitoring/",
          "scripting/",
          "splunk/",
          "terraform/",
        ],
      },
    ],
  },
  {
    text: "About Me",
    icon: "qlementine-icons:resume-16",
    prefix: "/portfolio",
    link: "/portfolio",
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
