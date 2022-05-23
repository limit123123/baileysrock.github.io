import { defineThemeConfig } from "vuepress-theme-hope";
const { hopeTheme } = require("vuepress-theme-hope");
import navbar from "./navbar";
import sidebar from "./sidebar";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineThemeConfig({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Baileys",
    url: "https://baileys.github.io",
  },

  iconPrefix: "iconfont icon-",

  logo: "/BlogConfig/icon.png",

  repo: "https://github.com/BaileysRock",

  
  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "计算机科学与技术 人工智能方向在读大三学生",
    intro: "/home.html",
    medias: {
      Email: "https://xiong257246@outlook.com",
      GitHub: "https://github.com/BaileysRock",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["020406"],
    },
  },



  plugins: {

    blog: {
      autoExcerpt: true,
    },
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      // type: "giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      type: "waline",
      serverURL: "https://baileys-blog-o00sksdbh-baileysrock.vercel.app",
    },

    mdEnhance: {
      tex: true,
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
