import classes from "./FAQ.module.css";
import up from "../../../../assets/icons/services/up.svg";
import down from "../../../../assets/icons/services/down.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedView, setExpandedView] = useState(false);
  const clickHandler = (e) => {
    if (e.target.id === "quest") return;
    console.log(e.target.id);
    const target = e.target.parentNode.parentNode.childNodes[1];
    const carret = e.target.parentNode.childNodes[1];

    target.style.display === "block"
      ? (target.style.display = "none")
      : (target.style.display = "block");
    setExpandedView(!expandedView);
    if (expandedView) carret.src = down;
    else carret.src = up;
  };
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.faq}>
          <h1 className={classes.contentHeader}>{t("homePage.faq.header")}</h1>

          <div className={classes.question}>
            <div className={classes.quest} id="quest" onClick={clickHandler}>
              <h6 id="question">{t("homePage.faq.questions.quest1")}</h6>
              <img
                alt="carret"
                className={classes.svg}
                id="carret"
                src={down}
              ></img>
            </div>

            <div className={classes.answer} style={{ display: "none" }}>
              <p>{t("homePage.faq.questions.answer1")}</p>
            </div>
          </div>
          <div className={classes.question}>
            <div className={classes.quest} id="quest" onClick={clickHandler}>
              <h6 id="question">{t("homePage.faq.questions.quest2")}</h6>
              <img
                alt="carret"
                className={classes.svg}
                id="carret"
                src={down}
              ></img>
            </div>

            <div className={classes.answer} style={{ display: "none" }}>
              <p>{t("homePage.faq.questions.answer2")}</p>
            </div>
          </div>
          <div className={classes.question}>
            <div className={classes.quest} id="quest" onClick={clickHandler}>
              <h6 id="question">{t("homePage.faq.questions.quest3")}</h6>
              <img
                alt="carret"
                className={classes.svg}
                id="carret"
                src={down}
              ></img>
            </div>

            <div className={classes.answer} style={{ display: "none" }}>
              <p>{t("homePage.faq.questions.answer3")}</p>
            </div>
          </div>
          <div className={classes.question}>
            <div className={classes.quest} id="quest" onClick={clickHandler}>
              <h6 id="question">{t("homePage.faq.questions.quest4")}</h6>
              <img
                alt="carret"
                className={classes.svg}
                id="carret"
                src={down}
              ></img>
            </div>

            <div className={classes.answer} style={{ display: "none" }}>
              <p>{t("homePage.faq.questions.answer4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
