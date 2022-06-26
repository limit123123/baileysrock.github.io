export const data = JSON.parse("{\"key\":\"v-79fdd481\",\"path\":\"/home.html\",\"title\":\"About Me\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"people\",\"title\":\"About Me\",\"heroImage\":\"/BlogConfig/icon.png\",\"heroText\":\"个人简介\",\"tagline\":\"About me...\",\"actions\":[{\"text\":\"博客主页 🏠\",\"link\":\"/\"},{\"text\":\"GitHub 💡\",\"link\":\"https://github.com/BaileysRock\",\"type\":\"secondary\"}],\"copyright\":false,\"footer\":\"Baileys\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"home.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
