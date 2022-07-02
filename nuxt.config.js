export default {
  head: {
    titleTemplate: '%s - Receitas Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Site de receitas online',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transitions.css',
    '~/assets/css/global.css',
  ],

  plugins: ['~/plugins/strapi', '~/plugins/vee-validate'],

  components: true,

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'jwt',
          global: true,
          type: 'Bearer',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: 'api/auth/local', method: 'post' },
          logout: false,
          user: { url: 'api/users/me', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/',
    },
  },

  apollo: {
    clientConfigs: {
      default: '@/graphql/apollo.config.js',
    },
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  },

  publicRuntimeConfig: {
    baseURL: process.env.API_URL,
  },

  pwa: {
    manifest: {
      name: 'Receitas online',
      short_name: 'Receitas online',
      lang: 'pt-BR',
    },
  },

  loading: {
    color: '#374151',
    failedColor: '#ef4444',
    height: '4px',
    duration: 5000,
  },

  build: {
    transpile: ['vee-validate'],
  },
}
