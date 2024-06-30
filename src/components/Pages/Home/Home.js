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
  const [isServiceListVisible, setIsServiceListVisible] = useState(true);
  const data = ServiceList();

  const extend = (index) => {
    setExtendedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleServiceListVisibility = () => {
    setIsServiceListVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.services}>
          <h2 className={classes.header}>
            <div className={classes.iconWrapper}>
              <img
                className={classes.icon}
                alt="Services icon"
                src={services}
                onClick={toggleServiceListVisibility}
              />
            </div>
            <span className={classes.text}>{t("homePage.offers")}</span>
          </h2>
          <div
            className={
              isServiceListVisible
                ? classes.serviceList
                : `${classes.serviceList} ${classes.serviceListHidden}`
            }
          >
            {data.map((el, index) => {
              const isExtended = index === extendedIndex;
              return (
                <div className={classes.service} key={index}>
                  <div className={classes.collapsed}>
                    <a href="/services">
                      <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                    </a>
                    <button
                      className={classes.downArrow}
                      type="button"
                      onClick={() => extend(index)}
                      aria-expanded={isExtended}
                    >
                      <img
                        className={classes.down}
                        alt={isExtended ? "Collapse" : "Expand"}
                        src={isExtended ? up : down}
                      />
                    </button>
                  </div>
                  {isExtended && (
                    <div className={classes.extend}>
                      <ul>
                        {el[1].subHeaders.map((item, subIndex) => (
                          <li
                            className={classes.listItem}
                            key={subIndex}
                            onClick={() => extend(index)}
                          >
                            {item.subhead}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={classes.upArrow}
                        onClick={() => extend(index)}
                        aria-label="Collapse"
                      >
                        <img className={classes.up} src={up} alt="Collapse" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
