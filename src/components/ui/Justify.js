import styled from "styled-components"

const JustifiedDiv = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`

const Justify = (props) => {

  const extraClasses = props.className ? props.className : "";

  return <JustifiedDiv className={extraClasses}>{props.children}</JustifiedDiv>
}

export default Justify;