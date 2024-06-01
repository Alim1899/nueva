import React, { useState } from "react";
import down from "../../../assets/icons/services/down.svg";
import up from "../../../assets/icons/services/up.svg";
import ServiceList from "./ServiceList";
import classes from "./Services.module.css";
import { useTranslation } from "react-i18next";
const Services = () => {
  const {t} = useTranslation();
  const [showExtended, setShowExtended] = useState([]);
  const data = ServiceList();

  const extend = (index) => {
    const newShowExtended = [...showExtended];
    newShowExtended[index] = !newShowExtended[index];
    setShowExtended(newShowExtended);
  };

  return (
    <div className={classes.main}>
      <div className={classes.services}>
        <h2 className={classes.header}>{t("servicesPage.header")}</h2>
        <div className={classes.serviceList}>
          {data.map((el, index) => {
            return (
              <div className={classes.service} key={index}>
                <div className={classes.collapsed}>
                  <img className={classes.icon} src={el[2].src} alt="img" />
                  <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                  <button
                    className={classes.downArrow}
                    onClick={() => extend(index)}
                    type="button"
                  >
                    <img className={classes.down} alt="down" src={down} />
                  </button>
                </div>

                {showExtended[index] && (
                  <div className={classes.extend}>
                    <ul>
                      {el[1].subHeaders.map((item, subIndex) => {
                        return (
                          <li className={classes.listItem} key={subIndex}>
                            {item.subhead}
                          </li>
                        );
                      })}
                      <button
                        className={classes.upArrow}
                        onClick={() => extend(index)}
                      >
                        <img className={classes.up} src={up} alt="up" />
                      </button>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

