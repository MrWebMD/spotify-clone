import styled from 'styled-components';

const Panel = styled.div`
  flex: 0 0 240px;
  background-color:black;
  padding:20px;
  overflow-y:scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const SidePanel = (props) => {

  const extraClasses = props.className ? props.className : "";
  
  return <Panel className={extraClasses}>
    {props.children}
  </Panel>
}



export default SidePanel;