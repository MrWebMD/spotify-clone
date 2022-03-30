import styled from "styled-components";
import Card from "./Card";
import classes from './ArtistSlip.module.css';
const ArtistSlip = (props) => {
  return (
    <Card basis={33} className={classes.slip}>
      <div className={classes.artistImage}></div>
      <h3>Artist Name</h3>
    </Card>
  );
};

export default ArtistSlip;
