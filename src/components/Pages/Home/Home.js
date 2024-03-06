import classes from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";
import Slider from "./Slider/Slider";
const Home = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.slider}>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
