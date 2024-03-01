import classes from "./Projects.module.css";
import Navbar from "../../Navbar/Navbar";
import img from "./img.jpg";
import locate from "./location.svg";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.content}>
      <h1 className={classes.header}>ჩვენს მიერ შესრულებული პროექტები</h1>

        <div className={classes.projects}>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          <div className={classes.project}>
            <img alt="img" className={classes.contentImg} src={img}></img>
            <h3 className={classes.projectHeader}>ნენსკრაჰესი - რისკების კვლევა</h3>
            <div className={classes.location}>
              <img alt="icon" className={classes.icon} src={locate}></img>
              <h5>სვანეთი, მესტია</h5>
            </div>
            <button type="button" className={classes.moreBtn}>
              სრულად
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
