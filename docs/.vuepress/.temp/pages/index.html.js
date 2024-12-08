import comp from "E:/Yatori-Dev/yatori-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/img/logo.png\",\"actions\":[{\"text\":\"获取yatori-go-console\",\"link\":\"https://github.com/yatori-dev/yatori-go-console\",\"type\":\"primary\"},{\"text\":\"获取yatori-go-core\",\"link\":\"https://github.com/yatori-dev/yatori-go-core\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://www.github.com/yatori-dev\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"独立程序\",\"details\":\"不依赖可视化浏览器，可在后台运行，可部署服务器。\"},{\"title\":\"AI加持\",\"details\":\"AI自动识别验证码以及AI自动答题。\"},{\"title\":\"多账号\",\"details\":\"支持多个账号同时进行。\"},{\"title\":\"灵活配置文件\",\"details\":\"配置文件采用json进行规范化配置可进行自定义相关独立账号配置。\"},{\"title\":\"邮箱通知\",\"details\":\"可进行配置邮箱通知功能，学习完毕自动发送邮箱进行通知。\"},{\"title\":\"部分支持暴力模式\",\"details\":\"部分平台支持所有章节同时进行，尽可能效率最大化。\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Yatori Community\"},\"headers\":[],\"git\":{\"updatedTime\":1732777460000,\"contributors\":[{\"name\":\"Changbaiqi\",\"email\":\"changbaiqi@foxmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

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
