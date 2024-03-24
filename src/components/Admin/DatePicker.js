import React from 'react'

const DatePicker = (props) => {
    const months = [
        {id:1,key:'იან',name:'იანვარი'},
        {id:1,key:'თებ.',name:'თებერვალი'},
        {id:1,key:'მარ.',name:'მარტი'},
        {id:1,key:'აპრ.',name:'აპრილი'},
        {id:1,key:'მაი.',name:'მაისი'},
        {id:1,key:'ივნ.',name:'ივნისი'},
        {id:1,key:'ივლ.',name:'ივლისი'},
        {id:1,key:'აგვ.',name:'აგვისტო'},
        {id:1,key:'სექტ.',name:'სექტემბერი'},
        {id:1,key:'ოქტ.',name:'ოქტომბერი'},
        {id:1,key:'ნოემ.',name:'ნოემბერი'},
        {id:1,key:'დეკ.',name:'დეკემბერი'},
    ]
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1970; year <= currentYear; year++) {
      years.push(year);
    }
  return (
    <div className={props.className} >
    <h4>თარიღი</h4>
    <div><select id='months' name='months' monthref={props.monthref}>
        {months.map(el=>
        <option key={el.key}>{el.name}</option>)}
        
      </select>
      <select id='years' name='years' yearref={props.yearref}>
        {years.map(year =>
          <option key={year}>{year}</option>
        )}
      </select></div>
      
    </div>
  )
}

export default DatePicker
