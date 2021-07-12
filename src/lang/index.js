import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...elementEnLocale,
    ...enLocale
  },
  'zh-CN': {
    ...elementZhLocale,
    ...zhLocale
  }
}
let initLanguage = Cookies.get('TS-language') || (window.navigator.language || window.navigator.browserLanguage)
if (!Object.keys(messages).includes(initLanguage)) {
  initLanguage = 'en'
}

const i18n = new VueI18n({
  locale: initLanguage,
  messages
})

export default i18n
