import pt from './src/controller/config/lang/pt'
import en from './src/controller/config/lang/en'

module.exports = {
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'pt',
      messages: {
        en,
        pt,
      },
    },
  },
}
