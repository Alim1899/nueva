import classes from "./Services.module.css";
import Navbar from "../../Navbar/Navbar";
import cadastro from "../../../assets/icons/services/cadastro.svg";
import geology from "../../../assets/icons/services/geology.svg";
import inside from "../../../assets/icons/services/inside.svg";
import separate from "../../../assets/icons/services/separate.svg";
import topo from "../../../assets/icons/services/topo.svg";
import trace from "../../../assets/icons/services/trace.svg";
const Services = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.services}>
      <h2 className={classes.heading}>სერვისების ჩამონათვალი</h2>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="trace" src={trace}></img>
            <h4 className={classes.type}>დაკვალვა</h4>
          
          </li>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="topo" src={topo}></img>
            <h4 className={classes.type}>ტოპოგრაფია</h4>
          
          </li>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="cadastro" src={cadastro}></img>
            <h4 className={classes.type}>კადასტრი</h4>
          
          </li>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="inside" src={inside}></img>
            <h4 className={classes.type}>შიდა აზომვა</h4>
          
          </li>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="geology" src={geology}></img>
            <h4 className={classes.type}>გეოლოგიური კვლევა</h4>
          
          </li>
          <li className={classes.listItem}>
            <img className={classes.icon} alt="separate" src={separate}></img>
            <h4 className={classes.type}>გამიჯვნა-გაერთიანება</h4>
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
