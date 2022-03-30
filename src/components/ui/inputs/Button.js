import styled from "styled-components";

const ButtonRegular = styled.button`
  background-color:rgba(0,0,0,0.6);
  color:white;
  font-weight:600;
  padding:10px 30px 10px 30px;
  border: 1px solid white;
  border-radius:30px;
  text-transform: uppercase;
  letter-spacing:3px;
  margin:10px 0px 10px 0px;
  font-size:12px;
`

const Button = (props) => {
  return <ButtonRegular>{props.children}</ButtonRegular>
}

export default Button;