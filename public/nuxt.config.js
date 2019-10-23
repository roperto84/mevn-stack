const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin:"anonymous" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#f00" },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@plugins/vue-notifications', ssr: false },
    { src: '@plugins/vuejs-dialog', ssr: false },
    { src: '@plugins/mixins/validation'},
    { src: '@plugins/mixins/user'},
    { src: '@plugins/mixins/notification'},
    { src: '@plugins/axios'},
    { src: '@plugins/repository'},
    { src: '@plugins/persistedState', ssr: false }
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4100/api/'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'admin/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'admin/me', method: 'get', propertyName: false
          },
          //user: false,
          logout: false
        }
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/dashboard'
    },
    plugins: [
      './plugins/auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "@nuxtjs/auth"
  ],
  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: true // or `bvCSS`
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:4100/api'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {}
  }
};
