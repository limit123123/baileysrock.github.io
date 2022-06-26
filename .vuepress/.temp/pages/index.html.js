export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"Home\",\"heroImage\":\"/BlogConfig/icon.png\",\"heroText\":\"Baileys\",\"heroFullScreen\":true,\"tagline\":\"Dancing with your ghost.\",\"projects\":[{\"icon\":\"physics\",\"name\":\"学校课程\",\"desc\":\"学校相关课程及课程实验\",\"link\":\"/articles/CollegeLessons\"},{\"icon\":\"table\",\"name\":\"机器学习\",\"desc\":\"机器学习、模式识别、可解释性、数据处理\",\"link\":\"/articles/MachineLearning\"},{\"icon\":\"news\",\"name\":\"自然语言处理\",\"desc\":\"自然语言处理相关\",\"link\":\"/articles/NaturalLanguageProcessing\"},{\"icon\":\"script\",\"name\":\"深度学习\",\"desc\":\"深度学习相关\",\"link\":\"/articles/DeepLearning\"},{\"icon\":\"shell\",\"name\":\"开发\",\"desc\":\"开发相关\",\"link\":\"/articles/Development\"},{\"icon\":\"edit\",\"name\":\"随笔\",\"desc\":\"一些个人的随笔\",\"link\":\"/articles/Essays\"}],\"footer\":\"Baileys\",\"copyright\":false},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"README.md\"}")

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
