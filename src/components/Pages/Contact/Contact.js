import classes from "./Contact.module.css";
import facebook from "../../../assets/icons/social/facebook.svg";
import instagram from "../../../assets/icons/social/instagram.svg";
import phone from "../../../assets/icons/social/phone.svg";
import gmail from "../../../assets/icons/social/gmail.svg";
import Leaflet from "../../Map/Leaflet";
import marker from "../../../assets/icons/marker.png";

const Contact = () => {
  return (
    <div className={classes.main}>
            <h2 className={classes.header}>კონტაქტი</h2>
      <div className={classes.contact}>
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
                <a href="mailto:ltd.nueva@gmail.com" target="blank">
                  <img
                    className={classes.socialIcon}
                    src={gmail}
                    alt="gmail"
                  ></img>
                  <h4>Nueva@gmail.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="tel:+995593065588" target="blank">
                  <img
                    className={classes.socialIcon}
                    src={phone}
                    alt="phone"
                  ></img>
                  <h4> (+995) 593 065 588</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="tel:+995431230367," target="blank">
                  <img
                    className={classes.socialIcon}
                    src={phone}
                    alt="phone"
                  ></img>
                  <h4> (+995) 431 230 367</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.address}>
          <div className={classes.addressName}> <h4 className={classes.head}>მისამართი:</h4>
            <h4 className={classes.street}>4600 ქუთაისი, აკ. წერეთლის N67</h4></div>
           
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
    
    </div>
  );
};

export default Contact;
