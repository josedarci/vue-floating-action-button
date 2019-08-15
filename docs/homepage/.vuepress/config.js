module.exports = {
  base: '/vue-dialog-x/vuepress/',
  title: 'Hello VueFab',
  description: '好用的FloatingActionButton',
  head: [
    ['link', {
      async: 'async',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    }],
    ['link', {
      async: 'async',
      rel: 'stylesheet',
      href: 'http://at.alicdn.com/t/font_808119_6y2mme98u07.css'
    }]
  ],
  dest: 'docs/homepage/dist',
  themeConfig: {
    repo: 'a62527776a/vue-floating-action-button',
    repoLabel: 'Github',
    sidebarDepth: 2,
    sidebar: [
      ['/', '介绍'],
      ['/basic', '基本使用'],
      ['/iconfont', '使用阿里巴巴iconfont']
    ]
  }
}