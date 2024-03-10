import classes from "./Error.module.css";
import Navbar from "../../Navbar/Navbar";
const Error = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
      <div className={classes.errors}>
      <h1>დაფიქსირდა შეცდომა!</h1>
        <button className={classes.button} type="button">
         <a href="/">მთავარ გვერდზე დაბრუნება</a> 
        </button>
      </div>
        
      </div>
    </div>
  );
};

export default Error;
