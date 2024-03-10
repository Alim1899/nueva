import classes from "./Services.module.css";
import Navbar from "../../Navbar/Navbar";
import ServiceList from "./ServiceList";
const Services = () => {
  const data = ServiceList();
console.log(data[0]);
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.services}>
        <h2 className={classes.heading}>სერვისების ჩამონათვალი</h2>
        <div className={classes.list}>
          {data.map((el) => {
            return (
              <div className={classes.service} key={Math.random()}>
                <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                <ul className={classes.unordered}>
                 {el[1].subHeaders.map(item=>{
                  return <li className={classes.listItem} key={Math.random()}>{item.subhead}</li>
                 })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default Services;
