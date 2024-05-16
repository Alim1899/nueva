const currentYear = new Date().getFullYear();
const years = [
  { id: 0, key: "წელი", value: "" },
];
for (let year = 2010; year <= currentYear; year++) {
  years.push({ value: year, key: year });
}

export const year = years;

export const months = [
  { id: 0, key: "თვე", value: "" },
  { id: 1, key: "იან", value: "იანვარი" },
  { id: 2, key: "თებ.", value: "თებერვალი" },
  { id: 3, key: "მარ.", value: "მარტი" },
  { id: 4, key: "აპრ.", value: "აპრილი" },
  { id: 5, key: "მაი.", value: "მაისი" },
  { id: 6, key: "ივნ.", value: "ივნისი" },
  { id: 7, key: "ივლ.", value: "ივლისი" },
  { id: 8, key: "აგვ.", value: "აგვისტო" },
  { id: 9, key: "სექტ.", value: "სექტემბერი" },
  { id: 10, key: "ოქტ.", value: "ოქტომბერი" },
  { id: 11, key: "ნოემ.", value: "ნოემბერი" },
  { id: 12, key: "დეკ.", value: "დეკემბერი" },
];
