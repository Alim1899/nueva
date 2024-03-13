import topo from "../../../assets/icons/services/topo.png";
import geodesy from '../../../assets/icons/services/geodesy.png'
import disaster from '../../../assets/icons/services/disaster.png'
import agro from '../../../assets/icons/services/agro.png'
import building from '../../../assets/icons/services/building.png'
import modeling from '../../../assets/icons/services/modeling.png'
import gps from '../../../assets/icons/services/gps.png'


export default function ServiceList () {
  return  [
    [
    { header: "გეოდეზიური მომსახურება" },
    {
      subHeaders: [
        { subhead: "ტერიტორიის დაკვალვა" },
        { subhead: "ტოპოგრაფიული აზომვა" },
        { subhead: "შენობის შიდა აზომვა" },
        { subhead: "ნაყარის მოცულობის დათვლა" },
        { subhead: "საკადასტრო მომსახურება" },
      ],
    },
    { src: geodesy },
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
    { src: topo },
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
    { src: disaster },
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
    { src: agro },
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
    { src: building },
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
    { src: modeling },
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
    { src: gps },
  ],
]
}
