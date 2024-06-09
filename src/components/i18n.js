import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      main: "Main",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
      homeServices: "We Offer A Different Types Of Services",
      faq: "Frequently Asked Questions",
      servicesPage: {
        header: "SERVICES",
        serviceList: {
          geodesy: {
            header: "Geodetic Service",
            subHeader1: "Tracing the territory",
            subHeader2: "Topographic Measurement",
            subHeader3: "Internal measurement of the building",
            subHeader4: "Counting bulk volume",
            subHeader5: "Cadastral services",
          },
        },
      },
      aboutPage: {
        header: "About Us",
        firstParagraph:
          'LLC "Nueva" is a design and surveying institution based in the city of Kutaisi. Its working area covers the western region of Georgia. Our clientele includes municipalities of various cities, sub-agencies of the Ministry, educational institutions, and primarily private organizations. The company actively participates in public procurement tenders and has successfully completed hundreds of state orders worth thousands of GEL.',
        secondParagraph:
          "Our specialists have been involved in numerous high-complexity projects, including the construction of the new terminal at Kutaisi Airport, the new oil refinery in the village of Kulevi, the new road from Baghdati to Abastumani, the Chiaturi Ropeway, and other similar projects. providing design and geodetic supervision.",

        thirdParagraph:
          'Our company has also participated in the assessment and mitigation of various types of natural events, and has designed more than 200 retaining walls and over 300 different categories of roads. We own a wide range of the latest material and technical equipment, including Tacheometer, GPS systems, standard and RTK/multi-spectral drones, and the JPI base station with a 50 km operating radius (commonly known as "Base Rovers"). This equipment is used for geodetic studies of construction sites as well as for the analysis of agricultural conditions.',

        fourthParagraph:
          "LLC \"Nueva\" actively cooperates with professional and higher educational institutions to retrain students and improve training programs. Our specialists have contributed to the development of professional school programs and the enhancement of bachelor's and master's programs in higher education.",
      },
    },
  },
  ge: {
    translation: {
      main: "მთავარი",
      about: "ჩვენს შესახებ",
      services: "სერვისები",
      projects: "პროექტები",
      gallery: "გალერეა",
      contact: "კონტაქტი",
      homeServices: "ჩვენ გთავაზობთ სხვადასხვა ტიპის სერვისს",
      faq: "ხშირად დასმული კითხვები",
      servicesPage: {
        header: "სერვისები",
        serviceList: {
          geodesy: {
            header: "გეოდეზიური მომსახურება",
            subHeader1: "ტერიტორიის დაკვალვა",
            subHeader2: "ტოპოგრაფიული აზომვა",
            subHeader3: "შენობის შიდა აზომვა",
            subHeader4: "ნაყარის მოცულობის დათვლა",
            subHeader5: "საკადასტრო მომსახურება",
          },
        },
      },
      aboutPage: {
        header: "ჩვენს შესახებ",
        firstParagraph:
          "შპს „ნუევა“ წარმოადგენს საპროექტო-საამზომველო დაწესებულებას რომელიც ბაზირებულია ქალაქ ქუთაისში, ხოლო მისი სამუშაო არეალი ფარავს დასავლეთ საქართველოს, მისი დამკვეთები არიან სხვადასხვა ქალაქის მუნიციპალიტეტები, სამინისტრო ქვეუწყებები, საგანმანათლებლო დაწესებულებები და მეტწილად კერძო ორგანიზაციები. კომპანიები აქტიურად მონაწილეობს სახელმწიფო შესყიდვების ფარგლებში გამოცხადებულ ტენდერებში და წარმატებით შესრულებული აქვს ასეულ ათასობით ლარის სახელმწიფო დაკვეთები. ",
        secondParagraph:
          "ჩვენი სპეციალისტები ჩართულები იყვნენ ქუთაისის აეროპორტის ახალი ტერმინალის, სოფელ ყულევში ახალი ნავთობგადამამუშავებელი ქარხნის, ბაღდათი-აბასთუმნის ახალი გზის , ჭიათურის საშევარდნოს გადმოსახედის და სხვა მაღალი სირთულის ობიექტის მშენებლობის პროცესში, პროექტირების და გეოდეზიური ზედამხედველობის მხრივ. ",
        thirdParagraph:
          'ჩვენი კომპანია მონაწილეობდა სხვადასხვა ტიპის სტიქიური მოვლენების შეფასება-ლიკვიდაციის სამუშაოებში და დაპროექტებული აქვს 200 ზე მეტი საყრდენი კედელი და 300 ზე მეტი სხვადასხვა კატეგორიის გზა. კომპანია ფლობს ფართო სპექტრის უახლეს მატერიალურ-ტექნიკურ ბაზას, რაც მოიცავს ტაქეომეტრებს, ჯიპისებს, სტანდარტულ და რტკ /მულტისპქტრულ დრონებს, 50 კმ რადიუსზე მოქმედ ჯიპიეს საბაზო სადგურს (ე.წ. "ბაზა როვერს"). ამ ტექნიკის გამოყენებით ხდება როგორც სამშენებლო ობიექტების გეოდეზიური შესწავლა, ასევე სასოფლო სამეურნეო ობიექტების მდგომარეობის ანალიზი. ',
        fourthParagraph:
          'შპს "ნუევა" აქტიურად თანამშრომლობს პროფესიულ და უმაღლეს სასწავლებლებთან, სტუდენტების გადამზადებისა და სასწავლო პროგრამების დახვეწის კუთხით. სხვადასხვა დროს მისი სპეციალისტები მონაწილეობდნენ პროფესიული სასწავლებლების პროგრამებისა შემუშავებასა და უმაღლესი სასწავლებლის საბაკალავრო და სამაგისტრო პროგრამების დახვეწაში.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem("lng") || "ge",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
