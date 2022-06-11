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
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transitions.css',
    '~/assets/css/global.css',
  ],

  plugins: [
    '~/plugins/featherIcons',
    '~/plugins/strapi',
    '~/plugins/vee-validate',
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

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
      login: '/',
      logout: '/',
      callback: '/',
      home: '/',
    },
  },

  axios: {
    baseUrl: 'http://localhost:1337/',
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      },
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
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
