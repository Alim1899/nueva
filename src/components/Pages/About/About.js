import React from "react";
import classes from "./About.module.css";
import { useTranslation } from "react-i18next";
import kutaisi from '../../../assets/photos/about/Kutaisi.png'
import drone from '../../../assets/photos/about/drone.png'
import learn from '../../../assets/photos/about/learn.png'
import airport from '../../../assets/photos/about/airport.png'


const About = () => {
  const {t} = useTranslation()
  return (
    <div className={classes.main}>
  <h1 className={classes.header}>{t('aboutPage.header')}</h1>
      <div className={classes.content}>
        <div className={classes.section}>
          <img src={kutaisi} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.firstParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
        <img src={airport} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.secondParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
          <img src={drone} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.thirdParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
          <img src={learn} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.fourthParagraph')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
