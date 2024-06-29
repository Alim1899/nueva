import { useState } from "react";
import classes from "./Home.module.css";
import Slider from "./Slider/Slider";
import ServiceList from "../Services/ServiceList";
import up from "../../../assets/home/up.svg";
import down from "../../../assets/home/down.svg";
import { useTranslation } from "react-i18next";
import services from "../../../assets/home/services.svg";
const Home = () => {
  const { t } = useTranslation();
  const [extendedIndex, setExtendedIndex] = useState(null);
  const data = ServiceList();

  const extend = (index) => {
    if (index === extendedIndex) {
      setExtendedIndex(null); // Collapse if the same index is clicked again
    } else {
      setExtendedIndex(index); // Extend the new index and collapse the previous one
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.services}>
          <h2 className={classes.header}>
            <img className={classes.icon} alt="services" src={services}></img>
            {t("homePage.offers")}
          </h2>
          {data.map((el, index) => {
            const isExtended = index === extendedIndex;
            return (
              <div className={classes.service} key={index}>
                <div className={classes.collapsed}>
                  <a href="/services">
                    <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                  </a>
                  <button className={classes.downArrow} type="button">
                    <img
                      className={classes.down}
                      onClick={() => extend(index)}
                      alt="down"
                      src={isExtended ? up : down}
                    />
                  </button>
                </div>
                {isExtended && (
                  <div className={classes.extend}>
                    <ul>
                      {el[1].subHeaders.map((item, subIndex) => {
                        return (
                          <li
                            className={classes.listItem}
                            onClick={() => extend(index)}
                            key={subIndex}
                          >
                            {item.subhead}
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      className={classes.upArrow}
                      onClick={() => extend(index)}
                    >
                      <img className={classes.up} src={up} alt="up" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
