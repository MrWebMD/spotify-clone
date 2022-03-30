import styled from "styled-components";
import Card from "./Card";
import classes from './InfoCard.module.css';
import stiffImage from '../../assets/images/stiff-placeholder.png';
const CardImage = styled.div`
  width:100%;
  padding-bottom:100%;
  background-image:url(${stiffImage});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  margin-bottom:25px;
`
const InfoCard = (props) => {
  return (
    <Card basis={25} className={classes.infoCard}>
      <CardImage></CardImage>
      <h3>Song Title</h3>
      <p>Beyonce</p>
    </Card>
  );
};

export default InfoCard;
