import { useTranslation } from "react-i18next";

export default function ServiceList() {
  const { t } = useTranslation();
  return [
    [
      { header: t("servicesPage.serviceList.geodesy.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.geodesy.subHeader1") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader2") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader3") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader4") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader5") },
        ],
      },
    ],
    [
      { header: "პროექტირება" },
      {
        subHeaders: [
          { subhead: "საავტომობილო გზები" },
          { subhead: "სკვერები და პარკები" },
          { subhead: "წყალმომარაგების ქსელები" },
          { subhead: "საკანალიზაციო ქსელები" },
          { subhead: "სანიაღვრე სისტემები" },
        ],
      },
    ],
    [
      { header: "სტიქიური მოვლენების შეფასება და პრევენცია" },
      {
        subHeaders: [
          { subhead: "საყრდენი კედლების მოწყობა" },
          { subhead: "ნაპირსამაგრი სამუშაოების პროექტირება" },
          { subhead: "ქვათაცვენა-კლდეზვავის მოდელირება" },
          { subhead: "მეწყრების და ღვარცოფების მოდელირება" },
          { subhead: "პროცესის პერმანენტული მონიტორინგი" },
        ],
      },
    ],
    [
      { header: "აგრარული მეურნეობების ანალიზი" },
      {
        subHeaders: [
          { subhead: "ნარგავების რაოდენობის დათვლა" },
          { subhead: "ნარგავების მდგომარეობის შეფასება " },
          { subhead: "განაშენიანების ოპტიმალური გეგმის შედგენა" },
          { subhead: "წყლის პრობლემის/დაჭაობების მიზეზების შესწავლა" },
        ],
      },
    ],
    [
      { header: "სამშენებლო სამუშაოების კონსულტირება" },
      {
        subHeaders: [
          { subhead: "სამშენებლო დოკუმენტაციის წარმოება (ფორმა 2)" },
          { subhead: "სამუშაოს მოცულობების დათვლა  " },
          { subhead: "სამუშაოების განფასება снип-ებით" },
          { subhead: "პროექტში კორექტირების პაკეტების მომზადება" },
          { subhead: "სამშენებლო სამუშაოების ზედამხედველობა" },
        ],
      },
    ],
    [
      { header: "პროგრამული ანალიზი  და მოდელირება" },
      {
        subHeaders: [
          { subhead: "მონაცემების სივრცული მოდელირება CIVIL 3D-ში" },
          { subhead: "მონაცემების ანალიზი ARCGIS PRO-ში  " },
          { subhead: "ქვათაცვენის მოდელირება ROCKY 3D-ში. " },
          { subhead: "ორთოფოტოების დამზადება PIX4Dmapper-ში" },
        ],
      },
    ],
    [
      { header: "ინდივიდუალური მომსახურება საამზომველო ტექნიკით" },
      {
        subHeaders: [
          { subhead: "GeoCORS სისტემაში ჩართული Stonexის RTK ჯიპიესებით " },
          { subhead: "საბაზო სადგური  გარე რადიოთი (დაფარვა 50კმ)" },
          { subhead: "საბაზო სადგური  შიდა რადიოთი (დაფარვა 5კმ)" },
          { subhead: "Leicaს ბრენდის ტაქეომეტრებით მომსახურება" },
          { subhead: "აერო გადაღება RTK მულტისპეკტრული დრონით " },
        ],
      },
    ],
  ];
}
