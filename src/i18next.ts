import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/public/locales/en/translation.json'
import ru from '@/public/locales/ru/translation.json'

//empty for now
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
})

export default i18n
