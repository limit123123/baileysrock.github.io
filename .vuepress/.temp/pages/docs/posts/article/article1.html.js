export const data = JSON.parse("{\"key\":\"v-f39dbb64\",\"path\":\"/docs/posts/article/article1.html\",\"title\":\"文章 1\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"docs/posts/article/article1.md\"}")

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
