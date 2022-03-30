import styled from "styled-components";

const BannerAd = styled.div`
  flex: 0 1 auto;
  display: flex;
  height: ${props => props.contentBlock ? "280px" : "150px"};;
  width: 100%;
  border-top: ${(props) => props.topBorder ? "1px solid grey" : "none"};
  align-items: center;
  cursor:pointer;
  justify-content: center;
  background-size: ${props => props.responsive ? "contain" : "auto"};
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
`;

export default BannerAd;