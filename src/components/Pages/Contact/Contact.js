import classes from "./Contact.module.css";
import Navbar from "../../Navbar/Navbar";
import facebook from "../../../assets/icons/social/facebook.svg";
import instagram from "../../../assets/icons/social/instagram.svg";
import phone from "../../../assets/icons/social/phone.svg";
import gmail from "../../../assets/icons/social/gmail.svg";
import Leaflet from "../../Map/Leaflet";
import Footer from "../Footer/Footer";
import marker from "../../../assets/icons/marker.png";

const Contact = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.contact}>
        <h2 className={classes.header}>საკონტაქტო ინფორმაცია</h2>
        <div className={classes.content}>
        
          <div className={classes.social}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a
                  target="blank"
                  href="https://www.facebook.com/nika.kapanadze.9085"
                >
                  <img
                    className={classes.socialIcon}
                    src={facebook}
                    alt="facebook"
                  ></img>
                  <h4>Facebook.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href="https://www.instagram.com/nikoloz_kapn/"
                  target="blank"
                >
                  <img
                    className={classes.socialIcon}
                    src={instagram}
                    alt="instagram"
                  ></img>
                  <h4>Instagram.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="mailto:nueva@gmail.com" target="blank">
                  <img
                    className={classes.socialIcon}
                    src={gmail}
                    alt="gmail"
                  ></img>
                  <h4>Nueva@gmail.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="tel:555 100 200" target="blank">
                  <img
                    className={classes.socialIcon}
                    src={phone}
                    alt="phone"
                  ></img>
                  <h4> 555 100 200</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.address}>
          <div className={classes.addressName}> <h4 className={classes.head}>მისამართი:</h4>
            <h4 className={classes.adres}>ქუთაისი, 9 აპრილის ქუჩა: 133</h4></div>
           
            <div className={classes.map}>
              {" "}
              <Leaflet
                popup="ნენსკრა"
                center={[42.259061, 42.66614]}
                zoom={15}
                icon={marker}
                marker={[42.259061, 42.66614]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
      <Footer/>
      </div>
    </div>
  );
};

export default Contact;
