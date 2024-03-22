import classes from "./Services.module.css";
import ServiceList from "./ServiceList";
import down from "../../../assets/icons/services/down.svg";
import up from "../../../assets/icons/services/up.svg";

const Services = () => {
  const data = ServiceList();
  const extend = (e) => {
    const childNodes = e.currentTarget.parentNode.childNodes;
    childNodes[3].style.display = "block";
    document.body.style.overflow = "hidden";
  };
  const collapse = (e) => {
    const childNodes = e.currentTarget.parentNode.parentNode;
    childNodes.style.display = "none";
    document.body.style.overflow = "auto";
  };
  return (
    <div className={classes.main}>
      <div className={classes.services}>
        <h2 className={classes.header}>სერვისების ჩამონათვალი</h2>
        <div className={classes.serviceList}>
          {data.map((el) => {
            return (
              <div className={classes.service} key={Math.random()}>
                <img className={classes.icon} src={el[2].src} alt="img"></img>
                <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                <button
                  className={classes.downArrow}
                  onClick={extend}
                  type="button"
                >
                  <img className={classes.down} alt="down" src={down}></img>
                </button>
                <div className={classes.collapse}>
                  <ul>
                    {el[1].subHeaders.map((item) => {
                      return (
                        <li className={classes.listItem} key={Math.random()}>
                          {item.subhead}
                        </li>
                      );
                    })}
                    <button className={classes.upArrow} onClick={collapse}>
                      <img className={classes.up} src={up} alt="up"></img>{" "}
                    </button>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default Services;
