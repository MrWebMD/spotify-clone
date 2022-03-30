import SidePanel from "./SidePanel";
import WindowControls from "./WindowControls";
import classes from "./ActivityPanel.module.css";
import Justify from "../ui/Justify";
import LargeButton from '../ui/inputs/LargeButton';
import userPlaceHolder from "../../assets/images/user-placeholder.png";
const ActivityPanel = (props) => {
  return (
    <SidePanel className={classes.activityPanel}>
      <WindowControls />
      <Justify className={classes.header}>
        <h4>Friend Activity</h4>
        <i className="fas fa-user-plus"></i>
      </Justify>
      <p>Let friends and followers on Spotify see what you're listening to.</p>
      <img src={userPlaceHolder} alt="User placeholder"></img>
      <img src={userPlaceHolder} alt="User placeholder"></img>
      <img src={userPlaceHolder} alt="User placeholder"></img>

      <p>
        Go to Settings &gt; Social and enable 'Share my listening activity on
        Spotify.' You can turn this off at any time
      </p>
      <LargeButton>Settings</LargeButton>
    </SidePanel>
  );
};

export default ActivityPanel;
