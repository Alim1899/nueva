import classes from "./Gallery.module.css";
import img1 from "../../../assets/photos/gallery/1.jpg"
import img2 from "../../../assets/photos/gallery/2.jpg"
import img3 from "../../../assets/photos/gallery/3.jpg"
import img4 from "../../../assets/photos/gallery/4.jpg"
import img5 from "../../../assets/photos/gallery/5.jpg"
import img6 from "../../../assets/photos/gallery/6.jpg"
import img7 from "../../../assets/photos/gallery/7.jpg"
import img8 from "../../../assets/photos/gallery/8.jpg"
import img9 from "../../../assets/photos/gallery/9.jpg"
import img10 from "../../../assets/photos/gallery/10.jpg"
import img11 from "../../../assets/photos/gallery/11.jpg"
import img12 from "../../../assets/photos/gallery/12.jpg"
import { useTranslation } from "react-i18next";
const Gallery = () => {
  const {t}= useTranslation();
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{t("galleryPage.header")}</h2>
      <div className={classes.photos}>
        <img alt="img" className={classes.img} src={img1}></img>
        <img alt="img" className={classes.img} src={img2}></img>
        <img alt="img" className={classes.img} src={img3}></img>
        <img alt="img" className={classes.img} src={img4}></img>
        <img alt="img" className={classes.img} src={img5}></img>
        <img alt="img" className={classes.img} src={img6}></img>
        <img alt="img" className={classes.img} src={img7}></img>
        <img alt="img" className={classes.img} src={img8}></img>
        <img alt="img" className={classes.img} src={img9}></img>
        <img alt="img" className={classes.img} src={img10}></img>
        <img alt="img" className={classes.img} src={img11}></img>
        <img alt="img" className={classes.img} src={img12}></img>
      </div>
    </div>
  );
};

export default Gallery;
