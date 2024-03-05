import React, { useState, useEffect, useCallback } from "react";
import leftSlide from "../../../../assets/icons/leftslide.svg";
import rightSlide from "../../../../assets/icons/rightslide.svg";
import scr1 from "../../../../assets/photos/scr1.png";
import scr3 from "../../../../assets/photos/scr3.png";
import scr4 from "../../../../assets/photos/scr4.png";

import classes from "./Slider.module.css";

const Slider = () => {
  const [showFirstSlide, setShowFirstSlide] = useState(true);
  const [showSecondSlide, setShowSecondSlide] = useState(false);
  const [showThirdSlide, setShowThirdSlide] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const slider = useCallback(() => {
    if (activeSlide === 1) {
      setShowFirstSlide(true);
      setShowSecondSlide(false);
      setShowThirdSlide(false);
    } else if (activeSlide === 2) {
      setShowFirstSlide(false);
      setShowSecondSlide(true);
      setShowThirdSlide(false);
    } else if (activeSlide === 3) {
      setShowFirstSlide(false);
      setShowSecondSlide(false);
      setShowThirdSlide(true);
    } else {
      if (activeSlide >= 4) {
        setActiveSlide(1);
      } else if (activeSlide <= 0) {
        setActiveSlide(3);
      }
    }
  }, [activeSlide]);

  requestAnimationFrame(slider);
  useEffect(() => {
    slider();
    const timer = setTimeout(() => {
      setActiveSlide(activeSlide + 1);
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlide, slider]);

  const changeByButtons = (e) => {
    if (e.target.id === "left") {
      setActiveSlide((prevSlide) => (prevSlide <= 1 ? 3 : prevSlide - 1));
    } else if (e.target.id === "right") {
      setActiveSlide((prevSlide) => (prevSlide >= 3 ? 1 : prevSlide + 1));
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.slider}>
        <img
          alt="leftArrow"
          id="left"
          onClick={changeByButtons}
          className={classes.leftArrow}
          src={leftSlide}
        ></img>
        <div className={classes.content}>
          <h1 className={classes.head}>
            ჩვენ გთავაზობთ სხვადასხვა ტიპის სერვისს
          </h1>
          {showFirstSlide && (
            <img className={classes.slide} src={scr1} alt="screen"></img>
          )}
          {showSecondSlide && (
            <img className={classes.slide} src={scr4} alt="screem"></img>
          )}
          {showThirdSlide && (
            <img className={classes.slide} src={scr3} alt="screem"></img>
          )}
          <ul className={classes.dots}>
            <li onClick={() => setActiveSlide(1)} id="1"></li>
            <li onClick={() => setActiveSlide(2)} id="2"></li>
            <li onClick={() => setActiveSlide(3)} id="3"></li>
          </ul>
        </div>
        <img
          onClick={changeByButtons}
          id="right"
          alt="rightArrow"
          className={classes.rightArrow}
          src={rightSlide}
        ></img>
      </div>
    </div>
  );
};

export default Slider;
