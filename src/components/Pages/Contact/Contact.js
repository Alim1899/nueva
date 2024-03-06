import classes from "./Contact.module.css";
import Navbar from "../../Navbar/Navbar";
const Contact = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.contact}>
        <h2 className={classes.header}>საკონტაქტო ინფორმაცია</h2>
        <div className={classes.content}>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
