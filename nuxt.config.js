export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xingkong',
    htmlAttrs: {
      lang: 'en'
    },
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-115408988-1',
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-115408988-1');
      `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      // 清空数组
      routes.splice(0)
      // 插入新的路由配置
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/index')
      })
      routes.push({
        name: 'detail',
        path: '/detail/:id',
        component: resolve(__dirname, 'pages/detail/id.vue')
      })
    }
  },
  loading: {
    color: 'blue',
    height: '5px'
  }
}
