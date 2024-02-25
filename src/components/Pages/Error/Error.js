import classes from "./Error.module.css";
import Navbar from "../../Navbar/Navbar";
const Error = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.error}>
        <h1>ERROR PAGE</h1>
      </div>
    </div>
  );
};

export default Error;
