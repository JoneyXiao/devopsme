import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "DevOpsMe",
  // description: "A comprehensive collection of DevOps interview questions and answers to help you prepare for technical interviews",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  // JetBrains Mono Font Family
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
});
