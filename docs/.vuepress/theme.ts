import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Baileys",
    url: "https://baileys.github.io",
  },

  iconPrefix: "iconfont icon-",

  logo: "/BlogConfig/icon.png",

  repo: "https://github.com/BaileysRock",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  iconAssets: "iconfont",
  fullscreen: true,

  docsRepo: "https://github.com/BaileysRock/baileysrock.github.io.git",
  docsDir: "",
  docsBranch: "master",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Baileys",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView"],

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

    comment: {
      provider: "Waline",
      // requiredMeta:['nick'],
      serverURL: "https://baileys-blog-o00sksdbh-baileysrock.vercel.app",
    },

    mdEnhance: {
      // enableAll: true,
      // tex
      tex: true,
      // 流程图
      mermaid: true,
      flowchart: true,
      // echart图标
      echarts: true,
      // 图表
      chart: true,
      // 启用下角标功能
      // sub: true,
      // 启用上角标
      // sup: true,
      // 任务列表
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      // 启用标记
      mark: true,
      // 脚注
      footnote: true,
      // 自定义容器
      container: true,




      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
