import classes from './Slider.module.css';

const Slider = (props) => {
  
  return <div className={classes.slidecontainer}>
  <input type="range" min="1" max="100" className={classes.slider} id="myRange"/>
</div>

}

export default Slider;