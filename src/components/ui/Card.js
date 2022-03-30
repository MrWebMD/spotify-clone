import styled from "styled-components";

const CardWrapper = styled.div`
  flex: 0 0;
  flex-basis: ${(props) => props.basis}%;
  min-width: 200px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const CardContent = styled.div`
  background-color: #110f0f;
  border-radius: 5px;
  overflow:hidden;
  flex: 1 0 auto;
`;
const CardPadding = styled.div`
  flex: 1 0 auto;
  padding:10px;
`;
const Card = (props) => {
  return (
    <CardWrapper basis={props.basis}>
      <CardPadding>
        <CardContent className={props.className}>{props.children}</CardContent>
      </CardPadding>
    </CardWrapper>
  );
};

export default Card;
