import {Questions} from './Quiestions'
import classes from "./FAQ.module.css";
import up from "../../../../assets/icons/up.svg"
import down from "../../../../assets/icons/down.svg"
import { useState } from "react";

const FAQ = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const clickHandler = (e) => {
    if (e.target.id === "1") {
      setTimeout(() => {
        setShowFirst(!showFirst);
        setShowSecond(false);
        setShowThird(false);
      }, 200);
    } else if (e.target.id === "2") {
      setTimeout(() => {
        setShowSecond(!showSecond);
        setShowFirst(false);
        setShowThird(false);
      }, 200);
    } else if (e.target.id === "3") {
      setTimeout(() => {
        setShowThird(!showThird);
        setShowSecond(false);
        setShowFirst(false);
      }, 200);
    }
  };
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.faq}>
          <h2 className={classes.contentHeader}>
            ხშირად დასმული კითხვები
            <span className={classes.allQuest}>ყველა კითხვა</span>
          </h2>

          <div className={classes.question}>
            <h6
              onClick={clickHandler}
              id={Questions[0].id}
              className={classes.quest1}
            >
              {Questions[0].question}
              <img
                alt="carret"
                className={classes.svg}
                src={showFirst ? up : down}
              ></img>
            </h6>
            {showFirst && (
              <div className={classes.answer}>
                {" "}
                <p className={classes.header}>{Questions[0].answer.header}</p>
                <div className={classes.steps}>
                  <h5 className={classes.step}>
                    <span className={classes.span}>
                      {Questions[0].answer.step1.step}
                    </span>
                    {Questions[0].answer.step1.text}
                  </h5>
                  <h5 className={classes.step}>
                    <span className={classes.span}>
                      {Questions[0].answer.step2.step}
                    </span>
                    {Questions[0].answer.step2.text}
                  </h5>
                  <h5 className={classes.step}>
                    <span className={classes.span}>
                      {Questions[0].answer.step3.step}
                    </span>
                    {Questions[0].answer.step3.text}
                  </h5>
                  <h5 className={classes.step}>
                    <span className={classes.span}>
                      {Questions[0].answer.step4.step}
                    </span>
                    {Questions[0].answer.step4.text}
                  </h5>
                </div>
                <p className={classes.footer}>{Questions[0].answer.footer}</p>
              </div>
            )}
          </div>

          <div className={classes.question}>
            <h6
              onClick={clickHandler}
              id={Questions[1].id}
              className={classes.quest2}
            >
              {Questions[1].question}
              <img
                alt="carret"
                className={classes.svg}
                src={showSecond ? up : down}
              ></img>
            </h6>
            {showSecond && (
              <p className={classes.answer}>{Questions[1].answer}</p>
            )}
          </div>
          <div className={classes.question}>
            <h6
              onClick={clickHandler}
              id={Questions[2].id}
              className={classes.quest3}
            >
              {Questions[2].question}
              <img
                alt="carret"
                className={classes.svg}
                src={showThird ? up : down}
              ></img>
            </h6>
            {showThird && (
              <p className={classes.answer}>{Questions[2].answer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;