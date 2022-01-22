import colors from 'vuetify/es5/util/colors'
import { i18n } from './i18n'

export default {
  ssr: false,
  head: {
    titleTemplate: '%s - my-to-do-list',
    title: 'my-to-do-list',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    htmlAttrs: {
      lang: 'pt',
    },
  },
  css: [],
  plugins: ['~/plugins/vuetify.ts'],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/i18n'],
  axios: {
    baseURL: process.env.BASE_URL,
  },
  pwa: {
    manifest: {
      lang: 'pt',
    },
  },
  i18n,
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.purple.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.purple.lighten5,
          warning: colors.amber.base,
          error: colors.red.lighten1,
          success: colors.green.accent3,
        },

        light: {
          primary: colors.purple.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.purple.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  srcDir: './src',
  build: {},
}
