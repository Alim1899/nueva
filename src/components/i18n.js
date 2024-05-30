import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      main: "Main",
      about:"About Us",
      services:"Services",
      projects:"Projects",
      gallery:"Gallery",
      contact:"Contact"
    }
  },
  ge: {
    translation: {
      main:"მთავარი",
      about:"ჩვენს შესახებ",
      services:"სერვისები",
      projects:"პროექტები",
      gallery:"გალერეა",
      contact:"კონტაქტი"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ge", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;