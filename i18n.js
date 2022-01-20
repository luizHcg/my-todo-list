import ptBr from './src/controller/config/lang/pt'
import en from './src/controller/config/lang/en'

module.exports = {
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
    vueI18n: {
      fallbackLocale: 'pt-BR',
      messages: {
        en,
        pt: ptBr,
      },
    },
  },
}
