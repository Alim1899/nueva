import classes from "./Home.module.css";
import Slider from "./Slider/Slider";
import FAQ from "./FAQ/FAQ";
const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.slider}>
          <Slider />
        </div>
        <FAQ/>
      </div>
    </div>
  );
};

export default Home;
