import classes from "./Gallery.module.css";
import img from "../../../assets/photos/lazy.jpg";
import img1 from "../../../assets/photos/scr1.png";
import img2 from "../../../assets/photos/scr2.png";
import img3 from "../../../assets/photos/scr3.png";

const Gallery = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>გალერეა</h2>
      <div className={classes.photos}>
        <img alt="img" className={classes.img} src={img}></img>
        <img alt="img" className={classes.img} src={img1}></img>
        <img alt="img" className={classes.img} src={img2}></img>
        <img alt="img" className={classes.img} src={img3}></img>
        <img alt="img" className={classes.img} src={img}></img>
        <img alt="img" className={classes.img} src={img1}></img>
        <img alt="img" className={classes.img} src={img2}></img>
        <img alt="img" className={classes.img} src={img3}></img>
        <img alt="img" className={classes.img} src={img}></img>
        <img alt="img" className={classes.img} src={img1}></img>
        <img alt="img" className={classes.img} src={img2}></img>
        <img alt="img" className={classes.img} src={img3}></img>
      </div>
    </div>
  );
};

export default Gallery;
