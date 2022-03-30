import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  line-height: 10px;
  transition: color 0.2s ease-in-out 0s;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Icon = styled.span`
  font-size: 20px;
  margin-right: 15px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;

const NavItem = (props) => {

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(props.to);
  };
  return (
    <Item onClick={clickHandler}>
      <Icon>{props.icon}</Icon>
      <p>{props.children}</p>
    </Item>
  );
};

export default NavItem;
