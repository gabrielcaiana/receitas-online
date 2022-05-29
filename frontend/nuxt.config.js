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

  css: ['~/assets/css/tailwind.css', '~/assets/css/transitions.css'],

  plugins: ['~/plugins/featherIcons', '~/plugins/strapi'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo'],

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

  build: {},
}
