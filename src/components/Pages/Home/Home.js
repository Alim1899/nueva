import classes from "./Home.module.css";
import Navbar from "../../Navbar/Navbar";
import Slider from "./Slider/Slider";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Home;
