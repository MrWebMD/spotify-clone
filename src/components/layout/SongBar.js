import Slider from "../ui/inputs/Slider";
import classes from "./SongBar.module.css";

const SongBar = (props) => {
  return (
    <div className={classes.songBar}>
      <section className={classes.currentSong}>
        <div></div>
        <div>
          <h5>Firework</h5>
          <p>Katy Perry</p>
        </div>
        <div>
          <i className="far fa-heart"></i>
        </div>
      </section>
      <section className={classes.controls}>
        <div>
          <i className="fas fa-random"></i>
          <i className="fas fa-step-backward"></i>
          <span>
            {/* <i className="far fa-play-circle"></i> */}
            <i className="far fa-pause-circle"></i>
          </span>
          <i className="fas fa-step-forward"></i>
          <i className="fas fa-redo"></i>
        </div>
        <div>
          <span>1:42</span>
          <Slider />
          <span>3:57</span>

        </div>
      </section>
      <section className={classes.extraOptions}>
        <i className="fas fa-microphone-alt"></i>
        <i className="fas fa-stopwatch"></i>
        <i className="fab fa-chromecast"></i>
        <i className="fas fa-volume-up"></i>
        <Slider />
      </section>
    </div>
  );
};

export default SongBar;
