import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Yatori',
  // description: 'This is a new generation of course management software.',
  description: '这是一个新一代在线课程管理系统',
  base: '/yatori-docs/',
  head: [
    [
      'link', {rel: 'icon', href: 'https://raw.githubusercontent.com/yatori-dev/.github/refs/heads/main/profile/1710254379397-modified.png'}
    ]
  ],
  theme: defaultTheme({
    logo: 'https://raw.githubusercontent.com/yatori-dev/.github/refs/heads/main/profile/1710254379397-modified.png',

    navbar: ['/','/yatori-go-console/docs','/yatori-go-core/docs'],
  }),

  bundler: viteBundler(),
})
