import classes from "./Layout.module.css";
import SongBar from "./SongBar";
import NavPanel from "./Navigation/NavPanel";
import ActivityPanel from "./ActivityPanel";
import bannerAdImage from "../../assets/images/bannerAd.png";
import BannerAd from '../ui/BannerAd';
import {useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={classes.layoutWrapper}>
      <div className={classes.layoutBody}>
        <NavPanel />
        <main>
          {props.children}
          {location.pathname !== "/" && <BannerAd src={bannerAdImage} topBorder/>}
        </main>
        <ActivityPanel />
      </div>
      <SongBar></SongBar>
    </div>
  );
};

export default Layout;
