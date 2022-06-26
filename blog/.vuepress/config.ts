import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Baileys",
  description: "Baileys的博客",

  base: "/",
  
  // head: [
  //   [
  //     "link",
  //     {
  //       rel: "stylesheet",
  //       href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
  //     },
  //   ],
  // ],

  theme,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
