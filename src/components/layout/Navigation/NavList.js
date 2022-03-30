import styled from "styled-components";

const List = styled.ul`
  list-style-type:none;
  text-decoration:none;
  padding:0;
  margin-top:30px;
`

const NavList = (props) => {
  return <List>{props.children}</List>
}

export default NavList;