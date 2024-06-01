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
      contact:"Contact",
      homeServices:"We Offer A Different Types Of Services",
      faq:"Frequently Asked Questions",
      servicesPage:{
        header:'Services',
        serviceList:{
          geodesy:{
            header:"Geodetic Service",
            subHeader1:"Tracing the territory",
            subHeader2:"Topographic Measurement",
            subHeader3:"Internal measurement of the building",
            subHeader4:"Counting bulk volume",
            subHeader5:"Cadastral services"
          }
        }
      },
      
    }
  },
  ge: {
    translation: {
      main:"მთავარი",
      about:"ჩვენს შესახებ",
      services:"სერვისები",
      projects:"პროექტები",
      gallery:"გალერეა",
      contact:"კონტაქტი",
      homeServices:"ჩვენ გთავაზობთ სხვადასხვა ტიპის სერვისს",
      faq:"ხშირად დასმული კითხვები",
      servicesPage:{
        header:'სერვისები',
        serviceList:{
          geodesy:{
            header:"გეოდეზიური მომსახურება",
            subHeader1:"ტერიტორიის დაკვალვა",
            subHeader2:"ტოპოგრაფიული აზომვა",
            subHeader3:"შენობის შიდა აზომვა",
            subHeader4:"ნაყარის მოცულობის დათვლა",
            subHeader5:"საკადასტრო მომსახურება"
          }
  
        }
      },
      
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: sessionStorage.getItem("lng"), 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;