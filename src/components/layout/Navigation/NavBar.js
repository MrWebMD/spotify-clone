import classes from "./NavBar.module.css";
import Button from "../../ui/inputs/Button";
const NavBar = (props) => {
  return (
    <div className={classes.navBar}>
      <div className={classes.historyButtonContainer}>
        <div className={classes.historyButton}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className={classes.historyButton}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={classes.navContent}>
        {props.children}
      </div>
      <div className={classes.navOptions}>
        <Button>UPGRADE</Button>
      </div>
    </div>
  );
};

export default NavBar;
