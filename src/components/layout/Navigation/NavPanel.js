import SidePanel from "../SidePanel";
import Ellipsis from "../../ui/icons/Ellipsis";
import classes from "./NavPanel.module.css";
import NavList from "./NavList";
import NavItem from "./NavItem";
import Divider from "../../ui/Divider";
const NavPanel = (props) => {
  return (
    <SidePanel className={classes.navWrapper}>
      <Ellipsis />
      <NavList>
        <NavItem icon={<i className="fas fa-home"></i>} to="/">Home</NavItem>
        <NavItem icon={<i className="fas fa-search"></i>} to="/search">Search</NavItem>
        <NavItem icon={<i className="fas fa-book"></i>} to="/library">Library</NavItem>
        <br/>
        <NavItem icon={<i className="fas fa-plus-square"></i>} to="/create-playlist">Create Playlist</NavItem>
        <NavItem icon={<i className="fas fa-heart"></i>} to="/favorites">Liked Songs</NavItem>
        <Divider/>
        <p>My Playlist #1</p>
        
      </NavList>
    </SidePanel>
  );
};

export default NavPanel;
