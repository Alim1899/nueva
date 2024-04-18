import { Questions } from "./Quiestions";
import classes from "./FAQ.module.css";
import up from "../../../../assets/icons/up.svg";
import down from "../../../../assets/icons/down.svg";
import { useState } from "react";

const FAQ = () => {
  const [expandedView,setExpandedView] = useState(false);
  console.log(Questions);
  const clickHandler = (e) => {
    if(e.target.id==="quest")return;
    console.log(e.target.id);
    const target = e.target.parentNode.parentNode.childNodes[1];
    const carret = e.target.parentNode.childNodes[1];

      target.style.display === "block"
      ? (target.style.display = "none")
      : (target.style.display = "block");
    setExpandedView(!expandedView);
    if(expandedView)carret.src=down;
    else carret.src=up;

    
  };
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.faq}>
          <h2 className={classes.contentHeader}>
            ხშირად დასმული კითხვები
            <span className={classes.allQuest}>ყველა კითხვა</span>
          </h2>

          {Questions.map((el) => {
            return (
              <div key={el.key} className={classes.question}>
                <div
                  className={classes.quest}
                  id="quest"
                  onClick={clickHandler}
                >
                  <h6 id="question">{el.question}</h6>
                  <img
                    alt="carret"
                    className={classes.svg}
                    id="carret"
                    src={down}
                  ></img>
                </div>

                <div className={classes.answer} style={{ display: "none" }}>
                  <p>{el.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// if (e.target.id === "1") {
//   setTimeout(() => {
//     setShowFirst(!showFirst);
//     setShowSecond(false);
//     setShowThird(false);
//   }, 200);
// } else if (e.target.id === "2") {
//   setTimeout(() => {
//     setShowSecond(!showSecond);
//     setShowFirst(false);
//     setShowThird(false);
//   }, 200);
// } else if (e.target.id === "3") {
//   setTimeout(() => {
//     setShowThird(!showThird);
//     setShowSecond(false);
//     setShowFirst(false);
//   }, 200);
// }
