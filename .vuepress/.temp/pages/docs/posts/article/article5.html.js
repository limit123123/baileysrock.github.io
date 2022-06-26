export const data = JSON.parse("{\"key\":\"v-e5f6f66c\",\"path\":\"/docs/posts/article/article5.html\",\"title\":\"文章 5\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-05T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag A\",\"tag B\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"docs/posts/article/article5.md\"}")

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
