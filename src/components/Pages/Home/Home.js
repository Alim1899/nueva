import classes from "./Home.module.css";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
