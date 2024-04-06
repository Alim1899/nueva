const DatePicker = (props) => {
  const months = [
    { id: 1, key: "იან", name: "იანვარი" },
    { id: 2, key: "თებ.", name: "თებერვალი" },
    { id: 3, key: "მარ.", name: "მარტი" },
    { id: 4, key: "აპრ.", name: "აპრილი" },
    { id: 5, key: "მაი.", name: "მაისი" },
    { id: 6, key: "ივნ.", name: "ივნისი" },
    { id: 7, key: "ივლ.", name: "ივლისი" },
    { id: 8, key: "აგვ.", name: "აგვისტო" },
    { id: 9, key: "სექტ.", name: "სექტემბერი" },
    { id: 10, key: "ოქტ.", name: "ოქტომბერი" },
    { id: 11, key: "ნოემ.", name: "ნოემბერი" },
    { id: 12, key: "დეკ.", name: "დეკემბერი" },
  ];
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2010; year <= currentYear; year++) {
    years.push(year);
  }
  return (
    <div className={props.className}>
      <h4>თარიღი</h4>
      <div>
        <select id="months" ref={props.monthref} name="months">
          <option disabled>აირჩიე თვე</option>
          {months.map((el) => (
            <option key={el.key} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
        <select ref={props.yearref} id="years" name="years">
          <option disabled>აირჩიე წელი</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
