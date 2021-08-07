export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'reto-al-seco',
    htmlAttrs: {
      lang: 'en'
    },
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
  rules: [
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      use: [{
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 1000, // 1kB
          name: 'fonts/[name].[contenthash:7].[ext]'
        }
      }]
    },
    {
      test: /\.pug$/,
      oneOf: [
        {
          exclude: /\.vue$/,
          use: ['raw-loader', 'pug-plain-loader']
        },
        {
          use: ['pug-plain-loader']
        }
      ]
    }
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/sass/index.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: ['./assets/sass/*.sass']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
