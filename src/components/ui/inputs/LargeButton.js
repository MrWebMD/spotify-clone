import styled from "styled-components";

const ButtonLarge = styled.button`
  background-color:white;
  color:black;
  font-weight:600;
  padding:20px 50px 20px 50px;
  border-radius:30px;
  text-transform: uppercase;
  letter-spacing:3px;
  margin:10px 0px 10px 0px;
`

const LargeButton = (props) => {
  return <ButtonLarge>{props.children}</ButtonLarge>
}

export default LargeButton;