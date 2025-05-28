import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    // "portfolio",
    {
      text: "Docs",
      icon: "book",
      prefix: "categories/",
      // link: "categories/",
      children: "structure",
    },
  ],
});
